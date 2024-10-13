import Link from "next/link";

export const ContactInfo = () => {
  return (
    <div className="flex flex-col items-start gap-5 self-center">
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold text-[#026295]">
          Chat to Support
        </h3>
        <p className="text-lg font-normal text-[#14293E]">
          Chat to our staff 24/7 for instant access to support
        </p>
        <Link href="" className="text-base font-semibold underline">
          Start Live Chat
        </Link>
      </div>
      <hr className="w-full border-[0.5px] border-[#B9C2CB]" />
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold text-[#026295]">Call Us</h3>
        <p className="text-lg font-normal text-[#14293E]">
          Monday - Friday, 9:00 AM - 6:00 PM
        </p>
        <Link href="" className="text-base font-semibold underline">
          +12 34567 78912
        </Link>
        <Link href="" className="text-base font-semibold underline">
          +12 34457 34567
        </Link>
      </div>
      <hr className="w-full border-[0.5px] border-[#B9C2CB]" />
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold text-[#026295]">Email Support</h3>
        <p className="text-lg font-normal text-[#14293E]">
          Email us & we will get back to you within 24 hours
        </p>
        <Link href="mailto:" className="text-base font-semibold underline">
          support@rxlgroup.com
        </Link>
      </div>
      <hr className="w-full border-[0.5px] border-[#B9C2CB]" />
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold text-[#026295]">Delhi, India</h3>
        <p className="text-lg font-normal text-[#14293E]">
          Visit our office Monday - Friday, 9:00 AM - 5:00 PM
        </p>
        <p className="text-base font-semibold underline">
          1234 Business Lane,
          <br />
          xyz Road,
          <br />
          Delhi, India
        </p>
      </div>
    </div>
  );
};
