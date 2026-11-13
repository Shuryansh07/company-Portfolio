// Generated from stitch/pd_employee-expense-management.html by scripts/stitch-to-jsx.mjs (npm run convert).
import { Link } from 'react-router-dom'
import './ExpenseManagement.css'

export default function ExpenseManagement() {
  return (
    <div className="pg-expense-management bg-background text-on-surface antialiased font-body-md selection:bg-primary-fixed selection:text-on-primary-fixed">
      <title>{"Employee Expense Management - Horizons"}</title>
      {' '}
      {' '}
      <main className="max-w-7xl mx-auto px-6 py-8 space-y-24">
        <section className="pt-4">
          <nav className="flex items-center gap-2 text-label-md font-label-md text-on-surface-variant mb-6">
            <Link to="/products" className="hover:text-primary transition-colors">
              Products
            </Link>
            {' '}
            <span className="text-outline-variant">
              /
            </span>
            {' '}
            <a className="hover:text-primary transition-colors" href="#">
              {"Finance & Books"}
            </a>
            {' '}
            <span className="text-outline-variant">
              /
            </span>
            {' '}
            <span className="text-on-surface font-semibold">
              Employee Expense Management
            </span>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[6px] bg-primary-fixed/50 text-on-primary-fixed font-label-sm text-label-sm font-semibold tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                {' '}
                {"EXPENSE & REIMBURSEMENT"}
              </div>
              <h1 className="font-display-lg text-display-lg text-on-surface tracking-tight">
                Employee Expense Management
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                Snap a receipt, and let the system handle categorizing, matching and approving it from there — with zero manual ledger scrambling.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-[10px] border border-outline-variant/40 bg-surface-container-lowest/60 backdrop-blur-sm text-body-sm font-body-sm text-on-surface">
                  <span className="material-symbols-outlined text-primary text-base" data-icon="document_scanner">
                    document_scanner
                  </span>
                  {' '}
                  <span>
                    Receipt Auto-Scan with OCR Data Extraction
                  </span>
                </div>
                <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-[10px] border border-outline-variant/40 bg-surface-container-lowest/60 backdrop-blur-sm text-body-sm font-body-sm text-on-surface">
                  <span className="material-symbols-outlined text-primary text-base" data-icon="alt_route">
                    alt_route
                  </span>
                  {' '}
                  <span>
                    {"Configurable Multi-Stage & Parallel Approvals"}
                  </span>
                </div>
                <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-[10px] border border-outline-variant/40 bg-surface-container-lowest/60 backdrop-blur-sm text-body-sm font-body-sm text-on-surface">
                  <span className="material-symbols-outlined text-primary text-base" data-icon="flag">
                    flag
                  </span>
                  {' '}
                  <span>
                    Real-Time Policy Violation Flagging
                  </span>
                </div>
                <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-[10px] border border-outline-variant/40 bg-surface-container-lowest/60 backdrop-blur-sm text-body-sm font-body-sm text-on-surface">
                  <span className="material-symbols-outlined text-primary text-base" data-icon="distance">
                    distance
                  </span>
                  {' '}
                  <span>
                    Mileage Tracking with Auto-Calculated Reimbursement
                  </span>
                </div>
                <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-[10px] border border-outline-variant/40 bg-surface-container-lowest/60 backdrop-blur-sm text-body-sm font-body-sm text-on-surface">
                  <span className="material-symbols-outlined text-primary text-base" data-icon="credit_card">
                    credit_card
                  </span>
                  {' '}
                  <span>
                    Corporate Card Feed Reconciliation
                  </span>
                </div>
                <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-[10px] border border-outline-variant/40 bg-surface-container-lowest/60 backdrop-blur-sm text-body-sm font-body-sm text-on-surface">
                  <span className="material-symbols-outlined text-primary text-base" data-icon="security">
                    security
                  </span>
                  {' '}
                  <span>
                    Duplicate and Anomaly Detection
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5" id="demo-form">
              <div className="rounded-xl border border-outline-variant/40 bg-surface-container-lowest/90 backdrop-blur-md p-7 shadow-sm">
                <h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-1">
                  Book a live product demo
                </h2>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-5">
                  See how Horizons digitizes receipt pipelines and accelerates employee payback.
                </p>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block font-label-md text-label-md text-on-surface font-medium mb-1.5">
                      Full Name
                    </label>
                    {' '}
                    <input className="w-full h-11 px-3.5 rounded-[10px] border border-outline-variant/60 bg-surface-container-low/50 text-body-md text-on-surface focus:outline-none focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 transition-all" placeholder="Sarah Jenkins" type="text" />
                  </div>
                  <div>
                    <label className="block font-label-md text-label-md text-on-surface font-medium mb-1.5">
                      Work Email
                    </label>
                    {' '}
                    <input className="w-full h-11 px-3.5 rounded-[10px] border border-outline-variant/60 bg-surface-container-low/50 text-body-md text-on-surface focus:outline-none focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 transition-all" placeholder="sarah@enterprise.com" type="email" />
                  </div>
                  <div>
                    <label className="block font-label-md text-label-md text-on-surface font-medium mb-1.5">
                      Phone
                    </label>
                    {' '}
                    <input className="w-full h-11 px-3.5 rounded-[10px] border border-outline-variant/60 bg-surface-container-low/50 text-body-md text-on-surface focus:outline-none focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 transition-all" placeholder="Phone number" type="tel" />
                  </div>
                  <div>
                    <label className="block font-label-md text-label-md text-on-surface font-medium mb-1.5">
                      Monthly Expense Volume / Team Size
                    </label>
                    {' '}
                    <select className="w-full h-11 px-3.5 rounded-[10px] border border-outline-variant/60 bg-surface-container-low/50 text-body-md text-on-surface focus:outline-none focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 transition-all">
                      <option>
                        50 - 250 Active Submitters
                      </option>
                      <option>
                        250 - 1,000 Active Submitters
                      </option>
                      <option>
                        1,000+ Active Submitters
                      </option>
                    </select>
                  </div>
                  {' '}
                  <button className="w-full h-11 rounded-[10px] bg-primary text-white font-label-lg text-label-lg font-semibold hover:bg-primary/95 transition-all shadow-sm flex items-center justify-center gap-2 mt-2" type="submit">
                    <span>
                      Request Live Demo
                    </span>
                    {' '}
                    <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">
                      arrow_forward
                    </span>
                  </button>
                  {' '}
                  <p className="font-label-sm text-label-sm text-on-surface-variant text-center pt-2">
                    {"Guaranteed turnaround within 48 hours • Encrypted hosting & role-based access"}
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="space-y-8">
          <div className="space-y-2">
            <div className="font-label-md text-label-md text-primary font-bold tracking-wider">
              INTERACTIVE CONTROL PLANE
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              See Employee Expense Management in action
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
              See automated OCR parsing, multi-currency conversion, and corporate card matching execute in real time.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-12 rounded-xl bg-surface-container-lowest border border-outline-variant/40 p-6 flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-surface-container-high">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-xl" data-icon="account_tree">
                      account_tree
                    </span>
                    {' '}
                    <span className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                      Horizons Expense Hub v4.2
                    </span>
                  </div>
                  {' '}
                  <span className="px-2.5 py-1 rounded-[6px] bg-secondary-fixed/50 text-on-secondary-fixed font-label-sm text-label-sm font-semibold">
                    {"Live Amex & Visa Feed Syncing"}
                  </span>
                </div>
                <div className="mt-4 p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-label-md text-label-md font-bold text-on-surface">
                      Receipt #EXP-94021
                    </span>
                    {' '}
                    <span className="px-2 py-0.5 rounded-[6px] bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-semibold">
                      {"Status: Auto-Matched & Policy Verified"}
                    </span>
                  </div>
                  <div className="font-body-md text-body-md text-on-surface font-semibold">
                    Merchant: Delta Air Lines — JFK to SFO ($482.50 USD)
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-left">
                    <div className="p-2 rounded-[8px] bg-surface-container-lowest border border-outline-variant/20">
                      <div className="font-label-sm text-label-sm text-on-surface-variant">
                        Parsed Date
                      </div>
                      <div className="font-label-md text-label-md text-on-surface font-medium">
                        Oct 24, 2025
                      </div>
                    </div>
                    <div className="p-2 rounded-[8px] bg-surface-container-lowest border border-outline-variant/20">
                      <div className="font-label-sm text-label-sm text-on-surface-variant">
                        Category
                      </div>
                      <div className="font-label-md text-label-md text-on-surface font-medium">
                        Travel / Flights
                      </div>
                    </div>
                    <div className="p-2 rounded-[8px] bg-surface-container-lowest border border-outline-variant/20">
                      <div className="font-label-sm text-label-sm text-on-surface-variant">
                        Tax Line
                      </div>
                      <div className="font-label-md text-label-md text-on-surface font-medium">
                        $38.20 USD
                      </div>
                    </div>
                    <div className="p-2 rounded-[8px] bg-surface-container-lowest border border-outline-variant/20">
                      <div className="font-label-sm text-label-sm text-on-surface-variant">
                        Cost Center
                      </div>
                      <div className="font-label-md text-label-md text-on-surface font-medium">
                        Engineering (#7100)
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-[8px] bg-secondary-fixed/30 border border-secondary/20">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary text-base" data-icon="verified">
                        verified
                      </span>
                      {' '}
                      <span className="font-body-sm text-body-sm font-medium text-on-surface">
                        Within Per Diem Tier A
                      </span>
                    </div>
                    {' '}
                    <span className="font-label-sm text-label-sm text-secondary font-semibold">
                      Approved by Rule Engine
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 pt-4 mt-4 border-t border-surface-container-high">
                <button className="flex-1 h-10 rounded-[10px] bg-primary text-white font-label-md text-label-md font-semibold hover:bg-primary/95 transition-all shadow-sm">
                  {"Approve & Queue Payment"}
                </button>
                {' '}
                <button className="px-4 h-10 rounded-[10px] border border-outline-variant/50 bg-surface-container-lowest text-on-surface font-label-md text-label-md font-semibold hover:bg-surface-container-low transition-all">
                  View Audit Hash
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="space-y-8">
          <div className="max-w-3xl space-y-3">
            <div className="font-label-md text-label-md text-primary font-bold tracking-wider">
              THE OPERATIONAL BOTTLENECK
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Expense reports should not take longer than the business trip.
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Chasing crumpled paper receipts and reconciling messy spreadsheets burns hours for travelling employees and finance controllers alike. Horizons captures invoices instantly, syncs with enterprise card feeds, and routes approvals through deterministic rules so legitimate claims get reimbursed in record time.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-surface-container-lowest border border-outline-variant/40 space-y-3">
              <div className="w-10 h-10 rounded-[6px] bg-primary-fixed/50 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined" data-icon="photo_camera">
                  photo_camera
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                Omnichannel Ingestion
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Automatic receipt capture via mobile photo, email forward, or direct portal import with continuous neural character extraction.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-surface-container-lowest border border-outline-variant/40 space-y-3">
              <div className="w-10 h-10 rounded-[6px] bg-secondary-fixed/50 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined" data-icon="sync_alt">
                  sync_alt
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                Deterministic Matching
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Real-time deterministic matching with corporate credit card transaction streams to eliminate manual line-by-line verification.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-surface-container-lowest border border-outline-variant/40 space-y-3">
              <div className="w-10 h-10 rounded-[6px] bg-tertiary-fixed/60 flex items-center justify-center text-tertiary">
                <span className="material-symbols-outlined" data-icon="fork_right">
                  fork_right
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                Parallel Routing
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Configurable multi-level and departmental approval routing triggered dynamically by team, dollar threshold, and spending category.
              </p>
            </div>
          </div>
        </section>
        <section className="space-y-8">
          <div className="space-y-2">
            <div className="font-label-md text-label-md text-primary font-bold tracking-wider">
              ENGINEERED FOR FINANCIAL DISCIPLINE
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              From receipt capture to general ledger: Six core capabilities
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
              Deterministic automation that removes manual entry, enforces policy rules, and maintains audit certainty.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-3">
              <div className="p-5 rounded-xl border-2 border-primary bg-surface-container-lowest shadow-sm space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-label-md text-label-md text-primary font-bold">
                    01 // RECEIPT AUTO-SCAN WITH OCR EXTRACTION
                  </span>
                  {' '}
                  <span className="px-2 py-0.5 rounded-[6px] bg-primary text-white font-label-sm text-label-sm">
                    Active View
                  </span>
                </div>
                <h4 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                  Neural Character Parsing Engine
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Instant neural parsing extracts vendor, line items, taxes, currency, and total without manual typing.
                </p>
              </div>
              <div className="p-5 rounded-xl border border-outline-variant/30 bg-surface-container-lowest/60 hover:bg-surface-container-lowest transition-colors space-y-1">
                <div className="font-label-md text-label-md text-on-surface-variant font-bold">
                  {"02 // CONFIGURABLE MULTI-STAGE & PARALLEL APPROVALS"}
                </div>
                <h4 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                  Hierarchical Routing Trees
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Multi-tier thresholds, departmental routing, and simultaneous manager sign-offs based on amount tiers.
                </p>
              </div>
              <div className="p-5 rounded-xl border border-outline-variant/30 bg-surface-container-lowest/60 hover:bg-surface-container-lowest transition-colors space-y-1">
                <div className="font-label-md text-label-md text-on-surface-variant font-bold">
                  03 // REAL-TIME POLICY VIOLATION FLAGGING
                </div>
                <h4 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                  Automated Compliance Guardrails
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Proactive alerts for weekend charges, alcohol limits, and out-of-policy vendor spend before submission.
                </p>
              </div>
              <div className="p-5 rounded-xl border border-outline-variant/30 bg-surface-container-lowest/60 hover:bg-surface-container-lowest transition-colors space-y-1">
                <div className="font-label-md text-label-md text-on-surface-variant font-bold">
                  04 // MILEAGE TRACKING WITH AUTO-REIMBURSEMENT
                </div>
                <h4 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                  GPS Route Calculation
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Automated GPS calculation and tax-compliant standard rate conversions for field travel.
                </p>
              </div>
              <div className="p-5 rounded-xl border border-outline-variant/30 bg-surface-container-lowest/60 hover:bg-surface-container-lowest transition-colors space-y-1">
                <div className="font-label-md text-label-md text-on-surface-variant font-bold">
                  05 // CORPORATE CARD FEED RECONCILIATION
                </div>
                <h4 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                  Direct Bank Stream Cleansing
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Live daily feeds from Visa, Mastercard, and Amex auto-matched against uploaded receipts.
                </p>
              </div>
              <div className="p-5 rounded-xl border border-outline-variant/30 bg-surface-container-lowest/60 hover:bg-surface-container-lowest transition-colors space-y-1">
                <div className="font-label-md text-label-md text-on-surface-variant font-bold">
                  {"06 // DUPLICATE & ANOMALY DETECTION"}
                </div>
                <h4 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                  Cross-Claim Fingerprinting
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Cross-checks identical amounts, timestamps, and duplicate image uploads across multiple employee claims.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5 rounded-xl bg-surface-container-lowest border border-outline-variant/40 p-6 space-y-6 shadow-sm sticky top-24">
              <div className="flex items-center justify-between pb-3 border-b border-surface-container-high">
                <div className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                  OCR Confidence Engine
                </div>
                {' '}
                <span className="px-2.5 py-0.5 rounded-[6px] bg-secondary-fixed/50 text-on-secondary-fixed font-label-sm text-label-sm font-bold">
                  v3.8 Neural
                </span>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between font-label-md text-label-md mb-1.5">
                    <span className="text-on-surface">
                      Vendor Identification Confidence
                    </span>
                    {' '}
                    <span className="font-bold text-on-surface">
                      99.8%
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-[4px] bg-surface-container-high overflow-hidden">
                    <div className="h-full bg-primary" style={{"width":"99.8%"}} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between font-label-md text-label-md mb-1.5">
                    <span className="text-on-surface">
                      Tax Line Disaggregation
                    </span>
                    {' '}
                    <span className="font-bold text-on-surface">
                      98.9%
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-[4px] bg-surface-container-high overflow-hidden">
                    <div className="h-full bg-primary-container" style={{"width":"98.9%"}} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between font-label-md text-label-md mb-1.5">
                    <span className="text-on-surface">
                      Multi-Currency Cross-Reference
                    </span>
                    {' '}
                    <span className="font-bold text-on-surface">
                      99.4%
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-[4px] bg-surface-container-high overflow-hidden">
                    <div className="h-full bg-tertiary" style={{"width":"99.4%"}} />
                  </div>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 space-y-3">
                <div className="font-label-sm text-label-sm font-semibold text-on-surface-variant flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-secondary" />
                  {' '}
                  SCHEMA RECONCILIATION TELEMETRY
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Every captured receipt is converted into JSON-LD schema matching standard ERP chart of accounts structures prior to database persistence.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="space-y-8">
          <div className="space-y-2">
            <div className="font-label-md text-label-md text-primary font-bold tracking-wider">
              REIMBURSEMENT ARCHITECTURE
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Four deterministic steps from receipt to general ledger posting
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl bg-surface-container-lowest border border-outline-variant/30 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <span className="font-headline-lg text-headline-lg font-bold text-outline-variant/60">
                  01
                </span>
                {' '}
                <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                  Capture the Receipt
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Employee captures paper or digital receipts via mobile photo, inbox forward, or bulk PDF upload.
                </p>
              </div>
              <div className="pt-4 border-t border-surface-container-high flex items-center gap-2 text-primary font-label-sm text-label-sm font-semibold">
                <span className="material-symbols-outlined text-sm" data-icon="center_focus_strong">
                  center_focus_strong
                </span>
                {' '}
                <span>
                  Mobile, Email or Web
                </span>
              </div>
            </div>
            <div className="p-6 rounded-xl bg-surface-container-lowest border border-outline-variant/30 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <span className="font-headline-lg text-headline-lg font-bold text-outline-variant/60">
                  02
                </span>
                {' '}
                <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                  Match to Card Transaction
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  System pairs the OCR extract with bank and corporate card clearance data instantaneously.
                </p>
              </div>
              <div className="pt-4 border-t border-surface-container-high flex items-center gap-2 text-primary font-label-sm text-label-sm font-semibold">
                <span className="material-symbols-outlined text-sm" data-icon="sync">
                  sync
                </span>
                {' '}
                <span>
                  Real-time Card Sync
                </span>
              </div>
            </div>
            <div className="p-6 rounded-xl bg-surface-container-lowest border border-outline-variant/30 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <span className="font-headline-lg text-headline-lg font-bold text-outline-variant/60">
                  03
                </span>
                {' '}
                <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                  Route for Policy Approval
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Dynamic rules route claims through line managers and finance controllers with automated notifications.
                </p>
              </div>
              <div className="pt-4 border-t border-surface-container-high flex items-center gap-2 text-primary font-label-sm text-label-sm font-semibold">
                <span className="material-symbols-outlined text-sm" data-icon="rule">
                  rule
                </span>
                {' '}
                <span>
                  Parallel Workflow
                </span>
              </div>
            </div>
            <div className="p-6 rounded-xl bg-surface-container-lowest border border-outline-variant/30 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <span className="font-headline-lg text-headline-lg font-bold text-outline-variant/60">
                  04
                </span>
                {' '}
                <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                  Reimburse and Post
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Approved funds are disbursed via ACH or payroll and auto-reconciled into core ERP accounting ledgers.
                </p>
              </div>
              <div className="pt-4 border-t border-surface-container-high flex items-center gap-2 text-primary font-label-sm text-label-sm font-semibold">
                <span className="material-symbols-outlined text-sm" data-icon="account_balance">
                  account_balance
                </span>
                {' '}
                <span>
                  {"ACH & GL Sync"}
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="space-y-10">
          <div className="space-y-2">
            <div className="font-label-md text-label-md text-primary font-bold tracking-wider">
              BUSINESS RETURNS
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Why finance and operations teams stop chasing paper receipts
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl bg-surface-container-lowest border border-outline-variant/40 space-y-3">
              <div className="w-10 h-10 rounded-[6px] bg-secondary-fixed/50 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined" data-icon="speed">
                  speed
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                Rapid Reimbursement
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Shorten settlement turnaround from weeks to hours, boosting employee morale and trust across distributed teams.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-surface-container-lowest border border-outline-variant/40 space-y-3">
              <div className="w-10 h-10 rounded-[6px] bg-primary-fixed/50 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined" data-icon="visibility_off">
                  visibility_off
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                Zero Manual Chasing
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Free finance controllers from hunting missing invoices or verifying blurred paper stubs at month-end close.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-surface-container-lowest border border-outline-variant/40 space-y-3">
              <div className="w-10 h-10 rounded-[6px] bg-tertiary-fixed/60 flex items-center justify-center text-tertiary">
                <span className="material-symbols-outlined" data-icon="gavel">
                  gavel
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                Strict Policy Compliance
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Eliminate out-of-policy leakage and catch accidental or intentional double submissions early before authorization.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-surface-container-lowest border border-outline-variant/40 space-y-3">
              <div className="w-10 h-10 rounded-[6px] bg-surface-container-high flex items-center justify-center text-on-surface">
                <span className="material-symbols-outlined" data-icon="lock_clock">
                  lock_clock
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                Cryptographic Audit Trail
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Every timestamp, approval signature, and currency conversion is locked in an immutable, exportable compliance log.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-6 rounded-xl bg-surface-container-low border border-outline-variant/30 space-y-2">
              <div className="flex items-center gap-2 text-on-surface font-semibold">
                <span className="material-symbols-outlined text-primary" data-icon="shield">
                  shield
                </span>
                {' '}
                <span className="font-headline-sm text-headline-sm">
                  Enterprise-Grade Security
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Encrypted hosting, role-based access control, and regular backups. Your data always remains fully yours and exportable, with no lock-in.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-surface-container-low border border-outline-variant/30 space-y-2">
              <div className="flex items-center gap-2 text-on-surface font-semibold">
                <span className="material-symbols-outlined text-secondary" data-icon="receipt_long">
                  receipt_long
                </span>
                {' '}
                <span className="font-headline-sm text-headline-sm">
                  Transparent, Scoped Pricing
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Every engagement is scoped individually with a fixed price and timeline agreed upfront — book a free consultation for a tailored quote.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-surface-container-low border border-outline-variant/30 space-y-2">
              <div className="flex items-center gap-2 text-on-surface font-semibold">
                <span className="material-symbols-outlined text-tertiary" data-icon="group">
                  group
                </span>
                {' '}
                <span className="font-headline-sm text-headline-sm">
                  Built for Your Whole Team
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Role-based views mean owners, managers, and frontline staff each see exactly what they need, nothing more, nothing missing.
              </p>
            </div>
          </div>
        </section>
        <section className="space-y-8">
          <div className="space-y-2">
            <div className="font-label-md text-label-md text-primary font-bold tracking-wider">
              OPERATIONAL TRANSFORMATION
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              What changes on day one
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-7 rounded-xl bg-error-container/20 border border-error/20 space-y-5">
              <div className="flex items-center gap-2 text-error font-semibold">
                <span className="material-symbols-outlined" data-icon="cancel">
                  cancel
                </span>
                {' '}
                <span className="font-headline-sm text-headline-sm">
                  The Old Expense Dilemma
                </span>
              </div>
              <ul className="space-y-3 font-body-sm text-body-sm text-on-surface">
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-error text-base mt-0.5" data-icon="close">
                    close
                  </span>
                  {' '}
                  <span>
                    Paper receipts get crumpled or lost before expense claims are filed.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-error text-base mt-0.5" data-icon="close">
                    close
                  </span>
                  {' '}
                  <span>
                    Finance controllers match card statements to receipts manually by hand.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-error text-base mt-0.5" data-icon="close">
                    close
                  </span>
                  {' '}
                  <span>
                    Every claim routes through a rigid single approver, causing bottlenecks.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-error text-base mt-0.5" data-icon="close">
                    close
                  </span>
                  {' '}
                  <span>
                    Duplicate submissions and policy breaches slip through undetected.
                  </span>
                </li>
              </ul>
            </div>
            <div className="p-7 rounded-xl bg-secondary-fixed/30 border border-secondary/30 space-y-5">
              <div className="flex items-center gap-2 text-secondary font-semibold">
                <span className="material-symbols-outlined" data-icon="check_circle">
                  check_circle
                </span>
                {' '}
                <span className="font-headline-sm text-headline-sm">
                  The Horizons Synchronized Backbone
                </span>
              </div>
              <ul className="space-y-3 font-body-sm text-body-sm text-on-surface">
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-secondary text-base mt-0.5" data-icon="check">
                    check
                  </span>
                  {' '}
                  <span>
                    Receipts captured digitally and indexed the instant purchase occurs.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-secondary text-base mt-0.5" data-icon="check">
                    check
                  </span>
                  {' '}
                  <span>
                    Automated two-way matching executes continuously against bank feeds.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-secondary text-base mt-0.5" data-icon="check">
                    check
                  </span>
                  {' '}
                  <span>
                    Approval routes dynamically by cost center, category, and dollar threshold.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-secondary text-base mt-0.5" data-icon="check">
                    check
                  </span>
                  {' '}
                  <span>
                    Duplicate receipts and anomalies are blocked before payment authorization.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="space-y-8 max-w-4xl mx-auto">
          <div className="text-center space-y-2">
            <div className="font-label-md text-label-md text-primary font-bold tracking-wider">
              FREQUENTLY ASKED QUESTIONS
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Common questions about expense automation
            </h2>
          </div>
          <div className="space-y-3">
            <div className="rounded-xl border border-primary/40 bg-surface-container-lowest p-6 space-y-3 shadow-sm">
              <div className="flex items-center justify-between cursor-pointer">
                <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                  What happens if an employee loses a paper receipt?
                </h3>
                {' '}
                <span className="material-symbols-outlined text-primary text-xl" data-icon="expand_less">
                  expand_less
                </span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed pt-2 border-t border-surface-container-high">
                Horizons provides an automated missing receipt affidavit workflow. The system matches the merchant name and amount directly against the employee's corporate card feed or bank statement. The employee completes a digitally signed declaration within the portal, and the claim is flagged for an exception-approval routing tree tailored to your policy threshold.
              </p>
            </div>
            <div className="rounded-xl border border-outline-variant/30 bg-surface-container-lowest/60 p-5 flex items-center justify-between hover:bg-surface-container-lowest transition-colors cursor-pointer">
              <h3 className="font-headline-sm text-headline-sm font-medium text-on-surface">
                Can it prevent the same receipt being submitted twice?
              </h3>
              {' '}
              <span className="material-symbols-outlined text-on-surface-variant text-xl" data-icon="expand_more">
                expand_more
              </span>
            </div>
            <div className="rounded-xl border border-outline-variant/30 bg-surface-container-lowest/60 p-5 flex items-center justify-between hover:bg-surface-container-lowest transition-colors cursor-pointer">
              <h3 className="font-headline-sm text-headline-sm font-medium text-on-surface">
                Does it work if our company does not issue corporate cards?
              </h3>
              {' '}
              <span className="material-symbols-outlined text-on-surface-variant text-xl" data-icon="expand_more">
                expand_more
              </span>
            </div>
            <div className="rounded-xl border border-outline-variant/30 bg-surface-container-lowest/60 p-5 flex items-center justify-between hover:bg-surface-container-lowest transition-colors cursor-pointer">
              <h3 className="font-headline-sm text-headline-sm font-medium text-on-surface">
                Can approval rules change based on trip type or project?
              </h3>
              {' '}
              <span className="material-symbols-outlined text-on-surface-variant text-xl" data-icon="expand_more">
                expand_more
              </span>
            </div>
            <div className="rounded-xl border border-outline-variant/30 bg-surface-container-lowest/60 p-5 flex items-center justify-between hover:bg-surface-container-lowest transition-colors cursor-pointer">
              <h3 className="font-headline-sm text-headline-sm font-medium text-on-surface">
                Are foreign currency expenses converted automatically?
              </h3>
              {' '}
              <span className="material-symbols-outlined text-on-surface-variant text-xl" data-icon="expand_more">
                expand_more
              </span>
            </div>
            <div className="rounded-xl border border-outline-variant/30 bg-surface-container-lowest/60 p-5 flex items-center justify-between hover:bg-surface-container-lowest transition-colors cursor-pointer">
              <h3 className="font-headline-sm text-headline-sm font-medium text-on-surface">
                Can finance set spending limits per employee or category?
              </h3>
              {' '}
              <span className="material-symbols-outlined text-on-surface-variant text-xl" data-icon="expand_more">
                expand_more
              </span>
            </div>
            <div className="rounded-xl border border-outline-variant/30 bg-surface-container-lowest/60 p-5 flex items-center justify-between hover:bg-surface-container-lowest transition-colors cursor-pointer">
              <h3 className="font-headline-sm text-headline-sm font-medium text-on-surface">
                How long does implementation typically take?
              </h3>
              {' '}
              <span className="material-symbols-outlined text-on-surface-variant text-xl" data-icon="expand_more">
                expand_more
              </span>
            </div>
            <div className="rounded-xl border border-outline-variant/30 bg-surface-container-lowest/60 p-5 flex items-center justify-between hover:bg-surface-container-lowest transition-colors cursor-pointer">
              <h3 className="font-headline-sm text-headline-sm font-medium text-on-surface">
                Is our data secure, and who owns it?
              </h3>
              {' '}
              <span className="material-symbols-outlined text-on-surface-variant text-xl" data-icon="expand_more">
                expand_more
              </span>
            </div>
          </div>
        </section>
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="font-headline-md text-headline-md text-on-surface">
              More from the Horizons ecosystem
            </h2>
            {' '}
            <Link to="/products" className="inline-flex items-center gap-1 font-label-lg text-label-lg text-primary font-semibold hover:underline">
              <span>
                Explore all product packages
              </span>
              {' '}
              <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">
                arrow_forward
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl bg-surface-container-lowest border border-outline-variant/30 hover:border-primary/50 transition-all space-y-4 group">
              <div className="w-10 h-10 rounded-[6px] bg-primary-fixed/50 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined" data-icon="account_balance_wallet">
                  account_balance_wallet
                </span>
              </div>
              <div className="space-y-1">
                <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                  Business Accounting
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Invoicing, expenses and bank reconciliation unified into a single real-time ledger.
                </p>
              </div>
              <div className="pt-2">
                <span className="px-2.5 py-1 rounded-[6px] bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-semibold">
                  FINANCE
                </span>
              </div>
            </div>
            <div className="p-6 rounded-xl bg-surface-container-lowest border border-outline-variant/30 hover:border-primary/50 transition-all space-y-4 group">
              <div className="w-10 h-10 rounded-[6px] bg-secondary-fixed/50 flex items-center justify-center text-secondary group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined" data-icon="payments">
                  payments
                </span>
              </div>
              <div className="space-y-1">
                <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                  Payroll Management
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Automated wage calculation, tax compliance, and direct bank remittances without delay.
                </p>
              </div>
              <div className="pt-2">
                <span className="px-2.5 py-1 rounded-[6px] bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-semibold">
                  {"PEOPLE & HR"}
                </span>
              </div>
            </div>
            <div className="p-6 rounded-xl bg-surface-container-lowest border border-outline-variant/30 hover:border-primary/50 transition-all space-y-4 group">
              <div className="w-10 h-10 rounded-[6px] bg-tertiary-fixed/60 flex items-center justify-center text-tertiary group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined" data-icon="layers">
                  layers
                </span>
              </div>
              <div className="space-y-1">
                <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                  Integrated ERP Platform
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  One connected operational core combining sales, inventory, finance, and human resources.
                </p>
              </div>
              <div className="pt-2">
                <span className="px-2.5 py-1 rounded-[6px] bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-semibold">
                  ENTERPRISE
                </span>
              </div>
            </div>
            <div className="p-6 rounded-xl bg-surface-container-lowest border border-outline-variant/30 hover:border-primary/50 transition-all space-y-4 group">
              <div className="w-10 h-10 rounded-[6px] bg-primary-fixed/60 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined" data-icon="flight_takeoff">
                  flight_takeoff
                </span>
              </div>
              <div className="space-y-1">
                <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                  AI Travel Agent
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Corporate travel policy compliance, automated itinerary booking, and live flight support.
                </p>
              </div>
              <div className="pt-2">
                <span className="px-2.5 py-1 rounded-[6px] bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-semibold">
                  TRAVEL
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="rounded-2xl bg-gradient-to-br from-primary-container via-primary to-primary-tint text-white p-10 lg:p-14 shadow-lg space-y-6 text-center max-w-5xl mx-auto">
          <h2 className="font-headline-lg text-headline-lg max-w-2xl mx-auto font-bold tracking-tight">
            Unify your employee expense operations with fixed-scope certainty.
          </h2>
          <p className="font-body-lg text-body-lg text-primary-fixed max-w-xl mx-auto leading-relaxed">
            Connect directly with our engineering team to scope your expense automation and ERP synchronization within 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link to="/contact" className="px-6 py-3 rounded-[10px] bg-white text-on-surface font-label-lg text-label-lg font-semibold shadow-md hover:bg-surface-container-lowest transition-all">
              Book an Architectural Scoping Consultation
            </Link>
          </div>
        </section>
      </main>
      {' '}
    </div>
  )
}
