import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Faqs = () => {
  return (
    <div className="h-48 mt-16 grid w-full grid-cols-2 gap-5">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg font-normal text-[#0C384F]">
            What services do you offer?
          </AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
            nostrum.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-lg font-normal text-[#0C384F]">
            How do I schedule a consultation?
          </AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum,
            pariatur!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-lg font-normal text-[#0C384F]">
            What industries do you specialize in?
          </AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum,
            pariatur!
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-lg font-normal text-[#0C384F]">
            What is your typical project timeline?
          </AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
            nostrum.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="text-lg font-normal text-[#0C384F]">
            Do you provide ongoing support after the project?
          </AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum,
            pariatur!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger className="text-lg font-normal text-[#0C384F]">
            How are your consultants qualified?
          </AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum,
            pariatur!
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
