import Image from "next/image";

export const ApproachCard = ({ icon, title, desc }) => {
  return (
    <div className="flex flex-col items-start justify-end gap-5">
      <Image src={icon} alt={[title, desc]} />
      <h2 className="text-left text-[28px] font-semibold leading-[33px] text-[#026295]">
        {title}
      </h2>
      <p className="text-left text-lg font-normal text-[#4D4D4D]">{desc}</p>
    </div>
  );
};
