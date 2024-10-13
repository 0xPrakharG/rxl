import Link from "next/link";

export const FooterLinks = ({ title, links }) => {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-left text-xl font-bold text-[#FFFFFF]">{title}</h3>
      <Link
        className="flex flex-col gap-3 text-left text-lg font-normal text-[#FFFFFF]"
        href=""
      >
        {links.map((link, index) => (
          <p key={index}>{link}</p>
        ))}
      </Link>
    </div>
  );
};
