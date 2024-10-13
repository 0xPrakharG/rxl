const keyPoints = [
  "US-Headquartered",
  "Founded in 2016",
  "Launched in 2023 as a merger between ISSC Prowesstics and Genaisis",
  "Global talent pool of 160 experts across XX countries",
  "Leadership team with decades of experience",
  "XX clients served",
];

export const WhoWeAreKey = () => {
  return (
    <div className="h-full rounded-xl bg-[#FFFFFF] p-5">
      <ul className="ml-4 list-disc text-left text-base font-semibold text-[#026295]">
        {keyPoints.map((keyPoint, index) => (
          <li key={index}>{keyPoint}</li>
        ))}
      </ul>
    </div>
  );
};
