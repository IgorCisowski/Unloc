import { Dialog, Transition } from "@headlessui/react";
import { Link } from "gatsby";
import { Fragment, useState } from "react";
import { Button } from "@/components/elements/Button";
import { HamburgerButton } from "@/components/elements/HamburgerButton";
import { Logo } from "@/components/elements/Logo";
import { links } from "@/components/ui/Layout";
import { twMerge } from "tailwind-merge";

export const MobileNavigation = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { hash } = window.location;

  return (
    <div className="flex h-16 items-center bg-neutral-600">
      <div className="container flex items-center justify-between">
        <Logo />
        <HamburgerButton toggled={false} onClick={() => setOpen((prev) => !prev)} />
      </div>
      <Transition appear show={open} as={Fragment}>
        <Dialog as="div" onClose={() => setOpen(false)} className="relative z-10">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-x-0 bottom-0 top-16 bg-black bg-opacity-30" />
          </Transition.Child>
          <div className="fixed inset-x-0 top-16">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-200 "
              enterFrom="opacity-0 scale-95 -translate-y-full"
              enterTo="opacity-100 scale-100 translate-y-0"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100 translate-y-0"
              leaveTo="opacity-0 scale-95 -translate-y-full"
            >
              <Dialog.Panel
                as="div"
                className="w-full transform bg-neutral-500/80 px-2 pb-8 pt-4 shadow-xl backdrop-blur-sm transition-all dark:bg-neutral-600/80"
              >
                <div className="flex flex-col gap-y-3.5">
                  <Button size="full">Launch dApp</Button>
                  {links.map(({ name, slug }) => (
                    <Link
                      key={name}
                      to={slug}
                      className={twMerge(
                        "rounded-md py-2 text-center text-sm text-white",
                        slug === hash && "bg-primary text-white"
                      )}
                      onClick={() => setOpen(false)}
                    >
                      {name}
                    </Link>
                  ))}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};
