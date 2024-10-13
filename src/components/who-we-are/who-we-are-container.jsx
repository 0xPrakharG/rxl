import { WhoWeAreMarkets } from "@/components/who-we-are/who-we-are-markets";
import { WhoWeAreKey } from "@/components/who-we-are/who-we-are-key";

const markets = [
  { label: "Offices of the CFO" },
  { label: "Small to mid-sized businesses" },
  { label: "Small to mid-sized accounting firms" },
];

export const WhoWeAreContainer = () => {
  return (
    <div className="border-gradient flex h-full w-[80%] flex-col items-center gap-12 rounded-lg bg-gradient-to-b from-white/20 to-white/10 bg-clip-padding py-16 backdrop-blur-lg backdrop-filter">
      <div className="flex w-[60%] flex-col items-center gap-7">
        <p className="text-center text-4xl font-bold text-[#FFFFFF]">
          There&apos;s no shortage to the talent and skills shortages in our
          industry.
        </p>
        <p className="text-center text-base text-[#FFFFFF]">
          Unlock turnkey access to high-performing global finance, accounting
          and data resources & solutions where they’re needed most.
        </p>
      </div>
      <div className="flex w-[60%] justify-center gap-5">
        <div className="flex w-[40%] flex-col gap-3">
          {markets.map((market, index) => (
            <WhoWeAreMarkets key={index} label={market.label} />
          ))}
        </div>
        <div className="w-[60%]">
          <WhoWeAreKey />
        </div>
      </div>
    </div>
  );
};
