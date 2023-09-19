import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...arg: ClassValue[]) => {
  return twMerge(clsx(...arg));
};
