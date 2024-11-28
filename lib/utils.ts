import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { format } from "date-fns"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatEventDate(date: string) {
  return format(new Date(date), 'MMM dd, yyyy')
}

export function formatEventTime(time: string) {
  return format(new Date(`2000-01-01T${time}`), 'h:mm a')
}
