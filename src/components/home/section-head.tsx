import { cn } from "@/lib/cn";

type Props = {
  eyebrow?: string;
  title: string;
  lede?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHead({ eyebrow, title, lede, align = "left", className }: Props) {
  return (
    <div
      className={cn(
        "mb-10 md:mb-12",
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl",
        className
      )}
    >
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className={cn("section-title", eyebrow ? "mt-2" : "")}>{title}</h2>
      {lede && <p className="section-lede">{lede}</p>}
    </div>
  );
}
