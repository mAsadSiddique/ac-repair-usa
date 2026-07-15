/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

interface Crumb {
  label: string;
  onClick?: () => void;
}

interface BreadcrumbsProps {
  items: Crumb[];
}

/** Visible breadcrumb trail for UX + SEO crawl paths. */
export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  if (!items.length) return null;

  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-slate-500">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="inline-flex items-center gap-1.5">
              {index > 0 && <span className="text-slate-300" aria-hidden="true">/</span>}
              {isLast || !item.onClick ? (
                <span className={isLast ? "text-slate-800 font-semibold" : undefined} aria-current={isLast ? "page" : undefined}>
                  {item.label}
                </span>
              ) : (
                <button
                  type="button"
                  onClick={item.onClick}
                  className="text-sky-600 hover:text-sky-700 hover:underline cursor-pointer"
                >
                  {item.label}
                </button>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
