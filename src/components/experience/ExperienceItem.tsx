interface ExperienceItemProps {
  period: string;
  company: string;
  location: string;
  role: string;
  description: string;
  isCurrent?: boolean;
}

export default function ExperienceItem({
  period,
  company,
  location,
  role,
  description,
  isCurrent = false,
}: ExperienceItemProps) {
  return (
    <div className="relative md:pl-12">
      <div
        className={`absolute left-0 top-2 w-6 h-6 rounded-full border-4 border-background hidden md:block ${
          isCurrent ? "bg-primary" : "bg-outline"
        }`}
      />
      <div className="grid md:grid-cols-12 gap-4 md:gap-6 bg-surface-container p-5 md:p-8 rounded-lg">
        <div className="md:col-span-3">
          <span className={`font-bold ${isCurrent ? "text-primary" : "text-on-surface-variant"}`}>
            {period}
          </span>
        </div>
        <div className="md:col-span-9">
          <h3 className="text-2xl font-headline font-bold">{company}</h3>
          <p className="text-on-surface-variant mb-4">
            {location} | {role}
          </p>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
