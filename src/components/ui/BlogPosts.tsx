import card from "@/images/blog-posts/card.png";
import { Button } from "../elements/Button";
// import pinkVector from "@/images/blog-posts/pinkVector.png";
// import orangeVector from "@/images/blog-posts/orangeVector.png";

export const BlogPosts = () => {
  return (
    <section className="bg-gradient relative overflow-hidden pb-16 pt-14 md:pb-56 md:pt-28">
      <div className="container  flex flex-col">
        <h2 className="mb-8 px-10 text-center text-4xl font-black text-violet-400 md:mb-20 md:text-6xl">
          Latest blog posts
        </h2>
        <div className="mb-16 flex flex-wrap justify-center gap-10">
          {cards.map(({ img, date, title, desc, btnText }) => {
            return (
              <dl
                key={date}
                className="w-full max-w-xs overflow-hidden  rounded-2xl bg-white shadow-lg shadow-violet-200 md:max-w-md"
              >
                <img src={img} alt="Card" />
                <div className="flex flex-col items-start px-6 pb-9 pt-4">
                  <dd className="mb-3 text-xs font-black text-violet-450 md:text-base">{date}</dd>
                  <dt className="mb-3 text-base font-black text-violet-400 md:text-2xl">{title}</dt>
                  <dd className=" min-h-28 md:min-h-44 mb-2 text-sm font-normal text-violet-400 md:mb-3 md:text-xl">
                    {desc}
                  </dd>
                  <button className="text-sm font-bold text-pinkred-900 md:text-xl">
                    {btnText}
                  </button>
                </div>
              </dl>
            );
          })}
        </div>
        <div className="flex w-full justify-center md:justify-start">
          <Button inverted textPrimary>
            View all blog posts
          </Button>
        </div>
      </div>
    </section>
  );
};

type Cards = {
  img: string;
  date: string;
  title: string;
  desc: string;
  btnText: string;
}[];

const cards: Cards = [
  {
    img: card,
    date: "Feb .24, 2023",
    title: "Lorem ipsum dolor sit amet",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure.",
    btnText: "Read more >",
  },
  {
    img: card,
    date: "Feb .21, 2023",
    title: "Lorem ipsum dolor sit amet",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    btnText: "Read more >",
  },
  {
    img: card,
    date: "Feb .19, 2023",
    title: "Lorem ipsum dolor sit amet",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    btnText: "Read more >",
  },
];
