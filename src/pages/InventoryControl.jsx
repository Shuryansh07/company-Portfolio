// Generated from stitch/pd_inventory-management.html by scripts/stitch-to-jsx.mjs (npm run convert).
import { Link } from 'react-router-dom'
import './InventoryControl.css'

export default function InventoryControl() {
  return (
    <div className="pg-inventory-control bg-background text-on-surface antialiased min-h-screen flex flex-col selection:bg-primary-container selection:text-white">
      <title>{"Smart Inventory Control — Horizon Enterprise Platform"}</title>
      {' '}
      {' '}
      <main className="flex-grow w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 space-y-24 py-8">
        <section className="pt-4 lg:pt-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-label-md font-label-md text-on-surface-variant mb-6">
            <Link to="/products" className="hover:text-primary transition-colors">
              Products
            </Link>
            {' '}
            <span className="text-outline-variant">
              /
            </span>
            {' '}
            <a className="hover:text-primary transition-colors" href="#">
              {"Inventory & Stock"}
            </a>
            {' '}
            <span className="text-outline-variant">
              /
            </span>
            {' '}
            <span className="text-on-surface font-semibold">
              Smart Inventory Control
            </span>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-block rounded-[6px] px-2.5 py-1 text-label-sm font-label-sm uppercase tracking-wider bg-orange-100/70 text-[#ff7555] border border-orange-200/50">
                {"INVENTORY & STOCK"}
              </div>
              <h1 className="text-display-lg font-display-lg text-on-surface tracking-tight leading-none">
                Smart Inventory Control
              </h1>
              <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                Know exactly what's on your shelves, in your trucks, and on order — down to the unit, across every warehouse you run.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                <div className="flex items-center gap-2.5 rounded-[8px] bg-surface-container-lowest/90 border border-neutral-200/80 px-3.5 py-2.5 shadow-sm text-body-sm font-body-sm text-on-surface">
                  <span className="material-symbols-outlined text-[18px] text-[#ff7555]" data-icon="qr_code_scanner">
                    qr_code_scanner
                  </span>
                  {' '}
                  <span>
                    Serial and Batch Number Traceability
                  </span>
                </div>
                <div className="flex items-center gap-2.5 rounded-[8px] bg-surface-container-lowest/90 border border-neutral-200/80 px-3.5 py-2.5 shadow-sm text-body-sm font-body-sm text-on-surface">
                  <span className="material-symbols-outlined text-[18px] text-[#ff7555]" data-icon="hub">
                    hub
                  </span>
                  {' '}
                  <span>
                    Multi-Warehouse Fulfillment Routing
                  </span>
                </div>
                <div className="flex items-center gap-2.5 rounded-[8px] bg-surface-container-lowest/90 border border-neutral-200/80 px-3.5 py-2.5 shadow-sm text-body-sm font-body-sm text-on-surface">
                  <span className="material-symbols-outlined text-[18px] text-[#ff7555]" data-icon="sync_alt">
                    sync_alt
                  </span>
                  {' '}
                  <span>
                    Reorder Point Automation with Vendor Preference
                  </span>
                </div>
                <div className="flex items-center gap-2.5 rounded-[8px] bg-surface-container-lowest/90 border border-neutral-200/80 px-3.5 py-2.5 shadow-sm text-body-sm font-body-sm text-on-surface">
                  <span className="material-symbols-outlined text-[18px] text-[#ff7555]" data-icon="inventory_2">
                    inventory_2
                  </span>
                  {' '}
                  <span>
                    Composite Item and Kitting Management
                  </span>
                </div>
                <div className="flex items-center gap-2.5 rounded-[8px] bg-surface-container-lowest/90 border border-neutral-200/80 px-3.5 py-2.5 shadow-sm text-body-sm font-body-sm text-on-surface">
                  <span className="material-symbols-outlined text-[18px] text-[#ff7555]" data-icon="storefront">
                    storefront
                  </span>
                  {' '}
                  <span>
                    Marketplace and Storefront Channel Sync
                  </span>
                </div>
                <div className="flex items-center gap-2.5 rounded-[8px] bg-surface-container-lowest/90 border border-neutral-200/80 px-3.5 py-2.5 shadow-sm text-body-sm font-body-sm text-on-surface">
                  <span className="material-symbols-outlined text-[18px] text-[#ff7555]" data-icon="calculate">
                    calculate
                  </span>
                  {' '}
                  <span>
                    Landed Cost Allocation
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5" id="walkthrough">
              <div className="glass-card rounded-[18px] p-8 shadow-md border border-neutral-200/90 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container/10 rounded-bl-[40px] pointer-events-none" />
                <div className="mb-6">
                  <span className="inline-block rounded-[6px] px-2.5 py-1 text-label-sm font-label-sm font-semibold uppercase tracking-wider bg-orange-100/80 text-[#ff7555] mb-2">
                    SCHEDULE ARCHITECTURAL DEMO
                  </span>
                  {' '}
                  <h3 className="text-headline-md font-headline-md font-bold text-on-surface tracking-tight">
                    Book a live system walk-through
                  </h3>
                  <p className="text-body-sm font-body-sm text-on-surface-variant mt-1.5">
                    See how Smart Inventory Control eliminates phantom inventory and automates reorders.
                  </p>
                </div>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-label-md font-label-md text-on-surface mb-1.5">
                      Full Name
                    </label>
                    {' '}
                    <input className="w-full h-11 px-3.5 rounded-[10px] bg-white border border-neutral-300 text-body-md text-on-surface placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#ff7555]/30 focus:border-[#ff7555] transition-all" placeholder="Alex Chen" type="text" />
                  </div>
                  <div>
                    <label className="block text-label-md font-label-md text-on-surface mb-1.5">
                      Work Email
                    </label>
                    {' '}
                    <input className="w-full h-11 px-3.5 rounded-[10px] bg-white border border-neutral-300 text-body-md text-on-surface placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#ff7555]/30 focus:border-[#ff7555] transition-all" placeholder="alex.chen@enterprise.com" type="email" />
                  </div>
                  <div>
                    <label className="block text-label-md font-label-md text-on-surface mb-1.5">
                      Phone
                    </label>
                    {' '}
                    <input className="w-full h-11 px-3.5 rounded-[10px] bg-white border border-neutral-300 text-body-md text-on-surface placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#ff7555]/30 focus:border-[#ff7555] transition-all" placeholder="Phone number" type="tel" />
                  </div>
                  <div>
                    <label className="block text-label-md font-label-md text-on-surface mb-1.5">
                      Warehouse / Facility Count
                    </label>
                    {' '}
                    <select className="w-full h-11 px-3.5 rounded-[10px] bg-white border border-neutral-300 text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-[#ff7555]/30 focus:border-[#ff7555] transition-all" defaultValue="3 - 5 Facilities">
                      <option>
                        1 - 2 Facilities
                      </option>
                      <option>
                        3 - 5 Facilities
                      </option>
                      <option>
                        6 - 15 Multi-regional Hubs
                      </option>
                      <option>
                        16+ Distributed Fulfillment Centers
                      </option>
                    </select>
                  </div>
                  {' '}
                  <button className="w-full py-3.5 rounded-[10px] bg-[#ff7555] hover:bg-[#e05e3f] text-white font-label-lg font-label-lg shadow-sm hover:shadow-md transition-all active:scale-[0.99] flex items-center justify-center gap-2" type="submit">
                    <span>
                      Request Tailored Demo
                    </span>
                    {' '}
                    <span className="material-symbols-outlined text-[18px]" data-icon="arrow_forward">
                      arrow_forward
                    </span>
                  </button>
                  {' '}
                  <p className="text-label-sm font-label-sm text-on-surface-variant/80 text-center pt-2 leading-relaxed">
                    Encrypted hosting, role-based access, and regular backups. Guaranteed turnaround within 48 hours.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="space-y-6">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-block rounded-[6px] px-2.5 py-1 text-label-sm font-label-sm uppercase tracking-wider bg-sky-100/80 text-[#0e7490] border border-cyan-200/60 font-semibold">
              {"LIVE INVENTORY TELEMETRY & DISPATCH ENGINE"}
            </div>
            <h2 className="text-headline-lg font-headline-lg font-bold text-on-surface tracking-tight">
              Watch Smart Inventory Control in action: Purchase order to verified pallet.
            </h2>
            <p className="text-body-md font-body-md text-on-surface-variant">
              Simulated multi-facility stock allocation across warehouse bays, transit trucks, and storefront channels.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-4">
            <div className="lg:col-span-6 rounded-[18px] bg-neutral-900 border border-neutral-800 p-6 flex flex-col justify-between shadow-lg relative overflow-hidden text-neutral-100 min-h-[460px]">
              <div className="flex items-center justify-between z-10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  {' '}
                  <span className="text-label-sm font-label-sm tracking-wide text-neutral-300 uppercase">
                    Live Playback Feed
                  </span>
                </div>
                {' '}
                <span className="text-label-sm font-label-sm bg-neutral-800/80 border border-neutral-700/80 px-2.5 py-1 rounded-[6px] text-neutral-300">
                  03:15 Walkthrough
                </span>
              </div>
              <div className="flex flex-col items-center justify-center my-auto z-10 text-center space-y-3 py-10">
                <button aria-label="Play Walkthrough" className="w-16 h-16 rounded-[12px] bg-gradient-to-tr from-[#ff7555] to-[#ff9068] text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-[32px] ml-1" data-icon="play_arrow">
                    play_arrow
                  </span>
                </button>
                {' '}
                <p className="text-body-sm font-body-sm text-neutral-400">
                  Click to run deterministic allocation run
                </p>
              </div>
              <div className="z-10 space-y-2.5 bg-neutral-950/70 p-4 rounded-[12px] border border-neutral-800">
                <div className="flex items-center justify-between text-label-sm font-label-sm text-neutral-400 border-b border-neutral-800 pb-2">
                  <span className="text-[#ff7555] font-semibold">
                    00:45
                  </span>
                  {' '}
                  <span>
                    {"Inbound barcode scan & serial verification"}
                  </span>
                  {' '}
                  <span className="text-emerald-400">
                    Verified
                  </span>
                </div>
                <div className="flex items-center justify-between text-label-sm font-label-sm text-neutral-400 border-b border-neutral-800 pb-2">
                  <span className="text-[#ff7555] font-semibold">
                    01:30
                  </span>
                  {' '}
                  <span>
                    Automated multi-facility allocation rule
                  </span>
                  {' '}
                  <span className="text-emerald-400">
                    Routed
                  </span>
                </div>
                <div className="flex items-center justify-between text-label-sm font-label-sm text-neutral-400">
                  <span className="text-[#ff7555] font-semibold">
                    02:50
                  </span>
                  {' '}
                  <span>
                    Automatic PO generation to primary vendor
                  </span>
                  {' '}
                  <span className="text-cyan-400">
                    Dispatched
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 rounded-[18px] bg-surface-container-lowest border border-neutral-200/90 shadow-md p-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-outline-variant/30">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-[6px] bg-orange-100 flex items-center justify-center text-[#ff7555]">
                      <span className="material-symbols-outlined text-[18px]" data-icon="inventory">
                        inventory
                      </span>
                    </div>
                    <div>
                      <h4 className="text-label-lg font-label-lg font-bold text-on-surface">
                        Horizon StockHub v4.2
                      </h4>
                      <div className="flex items-center gap-2 text-label-sm font-label-sm text-on-surface-variant">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        {' '}
                        <span>
                          Live Sync: 4 Warehouses Connected
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-[6px] bg-surface-container-high px-2 py-1 text-label-sm font-label-sm font-mono text-on-surface-variant">
                    Latency: 42 ms
                  </div>
                </div>
                <div className="p-3.5 bg-surface-container-low/70 rounded-[10px] border border-neutral-200/60">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-label-sm font-label-sm font-mono text-[#ff7555] font-semibold">
                        SKU-94021
                      </span>
                      {' '}
                      <div className="text-body-md font-body-md font-semibold text-on-surface">
                        Industrial Servo Drive (Lot #L-8840-X)
                      </div>
                    </div>
                    {' '}
                    <span className="rounded-[6px] bg-[#ecfccb] text-[#4d7c0f] px-2 py-0.5 text-label-sm font-label-sm font-medium">
                      Optimal Safety Buffer
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-neutral-200/50 text-center">
                    <div>
                      <div className="text-headline-sm font-headline-sm font-bold text-on-surface">
                        12,480
                      </div>
                      <div className="text-label-sm font-label-sm text-on-surface-variant">
                        Available
                      </div>
                    </div>
                    <div>
                      <div className="text-headline-sm font-headline-sm font-bold text-on-surface">
                        640
                      </div>
                      <div className="text-label-sm font-label-sm text-on-surface-variant">
                        Reserved
                      </div>
                    </div>
                    <div>
                      <div className="text-headline-sm font-headline-sm font-bold text-on-surface">
                        215
                      </div>
                      <div className="text-label-sm font-label-sm text-on-surface-variant">
                        In Transit
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-label-sm font-label-sm font-semibold uppercase tracking-wider text-on-surface-variant">
                    Facility Allocation Matrix
                  </div>
                  <div className="divide-y divide-neutral-100 text-body-sm font-body-sm">
                    <div className="py-2 flex items-center justify-between">
                      <span className="text-on-surface font-medium">
                        Central Hub (Aisle 04-B)
                      </span>
                      {' '}
                      <span className="font-mono text-on-surface">
                        8,420 units
                      </span>
                      {' '}
                      <span className="rounded-[6px] px-2 py-0.5 text-label-sm bg-neutral-100 text-neutral-700">
                        Stocked
                      </span>
                    </div>
                    <div className="py-2 flex items-center justify-between">
                      <span className="text-on-surface font-medium">
                        West Coast Distribution
                      </span>
                      {' '}
                      <span className="font-mono text-on-surface">
                        3,150 units
                      </span>
                      {' '}
                      <span className="rounded-[6px] px-2 py-0.5 text-label-sm bg-neutral-100 text-neutral-700">
                        Stocked
                      </span>
                    </div>
                    <div className="py-2 flex items-center justify-between">
                      <span className="text-on-surface font-medium">
                        Regional Depot #2
                      </span>
                      {' '}
                      <span className="font-mono text-on-surface">
                        640 units
                      </span>
                      {' '}
                      <span className="rounded-[6px] px-2 py-0.5 text-label-sm bg-amber-100 text-amber-800">
                        Threshold Low
                      </span>
                    </div>
                    <div className="py-2 flex items-center justify-between">
                      <span className="text-on-surface font-medium">
                        Truck Fleet 08
                      </span>
                      {' '}
                      <span className="font-mono text-on-surface">
                        215 units
                      </span>
                      {' '}
                      <span className="rounded-[6px] px-2 py-0.5 text-label-sm bg-cyan-100 text-cyan-800">
                        En Route
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-3 rounded-[10px] bg-orange-50/80 border border-orange-200/70 flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[#ff7555] text-[20px] mt-0.5" data-icon="electric_bolt">
                  electric_bolt
                </span>
                {' '}
                <div className="text-body-sm font-body-sm text-on-surface">
                  <span className="font-semibold text-[#ff7555]">
                    Vendor EDI Triggered:
                  </span>
                  {' '}
                  Automatic PO #48213 dispatched to approved tier-1 vendor based on consumption velocity.
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="space-y-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-block rounded-[6px] px-2.5 py-1 text-label-sm font-label-sm uppercase tracking-wider bg-orange-100/70 text-[#ff7555] border border-orange-200/50 font-semibold">
              THE OPERATIONAL BOTTLENECK
            </div>
            <h2 className="text-headline-lg font-headline-lg font-bold text-on-surface tracking-tight">
              Stop guessing what you have across your warehouses.
            </h2>
            <p className="text-body-lg font-body-lg text-on-surface-variant leading-relaxed">
              Spreadsheets and gut instinct fall apart the moment you're running more than one warehouse or selling through more than one channel. Smart Inventory Control gives you a single, live picture of every SKU — what's in stock, what's committed, what's incoming — so reordering stops being a panic and starts being a plan.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card rounded-[14px] p-6 shadow-sm border border-neutral-200/80 space-y-3 hover:border-[#ff7555]/40 transition-colors">
              <div className="w-10 h-10 rounded-[8px] bg-orange-100/80 text-[#ff7555] flex items-center justify-center">
                <span className="material-symbols-outlined text-[22px]" data-icon="deployed_code">
                  deployed_code
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm font-bold text-on-surface">
                Real-time stock counts across unlimited warehouses
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                Every shelf scan, transfer, and receipt synchronizes instantaneously across all facilities, eradicating ghost counts and inventory drift.
              </p>
            </div>
            <div className="glass-card rounded-[14px] p-6 shadow-sm border border-neutral-200/80 space-y-3 hover:border-[#ff7555]/40 transition-colors">
              <div className="w-10 h-10 rounded-[8px] bg-orange-100/80 text-[#ff7555] flex items-center justify-center">
                <span className="material-symbols-outlined text-[22px]" data-icon="notifications_active">
                  notifications_active
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm font-bold text-on-surface">
                Automatic reorder points before you run dry
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                Dynamic safety stock triggers notify buyers and generate vendor POs before critical stockouts happen, configured to lead time variances.
              </p>
            </div>
            <div className="glass-card rounded-[14px] p-6 shadow-sm border border-neutral-200/80 space-y-3 hover:border-[#ff7555]/40 transition-colors">
              <div className="w-10 h-10 rounded-[8px] bg-orange-100/80 text-[#ff7555] flex items-center justify-center">
                <span className="material-symbols-outlined text-[22px]" data-icon="account_balance_wallet">
                  account_balance_wallet
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm font-bold text-on-surface">
                One system for purchasing, sales, and stock together
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                Direct reconciliation connecting storefront orders, sales CRM pipelines, and warehouse ledgers into unified accounting records.
              </p>
            </div>
          </div>
        </section>
        <section className="space-y-8" id="products">
          <div className="space-y-2">
            <div className="inline-block rounded-[6px] px-2.5 py-1 text-label-sm font-label-sm uppercase tracking-wider bg-orange-100/70 text-[#ff7555] border border-orange-200/50 font-semibold">
              ENGINEERED CAPABILITIES
            </div>
            <h2 className="text-headline-lg font-headline-lg font-bold text-on-surface tracking-tight">
              Built for businesses that move real stock: Six deterministic capabilities.
            </h2>
            <p className="text-body-md font-body-md text-on-surface-variant max-w-3xl">
              Every capability here solves a problem warehouse and supply chain teams fight with spreadsheets for years.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-3">
              <div className="p-4 rounded-[12px] active-feature-tab border border-neutral-300 shadow-sm cursor-pointer transition-all">
                <div className="flex items-center justify-between">
                  <span className="text-label-md font-label-md font-bold text-[#ff7555]">
                    01. TRACEABILITY
                  </span>
                  {' '}
                  <span className="material-symbols-outlined text-[#ff7555] text-[18px]" data-icon="check_circle">
                    check_circle
                  </span>
                </div>
                <h4 className="text-body-md font-body-md font-bold text-on-surface mt-1">
                  Serial and Batch Number Traceability
                </h4>
                <p className="text-body-sm font-body-sm text-on-surface-variant mt-1">
                  Each high-value item gets a traceable serial number, while perishable goods track by batch and expiry so a single bad lot can be isolated without touching the rest.
                </p>
              </div>
              <div className="p-4 rounded-[12px] bg-white border border-neutral-200/80 hover:bg-neutral-50 shadow-sm cursor-pointer transition-all">
                <span className="text-label-md font-label-md font-bold text-on-surface-variant">
                  02. ROUTING
                </span>
                {' '}
                <h4 className="text-body-md font-body-md font-semibold text-on-surface mt-1">
                  Multi-Warehouse Fulfillment Routing
                </h4>
                <p className="text-body-sm font-body-sm text-on-surface-variant mt-1">
                  Intelligent order routing to the closest facility with stock to cut shipping times and eliminate split shipments.
                </p>
              </div>
              <div className="p-4 rounded-[12px] bg-white border border-neutral-200/80 hover:bg-neutral-50 shadow-sm cursor-pointer transition-all">
                <span className="text-label-md font-label-md font-bold text-on-surface-variant">
                  03. REORDERING
                </span>
                {' '}
                <h4 className="text-body-md font-body-md font-semibold text-on-surface mt-1">
                  Reorder Point Automation with Vendor Preference
                </h4>
                <p className="text-body-sm font-body-sm text-on-surface-variant mt-1">
                  Automated PO generation mapped to preferred supplier contracts, MOQ rules, and lead-time schedules.
                </p>
              </div>
              <div className="p-4 rounded-[12px] bg-white border border-neutral-200/80 hover:bg-neutral-50 shadow-sm cursor-pointer transition-all">
                <span className="text-label-md font-label-md font-bold text-on-surface-variant">
                  04. KITTING
                </span>
                {' '}
                <h4 className="text-body-md font-body-md font-semibold text-on-surface mt-1">
                  Composite Item and Kitting Management
                </h4>
                <p className="text-body-sm font-body-sm text-on-surface-variant mt-1">
                  Track multi-component assemblies, bundle kits, and raw material depletion with accurate finished-goods accounting.
                </p>
              </div>
              <div className="p-4 rounded-[12px] bg-white border border-neutral-200/80 hover:bg-neutral-50 shadow-sm cursor-pointer transition-all">
                <span className="text-label-md font-label-md font-bold text-on-surface-variant">
                  05. OMNICHANNEL
                </span>
                {' '}
                <h4 className="text-body-md font-body-md font-semibold text-on-surface mt-1">
                  Marketplace and Storefront Channel Sync
                </h4>
                <p className="text-body-sm font-body-sm text-on-surface-variant mt-1">
                  Bi-directional real-time inventory buffers across online shops, B2B wholesale portals, and retail POS.
                </p>
              </div>
              <div className="p-4 rounded-[12px] bg-white border border-neutral-200/80 hover:bg-neutral-50 shadow-sm cursor-pointer transition-all">
                <span className="text-label-md font-label-md font-bold text-on-surface-variant">
                  06. COSTING
                </span>
                {' '}
                <h4 className="text-body-md font-body-md font-semibold text-on-surface mt-1">
                  Landed Cost Allocation
                </h4>
                <p className="text-body-sm font-body-sm text-on-surface-variant mt-1">
                  Precise margin calculation incorporating freight, customs, handling, and insurance directly into unit COGS.
                </p>
              </div>
            </div>
            <div className="lg:col-span-7 rounded-[18px] bg-surface-container-lowest border border-neutral-300 shadow-md p-7 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-outline-variant/30">
                <div>
                  <div className="text-label-sm font-label-sm font-bold text-[#ff7555] uppercase tracking-wider">
                    Deep Dive Module
                  </div>
                  <h3 className="text-headline-md font-headline-md font-bold text-on-surface">
                    {"Serial & Batch Inspection Ledger"}
                  </h3>
                </div>
                {' '}
                <span className="rounded-[6px] px-3 py-1 text-label-sm font-label-sm bg-[#ecfccb] text-[#4d7c0f] font-semibold border border-lime-200">
                  Audit Verified
                </span>
              </div>
              <div className="p-4 rounded-[10px] bg-surface-container-low border border-neutral-200/80 space-y-3">
                <div className="flex justify-between items-center text-label-sm font-label-sm text-on-surface-variant">
                  <span>
                    Lot Serial Sequence:
                    {' '}
                    <strong className="text-on-surface">
                      SN-2025-098842-X
                    </strong>
                  </span>
                  {' '}
                  <span>
                    Inspection Node:
                    {' '}
                    <strong className="text-on-surface">
                      Bay 12 Scanner A
                    </strong>
                  </span>
                </div>
                <div className="w-full bg-neutral-200 h-2 rounded-[4px] overflow-hidden">
                  <div className="bg-gradient-to-r from-[#ff7555] to-emerald-500 h-full w-[82%] rounded-[4px]" />
                </div>
                <div className="flex justify-between text-label-sm font-label-sm text-neutral-600">
                  <span>
                    Verified Shelf Life Remaining: 82%
                  </span>
                  {' '}
                  <span>
                    Expiry: 2026-11-30
                  </span>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-body-sm font-body-sm">
                  <thead className="bg-surface-container-high/60 text-label-sm font-label-sm uppercase tracking-wider text-on-surface-variant">
                    <tr>
                      <th className="py-2.5 px-3 rounded-l-[6px]">
                        Item ID
                      </th>
                      <th className="py-2.5 px-3">
                        Batch/Lot #
                      </th>
                      <th className="py-2.5 px-3">
                        Status
                      </th>
                      <th className="py-2.5 px-3 rounded-r-[6px]">
                        Cryptographic Audit Stamp
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-100">
                    <tr>
                      <td className="py-3 px-3 font-mono font-medium">
                        SRV-894-01
                      </td>
                      <td className="py-3 px-3 font-mono">
                        LOT-2024-B1
                      </td>
                      <td className="py-3 px-3">
                        <span className="rounded-[6px] bg-[#ecfccb] text-[#4d7c0f] px-2 py-0.5 text-label-sm">
                          Active Lot
                        </span>
                      </td>
                      <td className="py-3 px-3 font-mono text-label-sm text-neutral-500">
                        0x8F9a..44D2
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3 font-mono font-medium">
                        SRV-894-02
                      </td>
                      <td className="py-3 px-3 font-mono">
                        LOT-2024-B1
                      </td>
                      <td className="py-3 px-3">
                        <span className="rounded-[6px] bg-[#ecfccb] text-[#4d7c0f] px-2 py-0.5 text-label-sm">
                          Active Lot
                        </span>
                      </td>
                      <td className="py-3 px-3 font-mono text-label-sm text-neutral-500">
                        0x3E1c..91F0
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3 font-mono font-medium">
                        SRV-894-03
                      </td>
                      <td className="py-3 px-3 font-mono">
                        LOT-2023-A9
                      </td>
                      <td className="py-3 px-3">
                        <span className="rounded-[6px] bg-red-100 text-red-700 px-2 py-0.5 text-label-sm">
                          Isolated (Expired)
                        </span>
                      </td>
                      <td className="py-3 px-3 font-mono text-label-sm text-neutral-500">
                        0x7B4d..11E5
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="p-4 rounded-[10px] bg-sky-50/60 border border-sky-200/60 flex items-start gap-3">
                <span className="material-symbols-outlined text-[#0e7490] text-[20px]" data-icon="policy">
                  policy
                </span>
                {' '}
                <p className="text-body-sm font-body-sm text-on-surface">
                  Deterministic lot tracking enables one-click recall containment. If a supplier alerts on a component defect, all assembled or stocked variants are flagged instantaneously across every location without halting untouched catalog items.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="space-y-8" id="solutions">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-block rounded-[6px] px-2.5 py-1 text-label-sm font-label-sm uppercase tracking-wider bg-orange-100/70 text-[#ff7555] border border-orange-200/50 font-semibold">
              EXECUTION WORKFLOW
            </div>
            <h2 className="text-headline-lg font-headline-lg font-bold text-on-surface tracking-tight">
              From Setup to Number Trust: Four deterministic steps.
            </h2>
            <p className="text-body-md font-body-md text-on-surface-variant">
              Four connected phases, engineered to run continuously with minimal manual intervention.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            <div className="glass-card rounded-[14px] p-6 shadow-sm border border-neutral-200/80 flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-[8px] bg-[#ff7555] text-white flex items-center justify-center font-bold text-label-lg font-label-lg shadow-sm">
                  01
                </div>
                <h3 className="text-headline-sm font-headline-sm font-bold text-on-surface">
                  Set up items and reorder points
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                  Every item is configured once with reorder points, warehouse assignments, barcode schemas, and baseline unit costs.
                </p>
              </div>
              <div className="pt-3 border-t border-neutral-100 text-label-sm font-label-sm text-[#ff7555] font-semibold flex items-center gap-1">
                <span>
                  {"Config & Ingestion"}
                </span>
                {' '}
                <span className="material-symbols-outlined text-[16px]" data-icon="east">
                  east
                </span>
              </div>
            </div>
            <div className="glass-card rounded-[14px] p-6 shadow-sm border border-neutral-200/80 flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-[8px] bg-[#ff7555] text-white flex items-center justify-center font-bold text-label-lg font-label-lg shadow-sm">
                  02
                </div>
                <h3 className="text-headline-sm font-headline-sm font-bold text-on-surface">
                  Sales and purchases post automatically
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                  Stock updates the moment a customer checks out or an inbound shipment is verified at the bay — zero double entry.
                </p>
              </div>
              <div className="pt-3 border-t border-neutral-100 text-label-sm font-label-sm text-[#ff7555] font-semibold flex items-center gap-1">
                <span>
                  Automated Telemetry
                </span>
                {' '}
                <span className="material-symbols-outlined text-[16px]" data-icon="east">
                  east
                </span>
              </div>
            </div>
            <div className="glass-card rounded-[14px] p-6 shadow-sm border border-neutral-200/80 flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-[8px] bg-[#ff7555] text-white flex items-center justify-center font-bold text-label-lg font-label-lg shadow-sm">
                  03
                </div>
                <h3 className="text-headline-sm font-headline-sm font-bold text-on-surface">
                  Alerts fire before you run out
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                  Low-stock threshold triggers initiate supplier replenishment and recommend inter-warehouse stock rebalancing.
                </p>
              </div>
              <div className="pt-3 border-t border-neutral-100 text-label-sm font-label-sm text-[#ff7555] font-semibold flex items-center gap-1">
                <span>
                  Dynamic Replenishment
                </span>
                {' '}
                <span className="material-symbols-outlined text-[16px]" data-icon="east">
                  east
                </span>
              </div>
            </div>
            <div className="glass-card rounded-[14px] p-6 shadow-sm border border-neutral-200/80 flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-[8px] bg-[#ff7555] text-white flex items-center justify-center font-bold text-label-lg font-label-lg shadow-sm">
                  04
                </div>
                <h3 className="text-headline-sm font-headline-sm font-bold text-on-surface">
                  Reports show what is really happening
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                  Clean, audit-ready operational ledgers show exactly what moved, what is aging, and where capital is locked.
                </p>
              </div>
              <div className="pt-3 border-t border-neutral-100 text-label-sm font-label-sm text-emerald-600 font-semibold flex items-center gap-1">
                <span>
                  Operational Trust
                </span>
                {' '}
                <span className="material-symbols-outlined text-[16px]" data-icon="verified">
                  verified
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="space-y-8">
          <div className="space-y-2">
            <div className="inline-block rounded-[6px] px-2.5 py-1 text-label-sm font-label-sm uppercase tracking-wider bg-orange-100/70 text-[#ff7555] border border-orange-200/50 font-semibold">
              OPERATIONAL ADVANTAGE
            </div>
            <h2 className="text-headline-lg font-headline-lg font-bold text-on-surface tracking-tight">
              Why operations teams switch from spreadsheets.
            </h2>
            <p className="text-body-md font-body-md text-on-surface-variant max-w-3xl">
              Fewer stockouts, less wasted cash, and inventory counts everyone in the business actually trusts.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-[14px] border border-neutral-200/80 p-6 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-[8px] bg-red-100 text-[#ff7555] flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]" data-icon="remove_shopping_cart">
                  remove_shopping_cart
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm font-bold text-on-surface">
                Fewer Stockouts
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                Eliminate emergency freight fees and customer backorders with automated stock triggers and multi-node routing.
              </p>
            </div>
            <div className="bg-white rounded-[14px] border border-neutral-200/80 p-6 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-[8px] bg-amber-100 text-amber-700 flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]" data-icon="savings">
                  savings
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm font-bold text-on-surface">
                Less Cash Tied Up
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                Free operating capital by exposing dead inventory, reducing over-ordering, and optimizing safety stock levels.
              </p>
            </div>
            <div className="bg-white rounded-[14px] border border-neutral-200/80 p-6 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-[8px] bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]" data-icon="fact_check">
                  fact_check
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm font-bold text-on-surface">
                Numbers You Can Trust
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                Eradicate grueling monthly physical stock takes with continuous perpetual inventory accuracy and scan checkpoints.
              </p>
            </div>
            <div className="bg-white rounded-[14px] border border-neutral-200/80 p-6 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-[8px] bg-cyan-100 text-[#0e7490] flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]" data-icon="group_work">
                  group_work
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm font-bold text-on-surface">
                One Shared Source of Truth
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                Keep warehouse staff, sales reps, and financial controllers aligned to identical figures across every system.
              </p>
            </div>
          </div>
          <div className="rounded-[12px] bg-neutral-50/90 border border-neutral-200/70 p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-label-md font-label-md font-bold text-on-surface">
                <span className="material-symbols-outlined text-[#ff7555] text-[18px]" data-icon="lock">
                  lock
                </span>
                {' '}
                <span>
                  Enterprise-Grade Security
                </span>
              </div>
              <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                Encrypted hosting, role-based access, and regular backups. Your data always remains fully yours and exportable, with no lock-in.
              </p>
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-label-md font-label-md font-bold text-on-surface">
                <span className="material-symbols-outlined text-[#ff7555] text-[18px]" data-icon="receipt_long">
                  receipt_long
                </span>
                {' '}
                <span>
                  Transparent, Scoped Pricing
                </span>
              </div>
              <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                Every engagement is scoped individually with a fixed price and timeline agreed upfront — book a free consultation for a tailored quote.
              </p>
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-label-md font-label-md font-bold text-on-surface">
                <span className="material-symbols-outlined text-[#ff7555] text-[18px]" data-icon="badge">
                  badge
                </span>
                {' '}
                <span>
                  Built For Your Whole Team
                </span>
              </div>
              <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                Role-based views mean owners, warehouse managers, and floor pickers each see exactly what they need, nothing more, nothing missing.
              </p>
            </div>
          </div>
        </section>
        <section className="space-y-8" id="case-studies">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-block rounded-[6px] px-2.5 py-1 text-label-sm font-label-sm uppercase tracking-wider bg-orange-100/70 text-[#ff7555] border border-orange-200/50 font-semibold">
              OPERATIONAL CONTRAST
            </div>
            <h2 className="text-headline-lg font-headline-lg font-bold text-on-surface tracking-tight">
              What Changes on Day One
            </h2>
            <p className="text-body-md font-body-md text-on-surface-variant">
              Comparing manual spreadsheet reconciliation against Horizon's synchronized inventory architecture.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-[16px] border border-red-200 bg-red-50/20 p-8 space-y-6 shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-red-200/60">
                <div>
                  <span className="text-label-sm font-label-sm font-bold text-red-700 uppercase tracking-wider">
                    LEGACY WORKFLOW
                  </span>
                  {' '}
                  <h3 className="text-headline-sm font-headline-sm font-bold text-on-surface mt-1">
                    The Fragile Spreadsheet Workflow
                  </h3>
                </div>
                {' '}
                <span className="w-8 h-8 rounded-[8px] bg-red-100 text-red-600 flex items-center justify-center font-bold">
                  ✕
                </span>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-red-500 font-bold text-lg mt-0.5">
                    ✕
                  </span>
                  {' '}
                  <p className="text-body-md font-body-md text-on-surface-variant">
                    Stock counts kept in spreadsheets that go stale by lunchtime, resulting in costly overselling.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-500 font-bold text-lg mt-0.5">
                    ✕
                  </span>
                  {' '}
                  <p className="text-body-md font-body-md text-on-surface-variant">
                    Emergency reorders triggered only after a customer discovers an out-of-stock item in the cart.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-500 font-bold text-lg mt-0.5">
                    ✕
                  </span>
                  {' '}
                  <p className="text-body-md font-body-md text-on-surface-variant">
                    Zero real-time visibility into which regional warehouse actually holds available stock.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-500 font-bold text-lg mt-0.5">
                    ✕
                  </span>
                  {' '}
                  <p className="text-body-md font-body-md text-on-surface-variant">
                    Labor-intensive physical recounts required to uncover phantom discrepancies and shrinkage.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-[16px] border border-emerald-200 bg-emerald-50/25 p-8 space-y-6 shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-emerald-200/60">
                <div>
                  <span className="text-label-sm font-label-sm font-bold text-emerald-800 uppercase tracking-wider">
                    HORIZON ARCHITECTURE
                  </span>
                  {' '}
                  <h3 className="text-headline-sm font-headline-sm font-bold text-on-surface mt-1">
                    The Horizon Synchronized Architecture
                  </h3>
                </div>
                {' '}
                <span className="w-8 h-8 rounded-[8px] bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                  ✓
                </span>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold text-lg mt-0.5">
                    ✓
                  </span>
                  {' '}
                  <p className="text-body-md font-body-md text-on-surface-variant">
                    Live stock counts updated instantaneously with every sale, barcode scan, and purchase receipt.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold text-lg mt-0.5">
                    ✓
                  </span>
                  {' '}
                  <p className="text-body-md font-body-md text-on-surface-variant">
                    Automatic predictive alerts dispatched to buyers days before inventory drops below threshold.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold text-lg mt-0.5">
                    ✓
                  </span>
                  {' '}
                  <p className="text-body-md font-body-md text-on-surface-variant">
                    Complete cross-facility visibility with automated inter-warehouse transfer workflows.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold text-lg mt-0.5">
                    ✓
                  </span>
                  {' '}
                  <p className="text-body-md font-body-md text-on-surface-variant">
                    Granular serial and lot tracking providing tamper-evident traceability for every single unit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="space-y-8 max-w-4xl mx-auto">
          <div className="text-center space-y-2">
            <div className="inline-block rounded-[6px] px-2.5 py-1 text-label-sm font-label-sm uppercase tracking-wider bg-orange-100/70 text-[#ff7555] border border-orange-200/50 font-semibold">
              {"SYSTEM ARCHITECTURE & INTEGRATION"}
            </div>
            <h2 className="text-headline-lg font-headline-lg font-bold text-on-surface tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-body-md font-body-md text-on-surface-variant">
              Clear answers regarding multi-warehouse setup, barcode compatibility, accounting sync, and data ownership.
            </p>
          </div>
          <div className="space-y-3.5">
            <div className="rounded-[12px] bg-white border border-neutral-300 shadow-sm overflow-hidden">
              <div className="p-5 flex items-center justify-between cursor-pointer bg-neutral-50/50">
                <h4 className="text-body-md font-body-md font-bold text-on-surface">
                  1. Can it handle items that come in different units, like boxes of 12 sold individually?
                </h4>
                {' '}
                <span className="material-symbols-outlined text-[#ff7555] text-[20px]" data-icon="keyboard_arrow_up">
                  keyboard_arrow_up
                </span>
              </div>
              <div className="px-5 pb-5 pt-1 text-body-sm font-body-sm text-on-surface-variant border-t border-neutral-100 leading-relaxed space-y-2">
                <p>
                  Yes. Smart Inventory Control natively supports hierarchical Multi-Unit-of-Measure (Multi-UOM) conversions and parent-child packaging configurations. You can receive items as pallets, stock them as master cartons, and fulfill customer orders as individual units.
                </p>
                <p>
                  When a single unit is picked or sold, the parent carton automatically registers fractional depletion without desynchronizing the physical stock ledger or warehouse lot audit trails.
                </p>
              </div>
            </div>
            <div className="rounded-[12px] bg-white border border-neutral-200/80 shadow-sm p-5 flex items-center justify-between cursor-pointer hover:bg-neutral-50/60 transition-colors">
              <h4 className="text-body-md font-body-md font-semibold text-on-surface">
                2. We already use accounting software — will stock changes show up there too?
              </h4>
              {' '}
              <span className="material-symbols-outlined text-neutral-400 text-[20px]" data-icon="keyboard_arrow_down">
                keyboard_arrow_down
              </span>
            </div>
            <div className="rounded-[12px] bg-white border border-neutral-200/80 shadow-sm p-5 flex items-center justify-between cursor-pointer hover:bg-neutral-50/60 transition-colors">
              <h4 className="text-body-md font-body-md font-semibold text-on-surface">
                3. What happens if two warehouses count the same item differently after a physical count?
              </h4>
              {' '}
              <span className="material-symbols-outlined text-neutral-400 text-[20px]" data-icon="keyboard_arrow_down">
                keyboard_arrow_down
              </span>
            </div>
            <div className="rounded-[12px] bg-white border border-neutral-200/80 shadow-sm p-5 flex items-center justify-between cursor-pointer hover:bg-neutral-50/60 transition-colors">
              <h4 className="text-body-md font-body-md font-semibold text-on-surface">
                4. How long does it take to get our existing catalog set up?
              </h4>
              {' '}
              <span className="material-symbols-outlined text-neutral-400 text-[20px]" data-icon="keyboard_arrow_down">
                keyboard_arrow_down
              </span>
            </div>
            <div className="rounded-[12px] bg-white border border-neutral-200/80 shadow-sm p-5 flex items-center justify-between cursor-pointer hover:bg-neutral-50/60 transition-colors">
              <h4 className="text-body-md font-body-md font-semibold text-on-surface">
                5. Does it work for perishable or expiry-dated stock?
              </h4>
              {' '}
              <span className="material-symbols-outlined text-neutral-400 text-[20px]" data-icon="keyboard_arrow_down">
                keyboard_arrow_down
              </span>
            </div>
            <div className="rounded-[12px] bg-white border border-neutral-200/80 shadow-sm p-5 flex items-center justify-between cursor-pointer hover:bg-neutral-50/60 transition-colors">
              <h4 className="text-body-md font-body-md font-semibold text-on-surface">
                6. Can we run it alongside our existing accounting system?
              </h4>
              {' '}
              <span className="material-symbols-outlined text-neutral-400 text-[20px]" data-icon="keyboard_arrow_down">
                keyboard_arrow_down
              </span>
            </div>
            <div className="rounded-[12px] bg-white border border-neutral-200/80 shadow-sm p-5 flex items-center justify-between cursor-pointer hover:bg-neutral-50/60 transition-colors">
              <h4 className="text-body-md font-body-md font-semibold text-on-surface">
                7. How long does implementation typically take?
              </h4>
              {' '}
              <span className="material-symbols-outlined text-neutral-400 text-[20px]" data-icon="keyboard_arrow_down">
                keyboard_arrow_down
              </span>
            </div>
            <div className="rounded-[12px] bg-white border border-neutral-200/80 shadow-sm p-5 flex items-center justify-between cursor-pointer hover:bg-neutral-50/60 transition-colors">
              <h4 className="text-body-md font-body-md font-semibold text-on-surface">
                8. Is our data secure, and who owns it?
              </h4>
              {' '}
              <span className="material-symbols-outlined text-neutral-400 text-[20px]" data-icon="keyboard_arrow_down">
                keyboard_arrow_down
              </span>
            </div>
          </div>
        </section>
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-block rounded-[6px] px-2.5 py-1 text-label-sm font-label-sm uppercase tracking-wider bg-orange-100/70 text-[#ff7555] border border-orange-200/50 font-semibold mb-2">
                MODULAR ENTERPRISE SUITE
              </div>
              <h2 className="text-headline-lg font-headline-lg font-bold text-on-surface tracking-tight">
                Looking for something else?
              </h2>
            </div>
            {' '}
            <Link to="/products" className="inline-flex items-center gap-1.5 text-label-md font-label-md font-bold text-[#ff7555] hover:text-[#e05e3f] transition-colors">
              <span>
                Browse all product packages
              </span>
              {' '}
              <span className="material-symbols-outlined text-[18px]" data-icon="arrow_forward">
                arrow_forward
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card rounded-[14px] p-6 shadow-sm border border-neutral-200/80 hover:shadow-md hover:border-[#ff7555]/50 transition-all flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-[8px] bg-orange-100 text-[#ff7555] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]" data-icon="warehouse">
                    warehouse
                  </span>
                </div>
                <h3 className="text-headline-sm font-headline-sm font-bold text-on-surface">
                  Warehouse Operations Platform
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                  Turn a warehouse floor into a system your pickers, packers and managers can actually see and trust.
                </p>
              </div>
              {' '}
              <span className="text-label-sm font-label-sm font-bold text-[#ff7555]">
                Learn more →
              </span>
            </div>
            <div className="glass-card rounded-[14px] p-6 shadow-sm border border-neutral-200/80 hover:shadow-md hover:border-[#ff7555]/50 transition-all flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-[8px] bg-cyan-100 text-[#0e7490] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]" data-icon="currency_exchange">
                    currency_exchange
                  </span>
                </div>
                <h3 className="text-headline-sm font-headline-sm font-bold text-on-surface">
                  Ecommerce-to-Finance Sync
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                  Every online order updates your books automatically, no exporting spreadsheets to reconcile sales with accounting.
                </p>
              </div>
              {' '}
              <span className="text-label-sm font-label-sm font-bold text-[#ff7555]">
                Learn more →
              </span>
            </div>
            <div className="glass-card rounded-[14px] p-6 shadow-sm border border-neutral-200/80 hover:shadow-md hover:border-[#ff7555]/50 transition-all flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-[8px] bg-lime-100 text-[#4d7c0f] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]" data-icon="smart_toy">
                    smart_toy
                  </span>
                </div>
                <h3 className="text-headline-sm font-headline-sm font-bold text-on-surface">
                  AI QC Agent
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                  Centralized installation knowledge, schematic verification, and defect auditing on your technician's phone.
                </p>
              </div>
              {' '}
              <span className="text-label-sm font-label-sm font-bold text-[#ff7555]">
                Learn more →
              </span>
            </div>
            <div className="glass-card rounded-[14px] p-6 shadow-sm border border-neutral-200/80 hover:shadow-md hover:border-[#ff7555]/50 transition-all flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-[8px] bg-orange-100 text-[#ff7555] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]" data-icon="account_tree">
                    account_tree
                  </span>
                </div>
                <h3 className="text-headline-sm font-headline-sm font-bold text-on-surface">
                  Integrated ERP Platform
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                  One connected operational core combining sales, inventory, finance, and human resources with instantaneous data sync.
                </p>
              </div>
              {' '}
              <span className="text-label-sm font-label-sm font-bold text-[#ff7555]">
                Learn more →
              </span>
            </div>
          </div>
        </section>
        <section>
          <div className="rounded-[20px] bg-gradient-to-r from-[#ff7555] via-[#ff6842] to-[#ff8c6b] text-white p-8 sm:p-12 shadow-lg relative overflow-hidden">
            <div className="max-w-3xl space-y-5 relative z-10">
              <div className="inline-block rounded-[6px] px-3 py-1 text-label-sm font-label-sm uppercase tracking-wider bg-white/20 backdrop-blur-md text-white font-semibold border border-white/30">
                FIXED-SCOPE INVENTORY DEPLOYMENT
              </div>
              <h2 className="text-headline-lg font-headline-lg lg:text-5xl font-bold tracking-tight text-white leading-tight">
                Ready to know your inventory with deterministic certainty?
              </h2>
              <p className="text-body-lg font-body-lg text-white/90 leading-relaxed">
                Schedule a fixed-scope technical consultation with our supply chain systems engineers within 48 hours.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link to="/contact" className="rounded-[10px] bg-white text-neutral-900 font-label-lg font-label-lg px-6 py-3.5 shadow-sm hover:bg-neutral-100 transition-all active:scale-[0.99]">
                  Book an Architectural Scoping Consultation
                </Link>
              </div>
              <p className="text-label-sm font-label-sm text-white/80 pt-2">
                Encrypted hosting, role-based access, and regular backups. Your data always remains fully yours and exportable.
              </p>
            </div>
            <div className="absolute -right-16 -bottom-16 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none" />
          </div>
        </section>
      </main>
      {' '}
    </div>
  )
}
