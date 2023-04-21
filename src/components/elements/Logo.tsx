import { Link } from "gatsby";
import logo from "@/images/logo.svg";
import logoDark from "@/images/logo-dark.svg";
import { twMerge } from "tailwind-merge";

type Props = {
  dark?: boolean;
  size?: "sm" | "md";
  className?: string;
};

export const Logo = ({ dark = false, size = "md", className }: Props) => (
  <Link
    to="/"
    className={twMerge(
      "block w-full max-w-[113px]",
      size === "md" && "lg:max-w-[214px]",
      className
    )}
  >
    <img src={dark ? logoDark : logo} className="w-full" alt="UNLOC logo" />
  </Link>
);
