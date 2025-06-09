import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectItem, SelectTrigger, SelectContent, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";

import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

// Import the new confirmation component
import BookingConfirmation from "@/components/BookingConfirmation"; // Adjust path as needed

// Helper function to compare dates without time for modifier
// Place this outside the component function
function isSameDay(d1, d2) {
    if (!(d1 instanceof Date) || !(d2 instanceof Date)) {
        return false; // Handle non-Date inputs gracefully
    }
    return d1.getFullYear() === d2.getFullYear() &&
           d1.getMonth() === d2.getMonth() &&
           d1.getDate() === d2.getDate();
}

// Define your form schema for validation
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string()
    .transform((val) => val.replace(/\D/g, '')) // Remove all non-digit characters
    .refine((val) => val.length >= 10, {
      message: "Phone number must contain at least 10 digits.",
    }),
  serviceType: z.string().nonempty({ message: "Please select a service type." }),
  time: z.string().nonempty({ message: "Please select a time slot." }),
  notes: z.string().optional(),
  appointmentDate: z.date({ // Zod expects a Date object here
    required_error: "An appointment date is required.",
    invalid_type_error: "Please select a valid date." // More specific error for date type issues
  }),
});

function AppointmentPage() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      serviceType: "",
      time: "",
      notes: "",
      appointmentDate: undefined, // Initialize as undefined if no date is pre-selected
    },
  });

  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [activeCalendarSelection, setActiveCalendarSelection] = useState(undefined); // 'black box' selection
  const [previouslyChosenDate, setPreviouslyChosenDate] = useState(undefined); // 'gray box' target

  // New state for handling submission success
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingDetails, setBookingDetails] = useState(null); // To store and pass booking info

  const handleCalendarSelect = (date) => {
    console.log("Calendar date selected:", date, "Type:", typeof date, "Is Date instance:", date instanceof Date);
    setActiveCalendarSelection(date);
  };

  const onSubmit = async (data) => {
    console.log("--- onSubmit triggered ---");
    console.log("Form data before submission:", data);
    console.log("Current form values (via getValues):", form.getValues());
    console.log("Form state errors BEFORE async operations:", form.formState.errors);

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // After async operation, it's good practice to re-trigger validation
    // to get the latest state, though handleSubmit does an initial trigger.
    const isValid = await form.trigger(); // This forces re-validation of all fields

    console.log("Form is valid after submission attempt:", isValid);
    console.log("Form state errors AFTER submission attempt:", form.formState.errors);

    if (isValid) {
      setBookingDetails(data); // Save the valid data
      setIsSubmitted(true);    // Set submission state to true
      console.log("Booking confirmed for:", data);
    } else {
      console.log("Form submission failed due to validation errors. Check errors object above.");
    }
    console.log("--- onSubmit finished ---");
  };

  const handleCancel = () => {
    // Revert activeCalendarSelection to the last committed form value
    const currentFormDate = form.getValues('appointmentDate');
    setActiveCalendarSelection(currentFormDate instanceof Date ? currentFormDate : undefined);
    console.log("Cancel clicked. Reverted activeCalendarSelection to:", currentFormDate);
    setIsPopoverOpen(false);
  };

  const handleOk = () => {
    console.log("OK clicked. activeCalendarSelection:", activeCalendarSelection, "Type:", typeof activeCalendarSelection, "Is Date instance:", activeCalendarSelection instanceof Date);

    // Ensure activeCalendarSelection is a valid Date object before setting
    if (activeCalendarSelection instanceof Date) {
        form.setValue("appointmentDate", activeCalendarSelection, { shouldValidate: true }); // Also validate immediately
        console.log("Set appointmentDate to:", form.getValues('appointmentDate'));
    } else {
        // If it's not a Date object (e.g., null or undefined), set it explicitly to undefined
        form.setValue("appointmentDate", undefined, { shouldValidate: true });
        console.warn("activeCalendarSelection was not a Date object when OK was clicked. Setting appointmentDate to undefined.");
    }
    form.trigger("appointmentDate"); // Manually trigger validation for the date field
    console.log("Date field errors after OK click (form.trigger):", form.formState.errors.appointmentDate);
    setIsPopoverOpen(false);
  };

  // Conditionally render the confirmation screen or the form
  if (isSubmitted) {
    return <BookingConfirmation bookingDetails={bookingDetails} />;
  }

  return (
    <div className="flex justify-center items-start min-h-screen bg-slate-600 p-8">
      {/* Form container */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 bg-[#2A3439] p-6 rounded-lg w-full max-w-md text-white">

          {/* Date Picker - Integrated into FormField */}
          <FormField
            control={form.control}
            name="appointmentDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Date</FormLabel>
                <Popover
                  open={isPopoverOpen}
                  onOpenChange={(open) => {
                    if (!open) {
                      // Popover closing: Revert activeCalendarSelection to form's current value
                      const currentFormDate = field.value;
                      setActiveCalendarSelection(currentFormDate instanceof Date ? currentFormDate : undefined);
                      setPreviouslyChosenDate(currentFormDate instanceof Date ? currentFormDate : undefined); // Revert gray box target too
                      console.log("Popover closing. Reverting active/previous selection to:", currentFormDate);
                    } else {
                      // Popover opening: Initialize active/previous selections from form's current value
                      const currentFormDate = field.value;
                      setActiveCalendarSelection(currentFormDate instanceof Date ? currentFormDate : undefined);
                      setPreviouslyChosenDate(currentFormDate instanceof Date ? currentFormDate : undefined);
                      console.log("Popover opening. Initializing active/previous selection to:", currentFormDate);
                    }
                    setIsPopoverOpen(open);
                  }}
                >
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal bg-white text-black font-lato",
                          !field.value && "text-muted-foreground"
                        )}
                        // This onClick primarily triggers the popover to open.
                        // The onOpenChange handler handles state initialization.
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {field.value ? (
                          format(field.value, "MM/dd/yyyy")
                        ) : (
                          <span>Pick a date</span>
                        )}
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-white" align="start">
                    <Calendar
                      mode="single"
                      selected={activeCalendarSelection}
                      onSelect={handleCalendarSelect}
                      disabled={(date) =>
                        date < new Date(new Date().setHours(0, 0, 0, 0))
                      }
                      initialFocus

                      // Custom Modifiers for the "gray box" (previously chosen date)
                      modifiers={{
                        previousSelected: previouslyChosenDate,
                      }}
                      classNames={{
                        day_previousSelected: "border border-gray-400 rounded-full",
                      }}
                    />
                    <div className="flex justify-end p-2 bg-gray-100 border-t">
                      <Button variant="ghost" onClick={handleCancel} className="mr-2">
                        Cancel
                      </Button>
                      <Button onClick={handleOk}>
                        OK
                      </Button>
                    </div>
                  </PopoverContent>
                </Popover>
                {/* Display specific error message for appointmentDate field */}
                {form.formState.errors.appointmentDate && (
                    <FormMessage>{form.formState.errors.appointmentDate.message}</FormMessage>
                )}
                <span className="text-sm text-gray-400 font-lato">MM/DD/YYYY</span>
              </FormItem>
            )}
          />

          {/* Name Field */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} className="bg-white text-black font-lato"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email Field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="john@example.com" {...field} className="bg-white text-black font-lato"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Phone Field */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="(555) 123-4567" {...field} className="bg-white text-black font-lato"/>
                </FormControl>
                {/* Display specific error message for phone field */}
                {form.formState.errors.phone && (
                    <FormMessage>{form.formState.errors.phone.message}</FormMessage>
                )}
              </FormItem>
            )}
          />

          {/* Service Type Field */}
          <FormField
            control={form.control}
            name="serviceType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Service Type</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-white text-black font-lato">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-white text-black font-lato">
                    <SelectItem value="tuneup">Tune-Up</SelectItem>
                    <SelectItem value="repair">Repair</SelectItem>
                    <SelectItem value="custom">Custom Build</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Time Field */}
          <FormField
            control={form.control}
            name="time"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Time</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-white text-black font-lato">
                      <SelectValue placeholder="Pick a time slot" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-white text-black font-lato">
                    <SelectItem value="9am">9:00 AM</SelectItem>
                    <SelectItem value="11am">11:00 AM</SelectItem>
                    <SelectItem value="1pm">1:00 PM</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Notes Field */}
          <FormField
            control={form.control}
            name="notes"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Notes</FormLabel>
                <FormControl>
                  <Textarea placeholder="Extra info..." {...field} className="bg-white text-black font-lato"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-josefin font-extrabold py-2 px-4 rounded"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default AppointmentPage;