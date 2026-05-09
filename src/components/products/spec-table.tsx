import { cn } from "@/lib/cn";

type Row = { label: string; value: string };

export function SpecTable({ rows, className }: { rows: Row[]; className?: string }) {
  if (!rows?.length) return null;
  return (
    <div className={cn("rounded-xl border border-gray-200 bg-white overflow-hidden shadow-card", className)}>
      <div className="bg-primary-700 px-5 py-3">
        <div className="text-xs font-black tracking-widest text-primary-100 uppercase">Technical Specifications</div>
      </div>
      <table className="w-full text-sm">
        <tbody className="divide-y divide-gray-100">
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
              <td className="py-2.5 px-5 font-semibold text-navy-700 w-2/5">{row.label}</td>
              <td className="py-2.5 px-5 text-gray-600">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
