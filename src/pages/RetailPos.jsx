// Generated from stitch/pd_retail-pos.html by scripts/stitch-to-jsx.mjs (npm run convert).
import { Link } from 'react-router-dom'
import './RetailPos.css'

export default function RetailPos() {
  return (
    <div className="pg-retail-pos bg-background text-on-surface antialiased selection:bg-primary-container/20 selection:text-primary">
      <title>{"Retail Point of Sale — Horizon Enterprise Systems"}</title>
      {' '}
      {' '}
      <main className="max-w-[1440px] mx-auto px-4 md:px-6">
        <section className="pt-6 pb-16 lg:pb-24">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-stone-500 font-label-sm text-label-sm mb-6">
            <Link to="/products" className="hover:text-primary transition-colors">
              Products
            </Link>
            {' '}
            <span className="material-symbols-outlined text-[14px]" data-icon="chevron_right">
              chevron_right
            </span>
            {' '}
            <span className="text-stone-500">
              Industry Systems
            </span>
            {' '}
            <span className="material-symbols-outlined text-[14px]" data-icon="chevron_right">
              chevron_right
            </span>
            {' '}
            <span className="text-on-surface font-semibold">
              Retail Point of Sale
            </span>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="rounded-[6px] bg-orange-100/60 border border-orange-200/50 text-[#d9532f] px-2.5 py-1 text-xs font-semibold uppercase tracking-wider mb-5 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d9532f]" />
                {' '}
                <span>
                  {"RETAIL CHECKOUT & STOREFRONT OPERATIONS"}
                </span>
              </div>
              <h1 className="font-display-lg text-[36px] sm:text-[44px] lg:text-[54px] leading-[1.12] tracking-[-0.03em] font-bold text-on-surface mb-5">
                Retail Point of Sale —
                {' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a9371d] via-[#ff7555] to-[#ff8a65]">
                  High-velocity checkout
                </span>
                , unified multi-store stock, and real-time ledger synchronization.
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant/90 mb-8 max-w-2xl leading-relaxed">
                Ring up transactions with sub-second response, maintain continuous offline sales resilience, and synchronize omnichannel inventory from one terminal or fifty.
              </p>
              <div className="flex flex-wrap gap-2.5 mb-10">
                <span className="rounded-[6px] border border-stone-200/80 bg-white/70 backdrop-blur-sm text-xs font-medium text-stone-700 px-3 py-1.5 inline-flex items-center gap-1.5 shadow-2xs">
                  <span className="material-symbols-outlined text-[15px] text-[#ff7555]" data-icon="grid_view">
                    grid_view
                  </span>
                  {' '}
                  {"Matrix Inventory for Size & Color Variants"}
                </span>
                {' '}
                <span className="rounded-[6px] border border-stone-200/80 bg-white/70 backdrop-blur-sm text-xs font-medium text-stone-700 px-3 py-1.5 inline-flex items-center gap-1.5 shadow-2xs">
                  <span className="material-symbols-outlined text-[15px] text-[#ff7555]" data-icon="wifi_off">
                    wifi_off
                  </span>
                  {' '}
                  Offline Sale Continuity Engine
                </span>
                {' '}
                <span className="rounded-[6px] border border-stone-200/80 bg-white/70 backdrop-blur-sm text-xs font-medium text-stone-700 px-3 py-1.5 inline-flex items-center gap-1.5 shadow-2xs">
                  <span className="material-symbols-outlined text-[15px] text-[#ff7555]" data-icon="featured_seasonal_and_gifts">
                    featured_seasonal_and_gifts
                  </span>
                  {' '}
                  {"Gift Card Issuance & Partial Redemption"}
                </span>
                {' '}
                <span className="rounded-[6px] border border-stone-200/80 bg-white/70 backdrop-blur-sm text-xs font-medium text-stone-700 px-3 py-1.5 inline-flex items-center gap-1.5 shadow-2xs">
                  <span className="material-symbols-outlined text-[15px] text-[#ff7555]" data-icon="loyalty">
                    loyalty
                  </span>
                  {' '}
                  Tiered Loyalty with Behavior-Triggered Rewards
                </span>
                {' '}
                <span className="rounded-[6px] border border-stone-200/80 bg-white/70 backdrop-blur-sm text-xs font-medium text-stone-700 px-3 py-1.5 inline-flex items-center gap-1.5 shadow-2xs">
                  <span className="material-symbols-outlined text-[15px] text-[#ff7555]" data-icon="barcode_scanner">
                    barcode_scanner
                  </span>
                  {' '}
                  Barcode Generation at Receiving
                </span>
                {' '}
                <span className="rounded-[6px] border border-stone-200/80 bg-white/70 backdrop-blur-sm text-xs font-medium text-stone-700 px-3 py-1.5 inline-flex items-center gap-1.5 shadow-2xs">
                  <span className="material-symbols-outlined text-[15px] text-[#ff7555]" data-icon="sync_alt">
                    sync_alt
                  </span>
                  {' '}
                  {"Unified Inventory Across Storefront & Online Channels"}
                </span>
              </div>
            </div>
            <div className="lg:col-span-5" id="demo-form">
              <div className="rounded-[18px] bg-white/95 border border-stone-200/80 p-7 shadow-xl shadow-stone-200/50 backdrop-blur-sm relative">
                <div className="mb-6">
                  <h2 className="font-headline-md text-headline-md font-bold text-on-surface mb-2">
                    Book a live product demo
                  </h2>
                  <p className="font-body-sm text-body-sm text-stone-600 leading-normal">
                    See how Horizon POS unifies barcode scanning, hardware peripherals, and multi-location ledgers.
                  </p>
                </div>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block font-label-md text-label-md text-stone-700 mb-1.5">
                      Full Name
                    </label>
                    {' '}
                    <input className="w-full rounded-[10px] border border-stone-300 bg-white/80 px-3.5 py-2.5 text-sm text-on-surface placeholder:text-stone-400 focus:border-[#ff7555] focus:ring-2 focus:ring-[#ff7555]/20 outline-none transition-all" placeholder="e.g. Jordan Vance" type="text" />
                  </div>
                  <div>
                    <label className="block font-label-md text-label-md text-stone-700 mb-1.5">
                      Work Email
                    </label>
                    {' '}
                    <input className="w-full rounded-[10px] border border-stone-300 bg-white/80 px-3.5 py-2.5 text-sm text-on-surface placeholder:text-stone-400 focus:border-[#ff7555] focus:ring-2 focus:ring-[#ff7555]/20 outline-none transition-all" placeholder="jordan@retailgroup.com" type="email" />
                  </div>
                  <div>
                    <label className="block font-label-md text-label-md text-stone-700 mb-1.5">
                      Phone Number
                    </label>
                    {' '}
                    <input className="w-full rounded-[10px] border border-stone-300 bg-white/80 px-3.5 py-2.5 text-sm text-on-surface placeholder:text-stone-400 focus:border-[#ff7555] focus:ring-2 focus:ring-[#ff7555]/20 outline-none transition-all" placeholder="Phone number" type="tel" />
                  </div>
                  <div>
                    <label className="block font-label-md text-label-md text-stone-700 mb-1.5">
                      Store / Till Count
                    </label>
                    {' '}
                    <select className="w-full rounded-[10px] border border-stone-300 bg-white/80 px-3.5 py-2.5 text-sm text-on-surface focus:border-[#ff7555] focus:ring-2 focus:ring-[#ff7555]/20 outline-none transition-all">
                      <option>
                        1 - 5 Tills (Boutique / Single Location)
                      </option>
                      <option>
                        5 - 20 Tills (Multi-Store Chain)
                      </option>
                      <option>
                        20+ Tills (Enterprise Retail Network)
                      </option>
                    </select>
                  </div>
                  {' '}
                  <button className="w-full rounded-[10px] bg-[#ff7555] hover:bg-[#ff623d] active:scale-[0.99] text-white font-label-lg text-label-lg font-medium py-3 shadow-md shadow-[#ff7555]/25 transition-all flex items-center justify-center gap-2" type="submit">
                    <span>
                      Request Tailored Walk-Through
                    </span>
                    {' '}
                    <span className="material-symbols-outlined text-[18px]" data-icon="calendar_month">
                      calendar_month
                    </span>
                  </button>
                  {' '}
                  <div className="pt-2 text-center">
                    <p className="font-body-sm text-[12px] text-stone-500 flex items-center justify-center gap-1.5">
                      <span className="material-symbols-outlined text-[14px] text-emerald-600" data-icon="lock">
                        lock
                      </span>
                      {' '}
                      <span>
                        Encrypted hosting, role-based access and regular backups.
                      </span>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 border-t border-stone-200/80">
          <div className="mb-10 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-1.5 rounded-[6px] bg-emerald-50 border border-emerald-200/60 text-emerald-700 px-2.5 py-1 text-xs font-semibold mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              {' '}
              <span>
                LIVE STOREFRONT TELEMETRY
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface mb-3">
              Operational Control in Real Time — See the Till in Action
            </h2>
            <p className="font-body-md text-body-md text-stone-600">
              Simulated multi-outlet cashier workflow with instant barcode lookup, split tenders, and zero-latency inventory depletion.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-6 rounded-[16px] bg-stone-900 border border-stone-800 relative flex flex-col justify-between p-6 text-white min-h-[460px] shadow-xl overflow-hidden group">
              <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#ff7555]/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="rounded-[6px] bg-red-600/90 text-white font-mono text-[11px] font-semibold px-2 py-0.5 tracking-wider flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                    {' '}
                    LIVE
                  </span>
                  {' '}
                  <span className="rounded-[6px] bg-stone-800/80 border border-stone-700 text-stone-300 font-mono text-[11px] px-2 py-0.5">
                    1080p 60FPS
                  </span>
                  {' '}
                  <span className="rounded-[6px] bg-stone-800/80 border border-stone-700 text-stone-300 font-mono text-[11px] px-2 py-0.5">
                    SESSION: HZ-9941
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-400 font-mono text-xs">
                  <span className="material-symbols-outlined text-[15px]" data-icon="speed">
                    speed
                  </span>
                  {' '}
                  <span>
                    42 ms
                  </span>
                </div>
              </div>
              <div className="relative z-10 my-auto text-center py-12 flex flex-col items-center">
                <button className="w-16 h-16 rounded-[14px] bg-white/10 hover:bg-white/20 border-2 border-[#ff7555] flex items-center justify-center transition-all group-hover:scale-110 shadow-lg shadow-[#ff7555]/30">
                  <span className="material-symbols-outlined text-[32px] text-[#ff7555]" data-icon="play_arrow" data-weight="fill" style={{"fontVariationSettings":"'FILL' 1"}}>
                    play_arrow
                  </span>
                </button>
                {' '}
                <div className="mt-4 font-headline-sm text-headline-sm font-semibold tracking-tight">
                  Interactive Terminal Walkthrough
                </div>
                <p className="font-body-sm text-body-sm text-stone-400 mt-1 max-w-sm">
                  Press to launch an emulated scanner transaction stream or inspect POS ledger dispatch.
                </p>
              </div>
              <div className="relative z-10 pt-4 border-t border-stone-800/80 flex items-center justify-between text-xs text-stone-400 font-mono">
                <div className="flex items-center gap-3">
                  <span className="text-stone-300">
                    HW Bus: USB-C / BLE
                  </span>
                  {' '}
                  <span>
                    •
                  </span>
                  {' '}
                  <span className="text-stone-300">
                    Scanner: 2D Imager Code-128
                  </span>
                </div>
                <div className="text-[#ff7555]">
                  Ledger: Synced
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 rounded-[16px] bg-white border border-stone-200/90 p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center justify-between pb-4 border-b border-stone-200/70 gap-3">
                  <div>
                    <div className="font-headline-sm text-[18px] font-bold text-on-surface">
                      Till 03 — Flagship Store (Downtown)
                    </div>
                    <div className="font-body-sm text-xs text-stone-500">
                      Cashier: S. Martinez (ID: #8841) | Register Session #109
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="rounded-[6px] bg-emerald-100 border border-emerald-200 text-emerald-800 px-2 py-0.5 text-xs font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                      {' '}
                      {"Online & Synced"}
                    </span>
                  </div>
                </div>
                <div className="py-4 space-y-3 font-body-sm text-sm">
                  <div className="p-3 rounded-[10px] bg-stone-50/70 border border-stone-200/60 flex items-center justify-between">
                    <div className="flex-1 pr-3">
                      <div className="font-semibold text-on-surface">
                        Merino Wool Knit Overshirt (Charcoal, Size L)
                      </div>
                      <div className="text-xs text-stone-500 font-mono">
                        SKU: MWK-8820-CH-L • Qty: 1
                      </div>
                    </div>
                    <div className="font-semibold text-on-surface">
                      $148.00
                    </div>
                  </div>
                  <div className="p-3 rounded-[10px] bg-stone-50/70 border border-stone-200/60 flex items-center justify-between">
                    <div className="flex-1 pr-3">
                      <div className="font-semibold text-on-surface">
                        Selvedge Denim Trouser (Indigo, 32x32)
                      </div>
                      <div className="text-xs text-stone-500 font-mono">
                        SKU: SDT-4019-IN-32 • Qty: 1
                      </div>
                    </div>
                    <div className="font-semibold text-on-surface">
                      $185.00
                    </div>
                  </div>
                  <div className="p-3 rounded-[10px] bg-stone-50/70 border border-stone-200/60 flex items-center justify-between">
                    <div className="flex-1 pr-3">
                      <div className="font-semibold text-on-surface">
                        Italian Vachetta Leather Belt (Saddle Tan)
                      </div>
                      <div className="text-xs text-stone-500 font-mono">
                        SKU: VLB-1102-TN • Qty: 1
                      </div>
                    </div>
                    <div className="font-semibold text-on-surface">
                      $75.00
                    </div>
                  </div>
                </div>
                <div className="pt-3 border-t border-stone-200/70 space-y-1.5 text-sm">
                  <div className="flex justify-between text-stone-600">
                    <span>
                      Subtotal (3 items)
                    </span>
                    {' '}
                    <span>
                      $408.00
                    </span>
                  </div>
                  <div className="flex justify-between text-emerald-700 font-medium">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]" data-icon="stars">
                        stars
                      </span>
                      {' '}
                      Loyalty Tier Discount (VIP Gold -10%)
                    </span>
                    {' '}
                    <span>
                      -$40.80
                    </span>
                  </div>
                  <div className="flex justify-between text-stone-600">
                    <span>
                      Estimated Sales Tax (8.25%)
                    </span>
                    {' '}
                    <span>
                      $30.29
                    </span>
                  </div>
                  <div className="flex justify-between text-base font-bold text-on-surface pt-2 border-t border-stone-200/70">
                    <span>
                      Total Due
                    </span>
                    {' '}
                    <span className="text-primary text-[20px] font-bold">
                      $397.49
                    </span>
                  </div>
                </div>
              </div>
              <div className="pt-5 mt-4 border-t border-stone-200/80">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
                  <button className="rounded-[10px] border border-stone-300 hover:border-stone-400 bg-stone-50/70 py-2.5 text-xs font-semibold text-stone-800 text-center transition-all">
                    Cash
                  </button>
                  {' '}
                  <Link to="/contact" className="rounded-[10px] bg-[#ff7555] hover:bg-[#ff623d] text-white py-2.5 text-xs font-semibold text-center shadow-sm transition-all flex items-center justify-center gap-1">
                    <span className="material-symbols-outlined text-[15px]" data-icon="contactless">
                      contactless
                    </span>
                    {' '}
                    Card / NFC
                  </Link>
                  {' '}
                  <button className="rounded-[10px] border border-stone-300 hover:border-stone-400 bg-stone-50/70 py-2.5 text-xs font-semibold text-stone-800 text-center transition-all">
                    Gift Card Split
                  </button>
                  {' '}
                  <button className="rounded-[10px] border border-stone-300 hover:border-stone-400 bg-stone-50/70 py-2.5 text-xs font-semibold text-stone-800 text-center transition-all">
                    Store Credit
                  </button>
                </div>
                <div className="flex items-center justify-between text-xs text-stone-500 pt-1">
                  <span className="flex items-center gap-1 text-emerald-700 font-medium">
                    <span className="material-symbols-outlined text-[15px]" data-icon="check_circle">
                      check_circle
                    </span>
                    {' '}
                    {"Warehouse & E-Commerce stock locked instantaneously"}
                  </span>
                  {' '}
                  <span className="font-mono text-stone-400">
                    Ledger ACK: #48102
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 border-t border-stone-200/80">
          <div className="max-w-3xl mb-12">
            <div className="rounded-[6px] bg-stone-200/70 text-stone-800 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider inline-block mb-3">
              THE STOREFRONT BOTTLENECK
            </div>
            <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface mb-4">
              The Checkout Counter Is Where Retail Experience Gets Decided
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              A transaction line should never stall customer momentum or obscure real inventory balances. Horizon Point of Sale eliminates checkout bottlenecks with lightning-fast barcode ingestion, seamless legacy hardware compatibility, and automatic ledger posting so evening reconciliation is finished in minutes, not hours.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-[14px] bg-white border border-stone-200/80 p-6 shadow-sm hover:border-[#ff7555]/40 transition-all">
              <div className="w-10 h-10 rounded-[10px] bg-orange-100/70 text-[#d9532f] flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[22px]" data-icon="check">
                  check
                </span>
              </div>
              <h3 className="font-headline-sm text-[18px] font-bold text-on-surface mb-2">
                Fast checkout with barcode scanner and card reader support
              </h3>
              <p className="font-body-md text-stone-600 text-sm leading-relaxed">
                Frictionless compatibility with standard ESC/POS thermal printers, Bluetooth and USB scale peripherals, and verified EMV payment terminals out of the box.
              </p>
            </div>
            <div className="rounded-[14px] bg-white border border-stone-200/80 p-6 shadow-sm hover:border-[#ff7555]/40 transition-all">
              <div className="w-10 h-10 rounded-[10px] bg-orange-100/70 text-[#d9532f] flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[22px]" data-icon="inventory_2">
                  inventory_2
                </span>
              </div>
              <h3 className="font-headline-sm text-[18px] font-bold text-on-surface mb-2">
                Inventory updates the instant a sale is rung up
              </h3>
              <p className="font-body-md text-stone-600 text-sm leading-relaxed">
                Immediate distributed stock subtraction that eliminates overselling across ecommerce digital baskets, warehouse pick-lists, and sister retail outlets.
              </p>
            </div>
            <div className="rounded-[14px] bg-white border border-stone-200/80 p-6 shadow-sm hover:border-[#ff7555]/40 transition-all">
              <div className="w-10 h-10 rounded-[10px] bg-orange-100/70 text-[#d9532f] flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[22px]" data-icon="storefront">
                  storefront
                </span>
              </div>
              <h3 className="font-headline-sm text-[18px] font-bold text-on-surface mb-2">
                Multi-outlet visibility from one dashboard
              </h3>
              <p className="font-body-md text-stone-600 text-sm leading-relaxed">
                Centralized operational telemetry spanning high-street flagships, seasonal pop-ups, regional distribution centers, and mobile event registers.
              </p>
            </div>
          </div>
        </section>
        <section className="py-16 border-t border-stone-200/80">
          <div className="max-w-3xl mb-12">
            <div className="rounded-[6px] bg-stone-200/70 text-stone-800 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider inline-block mb-3">
              ENGINEERED CAPABILITIES
            </div>
            <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface mb-3">
              What Happens at the Till Matters Everywhere Else
            </h2>
            <p className="font-body-md text-body-md text-stone-600">
              Six purpose-built primitives connecting frontline registers directly to inventory control, CRM loyalty, and general ledgers.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <div className="rounded-[14px] bg-white border-2 border-[#ff7555]/60 p-5 shadow-sm transition-all">
                <div className="flex items-start gap-4">
                  <span className="rounded-[6px] bg-[#ff7555] text-white font-mono font-bold text-xs px-2.5 py-1">
                    01
                  </span>
                  {' '}
                  <div>
                    <h3 className="font-headline-sm text-[17px] font-bold text-on-surface mb-1">
                      Matrix Inventory for Size and Color Variants
                    </h3>
                    <p className="font-body-sm text-stone-600 leading-relaxed text-sm">
                      Multi-dimensional SKU hierarchies that manage size, fit, and color variations under a single parent record, streamlining bulk replenishment and seasonal inventory balancing.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-[14px] bg-white border border-stone-200/80 p-5 shadow-sm hover:border-stone-300 transition-all">
                <div className="flex items-start gap-4">
                  <span className="rounded-[6px] bg-stone-100 text-stone-700 font-mono font-bold text-xs px-2.5 py-1">
                    02
                  </span>
                  {' '}
                  <div>
                    <h3 className="font-headline-sm text-[17px] font-bold text-on-surface mb-1">
                      Offline Sale Continuity Engine
                    </h3>
                    <p className="font-body-sm text-stone-600 leading-relaxed text-sm">
                      Robust local edge caching guaranteeing transactions, receipt printing, and barcode scanning persist uninterrupted if network links drop.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-[14px] bg-white border border-stone-200/80 p-5 shadow-sm hover:border-stone-300 transition-all">
                <div className="flex items-start gap-4">
                  <span className="rounded-[6px] bg-stone-100 text-stone-700 font-mono font-bold text-xs px-2.5 py-1">
                    03
                  </span>
                  {' '}
                  <div>
                    <h3 className="font-headline-sm text-[17px] font-bold text-on-surface mb-1">
                      Gift Card Issuance and Partial Redemption
                    </h3>
                    <p className="font-body-sm text-stone-600 leading-relaxed text-sm">
                      Omnichannel digital and physical gift card validation with cryptographically verified balances redeemable across both in-store registers and web stores.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-[14px] bg-white border border-stone-200/80 p-5 shadow-sm hover:border-stone-300 transition-all">
                <div className="flex items-start gap-4">
                  <span className="rounded-[6px] bg-stone-100 text-stone-700 font-mono font-bold text-xs px-2.5 py-1">
                    04
                  </span>
                  {' '}
                  <div>
                    <h3 className="font-headline-sm text-[17px] font-bold text-on-surface mb-1">
                      Tiered Loyalty with Behavior-Triggered Rewards
                    </h3>
                    <p className="font-body-sm text-stone-600 leading-relaxed text-sm">
                      Automatic customer profile matching at checkout applying earned points, exclusive member pricing, and personalized promotions without manual code entry.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-[14px] bg-white border border-stone-200/80 p-5 shadow-sm hover:border-stone-300 transition-all">
                <div className="flex items-start gap-4">
                  <span className="rounded-[6px] bg-stone-100 text-stone-700 font-mono font-bold text-xs px-2.5 py-1">
                    05
                  </span>
                  {' '}
                  <div>
                    <h3 className="font-headline-sm text-[17px] font-bold text-on-surface mb-1">
                      Barcode Generation at Receiving
                    </h3>
                    <p className="font-body-sm text-stone-600 leading-relaxed text-sm">
                      Rapid in-aisle and stockroom label printing generating Code-128 and QR labels directly from supplier PO check-in documents.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-[14px] bg-white border border-stone-200/80 p-5 shadow-sm hover:border-stone-300 transition-all">
                <div className="flex items-start gap-4">
                  <span className="rounded-[6px] bg-stone-100 text-stone-700 font-mono font-bold text-xs px-2.5 py-1">
                    06
                  </span>
                  {' '}
                  <div>
                    <h3 className="font-headline-sm text-[17px] font-bold text-on-surface mb-1">
                      Unified Inventory Across Storefront and Online Channels
                    </h3>
                    <p className="font-body-sm text-stone-600 leading-relaxed text-sm">
                      Continuous bi-directional stock reservation ensuring a unit sold at the counter is instantaneously removed from online shopping carts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 rounded-[18px] bg-white border border-stone-200/90 p-6 shadow-sm sticky top-24">
              <div className="flex items-center justify-between pb-4 border-b border-stone-200/70 mb-5">
                <div>
                  <span className="rounded-[6px] bg-orange-100 text-[#d9532f] text-xs font-semibold px-2 py-0.5 uppercase tracking-wide">
                    Architecture View
                  </span>
                  {' '}
                  <h3 className="font-headline-sm text-[18px] font-bold text-on-surface mt-1">
                    Feature 01 Deep-Dive: Matrix Inventory
                  </h3>
                </div>
                {' '}
                <span className="rounded-[6px] bg-stone-100 text-stone-700 font-mono text-xs px-2 py-1">
                  AP-7741
                </span>
              </div>
              <div className="rounded-[12px] bg-stone-50 border border-stone-200/80 p-4 mb-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-sm text-on-surface">
                    Parent: Classic Oxford Button-Down
                  </span>
                  {' '}
                  <span className="font-mono text-xs text-stone-500">
                    Master SKU: AP-7741
                  </span>
                </div>
                <div className="flex items-center gap-4 text-xs text-stone-600">
                  <span>
                    9 Active Child SKUs
                  </span>
                  {' '}
                  <span>
                    •
                  </span>
                  {' '}
                  <span className="text-emerald-700 font-medium">
                    Total On-Hand: 248 units
                  </span>
                </div>
              </div>
              <div className="space-y-2 mb-5">
                <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">
                  Variant Distribution Grid
                </div>
                <div className="grid grid-cols-4 gap-2 text-center text-xs font-mono">
                  <div className="p-2 font-bold text-stone-400 bg-transparent">
                    Color \ Size
                  </div>
                  <div className="p-2 font-semibold bg-stone-100 rounded-[6px]">
                    Small
                  </div>
                  <div className="p-2 font-semibold bg-stone-100 rounded-[6px]">
                    Medium
                  </div>
                  <div className="p-2 font-semibold bg-stone-100 rounded-[6px]">
                    Large
                  </div>
                  <div className="p-2 font-semibold bg-stone-100 rounded-[6px] text-left text-stone-700">
                    Navy
                  </div>
                  <div className="p-2 bg-emerald-50 text-emerald-800 rounded-[6px] border border-emerald-200/50">
                    34 pcs
                  </div>
                  <div className="p-2 bg-emerald-50 text-emerald-800 rounded-[6px] border border-emerald-200/50">
                    48 pcs
                  </div>
                  <div className="p-2 bg-orange-50 text-orange-800 rounded-[6px] border border-orange-200/50">
                    4 pcs (Low)
                  </div>
                  <div className="p-2 font-semibold bg-stone-100 rounded-[6px] text-left text-stone-700">
                    Olive
                  </div>
                  <div className="p-2 bg-emerald-50 text-emerald-800 rounded-[6px] border border-emerald-200/50">
                    22 pcs
                  </div>
                  <div className="p-2 bg-emerald-50 text-emerald-800 rounded-[6px] border border-emerald-200/50">
                    38 pcs
                  </div>
                  <div className="p-2 bg-emerald-50 text-emerald-800 rounded-[6px] border border-emerald-200/50">
                    19 pcs
                  </div>
                  <div className="p-2 font-semibold bg-stone-100 rounded-[6px] text-left text-stone-700">
                    Black
                  </div>
                  <div className="p-2 bg-emerald-50 text-emerald-800 rounded-[6px] border border-emerald-200/50">
                    28 pcs
                  </div>
                  <div className="p-2 bg-emerald-50 text-emerald-800 rounded-[6px] border border-emerald-200/50">
                    41 pcs
                  </div>
                  <div className="p-2 bg-emerald-50 text-emerald-800 rounded-[6px] border border-emerald-200/50">
                    14 pcs
                  </div>
                </div>
              </div>
              <div className="p-3.5 rounded-[10px] bg-stone-50 border border-stone-200/80 flex items-center justify-between text-xs">
                <div>
                  <div className="font-semibold text-on-surface">
                    Store Replenishment Dispatch
                  </div>
                  <div className="text-stone-500">
                    Auto-triggers PO when variant falls below 6 units
                  </div>
                </div>
                {' '}
                <button className="rounded-[6px] bg-white border border-stone-300 px-2.5 py-1 font-medium text-stone-800 hover:bg-stone-50 transition-colors">
                  Transfer Units
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 border-t border-stone-200/80">
          <div className="max-w-3xl mb-12">
            <div className="rounded-[6px] bg-stone-200/70 text-stone-800 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider inline-block mb-3">
              EXECUTION WORKFLOW
            </div>
            <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface mb-3">
              From Barcode Scan to Reconciled General Ledger
            </h2>
            <p className="font-body-md text-body-md text-stone-600">
              Four deterministic stages connecting frontline counter staff directly to back-office accounting.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-[16px] bg-white border border-stone-200/80 p-6 shadow-sm flex flex-col justify-between relative group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="rounded-[6px] bg-[#ff7555]/15 text-[#d9532f] font-mono font-bold text-xs px-2.5 py-1">
                    Stage 01
                  </span>
                  {' '}
                  <span className="material-symbols-outlined text-[20px] text-stone-400" data-icon="barcode_scanner">
                    barcode_scanner
                  </span>
                </div>
                <h3 className="font-headline-sm text-[18px] font-bold text-on-surface mb-2">
                  Scan or Select Items
                </h3>
                <p className="font-body-sm text-stone-600 text-sm leading-relaxed">
                  Fast laser barcode detection or touch matrix selection with immediate modifier and variant verification.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center text-xs text-stone-400 font-mono">
                <span>
                  {"Latency: < 0.2s"}
                </span>
              </div>
            </div>
            <div className="rounded-[16px] bg-white border border-stone-200/80 p-6 shadow-sm flex flex-col justify-between relative group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="rounded-[6px] bg-emerald-100 text-emerald-800 font-mono font-bold text-xs px-2.5 py-1">
                    Stage 02
                  </span>
                  {' '}
                  <span className="material-symbols-outlined text-[20px] text-stone-400" data-icon="credit_card">
                    credit_card
                  </span>
                </div>
                <h3 className="font-headline-sm text-[18px] font-bold text-on-surface mb-2">
                  Process Payment
                </h3>
                <p className="font-body-sm text-stone-600 text-sm leading-relaxed">
                  Frictionless split-tenders via connected EMV chip, contactless NFC, gift cards, or cash drawers.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center text-xs text-stone-400 font-mono">
                <span>
                  Gateway: Multi-Rail
                </span>
              </div>
            </div>
            <div className="rounded-[16px] bg-white border border-stone-200/80 p-6 shadow-sm flex flex-col justify-between relative group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="rounded-[6px] bg-sky-100 text-sky-800 font-mono font-bold text-xs px-2.5 py-1">
                    Stage 03
                  </span>
                  {' '}
                  <span className="material-symbols-outlined text-[20px] text-stone-400" data-icon="sync_alt">
                    sync_alt
                  </span>
                </div>
                <h3 className="font-headline-sm text-[18px] font-bold text-on-surface mb-2">
                  Deplete Stock Instantly
                </h3>
                <p className="font-body-sm text-stone-600 text-sm leading-relaxed">
                  Event-driven sync writes instantaneous stock deductions across physical outlets and digital webstores.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center text-xs text-stone-400 font-mono">
                <span>
                  Sync: Zero-Lag
                </span>
              </div>
            </div>
            <div className="rounded-[16px] bg-white border border-stone-200/80 p-6 shadow-sm flex flex-col justify-between relative group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="rounded-[6px] bg-purple-100 text-purple-800 font-mono font-bold text-xs px-2.5 py-1">
                    Stage 04
                  </span>
                  {' '}
                  <span className="material-symbols-outlined text-[20px] text-stone-400" data-icon="account_balance">
                    account_balance
                  </span>
                </div>
                <h3 className="font-headline-sm text-[18px] font-bold text-on-surface mb-2">
                  Reconcile at Close
                </h3>
                <p className="font-body-sm text-stone-600 text-sm leading-relaxed">
                  Automated end-of-day register balancing matching cash counts, card gateway totals, and sales tax filings with zero manual spreadsheet exports.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center text-xs text-stone-400 font-mono">
                <span>
                  Ledger: Automated
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 border-t border-stone-200/80">
          <div className="max-w-3xl mb-12">
            <div className="rounded-[6px] bg-stone-200/70 text-stone-800 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider inline-block mb-3">
              BUSINESS RETURNS
            </div>
            <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface mb-3">
              Why Growing Retailers Retire Fragmented Cash Registers
            </h2>
            <p className="font-body-md text-body-md text-stone-600">
              Engineered to give store operators total confidence at peak hours, preventing lost sales and ledger discrepancies.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="rounded-[16px] bg-white border border-stone-200/80 p-6 shadow-sm hover:border-[#ff7555]/30 transition-all">
              <div className="w-10 h-10 rounded-[10px] bg-orange-50 text-[#ff7555] flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[22px]" data-icon="timer">
                  timer
                </span>
              </div>
              <h3 className="font-headline-sm text-[18px] font-bold text-on-surface mb-2">
                Shorter Lines
              </h3>
              <p className="font-body-sm text-stone-600 text-sm leading-relaxed">
                Accelerated scan-to-tender velocity that keeps checkout queues moving smoothly during peak shopping rushes.
              </p>
            </div>
            <div className="rounded-[16px] bg-white border border-stone-200/80 p-6 shadow-sm hover:border-[#ff7555]/30 transition-all">
              <div className="w-10 h-10 rounded-[10px] bg-orange-50 text-[#ff7555] flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[22px]" data-icon="inventory">
                  inventory
                </span>
              </div>
              <h3 className="font-headline-sm text-[18px] font-bold text-on-surface mb-2">
                Accurate Stock
              </h3>
              <p className="font-body-sm text-stone-600 text-sm leading-relaxed">
                Real-time stock counts that mirror physical reality on the shelf without labor-intensive manual recounts.
              </p>
            </div>
            <div className="rounded-[16px] bg-white border border-stone-200/80 p-6 shadow-sm hover:border-[#ff7555]/30 transition-all">
              <div className="w-10 h-10 rounded-[10px] bg-orange-50 text-[#ff7555] flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[22px]" data-icon="visibility">
                  visibility
                </span>
              </div>
              <h3 className="font-headline-sm text-[18px] font-bold text-on-surface mb-2">
                One View, Every Outlet
              </h3>
              <p className="font-body-sm text-stone-600 text-sm leading-relaxed">
                Consolidated oversight across all retail locations, pop-up kiosks, and central distribution hubs.
              </p>
            </div>
            <div className="rounded-[16px] bg-white border border-stone-200/80 p-6 shadow-sm hover:border-[#ff7555]/30 transition-all">
              <div className="w-10 h-10 rounded-[10px] bg-orange-50 text-[#ff7555] flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[22px]" data-icon="schedule">
                  schedule
                </span>
              </div>
              <h3 className="font-headline-sm text-[18px] font-bold text-on-surface mb-2">
                Faster Close
              </h3>
              <p className="font-body-sm text-stone-600 text-sm leading-relaxed">
                Automated register reconciliation cutting end-of-day administrative closing times from hours to minutes.
              </p>
            </div>
          </div>
          <div className="rounded-[14px] bg-stone-50/80 border border-stone-200/70 p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2 font-headline-sm text-[16px] font-bold text-on-surface">
                <span className="material-symbols-outlined text-[18px] text-emerald-700" data-icon="security">
                  security
                </span>
                {' '}
                <span>
                  Enterprise-Grade Security
                </span>
              </div>
              <p className="font-body-sm text-stone-600 text-xs leading-relaxed">
                Encrypted hosting, role-based access control, and regular backups. Your data always remains fully yours and exportable, with no lock-in.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2 font-headline-sm text-[16px] font-bold text-on-surface">
                <span className="material-symbols-outlined text-[18px] text-[#ff7555]" data-icon="payments">
                  payments
                </span>
                {' '}
                <span>
                  Transparent, Scoped Pricing
                </span>
              </div>
              <p className="font-body-sm text-stone-600 text-xs leading-relaxed">
                Every engagement is scoped individually with a fixed price and timeline agreed upfront — book a free consultation for a tailored quote.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2 font-headline-sm text-[16px] font-bold text-on-surface">
                <span className="material-symbols-outlined text-[18px] text-sky-700" data-icon="groups">
                  groups
                </span>
                {' '}
                <span>
                  Built for Your Whole Team
                </span>
              </div>
              <p className="font-body-sm text-stone-600 text-xs leading-relaxed">
                Role-based views mean owners, store managers, and counter staff each see exactly what they need, nothing more, nothing missing.
              </p>
            </div>
          </div>
        </section>
        <section className="py-16 border-t border-stone-200/80">
          <div className="max-w-3xl mb-12">
            <div className="rounded-[6px] bg-stone-200/70 text-stone-800 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider inline-block mb-3">
              OPERATIONAL TRANSFORMATION
            </div>
            <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface mb-3">
              What Changes on Day One
            </h2>
            <p className="font-body-md text-body-md text-stone-600">
              Comparing disconnected legacy cash drawers against the Horizon synchronized storefront.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-[18px] bg-red-50/20 border-2 border-red-200/60 p-7 relative">
              <div className="flex items-center justify-between pb-4 border-b border-red-200/40 mb-6">
                <div className="font-headline-sm text-[19px] font-bold text-stone-800">
                  The Fragile Legacy Till
                </div>
                {' '}
                <span className="rounded-[6px] bg-red-100 text-red-800 px-2.5 py-1 text-xs font-bold uppercase tracking-wide">
                  Legacy State
                </span>
              </div>
              <ul className="space-y-4 font-body-sm text-stone-700 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold text-base mt-[-2px]">
                    ✗
                  </span>
                  {' '}
                  <span>
                    Long checkout queues and frustrated shoppers during peak shopping rushes.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold text-base mt-[-2px]">
                    ✗
                  </span>
                  {' '}
                  <span>
                    Stockroom inventory tallies frequently contradict actual shelf counts.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold text-base mt-[-2px]">
                    ✗
                  </span>
                  {' '}
                  <span>
                    Each store operated as an isolated island on disjointed point-of-sale software.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold text-base mt-[-2px]">
                    ✗
                  </span>
                  {' '}
                  <span>
                    Painstaking manual end-of-day reconciliation across paper register receipts and card slips.
                  </span>
                </li>
              </ul>
            </div>
            <div className="rounded-[18px] bg-emerald-50/30 border-2 border-emerald-300/80 p-7 relative shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-emerald-200/60 mb-6">
                <div className="font-headline-sm text-[19px] font-bold text-stone-900">
                  The Horizon Synchronized POS
                </div>
                {' '}
                <span className="rounded-[6px] bg-emerald-200 text-emerald-900 px-2.5 py-1 text-xs font-bold uppercase tracking-wide">
                  Horizon Architecture
                </span>
              </div>
              <ul className="space-y-4 font-body-sm text-stone-800 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-700 font-bold text-base mt-[-2px]">
                    ✓
                  </span>
                  {' '}
                  <span>
                    Sub-second barcode scanning and rapid multi-tender options at every active till.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-700 font-bold text-base mt-[-2px]">
                    ✓
                  </span>
                  {' '}
                  <span>
                    Continuous real-time stock deduplication synchronizing in-store and online channels.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-700 font-bold text-base mt-[-2px]">
                    ✓
                  </span>
                  {' '}
                  <span>
                    Unified multi-location command center tracking revenues and margins across every outlet.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-700 font-bold text-base mt-[-2px]">
                    ✓
                  </span>
                  {' '}
                  <span>
                    Automated end-of-day drawer close matching cash, merchant gateway fees, and ledger accounts.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="py-16 border-t border-stone-200/80">
          <div className="max-w-3xl mb-12">
            <div className="rounded-[6px] bg-stone-200/70 text-stone-800 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider inline-block mb-3">
              ENTERPRISE INQUIRIES
            </div>
            <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface mb-3">
              Frequently Asked Questions
            </h2>
            <p className="font-body-md text-body-md text-stone-600">
              Everything your store managers and IT teams need to understand regarding hardware compatibility, network edge resilience, and data residency.
            </p>
          </div>
          <div className="max-w-4xl space-y-3">
            <div className="rounded-[14px] bg-white border-2 border-[#ff7555]/40 p-6 shadow-sm">
              <div className="flex items-center justify-between cursor-pointer">
                <h3 className="font-headline-sm text-[17px] font-bold text-on-surface flex items-center gap-3">
                  <span className="rounded-[6px] bg-[#ff7555] text-white text-xs px-2 py-0.5 font-mono">
                    Q1
                  </span>
                  {' '}
                  <span>
                    Does it work offline if the internet drops mid-sale?
                  </span>
                </h3>
                {' '}
                <span className="material-symbols-outlined text-[20px] text-[#ff7555]" data-icon="expand_less">
                  expand_less
                </span>
              </div>
              <div className="mt-4 pt-4 border-t border-stone-100 font-body-md text-stone-600 leading-relaxed text-sm">
                Yes. Horizon Point of Sale features an embedded local SQLite edge engine on each terminal. If your broadband connection drops, cashiers can continue scanning items, applying promotions, printing paper receipts, and queuing encrypted card authorizations locally. The moment connectivity is restored, all batched transactions automatically synchronize back to your central inventory and accounting ledger with deterministic conflict resolution.
              </div>
            </div>
            <div className="rounded-[14px] bg-white border border-stone-200/80 p-5 shadow-2xs">
              <div className="flex items-center justify-between cursor-pointer">
                <h3 className="font-headline-sm text-[16px] font-bold text-stone-800 flex items-center gap-3">
                  <span className="rounded-[6px] bg-stone-100 text-stone-600 text-xs px-2 py-0.5 font-mono">
                    Q2
                  </span>
                  {' '}
                  <span>
                    Can we run promotions or discounts at the till?
                  </span>
                </h3>
                {' '}
                <span className="material-symbols-outlined text-[20px] text-stone-400" data-icon="expand_more">
                  expand_more
                </span>
              </div>
            </div>
            <div className="rounded-[14px] bg-white border border-stone-200/80 p-5 shadow-2xs">
              <div className="flex items-center justify-between cursor-pointer">
                <h3 className="font-headline-sm text-[16px] font-bold text-stone-800 flex items-center gap-3">
                  <span className="rounded-[6px] bg-stone-100 text-stone-600 text-xs px-2 py-0.5 font-mono">
                    Q3
                  </span>
                  {' '}
                  <span>
                    Will it work with the receipt printer and scanner we already own?
                  </span>
                </h3>
                {' '}
                <span className="material-symbols-outlined text-[20px] text-stone-400" data-icon="expand_more">
                  expand_more
                </span>
              </div>
            </div>
            <div className="rounded-[14px] bg-white border border-stone-200/80 p-5 shadow-2xs">
              <div className="flex items-center justify-between cursor-pointer">
                <h3 className="font-headline-sm text-[16px] font-bold text-stone-800 flex items-center gap-3">
                  <span className="rounded-[6px] bg-stone-100 text-stone-600 text-xs px-2 py-0.5 font-mono">
                    Q4
                  </span>
                  {' '}
                  <span>
                    Can we run it on the hardware we already have?
                  </span>
                </h3>
                {' '}
                <span className="material-symbols-outlined text-[20px] text-stone-400" data-icon="expand_more">
                  expand_more
                </span>
              </div>
            </div>
            <div className="rounded-[14px] bg-white border border-stone-200/80 p-5 shadow-2xs">
              <div className="flex items-center justify-between cursor-pointer">
                <h3 className="font-headline-sm text-[16px] font-bold text-stone-800 flex items-center gap-3">
                  <span className="rounded-[6px] bg-stone-100 text-stone-600 text-xs px-2 py-0.5 font-mono">
                    Q5
                  </span>
                  {' '}
                  <span>
                    Does it support loyalty programs and customer tiers?
                  </span>
                </h3>
                {' '}
                <span className="material-symbols-outlined text-[20px] text-stone-400" data-icon="expand_more">
                  expand_more
                </span>
              </div>
            </div>
            <div className="rounded-[14px] bg-white border border-stone-200/80 p-5 shadow-2xs">
              <div className="flex items-center justify-between cursor-pointer">
                <h3 className="font-headline-sm text-[16px] font-bold text-stone-800 flex items-center gap-3">
                  <span className="rounded-[6px] bg-stone-100 text-stone-600 text-xs px-2 py-0.5 font-mono">
                    Q6
                  </span>
                  {' '}
                  <span>
                    Can we track sales performance by staff member and shift?
                  </span>
                </h3>
                {' '}
                <span className="material-symbols-outlined text-[20px] text-stone-400" data-icon="expand_more">
                  expand_more
                </span>
              </div>
            </div>
            <div className="rounded-[14px] bg-white border border-stone-200/80 p-5 shadow-2xs">
              <div className="flex items-center justify-between cursor-pointer">
                <h3 className="font-headline-sm text-[16px] font-bold text-stone-800 flex items-center gap-3">
                  <span className="rounded-[6px] bg-stone-100 text-stone-600 text-xs px-2 py-0.5 font-mono">
                    Q7
                  </span>
                  {' '}
                  <span>
                    How long does implementation typically take?
                  </span>
                </h3>
                {' '}
                <span className="material-symbols-outlined text-[20px] text-stone-400" data-icon="expand_more">
                  expand_more
                </span>
              </div>
            </div>
            <div className="rounded-[14px] bg-white border border-stone-200/80 p-5 shadow-2xs">
              <div className="flex items-center justify-between cursor-pointer">
                <h3 className="font-headline-sm text-[16px] font-bold text-stone-800 flex items-center gap-3">
                  <span className="rounded-[6px] bg-stone-100 text-stone-600 text-xs px-2 py-0.5 font-mono">
                    Q8
                  </span>
                  {' '}
                  <span>
                    Is our data secure, and who owns it?
                  </span>
                </h3>
                {' '}
                <span className="material-symbols-outlined text-[20px] text-stone-400" data-icon="expand_more">
                  expand_more
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 border-t border-stone-200/80">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="rounded-[6px] bg-stone-200/70 text-stone-800 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider inline-block mb-3">
                CONNECTED ENTERPRISE ECOSYSTEM
              </div>
              <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface mb-2">
                Looking for something else?
              </h2>
              <p className="font-body-md text-body-md text-stone-600">
                Explore productized software and autonomous AI workers engineered for operational velocity.
              </p>
            </div>
            {' '}
            <Link to="/products" className="inline-flex items-center gap-1.5 text-primary font-label-lg text-label-lg font-semibold hover:underline">
              <span>
                Explore all product packages
              </span>
              {' '}
              <span className="material-symbols-outlined text-[18px]" data-icon="arrow_forward">
                arrow_forward
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-[16px] bg-white border border-stone-200/80 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group">
              <div>
                <div className="w-10 h-10 rounded-[10px] bg-teal-50 text-teal-700 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-[22px]" data-icon="inventory_2">
                    inventory_2
                  </span>
                </div>
                <h3 className="font-headline-sm text-[18px] font-bold text-on-surface mb-2">
                  Smart Inventory Control
                </h3>
                <p className="font-body-sm text-stone-600 text-sm leading-relaxed">
                  Know exactly what's on your shelves, in your trucks, and on order — down to the unit, across every warehouse you run.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-1 text-primary text-xs font-semibold">
                <span>
                  View Architecture
                </span>
                {' '}
                <span className="material-symbols-outlined text-[14px]" data-icon="chevron_right">
                  chevron_right
                </span>
              </div>
            </div>
            <div className="rounded-[16px] bg-white border border-stone-200/80 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group">
              <div>
                <div className="w-10 h-10 rounded-[10px] bg-sky-50 text-sky-700 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-[22px]" data-icon="shopping_cart">
                    shopping_cart
                  </span>
                </div>
                <h3 className="font-headline-sm text-[18px] font-bold text-on-surface mb-2">
                  Online Store Platform
                </h3>
                <p className="font-body-sm text-stone-600 text-sm leading-relaxed">
                  Build a storefront, manage the catalog, and take orders, without stitching together five separate tools.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-1 text-primary text-xs font-semibold">
                <span>
                  View Architecture
                </span>
                {' '}
                <span className="material-symbols-outlined text-[14px]" data-icon="chevron_right">
                  chevron_right
                </span>
              </div>
            </div>
            <div className="rounded-[16px] bg-white border border-stone-200/80 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group">
              <div>
                <div className="w-10 h-10 rounded-[10px] bg-lime-50 text-lime-800 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-[22px]" data-icon="account_balance_wallet">
                    account_balance_wallet
                  </span>
                </div>
                <h3 className="font-headline-sm text-[18px] font-bold text-on-surface mb-2">
                  Ecommerce-to-Finance Sync
                </h3>
                <p className="font-body-sm text-stone-600 text-sm leading-relaxed">
                  Every online order updates your books automatically, no exporting spreadsheets to reconcile sales with accounting.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-1 text-primary text-xs font-semibold">
                <span>
                  View Architecture
                </span>
                {' '}
                <span className="material-symbols-outlined text-[14px]" data-icon="chevron_right">
                  chevron_right
                </span>
              </div>
            </div>
            <div className="rounded-[16px] bg-white border border-stone-200/80 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group">
              <div>
                <div className="w-10 h-10 rounded-[10px] bg-orange-50 text-[#ff7555] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-[22px]" data-icon="warehouse">
                    warehouse
                  </span>
                </div>
                <h3 className="font-headline-sm text-[18px] font-bold text-on-surface mb-2">
                  Warehouse Operations Platform
                </h3>
                <p className="font-body-sm text-stone-600 text-sm leading-relaxed">
                  Turn a warehouse floor into a system your pickers, packers and managers can actually see and trust.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-1 text-primary text-xs font-semibold">
                <span>
                  View Architecture
                </span>
                {' '}
                <span className="material-symbols-outlined text-[14px]" data-icon="chevron_right">
                  chevron_right
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12">
          <div className="rounded-[20px] bg-gradient-to-r from-[#ff6b4a] to-[#ff8c69] p-8 md:p-14 text-white shadow-xl shadow-[#ff7555]/20 relative overflow-hidden">
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-white/10 blur-2xl pointer-events-none" />
            <div className="relative z-10 max-w-3xl">
              <div className="rounded-[6px] bg-white/20 backdrop-blur-sm text-white px-3 py-1 text-xs font-semibold uppercase tracking-wider inline-block mb-4">
                FIXED-SCOPE STOREFRONT MODERNIZATION
              </div>
              <h2 className="font-display-lg text-[32px] sm:text-[40px] lg:text-[46px] font-bold leading-tight mb-4">
                Unify your checkout counter with fixed-scope certainty.
              </h2>
              <p className="font-body-lg text-white/90 text-base md:text-lg mb-8 max-w-2xl leading-relaxed">
                Connect directly with our enterprise solutions engineering team to review your store hardware, till topology, and ERP integration within 48 hours.
              </p>
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <Link to="/contact" className="rounded-[10px] bg-white hover:bg-stone-50 text-[#d9532f] font-label-lg text-label-lg font-bold px-6 py-3.5 shadow-md active:scale-[0.98] transition-all inline-flex items-center gap-2">
                  <span>
                    Book an Architectural Scoping Consultation
                  </span>
                  {' '}
                  <span className="material-symbols-outlined text-[18px]" data-icon="calendar_today">
                    calendar_today
                  </span>
                </Link>
              </div>
              <div className="flex items-center gap-2 text-xs text-white/80 font-medium">
                <span className="material-symbols-outlined text-[16px]" data-icon="verified_user">
                  verified_user
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
