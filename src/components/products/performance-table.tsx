import type { PerformanceTable as PerformanceTableData } from "@/lib/products/technical-specs";

type Props = {
  table: PerformanceTableData;
};

export function PerformanceTable({ table }: Props) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
      <div className="border-b border-slate-200 bg-gradient-to-br from-white to-blue-50/50 px-5 py-4">
        <p className="font-display text-[15px] font-semibold tracking-tight text-navy-700">{table.title}</p>
        <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-[12px] text-slate-600">
          {table.outletSize && (
            <span>
              Outlet: <span className="font-medium text-navy-700">{table.outletSize}</span>
            </span>
          )}
          {table.flowType && (
            <span>
              Flow type: <span className="font-medium text-navy-700">{table.flowType}</span>
            </span>
          )}
          <span>
            Discharge: <span className="font-medium text-navy-700">LPM</span>
          </span>
          <span>
            Head: <span className="font-medium text-navy-700">metres</span>
          </span>
        </div>
        {table.caption && <p className="mt-1.5 text-[12.5px] leading-relaxed text-slate-600">{table.caption}</p>}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-[13px]">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50">
              <th
                scope="col"
                className="sticky left-0 z-[1] bg-slate-50 px-3 py-2.5 text-left font-display text-[12px] font-semibold uppercase tracking-wider text-slate-600"
              >
                Model
              </th>
              <th
                scope="col"
                className="px-3 py-2.5 text-center font-display text-[12px] font-semibold uppercase tracking-wider text-slate-600"
              >
                Stage
              </th>
              <th
                scope="col"
                className="px-3 py-2.5 text-center font-display text-[12px] font-semibold uppercase tracking-wider text-slate-600"
              >
                kW
              </th>
              <th
                scope="col"
                className="px-3 py-2.5 text-center font-display text-[12px] font-semibold uppercase tracking-wider text-slate-600"
              >
                HP
              </th>
              <th
                colSpan={table.heads.length}
                className="border-l border-slate-200 px-3 py-1 text-center font-display text-[11px] font-semibold uppercase tracking-wider text-primary-700"
              >
                Discharge in LPM @ Head (m)
              </th>
            </tr>
            <tr className="border-b border-slate-200 bg-slate-50">
              <th aria-hidden className="sticky left-0 z-[1] bg-slate-50" />
              <th aria-hidden />
              <th aria-hidden />
              <th aria-hidden />
              {table.heads.map((h, i) => (
                <th
                  key={`${h}-${i}`}
                  scope="col"
                  className="border-l border-slate-200 px-2 py-1.5 text-center text-[11px] font-semibold text-navy-700"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, idx) => (
              <tr key={`${row.model}-${row.stages ?? idx}-${idx}`} className="border-b border-slate-100 last:border-b-0 hover:bg-blue-50/30">
                <th
                  scope="row"
                  className="sticky left-0 z-[1] bg-white px-3 py-2 text-left font-mono text-[12px] font-medium text-navy-700"
                >
                  {row.model}
                </th>
                <td className="px-3 py-2 text-center text-slate-600">{row.stages ?? "—"}</td>
                <td className="px-3 py-2 text-center text-slate-600">{row.kw ?? "—"}</td>
                <td className="px-3 py-2 text-center text-slate-600">{row.hp ?? "—"}</td>
                {row.discharge.map((d, di) => (
                  <td
                    key={di}
                    className="border-l border-slate-100 px-2 py-2 text-center tabular-nums text-slate-700"
                  >
                    {d == null ? "—" : d}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {table.notes && table.notes.length > 0 && (
        <div className="border-t border-slate-100 bg-slate-50/60 px-5 py-3">
          {table.notes.map((n, i) => (
            <p key={i} className="text-[12px] leading-relaxed text-slate-600">
              {n}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
