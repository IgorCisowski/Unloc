import { forwardRef, type ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type Props = ComponentProps<"button"> & { toggled: boolean };

export const HamburgerButton = forwardRef<HTMLButtonElement, Props>(function HamburgerButton(
  props,
  ref
) {
  const { className, toggled, ...rest } = props;
  return (
    <button ref={ref} className={twMerge("group relative", className)} {...rest}>
      <div className="relative flex h-[50px] w-[50px] transform items-center justify-center overflow-hidden rounded-full transition-all duration-200">
        <div className="flex h-[20px] w-[20px] origin-center transform flex-col justify-between overflow-hidden transition-all duration-300">
          <div
            className={twMerge(
              "h-[2px] w-7 origin-left transform bg-neutral-800 transition-all duration-300 ",
              toggled && "rotate-[42deg]"
            )}
          ></div>
          <div
            className={twMerge(
              "h-[2px] w-7 transform bg-neutral-800 transition-all duration-300",
              toggled && "-translate-x-10"
            )}
          ></div>
          <div
            className={twMerge(
              "h-[2px] w-7 origin-left transform bg-neutral-800 transition-all duration-300",
              toggled && "-rotate-[42deg]"
            )}
          ></div>
        </div>
      </div>
    </button>
  );
});
