import dash from "@/images/faq/dash.svg";
import arrow from "@/images/faq/arrow.svg";
import { useState } from "react";
import { Button } from "../elements/Button";

export const Faq = () => {
  const [activeAccordionId, setActiveAccordionId] = useState<number>(1);

  return (
    <section className="bg-gradient pb-20 pt-14 md:py-28">
      <div className="container flex justify-center">
        <div className="flex flex-col items-center md:w-full md:max-w-3xl">
          <h3 className="mb-4 text-center text-4xl font-black text-violet-400 md:text-6xl">
            Got Questions?
          </h3>
          <p className="mb-9 text-center text-sm text-violet-400 md:mb-16 md:text-xl">
            Check our documentation for further details or reach out to our team via Discord if you
            have any further inquiries!
          </p>
          <div className="mb-8 md:mb-14">
            {questions.map(({ id, title, desc }) => {
              return (
                <dl
                  key={id}
                  className=" mb-7 w-full max-w-3xl border-b-2 border-pink-600 last:border-b-0 md:mb-4"
                >
                  <dt
                    className="mx-auto flex max-w-[485px] cursor-pointer gap-2.5 pb-7 text-base font-black text-violet-400 md:pb-4 md:text-2xl"
                    onClick={() => setActiveAccordionId(id)}
                  >
                    <img src={activeAccordionId === id ? arrow : dash} alt="Dash / Arrow" />
                    <p>{title}</p>
                  </dt>
                  <dd
                    className={`${
                      activeAccordionId === id ? "block" : "hidden"
                    } text-violet-950 text-small pb-4 pl-7 md:text-xl`}
                  >
                    {desc}
                  </dd>
                </dl>
              );
            })}
          </div>
          <Button inverted textPrimary>
            Read
          </Button>
        </div>
      </div>
    </section>
  );
};

type Questions = {
  id: number;
  title: string;
  desc: string;
}[];

const questions: Questions = [
  {
    id: 1,
    title: "Which NFTs can I borrow against?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 2,
    title: "What fees does Unloc charge?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 3,
    title: "What are the Borrowing limits?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 4,
    title: "What happens if I can’t repay the Loan?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];
