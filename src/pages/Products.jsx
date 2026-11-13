// Generated from stitch/products.html by scripts/stitch-to-jsx.mjs (npm run convert).
import { Link } from 'react-router-dom'
import './Products.css'

export default function Products() {
  return (
    <div className="pg-products bg-surface text-on-surface antialiased min-h-screen relative selection:bg-primary-fixed selection:text-on-primary-fixed">
      <title>{"Products Catalogue — Horizons Enterprise & AI Systems"}</title>
      <div className="fixed inset-0 pointer-events-none -z-10 ambient-glow-mesh" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1400px] h-[600px] pointer-events-none -z-10 ambient-glow-peach" />
      {' '}
      {' '}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-16 md:pt-24 pb-12 text-center relative">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-[6px] bg-surface-container-lowest/80 border border-white/80 shadow-sm backdrop-blur-md mb-6">
          <span className="w-2 h-2 rounded-full bg-[#FF7555] animate-pulse" />
          <span className="text-label-sm font-label-sm tracking-wider font-bold text-on-surface-variant">
            WHAT WE DELIVER
          </span>
        </div>
        <h1 className="text-display-lg-mobile md:text-display-lg font-display-lg text-on-surface tracking-tight max-w-4xl mx-auto mb-6">
          Productized AI and modular software packages,
          {' '}
          <span className="bg-gradient-to-r from-primary to-[#FF7555] bg-clip-text text-transparent">
            built for immediate velocity.
          </span>
        </h1>
        <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10 leading-relaxed">
          Fixed scope, fixed price, and a live date you can plan around. Battle-tested modules deployed into your operations without legacy bloat.
        </p>
        <div className="w-fit max-w-full mx-auto bg-surface-container-lowest/70 backdrop-blur-xl rounded-[10px] p-2 border border-white/90 shadow-xl shadow-on-surface/5 flex items-center">
          <div className="flex items-center gap-1.5 overflow-x-auto min-w-0 scrollbar-none" id="filterContainer">
            <button className="filter-pill px-4 py-1.5 rounded-[10px] text-label-md font-label-md bg-gradient-to-r from-[#FF8A65] to-[#FF6B4A] text-white shadow-sm transition-all whitespace-nowrap" data-filter="all">
              All
            </button>
            <button className="filter-pill px-3.5 py-1.5 rounded-[10px] text-label-md font-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all whitespace-nowrap" data-filter="ai-agents">
              AI Agents
            </button>
            <button className="filter-pill px-3.5 py-1.5 rounded-[10px] text-label-md font-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all whitespace-nowrap" data-filter="operations">
              Operations
            </button>
            <button className="filter-pill px-3.5 py-1.5 rounded-[10px] text-label-md font-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all whitespace-nowrap" data-filter="finance">
              Finance
            </button>
            <button className="filter-pill px-3.5 py-1.5 rounded-[10px] text-label-md font-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all whitespace-nowrap" data-filter="people">
              People
            </button>
            <button className="filter-pill px-3.5 py-1.5 rounded-[10px] text-label-md font-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all whitespace-nowrap" data-filter="sales-service">
              {"Sales & Service"}
            </button>
            <button className="filter-pill px-3.5 py-1.5 rounded-[10px] text-label-md font-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all whitespace-nowrap" data-filter="industry">
              Industry
            </button>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12" id="ai-agents-section">
        <div className="mb-10 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-primary-fixed/30 border border-primary-fixed-dim/40 mb-3">
            <span className="material-symbols-outlined text-primary text-[16px]">
              smart_toy
            </span>
            <span className="text-label-sm font-label-sm font-bold text-primary tracking-wider">
              AUTONOMOUS INTELLIGENCE
            </span>
          </div>
          <h2 className="text-headline-lg font-headline-lg text-on-surface tracking-tight mb-2">
            Featured AI Software Workers
          </h2>
          <p className="text-body-md font-body-md text-on-surface-variant max-w-xl">
            High-impact autonomous workflows that integrate directly with your teams and systems.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article className="bg-surface-container-lowest/70 backdrop-blur-2xl rounded-3xl p-8 glass-specular-border glass-card-hover flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#FF7555]/10 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-[6px] text-label-sm font-label-sm font-bold bg-[#FF7555]/15 text-[#D84323] tracking-wide">
                  EVENT AI
                </span>
                <span className="material-symbols-outlined text-primary text-[24px]">
                  contactless
                </span>
              </div>
              <img src="/images/products/exhibition-lead-intelligence.jpg" alt="" loading="lazy" className="w-full h-44 object-cover rounded-2xl mb-6" />
              <h3 className="text-headline-md font-headline-md text-on-surface mb-3 tracking-tight">
                Exhibition Lead Intelligence
              </h3>
              <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed mb-6">
                Scan a business card, get an enriched, AI-scored lead pushed to your CRM before the show floor closes.
              </p>
            </div>
            <div>
              <div className="pt-4 border-t border-surface-container mb-4 flex items-center gap-2 text-label-sm font-label-sm text-on-surface-variant font-medium">
                <span className="material-symbols-outlined text-primary text-[16px]">
                  bolt
                </span>
                <span>
                  Average sync time: 4.2s • Zero manual typing
                </span>
              </div>
              <Link to="/products/exhibition-lead-intelligence" className="inline-flex items-center gap-2 text-label-md font-label-md font-bold text-primary group-hover:translate-x-1 transition-transform">
                Explore Event AI
                {' '}
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </Link>
            </div>
          </article>
          <article className="bg-surface-container-lowest/70 backdrop-blur-2xl rounded-3xl p-8 glass-specular-border glass-card-hover flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute -top-12 -right-12 w-36 h-36 bg-tertiary-fixed/20 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-[6px] text-label-sm font-label-sm font-bold bg-[#A5F3FC]/40 text-[#0E4A56] tracking-wide">
                  FIELD SERVICE AI
                </span>
                <span className="material-symbols-outlined text-tertiary text-[24px]">
                  verified
                </span>
              </div>
              <img src="/images/products/ai-qc-agent.jpg" alt="" loading="lazy" className="w-full h-44 object-cover rounded-2xl mb-6" />
              <h3 className="text-headline-md font-headline-md text-on-surface mb-3 tracking-tight">
                AI QC Agent
              </h3>
              <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed mb-6">
                Technicians ask by voice or text and get answers verified against the company's own engineering manuals; unanswered questions are automatically logged for manager review.
              </p>
            </div>
            <div>
              <div className="pt-4 border-t border-surface-container mb-4 flex items-center gap-2 text-label-sm font-label-sm text-on-surface-variant font-medium">
                <span className="material-symbols-outlined text-tertiary text-[16px]">
                  verified_user
                </span>
                <span>
                  99.4% spec accuracy • Instant offline fallback
                </span>
              </div>
              <Link to="/products/ai-qc-agent" className="inline-flex items-center gap-2 text-label-md font-label-md font-bold text-tertiary group-hover:translate-x-1 transition-transform">
                Explore QC Agent
                {' '}
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </Link>
            </div>
          </article>
          <article className="bg-surface-container-lowest/70 backdrop-blur-2xl rounded-3xl p-8 glass-specular-border glass-card-hover flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute -top-12 -right-12 w-36 h-36 bg-secondary-fixed/30 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-[6px] text-label-sm font-label-sm font-bold bg-[#D9F99D]/60 text-[#2D4A08] tracking-wide">
                  BUSINESS TRAVEL AI
                </span>
                <span className="material-symbols-outlined text-secondary text-[24px]">
                  flight_takeoff
                </span>
              </div>
              <img src="/images/products/ai-travel-agent.jpg" alt="" loading="lazy" className="w-full h-44 object-cover rounded-2xl mb-6" />
              <h3 className="text-headline-md font-headline-md text-on-surface mb-3 tracking-tight">
                AI Travel Agent
              </h3>
              <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed mb-6">
                Reads the trip requirements directly from CRM deals and autonomous schedules, then books flights, hotels, and cars strictly within company travel policy.
              </p>
            </div>
            <div>
              <div className="pt-4 border-t border-surface-container mb-4 flex items-center gap-2 text-label-sm font-label-sm text-on-surface-variant font-medium">
                <span className="material-symbols-outlined text-secondary text-[16px]">
                  task_alt
                </span>
                <span>
                  Zero booking overhead • Automated expense pre-filing
                </span>
              </div>
              <Link to="/products/ai-travel-agent" className="inline-flex items-center gap-2 text-label-md font-label-md font-bold text-primary group-hover:translate-x-1 transition-transform">
                Explore Travel Agent
                {' '}
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </Link>
            </div>
          </article>
        </div>
      </section>
      <main className="max-w-7xl mx-auto px-6 md:px-12 py-10 space-y-20">
        <section className="catalogue-category" id="category-operations">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-surface-container-high">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#FF7555]/15 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-[18px]">
                  inventory_2
                </span>
              </div>
              <h2 className="text-headline-md font-headline-md text-on-surface">
                {"Operations & Supply Chain"}
              </h2>
            </div>
            <span className="px-3 py-1 rounded-[6px] text-label-sm font-label-sm bg-surface-container text-on-surface-variant font-bold">
              5 Modules
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/products/inventory-control" className="catalogue-card bg-surface-container-lowest/70 backdrop-blur-xl rounded-3xl p-6 glass-specular-border glass-card-hover flex flex-col justify-between group">
              <div>
                <img src="/images/products/inventory-control.jpg" alt="" loading="lazy" className="w-full h-44 object-cover rounded-2xl mb-6" />
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-0.5 rounded-[6px] text-[11px] font-label-sm font-semibold bg-surface-container text-on-surface-variant">
                    Logistics
                  </span>
                  <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-[20px]">
                    warehouse
                  </span>
                </div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface mb-2 font-bold">
                  Smart Inventory Control
                </h3>
                <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                  Real-time stock velocity, automated supplier replenishment, and batch tracking.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-surface-container flex items-center justify-between">
                <span className="text-label-sm font-label-sm text-on-surface-variant font-medium">
                  Instant ERP Link
                </span>
                <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform text-[20px]">
                  arrow_forward
                </span>
              </div>
            </Link>
            <Link to="/products/warehouse-operations" className="catalogue-card bg-surface-container-lowest/70 backdrop-blur-xl rounded-3xl p-6 glass-specular-border glass-card-hover flex flex-col justify-between group">
              <div>
                <img src="/images/products/warehouse-operations.jpg" alt="" loading="lazy" className="w-full h-44 object-cover rounded-2xl mb-6" />
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-0.5 rounded-[6px] text-[11px] font-label-sm font-semibold bg-surface-container text-on-surface-variant">
                    Fulfillment
                  </span>
                  <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-[20px]">
                    qr_code_scanner
                  </span>
                </div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface mb-2 font-bold">
                  Warehouse Operations Platform
                </h3>
                <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                  {"Barcode & RFID scanning, guided bin-picking routes, and multi-location dispatch."}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-surface-container flex items-center justify-between">
                <span className="text-label-sm font-label-sm text-on-surface-variant font-medium">
                  Handheld Ready
                </span>
                <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform text-[20px]">
                  arrow_forward
                </span>
              </div>
            </Link>
            <Link to="/products/production-floor-management" className="catalogue-card bg-surface-container-lowest/70 backdrop-blur-xl rounded-3xl p-6 glass-specular-border glass-card-hover flex flex-col justify-between group">
              <div>
                <img src="/images/products/production-floor-management.jpg" alt="" loading="lazy" className="w-full h-44 object-cover rounded-2xl mb-6" />
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-0.5 rounded-[6px] text-[11px] font-label-sm font-semibold bg-surface-container text-on-surface-variant">
                    Manufacturing
                  </span>
                  <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-[20px]">
                    precision_manufacturing
                  </span>
                </div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface mb-2 font-bold">
                  Production Floor Management
                </h3>
                <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                  Live machine telemetry, shift logs, and real-time station work orders.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-surface-container flex items-center justify-between">
                <span className="text-label-sm font-label-sm text-on-surface-variant font-medium">
                  IoT Sensor Sync
                </span>
                <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform text-[20px]">
                  arrow_forward
                </span>
              </div>
            </Link>
            <Link to="/products/production-planning" className="catalogue-card bg-surface-container-lowest/70 backdrop-blur-xl rounded-3xl p-6 glass-specular-border glass-card-hover flex flex-col justify-between group">
              <div>
                <img src="/images/products/production-planning.jpg" alt="" loading="lazy" className="w-full h-44 object-cover rounded-2xl mb-6" />
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-0.5 rounded-[6px] text-[11px] font-label-sm font-semibold bg-surface-container text-on-surface-variant">
                    Optimization
                  </span>
                  <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-[20px]">
                    schedule
                  </span>
                </div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface mb-2 font-bold">
                  {"Production Planning & Scheduling"}
                </h3>
                <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                  Gantt-based capacity balancing, bottleneck mitigation, and lead-time forecasting.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-surface-container flex items-center justify-between">
                <span className="text-label-sm font-label-sm text-on-surface-variant font-medium">
                  Dynamic Rescheduling
                </span>
                <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform text-[20px]">
                  arrow_forward
                </span>
              </div>
            </Link>
            <Link to="/products/rental-fleet-management" className="catalogue-card bg-surface-container-lowest/70 backdrop-blur-xl rounded-3xl p-6 glass-specular-border glass-card-hover flex flex-col justify-between group">
              <div>
                <img src="/images/products/rental-fleet-management.jpg" alt="" loading="lazy" className="w-full h-44 object-cover rounded-2xl mb-6" />
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-0.5 rounded-[6px] text-[11px] font-label-sm font-semibold bg-surface-container text-on-surface-variant">
                    Assets
                  </span>
                  <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-[20px]">
                    local_shipping
                  </span>
                </div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface mb-2 font-bold">
                  Rental Fleet Management
                </h3>
                <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                  Equipment telematics, maintenance scheduling, and automated turnover inspection.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-surface-container flex items-center justify-between">
                <span className="text-label-sm font-label-sm text-on-surface-variant font-medium">
                  GPS Telematics
                </span>
                <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform text-[20px]">
                  arrow_forward
                </span>
              </div>
            </Link>
          </div>
        </section>
        <section className="catalogue-category" id="category-finance">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-surface-container-high">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-secondary-fixed/50 flex items-center justify-center">
                <span className="material-symbols-outlined text-secondary text-[18px]">
                  account_balance
                </span>
              </div>
              <h2 className="text-headline-md font-headline-md text-on-surface">
                Finance
              </h2>
            </div>
            <span className="px-3 py-1 rounded-[6px] text-label-sm font-label-sm bg-surface-container text-on-surface-variant font-bold">
              4 Modules
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/products/business-accounting" className="catalogue-card bg-surface-container-lowest/70 backdrop-blur-xl rounded-3xl p-6 glass-specular-border glass-card-hover flex flex-col justify-between group">
              <div>
                <img src="/images/products/business-accounting.jpg" alt="" loading="lazy" className="w-full h-44 object-cover rounded-2xl mb-6" />
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-0.5 rounded-[6px] text-[11px] font-label-sm font-semibold bg-surface-container text-on-surface-variant">
                    Ledger
                  </span>
                  <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-[20px]">
                    receipt_long
                  </span>
                </div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface mb-2 font-bold">
                  Business Accounting
                </h3>
                <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                  Multi-entity general ledger, automated reconciliation, and tax-ready reporting.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-surface-container flex items-center justify-between">
                <span className="text-label-sm font-label-sm text-on-surface-variant font-medium">
                  GAAP / IFRS
                </span>
                <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform text-[20px]">
                  arrow_forward
                </span>
              </div>
            </Link>
            <Link to="/products/payroll-management" className="catalogue-card bg-surface-container-lowest/70 backdrop-blur-xl rounded-3xl p-6 glass-specular-border glass-card-hover flex flex-col justify-between group">
              <div>
                <img src="/images/products/payroll-management.jpg" alt="" loading="lazy" className="w-full h-44 object-cover rounded-2xl mb-6" />
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-0.5 rounded-[6px] text-[11px] font-label-sm font-semibold bg-surface-container text-on-surface-variant">
                    Comp
                  </span>
                  <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-[20px]">
                    payments
                  </span>
                </div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface mb-2 font-bold">
                  Payroll Management
                </h3>
                <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                  Automated wage calculation, tax compliance, and direct bank remittances.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-surface-container flex items-center justify-between">
                <span className="text-label-sm font-label-sm text-on-surface-variant font-medium">
                  Direct ACH Sync
                </span>
                <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform text-[20px]">
                  arrow_forward
                </span>
              </div>
            </Link>
            <Link to="/products/expense-management" className="catalogue-card bg-surface-container-lowest/70 backdrop-blur-xl rounded-3xl p-6 glass-specular-border glass-card-hover flex flex-col justify-between group">
              <div>
                <img src="/images/products/expense-management.jpg" alt="" loading="lazy" className="w-full h-44 object-cover rounded-2xl mb-6" />
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-0.5 rounded-[6px] text-[11px] font-label-sm font-semibold bg-surface-container text-on-surface-variant">
                    Claims
                  </span>
                  <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-[20px]">
                    receipt
                  </span>
                </div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface mb-2 font-bold">
                  Employee Expense Management
                </h3>
                <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                  Receipt OCR capture, automated policy audits, and 1-click reimbursements.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-surface-container flex items-center justify-between">
                <span className="text-label-sm font-label-sm text-on-surface-variant font-medium">
                  Auto-Audit
                </span>
                <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform text-[20px]">
                  arrow_forward
                </span>
              </div>
            </Link>
            <Link to="/products/ecommerce-finance-sync" className="catalogue-card bg-surface-container-lowest/70 backdrop-blur-xl rounded-3xl p-6 glass-specular-border glass-card-hover flex flex-col justify-between group">
              <div>
                <img src="/images/products/ecommerce-finance-sync.jpg" alt="" loading="lazy" className="w-full h-44 object-cover rounded-2xl mb-6" />
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-0.5 rounded-[6px] text-[11px] font-label-sm font-semibold bg-surface-container text-on-surface-variant">
                    Commerce
                  </span>
                  <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-[20px]">
                    sync_alt
                  </span>
                </div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface mb-2 font-bold">
                  Ecommerce-to-Finance Sync
                </h3>
                <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                  Unified revenue recognition, fee deduction automation, and payout reconciliation.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-surface-container flex items-center justify-between">
                <span className="text-label-sm font-label-sm text-on-surface-variant font-medium">
                  Stripe / Shopify
                </span>
                <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform text-[20px]">
                  arrow_forward
                </span>
              </div>
            </Link>
          </div>
        </section>
        <section className="catalogue-category" id="category-people">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-surface-container-high">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-tertiary-fixed/40 flex items-center justify-center">
                <span className="material-symbols-outlined text-tertiary text-[18px]">
                  groups
                </span>
              </div>
              <h2 className="text-headline-md font-headline-md text-on-surface">
                People
              </h2>
            </div>
            <span className="px-3 py-1 rounded-[6px] text-label-sm font-label-sm bg-surface-container text-on-surface-variant font-bold">
              3 Modules
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/products/hr-management" className="catalogue-card bg-surface-container-lowest/70 backdrop-blur-xl rounded-3xl p-6 glass-specular-border glass-card-hover flex flex-col justify-between group">
              <div>
                <img src="/images/products/hr-management.jpg" alt="" loading="lazy" className="w-full h-44 object-cover rounded-2xl mb-6" />
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-0.5 rounded-[6px] text-[11px] font-label-sm font-semibold bg-surface-container text-on-surface-variant">
                    Core HR
                  </span>
                  <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-[20px]">
                    badge
                  </span>
                </div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface mb-2 font-bold">
                  HR Management System
                </h3>
                <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                  Centralized employee profiles, leave tracking, and autonomous onboarding checklists.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-surface-container flex items-center justify-between">
                <span className="text-label-sm font-label-sm text-on-surface-variant font-medium">
                  Self-Service Portal
                </span>
                <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform text-[20px]">
                  arrow_forward
                </span>
              </div>
            </Link>
            <Link to="/products/recruitment-management" className="catalogue-card bg-surface-container-lowest/70 backdrop-blur-xl rounded-3xl p-6 glass-specular-border glass-card-hover flex flex-col justify-between group">
              <div>
                <img src="/images/products/recruitment-management.jpg" alt="" loading="lazy" className="w-full h-44 object-cover rounded-2xl mb-6" />
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-0.5 rounded-[6px] text-[11px] font-label-sm font-semibold bg-surface-container text-on-surface-variant">
                    Talent
                  </span>
                  <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-[20px]">
                    work_outline
                  </span>
                </div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface mb-2 font-bold">
                  Recruitment Management
                </h3>
                <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                  Job board distribution, pipeline management, and candidate scheduling.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-surface-container flex items-center justify-between">
                <span className="text-label-sm font-label-sm text-on-surface-variant font-medium">
                  Calendar Auto-Sync
                </span>
                <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform text-[20px]">
                  arrow_forward
                </span>
              </div>
            </Link>
            <Link to="/products/applicant-tracking" className="catalogue-card bg-surface-container-lowest/70 backdrop-blur-xl rounded-3xl p-6 glass-specular-border glass-card-hover flex flex-col justify-between group">
              <div>
                <img src="/images/products/applicant-tracking.jpg" alt="" loading="lazy" className="w-full h-44 object-cover rounded-2xl mb-6" />
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-0.5 rounded-[6px] text-[11px] font-label-sm font-semibold bg-surface-container text-on-surface-variant">
                    AI Hiring
                  </span>
                  <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-[20px]">
                    person_search
                  </span>
                </div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface mb-2 font-bold">
                  Applicant Tracking System
                </h3>
                <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                  AI resume parsing, structured scorecard reviews, and offer workflows.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-surface-container flex items-center justify-between">
                <span className="text-label-sm font-label-sm text-on-surface-variant font-medium">
                  Scorecard Match
                </span>
                <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform text-[20px]">
                  arrow_forward
                </span>
              </div>
            </Link>
          </div>
        </section>
        <section className="catalogue-category" id="category-sales-service">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-surface-container-high">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#FF7555]/15 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-[18px]">
                  support_agent
                </span>
              </div>
              <h2 className="text-headline-md font-headline-md text-on-surface">
                {"Sales & Service"}
              </h2>
            </div>
            <span className="px-3 py-1 rounded-[6px] text-label-sm font-label-sm bg-surface-container text-on-surface-variant font-bold">
              3 Modules
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/products/sales-crm" className="catalogue-card bg-surface-container-lowest/70 backdrop-blur-xl rounded-3xl p-6 glass-specular-border glass-card-hover flex flex-col justify-between group">
              <div>
                <img src="/images/products/sales-crm.jpg" alt="" loading="lazy" className="w-full h-44 object-cover rounded-2xl mb-6" />
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-0.5 rounded-[6px] text-[11px] font-label-sm font-semibold bg-surface-container text-on-surface-variant">
                    Revenue
                  </span>
                  <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-[20px]">
                    trending_up
                  </span>
                </div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface mb-2 font-bold">
                  Sales CRM
                </h3>
                <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                  Pipeline velocity tracking, automated quote builder, and deal intelligence.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-surface-container flex items-center justify-between">
                <span className="text-label-sm font-label-sm text-on-surface-variant font-medium">
                  Deal Scoring
                </span>
                <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform text-[20px]">
                  arrow_forward
                </span>
              </div>
            </Link>
            <Link to="/products/support-ticketing" className="catalogue-card bg-surface-container-lowest/70 backdrop-blur-xl rounded-3xl p-6 glass-specular-border glass-card-hover flex flex-col justify-between group">
              <div>
                <img src="/images/products/support-ticketing.jpg" alt="" loading="lazy" className="w-full h-44 object-cover rounded-2xl mb-6" />
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-0.5 rounded-[6px] text-[11px] font-label-sm font-semibold bg-surface-container text-on-surface-variant">
                    Omnichannel
                  </span>
                  <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-[20px]">
                    chat_bubble_outline
                  </span>
                </div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface mb-2 font-bold">
                  Customer Support Ticketing
                </h3>
                <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                  Omnichannel queue routing, SLA trackers, and agent copilot responses.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-surface-container flex items-center justify-between">
                <span className="text-label-sm font-label-sm text-on-surface-variant font-medium">
                  SLA Guardians
                </span>
                <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform text-[20px]">
                  arrow_forward
                </span>
              </div>
            </Link>
            <Link to="/products/field-service-management" className="catalogue-card bg-surface-container-lowest/70 backdrop-blur-xl rounded-3xl p-6 glass-specular-border glass-card-hover flex flex-col justify-between group">
              <div>
                <img src="/images/products/field-service-management.jpg" alt="" loading="lazy" className="w-full h-44 object-cover rounded-2xl mb-6" />
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-0.5 rounded-[6px] text-[11px] font-label-sm font-semibold bg-surface-container text-on-surface-variant">
                    Dispatch
                  </span>
                  <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-[20px]">
                    map
                  </span>
                </div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface mb-2 font-bold">
                  Field Service Management
                </h3>
                <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                  Dispatch scheduling, route optimization, and live technician maps.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-surface-container flex items-center justify-between">
                <span className="text-label-sm font-label-sm text-on-surface-variant font-medium">
                  GPS Routing
                </span>
                <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform text-[20px]">
                  arrow_forward
                </span>
              </div>
            </Link>
          </div>
        </section>
        <section className="catalogue-category" id="category-industry">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-surface-container-high">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-secondary-fixed/50 flex items-center justify-center">
                <span className="material-symbols-outlined text-secondary text-[18px]">
                  domain
                </span>
              </div>
              <h2 className="text-headline-md font-headline-md text-on-surface">
                Industry Systems
              </h2>
            </div>
            <span className="px-3 py-1 rounded-[6px] text-label-sm font-label-sm bg-surface-container text-on-surface-variant font-bold">
              6 Modules
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/products/retail-pos" className="catalogue-card bg-surface-container-lowest/70 backdrop-blur-xl rounded-3xl p-6 glass-specular-border glass-card-hover flex flex-col justify-between group">
              <div>
                <img src="/images/products/retail-pos.jpg" alt="" loading="lazy" className="w-full h-44 object-cover rounded-2xl mb-6" />
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-0.5 rounded-[6px] text-[11px] font-label-sm font-semibold bg-surface-container text-on-surface-variant">
                    Retail
                  </span>
                  <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-[20px]">
                    point_of_sale
                  </span>
                </div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface mb-2 font-bold">
                  Retail Point of Sale
                </h3>
                <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                  Offline-first counter checkout, customer loyalty sync, and multi-till reporting.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-surface-container flex items-center justify-between">
                <span className="text-label-sm font-label-sm text-on-surface-variant font-medium">
                  Offline Core
                </span>
                <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform text-[20px]">
                  arrow_forward
                </span>
              </div>
            </Link>
            <Link to="/products/restaurant-operations" className="catalogue-card bg-surface-container-lowest/70 backdrop-blur-xl rounded-3xl p-6 glass-specular-border glass-card-hover flex flex-col justify-between group">
              <div>
                <img src="/images/products/restaurant-operations.jpg" alt="" loading="lazy" className="w-full h-44 object-cover rounded-2xl mb-6" />
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-0.5 rounded-[6px] text-[11px] font-label-sm font-semibold bg-surface-container text-on-surface-variant">
                    Hospitality
                  </span>
                  <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-[20px]">
                    restaurant
                  </span>
                </div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface mb-2 font-bold">
                  Restaurant Operations
                </h3>
                <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                  Kitchen display system, split-bill tableside POS, and raw ingredient depletion.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-surface-container flex items-center justify-between">
                <span className="text-label-sm font-label-sm text-on-surface-variant font-medium">
                  Kitchen Display KDS
                </span>
                <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform text-[20px]">
                  arrow_forward
                </span>
              </div>
            </Link>
            <Link to="/products/auto-workshop-manager" className="catalogue-card bg-surface-container-lowest/70 backdrop-blur-xl rounded-3xl p-6 glass-specular-border glass-card-hover flex flex-col justify-between group">
              <div>
                <img src="/images/products/auto-workshop-manager.jpg" alt="" loading="lazy" className="w-full h-44 object-cover rounded-2xl mb-6" />
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-0.5 rounded-[6px] text-[11px] font-label-sm font-semibold bg-surface-container text-on-surface-variant">
                    Automotive
                  </span>
                  <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-[20px]">
                    build
                  </span>
                </div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface mb-2 font-bold">
                  Auto Workshop Manager
                </h3>
                <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                  Service bay scheduling, parts catalog lookup, and digital inspection sheets.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-surface-container flex items-center justify-between">
                <span className="text-label-sm font-label-sm text-on-surface-variant font-medium">
                  Digital Inspections
                </span>
                <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform text-[20px]">
                  arrow_forward
                </span>
              </div>
            </Link>
            <Link to="/products/online-store" className="catalogue-card bg-surface-container-lowest/70 backdrop-blur-xl rounded-3xl p-6 glass-specular-border glass-card-hover flex flex-col justify-between group">
              <div>
                <img src="/images/products/online-store.jpg" alt="" loading="lazy" className="w-full h-44 object-cover rounded-2xl mb-6" />
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-0.5 rounded-[6px] text-[11px] font-label-sm font-semibold bg-surface-container text-on-surface-variant">
                    E-Commerce
                  </span>
                  <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-[20px]">
                    shopping_bag
                  </span>
                </div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface mb-2 font-bold">
                  Online Store Platform
                </h3>
                <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                  Headless commerce engine, instant catalog indexing, and unified carts.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-surface-container flex items-center justify-between">
                <span className="text-label-sm font-label-sm text-on-surface-variant font-medium">
                  Edge Headless
                </span>
                <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform text-[20px]">
                  arrow_forward
                </span>
              </div>
            </Link>
            <Link to="/products/yacht-charter-management" className="catalogue-card bg-surface-container-lowest/70 backdrop-blur-xl rounded-3xl p-6 glass-specular-border glass-card-hover flex flex-col justify-between group">
              <div>
                <img src="/images/products/yacht-charter-management.jpg" alt="" loading="lazy" className="w-full h-44 object-cover rounded-2xl mb-6" />
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-0.5 rounded-[6px] text-[11px] font-label-sm font-semibold bg-surface-container text-on-surface-variant">
                    Maritime
                  </span>
                  <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-[20px]">
                    sailing
                  </span>
                </div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface mb-2 font-bold">
                  Yacht Charter Management
                </h3>
                <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                  Crew assignment, charter contract generation, and berth logistics.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-surface-container flex items-center justify-between">
                <span className="text-label-sm font-label-sm text-on-surface-variant font-medium">
                  {"Berth & Marina APIs"}
                </span>
                <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform text-[20px]">
                  arrow_forward
                </span>
              </div>
            </Link>
            <Link to="/products/ship-to-ship-transfer" className="catalogue-card bg-surface-container-lowest/70 backdrop-blur-xl rounded-3xl p-6 glass-specular-border glass-card-hover flex flex-col justify-between group">
              <div>
                <img src="/images/products/ship-to-ship-transfer.jpg" alt="" loading="lazy" className="w-full h-44 object-cover rounded-2xl mb-6" />
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-0.5 rounded-[6px] text-[11px] font-label-sm font-semibold bg-surface-container text-on-surface-variant">
                    Heavy Marine
                  </span>
                  <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-[20px]">
                    directions_boat
                  </span>
                </div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface mb-2 font-bold">
                  Ship-to-Ship Transfer Management
                </h3>
                <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                  Bunker telemetry, safety compliance verification, and maritime manifest logs.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-surface-container flex items-center justify-between">
                <span className="text-label-sm font-label-sm text-on-surface-variant font-medium">
                  {"IMO & OCIMF Compliant"}
                </span>
                <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform text-[20px]">
                  arrow_forward
                </span>
              </div>
            </Link>
          </div>
        </section>
        <section className="catalogue-category">
          <div className="relative bg-surface-container-lowest/80 backdrop-blur-2xl rounded-3xl p-8 md:p-12 glass-specular-border overflow-hidden">
            <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#FF7555]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-secondary-fixed/30 rounded-full blur-3xl pointer-events-none" />
            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-secondary-fixed/50 border border-secondary-fixed-dim/50">
                  <span className="material-symbols-outlined text-secondary text-[16px]">
                    hub
                  </span>
                  <span className="text-label-sm font-label-sm font-bold text-secondary tracking-wider">
                    ENTERPRISE SYSTEM BACKBONE
                  </span>
                </div>
                <h2 className="text-headline-lg font-headline-lg text-on-surface tracking-tight leading-tight">
                  One Connected Core:
                  {' '}
                  <br className="hidden sm:inline" />
                  <span className="bg-gradient-to-r from-primary to-[#FF7555] bg-clip-text text-transparent">
                    Integrated Enterprise Backbone
                  </span>
                </h2>
                <p className="text-body-lg font-body-lg text-on-surface-variant leading-relaxed">
                  Connects Sales, Inventory, Finance, and HR into one live synchronized data fabric without API fragmentation or data lag.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  <div className="bg-surface-container-low/80 rounded-2xl p-3 border border-white/80 text-center">
                    <span className="material-symbols-outlined text-primary text-[20px] mb-1">
                      sync
                    </span>
                    <p className="text-label-sm font-label-sm font-bold text-on-surface">
                      Zero-Lag Sync
                    </p>
                  </div>
                  <div className="bg-surface-container-low/80 rounded-2xl p-3 border border-white/80 text-center">
                    <span className="material-symbols-outlined text-primary text-[20px] mb-1">
                      verified
                    </span>
                    <p className="text-label-sm font-label-sm font-bold text-on-surface">
                      Single Data Truth
                    </p>
                  </div>
                  <div className="bg-surface-container-low/80 rounded-2xl p-3 border border-white/80 text-center">
                    <span className="material-symbols-outlined text-primary text-[20px] mb-1">
                      security
                    </span>
                    <p className="text-label-sm font-label-sm font-bold text-on-surface">
                      Audit-Ready Security
                    </p>
                  </div>
                  <div className="bg-surface-container-low/80 rounded-2xl p-3 border border-white/80 text-center">
                    <span className="material-symbols-outlined text-primary text-[20px] mb-1">
                      event_available
                    </span>
                    <p className="text-label-sm font-label-sm font-bold text-on-surface">
                      4-Week Go-Live
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 bg-surface-container-low/90 rounded-2xl p-6 border border-white/90 flex flex-col justify-between shadow-sm">
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between pb-3 border-b border-surface-container">
                    <span className="text-label-md font-label-md text-on-surface font-semibold">
                      Deployment Architecture
                    </span>
                    <span className="text-label-sm font-label-sm font-bold text-secondary bg-secondary-fixed/50 px-2.5 py-0.5 rounded-[6px]">
                      Private Cloud / On-Prem
                    </span>
                  </div>
                  <div className="flex items-center justify-between pb-3 border-b border-surface-container">
                    <span className="text-label-md font-label-md text-on-surface font-semibold">
                      Guaranteed Delivery
                    </span>
                    <span className="text-label-sm font-label-sm text-on-surface-variant font-medium">
                      30 Calendar Days
                    </span>
                  </div>
                  <div className="flex items-center justify-between pb-3 border-b border-surface-container">
                    <span className="text-label-md font-label-md text-on-surface font-semibold">
                      Integrations Included
                    </span>
                    <span className="text-label-sm font-label-sm text-on-surface-variant font-medium">
                      {"CRM, Banks, WMS & POS"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-label-md font-label-md text-on-surface font-semibold">
                      Pricing Model
                    </span>
                    <span className="text-label-sm font-label-sm font-bold text-primary">
                      Fixed Scope / Fixed Price
                    </span>
                  </div>
                </div>
                <Link to="/contact" className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[10px] text-label-md font-label-md font-bold text-white bg-gradient-to-r from-[#FF8A65] to-[#FF6B4A] shadow-md shadow-[#FF6B4A]/25 hover:shadow-lg hover:shadow-[#FF6B4A]/35 transition-all active:scale-98">
                  Request Full ERP Spec Sheet
                  {' '}
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12" id="scope">
        <div className="bg-gradient-to-br from-[#FF7555] via-[#FF6B4A] to-[#FF8A65] rounded-3xl p-8 md:p-14 text-white shadow-xl shadow-primary/20 relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-[6px] bg-white/20 backdrop-blur-md border border-white/30 text-white">
              <span className="material-symbols-outlined text-[16px]">
                architecture
              </span>
              <span className="text-label-sm font-label-sm font-bold tracking-wider">
                BESPOKE ARCHITECTURE
              </span>
            </div>
            <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg font-bold tracking-tight text-white">
              Don't see an exact package for your operations?
            </h2>
            <p className="text-body-lg font-body-lg text-white/90 leading-relaxed max-w-2xl">
              We architect dedicated custom systems — staff augmentation, complex Zoho rollouts, proprietary SaaS platforms, and enterprise AI automation. Receive a tailored Statement of Work and fixed quotation within 48 hours.
            </p>
            <div className="pt-4">
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-[10px] text-label-lg font-label-lg font-bold text-on-surface bg-white shadow-lg shadow-black/10 hover:bg-surface hover:scale-[1.02] transition-all duration-200 active:scale-95">
                <span className="material-symbols-outlined text-primary text-[20px]">
                  description
                </span>
                Get a scoping doc
              </Link>
            </div>
          </div>
        </div>
      </section>
      {' '}
      {' '}
    </div>
  )
}
