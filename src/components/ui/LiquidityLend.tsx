import { Button } from "../elements/Button";

export const LiquidityLend = () => {
  return (
    <section className="bg-gradient-sets py-20 md:pb-28 md:pt-36">
      <div className="container flex flex-col items-center">
        <h2 className=" pb-10 text-center text-5xl font-black leading-snug text-white md:pb-16 md:text-6xl">
          UNLOC the full potential of your NFTs
        </h2>
        <div className="flex w-full flex-col items-center gap-6 md:flex-row md:justify-center">
          <Button>Get liquidity</Button>
          <Button inverted>I want to Lend</Button>
        </div>
      </div>
    </section>
  );
};
