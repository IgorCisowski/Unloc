import { ReactNode } from "react";
import { MobileNavigation } from "@/components/ui/MobileNavigation";
import { Navigation } from "@/components/ui/Navigation";
import { Footer } from "@/components/ui/Footer";

type Props = {
  children?: ReactNode;
};

export const links = [
  { name: "Home", slug: "" },
  { name: "How It Works", slug: "#how-it-works" },
  { name: "Community", slug: "#community" },
  // { name: "Launch dApp", slug: "/" },
];

export const Layout = ({ children }: Props) => {
  return (
    <main>
      <header>
        <div className="block md:hidden">
          <MobileNavigation />
        </div>
        <div className="hidden md:block">
          <Navigation />
        </div>
      </header>
      {children}
      <Footer />
    </main>
  );
};
