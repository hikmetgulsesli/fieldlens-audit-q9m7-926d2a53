// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Inspection Operations - FieldLens Audit Q9M7
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ChevronLeft, ChevronRight, Circle, ListFilter, Menu, Plus, RefreshCw, Search, Settings, TriangleAlert } from "lucide-react";
import type { FieldLensCounts, FieldLensInspectionRecord, FieldLensInspectionStatus } from "../features/fieldlens-audit-q9m7/fieldlens-audit-q9m7.store";


export type InspectionOperationsFieldlensAuditQ9m7ActionId = "button-1-1" | "button-2-2" | "button-3-3" | "button-4-4" | "refresh-5" | "new-inspection-6" | "button-7-7" | "button-8-8" | "button-9-9" | "button-10-10" | "dashboard-1" | "inspections-2" | "sites-3" | "assets-4" | "reports-5" | "help-6" | "logout-7" | "edit-8" | "view-9" | "edit-10" | "view-11";

export interface InspectionOperationsFieldlensAuditQ9m7Props {
  actions?: Partial<Record<InspectionOperationsFieldlensAuditQ9m7ActionId, () => void>>;
  counts?: FieldLensCounts;
  records?: FieldLensInspectionRecord[];
  total?: number;
}

const rowActionIds = ["edit-8", "view-9", "edit-10", "view-11"] as const;

function formatMetric(value?: number) {
  return (value ?? 0).toLocaleString();
}

function formatInspectionId(id: string) {
  return id.startsWith("inspection-") ? `#${id.slice("inspection-".length).toUpperCase()}` : `#${id.toUpperCase()}`;
}

function formatStatus(status: FieldLensInspectionStatus) {
  if (status === "in-progress") {
    return "In Progress";
  }

  return status.charAt(0).toUpperCase() + status.slice(1);
}

function statusClasses(status: FieldLensInspectionStatus) {
  if (status === "completed") {
    return {
      badge: "inline-flex items-center gap-xs px-2 py-1 rounded bg-[#dcfce7] text-[#166534] font-label-md text-label-md",
      accent: "absolute left-0 top-0 bottom-0 w-[3px] bg-[#166534] hidden group-hover:block",
    };
  }

  if (status === "scheduled") {
    return {
      badge: "inline-flex items-center gap-xs px-2 py-1 rounded bg-secondary-container text-primary-container font-label-md text-label-md",
      accent: "absolute left-0 top-0 bottom-0 w-[3px] bg-primary hidden group-hover:block",
    };
  }

  return {
    badge: "inline-flex items-center gap-xs px-2 py-1 rounded bg-error-container text-on-error-container font-label-md text-label-md",
    accent: "absolute left-0 top-0 bottom-0 w-[3px] bg-error hidden group-hover:block",
  };
}

function formatLastActivity(value: string) {
  const timestamp = Date.parse(value);
  if (Number.isNaN(timestamp)) {
    return value;
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(timestamp));
}

