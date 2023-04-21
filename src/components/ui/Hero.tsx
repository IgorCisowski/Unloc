import { Button } from "@/components/elements/Button";
import hero from "@/images/hero.png";
import heroMobile from "@/images/hero-mobile.png";

export const Hero = () => {
  return (
    <section className="bg-gradient-hero overflow-hidden pb-80 pt-14 md:pb-[420px] md:pt-56">
      <div className="container flex flex-col md:flex-row">
        <div className="flex flex-1 flex-col items-center text-center text-white md:items-start md:text-left">
          <h1 className="mb-5 text-4xl/[48px] font-black md:text-6xl">
            Borrow & Lend Against NFTs
          </h1>
          <p className="mb-16 text-sm md:text-2xl">
            Collateralize Solana NFTs to get liquidity in USDC & SOL. Set all loan terms yourself.
            No price impacted liquidations. Repay on time and the NFT never leaves your wallet.Blue
            Chips, 1/1 Art, Real-World Assets.
          </p>
          <div className="flex flex-col items-center gap-6 self-stretch md:flex-row">
            <Button>Get liquidity</Button>
            <Button inverted>I want to Lend</Button>
          </div>
        </div>
        <div className="relative flex-1">
          <img
            src={hero}
            alt="Hero"
            className="absolute left-1/2 top-1/2 hidden w-[160%] max-w-none -translate-x-1/2 -translate-y-1/2 md:block"
          />
          <img
            src={heroMobile}
            alt="Hero"
            className="absolute left-1/2 top-1/2 w-[112%] max-w-none -translate-x-1/2  md:hidden"
            // className="absolute inset-x-0 max-w-none md:hidden"
          />
        </div>
      </div>
    </section>
  );
};
