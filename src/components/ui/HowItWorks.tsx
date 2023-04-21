import { twMerge } from "tailwind-merge";
import { Button } from "../elements/Button";
import { useState } from "react";
import quote from "@/images/quote.svg";
import arrow from "@/images/arrow.svg";

export const HowItWorks = () => {
  const [activeTabId, setActiveTabId] = useState<number>(1);
  const [activeSlideId, setActiveSlideId] = useState<number>(1);

  const handleSliderArrowClick = (arrow: string) => {
    if (arrow === "right") {
      if (activeSlideId >= quotes.length) return;
      setActiveSlideId((prevSlideId) => prevSlideId + 1);
    } else {
      if (activeSlideId <= 1) return;
      setActiveSlideId((prevSlideId) => prevSlideId - 1);
    }
  };

  return (
    <section id="how-it-works" className="bg-gradient pb-20 pt-14 md:pb-32 md:pt-20">
      <div className="container flex flex-col items-center text-sm md:text-base">
        <h2 className="mb-6 text-center text-4xl font-black md:pb-40 md:text-6xl">How It Works</h2>
        <p className="mb-14 text-center md:hidden">
          Unloc is the most customizable NFT-collateralized loan platform on Solana. We allow NFT
          Owners to borrow cryptocurrencies against their NFTs.
        </p>
        <Button inverted textPrimary className="mb-6 md:mb-12">
          Learn more
        </Button>
        <ul className="mb-8 space-y-6 md:hidden">
          {data.map(({ title, id }) => (
            <li
              key={id}
              className={twMerge(
                "cursor-pointer text-center font-black",
                activeTabId === id && "border-b-2 border-primary text-primary"
              )}
              onClick={() => setActiveTabId(id)}
            >
              {title}
            </li>
          ))}
        </ul>
        <div className="pb-20 md:mb-28 md:flex md:gap-32">
          {data.map(({ id, title, list, btnText }) => (
            <div
              key={id}
              className={twMerge("hidden flex-col md:flex", activeTabId === id && "flex")}
            >
              <h3 className="mb-12 hidden text-5xl font-black md:block">{title}</h3>
              <ul className="mb-14 space-y-7">
                {list.map(({ title, text }, i) => (
                  <li key={i} className="flex gap-5 md:gap-16">
                    <span className="min-w-[38px] text-6xl	font-black text-primary">{i + 1}</span>
                    <div>
                      <p className="mb-2 font-bold md:text-2xl">{title}</p>
                      <p className="md:text-xl">{text}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <Button inverted textPrimary className="self-center md:ml-[102px] md:self-start">
                {btnText}
              </Button>
            </div>
          ))}
        </div>
        <ul className="shado relative mb-7 w-full max-w-[623px] rounded-2xl border border-[#d1c1f3] px-5 pb-2.5 pt-11">
          {quotes.map(({ id, text, author, link }) => (
            <li
              key={id}
              className={twMerge("hidden flex-col items-center", activeSlideId === id && "flex")}
            >
              <p className="mb-8 max-w-[419px] text-center md:text-2xl">{text}</p>
              <p>{author}</p>
              <a href={link} className="border-b-2 border-primary text-primary">
                Quote Source
              </a>
            </li>
          ))}
          <img
            src={quote}
            alt="Quote"
            className="absolute -left-3 -top-12 max-w-[86px] md:-left-16 md:-top-16 md:max-w-[132px]"
          />
          <div
            className={twMerge(
              "absolute -left-3.5 top-1/2 grid h-7 w-7 -translate-y-1/2 rotate-180 cursor-pointer place-content-center rounded-full bg-primary md:-left-[18px] md:h-9 md:w-9",
              activeSlideId === 1 && "bg-[#d1c1f3]"
            )}
            onClick={() => handleSliderArrowClick("left")}
          >
            <img src={arrow} alt="Arrow" />
          </div>
          <div
            className={twMerge(
              "absolute -right-3.5 top-1/2 grid h-7 w-7 -translate-y-1/2 cursor-pointer place-content-center rounded-full bg-primary md:-right-[18px] md:h-9 md:w-9",
              activeSlideId === quotes.length && "bg-[#d1c1f3]"
            )}
            onClick={() => handleSliderArrowClick("right")}
          >
            <img src={arrow} alt="Arrow" />
          </div>
        </ul>
        <ul className="flex items-center gap-6">
          {quotes.map(({ id }) => (
            <li
              key={id}
              className={twMerge(
                "h-3 w-3 cursor-pointer rounded-full bg-primary",
                activeSlideId === id && "h-5 w-5 border border-primary bg-transparent"
              )}
              onClick={() => setActiveSlideId(id)}
            ></li>
          ))}
        </ul>
      </div>
    </section>
  );
};

type Data = {
  id: number;
  title: string;
  list: {
    title: string;
    text: string;
  }[];
  btnText: string;
}[];
type Quotes = {
  id: number;
  text: string;
  author: string;
  link: string;
}[];

const data: Data = [
  {
    id: 1,
    title: "Borrowers",
    list: [
      {
        title: "Collateralize Your NFT",
        text: "Unloc is escrowless, so the NFT never leaves your wallet unless you default on your Loan.",
      },
      {
        title: "Customize Your Loan Terms",
        text: "Choose your own loan amount, duration, currency and the interest you’re happy  to repay.",
      },
      {
        title: "Set Multiple Sub-Offers",
        text: "Create up to 3 sub-offers per NFT to attract different types of Lenders and match with them faster.",
      },
    ],
    btnText: "Learn about Borrowing",
  },
  {
    id: 2,
    title: "Lenders",
    list: [
      {
        title: "Explore Active Offers",
        text: "Choose which NFT you want to Lend against - according to your preferred risk profile.",
      },
      {
        title: "Lend Liquidity to a Borrower",
        text: "Connect your preferred wallet and press Lend.",
      },
      {
        title: "Earn Token Rewards + Interest",
        text: "Track your Loan status in “My Loans” page.",
      },
    ],
    btnText: "Learn about Lending",
  },
];
const quotes: Quotes = [
  {
    id: 1,
    text: "Jpegs are the hard collateral we deserve to back the internet of money.",
    author: "Anatoly Yakovenko",
    link: "",
  },
  {
    id: 2,
    text: "Jpegs are the hard collateral we deserve to back the internet of money.",
    author: "Anatoly Yakovenko",
    link: "",
  },
  {
    id: 3,
    text: "Jpegs are the hard collateral we deserve to back the internet of money.",
    author: "Anatoly Yakovenko",
    link: "",
  },
];
