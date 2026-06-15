interface XThreadCTAProps {
  url: string;
  variant?: "top" | "bottom";
}

export default function XThreadCTA({ url, variant = "top" }: XThreadCTAProps) {
  const isTop = variant === "top";

  return (
    <div
      className={`rounded-3xl border border-[#c9a84c]/30 bg-gradient-to-br from-[#c9a84c]/10 to-transparent ${
        isTop ? "mb-10" : "mt-10"
      }`}
    >
      <div className="p-6 md:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
        <div>
          <div className="text-xs font-semibold tracking-[2px] text-[#c9a84c] mb-2">
            ORIGINALLY POSTED ON X
          </div>
          <p className="text-white font-medium text-lg leading-snug">
            {isTop
              ? "This started as a thread on X. Read the full interactive version there."
              : "Want the live conversation? The full thread is on X."}
          </p>
        </div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-x-2 px-6 py-3.5 bg-[#c9a84c] hover:bg-[#b8973e] text-[#0a0a0a] font-semibold rounded-3xl transition-colors whitespace-nowrap shrink-0"
        >
          Read the full interactive thread on X
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
}