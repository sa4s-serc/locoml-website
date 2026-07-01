export function ArchitectureLegend() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 pb-8 pt-4">
      <div className="flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-slate-300" />
        <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500">Platform Service</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-primary" />
        <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500">Intelligence Module</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-emerald-400" />
        <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500">Execution</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-indigo-400" />
        <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500">Storage</span>
      </div>
    </div>
  );
}
