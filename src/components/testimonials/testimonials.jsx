import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SectionHeader } from "../section-header";
import { SectionTitle } from "../section-title";

const testimonials = [
  {
    desc: "RXL’s resources fit right in with our team and not only took on the time burden of some of our most detailed tasks, but also trained our team members on approaches that saved time and energy.",
    label: "Case Study or Client Testimonial 1 TBD",
  },
  {
    desc: "Our client was interested in moving from Quickbooks Desktop to Quickbooks Online. As a small accounting firm, we have very limited access to data talent – data migration is simply not our expertise. We brought RXL’s experts on to handle the migration so that we could focus on bringing value to our clients.",
    label: "Case Study or Client Testimonial 2 TBD",
  },
  {
    desc: "Before working with RXL, our accounting and finance data was scattered across multiple systems which made getting meaningful meaning from it near impossible. Partnering with RXL, we built a data warehouse that enables us to get clarity from our data.",
    label: "Case Study or Client Testimonial 3 TBD",
  },
];

export const Testimonials = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-20">
      <SectionHeader label="Testimonials" />
      <div className="flex w-[56%] flex-col items-center justify-center gap-2">
        <SectionTitle title="Igniting Impact" />
        <h4 className="text-center text-xl font-medium tracking-wider text-[#026295]">
          Explore Real-world outcomes
        </h4>
      </div>
      <Carousel
        opts={{ loop: true }}
        className="mt-3 flex w-[60%] items-center justify-center"
      >
        <CarouselContent className="mx-auto w-[95%]">
          {testimonials.map((testimonial, index) => (
            <CarouselItem
              key={index}
              className="flex flex-col items-center justify-center gap-4"
            >
              <p className="mx-auto w-[90%] text-center text-2xl font-normal text-[#000000]">
                {testimonial.desc}
              </p>
              <p className="text-center text-base font-bold text-[#7B788E]">
                {testimonial.label}
              </p>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          variant="arrows"
          className="border-[2px] border-[#026295]"
        />
        <CarouselNext
          variant="arrows"
          className="border-[2px] border-[#026295]"
        />
      </Carousel>
    </div>
  );
};
