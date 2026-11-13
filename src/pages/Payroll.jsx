// Generated from stitch/pd_payroll-software.html by scripts/stitch-to-jsx.mjs (npm run convert).
import { Link } from 'react-router-dom'
import './Payroll.css'

export default function Payroll() {
  return (
    <div className="pg-payroll bg-background text-on-surface antialiased selection:bg-primary-container/20 selection:text-primary">
      <title>{"Payroll Management System | Horizon Enterprise Platform"}</title>
      {' '}
      {' '}
      <main className="w-full max-w-[1600px] mx-auto px-6 md:px-12 py-6 space-y-24">
        <section className="relative pt-4 pb-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-label-md font-label-md text-on-surface-variant mb-6">
            <Link to="/products" className="hover:text-primary transition-colors">
              Products
            </Link>
            {' '}
            <span className="material-symbols-outlined text-xs text-outline">
              chevron_right
            </span>
            {' '}
            <Link to="/products/payroll-management" className="hover:text-primary transition-colors">
              {"Payroll & Compliance"}
            </Link>
            {' '}
            <span className="material-symbols-outlined text-xs text-outline">
              chevron_right
            </span>
            {' '}
            <span className="text-on-surface font-semibold">
              Payroll Management System
            </span>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-primary/10 border border-primary/20 text-primary text-label-sm font-label-sm tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                {' '}
                {"PAYROLL & COMPLIANCE"}
              </div>
              <h1 className="text-display-lg font-display-lg text-on-surface tracking-tight leading-[1.12]">
                Payroll Management System — Deterministic gross-to-net calculation, tax withholding, and audit-ready payslips without spreadsheet risk.
              </h1>
              <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl">
                Automate multi-tier wage computations, statutory deductions across regional tax schedules, shift differentials, and cryptographic self-service payslip distribution in one verified execution pipeline.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-[10px] bg-surface-container-lowest/80 border border-outline-variant/40 shadow-sm backdrop-blur-md text-label-md font-label-md text-on-surface">
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    verified_user
                  </span>
                  {' '}
                  <span>
                    {"Automated Statutory Deductions & Filings"}
                  </span>
                </div>
                <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-[10px] bg-surface-container-lowest/80 border border-outline-variant/40 shadow-sm backdrop-blur-md text-label-md font-label-md text-on-surface">
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    account_tree
                  </span>
                  {' '}
                  <span>
                    Configurable Salary Structure Design
                  </span>
                </div>
                <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-[10px] bg-surface-container-lowest/80 border border-outline-variant/40 shadow-sm backdrop-blur-md text-label-md font-label-md text-on-surface">
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    sync_alt
                  </span>
                  {' '}
                  <span>
                    {"Attendance & Shift-Synced Pay Runs"}
                  </span>
                </div>
                <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-[10px] bg-surface-container-lowest/80 border border-outline-variant/40 shadow-sm backdrop-blur-md text-label-md font-label-md text-on-surface">
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    payments
                  </span>
                  {' '}
                  <span>
                    {"Off-Cycle & Discretionary Bonus Runs"}
                  </span>
                </div>
                <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-[10px] bg-surface-container-lowest/80 border border-outline-variant/40 shadow-sm backdrop-blur-md text-label-md font-label-md text-on-surface">
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    lock_clock
                  </span>
                  {' '}
                  <span>
                    {"Self-Service Payslips & Annual Tax Vault"}
                  </span>
                </div>
                <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-[10px] bg-surface-container-lowest/80 border border-outline-variant/40 shadow-sm backdrop-blur-md text-label-md font-label-md text-on-surface">
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    gavel
                  </span>
                  {' '}
                  <span>
                    Multi-Jurisdiction Rules Engine
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="glass-card-elevated rounded-2xl p-8 border border-white relative overflow-hidden">
                <div className="absolute -top-16 -right-16 w-44 h-44 bg-primary-container/15 rounded-full blur-3xl pointer-events-none" />
                <div className="flex items-center justify-between pb-5 border-b border-outline-variant/30 mb-6">
                  <div>
                    <h3 className="text-headline-sm font-headline-sm font-bold text-on-surface">
                      Book a live product demo
                    </h3>
                    <p className="text-body-sm font-body-sm text-on-surface-variant mt-0.5">
                      Custom architecture walk-through for your entity
                    </p>
                  </div>
                  {' '}
                  <span className="px-2.5 py-1 rounded-[6px] bg-[#A5F3FC]/60 text-[#0E4A56] text-label-sm font-label-sm font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0E4A56]" />
                    {' '}
                    Live
                  </span>
                </div>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-label-md font-label-md text-on-surface mb-1.5">
                      Full Name
                    </label>
                    {' '}
                    <input className="w-full h-12 px-4 rounded-[10px] bg-white/70 border border-outline-variant/60 focus:border-primary-container focus:ring-4 focus:ring-primary-container/15 text-body-md font-body-md text-on-surface placeholder:text-outline outline-none transition-all" placeholder="e.g. Jordan Vane" type="text" />
                  </div>
                  <div>
                    <label className="block text-label-md font-label-md text-on-surface mb-1.5">
                      Work Email
                    </label>
                    {' '}
                    <input className="w-full h-12 px-4 rounded-[10px] bg-white/70 border border-outline-variant/60 focus:border-primary-container focus:ring-4 focus:ring-primary-container/15 text-body-md font-body-md text-on-surface placeholder:text-outline outline-none transition-all" placeholder="jordan@enterprise.com" type="email" />
                  </div>
                  <div>
                    <label className="block text-label-md font-label-md text-on-surface mb-1.5">
                      Phone Number
                    </label>
                    {' '}
                    <input className="w-full h-12 px-4 rounded-[10px] bg-white/70 border border-outline-variant/60 focus:border-primary-container focus:ring-4 focus:ring-primary-container/15 text-body-md font-body-md text-on-surface placeholder:text-outline outline-none transition-all" placeholder="Phone number" type="tel" />
                  </div>
                  <div>
                    <label className="block text-label-md font-label-md text-on-surface mb-1.5">
                      {"Team Size & Scale"}
                    </label>
                    {' '}
                    <select className="w-full h-12 px-4 rounded-[10px] bg-white/70 border border-outline-variant/60 focus:border-primary-container focus:ring-4 focus:ring-primary-container/15 text-body-md font-body-md text-on-surface outline-none transition-all">
                      <option>
                        10–100 Employees
                      </option>
                      <option>
                        100–1,000 Employees
                      </option>
                      <option>
                        1,000+ Multi-Entity Enterprise
                      </option>
                    </select>
                  </div>
                  <div className="pt-2">
                    <button className="w-full h-12 btn-gradient-primary rounded-[10px] text-white font-semibold text-label-lg font-label-lg flex items-center justify-center gap-2 shadow-md" type="submit">
                      <span>
                        Request Live Demo
                      </span>
                      {' '}
                      <span className="material-symbols-outlined text-[18px]">
                        calendar_today
                      </span>
                    </button>
                  </div>
                  <div className="flex items-center justify-center gap-2 pt-2 text-center text-label-sm font-label-sm text-on-surface-variant">
                    <span className="material-symbols-outlined text-[15px] text-secondary">
                      verified
                    </span>
                    {' '}
                    <span>
                      Encrypted hosting, role-based access and regular backups.
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="px-2.5 py-1 rounded-[6px] bg-secondary-fixed text-on-secondary-fixed-variant text-label-sm font-label-sm tracking-wide font-semibold uppercase">
                Real-Time Operational Console
              </span>
              {' '}
              <h2 className="text-headline-lg font-headline-lg text-on-surface font-bold tracking-tight mt-2">
                Horizon PayOS v4.2 - Multi-Tier Payroll Engine
              </h2>
            </div>
            <div className="flex items-center gap-2 text-body-sm font-body-sm text-on-surface-variant">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              {' '}
              <span>
                Rules Engine: Compliant with regional tax schedules. Zero calculation drift.
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-stretch">
            <div className="xl:col-span-4 rounded-2xl bg-inverse-surface text-inverse-on-surface p-6 flex flex-col justify-between border border-outline/30 relative overflow-hidden group shadow-lg">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ff7555]" />
                  {' '}
                  <span className="w-3 h-3 rounded-full bg-amber-400" />
                  {' '}
                  <span className="w-3 h-3 rounded-full bg-[#ceee93]" />
                  {' '}
                  <span className="font-mono text-label-sm text-surface-dim ml-2">
                    telemetry-audit.sh
                  </span>
                </div>
                {' '}
                <span className="text-label-sm font-label-sm font-mono px-2 py-0.5 rounded-[6px] bg-white/10 text-white">
                  02:14
                </span>
              </div>
              <div className="my-8 space-y-4">
                <div className="relative w-full aspect-video rounded-xl bg-black/40 border border-white/10 flex items-center justify-center overflow-hidden cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-tertiary/20" />
                  <div className="w-14 h-14 rounded-full bg-white/90 text-primary flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined material-symbols-fill text-3xl ml-1">
                      play_arrow
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 text-label-sm font-label-sm font-mono text-white/90 bg-black/60 px-2 py-1 rounded-[6px] backdrop-blur-sm">
                    Watch Pay Run Engine: Instant Gross-to-Net Execution
                  </div>
                </div>
                <div className="font-mono text-xs space-y-1.5 text-surface-dim pt-2">
                  <div className="flex items-center justify-between">
                    <span>
                      {"> PULL_ATTENDANCE_STREAM"}
                    </span>
                    {' '}
                    <span className="text-[#ceee93]">
                      312 records OK
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>
                      {"> COMPUTE_STATUTORY_TIER"}
                    </span>
                    {' '}
                    <span className="text-[#ceee93]">
                      100% matched
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>
                      {"> CRYPTO_LEDGER_HASH"}
                    </span>
                    {' '}
                    <span className="text-primary-fixed-dim">
                      0x9a8f...4e1b
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                <span className="material-symbols-outlined text-[#a1eff8] text-xl">
                  speed
                </span>
                {' '}
                <div className="text-body-sm font-body-sm text-surface-dim">
                  Batch processing speed:
                  {' '}
                  <strong className="text-white font-medium">
                    480 payslips/sec
                  </strong>
                </div>
              </div>
            </div>
            <div className="xl:col-span-8 glass-card rounded-2xl p-6 md:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-outline-variant/30 gap-4">
                <div>
                  <div className="text-headline-sm font-headline-sm font-bold text-on-surface">
                    October 2025 Regular Pay Run — 312 Active Employees
                  </div>
                  <div className="text-body-sm font-body-sm text-on-surface-variant flex items-center gap-2 mt-0.5">
                    <span>
                      Entity: Horizon Core Global LLC
                    </span>
                    {' '}
                    <span>
                      •
                    </span>
                    {' '}
                    <span>
                      Pay Cycle: Bi-Weekly (Oct 01 – Oct 15)
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1.5 rounded-[6px] bg-[#D9F99D] text-[#2D4A08] text-label-md font-label-md font-semibold flex items-center gap-1.5 shadow-sm">
                    <span className="material-symbols-outlined text-sm font-bold">
                      check_circle
                    </span>
                    {' '}
                    {"Verified & Ready for Remittance"}
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-surface-container-low/80 border border-white">
                  <div className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider">
                    Total Gross
                  </div>
                  <div className="text-headline-sm font-headline-sm font-bold text-on-surface mt-1">
                    $412,850.00
                  </div>
                  <div className="text-label-sm text-secondary font-medium mt-0.5">
                    +0.0% variance
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-surface-container-low/80 border border-white">
                  <div className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider">
                    Statutory Withholding
                  </div>
                  <div className="text-headline-sm font-headline-sm font-bold text-primary mt-1">
                    $98,240.00
                  </div>
                  <div className="text-label-sm text-on-surface-variant mt-0.5">
                    12 Jurisdictions
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-surface-container-low/80 border border-white">
                  <div className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider">
                    Employer Contributions
                  </div>
                  <div className="text-headline-sm font-headline-sm font-bold text-tertiary mt-1">
                    $36,120.00
                  </div>
                  <div className="text-label-sm text-on-surface-variant mt-0.5">
                    Pension + Health
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-surface-container-low/80 border border-white">
                  <div className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider">
                    Net Disbursed
                  </div>
                  <div className="text-headline-sm font-headline-sm font-bold text-on-surface mt-1">
                    $314,610.00
                  </div>
                  <div className="text-label-sm text-secondary font-medium mt-0.5">
                    ACH Direct Staged
                  </div>
                </div>
              </div>
              <div className="overflow-x-auto rounded-xl border border-outline-variant/30 bg-white/60">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-surface-container-low/90 text-on-surface-variant text-label-sm font-label-sm border-b border-outline-variant/30">
                      <th className="py-3 px-4">
                        Employee
                      </th>
                      <th className="py-3 px-4">
                        Dept / Cost Center
                      </th>
                      <th className="py-3 px-4">
                        Gross Wage
                      </th>
                      <th className="py-3 px-4">
                        Tax / Statutory
                      </th>
                      <th className="py-3 px-4">
                        Deductions
                      </th>
                      <th className="py-3 px-4">
                        Net Payable
                      </th>
                      <th className="py-3 px-4 text-center">
                        Audit
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/20 text-body-sm font-body-sm text-on-surface">
                    <tr className="hover:bg-white/90 transition-colors">
                      <td className="py-3 px-4 font-medium flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
                          A
                        </span>
                        {' '}
                        <span>
                          [Employee Name 01]
                        </span>
                      </td>
                      <td className="py-3 px-4 text-on-surface-variant">
                        Core Engineering
                      </td>
                      <td className="py-3 px-4 font-mono">
                        $8,250.00
                      </td>
                      <td className="py-3 px-4 font-mono text-primary">
                        -$1,980.00
                      </td>
                      <td className="py-3 px-4 font-mono text-on-surface-variant">
                        -$412.50
                      </td>
                      <td className="py-3 px-4 font-mono font-semibold">
                        $5,857.50
                      </td>
                      <td className="py-3 px-4 text-center">
                        <span className="material-symbols-outlined text-[#2D4A08] text-base">
                          verified
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-white/90 transition-colors">
                      <td className="py-3 px-4 font-medium flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-tertiary/10 text-tertiary flex items-center justify-center font-bold text-xs">
                          M
                        </span>
                        {' '}
                        <span>
                          [Employee Name 02]
                        </span>
                      </td>
                      <td className="py-3 px-4 text-on-surface-variant">
                        Product Strategy
                      </td>
                      <td className="py-3 px-4 font-mono">
                        $7,400.00
                      </td>
                      <td className="py-3 px-4 font-mono text-primary">
                        -$1,776.00
                      </td>
                      <td className="py-3 px-4 font-mono text-on-surface-variant">
                        -$370.00
                      </td>
                      <td className="py-3 px-4 font-mono font-semibold">
                        $5,254.00
                      </td>
                      <td className="py-3 px-4 text-center">
                        <span className="material-symbols-outlined text-[#2D4A08] text-base">
                          verified
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-white/90 transition-colors">
                      <td className="py-3 px-4 font-medium flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-secondary/10 text-secondary flex items-center justify-center font-bold text-xs">
                          R
                        </span>
                        {' '}
                        <span>
                          [Employee Name 03]
                        </span>
                      </td>
                      <td className="py-3 px-4 text-on-surface-variant">
                        Global Operations
                      </td>
                      <td className="py-3 px-4 font-mono">
                        $6,900.00
                      </td>
                      <td className="py-3 px-4 font-mono text-primary">
                        -$1,656.00
                      </td>
                      <td className="py-3 px-4 font-mono text-on-surface-variant">
                        -$345.00
                      </td>
                      <td className="py-3 px-4 font-mono font-semibold">
                        $4,899.00
                      </td>
                      <td className="py-3 px-4 text-center">
                        <span className="material-symbols-outlined text-[#2D4A08] text-base">
                          verified
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant pt-1">
                <span>
                  Deterministic Cryptographic Hash: SHA-256 9f3a…c71e
                </span>
                {' '}
                <a className="text-primary font-semibold hover:underline flex items-center gap-1" href="#">
                  View Detailed Pay Run Registry
                  {' '}
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="space-y-12">
          <div className="max-w-3xl">
            <span className="px-2.5 py-1 rounded-[6px] bg-primary-container/15 text-primary text-label-sm font-label-sm tracking-wide font-semibold uppercase">
              The Operational Bottleneck
            </span>
            {' '}
            <h2 className="text-headline-lg font-headline-lg text-on-surface font-bold tracking-tight mt-2">
              Payroll Has No Room for "Close Enough" Formula Errors
            </h2>
            <p className="text-body-lg font-body-lg text-on-surface-variant mt-4">
              Manual spreadsheets, rogue formula edits, and disjointed time-tracking turn paydays into high-stress cycles of employee disputes and regulatory penalties. When tax withholding changes and attendance adjustments are keyed in by hand, latency accumulates and compliance degrades. Horizon replaces brittle spreadsheets with a deterministic computational pipeline.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card rounded-2xl p-8 space-y-4">
              <div className="w-12 h-12 rounded-[10px] bg-primary/10 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">
                  calculate
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm font-bold text-on-surface">
                Automated Gross-to-Net Precision
              </h3>
              <p className="text-body-md font-body-md text-on-surface-variant">
                Every calculation runs on deterministic payroll logic, accounting for tier-based tax brackets and local deductions automatically. Manual recalculations and round-off discrepancies are eliminated entirely.
              </p>
              <div className="flex items-center gap-2 text-label-md font-label-md text-secondary font-semibold pt-2">
                <span className="material-symbols-outlined text-sm">
                  check_circle
                </span>
                {' '}
                <span>
                  Deterministic zero-error guarantee
                </span>
              </div>
            </div>
            <div className="glass-card rounded-2xl p-8 space-y-4">
              <div className="w-12 h-12 rounded-[10px] bg-secondary/15 text-secondary flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">
                  policy
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm font-bold text-on-surface">
                Built-in Multi-Jurisdiction Compliance
              </h3>
              <p className="text-body-md font-body-md text-on-surface-variant">
                Tax tables, social security withholdings, and mandatory filings update proactively without manual spreadsheet patching. Seamless multi-entity operations maintain continuous regional compliance.
              </p>
              <div className="flex items-center gap-2 text-label-md font-label-md text-secondary font-semibold pt-2">
                <span className="material-symbols-outlined text-sm">
                  check_circle
                </span>
                {' '}
                <span>
                  Proactive regulatory rate sync
                </span>
              </div>
            </div>
            <div className="glass-card rounded-2xl p-8 space-y-4">
              <div className="w-12 h-12 rounded-[10px] bg-tertiary/15 text-tertiary flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">
                  badge
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm font-bold text-on-surface">
                Frictionless Employee Self-Service
              </h3>
              <p className="text-body-md font-body-md text-on-surface-variant">
                Employees inspect itemized digital payslips, bonus breakdowns, and end-of-year tax forms directly from web or mobile. HR teams recover dozens of hours normally wasted on ad-hoc receipt queries.
              </p>
              <div className="flex items-center gap-2 text-label-md font-label-md text-secondary font-semibold pt-2">
                <span className="material-symbols-outlined text-sm">
                  check_circle
                </span>
                {' '}
                <span>
                  Zero HR administrative ticket overhead
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="px-2.5 py-1 rounded-[6px] bg-secondary-fixed text-on-secondary-fixed-variant text-label-sm font-label-sm tracking-wide font-semibold uppercase">
                Engine Architecture
              </span>
              {' '}
              <h2 className="text-headline-lg font-headline-lg text-on-surface font-bold tracking-tight mt-2">
                Six Core Platform Capabilities
              </h2>
            </div>
            <p className="text-body-md font-body-md text-on-surface-variant max-w-md">
              Structured for rapid payroll runs, unbending statutory compliance, and granular ledger reporting.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6 space-y-3">
              <div className="p-5 rounded-2xl bg-white/80 border-2 border-primary/40 shadow-sm flex items-start gap-4">
                <span className="text-headline-sm font-headline-sm font-bold text-primary">
                  01
                </span>
                {' '}
                <div>
                  <h4 className="text-headline-sm font-headline-sm font-bold text-on-surface">
                    Automated Statutory Deductions and Regional Filings
                  </h4>
                  <p className="text-body-sm font-body-sm text-on-surface-variant mt-1">
                    Automatic deduction computations aligned to local municipal, regional, and national tax bands with direct remittance export.
                  </p>
                </div>
              </div>
              <div className="p-5 rounded-2xl bg-surface-container-low/60 border border-outline-variant/30 hover:bg-white/70 transition-colors flex items-start gap-4">
                <span className="text-headline-sm font-headline-sm font-bold text-on-surface-variant">
                  02
                </span>
                {' '}
                <div>
                  <h4 className="text-headline-sm font-headline-sm font-bold text-on-surface">
                    {"Configurable Salary Structure & Compensation Bands"}
                  </h4>
                  <p className="text-body-sm font-body-sm text-on-surface-variant mt-1">
                    Modular wage structures supporting basic, housing allowances, per-diems, transport stipends, and non-taxable allowances.
                  </p>
                </div>
              </div>
              <div className="p-5 rounded-2xl bg-surface-container-low/60 border border-outline-variant/30 hover:bg-white/70 transition-colors flex items-start gap-4">
                <span className="text-headline-sm font-headline-sm font-bold text-on-surface-variant">
                  03
                </span>
                {' '}
                <div>
                  <h4 className="text-headline-sm font-headline-sm font-bold text-on-surface">
                    {"Attendance-Synced Pay Runs & Overtime Computation"}
                  </h4>
                  <p className="text-body-sm font-body-sm text-on-surface-variant mt-1">
                    Instant sync with biometric clock-ins, shift rotations, holiday premiums, and approved paid time-off balance calculations.
                  </p>
                </div>
              </div>
              <div className="p-5 rounded-2xl bg-surface-container-low/60 border border-outline-variant/30 hover:bg-white/70 transition-colors flex items-start gap-4">
                <span className="text-headline-sm font-headline-sm font-bold text-on-surface-variant">
                  04
                </span>
                {' '}
                <div>
                  <h4 className="text-headline-sm font-headline-sm font-bold text-on-surface">
                    Off-Cycle, Commission, and Bonus Payroll Runs
                  </h4>
                  <p className="text-body-sm font-body-sm text-on-surface-variant mt-1">
                    Execute spot awards, quarterly commission pools, and termination severances without interfering with regular cycle runs.
                  </p>
                </div>
              </div>
              <div className="p-5 rounded-2xl bg-surface-container-low/60 border border-outline-variant/30 hover:bg-white/70 transition-colors flex items-start gap-4">
                <span className="text-headline-sm font-headline-sm font-bold text-on-surface-variant">
                  05
                </span>
                {' '}
                <div>
                  <h4 className="text-headline-sm font-headline-sm font-bold text-on-surface">
                    {"Self-Service Payslips & Annual Tax Archive"}
                  </h4>
                  <p className="text-body-sm font-body-sm text-on-surface-variant mt-1">
                    Encrypted personal vault for historical earnings declarations, PDF payslip downloads, and authenticated annual tax returns.
                  </p>
                </div>
              </div>
              <div className="p-5 rounded-2xl bg-surface-container-low/60 border border-outline-variant/30 hover:bg-white/70 transition-colors flex items-start gap-4">
                <span className="text-headline-sm font-headline-sm font-bold text-on-surface-variant">
                  06
                </span>
                {' '}
                <div>
                  <h4 className="text-headline-sm font-headline-sm font-bold text-on-surface">
                    Multi-Jurisdiction Compliance Rules Engine
                  </h4>
                  <p className="text-body-sm font-body-sm text-on-surface-variant mt-1">
                    Enforce country-specific labor statutes, retirement contributions, and healthcare caps across worldwide subsidiary offices.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 glass-card-elevated rounded-2xl p-8 border border-white space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-outline-variant/30">
                <div>
                  <div className="text-label-sm font-label-sm uppercase tracking-wider text-primary font-semibold">
                    Deep Dive Module
                  </div>
                  <h3 className="text-headline-sm font-headline-sm font-bold text-on-surface">
                    Automated Statutory Deductions Inspector
                  </h3>
                </div>
                {' '}
                <span className="px-3 py-1 rounded-[6px] bg-[#D9F99D] text-[#2D4A08] text-label-sm font-label-sm font-bold">
                  99.8% Ground Truth Match
                </span>
              </div>
              <p className="text-body-md font-body-md text-on-surface-variant">
                Deterministic validation verifies regional withholding rules against active governmental schedules before disbursement files are compiled.
              </p>
              <div className="rounded-xl border border-outline-variant/30 bg-white/70 overflow-hidden">
                <div className="bg-surface-container-low px-4 py-2.5 text-label-sm font-label-sm font-semibold text-on-surface border-b border-outline-variant/30 flex justify-between">
                  <span>
                    Statutory Rule Parameter
                  </span>
                  {' '}
                  <span>
                    Audit Result
                  </span>
                </div>
                <div className="divide-y divide-outline-variant/20 text-body-sm font-body-sm">
                  <div className="px-4 py-3 flex items-center justify-between">
                    <div>
                      <div className="font-medium text-on-surface">
                        Federal / National Income Withholding
                      </div>
                      <div className="text-xs text-on-surface-variant">
                        Tiered bracket progressive calculation
                      </div>
                    </div>
                    {' '}
                    <span className="px-2.5 py-0.5 rounded-[6px] bg-secondary-container text-on-secondary-container font-mono text-xs font-semibold">
                      Verified
                    </span>
                  </div>
                  <div className="px-4 py-3 flex items-center justify-between">
                    <div>
                      <div className="font-medium text-on-surface">
                        {"Social Security & Retirement Mandate"}
                      </div>
                      <div className="text-xs text-on-surface-variant">
                        Statutory wage base cap enforced
                      </div>
                    </div>
                    {' '}
                    <span className="px-2.5 py-0.5 rounded-[6px] bg-secondary-container text-on-secondary-container font-mono text-xs font-semibold">
                      Verified
                    </span>
                  </div>
                  <div className="px-4 py-3 flex items-center justify-between">
                    <div>
                      <div className="font-medium text-on-surface">
                        {"Regional Medical & Disability Insurance"}
                      </div>
                      <div className="text-xs text-on-surface-variant">
                        Split employer/employee liability
                      </div>
                    </div>
                    {' '}
                    <span className="px-2.5 py-0.5 rounded-[6px] bg-secondary-container text-on-secondary-container font-mono text-xs font-semibold">
                      Verified
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-surface-container-low/80 border border-white/60 space-y-2">
                <div className="flex items-center justify-between text-label-md font-label-md">
                  <span className="text-on-surface-variant">
                    Rule Compliance Assurance
                  </span>
                  {' '}
                  <span className="text-primary font-bold">
                    100.0% Deterministic
                  </span>
                </div>
                <div className="w-full h-2 rounded-[4px] bg-surface-container-highest overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary to-primary-container w-full" />
                </div>
                <div className="text-xs text-on-surface-variant pt-1 flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm text-secondary">
                    lock
                  </span>
                  {' '}
                  <span>
                    Encrypted hosting, role-based access and regular backups.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="px-2.5 py-1 rounded-[6px] bg-primary/10 text-primary text-label-sm font-label-sm tracking-wide font-semibold uppercase">
              Execution Workflow
            </span>
            {' '}
            <h2 className="text-headline-lg font-headline-lg text-on-surface font-bold tracking-tight">
              How Horizon Executes Deterministic Payroll
            </h2>
            <p className="text-body-md font-body-md text-on-surface-variant">
              Four reliable, automated phases that transform raw timesheets into reconciled disbursements.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card rounded-2xl p-6 relative flex flex-col justify-between h-full">
              <div>
                <div className="w-10 h-10 rounded-[10px] bg-primary text-white flex items-center justify-center font-bold text-label-lg font-label-lg mb-4 shadow-sm">
                  01
                </div>
                <h3 className="text-headline-sm font-headline-sm font-bold text-on-surface">
                  {"Configure Pay Structures & Tax Profiles"}
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant mt-2">
                  Establish employee bands, compensation structures, deductions, and schedules once. Profiles lock into automated validation loops.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-outline-variant/30 text-label-sm font-label-sm text-primary font-semibold flex items-center gap-1">
                <span>
                  One-time setup
                </span>
                {' '}
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </div>
            </div>
            <div className="glass-card rounded-2xl p-6 relative flex flex-col justify-between h-full">
              <div>
                <div className="w-10 h-10 rounded-[10px] bg-primary text-white flex items-center justify-center font-bold text-label-lg font-label-lg mb-4 shadow-sm">
                  02
                </div>
                <h3 className="text-headline-sm font-headline-sm font-bold text-on-surface">
                  {"Ingest Attendance, Shifts & Leave"}
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant mt-2">
                  Automated sync with biometric, clock-in, and approved PTO data. Unapproved absences and overtime multipliers map instantly.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-outline-variant/30 text-label-sm font-label-sm text-primary font-semibold flex items-center gap-1">
                <span>
                  Continuous sync
                </span>
                {' '}
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </div>
            </div>
            <div className="glass-card rounded-2xl p-6 relative flex flex-col justify-between h-full">
              <div>
                <div className="w-10 h-10 rounded-[10px] bg-primary text-white flex items-center justify-center font-bold text-label-lg font-label-lg mb-4 shadow-sm">
                  03
                </div>
                <h3 className="text-headline-sm font-headline-sm font-bold text-on-surface">
                  Deterministic Gross-to-Net Computation
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant mt-2">
                  Zero-formula calculation with immediate exception flagging and digital payslip compilation across all tax codes in seconds.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-outline-variant/30 text-label-sm font-label-sm text-primary font-semibold flex items-center gap-1">
                <span>
                  Instant execution
                </span>
                {' '}
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </div>
            </div>
            <div className="glass-card rounded-2xl p-6 relative flex flex-col justify-between h-full">
              <div>
                <div className="w-10 h-10 rounded-[10px] bg-primary text-white flex items-center justify-center font-bold text-label-lg font-label-lg mb-4 shadow-sm">
                  04
                </div>
                <h3 className="text-headline-sm font-headline-sm font-bold text-on-surface">
                  {"Execute Disbursement & File Returns"}
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant mt-2">
                  Automated ACH/direct deposit dispatch, general ledger accounting exports, and pre-formatted jurisdictional tax filings.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-outline-variant/30 text-label-sm font-label-sm text-primary font-semibold flex items-center gap-1">
                <span>
                  Bank remittance ready
                </span>
                {' '}
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="space-y-12">
          <div className="max-w-2xl">
            <span className="px-2.5 py-1 rounded-[6px] bg-secondary-fixed text-on-secondary-fixed-variant text-label-sm font-label-sm tracking-wide font-semibold uppercase">
              Operational Value
            </span>
            {' '}
            <h2 className="text-headline-lg font-headline-lg text-on-surface font-bold tracking-tight mt-2">
              Why High-Velocity Operations Retire Spreadsheet Payroll
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card rounded-2xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-[10px] bg-secondary/15 text-secondary flex items-center justify-center">
                <span className="material-symbols-outlined">
                  trending_down
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm font-bold text-on-surface">
                Fewer Payroll Errors
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Eradicate formula slips and inaccurate withholdings, cutting payroll disputes down to zero.
              </p>
            </div>
            <div className="glass-card rounded-2xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-[10px] bg-primary/15 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined">
                  shield
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm font-bold text-on-surface">
                {"Lower Compliance & Audit Risk"}
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Proactively align with regional labor codes and automated statutory submissions without late penalties.
              </p>
            </div>
            <div className="glass-card rounded-2xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-[10px] bg-tertiary/15 text-tertiary flex items-center justify-center">
                <span className="material-symbols-outlined">
                  timer
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm font-bold text-on-surface">
                Reclaimed Operational Hours
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Cut multi-day pay run preparation down to minutes so finance teams focus on strategic forecasting.
              </p>
            </div>
            <div className="glass-card rounded-2xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-[10px] bg-amber-500/15 text-amber-700 flex items-center justify-center">
                <span className="material-symbols-outlined">
                  visibility
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm font-bold text-on-surface">
                Total Transparency
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Clear, line-item itemized breakdowns with zero ambiguity build trust and boost employee morale.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-6 rounded-2xl bg-surface-container-low/70 border border-outline-variant/30 space-y-2">
              <div className="flex items-center gap-2 text-on-surface font-semibold text-headline-sm font-headline-sm">
                <span className="material-symbols-outlined text-primary text-xl">
                  encrypted
                </span>
                {' '}
                Enterprise-Grade Security
              </div>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Encrypted hosting, role-based access control, and regular backups. Your data always remains fully yours and exportable.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-surface-container-low/70 border border-outline-variant/30 space-y-2">
              <div className="flex items-center gap-2 text-on-surface font-semibold text-headline-sm font-headline-sm">
                <span className="material-symbols-outlined text-primary text-xl">
                  price_check
                </span>
                {' '}
                Transparent, Scoped Pricing
              </div>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Every deployment is scoped individually with a fixed price and timeline agreed upfront — book a free consultation.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-surface-container-low/70 border border-outline-variant/30 space-y-2">
              <div className="flex items-center gap-2 text-on-surface font-semibold text-headline-sm font-headline-sm">
                <span className="material-symbols-outlined text-primary text-xl">
                  group
                </span>
                {' '}
                Built for Your Whole Team
              </div>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Role-based views mean founders, finance leads, payroll specialists, and employees see exactly what they need.
              </p>
            </div>
          </div>
        </section>
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="px-2.5 py-1 rounded-[6px] bg-primary/10 text-primary text-label-sm font-label-sm tracking-wide font-semibold uppercase">
              Transformation
            </span>
            {' '}
            <h2 className="text-headline-lg font-headline-lg text-on-surface font-bold tracking-tight">
              What Changes on Day One
            </h2>
            <p className="text-body-md font-body-md text-on-surface-variant">
              Immediate operational clarity compared to the spreadsheet status quo.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-surface-container-highest/60 border border-outline-variant/40 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-outline-variant/40">
                <h3 className="text-headline-sm font-headline-sm font-bold text-on-surface">
                  The Fragile Spreadsheet Routine
                </h3>
                {' '}
                <span className="px-3 py-1 rounded-[6px] bg-red-100 text-red-700 text-label-sm font-label-sm font-semibold">
                  High Vulnerability
                </span>
              </div>
              <ul className="space-y-4 text-body-md font-body-md text-on-surface-variant">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-error mt-0.5">
                    close
                  </span>
                  {' '}
                  <span>
                    Manual formulas vulnerable to accidental overrides, broken cell links, and silent calculation creep.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-error mt-0.5">
                    close
                  </span>
                  {' '}
                  <span>
                    Hand-assembled tax spreadsheets requiring constant scrutiny whenever municipal tables change.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-error mt-0.5">
                    close
                  </span>
                  {' '}
                  <span>
                    Constant HR emails for payslip copies, lost PDF attachments, and repetitive proof-of-income requests.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-error mt-0.5">
                    close
                  </span>
                  {' '}
                  <span>
                    End-of-month panic over miscalculations and frantic emergency correction checks during bank cutoff hours.
                  </span>
                </li>
              </ul>
            </div>
            <div className="glass-card-elevated rounded-2xl p-8 border border-white space-y-6 relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-secondary-fixed/30 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-center justify-between pb-4 border-b border-outline-variant/30">
                <h3 className="text-headline-sm font-headline-sm font-bold text-on-surface">
                  The Horizon Synchronized Engine
                </h3>
                {' '}
                <span className="px-3 py-1 rounded-[6px] bg-[#D9F99D] text-[#2D4A08] text-label-sm font-label-sm font-semibold">
                  Deterministic
                </span>
              </div>
              <ul className="space-y-4 text-body-md font-body-md text-on-surface">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary mt-0.5">
                    check_circle
                  </span>
                  {' '}
                  <span>
                    Automated gross-to-net computation with cryptographically verified ledger entries for every pay cycle.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary mt-0.5">
                    check_circle
                  </span>
                  {' '}
                  <span>
                    Proactively updated statutory returns and tax withholding formulas reflecting exact regional schedules.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary mt-0.5">
                    check_circle
                  </span>
                  {' '}
                  <span>
                    Instant employee self-service access to past earnings history, deduction records, and annual statements.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary mt-0.5">
                    check_circle
                  </span>
                  {' '}
                  <span>
                    Deterministic audit trails that give founders and auditors complete peace of mind with zero guesswork.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="max-w-4xl mx-auto space-y-8 w-full">
          <div className="text-center space-y-3">
            <span className="px-2.5 py-1 rounded-[6px] bg-primary/10 text-primary text-label-sm font-label-sm tracking-wide font-semibold uppercase">
              {"Support & Clarifications"}
            </span>
            {' '}
            <h2 className="text-headline-lg font-headline-lg text-on-surface font-bold tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-body-md font-body-md text-on-surface-variant">
              Common architectural and operational questions regarding Horizon Payroll.
            </p>
          </div>
          <div className="space-y-4">
            <div className="glass-card rounded-2xl p-6 border border-white">
              <div className="flex items-center justify-between cursor-pointer">
                <h3 className="text-headline-sm font-headline-sm font-bold text-on-surface">
                  1. How does the system stay current with changing tax regulations?
                </h3>
                {' '}
                <span className="material-symbols-outlined text-primary">
                  remove
                </span>
              </div>
              <div className="mt-4 pt-4 border-t border-outline-variant/30 text-body-md font-body-md text-on-surface-variant space-y-2">
                <p>
                  Horizon employs an automated compliance rule ingest engine. Whenever a regional, state, or federal agency updates statutory withholding schedules, tax brackets, or social security contribution ceilings, the rules are programmatically compiled, audited, and deployed into the platform with zero downtime.
                </p>
                <p className="text-xs text-on-surface-variant/80">
                  Historical cycles maintain the exact regulatory rules active during their initial run, preventing retroactive drift.
                </p>
              </div>
            </div>
            <div className="glass-card rounded-2xl p-6 border border-white/60">
              <div className="flex items-center justify-between cursor-pointer">
                <h3 className="text-headline-sm font-headline-sm font-bold text-on-surface">
                  2. Can we handle employees with different pay structures (hourly, salaried, commission-based, contractors)?
                </h3>
                {' '}
                <span className="material-symbols-outlined text-on-surface-variant">
                  add
                </span>
              </div>
            </div>
            <div className="glass-card rounded-2xl p-6 border border-white/60">
              <div className="flex items-center justify-between cursor-pointer">
                <h3 className="text-headline-sm font-headline-sm font-bold text-on-surface">
                  3. Can employees access past payslips and historic tax documentation independently?
                </h3>
                {' '}
                <span className="material-symbols-outlined text-on-surface-variant">
                  add
                </span>
              </div>
            </div>
            <div className="glass-card rounded-2xl p-6 border border-white/60">
              <div className="flex items-center justify-between cursor-pointer">
                <h3 className="text-headline-sm font-headline-sm font-bold text-on-surface">
                  4. How are off-cycle bonuses, severance, and spot adjustments processed?
                </h3>
                {' '}
                <span className="material-symbols-outlined text-on-surface-variant">
                  add
                </span>
              </div>
            </div>
            <div className="glass-card rounded-2xl p-6 border border-white/60">
              <div className="flex items-center justify-between cursor-pointer">
                <h3 className="text-headline-sm font-headline-sm font-bold text-on-surface">
                  5. What happens if an approved pay run requires an emergency correction or payslip reissue?
                </h3>
                {' '}
                <span className="material-symbols-outlined text-on-surface-variant">
                  add
                </span>
              </div>
            </div>
            <div className="glass-card rounded-2xl p-6 border border-white/60">
              <div className="flex items-center justify-between cursor-pointer">
                <h3 className="text-headline-sm font-headline-sm font-bold text-on-surface">
                  6. Can it handle differentiated pay rates for weekend shifts, overtime, and hazard pay?
                </h3>
                {' '}
                <span className="material-symbols-outlined text-on-surface-variant">
                  add
                </span>
              </div>
            </div>
            <div className="glass-card rounded-2xl p-6 border border-white/60">
              <div className="flex items-center justify-between cursor-pointer">
                <h3 className="text-headline-sm font-headline-sm font-bold text-on-surface">
                  7. How long does data migration and onboarding typically take?
                </h3>
                {' '}
                <span className="material-symbols-outlined text-on-surface-variant">
                  add
                </span>
              </div>
            </div>
            <div className="glass-card rounded-2xl p-6 border border-white/60">
              <div className="flex items-center justify-between cursor-pointer">
                <h3 className="text-headline-sm font-headline-sm font-bold text-on-surface">
                  8. Is our employee financial data secure, and who owns it?
                </h3>
                {' '}
                <span className="material-symbols-outlined text-on-surface-variant">
                  add
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="px-2.5 py-1 rounded-[6px] bg-secondary-fixed text-on-secondary-fixed-variant text-label-sm font-label-sm tracking-wide font-semibold uppercase">
                Integrated Modules
              </span>
              {' '}
              <h2 className="text-headline-lg font-headline-lg text-on-surface font-bold tracking-tight mt-2">
                More from the Horizon Ecosystem
              </h2>
            </div>
            {' '}
            <Link to="/products" className="text-primary font-semibold text-label-lg font-label-lg hover:underline flex items-center gap-1">
              Explore all product packages
              {' '}
              <span className="material-symbols-outlined text-base">
                arrow_forward
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card rounded-2xl p-6 flex flex-col justify-between space-y-4 hover:translate-y-[-2px] transition-transform">
              <div className="space-y-3">
                <span className="px-2.5 py-1 rounded-[6px] bg-[#D9F99D] text-[#2D4A08] text-label-sm font-label-sm font-semibold">
                  Financial Core
                </span>
                {' '}
                <h3 className="text-headline-sm font-headline-sm font-bold text-on-surface">
                  Business Accounting Software
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant">
                  Real-time general ledger, automated reconciliation, and accounts receivable pipeline sync.
                </p>
              </div>
              {' '}
              <Link to="/products/business-accounting" className="text-label-md font-label-md font-semibold text-primary hover:underline flex items-center gap-1 pt-2">
                Explore Package
                {' '}
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </Link>
            </div>
            <div className="glass-card rounded-2xl p-6 flex flex-col justify-between space-y-4 hover:translate-y-[-2px] transition-transform">
              <div className="space-y-3">
                <span className="px-2.5 py-1 rounded-[6px] bg-[#A5F3FC] text-[#0E4A56] text-label-sm font-label-sm font-semibold">
                  Spend Control
                </span>
                {' '}
                <h3 className="text-headline-sm font-headline-sm font-bold text-on-surface">
                  Employee Expense Management
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant">
                  Automated receipt OCR, corporate card reconciliation, and policy-driven approvals.
                </p>
              </div>
              {' '}
              <Link to="/products/expense-management" className="text-label-md font-label-md font-semibold text-primary hover:underline flex items-center gap-1 pt-2">
                Explore Package
                {' '}
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </Link>
            </div>
            <div className="glass-card rounded-2xl p-6 flex flex-col justify-between space-y-4 hover:translate-y-[-2px] transition-transform">
              <div className="space-y-3">
                <span className="px-2.5 py-1 rounded-[6px] bg-primary/10 text-primary text-label-sm font-label-sm font-semibold">
                  Workforce
                </span>
                {' '}
                <h3 className="text-headline-sm font-headline-sm font-bold text-on-surface">
                  HR Management System
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant">
                  Unified employee records, onboarding checklists, PTO tracking, and organization org charts.
                </p>
              </div>
              {' '}
              <Link to="/products/hr-management" className="text-label-md font-label-md font-semibold text-primary hover:underline flex items-center gap-1 pt-2">
                Explore Package
                {' '}
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </Link>
            </div>
            <div className="glass-card rounded-2xl p-6 flex flex-col justify-between space-y-4 hover:translate-y-[-2px] transition-transform">
              <div className="space-y-3">
                <span className="px-2.5 py-1 rounded-[6px] bg-amber-500/15 text-amber-800 text-label-sm font-label-sm font-semibold">
                  Supply Operations
                </span>
                {' '}
                <h3 className="text-headline-sm font-headline-sm font-bold text-on-surface">
                  Smart Inventory Control
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant">
                  Predictive stock replenishment, multi-warehouse tracking, and purchase order sync.
                </p>
              </div>
              {' '}
              <Link to="/products/inventory-control" className="text-label-md font-label-md font-semibold text-primary hover:underline flex items-center gap-1 pt-2">
                Explore Package
                {' '}
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </section>
        <section>
          <div className="rounded-2xl bg-gradient-to-br from-[#ff8a65] via-[#ff7555] to-[#ff6b4a] p-10 md:p-14 text-white relative overflow-hidden shadow-xl">
            <div className="max-w-3xl space-y-6 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-white/20 text-white text-label-sm font-label-sm backdrop-blur-md">
                <span className="material-symbols-outlined text-sm">
                  shield
                </span>
                {' '}
                Zero Discrepancy Commitment
              </div>
              <h2 className="text-display-lg font-display-lg font-bold leading-tight tracking-tight">
                Bring deterministic certainty to your payroll operations.
              </h2>
              <p className="text-body-lg font-body-lg text-white/90 max-w-xl">
                Retire spreadsheets today. Schedule a private architectural session with Horizon payroll systems engineers.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button className="px-6 py-3.5 rounded-[10px] bg-white text-primary font-semibold text-label-lg font-label-lg shadow-lg hover:bg-surface transition-all flex items-center gap-2" type="button">
                  <span>
                    Book an Architectural Scoping Consultation
                  </span>
                  {' '}
                  <span className="material-symbols-outlined text-base">
                    arrow_forward
                  </span>
                </button>
              </div>
              <div className="text-xs text-white/80 pt-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">
                  lock
                </span>
                {' '}
                <span>
                  Encrypted hosting, role-based access and regular backups.
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
      {' '}
    </div>
  )
}
