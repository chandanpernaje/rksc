import { MEDIA_ITEMS } from "../../data/media";
import { ArrowUpRight, Video, FileText, Play, Youtube } from "lucide-react";

export function MediaSection() {
  return (
    <section id="media" className="relative py-28 px-6 lg:px-12 bg-[#08090B] border-t border-[#242933]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono text-[#C9A46C] uppercase tracking-widest">
            FEATURED MEDIA &amp; DIALOGUES
          </span>
          <div className="h-[1px] w-12 bg-[#242933]" />
        </div>

        <div className="max-w-4xl mb-16">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#FAFAF8] leading-[1.08] mb-4">
            FEATURED MEDIA &amp; <br />
            <span className="font-serif italic font-normal text-[#C9A46C]">INTERVIEWS.</span>
          </h2>
          <p className="text-base text-[#969BA3] max-w-2xl leading-relaxed">
            Public symposium dialogues, expert media interviews, and semiconductor panel analyses on manufacturing feasibility, workforce readiness, and chiplet integration.
          </p>
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MEDIA_ITEMS.filter((item) => !item.hideOnHome).map((item) => {
            const isVideo = item.format === "Video Interview";
            const CardWrapper = item.url ? "a" : "div";
            const linkProps = item.url
              ? {
                  href: item.url,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  "aria-label": `${item.title} (opens in new tab)`
                }
              : {};

            return (
              <CardWrapper
                key={item.id}
                {...linkProps}
                className="group rounded-2xl bg-[#111317] border border-[#242933] hover:border-[#C9A46C]/60 transition-all flex flex-col justify-between shadow-lg overflow-hidden hover:shadow-2xl hover:shadow-[#C9A46C]/5"
              >
                <div>
                  {item.thumbnailUrl && (
                    <div className="relative aspect-video w-full overflow-hidden bg-[#08090B]">
                      <img
                        src={item.thumbnailUrl}
                        alt={item.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#111317] via-black/25 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                      
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-12 h-12 rounded-full bg-[#08090B]/85 backdrop-blur-md border border-[#C9A46C]/80 text-[#C9A46C] flex items-center justify-center shadow-[0_0_20px_rgba(201,164,108,0.35)] group-hover:scale-110 group-hover:bg-[#C9A46C] group-hover:text-[#08090B] transition-all duration-300">
                          <Play className="w-4 h-4 fill-current ml-0.5" />
                        </div>
                      </div>

                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#08090B]/90 backdrop-blur-md border border-[#C9A46C]/50 text-[11px] font-mono text-[#C9A46C] font-semibold">
                          <Video className="w-3 h-3 text-[#C9A46C]" />
                          <span>Video</span>
                        </span>
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#08090B]/90 backdrop-blur-md border border-[#242933] text-[10px] font-mono text-white/90">
                          <Youtube className="w-3 h-3 text-[#FF0000]" />
                          <span>YouTube</span>
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="p-7 sm:p-8">
                    {!item.thumbnailUrl && (
                      <div className="flex items-center justify-between mb-4">
                        <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#C9A46C] uppercase tracking-wider font-semibold">
                          {isVideo ? <Video className="w-3.5 h-3.5" /> : <FileText className="w-3.5 h-3.5" />}
                          {item.format}
                        </span>
                        <span className="text-xs font-mono text-[#66717D]">
                          {item.year}
                        </span>
                      </div>
                    )}

                    {item.thumbnailUrl && (
                      <div className="flex items-center justify-between mb-3 text-xs font-mono text-[#66717D]">
                        <span className="text-[#C9A46C] font-semibold tracking-wider uppercase text-[11px]">
                          {item.source}
                        </span>
                        <span>{item.year}</span>
                      </div>
                    )}

                    <h3 className="font-display text-xl font-bold text-[#FAFAF8] group-hover:text-[#C9A46C] transition-colors mb-3 leading-snug">
                      {item.title}
                    </h3>

                    {(item.speakers || item.featuredExpert) && (
                      <div className="mb-3 text-xs font-sans text-[#E1C58F]/90 bg-[#1B1E24] p-3 rounded-lg border border-[#242933]">
                        <span className="font-mono text-[10px] uppercase text-[#66717D] block mb-1">
                          {item.speakers ? "Speakers" : "Featured Expert"}
                        </span>
                        {item.speakers || item.featuredExpert}
                      </div>
                    )}

                    <p className="text-sm text-[#969BA3] leading-relaxed mb-6">
                      {item.summary}
                    </p>
                  </div>
                </div>

                <div className="px-7 pb-7 sm:px-8 sm:pb-8 pt-0">
                  <div className="pt-4 border-t border-[#242933]">
                    <div className="flex items-center justify-between text-xs font-mono text-[#66717D] mb-3">
                      <span className="truncate pr-2">PLATFORM: {item.source}</span>
                      {item.url && (
                        <span className="inline-flex items-center gap-1 text-[#C9A46C] text-[11px] shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform font-semibold">
                          <span>{isVideo ? "Watch Video" : "Open"}</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {item.topics.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded bg-[#1B1E24] border border-[#242933] text-[10px] font-mono text-[#969BA3]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
