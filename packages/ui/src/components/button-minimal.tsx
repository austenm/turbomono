import * as React from "react";
import { Button } from "./base/button";
import { cn } from "../lib/utils";

// type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
//   variant?: "primary" | "outline";
// };

export function MinimalButton({
  className,
  children
}: { className?: string, children: any }) {
  // const base =
  //   "ui:inline-flex ui:items-center ui:justify-center ui:rounded-lg ui:text-sm ui:font-medium ui:transition-colors ui:focus-visible:outline-none ui:focus-visible:ring-2 ui:focus-visible:ring-offset-2 ui:h-9 ui:px-4 ui:hover:cursor-pointer";
  // const variants = {
  //   primary: "ui:bg-black ui:hover:bg-neutral-800/90 ui:focus-visible:ring-black",
  //   outline:
  //     "ui:border ui:border-neutral-300 ui:bg-white ui:text-neutral-900 ui:hover:bg-neutral-300 ui:focus-visible:ring-neutral-400"
  // } as const;

  return (
    <Button className={className}>{children}</Button>
  );
}
