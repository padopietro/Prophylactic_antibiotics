import { useI18n } from "~/i18n";

/** First focusable element: lets keyboard users jump past the navigation. */
export function SkipLink({ targetId }: { targetId: string }) {
  const { t } = useI18n();

  return (
    <a
      href={`#${targetId}`}
      className="sr-only rounded-md bg-brand-700 px-4 py-2 font-semibold text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50"
    >
      {t.common.skipToContent}
    </a>
  );
}
