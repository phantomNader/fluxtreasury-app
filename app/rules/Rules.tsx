type RuleStatus = "active" | "paused";

type Rule = {
  id: string;
  name: string;
  description: string;
  status: RuleStatus;
  source: string;
  target: string;
  lastRun: string;
  lastAction: string;
};

const rules: Rule[] = [
  {
    id: "rule-1",
    name: "Sweep excess cash into Treasuries",
    description:
      "Keeps $300,000 in Operating. Sweeps any excess into tokenized Treasuries (BUIDL).",
    status: "active",
    source: "Operating Account",
    target: "Treasury Wallet (BUIDL)",
    lastRun: "Today, 09:15",
    lastAction: "Moved $50,000 into BUIDL",
  },
  {
    id: "rule-2",
    name: "Replenish payroll buffer",
    description:
      "If Payroll Account drops below $100,000, top up from Operating.",
    status: "active",
    source: "Operating Account",
    target: "Payroll Account",
    lastRun: "Yesterday, 16:02",
    lastAction: "Moved $25,000 into Payroll",
  },
  {
    id: "rule-3",
    name: "High-yield parking rule",
    description:
      "Move idle cash above $1M into short-term yield wallet. Paused during treasury policy review.",
    status: "paused",
    source: "Operating + Yield",
    target: "Yield Wallet",
    lastRun: "3 days ago",
    lastAction: "No action – below threshold",
  },
];

function StatusBadge({ status }: { status: RuleStatus }) {
  const isActive = status === "active";
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
        isActive
          ? "bg-emerald-500/10 text-emerald-300 border border-emerald-500/40"
          : "bg-slate-800/80 text-slate-300 border border-slate-600/60"
      }`}
    >
      <span
        className={`mr-1 h-1.5 w-1.5 rounded-full ${
          isActive ? "bg-emerald-400" : "bg-slate-500"
        }`}
      />
      {isActive ? "Active" : "Paused"}
    </span>
  );
}

export default function RulesPage() {
  const activeCount = rules.filter((r) => r.status === "active").length;

  return (
    <div className="space-y-8">
      {/* Page header */}
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-lg font-semibold text-slate-50">Rules</h1>
          <p className="mt-1 text-sm text-slate-400">
            Automation that moves cash between accounts and tokenized
            treasuries. (Sample data for now.)
          </p>
        </div>
        <button className="rounded-full border border-teal-400/60 bg-teal-500/10 px-4 py-1.5 text-xs font-medium text-teal-300 hover:bg-teal-500/20">
          + Create Rule
        </button>
      </header>

      {/* Summary cards */}
      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
          <div className="mb-1 text-xs uppercase tracking-[0.18em] text-slate-400">
            Total Rules
          </div>
          <div className="text-2xl font-semibold">{rules.length}</div>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
          <div className="mb-1 text-xs uppercase tracking-[0.18em] text-slate-400">
            Active
          </div>
          <div className="text-2xl font-semibold text-emerald-300">
            {activeCount}
          </div>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
          <div className="mb-1 text-xs uppercase tracking-[0.18em] text-slate-400">
            Last Automation Run
          </div>
          <div className="text-sm font-medium text-slate-100">
            Today at 09:15 (simulated)
          </div>
          <p className="mt-1 text-xs text-slate-400">
            Engine scans balances and executes eligible rules on a schedule.
          </p>
        </div>
      </section>

      {/* Rules list */}
      <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-sm font-semibold tracking-wide text-slate-100">
            Automation Rules
          </h2>
          <span className="text-xs text-slate-400">Simulated data</span>
        </div>

        <div className="space-y-3">
          {rules.map((rule) => (
            <div
              key={rule.id}
              className="rounded-xl border border-slate-800 bg-slate-950/40 p-4 hover:border-teal-500/40 transition-colors"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-semibold text-slate-50">
                      {rule.name}
                    </h3>
                    <StatusBadge status={rule.status} />
                  </div>
                  <p className="mt-1 text-xs text-slate-400">
                    {rule.description}
                  </p>
                </div>

                <div className="text-right text-xs text-slate-400">
                  <div>
                    <span className="font-medium text-slate-200">Source:</span>{" "}
                    {rule.source}
                  </div>
                  <div>
                    <span className="font-medium text-slate-200">Target:</span>{" "}
                    {rule.target}
                  </div>
                </div>
              </div>

              <div className="mt-3 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
                <span>Last run: {rule.lastRun}</span>
                <span>Last action: {rule.lastAction}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
