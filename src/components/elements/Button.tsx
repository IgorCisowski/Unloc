import { ComponentProps, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

type Props = ComponentProps<"button"> & {
  inverted?: boolean;
  textPrimary?: boolean;
  size?: "sm" | "md" | "lg" | "full";
};

export const Button = forwardRef<HTMLButtonElement, Props>(function Button(props, ref) {
  const {
    inverted = false,
    textPrimary = false,
    size = "lg",
    children,
    className,
    ...rest
  } = props;

  return (
    <button
      ref={ref}
      className={twMerge(
        "w-full rounded-md bg-primary p-2 text-sm font-bold text-white md:py-4 lg:text-xl",
        inverted && "border border-primary bg-transparent",
        textPrimary && "text-primary",
        size === "sm" && "max-w-[189px]",
        size === "md" && "max-w-[262px]",
        size === "lg" && "max-w-[338px]",
        size === "full" && "",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
});
