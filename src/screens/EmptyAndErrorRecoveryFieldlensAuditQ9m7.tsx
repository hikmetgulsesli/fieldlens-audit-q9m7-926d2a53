// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Empty and Error Recovery - FieldLens Audit Q9M7
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Info, Menu, Plus, RefreshCw, Search, Settings } from "lucide-react";


export type EmptyAndErrorRecoveryFieldlensAuditQ9m7ActionId = "new-inspection-1" | "button-2-2" | "button-3-3" | "button-4-4" | "button-5-5" | "work-offline-6" | "retry-connection-7" | "dashboard-1" | "inspections-2" | "sites-3" | "assets-4" | "reports-5" | "help-6" | "logout-7";

export interface EmptyAndErrorRecoveryFieldlensAuditQ9m7Props {
  actions?: Partial<Record<EmptyAndErrorRecoveryFieldlensAuditQ9m7ActionId, () => void>>;
}

export function EmptyAndErrorRecoveryFieldlensAuditQ9m7({ actions }: EmptyAndErrorRecoveryFieldlensAuditQ9m7Props) {
  return (
    <>
      {/* SideNavBar */}
      <nav className="hidden md:flex flex-col h-full w-60 py-xl bg-primary dark:bg-primary-container text-on-primary dark:text-on-primary-container font-body-md text-body-md fixed left-0 top-0 z-20">
      <div className="px-md mb-xl flex items-center gap-md">
      <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center overflow-hidden">
      <img alt="Organization Logo" className="w-full h-full object-cover" data-alt="A small, stylized corporate logo featuring abstract geometric shapes in a bright white and light gray palette. Set against a clean, modern utilitarian background. The aesthetic is professional and structured, suitable for a technical field operations application." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfvzuGegMhtEcroZMVit2ddLfFD05wDdsS3Q4pJGTOa0AjhThrhX79vvTGEa6PXPE7vfsH7XRXFG5qoZctYunNYw6S5YrqBT4nmwenbBtMN-7sjGmFsECvnWiXyPyHXw4lndwXcOu9fjHLV20Wo3pkuWdoZYVRPFlrpY-OmeDxKUQydKasXi-l4eqCoNyS_PkwIy31S3zbiBAsVlq0OTKnc9oh0x2mSbiumDcbXn9L_bpXzcvxRBOuNd1y6l4Mp42IOvSavHQd7_U" />
      </div>
      <div>
      <h1 className="font-headline-sm text-headline-sm font-bold text-on-primary dark:text-on-primary-container">Field Ops</h1>
      <p className="font-label-md text-label-md opacity-80">Site Audit Unit</p>
      </div>
      </div>
      <div className="px-md mb-lg">
      <button className="w-full bg-secondary-container text-primary-container hover:bg-secondary-fixed transition-colors duration-200 font-label-md text-label-md py-sm px-md rounded-lg flex items-center justify-center gap-sm font-bold" type="button" data-action-id="new-inspection-1" onClick={actions?.["new-inspection-1"]}>
      <Plus className="text-[18px]" aria-hidden={true} focusable="false" />
                      New Inspection
                  </button>
      </div>
      <ul className="flex-1 px-sm space-y-xs">
      <li>
      <a className="flex items-center gap-md px-md py-sm rounded-lg text-on-primary-container opacity-80 hover:bg-on-primary-fixed-variant/50 transition-colors duration-200" href="#" data-action-id="dashboard-1" onClick={actions?.["dashboard-1"]}>
      <Circle aria-hidden={true} focusable="false" />
      <span>Dashboard</span>
      </a>
      </li>
      <li>
      <a className="flex items-center gap-md px-md py-sm rounded-lg bg-on-primary-fixed-variant text-on-primary font-bold transition-colors duration-200" href="#" data-action-id="inspections-2" onClick={actions?.["inspections-2"]}>
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      <span>Inspections</span>
      </a>
      </li>
      <li>
      <a className="flex items-center gap-md px-md py-sm rounded-lg text-on-primary-container opacity-80 hover:bg-on-primary-fixed-variant/50 transition-colors duration-200" href="#" data-action-id="sites-3" onClick={actions?.["sites-3"]}>
      <Circle aria-hidden={true} focusable="false" />
      <span>Sites</span>
      </a>
      </li>
      <li>
      <a className="flex items-center gap-md px-md py-sm rounded-lg text-on-primary-container opacity-80 hover:bg-on-primary-fixed-variant/50 transition-colors duration-200" href="#" data-action-id="assets-4" onClick={actions?.["assets-4"]}>
      <Circle aria-hidden={true} focusable="false" />
      <span>Assets</span>
      </a>
      </li>
      <li>
      <a className="flex items-center gap-md px-md py-sm rounded-lg text-on-primary-container opacity-80 hover:bg-on-primary-fixed-variant/50 transition-colors duration-200" href="#" data-action-id="reports-5" onClick={actions?.["reports-5"]}>
      <Circle aria-hidden={true} focusable="false" />
      <span>Reports</span>
      </a>
      </li>
      </ul>
      <div className="mt-auto px-sm space-y-xs">
      <a className="flex items-center gap-md px-md py-sm rounded-lg text-on-primary-container opacity-80 hover:bg-on-primary-fixed-variant/50 transition-colors duration-200" href="#" data-action-id="help-6" onClick={actions?.["help-6"]}>
      <Circle aria-hidden={true} focusable="false" />
      <span>Help</span>
      </a>
      <a className="flex items-center gap-md px-md py-sm rounded-lg text-on-primary-container opacity-80 hover:bg-on-primary-fixed-variant/50 transition-colors duration-200" href="#" data-action-id="logout-7" onClick={actions?.["logout-7"]}>
      <Circle aria-hidden={true} focusable="false" />
      <span>Logout</span>
      </a>
      </div>
      </nav>
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col md:ml-60 h-full w-full">
      {/* TopAppBar */}
      <header className="w-full h-16 border-b border-outline-variant bg-surface-container-lowest dark:bg-surface-container-lowest flex justify-between items-center px-margin-desktop z-10 sticky top-0">
      <div className="flex items-center gap-lg">
      {/* Mobile Menu Button */}
      <button className="md:hidden text-primary dark:text-primary-fixed" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Menu aria-hidden={true} focusable="false" />
      </button>
      <div className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed">
                          AuditGuard Pro
                      </div>
      </div>
      <div className="flex items-center gap-md">
      <div className="hidden sm:flex items-center border border-outline-variant rounded-lg bg-surface px-md py-xs focus-within:border-primary transition-colors duration-200">
      <Search className="text-outline mr-sm text-[18px]" aria-hidden={true} focusable="false" />
      <input className="bg-transparent border-none focus:ring-0 font-label-md text-label-md w-48 text-on-surface placeholder:text-outline-variant p-0" placeholder="Search inspections..." type="text" />
      </div>
      <div className="flex items-center gap-xs ml-sm border-l border-outline-variant pl-md">
      <button className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low transition-colors duration-200 ease-in-out" type="button" data-action-id="button-3-3" onClick={actions?.["button-3-3"]}>
      <Circle className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      <button className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low transition-colors duration-200 ease-in-out" type="button" data-action-id="button-4-4" onClick={actions?.["button-4-4"]}>
      <Circle className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      <button className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low transition-colors duration-200 ease-in-out" type="button" data-action-id="button-5-5" onClick={actions?.["button-5-5"]}>
      <Settings className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      <div className="ml-sm w-8 h-8 rounded-full bg-primary-container overflow-hidden border border-outline-variant cursor-pointer">
      <img alt="User profile avatar" className="w-full h-full object-cover" data-alt="A small, professional headshot of an individual in a bright outdoor setting, suitable for a corporate profile avatar. Crisp details, natural lighting, high-contrast, set within a utilitarian technical UI framework." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHtuhYEYagjCDe3aoA-EAZUCSakaH6WxPFQMjbgFd-25VXVeuIKkWH86eQI5Qdt6ckQATZE6eHPwJvx97274hgWnaez5w3OyT9DcKSqYKsYU9tbdPi2BNJ-fk3oP2HxesrukJ26EticzcO3HmPW_u5qKRodj3ohqHyWjRHUzVYIFLjABjDqVRG-IZ9sagA46PIHhgGqn0n47tZaw1J3qi1tuJ1JpyylgP7ErqHbJByga7DfX6RSIOioX7DMsbJEuIXxGTShc_eWo0" />
      </div>
      </div>
      </header>
      {/* Canvas Area - State Panel */}
      <main className="flex-1 overflow-y-auto p-margin-mobile md:p-margin-desktop bg-background flex items-center justify-center">
      <div className="w-full max-w-lg bg-surface-container-lowest border border-outline-variant rounded-xl p-xl flex flex-col items-center text-center shadow-sm relative overflow-hidden">
      {/* Top Edge Accent (Neutral/Warning) */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-surface-tint"></div>
      {/* Icon Container with subtle radial background */}
      <div className="w-24 h-24 rounded-full bg-surface-container-low flex items-center justify-center mb-lg relative">
      <div className="absolute inset-0 rounded-full bg-secondary-container/20 animate-pulse"></div>
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} className="text-surface-tint text-[48px]" aria-hidden={true} focusable="false" />
      </div>
      {/* Messaging */}
      <h2 className="font-headline-md text-headline-md text-on-surface mb-sm">Connection Interrupted</h2>
      <p className="font-body-md text-body-md text-on-surface-variant mb-xl max-w-sm">
                          We're unable to sync your active inspection data with the central server. Please check your network connection or switch to offline mode to continue logging data locally.
                      </p>
      {/* Data Entities Insight (Bento-style snippet) */}
      <div className="w-full bg-surface-container border border-outline-variant rounded-lg p-md mb-xl text-left flex items-start gap-md">
      <Info className="text-secondary mt-xs" aria-hidden={true} focusable="false" />
      <div>
      <p className="font-label-md text-label-md text-on-surface font-bold mb-xs">Pending Data:</p>
      <p className="font-body-md text-body-md text-on-surface-variant">2 Inspections and 5 ActivityEvents are cached locally and will sync automatically upon reconnection.</p>
      </div>
      </div>
      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-md w-full justify-center">
      <button className="h-10 px-lg bg-surface-container-lowest border border-outline-variant text-on-surface-variant font-label-md text-label-md rounded-lg hover:bg-surface-container-low transition-colors flex items-center justify-center gap-sm" type="button" data-action-id="work-offline-6" onClick={actions?.["work-offline-6"]}>
      <Circle className="text-[18px]" aria-hidden={true} focusable="false" />
                              Work Offline
                          </button>
      <button className="h-10 px-lg bg-primary-container text-on-primary font-label-md text-label-md rounded-lg hover:bg-on-primary-fixed-variant transition-colors flex items-center justify-center gap-sm" type="button" data-action-id="retry-connection-7" onClick={actions?.["retry-connection-7"]}>
      <RefreshCw className="text-[18px]" aria-hidden={true} focusable="false" />
                              Retry Connection
                          </button>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
