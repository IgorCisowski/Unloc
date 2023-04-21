import { Link } from "gatsby";
import { Logo } from "@/components/elements/Logo";
import { links } from "@/components/ui/Layout";
import { twMerge } from "tailwind-merge";
import { Button } from "@/components/elements/Button";

export const Navigation = () => {
  const { hash } = window.location;

  return (
    <div className="bg-neutral-600 py-4">
      <div className="container flex items-center justify-between gap-8">
        <Logo />
        <nav className="flex flex-1 items-center justify-end gap-4 xl:gap-12">
          {links.map(({ name, slug }) => (
            <Link
              className={twMerge(
                "min-w-fit rounded-full px-4 py-2 text-xl transition-colors duration-100 md:px-6 lg:text-2xl",
                "text-white",
                slug === hash ? "bg-primary text-white" : "hover:bg-neutral-500"
              )}
              key={slug}
              to={slug}
            >
              {name}
            </Link>
          ))}
          <Button size="md">Launch dApp</Button>
        </nav>
      </div>
    </div>
  );
};
