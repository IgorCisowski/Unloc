export const SetsApart = () => {
  return (
    <section className="bg-gradient-sets pb-24 pt-16 text-white md:py-44">
      <div className="md:36 container flex flex-col items-center gap-24 xl:flex-row xl:gap-36 2xl:gap-48">
        <div className=" text-center md:text-left">
          <h2 className="mb-10 text-4xl font-black md:text-6xl xl:w-full xl:max-w-lg xl:leading-snug">
            What sets Unloc apart?
          </h2>
          <p className="text-sm md:text-xl lg:w-full xl:max-w-md">
            Unloc empowers NFT Owners to choose what is best for them. We understand that NFTs
            cannot be treated with a “one size fits all” approach.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:grid-rows-2 lg:gap-36 lg:gap-y-16 2xl:gap-x-44">
          {detach.map(({ title, desc }) => {
            return (
              <dl key={title} className="text-center md:text-start xl:w-full xl:max-w-xs">
                <dt className="mb-3.5 text-2xl font-black">{title}</dt>
                <dd className="text-sm md:text-xl">{desc}</dd>
              </dl>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const detach: Detach = [
  {
    title: "Fully Customizable",
    desc: "Unlike our competitors, with Unloc NFT Owners get to choose all loan terms; duration, amount, currency, and interest. This is perfect for NFTs that don’t belong on the floor. ",
  },
  {
    title: "1/1 Art & RWAs",
    desc: "Unloc’s the first platform to support NFT-collateralized loans for non-generative art pieces and Real World Assets. Get ahead of the curve and explore these emerging markets!",
  },
  {
    title: "Multiple Sub-Offers",
    desc: "Set multiple sub-offers for the same NFT, by doing this you offer a wider variety of loan terms to Lenders. In return you can match with Lenders faster.",
  },
  {
    title: "Voting & Rewards",
    desc: "In addition to the interest, both parties engaging in Loans are rewarded with tokens. Users can vote weekly on which collections will yield more of these rewards!",
  },
];

type Detach = {
  title: string;
  desc: string;
}[];
