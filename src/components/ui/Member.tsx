import discord from "@/images/socials/discord.png";
import twitter from "@/images/socials/twitter.png";
import mail from "@/images/socials/mail.png";
import svgMail from "@/images/socials/mail.svg";
import line from "@/images/line.png";
import lineBottom from "@/images/line-2.png";
import { Button } from "../elements/Button";

export const Member = () => {
  return (
    <section className="bg-gradient-sets relative pb-20 pt-14 text-white md:pb-40 md:pt-32">
      <div className="container flex flex-col items-center xl:flex-row">
        <img src={line} alt="" className="absolute -top-4 right-2/4" />
        <img src={lineBottom} alt="" className="absolute -bottom-4 right-1/4" />
        {/* HEADING */}
        <div className=" mb-10 text-center md:text-start xl:m-0 xl:w-full xl:max-w-lg ">
          <h2 className="mb-5 text-4xl font-black md:text-6xl md:leading-snug">
            Become a member of our community
          </h2>
          <p className="text-sm md:text-xl xl:max-w-md">
            Get ahead of the game, Unloc rewards, and stay informed by joining our Discord,
            following us on Twitter, and subscribing to our newsletter.
          </p>
        </div>
        {/* SOCIALS */}
        <div className="relative flex w-full flex-col text-center md:text-start">
          <div className="mb-3 space-y-10 md:space-y-36">
            {socials.map(({ media, title, desc }) => {
              return (
                <dl className="flex flex-col items-center md:flex-row md:gap-12 md:even:justify-center md:last-of-type:justify-end">
                  <div className="mb-1 flex justify-center">
                    <img
                      src={media}
                      alt="social-media"
                      className="object-contain lg:scale-125 2xl:scale-150"
                    />
                  </div>
                  <div className="max-w-md">
                    <dt className="text-2xl font-black">{title}</dt>
                    <dd className="text-sm md:text-xl">{desc}</dd>
                  </div>
                </dl>
              );
            })}
          </div>
          {/* NEWSLETTER */}
          <form className="mt-0 flex w-full justify-center md:justify-end">
            <div className="max-w-xs md:max-w-md">
              <div className="mb-4 flex flex-col gap-3 md:flex-row">
                <div className=" flex w-full max-w-xs gap-3 rounded-md bg-violet-400 p-4">
                  <img src={svgMail} alt="mail.svg" />
                  <input
                    type="text"
                    className="w-full border-none bg-violet-400 outline-none"
                    placeholder="Email address"
                    required
                  />
                </div>
                <Button>Sign up</Button>
              </div>
              <div className="flex gap-3 text-start">
                <input
                  id="purple-checkbox"
                  type="checkbox"
                  value=""
                  className="h-4 w-4 rounded border-violet-400 bg-violet-400  text-violet-400 focus:ring-2 focus:ring-purple-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-purple-600"
                />
                <p>
                  I'd like to sign up to receive emails from Unloc with the latest news and product
                  updates. I understand and consent to the{" "}
                  <span className="text-pinkred-900">Privacy Policy</span>.
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

const socials: Socials = [
  {
    media: discord,
    title: "Join our Discord",
    desc: "Talk with the rest of the Unloc community, reach our team directly or look for alpha.",
  },
  {
    media: twitter,
    title: "Follow us on Twitter",
    desc: "The easiest way to stay up to date on everything Unloc, including an occasional meme!",
  },
  {
    media: mail,
    title: "Sign up for our newsletter",
    desc: "A Web2 aficionado? We got you covered as well with our latest news & product updates.",
  },
];

type Socials = {
  media: string;
  title: string;
  desc: string;
}[];
