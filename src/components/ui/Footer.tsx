import { Logo } from "@/components/elements/Logo";
import discord from "@/images/socials/discord.svg";
import twitter from "@/images/socials/twitter.svg";
import instagram from "@/images/socials/instagram.svg";

export const Footer = () => {
  return (
    <footer className="bg-gradient pb-24 pt-9 md:pb-48 md:pt-28">
      <div className="container flex flex-col flex-wrap justify-between gap-8 md:flex-row md:gap-20">
        <div className="mb-3 md:flex-2">
          <Logo className="mb-8 md:mb-4" dark size="sm" />
          <p className="text-sm md:text-xl">
            Unloc is a financial products & consumer services platform for NFT Owners. We’re built
            on and backed by Solana.
          </p>
        </div>
        <div className="mb-8 flex flex-col justify-between gap-8 sm:flex-row md:flex-4 md:gap-24">
          {links.map(({ title, links }) => (
            <ul key={title} className="space-y-4">
              <li className="mb-5 text-xl font-black">{title}</li>
              {links.map(({ title, link }) => (
                <li key={title}>
                  <a href={link}>{title}</a>
                </li>
              ))}
            </ul>
          ))}
        </div>
        <ul className="space-y-8 md:flex-1">
          {socials.map(({ icon, title, link }) => (
            <li key={title} className="font-bold">
              <a href={link} className="flex items-center gap-8">
                <div className="flex h-8 w-8 items-center">
                  <img src={icon} alt={title} />
                </div>
                <span>{title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

type Links = {
  title: string;
  links: {
    title: string;
    link: string;
  }[];
}[];
type Socials = {
  icon: string;
  title: string;
  link: string;
}[];

const links: Links = [
  {
    title: "Unloc",
    links: [
      { title: "Privacy Policy", link: "#" },
      { title: "Email us", link: "#" },
    ],
  },
  {
    title: "Borrow & Lend",
    links: [
      { title: "Borrow", link: "#" },
      { title: "Lend", link: "#" },
      { title: "My Offers", link: "#" },
    ],
  },
  {
    title: "Partners",
    links: [{ title: "Baxus", link: "#" }],
  },
  {
    title: "FAQ",
    links: [{ title: "Documentation", link: "#" }],
  },
];
const socials: Socials = [
  {
    icon: discord,
    title: "Discord",
    link: "#",
  },
  {
    icon: twitter,
    title: "Twitter",
    link: "#",
  },
  {
    icon: instagram,
    title: "Instagram",
    link: "#",
  },
];
