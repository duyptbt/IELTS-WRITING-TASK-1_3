import React from 'react';

const PIE_COLORS = ["#4f8ef7", "#f7a94f", "#4fc97a", "#f74f6a", "#a94ff7"];
const BAR_COLORS = ["#4f8ef7", "#f7a94f", "#4fc97a", "#f74f6a"];
const LINE_COLORS = ["#f74f6a", "#4f8ef7", "#4fc97a", "#f7a94f"];

export function BarChartViz({ visual }: { visual: any }) {
  const max = Math.max(...visual.datasets.flatMap((d: any) => d.values));
  return (
    <div>
      <div className="text-xs text-slate-500 mb-2.5 text-center">{visual.title}</div>
      <div className="flex gap-3 flex-wrap mb-2.5">
        {visual.datasets.map((ds: any, i: number) => (
          <div key={i} className="flex items-center gap-1 text-[11px]">
            <div className="w-2.5 h-2.5 rounded-sm" style={{ background: BAR_COLORS[i] }} />
            <span className="text-slate-500">{ds.label}</span>
          </div>
        ))}
      </div>
      <div className="flex gap-1.5 items-flex-end h-[140px]">
        {visual.labels.map((label: string, li: number) => (
          <div key={li} className="flex-1 flex flex-col items-center gap-0.5 h-full">
            <div className="flex-1 flex items-end gap-0.5 w-full">
              {visual.datasets.map((ds: any, di: number) => (
                <div key={di} title={`${ds.label}: ${ds.values[li]}`}
                  className="flex-1 rounded-t-sm transition-[height] duration-500"
                  style={{ background: BAR_COLORS[di], height: `${(ds.values[li] / max) * 100}%` }} />
              ))}
            </div>
            <span className="text-[9px] text-slate-500 text-center">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function LineChartViz({ visual }: { visual: any }) {
  const allVals = visual.datasets.flatMap((d: any) => d.values);
  const min = Math.min(...allVals) * 0.85;
  const max = Math.max(...allVals) * 1.05;
  const W = 380, H = 150;
  const pad = { l: 36, r: 10, t: 10, b: 22 };
  const iW = W - pad.l - pad.r, iH = H - pad.t - pad.b;
  const xStep = iW / (visual.labels.length - 1);
  const yScale = (v: number) => iH - ((v - min) / (max - min)) * iH;
  return (
    <div>
      <div className="text-xs text-slate-500 mb-2 text-center">{visual.title}</div>
      <div className="flex gap-3 flex-wrap mb-1.5">
        {visual.datasets.map((ds: any, i: number) => (
          <div key={i} className="flex items-center gap-1 text-[11px]">
            <div className="w-[18px] h-[2px]" style={{ background: LINE_COLORS[i] }} />
            <span className="text-slate-500">{ds.label}</span>
          </div>
        ))}
      </div>
      <div className="overflow-x-auto">
        <svg width={W} height={H} className="block max-w-full">
          {[0, 0.25, 0.5, 0.75, 1].map((t, i) => {
            const y = pad.t + t * iH;
            const val = Math.round(max - t * (max - min));
            return (
              <g key={i}>
                <line x1={pad.l} x2={W - pad.r} y1={y} y2={y} stroke="#e2e8f0" strokeWidth={0.5} />
                <text x={pad.l - 3} y={y + 4} textAnchor="end" fontSize={8} fill="#94a3b8">{val}</text>
              </g>
            );
          })}
          {visual.labels.map((lbl: string, i: number) => (
            <text key={i} x={pad.l + i * xStep} y={H - 3} textAnchor="middle" fontSize={8} fill="#94a3b8">{lbl}</text>
          ))}
          {visual.datasets.map((ds: any, di: number) => {
            const pts = ds.values.map((v: number, i: number) => `${pad.l + i * xStep},${pad.t + yScale(v)}`).join(" ");
            return (
              <g key={di}>
                <polyline points={pts} fill="none" stroke={LINE_COLORS[di]} strokeWidth={2} />
                {ds.values.map((v: number, i: number) => (
                  <circle key={i} cx={pad.l + i * xStep} cy={pad.t + yScale(v)} r={3} fill={LINE_COLORS[di]} />
                ))}
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}

export function PieChartViz({ visual }: { visual: any }) {
  function renderPie(segments: any[], cx: number, cy: number, r: number, allSegments: any[]) {
    let start = -Math.PI / 2;
    const total = segments.reduce((a, s) => a + s.value, 0);
    return segments.filter((s) => s.value > 0).map((seg, i) => {
      const angle = (seg.value / total) * 2 * Math.PI;
      const end = start + angle;
      const x1 = cx + r * Math.cos(start), y1 = cy + r * Math.sin(start);
      const x2 = cx + r * Math.cos(end), y2 = cy + r * Math.sin(end);
      const large = angle > Math.PI ? 1 : 0;
      const path = `M${cx},${cy} L${x1},${y1} A${r},${r},0,${large},1,${x2},${y2} Z`;
      const midA = start + angle / 2;
      const lx = cx + r * 0.65 * Math.cos(midA), ly = cy + r * 0.65 * Math.sin(midA);
      const origIdx = allSegments.findIndex((s) => s.label === seg.label);
      start = end;
      return (
        <g key={i}>
          <path d={path} fill={PIE_COLORS[origIdx >= 0 ? origIdx : i]} stroke="#fff" strokeWidth={1} />
          {angle > 0.2 && <text x={lx} y={ly} textAnchor="middle" dominantBaseline="middle" fontSize={9} fill="#fff" fontWeight="bold">{seg.value}%</text>}
        </g>
      );
    });
  }
  return (
    <div>
      <div className="text-xs text-slate-500 mb-2 text-center">{visual.title}</div>
      <svg width="100%" viewBox="0 0 340 175" className="block">
        {renderPie(visual.datasets[0].segments, 85, 88, 68, visual.datasets[0].segments)}
        <text x={85} y={168} textAnchor="middle" fontSize={11} fill="#64748b">{visual.datasets[0].label}</text>
        {renderPie(visual.datasets[1].segments, 255, 88, 68, visual.datasets[0].segments)}
        <text x={255} y={168} textAnchor="middle" fontSize={11} fill="#64748b">{visual.datasets[1].label}</text>
      </svg>
      <div className="flex gap-2.5 flex-wrap justify-center mt-1">
        {visual.datasets[0].segments.map((seg: any, i: number) => (
          <div key={i} className="flex items-center gap-1 text-[10px]">
            <div className="w-2.5 h-2.5 rounded-sm" style={{ background: PIE_COLORS[i] }} />
            <span className="text-slate-500">{seg.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function TableViz({ visual }: { visual: any }) {
  return (
    <div>
      <div className="text-xs text-slate-500 mb-2.5 text-center">{visual.title}</div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-[13px]">
          <thead>
            <tr>
              {visual.headers.map((h: string, i: number) => (
                <th key={i} className={`p-2 px-3 border-b border-slate-200 text-slate-500 text-[11px] tracking-wider whitespace-nowrap ${i === 0 ? 'text-left' : 'text-center'}`}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {visual.rows.map((row: any[], ri: number) => (
              <tr key={ri} className="border-b border-slate-100">
                {row.map((cell: any, ci: number) => (
                  <td key={ci} className={`p-2.5 px-3 ${ci === 0 ? 'text-left text-slate-500' : 'text-center text-slate-900 font-medium'}`}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function renderVisual(visual: any, i: number) {
  const wrap = (child: React.ReactNode) => (
    <div key={i} className="bg-white rounded-lg p-4 border border-slate-200 flex-1 min-w-[260px]">
      {child}
    </div>
  );
  if (visual.type === "bar") return wrap(<BarChartViz visual={visual} />);
  if (visual.type === "line") return wrap(<LineChartViz visual={visual} />);
  if (visual.type === "pie") return wrap(<PieChartViz visual={visual} />);
  if (visual.type === "table") return wrap(<TableViz visual={visual} />);
  return null;
}
