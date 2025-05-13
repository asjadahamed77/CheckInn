"use client";
import { z } from "zod";

import React from "react";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { BedDoubleIcon } from "lucide-react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { format } from "date-fns";
import { CalendarIcon } from "@heroicons/react/20/solid";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";

const formSchema = z.object({
  location: z.string().min(2, "Must be 2 characters or more").max(50),
  dates: z.object({
    from: z.date(),
    to: z.date(),
  }),
  adults: z
    .string()
    .min(1, {
      message: "Please enter atleast 1 adult",
    })
    .max(12, {
      message: "Max 12 adults occupancy",
    }),
  children: z.string().min(0).max(12, {
    message: "Max 12 children occupancy",
  }),
  rooms: z.string().min(1, {
    message: "Please select atleast 1 room",
  }),
});

function SearchForm() {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      location: "",
      dates: {
        from: undefined,
        to: undefined,
      },
      adults: "1",
      children: "0",
      rooms: "1",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col lg:flex-row lg:max-w-6xl lg:mx-auto items-center justify-center space-x-0 lg:space-x-2 space-y-4 lg:space-y-0 rounded-lg "
      >
        <div className="grid w-full lg:max-w-sm items-center  gap-1.5">
          <FormField 
          control={form.control}
          name="location"
        
            render={({ field }) => (
                <FormItem className="w-full">
                <FormLabel className="text-white flex">Location <BedDoubleIcon className="ml-2 h-4 w-4 text-white" /> </FormLabel>
                <FormMessage />
                <FormControl>
                    <Input placeholder="Where are you going?" {...field} className="bg-white text-mainGreen " />
                </FormControl>
                </FormItem>
            )}
          />
        </div>
        <div className="grid w-full lg:max-w-sm items-center flex-1 gap-1.5">
            <FormField
            control={form.control}
            name="dates"
            render={({ field }) => (
                <FormItem className="flex flex-col">
                    <FormLabel className="text-white">
                        Dates
                    </FormLabel>
                    <FormMessage />
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                id="date"
                                name="dates"
                                variant={"outline"}
                                className={cn(
                                "w-full lg:w-[300px] justify-start text-left text-mainGreen font-normal",
                                !field.value.from && "text-muted-foreground"
                                )}
                            >
                                <CalendarIcon className="mr-3 h-4 w-4 opacity-50" />
                                {field.value?.from ? (
                                field.value.to ? (
                                    <>
                                    {format(field.value.from, "LLL dd, y")} -{" "}
                                    {format(field.value.to, "LLL dd, y")}
                                    </>
                                ) : (
                                    format(field.value.from, "LLL dd, y")
                                )
                                ) : (
                                <span>Select your dates</span>
                                )}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                                initialFocus
                                mode="range"
                                defaultMonth={field.value?.from}
                                selected={{
                                    from: field.value?.from,
                                    to: field.value?.to,
                                }}
                                onSelect={field.onChange}
                                numberOfMonths={2}
                            />
                        </PopoverContent>
                    </Popover>
                </FormItem>
            )}
            />
        </div>

        <div className="flex w-full items-center space-x-2">
            <div className="grid items-center ">
            <FormField 
          control={form.control}
          name="adults"
            render={({ field }) => (
                <FormItem className="flex flex-col">
                <FormLabel className="text-white ">Adults</FormLabel>
                <FormMessage />
                <FormControl>
                    <Input type="number"  {...field} placeholder="Adults" className="bg-white text-mainGreen" />
                </FormControl>
                </FormItem>
            )}
          />
            </div>
            <div className="flex w-full items-center space-x-2">
            <div className="grid items-center flex-1">
            <FormField 
          control={form.control}
          name="children"
            render={({ field }) => (
                <FormItem className="flex flex-col">
                <FormLabel className="text-white ">Children</FormLabel>
                <FormMessage />
                <FormControl>
                    <Input type="number"  {...field} placeholder="Children" className="bg-white text-mainGreen" />
                </FormControl>
                </FormItem>
            )}
          />
            </div>
        </div>

        <div className="flex w-full items-center space-x-2">
            <div className="grid items-center flex-1">
            <FormField 
          control={form.control}
          name="rooms"
            render={({ field }) => (
                <FormItem className="flex flex-col">
                <FormLabel className="text-white ">Rooms</FormLabel>
                <FormMessage />
                <FormControl>
                    <Input type="number"  {...field} placeholder="Rooms" className="bg-white text-mainGreen" />
                </FormControl>
                </FormItem>
            )}
          />
            </div>
            <div className="mt-auto">
            <Button type="submit" className="bg-mainGreen text-base cursor-pointer text-white hover:bg-mainGreen/80">
              Search
            </Button>
            </div>
        </div>
        
        </div>

       
      </form>
    </Form>
  );
}

export default SearchForm;