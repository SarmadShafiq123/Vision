"use client";

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

export function TextField({ name, label, placeholder, type = "text", autoComplete }) {
  return (
    <FormField
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              type={type}
              placeholder={placeholder}
              autoComplete={autoComplete}
              aria-describedby={`${name}-error`}
              {...field}
            />
          </FormControl>
          <FormMessage id={`${name}-error`} />
        </FormItem>
      )}
    />
  );
}

export function TextAreaField({ name, label, placeholder, rows = 4 }) {
  return (
    <FormField
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Textarea
              placeholder={placeholder}
              rows={rows}
              aria-describedby={`${name}-error`}
              {...field}
            />
          </FormControl>
          <FormMessage id={`${name}-error`} />
        </FormItem>
      )}
    />
  );
}

export function SelectField({ name, label, placeholder, options }) {
  return (
    <FormField
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <Select onValueChange={field.onChange} value={field.value}>
            <FormControl>
              <SelectTrigger
                aria-describedby={`${name}-error`}
                className={cn("h-11")}
              >
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage id={`${name}-error`} />
        </FormItem>
      )}
    />
  );
}

export function HoneypotField({ register, name }) {
  return (
    <div className="sr-only" aria-hidden="true">
      <label htmlFor={name}>Company</label>
      <input
        id={name}
        type="text"
        tabIndex={-1}
        autoComplete="off"
        {...register(name)}
      />
    </div>
  );
}
