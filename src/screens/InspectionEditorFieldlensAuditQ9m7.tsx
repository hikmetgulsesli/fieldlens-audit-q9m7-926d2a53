// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Inspection Editor - FieldLens Audit Q9M7
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowLeft, Circle, Info, Plus, Save, Search, Settings, TriangleAlert, User } from "lucide-react";


export type InspectionEditorFieldlensAuditQ9m7ActionId = "new-inspection-1" | "button-2-2" | "button-3-3" | "button-4-4" | "button-5-5" | "cancel-6" | "save-inspection-7" | "pass-8" | "fail-9" | "n-a-10" | "pass-11" | "fail-12" | "n-a-13" | "pass-14" | "fail-15" | "n-a-16" | "pass-17" | "fail-18" | "n-a-19" | "dashboard-1" | "inspections-2" | "sites-3" | "assets-4" | "reports-5" | "help-6" | "logout-7";

export interface InspectionEditorFieldlensAuditQ9m7Props {
  actions?: Partial<Record<InspectionEditorFieldlensAuditQ9m7ActionId, () => void>>;
}

export function InspectionEditorFieldlensAuditQ9m7({ actions }: InspectionEditorFieldlensAuditQ9m7Props) {
  return (
    <>
      {/* SideNavBar (Shared Component) */}
      <aside className="hidden md:flex flex-col h-full w-60 py-xl bg-primary text-on-primary fixed left-0 top-0 z-20 transition-colors duration-200">
      {/* Brand Header */}
      <div className="px-md mb-xl flex flex-col gap-xs">
      <div className="flex items-center gap-sm">
      <Circle className="icon-fill text-[28px] text-primary-fixed" aria-hidden={true} focusable="false" />
      <h1 className="font-headline-sm text-headline-sm font-bold text-on-primary">Field Ops</h1>
      </div>
      <p className="font-label-md text-label-md text-primary-fixed-dim opacity-80 pl-[36px]">Site Audit Unit</p>
      </div>
      {/* CTA */}
      <div className="px-md mb-lg">
      <button className="w-full flex items-center justify-center gap-sm bg-primary-fixed text-on-primary-fixed font-title-lg text-title-lg h-10 rounded-lg hover:bg-primary-fixed-dim transition-colors" type="button" data-action-id="new-inspection-1" onClick={actions?.["new-inspection-1"]}>
      <Plus className="text-[18px]" aria-hidden={true} focusable="false" />
                      New Inspection
                  </button>
      </div>
      {/* Navigation Tabs */}
      <nav className="flex-1 px-sm flex flex-col gap-xs">
      <a className="flex items-center gap-md px-md py-sm rounded-lg text-on-primary-container opacity-80 hover:bg-on-primary-fixed-variant/50 transition-colors duration-200 font-body-md text-body-md" href="#" data-action-id="dashboard-1" onClick={actions?.["dashboard-1"]}>
      <Circle className="text-[20px]" aria-hidden={true} focusable="false" />
                      Dashboard
                  </a>
      {/* Active Tab: Exact intent match for "Inspection Editor" */}
      <a className="flex items-center gap-md px-md py-sm bg-on-primary-fixed-variant text-on-primary font-bold rounded-lg transition-colors duration-200 font-body-md text-body-md" href="#" data-action-id="inspections-2" onClick={actions?.["inspections-2"]}>
      <Circle className="text-[20px]" aria-hidden={true} focusable="false" />
                      Inspections
                  </a>
      <a className="flex items-center gap-md px-md py-sm rounded-lg text-on-primary-container opacity-80 hover:bg-on-primary-fixed-variant/50 transition-colors duration-200 font-body-md text-body-md" href="#" data-action-id="sites-3" onClick={actions?.["sites-3"]}>
      <Circle className="text-[20px]" aria-hidden={true} focusable="false" />
                      Sites
                  </a>
      <a className="flex items-center gap-md px-md py-sm rounded-lg text-on-primary-container opacity-80 hover:bg-on-primary-fixed-variant/50 transition-colors duration-200 font-body-md text-body-md" href="#" data-action-id="assets-4" onClick={actions?.["assets-4"]}>
      <Circle className="text-[20px]" aria-hidden={true} focusable="false" />
                      Assets
                  </a>
      <a className="flex items-center gap-md px-md py-sm rounded-lg text-on-primary-container opacity-80 hover:bg-on-primary-fixed-variant/50 transition-colors duration-200 font-body-md text-body-md" href="#" data-action-id="reports-5" onClick={actions?.["reports-5"]}>
      <Circle className="text-[20px]" aria-hidden={true} focusable="false" />
                      Reports
                  </a>
      </nav>
      {/* Footer Tabs */}
      <div className="px-sm flex flex-col gap-xs mt-auto pt-lg border-t border-on-primary-fixed-variant">
      <a className="flex items-center gap-md px-md py-sm rounded-lg text-on-primary-container opacity-80 hover:bg-on-primary-fixed-variant/50 transition-colors duration-200 font-body-md text-body-md" href="#" data-action-id="help-6" onClick={actions?.["help-6"]}>
      <Circle className="text-[20px]" aria-hidden={true} focusable="false" />
                      Help
                  </a>
      <a className="flex items-center gap-md px-md py-sm rounded-lg text-on-primary-container opacity-80 hover:bg-on-primary-fixed-variant/50 transition-colors duration-200 font-body-md text-body-md" href="#" data-action-id="logout-7" onClick={actions?.["logout-7"]}>
      <Circle className="text-[20px]" aria-hidden={true} focusable="false" />
                      Logout
                  </a>
      </div>
      </aside>
      {/* Main Workspace */}
      <div className="flex-1 flex flex-col h-screen md:ml-60">
      {/* TopAppBar (Shared Component) */}
      <header className="flex justify-between items-center px-margin-desktop w-full h-16 bg-surface-container-lowest border-b border-outline-variant shrink-0 z-10">
      {/* Search Bar (on_left configuration) */}
      <div className="flex items-center flex-1 max-w-md">
      <div className="relative w-full">
      <Search className="absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]" aria-hidden={true} focusable="false" />
      <input className="w-full h-10 pl-xl pr-sm bg-surface-container-low border border-transparent focus:border-primary-container focus:bg-surface-container-lowest rounded-full font-label-md text-label-md text-on-surface outline-none transition-colors duration-200" placeholder="Search audits, sites..." type="text" />
      </div>
      </div>
      {/* Trailing Icons & Profile */}
      <div className="flex items-center gap-md ml-auto">
      <button className="p-xs text-on-surface-variant hover:bg-surface-container-low rounded-full transition-colors duration-200 flex items-center justify-center" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Circle aria-hidden={true} focusable="false" />
      </button>
      <button className="p-xs text-on-surface-variant hover:bg-surface-container-low rounded-full transition-colors duration-200 flex items-center justify-center" type="button" data-action-id="button-3-3" onClick={actions?.["button-3-3"]}>
      <Circle aria-hidden={true} focusable="false" />
      </button>
      <button className="p-xs text-on-surface-variant hover:bg-surface-container-low rounded-full transition-colors duration-200 flex items-center justify-center" type="button" data-action-id="button-4-4" onClick={actions?.["button-4-4"]}>
      <Settings aria-hidden={true} focusable="false" />
      </button>
      <div className="w-8 h-8 rounded-full ml-sm border border-outline-variant overflow-hidden bg-surface-container-high flex items-center justify-center">
      <img alt="User profile avatar" className="w-full h-full object-cover" data-alt="A professional headshot of an industrial auditor in his late 30s. He is wearing a high-visibility vest over a collared shirt. The background is a slightly blurred, modern construction site with neutral grey and blue tones. The lighting is bright and even, indicating daytime outdoor conditions. The overall style is realistic and corporate." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCV1hSstOIAn94n-0TLFdBJhyPIXntc3MshzzkefrsrFe4_fVYjUi3QpJmd1eI7mE4J4_FMZdiqxSUz4yrjwptoEbURyEwCCW2HjIiMSacvQsQbPUdXOBrRT4DJXbc3rLhQRng7rStK-ZxBWebqooI7Qcs52ow4CtulnoKD_tcF0dNa2oTnuKO0sYHlFFRT-M2uRoa326NokQiNJbp0PuPlLlStsfpZ1echVwVmnzwMdwRCxGAHtmyI4gDjBAP2xnvmyscpsAH6Y6g" />
      </div>
      </div>
      </header>
      {/* Main Content Canvas */}
      <main className="flex-1 overflow-y-auto p-margin-desktop bg-surface flex justify-center">
      {/* Editor Container (Constrained Width for Readability) */}
      <div className="w-full max-w-[1280px] flex flex-col gap-lg pb-xl">
      {/* Action Bar / Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-md pb-md border-b border-outline-variant sticky top-0 bg-surface z-10 pt-sm">
      <div className="flex items-center gap-md">
      <button className="text-on-surface-variant hover:text-primary transition-colors flex items-center" title="Back to list" type="button" data-action-id="button-5-5" onClick={actions?.["button-5-5"]}>
      <ArrowLeft aria-hidden={true} focusable="false" />
      </button>
      <div>
      <h2 className="font-headline-md text-headline-md font-bold text-on-surface flex items-center gap-sm">
                                      Audit Q9M7
                                      <span className="bg-error-container text-on-error-container font-label-sm px-2 py-0.5 rounded-full border border-error/20 flex items-center gap-xs">
      <span className="w-1.5 h-1.5 rounded-full bg-error"></span>
                                          Unsaved Changes
                                      </span>
      </h2>
      <p className="font-body-md text-body-md text-on-surface-variant mt-xs">SURF_INSPECTION_EDITOR • Form ID: 899-AX</p>
      </div>
      </div>
      <div className="flex items-center gap-sm">
      <button className="h-10 px-lg border border-outline-variant text-on-surface-variant rounded-lg font-title-lg text-title-lg hover:bg-surface-container-low transition-colors duration-200" type="button" data-action-id="cancel-6" onClick={actions?.["cancel-6"]}>
                                  Cancel
                              </button>
      <button className="h-10 px-lg bg-primary-container text-on-primary rounded-lg font-title-lg text-title-lg shadow-sm hover:bg-primary transition-colors duration-200 flex items-center gap-xs" type="button" data-action-id="save-inspection-7" onClick={actions?.["save-inspection-7"]}>
      <Save className="text-[18px]" aria-hidden={true} focusable="false" />
                                  Save Inspection
                              </button>
      </div>
      </div>
      {/* Form Grid (12 Columns Desktop) */}
      <form className="grid grid-cols-1 md:grid-cols-12 gap-gutter mt-sm">
      {/* Left Column: Metadata (4 Cols) */}
      <div className="md:col-span-4 flex flex-col gap-gutter">
      {/* Details Card */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg flex flex-col shadow-sm relative overflow-hidden">
      {/* Subtle Tonal Accent Line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary-fixed-dim"></div>
      <h3 className="font-title-lg text-title-lg font-semibold text-on-surface border-b border-outline-variant pb-sm mb-md flex items-center gap-xs">
      <Info className="text-[20px] text-on-surface-variant" aria-hidden={true} focusable="false" />
                                      Inspection Details
                                  </h3>
      <div className="flex flex-col gap-md">
      {/* Required Field with Error State */}
      <div className="flex flex-col">
      <label className="font-label-md text-label-md text-on-surface mb-xs flex gap-xs items-center">
                                              Inspection Name 
                                              <span className="text-error font-bold" title="Required Field">*</span>
      </label>
      <input className="h-10 w-full px-sm border-2 border-error rounded-lg bg-error-container/10 font-body-md text-on-surface focus:outline-none focus:ring-0 transition-colors" placeholder="e.g., Q3 Safety Walkthrough" type="text" defaultValue="" />
      <div className="flex items-center gap-xs text-error font-label-sm mt-xs">
      <Circle className="text-[14px]" aria-hidden={true} focusable="false" />
                                              Inspection Name is required to save.
                                          </div>
      </div>
      {/* Standard Select Field */}
      <div className="flex flex-col">
      <label className="font-label-md text-label-md text-on-surface mb-xs flex gap-xs items-center">
                                              Site Location
                                          </label>
      <div className="relative">
      <select className="h-10 w-full px-sm pr-xl border border-outline-variant rounded-lg bg-surface-container-lowest font-body-md text-on-surface focus:border-primary focus:border-2 focus:outline-none appearance-none transition-colors cursor-pointer">
      <option disabled={true} selected={true} value="">Select a facility...</option>
      <option value="site-a">Northwind Processing Plant (Sector 4)</option>
      <option value="site-b">Delta Storage Facility</option>
      <option value="site-c">Offshore Platform Alpha</option>
      </select>
      <Circle className="absolute right-sm top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none" aria-hidden={true} focusable="false" />
      </div>
      </div>
      {/* Read-only / Pre-filled Field */}
      <div className="flex flex-col">
      <label className="font-label-md text-label-md text-on-surface mb-xs flex gap-xs items-center">
                                              Lead Inspector
                                          </label>
      <div className="relative">
      <User className="absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]" aria-hidden={true} focusable="false" />
      <input className="h-10 w-full pl-xl pr-sm border border-outline-variant rounded-lg bg-surface-container-low font-body-md text-on-surface-variant cursor-not-allowed focus:outline-none" readOnly={true} type="text" value="Dr. Aris Thorne" />
      </div>
      </div>
      {/* Date Picker */}
      <div className="flex flex-col">
      <label className="font-label-md text-label-md text-on-surface mb-xs flex gap-xs items-center">
                                              Inspection Date
                                          </label>
      <div className="relative">
      <Circle className="absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]" aria-hidden={true} focusable="false" />
      <input className="h-10 w-full pl-xl pr-sm border border-outline-variant rounded-lg bg-surface-container-lowest font-body-md text-on-surface focus:border-primary focus:border-2 focus:outline-none transition-colors" type="date" defaultValue="2023-10-24" />
      </div>
      </div>
      </div>
      </div>
      </div>
      {/* Right Column: Checklist & Evidence (8 Cols) */}
      <div className="md:col-span-8 flex flex-col gap-gutter">
      {/* Checklist Card */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl flex flex-col shadow-sm">
      <div className="p-lg pb-sm border-b border-outline-variant flex justify-between items-end">
      <div>
      <h3 className="font-title-lg text-title-lg font-semibold text-on-surface flex items-center gap-xs">
      <Circle className="text-[20px] text-on-surface-variant" aria-hidden={true} focusable="false" />
                                              Structural Integrity Protocol
                                          </h3>
      <p className="font-label-md text-label-md text-on-surface-variant mt-xs">Complete all mandatory checkpoints.</p>
      </div>
      <span className="font-label-sm text-label-sm bg-surface-container-high text-on-surface-variant px-2 py-1 rounded">1/4 Completed</span>
      </div>
      <div className="flex flex-col">
      {/* Checklist Item 1: Pass State */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between p-md border-b border-outline-variant hover:bg-surface-container-low transition-colors gap-md relative">
      {/* Edge accent indicating Pass status implicitly */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-tertiary-container hidden lg:block"></div>
      <div className="flex-1 lg:pl-sm">
      <h4 className="font-body-md text-body-md font-medium text-on-surface">1.1 Load-bearing pillar foundation check</h4>
      <p className="font-label-md text-label-md text-on-surface-variant mt-xs">Visual inspection for micro-fractures.</p>
      </div>
      {/* Utilitarian Segmented Control */}
      <div className="flex border border-outline-variant rounded-lg overflow-hidden shrink-0 h-9 bg-surface-container-lowest">
      <button className="px-md font-label-md text-label-md border-r border-outline-variant bg-tertiary-container text-on-tertiary-container font-bold flex items-center gap-xs transition-colors" type="button" data-action-id="pass-8" onClick={actions?.["pass-8"]}>
      <Circle className="text-[16px] icon-fill" aria-hidden={true} focusable="false" /> Pass
                                              </button>
      <button className="px-md font-label-md text-label-md border-r border-outline-variant text-on-surface-variant hover:bg-surface-container-highest transition-colors" type="button" data-action-id="fail-9" onClick={actions?.["fail-9"]}>
                                                  Fail
                                              </button>
      <button className="px-md font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-highest transition-colors" type="button" data-action-id="n-a-10" onClick={actions?.["n-a-10"]}>
                                                  N/A
                                              </button>
      </div>
      </div>
      {/* Checklist Item 2: Fail State */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between p-md border-b border-outline-variant hover:bg-surface-container-low transition-colors gap-md relative">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-error hidden lg:block"></div>
      <div className="flex-1 lg:pl-sm">
      <h4 className="font-body-md text-body-md font-medium text-on-surface">1.2 Overhead crane track alignment</h4>
      <p className="font-label-md text-label-md text-error mt-xs flex items-center gap-xs">
      <TriangleAlert className="text-[14px]" aria-hidden={true} focusable="false" /> Deviation detected &gt; 2mm.
                                              </p>
      </div>
      <div className="flex border border-outline-variant rounded-lg overflow-hidden shrink-0 h-9 bg-surface-container-lowest">
      <button className="px-md font-label-md text-label-md border-r border-outline-variant text-on-surface-variant hover:bg-surface-container-highest transition-colors" type="button" data-action-id="pass-11" onClick={actions?.["pass-11"]}>
                                                  Pass
                                              </button>
      <button className="px-md font-label-md text-label-md border-r border-outline-variant bg-error text-on-error font-bold flex items-center gap-xs transition-colors" type="button" data-action-id="fail-12" onClick={actions?.["fail-12"]}>
      <Circle className="text-[16px] icon-fill" aria-hidden={true} focusable="false" /> Fail
                                              </button>
      <button className="px-md font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-highest transition-colors" type="button" data-action-id="n-a-13" onClick={actions?.["n-a-13"]}>
                                                  N/A
                                              </button>
      </div>
      </div>
      {/* Checklist Item 3: Unanswered */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between p-md border-b border-outline-variant hover:bg-surface-container-low transition-colors gap-md relative">
      <div className="flex-1 lg:pl-sm">
      <h4 className="font-body-md text-body-md font-medium text-on-surface">1.3 Ventilation duct integrity</h4>
      <p className="font-label-md text-label-md text-on-surface-variant mt-xs">Check for seal degradation.</p>
      </div>
      <div className="flex border border-outline-variant rounded-lg overflow-hidden shrink-0 h-9 bg-surface-container-lowest focus-within:border-primary focus-within:ring-1 focus-within:ring-primary">
      <button className="px-md font-label-md text-label-md border-r border-outline-variant text-on-surface-variant hover:bg-surface-container-highest transition-colors" type="button" data-action-id="pass-14" onClick={actions?.["pass-14"]}>
                                                  Pass
                                              </button>
      <button className="px-md font-label-md text-label-md border-r border-outline-variant text-on-surface-variant hover:bg-surface-container-highest transition-colors" type="button" data-action-id="fail-15" onClick={actions?.["fail-15"]}>
                                                  Fail
                                              </button>
      <button className="px-md font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-highest transition-colors" type="button" data-action-id="n-a-16" onClick={actions?.["n-a-16"]}>
                                                  N/A
                                              </button>
      </div>
      </div>
      {/* Checklist Item 4: Unanswered */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between p-md hover:bg-surface-container-low transition-colors gap-md relative">
      <div className="flex-1 lg:pl-sm">
      <h4 className="font-body-md text-body-md font-medium text-on-surface">1.4 Emergency exit route clearance</h4>
      <p className="font-label-md text-label-md text-on-surface-variant mt-xs">Path must be unobstructed min 36".</p>
      </div>
      <div className="flex border border-outline-variant rounded-lg overflow-hidden shrink-0 h-9 bg-surface-container-lowest">
      <button className="px-md font-label-md text-label-md border-r border-outline-variant text-on-surface-variant hover:bg-surface-container-highest transition-colors" type="button" data-action-id="pass-17" onClick={actions?.["pass-17"]}>
                                                  Pass
                                              </button>
      <button className="px-md font-label-md text-label-md border-r border-outline-variant text-on-surface-variant hover:bg-surface-container-highest transition-colors" type="button" data-action-id="fail-18" onClick={actions?.["fail-18"]}>
                                                  Fail
                                              </button>
      <button className="px-md font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-highest transition-colors" type="button" data-action-id="n-a-19" onClick={actions?.["n-a-19"]}>
                                                  N/A
                                              </button>
      </div>
      </div>
      </div>
      </div>
      {/* Evidence & Notes Card */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg flex flex-col shadow-sm">
      <h3 className="font-title-lg text-title-lg font-semibold text-on-surface border-b border-outline-variant pb-sm mb-md flex items-center gap-xs">
      <Circle className="text-[20px] text-on-surface-variant" aria-hidden={true} focusable="false" />
                                      Evidence &amp; Field Notes
                                  </h3>
      <div className="flex flex-col gap-md">
      <div className="flex flex-col">
      <label className="font-label-md text-label-md text-on-surface mb-xs">Observations / Remediation Steps</label>
      <textarea className="w-full h-32 p-sm border border-outline-variant rounded-lg bg-surface-container-lowest font-body-md text-on-surface resize-none focus:border-primary focus:border-2 focus:outline-none transition-colors" placeholder="Log detailed findings here. For failed items, mandate corrective actions...">Track deviation noted on item 1.2 requires immediate recalibration by maintenance crew before end of shift. Foundation micro-fractures (1.1) within acceptable tolerance per spec D-45.</textarea>
      </div>
      <div className="flex flex-col">
      <label className="font-label-md text-label-md text-on-surface mb-xs">Attachments</label>
      <div className="border-2 border-dashed border-outline-variant rounded-lg p-lg flex flex-col items-center justify-center text-on-surface-variant gap-sm hover:bg-surface-container-low hover:border-primary-fixed-dim transition-colors cursor-pointer group">
      <Circle className="text-[32px] group-hover:text-primary transition-colors" aria-hidden={true} focusable="false" />
      <div className="text-center">
      <p className="font-body-md text-body-md text-on-surface font-medium">Click to upload or drag &amp; drop</p>
      <p className="font-label-sm text-label-sm mt-xs">PNG, JPG, PDF up to 20MB</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </form>
      </div>
      </main>
      </div>
    </>
  );
}