export function InspectionOperationsFieldlensAuditQ9m7({ actions, counts, records = [], total = records.length }: InspectionOperationsFieldlensAuditQ9m7Props) {
  const visibleRows = records.slice(0, 4);
  const openIssues = counts?.failedChecks ?? records.reduce((sum, record) => sum + record.checklist.filter((item) => item.result === "fail").length, 0);
  const pendingSync = counts?.inProgress ?? records.filter((record) => record.status === "in-progress").length;
  const displayedEnd = Math.min(visibleRows.length, total);
  return (
    <>
      {/* SideNavBar (Shared Component) */}
      <nav className="hidden md:flex flex-col h-full w-60 py-xl fixed left-0 top-0 bg-primary dark:bg-primary-container">
      {/* Header */}
      <button className="px-md mb-xl flex items-center gap-md" type="button" aria-label="Field Ops Site Audit Unit" data-action-id="dashboard-1" onClick={actions?.["dashboard-1"]}>
      <img alt="Organization Logo" className="w-10 h-10 rounded-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6UINUqXLv_5Rf7ZQawgvPGdZM5b6Uv37trT7SRd-wh_VpVWritjLnRyYd7crZPNmsbNUYgIq0cpUXa7QvH7tosKj5cHqnEl0kN3MmUZ7M-2ZEqTqfiTRw7NLb5V8nhiIpHAetFDOUHFj0e3rH3e0nTAo4ibSubYRXybCrYSqWnL2fSEDLSBtvdzctfDujF8hDMNMw_DHMNX7n5jwpijlehtoBHYGaHOD_8f2_-NeO4C9CMIMDJuM7hH0Gs138nmIEzabZguGAGvM" />
      <div>
      <h1 className="font-headline-sm text-headline-sm font-bold text-on-primary dark:text-on-primary-container">Field Ops</h1>
      <p className="font-label-md text-label-md text-on-primary-container">Site Audit Unit</p>
      </div>
      </button>
      {/* Navigation Tabs */}
      <div className="flex-1 px-sm flex flex-col gap-sm overflow-y-auto custom-scrollbar">
      {/* Active Tab: Dashboard */}
      <a className="flex items-center gap-md px-md py-sm bg-on-primary-fixed-variant text-on-primary font-bold rounded-lg transition-colors duration-200" href="#" data-action-id="dashboard-1" onClick={actions?.["dashboard-1"]}>
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Dashboard</span>
      </a>
      <a className="flex items-center gap-md px-md py-sm text-on-primary-container opacity-80 hover:bg-on-primary-fixed-variant/50 transition-colors duration-200 rounded-lg" href="#" data-action-id="inspections-2" onClick={actions?.["inspections-2"]}>
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Inspections</span>
      </a>
      <a className="flex items-center gap-md px-md py-sm text-on-primary-container opacity-80 hover:bg-on-primary-fixed-variant/50 transition-colors duration-200 rounded-lg" href="#" data-action-id="sites-3" onClick={actions?.["sites-3"]}>
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Sites</span>
      </a>
      <a className="flex items-center gap-md px-md py-sm text-on-primary-container opacity-80 hover:bg-on-primary-fixed-variant/50 transition-colors duration-200 rounded-lg" href="#" data-action-id="assets-4" onClick={actions?.["assets-4"]}>
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Assets</span>
      </a>
      <a className="flex items-center gap-md px-md py-sm text-on-primary-container opacity-80 hover:bg-on-primary-fixed-variant/50 transition-colors duration-200 rounded-lg" href="#" data-action-id="reports-5" onClick={actions?.["reports-5"]}>
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Reports</span>
      </a>
      </div>
      {/* Footer Tabs */}
      <div className="px-sm flex flex-col gap-sm mt-auto border-t border-on-primary-fixed-variant/30 pt-sm">
      <a className="flex items-center gap-md px-md py-sm text-on-primary-container opacity-80 hover:bg-on-primary-fixed-variant/50 transition-colors duration-200 rounded-lg" href="#" data-action-id="help-6" onClick={actions?.["help-6"]}>
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Help</span>
      </a>
      <a className="flex items-center gap-md px-md py-sm text-on-primary-container opacity-80 hover:bg-on-primary-fixed-variant/50 transition-colors duration-200 rounded-lg" href="#" data-action-id="logout-7" onClick={actions?.["logout-7"]}>
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Logout</span>
      </a>
      </div>
      </nav>
      {/* Main Content Wrapper */}
      <div className="flex-1 flex flex-col md:ml-60 md:w-[calc(100%-15rem)] h-full overflow-hidden min-w-0">
      {/* TopAppBar (Shared Component) */}
      <header className="flex justify-between items-center px-margin-mobile md:px-margin-desktop w-full h-16 border-b border-outline-variant bg-surface-container-lowest dark:bg-surface-container-lowest transition-colors duration-200 ease-in-out shrink-0">
      {/* Brand / Mobile Menu (Hidden on Desktop since SideNav is present) */}
      <div className="flex items-center gap-md md:hidden">
      <button className="text-on-surface-variant" type="button" data-action-id="button-1-1" onClick={actions?.["button-1-1"]}>
      <Menu aria-hidden={true} focusable="false" />
      </button>
      <span className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed">AuditGuard Pro</span>
      </div>
      {/* Search (Left aligned as per JSON, but leaving room for brand on mobile) */}
      <div className="hidden md:flex flex-1 max-w-md mr-md">
      <div className="relative w-full">
      <Search className="absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none" aria-hidden={true} focusable="false" />
      <input className="w-full pl-xl pr-sm py-sm rounded border border-outline-variant bg-surface focus:border-primary focus:ring-1 focus:ring-primary font-label-md text-label-md text-on-surface placeholder:text-on-surface-variant transition-colors outline-none" placeholder="Search inspections, sites, assets..." type="text" />
      </div>
      </div>
      {/* Actions & Profile */}
      <div className="flex items-center gap-sm">
      <button className="p-sm rounded hover:bg-surface-container-low dark:hover:bg-surface-container-low text-on-surface-variant transition-colors" title="Notifications" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Circle aria-hidden={true} focusable="false" />
      </button>
      <button className="p-sm rounded hover:bg-surface-container-low dark:hover:bg-surface-container-low text-on-surface-variant transition-colors" title="Sync" type="button" data-action-id="button-3-3" onClick={actions?.["button-3-3"]}>
      <Circle aria-hidden={true} focusable="false" />
      </button>
      <button className="p-sm rounded hover:bg-surface-container-low dark:hover:bg-surface-container-low text-on-surface-variant transition-colors" title="Settings" type="button" data-action-id="button-4-4" onClick={actions?.["button-4-4"]}>
      <Settings aria-hidden={true} focusable="false" />
      </button>
      <div className="w-px h-6 bg-outline-variant mx-sm hidden sm:block"></div>
      <img alt="User profile avatar" className="w-8 h-8 rounded-full border border-outline-variant cursor-pointer ml-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwUkg4oOdKcRBBPHg2eWehW_M_ouYhLFA6I3-XY9iliQ1zm_lIZmIAoM8-GfTbA-AFysb0CiVmPoSowdhZE_psZ24-76ZWpUTu962c7dO1ng5jXeEk04XDen-AmuKV7l-pqsWqKLfbFIMbe6s8MxRJjef-k2RlWC261eQSbnqP7vZX-0S0KRDy7tcneXrbRjBGOvEKDZ45EYCW3d1RbV69TdNOhTIsIYYzINCQuHc92rk4FzGPOiK7Iw8xTGBJ1axOn-wpH1jXkYg" />
      </div>
      </header>
      {/* Main Scrollable Canvas */}
      <main className="flex-1 overflow-y-auto overflow-x-hidden p-margin-mobile md:p-margin-desktop bg-surface-container-low min-w-0">
      {/* Page Header & Action Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-xl gap-md">
      <div>
      <h2 className="font-display-lg text-display-lg text-on-background">Dashboard</h2>
      <p className="font-body-md text-body-md text-on-surface-variant mt-xs">Overview of current field operations and pending tasks.</p>
      </div>
      <div className="flex gap-md w-full sm:w-auto">
      <button className="flex-1 sm:flex-none flex items-center justify-center gap-sm px-md py-sm border border-outline-variant bg-surface-container-lowest text-on-surface font-label-md text-label-md rounded hover:bg-surface-container-high transition-colors h-10" type="button" data-action-id="refresh-5" onClick={actions?.["refresh-5"]}>
      <RefreshCw className="text-[18px]" aria-hidden={true} focusable="false" />
                              Refresh
                          </button>
      <button className="flex-1 sm:flex-none flex items-center justify-center gap-sm px-md py-sm bg-primary text-on-primary font-label-md text-label-md rounded hover:bg-primary/90 transition-colors h-10" type="button" data-action-id="new-inspection-6" onClick={actions?.["new-inspection-6"]}>
      <Plus className="text-[18px]" aria-hidden={true} focusable="false" />
                              New Inspection
                          </button>
      </div>
      </div>
      {/* Summary Metrics (Bento Grid Style) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-md mb-xl">
      {/* Metric 1 */}
      <div className="bg-surface-container-lowest border border-outline-variant p-lg rounded-lg flex items-start justify-between">
      <div>
      <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-sm">Total Inspections</p>
      <p className="font-display-lg text-display-lg text-on-background">{formatMetric(counts?.inspections ?? total)}</p>
      <div className="flex items-center gap-xs mt-sm text-on-tertiary-container">
      <Circle className="text-[16px]" aria-hidden={true} focusable="false" />
      <span className="font-label-sm text-label-sm">+12% this week</span>
      </div>
      </div>
      <div className="p-sm bg-surface-container-low rounded">
      <Circle className="text-primary" aria-hidden={true} focusable="false" />
      </div>
      </div>
      {/* Metric 2 */}
      <div className="bg-surface-container-lowest border border-outline-variant p-lg rounded-lg flex items-start justify-between relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-error"></div>
      <div className="pl-sm">
      <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-sm">Open Issues</p>
      <p className="font-display-lg text-display-lg text-on-background">{formatMetric(openIssues)}</p>
      <div className="flex items-center gap-xs mt-sm text-error">
      <TriangleAlert className="text-[16px]" aria-hidden={true} focusable="false" />
      <span className="font-label-sm text-label-sm">Requires attention</span>
      </div>
      </div>
      <div className="p-sm bg-error-container rounded">
      <Circle className="text-on-error-container" aria-hidden={true} focusable="false" />
      </div>
      </div>
      {/* Metric 3 */}
      <div className="bg-surface-container-lowest border border-outline-variant p-lg rounded-lg flex items-start justify-between relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#f59e0b]"></div>
      <div className="pl-sm">
      <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-sm">Pending Sync</p>
      <p className="font-display-lg text-display-lg text-on-background">{formatMetric(pendingSync)}</p>
      <div className="flex items-center gap-xs mt-sm text-on-surface-variant">
      <Circle className="text-[16px]" aria-hidden={true} focusable="false" />
      <span className="font-label-sm text-label-sm">Awaiting connectivity</span>
      </div>
      </div>
      <div className="p-sm bg-surface-container-low rounded">
      <Circle className="text-primary" aria-hidden={true} focusable="false" />
      </div>
      </div>
      </div>
      {/* Primary Data Table */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden flex flex-col min-w-0">
      <div className="p-md border-b border-outline-variant flex justify-between items-center bg-surface">
      <h3 className="font-title-lg text-title-lg text-on-background">Recent Inspections</h3>
      <div className="flex items-center gap-sm">
      <button className="p-xs text-on-surface-variant hover:bg-surface-container-low rounded" title="Filter" type="button" data-action-id="button-7-7" onClick={actions?.["button-7-7"]}>
      <ListFilter className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      <button className="p-xs text-on-surface-variant hover:bg-surface-container-low rounded" title="Sort" type="button" data-action-id="button-8-8" onClick={actions?.["button-8-8"]}>
      <Circle className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      <div className="overflow-x-auto custom-scrollbar max-w-full">
      <table className="w-full table-fixed text-left border-collapse">
      <thead>
      <tr className="border-b border-outline-variant bg-surface">
      <th className="p-md font-label-md text-label-md text-on-surface-variant uppercase font-semibold">ID</th>
      <th className="p-md font-label-md text-label-md text-on-surface-variant uppercase font-semibold">Site / Location</th>
      <th className="p-md font-label-md text-label-md text-on-surface-variant uppercase font-semibold">Inspector</th>
      <th className="p-md font-label-md text-label-md text-on-surface-variant uppercase font-semibold">Status</th>
      <th className="p-md font-label-md text-label-md text-on-surface-variant uppercase font-semibold">Last Activity</th>
      <th className="p-md font-label-md text-label-md text-on-surface-variant uppercase font-semibold text-right">Actions</th>
      </tr>
      </thead>
      <tbody className="font-body-md text-body-md divide-y divide-outline-variant">
      {visibleRows.map((record, index) => {
        const status = statusClasses(record.status);
        const actionId = rowActionIds[index];
        const actionLabel = record.status === "completed" ? "View" : "Edit";

        return (
      <tr className="hover:bg-surface-container-low transition-colors relative group" key={record.id}>
      <td className="p-md font-label-md text-primary">{formatInspectionId(record.id)}</td>
      <td className="p-md">
      <div className="font-semibold text-on-background">{record.site}</div>
      <div className="text-on-surface-variant text-[12px] mt-xs flex items-center gap-xs">
      <Circle className="text-[14px]" aria-hidden={true} focusable="false" />
                                              {record.asset}
                                          </div>
      </td>
      <td className="p-md text-on-surface-variant">{record.inspector}</td>
      <td className="p-md">
      <span className={status.badge}>
      <Circle className="text-[14px]" aria-hidden={true} focusable="false" />
                                              {formatStatus(record.status)}
                                          </span>
      </td>
      <td className="p-md text-on-surface-variant">{formatLastActivity(record.updatedAt)}</td>
      <td className="p-md text-right">
      <a className="font-label-md text-primary hover:underline" href="#" data-action-id={actionId} onClick={actions?.[actionId]}>{actionLabel}</a>
      </td>
      <td className={status.accent}></td>
      </tr>
        );
      })}
      </tbody>
      </table>
      </div>
      {/* Pagination Footer */}
      <div className="p-md border-t border-outline-variant bg-surface flex items-center justify-between">
      <span className="font-label-md text-label-md text-on-surface-variant">Showing {visibleRows.length ? 1 : 0} to {displayedEnd} of {formatMetric(total)} entries</span>
      <div className="flex items-center gap-xs">
      <button className="p-xs text-on-surface-variant hover:bg-surface-container-low rounded border border-outline-variant" disabled={true} type="button" data-action-id="button-9-9" onClick={actions?.["button-9-9"]}>
      <ChevronLeft className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      <button className="p-xs text-on-surface-variant hover:bg-surface-container-low rounded border border-outline-variant" type="button" data-action-id="button-10-10" onClick={actions?.["button-10-10"]}>
      <ChevronRight className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
