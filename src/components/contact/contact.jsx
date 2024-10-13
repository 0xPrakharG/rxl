import { ContactHeadLine } from "@/components/contact/contact-head-line";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";

export const ContactSection = () => {
  return (
    <div className="bg-contact bg-no-repeat pb-20 pt-48">
      <ContactHeadLine />
      <div className="mx-auto grid w-[80%] grid-cols-2 gap-20">
        <ContactForm />
        <ContactInfo />
      </div>
    </div>
  );
};
