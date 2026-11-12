// Single source of truth for routes. Used by the app (routing, links) and by scripts/stitch-to-jsx.mjs.
// `key` is the Stitch export file name in /stitch, `component` the generated file in src/pages.

export const sitePages = [
  { key: 'home', path: '/', component: 'Home', label: 'Home' },
  { key: 'products', path: '/products', component: 'Products', label: 'Products' },
  { key: 'c_solutions', path: '/solutions', component: 'Solutions', label: 'Solutions' },
  { key: 'c_casestudies', path: '/case-studies', component: 'CaseStudies', label: 'Case Studies' },
  { key: 'c_about', path: '/about', component: 'About', label: 'About' },
  { key: 'c_contact', path: '/contact', component: 'Contact', label: 'Contact' },
]

// `aliases` are lowercase phrases that identify the product in card headings and link text.
export const products = [
  { key: 'pd_ai-qc-agent', slug: 'ai-qc-agent', component: 'AiQcAgent', name: 'AI QC Agent', aliases: ['ai qc agent', 'qc agent'] },
  { key: 'pd_ai-travel-agent', slug: 'ai-travel-agent', component: 'AiTravelAgent', name: 'AI Travel Agent', aliases: ['ai travel agent', 'travel agent'] },
  { key: 'pd_exhibitor-portal', slug: 'exhibition-lead-intelligence', component: 'ExhibitionLeadIntelligence', name: 'Exhibition Lead Intelligence', aliases: ['exhibition lead intelligence', 'exhibition leads', 'event ai'] },
  { key: 'pd_inventory-management', slug: 'inventory-control', component: 'InventoryControl', name: 'Smart Inventory Control', aliases: ['smart inventory control', 'inventory control'] },
  { key: 'pd_warehouse-management', slug: 'warehouse-operations', component: 'WarehouseOperations', name: 'Warehouse Operations Platform', aliases: ['warehouse operations'] },
  { key: 'pd_production-management-software', slug: 'production-floor-management', component: 'ProductionFloor', name: 'Production Floor Management', aliases: ['production floor'] },
  { key: 'pd_production-planning-software', slug: 'production-planning', component: 'ProductionPlanning', name: 'Production Planning & Scheduling', aliases: ['production planning'] },
  { key: 'pd_rental-management-software', slug: 'rental-fleet-management', component: 'RentalFleet', name: 'Rental Fleet Management', aliases: ['rental fleet'] },
  { key: 'pd_accounting-software', slug: 'business-accounting', component: 'BusinessAccounting', name: 'Business Accounting Software', aliases: ['business accounting'] },
  { key: 'pd_payroll-software', slug: 'payroll-management', component: 'Payroll', name: 'Payroll Management System', aliases: ['payroll'] },
  { key: 'pd_employee-expense-management', slug: 'expense-management', component: 'ExpenseManagement', name: 'Employee Expense Management', aliases: ['employee expense', 'expense management'] },
  { key: 'pd_ecommerce-finance-integration', slug: 'ecommerce-finance-sync', component: 'EcommerceFinanceSync', name: 'Ecommerce-to-Finance Sync', aliases: ['ecommerce-to-finance', 'e-commerce-to-finance', 'ecommerce to finance'] },
  { key: 'pd_hr-management-software', slug: 'hr-management', component: 'HrManagement', name: 'HR Management System', aliases: ['hr management'] },
  { key: 'pd_recruitment-software', slug: 'recruitment-management', component: 'Recruitment', name: 'Recruitment Management Platform', aliases: ['recruitment management'] },
  { key: 'pd_application-tracking-system', slug: 'applicant-tracking', component: 'ApplicantTracking', name: 'Applicant Tracking System', aliases: ['applicant tracking'] },
  { key: 'pd_sales-crm', slug: 'sales-crm', component: 'SalesCrm', name: 'Sales CRM', aliases: ['sales crm'] },
  { key: 'pd_customer-ticketing-software', slug: 'support-ticketing', component: 'SupportTicketing', name: 'Customer Support Ticketing', aliases: ['customer support ticketing', 'support ticketing'] },
  { key: 'pd_field-service-management', slug: 'field-service-management', component: 'FieldService', name: 'Field Service Management', aliases: ['field service management'] },
  { key: 'pd_retail-pos', slug: 'retail-pos', component: 'RetailPos', name: 'Retail Point of Sale', aliases: ['retail point of sale', 'retail pos'] },
  { key: 'pd_restaurant-management', slug: 'restaurant-operations', component: 'RestaurantOperations', name: 'Restaurant Operations System', aliases: ['restaurant operations', 'restaurant ops'] },
  { key: 'pd_garage-management', slug: 'auto-workshop-manager', component: 'AutoWorkshop', name: 'Auto Workshop Manager', aliases: ['auto workshop'] },
  { key: 'pd_ecommerce-software', slug: 'online-store', component: 'OnlineStore', name: 'Online Store Platform', aliases: ['online store'] },
  { key: 'pd_harbor-ops', slug: 'yacht-charter-management', component: 'YachtCharter', name: 'Yacht Charter Management', aliases: ['yacht charter'] },
  { key: 'pd_ship-to-ship-transfer', slug: 'ship-to-ship-transfer', component: 'ShipToShip', name: 'Ship-to-Ship Transfer Management', aliases: ['ship-to-ship'] },
  { key: 'pd_erp', slug: 'integrated-erp', component: 'IntegratedErp', name: 'Integrated Business Operations Platform', aliases: ['integrated business operations', 'integrated erp', 'integrated enterprise'] },
].map((p) => ({ ...p, path: `/products/${p.slug}` }))

export const contact = { email: 'shuryansh.dev.work@gmail.com', phone: '9026139959' }

export const allPages = [...sitePages, ...products]
