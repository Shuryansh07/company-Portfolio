// Generated from stitch/c_casestudies.html by scripts/stitch-to-jsx.mjs (npm run convert).
import { Link } from 'react-router-dom'
import './CaseStudies.css'

export default function CaseStudies() {
  return (
    <div className="pg-case-studies bg-background text-on-background font-body-md text-body-md antialiased min-h-screen flex flex-col selection:bg-primary-container/20 selection:text-primary -mt-20">
      <title>{"Case Studies — Horizon Enterprise AI Automation & ERP Solutions"}</title>
      {' '}
      {' '}
      <main className="flex-grow pt-32 pb-space-xl">
        <section className="max-w-[1600px] mx-auto px-margin-sm md:px-margin mb-16">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-white/90 via-white/50 to-white/20 border border-white/80 p-8 md:p-16 backdrop-blur-2xl shadow-[0_24px_48px_-12px_rgba(31,26,23,0.03)]">
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary-container/15 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[6px] bg-primary-container/15 text-primary text-label-sm font-label-sm uppercase tracking-wider mb-6">
                <span className="w-1.5 h-1.5 rounded-[1px] bg-primary" />
                {' '}
                {"PROVEN OUTCOMES & CASE STUDIES"}
              </div>
              <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-on-surface font-bold tracking-tight mb-6">
                Measurable enterprise velocity, delivered with fixed-scope certainty.
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
                Horizon engineers production-grade AI agents and modernizes ERP foundations across heavily regulated, multi-entity operations. We eradicate execution risk by delivering architectural milestones on deterministic timelines with contractually guaranteed system performance.
              </p>
            </div>
          </div>
        </section>
        <section className="max-w-[1600px] mx-auto px-margin-sm md:px-margin mb-12">
          <div className="flex flex-wrap items-center gap-3">
            <button type="button" data-filter="all" className="px-5 py-2.5 rounded-[10px] bg-primary text-on-primary font-label-lg text-label-lg font-semibold shadow-sm transition-all duration-150">
              All
            </button>
            {' '}
            <button type="button" data-filter="ai" className="px-5 py-2.5 rounded-[10px] bg-surface-container-lowest/80 border border-outline-variant/40 text-on-surface-variant hover:text-primary hover:border-primary/40 font-label-lg text-label-lg font-medium transition-all duration-150">
              AI Automation
            </button>
            {' '}
            <button type="button" data-filter="erp" className="px-5 py-2.5 rounded-[10px] bg-surface-container-lowest/80 border border-outline-variant/40 text-on-surface-variant hover:text-primary hover:border-primary/40 font-label-lg text-label-lg font-medium transition-all duration-150">
              {"ERP & CRM"}
            </button>
            {' '}
            <button type="button" data-filter="saas" className="px-5 py-2.5 rounded-[10px] bg-surface-container-lowest/80 border border-outline-variant/40 text-on-surface-variant hover:text-primary hover:border-primary/40 font-label-lg text-label-lg font-medium transition-all duration-150">
              Custom SaaS
            </button>
            {' '}
            <button type="button" data-filter="ecommerce" className="px-5 py-2.5 rounded-[10px] bg-surface-container-lowest/80 border border-outline-variant/40 text-on-surface-variant hover:text-primary hover:border-primary/40 font-label-lg text-label-lg font-medium transition-all duration-150">
              E-commerce
            </button>
          </div>
        </section>
        <section data-dept="ai" className="max-w-[1600px] mx-auto px-margin-sm md:px-margin mb-16">
          <div className="rounded-2xl bg-surface-container-lowest/85 backdrop-blur-xl border border-white/90 p-8 md:p-12 shadow-[0_16px_36px_-6px_rgba(31,26,23,0.04)]">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-[6px] bg-primary-container/15 text-primary font-label-sm text-label-sm uppercase tracking-wider font-semibold">
                  {"HEAVY LOGISTICS & FLEET"}
                </span>
                {' '}
              </div>
              <div className="font-label-md text-label-md text-on-surface-variant">
                {"Global Freight & Fleet Carrier"}
              </div>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight mb-8">
              {"Autonomous Dispatch Orchestration & Real-Time Fleet Accounting"}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-7 space-y-6">
                <div className="p-6 rounded-xl bg-surface/80 border border-outline-variant/20">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-2 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[20px]" data-icon="warning">
                      warning
                    </span>
                    {' '}
                    The Challenge
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Operating across regional distribution hubs, legacy operations depended on decentralized dispatch spreadsheets, manual telephone driver verification, and fragmented fuel telematics. Driver remittances were delayed by up to 18 business days, inducing high driver churn and severe cash-flow reconciliation lags across carrier settlement ledgers.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-surface/80 border border-outline-variant/20">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-2 flex items-center gap-2">
                    <span className="material-symbols-outlined text-tertiary text-[20px]" data-icon="hub">
                      hub
                    </span>
                    {' '}
                    The Horizon Solution
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Horizon architected an event-driven AI dispatch orchestration engine integrated directly with central general ledgers. Telematics ingest pipelines calculate multi-stop route payloads, automatically generate verified fuel settlement vouchers, and balance carrier accounts in real time without human intervention.
                  </p>
                </div>
                <div>
                  <Link to="/case-studies/autonomous-dispatch-fleet-accounting" className="inline-flex items-center gap-2 px-6 py-3 rounded-[10px] bg-primary text-on-primary font-label-lg text-label-lg font-semibold hover:shadow-md transition-all duration-150 active:scale-[0.98]">
                    <span>
                      Explore architectural breakdown
                    </span>
                    {' '}
                    <span className="material-symbols-outlined text-[18px]" data-icon="arrow_forward">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-5 space-y-6">
                <div className="p-6 rounded-xl bg-inverse-surface text-inverse-on-surface shadow-xl border border-white/10">
                  <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" />
                      {' '}
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-surface-variant font-mono">
                        Live Dispatch Orchestration
                      </span>
                    </div>
                    {' '}
                    <span className="px-2 py-0.5 rounded-[4px] bg-white/10 text-white font-mono text-[11px] font-semibold">
                      Active Node 04
                    </span>
                  </div>
                  <div className="space-y-3 font-mono text-[12px] text-surface-variant mb-6">
                    <div className="flex items-center justify-between p-2 rounded-[6px] bg-white/5">
                      <span>
                        TRK-9802 :: Autonomous Route Verified
                      </span>
                      {' '}
                      <span className="text-tertiary-fixed-dim">
                        0.14s
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-[6px] bg-white/5">
                      <span>
                        FUEL-SETTLE :: Ledger Entry Committed
                      </span>
                      {' '}
                      <span className="text-[#10B981]">
                        OK
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-[6px] bg-white/5">
                      <span>
                        DISPATCH-AI :: Congestion Model Reroute
                      </span>
                      {' '}
                      <span className="text-primary-fixed-dim">
                        SYNCD
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-[1600px] mx-auto px-margin-sm md:px-margin mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article data-dept="erp" className="flex flex-col justify-between rounded-2xl bg-surface-container-lowest/80 backdrop-blur-xl border border-white/80 p-8 shadow-sm hover:shadow-[0_12px_28px_-6px_rgba(31,26,23,0.06)] hover:-translate-y-1 transition-all duration-200">
              <div>
                <div className="h-48 rounded-xl bg-surface-container overflow-hidden mb-6 relative">
                  <img className="w-full h-full object-cover" data-alt="A clean architectural schematic and dashboard interface representing financial ledger harmonization, featuring layered frosted glass panels, pristine tabular financial data, and glowing coral accent lines in soft natural light." src="/images/e2bd9a9dc0.jpg" />
                  {' '}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-[6px] bg-surface-container-lowest/90 backdrop-blur-md text-on-surface font-label-sm text-label-sm font-semibold">
                      Financial Services
                    </span>
                  </div>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-3">
                  {"Multi-Entity Ledger Harmonization & Automated Currency Elimination"}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-2">
                  Fourteen international subsidiaries unified onto Horizon's real-time core ledger without closing active transaction books or pausing inter-company billings.
                </p>
              </div>
              <div className="pt-6 border-t border-outline-variant/30 flex items-center justify-between">
                {' '}
                <Link to="/case-studies/multi-entity-ledger-harmonization" className="inline-flex items-center gap-1.5 font-label-lg text-label-lg font-semibold text-primary hover:text-on-primary-container transition-colors">
                  <span>
                    Read case study
                  </span>
                  {' '}
                  <span className="material-symbols-outlined text-[16px]" data-icon="arrow_forward">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </article>
            <article data-dept="erp" className="flex flex-col justify-between rounded-2xl bg-surface-container-lowest/80 backdrop-blur-xl border border-white/80 p-8 shadow-sm hover:shadow-[0_12px_28px_-6px_rgba(31,26,23,0.06)] hover:-translate-y-1 transition-all duration-200">
              <div>
                <div className="h-48 rounded-xl bg-surface-container overflow-hidden mb-6 relative">
                  <img className="w-full h-full object-cover" data-alt="An industrial civil construction workflow dashboard showing real-time jobsite material telemetry, concrete equipment tracking charts, and field work order metrics rendered in a luminous editorial UI style." src="/images/de7b97268c.jpg" />
                  {' '}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-[6px] bg-surface-container-lowest/90 backdrop-blur-md text-on-surface font-label-sm text-label-sm font-semibold">
                      {"Construction & Civil"}
                    </span>
                  </div>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-3">
                  Company-Wide ERP Rollout Across Multiple Active Jobsites
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-2">
                  Subcontractor procurement, heavy equipment tracking, and field work orders synchronized instantly to central ERP accounting.
                </p>
              </div>
              <div className="pt-6 border-t border-outline-variant/30 flex items-center justify-between">
                {' '}
                <Link to="/case-studies/construction-erp-rollout" className="inline-flex items-center gap-1.5 font-label-lg text-label-lg font-semibold text-primary hover:text-on-primary-container transition-colors">
                  <span>
                    Read case study
                  </span>
                  {' '}
                  <span className="material-symbols-outlined text-[16px]" data-icon="arrow_forward">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </article>
            <article data-dept="saas" className="flex flex-col justify-between rounded-2xl bg-surface-container-lowest/80 backdrop-blur-xl border border-white/80 p-8 shadow-sm hover:shadow-[0_12px_28px_-6px_rgba(31,26,23,0.06)] hover:-translate-y-1 transition-all duration-200">
              <div>
                <div className="h-48 rounded-xl bg-surface-container overflow-hidden mb-6 relative">
                  <img className="w-full h-full object-cover" data-alt="A modern SaaS multi-tenant telemetry console showing event stream pipelines, granular role-based permissions matrix, and consumption-based billing nodes on an off-white glass card." src="/images/54bdfb1bac.jpg" />
                  {' '}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-[6px] bg-surface-container-lowest/90 backdrop-blur-md text-on-surface font-label-sm text-label-sm font-semibold">
                      {"Tech & SaaS"}
                    </span>
                  </div>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-3">
                  Enterprise-Ready Multi-Tenant SaaS MVP Built in Weeks
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-2">
                  Full-stack billing engine, role-based governance, and real-time event pipeline delivered on an immutable fixed-bid schedule.
                </p>
              </div>
              <div className="pt-6 border-t border-outline-variant/30 flex items-center justify-between">
                {' '}
                <Link to="/case-studies/multi-tenant-saas-mvp" className="inline-flex items-center gap-1.5 font-label-lg text-label-lg font-semibold text-primary hover:text-on-primary-container transition-colors">
                  <span>
                    Read case study
                  </span>
                  {' '}
                  <span className="material-symbols-outlined text-[16px]" data-icon="arrow_forward">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </article>
            <article data-dept="ecommerce" className="flex flex-col justify-between rounded-2xl bg-surface-container-lowest/80 backdrop-blur-xl border border-white/80 p-8 shadow-sm hover:shadow-[0_12px_28px_-6px_rgba(31,26,23,0.06)] hover:-translate-y-1 transition-all duration-200">
              <div>
                <div className="h-48 rounded-xl bg-surface-container overflow-hidden mb-6 relative">
                  <img className="w-full h-full object-cover" data-alt="High-volume headless commerce dashboard showing real-time inventory nodes, warehouse sync statuses, and fulfillment routing diagrams bathed in gentle ambient sunlight." src="/images/bff1deb7d0.jpg" />
                  {' '}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-[6px] bg-surface-container-lowest/90 backdrop-blur-md text-on-surface font-label-sm text-label-sm font-semibold">
                      {"E-commerce & Retail"}
                    </span>
                  </div>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-3">
                  {"High-Volume Headless Storefront Connected to Accounting & WMS"}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-2">
                  Instant inventory sync across 4 global fulfillment nodes, eliminating phantom stock, overselling, and order discrepancies.
                </p>
              </div>
              <div className="pt-6 border-t border-outline-variant/30 flex items-center justify-between">
                {' '}
                <Link to="/case-studies/headless-storefront-accounting-wms" className="inline-flex items-center gap-1.5 font-label-lg text-label-lg font-semibold text-primary hover:text-on-primary-container transition-colors">
                  <span>
                    Read case study
                  </span>
                  {' '}
                  <span className="material-symbols-outlined text-[16px]" data-icon="arrow_forward">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </article>
            <article data-dept="erp" className="flex flex-col justify-between rounded-2xl bg-surface-container-lowest/80 backdrop-blur-xl border border-white/80 p-8 shadow-sm hover:shadow-[0_12px_28px_-6px_rgba(31,26,23,0.06)] hover:-translate-y-1 transition-all duration-200">
              <div>
                <div className="h-48 rounded-xl bg-surface-container overflow-hidden mb-6 relative">
                  <img className="w-full h-full object-cover" data-alt="Advanced industrial manufacturing scheduler interface displaying robotic constraint parameters, parallel assembly shift allocations, and cycle efficiency graphs in a warm minimalist layout." src="/images/1776a22831.jpg" />
                  {' '}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-[6px] bg-surface-container-lowest/90 backdrop-blur-md text-on-surface font-label-sm text-label-sm font-semibold">
                      Advanced Manufacturing
                    </span>
                  </div>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-3">
                  {"Production Planning & Shift Scheduling System Rollout"}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-2">
                  Dynamic machine constraint scheduler replacing legacy spreadsheet handoffs across three high-throughput parallel assembly lines.
                </p>
              </div>
              <div className="pt-6 border-t border-outline-variant/30 flex items-center justify-between">
                {' '}
                <Link to="/case-studies/production-planning-rollout" className="inline-flex items-center gap-1.5 font-label-lg text-label-lg font-semibold text-primary hover:text-on-primary-container transition-colors">
                  <span>
                    Read case study
                  </span>
                  {' '}
                  <span className="material-symbols-outlined text-[16px]" data-icon="arrow_forward">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </article>
            <article data-dept="ai" className="flex flex-col justify-between rounded-2xl bg-surface-container-lowest/80 backdrop-blur-xl border border-white/80 p-8 shadow-sm hover:shadow-[0_12px_28px_-6px_rgba(31,26,23,0.06)] hover:-translate-y-1 transition-all duration-200">
              <div>
                <div className="h-48 rounded-xl bg-surface-container overflow-hidden mb-6 relative">
                  <img className="w-full h-full object-cover" data-alt="A field technician diagnostics application UI detailing high-voltage schematic pinouts, offline audio waveforms, and quality assurance checkpoints rendered with tactile editorial warmth." src="/images/67b85bfc57.jpg" />
                  {' '}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-[6px] bg-surface-container-lowest/90 backdrop-blur-md text-on-surface font-label-sm text-label-sm font-semibold">
                      Field Services
                    </span>
                  </div>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-3">
                  Autonomous AI QC Assistant for Remote Bucket Truck Technicians
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-2">
                  Schematic-verified mobile voice agent answering high-voltage pinout queries offline in active utility service bays.
                </p>
              </div>
              <div className="pt-6 border-t border-outline-variant/30 flex items-center justify-between">
                {' '}
                <Link to="/case-studies/ai-qc-assistant-field-technicians" className="inline-flex items-center gap-1.5 font-label-lg text-label-lg font-semibold text-primary hover:text-on-primary-container transition-colors">
                  <span>
                    Read case study
                  </span>
                  {' '}
                  <span className="material-symbols-outlined text-[16px]" data-icon="arrow_forward">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </article>
          </div>
        </section>
        <section className="max-w-[1600px] mx-auto px-margin-sm md:px-margin mb-24">
          <div className="p-8 md:p-12 rounded-2xl bg-surface-container-low/70 border border-outline-variant/30">
            <div className="max-w-2xl mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[6px] bg-primary-container/15 text-primary text-label-sm font-label-sm uppercase tracking-wider mb-4">
                {"GOVERNANCE & VERIFICATION"}
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
                Verifiable accountability, built into the deployment contract.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-xl bg-surface-container-lowest border border-white/80 shadow-sm relative">
                <div className="w-10 h-10 rounded-[10px] bg-primary-container/20 text-primary flex items-center justify-center font-bold text-headline-sm mb-6">
                  1
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-3">
                  Baseline Audit (Day 0)
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Precise benchmark measurement of legacy operational bottlenecks, reconciliation lag, exception rates, and manual labor overhead to establish immutable success criteria.
                </p>
              </div>
              <div className="p-8 rounded-xl bg-surface-container-lowest border border-white/80 shadow-sm relative">
                <div className="w-10 h-10 rounded-[10px] bg-primary-container/20 text-primary flex items-center justify-center font-bold text-headline-sm mb-6">
                  2
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-3">
                  Production Go-Live
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Staged cutover with zero downtime, parallel dual-ledger verification, full rollback resilience, and live real-time operational telemetry monitoring.
                </p>
              </div>
              <div className="p-8 rounded-xl bg-surface-container-lowest border border-white/80 shadow-sm relative">
                <div className="w-10 h-10 rounded-[10px] bg-primary-container/20 text-primary flex items-center justify-center font-bold text-headline-sm mb-6">
                  3
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-3">
                  90-Day Post-Launch Review
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Formal contractual reconciliation against contracted efficiency targets with ongoing SLA guarantees and continuous model fine-tuning schedules.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-[1600px] mx-auto px-margin-sm md:px-margin">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#FF8A65] to-[#FF6B4A] text-on-primary p-10 md:p-16 shadow-lg">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none" />
            <div className="relative z-10 max-w-3xl">
              <h2 className="font-headline-lg text-headline-lg md:text-[40px] md:leading-[48px] font-bold mb-4 text-white">
                Ready to replace operational friction with fixed-scope certainty?
              </h2>
              <p className="font-body-lg text-body-lg text-white/90 mb-8 max-w-2xl leading-relaxed">
                Schedule an architectural scoping consultation with our senior systems engineering team.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link to="/contact" className="px-6 py-3.5 rounded-[10px] bg-white text-primary font-label-lg text-label-lg font-bold shadow-md hover:bg-surface-container-lowest transition-all duration-150 active:scale-[0.98]">
                  Book an Architectural Scoping Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      {' '}
    </div>
  )
}
