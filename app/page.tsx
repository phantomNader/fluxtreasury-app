export default function Home() {
  return (
    <div className="space-y-8">
      {/* KPI cards */}
      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
          <div className="text-xs text-slate-400 uppercase tracking-[0.18em] mb-2">
            Total Cash
          </div>
          <div className="text-2xl font-semibold">$1,250,000</div>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
          <div className="text-xs text-slate-400 uppercase tracking-[0.18em] mb-2">
            In Yield
          </div>
          <div className="text-2xl font-semibold text-teal-400">$750,000</div>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
          <div className="text-xs text-slate-400 uppercase tracking-[0.18em] mb-2">
            Operating Cash
          </div>
          <div className="text-2xl font-semibold">$500,000</div>
        </div>
      </section>

      {/* Recent rule activity */}
      <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-semibold tracking-wide text-slate-100">
            Recent Rule Activity
          </h2>
          <span className="text-xs text-slate-400">Simulated data</span>
        </div>
        <ul className="space-y-2 text-sm text-slate-200">
          <li>✓ Swept $50,000 from Operating → Tokenized Treasury (BUIDL)</li>
          <li>✓ Kept $300,000 minimum buffer in Operating Account</li>
          <li>✓ Rebalanced $25,000 back to Operating for upcoming payroll</li>
        </ul>
      </section>
    </div>
  );
}
