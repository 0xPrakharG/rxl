import { ContactSection } from "@/components/contact/contact";
import { FaqSection } from "@/components/faq/faq";

export const metadata = {
  title: "Contact Us",
  description:
    "RXL Group, Finance & Accounting Software Services, Data Transformation, QuickBooks Desktop, QuickBooks Online, Compliance and Risk management Services",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-screen-2xl">
      <ContactSection />
      <FaqSection />
    </div>
  );
}
