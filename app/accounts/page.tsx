type Account = {
  name: string;
  type: string;
  currency: string;
  balance: string;
  role: string;
};

const accounts: Account[] = [
  {
    name: "Operating Account",
    type: "Bank • Checking",
    currency: "USD",
    balance: "$500,000",
    role: "Primary operating cash",
  },
  {
    name: "Yield Account",
    type: "Tokenized Treasuries",
    currency: "USD (BUIDL)",
    balance: "$750,000",
    role: "In-yield treasury allocation",
  },
  {
    name: "Payroll Account",
    type: "Bank • Checking",
    currency: "USD",
    balance: "$120,000",
    role: "Upcoming payroll buffer",
  },
];

export default function AccountsPage() {
  return (
    <div className="space-y-8">
      {/* Page header */}
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-lg font-semibold text-slate-50">Accounts</h1>
          <p className="mt-1 text-sm text-slate-400">
            Bank accounts and cash positions connected to FluxTreasury.
            (Sample data for now.)
          </p>
        </div>
        <button className="rounded-full border border-teal-400/60 bg-teal-500/10 px-4 py-1.5 text-xs font-medium text-teal-300 hover:bg-teal-500/20">
          + Add Account
        </button>
      </header>

      {/* Summary cards */}
      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
          <div className="text-xs text-slate-400 uppercase tracking-[0.18em] mb-1">
            Total Accounts
          </div>
          <div className="text-2xl font-semibold">{accounts.length}</div>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
          <div className="text-xs text-slate-400 uppercase tracking-[0.18em] mb-1">
            Primary Currency
          </div>
          <div className="text-2xl font-semibold">USD</div>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
          <div className="text-xs text-slate-400 uppercase tracking-[0.18em] mb-1">
            In Yield (Simulated)
          </div>
          <div className="text-2xl font-semibold text-teal-400">$750,000</div>
        </div>
      </section>

      {/* Accounts table */}
      <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-sm font-semibold tracking-wide text-slate-100">
            Account List
          </h2>
          <span className="text-xs text-slate-400">Simulated data</span>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm text-slate-200">
            <thead className="border-b border-slate-800 text-xs uppercase text-slate-400">
              <tr>
                <th className="py-2 pr-4">Name</th>
                <th className="py-2 pr-4">Type</th>
                <th className="py-2 pr-4">Currency</th>
                <th className="py-2 pr-4">Balance</th>
                <th className="py-2 pr-4">Role</th>
              </tr>
            </thead>
            <tbody>
              {accounts.map((a) => (
                <tr
                  key={a.name}
                  className="border-b border-slate-900/60 last:border-0"
                >
                  <td className="py-2 pr-4 font-medium text-slate-50">
                    {a.name}
                  </td>
                  <td className="py-2 pr-4 text-slate-300">{a.type}</td>
                  <td className="py-2 pr-4 text-slate-300">{a.currency}</td>
                  <td className="py-2 pr-4 font-semibold">{a.balance}</td>
                  <td className="py-2 pr-4 text-slate-300">{a.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
