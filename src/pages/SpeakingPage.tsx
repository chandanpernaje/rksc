import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, BookOpen, Calendar, ChevronLeft, ChevronRight, Clock, FileText, MapPin, Mic, Play, Presentation, Sparkles, Users, Video, Volume2, Youtube } from "lucide-react";
import { SPEAKING_ENGAGEMENTS } from "../data/speaking";
import { MEDIA_ITEMS } from "../data/media";

export function SpeakingPage() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeSlide, setActiveSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(2);

  const featuredMedia = MEDIA_ITEMS.filter((item) => item.url);

  const checkScroll = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setCanScrollLeft(scrollLeft > 12);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 12);

    const isDesktop = clientWidth >= 768;
    const visibleCards = isDesktop ? 2 : 1;
    const slidesCount = Math.max(1, featuredMedia.length - visibleCards + 1);
    setTotalSlides(slidesCount);

    const cardStep = isDesktop ? (clientWidth - 32) / 2 + 32 : clientWidth;
    const index = Math.round(scrollLeft / cardStep);
    setActiveSlide(Math.min(Math.max(0, index), slidesCount - 1));
  };

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    checkScroll();
    const timer = setTimeout(checkScroll, 100);
    window.addEventListener("resize", checkScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", checkScroll);
    };
  }, [featuredMedia.length]);

  const handleScroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;
    const { clientWidth } = carouselRef.current;
    const scrollAmount = clientWidth >= 768 ? (clientWidth - 32) / 2 + 32 : clientWidth;
    carouselRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth"
    });
  };

  const speakingTopics = [
    {
      title: "Semiconductor Strategy & Sovereignty",
      audience: "Government Ministers, Foundry Executives & Institutional Investors",
      summary: "Strategic frameworks for capital deployment, fabless-to-OSAT integration, and sovereign supply-chain resilience."
    },
    {
      title: "Advanced Packaging & Post-Moore Architectures",
      audience: "System Architects, Hardware Engineering Leaders & Cleanroom Operators",
      summary: "Technical and commercial economics of 2.5D/3D interposers, modular chiplets, through-silicon vias, and high-density substrates."
    },
    {
      title: "India's Semiconductor Opportunity",
      audience: "Bilateral Trade Conclaves, Policy Task Forces & Industry Bodies",
      summary: "Actionable roadmaps to transition India's 20% global chip design talent into physical packaging and domestic manufacturing ownership."
    },
    {
      title: "Manufacturing & OSAT Scale-Up",
      audience: "EMS Providers, Factory Directors & Operations Leaders",
      summary: "Navigating cleanroom ramp-ups, yield defect reduction, known-good-die testing, and high-reliability automotive/defense qualification."
    },
    {
      title: "Workforce & Curricular Modernization",
      audience: "Academic Deans, University Boards & Engineering Faculties",
      summary: "Restructuring university engineering syllabi to supply thousands of cleanroom-ready engineers for emerging fab and OSAT facilities."
    },
    {
      title: "Technology Leadership & Cross-Border Deals",
      audience: "High-Tech CEOs, Founders & Deep-Tech Entrepreneurs",
      summary: "Lessons from 30 years scaling cross-border engineering teams across North America and India."
    }
  ];

  return (
    <div className="pt-28 pb-24">
      {/* Editorial Page Header */}
      <section className="px-6 lg:px-12 py-16 bg-[#08090B] border-b border-[#242933]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-[#C9A46C] uppercase tracking-widest">
              PUBLIC ADDRESSES &amp; KEYNOTES
            </span>
            <div className="h-[1px] w-12 bg-[#242933]" />
          </div>

          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#FAFAF8] leading-[1.05] mb-6">
            IDEAS WORTH <br />
            <span className="font-serif italic font-normal text-[#C9A46C]">SHARING.</span>
          </h1>

          <p className="text-lg sm:text-xl text-[#969BA3] max-w-2xl leading-relaxed">
            Conversations on technology, leadership, semiconductors and India's evolving industrial ecosystem.
          </p>
        </div>
      </section>

      {/* Core Keynote Topics */}
      <section className="py-20 px-6 lg:px-12 bg-[#08090B]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12">
            <div className="text-xs font-mono text-[#C9A46C] uppercase tracking-widest mb-3">
              REPERTOIRE OF KEYNOTES
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#FAFAF8]">
              Speaking &amp; Briefing Topics
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {speakingTopics.map((topic, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl bg-[#111317] border border-[#242933] hover:border-[#C9A46C]/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="p-2.5 rounded-lg bg-[#1B1E24] text-[#C9A46C] w-fit mb-4">
                    <Presentation className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#FAFAF8] mb-3">
                    {topic.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#969BA3] leading-relaxed mb-6">
                    {topic.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#242933]">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#C9A46C] mb-1">
                    Target Forum Audience:
                  </div>
                  <div className="text-xs font-sans text-[#FAFAF8]">
                    {topic.audience}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Media & Expert Interviews */}
      <section className="py-20 px-6 lg:px-12 bg-[#08090B]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <div className="text-xs font-mono text-[#C9A46C] uppercase tracking-widest mb-3">
                FEATURED MEDIA
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#FAFAF8]">
                Interviews &amp; Media Appearances
              </h2>
              <p className="text-sm text-[#969BA3] mt-2">
                Broadcast dialogues, technical publications, and industry interviews discussing India's semiconductor manufacturing ecosystem and product design innovation.
              </p>
            </div>

            {/* Slide Counter */}
            <div className="text-xs font-mono text-[#66717D] shrink-0">
              <span className="text-[#C9A46C] font-semibold">0{activeSlide + 1}</span> / 0{totalSlides}
            </div>
          </div>

          {/* 2-Card Carousel with Side Navigation Controls */}
          <div className="relative">
            {/* Left Sliding Button */}
            <button
              type="button"
              onClick={() => handleScroll("left")}
              disabled={!canScrollLeft}
              aria-label="Previous card"
              className="absolute -left-3 sm:-left-5 lg:-left-6 top-1/2 -translate-y-1/2 z-20 p-3 sm:p-3.5 rounded-full bg-[#111317]/95 backdrop-blur-md border border-[#242933] text-[#FAFAF8] hover:border-[#C9A46C] hover:text-[#C9A46C] disabled:opacity-20 disabled:cursor-not-allowed transition-all shadow-xl hover:scale-105"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* 2-Card Carousel Track */}
            <div
              ref={carouselRef}
              onScroll={checkScroll}
              className="flex gap-8 overflow-x-auto scroll-smooth scrollbar-none snap-x snap-mandatory pb-4 pt-1"
            >
            {featuredMedia.map((media) => {
              const isVideo = media.format === "Video Interview";
              const isRoundtable = media.format === "Leadership Roundtable";
              const isLinkedIn = media.url?.includes("lnkd.in") || media.url?.includes("linkedin");
              return (
                <div
                  key={media.id}
                  className="w-full md:w-[calc(50%-1rem)] shrink-0 snap-start flex"
                >
                  <a
                    href={media.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-2xl bg-[#111317] border border-[#242933] hover:border-[#C9A46C]/60 transition-all flex flex-col justify-between shadow-xl overflow-hidden hover:shadow-2xl hover:shadow-[#C9A46C]/5 w-full"
                  >
                    <div className="flex-1 flex flex-col">
                      {/* Visual Media Header */}
                      {media.thumbnailUrl ? (
                        <div className="relative aspect-video w-full overflow-hidden bg-[#08090B] shrink-0">
                          <img
                            src={media.thumbnailUrl}
                            alt={media.title}
                            referrerPolicy="no-referrer"
                            className={`w-full h-full ${media.thumbnailFit === "contain" ? "object-contain" : "object-cover"} ${media.thumbnailPosition || "object-center"} group-hover:scale-105 transition-transform duration-500 ease-out`}
                          />
                          {/* Gradient overlay for depth */}
                          <div className="absolute inset-0 bg-gradient-to-t from-[#111317] via-black/35 to-transparent opacity-85 group-hover:opacity-65 transition-opacity" />

                          {/* Interactive Center Badge Overlay */}
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            {isVideo ? (
                              <div className="w-14 h-14 rounded-full bg-[#08090B]/85 backdrop-blur-md border border-[#C9A46C]/80 text-[#C9A46C] flex items-center justify-center shadow-[0_0_24px_rgba(201,164,108,0.35)] group-hover:scale-110 group-hover:bg-[#C9A46C] group-hover:text-[#08090B] transition-all duration-300">
                                <Play className="w-5 h-5 fill-current ml-0.5" />
                              </div>
                            ) : (
                              <div className="px-4 py-2 rounded-full bg-[#08090B]/85 backdrop-blur-md border border-[#C9A46C]/80 text-[#C9A46C] flex items-center gap-2 shadow-[0_0_24px_rgba(201,164,108,0.35)] group-hover:scale-105 group-hover:bg-[#C9A46C] group-hover:text-[#08090B] transition-all duration-300">
                                <BookOpen className="w-4 h-4 text-current" />
                                <span className="text-xs font-mono font-semibold uppercase tracking-wider">
                                  {isRoundtable ? "View Discussion" : "Read Full Article"}
                                </span>
                              </div>
                            )}
                          </div>

                          {/* Floating Top Badges */}
                          <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#08090B]/85 backdrop-blur-md border border-[#C9A46C]/50 text-xs font-mono text-[#C9A46C] font-semibold shadow-md">
                              {isRoundtable ? (
                                <>
                                  <Users className="w-3.5 h-3.5 text-[#C9A46C]" />
                                  <span>Leadership Roundtable</span>
                                </>
                              ) : isVideo ? (
                                <>
                                  <Video className="w-3.5 h-3.5 text-[#C9A46C]" />
                                  <span>Video Interview</span>
                                </>
                              ) : (
                                <>
                                  <FileText className="w-3.5 h-3.5 text-[#C9A46C]" />
                                  <span>Published Interview</span>
                                </>
                              )}
                            </div>
                            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#08090B]/85 backdrop-blur-md border border-[#242933] text-[11px] font-mono text-white/90 shadow-md">
                              {isLinkedIn ? (
                                <>
                                  <span className="w-2 h-2 rounded-full bg-[#0A66C2]" />
                                  <span>LinkedIn</span>
                                </>
                              ) : isVideo ? (
                                <>
                                  <Youtube className="w-3.5 h-3.5 text-[#FF0000]" />
                                  <span>YouTube</span>
                                </>
                              ) : (
                                <>
                                  <Clock className="w-3.5 h-3.5 text-[#C9A46C]" />
                                  <span>{media.readTime || "6 min read"}</span>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      ) : (
                        /* Editorial Header Fallback */
                        <div className="relative h-44 w-full bg-gradient-to-br from-[#181B22] via-[#0E1015] to-[#08090B] border-b border-[#242933] p-6 flex flex-col justify-between overflow-hidden shrink-0">
                          <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-[#C9A46C]/10 blur-2xl pointer-events-none" />
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#08090B]/85 border border-[#C9A46C]/40 text-xs font-mono text-[#C9A46C] font-semibold">
                              <FileText className="w-3.5 h-3.5" />
                              <span>{media.format}</span>
                            </div>
                            <span className="text-xs font-mono text-[#66717D]">{media.year}</span>
                          </div>
                          <div className="flex items-center gap-2 text-xs font-mono text-[#C9A46C]">
                            <BookOpen className="w-4 h-4" />
                            <span className="uppercase tracking-wider">Expert Editorial Dialogue</span>
                          </div>
                        </div>
                      )}

                      {/* Card Content Body */}
                      <div className="p-7 sm:p-9 flex-1 flex flex-col">
                        <div className="flex items-center justify-between mb-3 text-xs font-mono text-[#66717D]">
                          <span className="text-[#C9A46C] font-semibold tracking-wider uppercase text-[11px]">
                            {media.source}
                          </span>
                          <span className="flex items-center gap-2">
                            {media.readTime && <span>{media.readTime}</span>}
                            <span>•</span>
                            <span>{media.year}</span>
                          </span>
                        </div>

                        <h3 className="font-display text-xl sm:text-2xl font-bold text-[#FAFAF8] group-hover:text-[#C9A46C] transition-colors mb-3.5 leading-snug">
                          {media.title}
                        </h3>

                        {(media.moderatedBy || media.speakers || media.featuredExpert) && (
                          <div className="mb-4 text-xs font-sans text-[#E1C58F]/90 bg-[#1B1E24] p-3.5 rounded-xl border border-[#242933]">
                            <span className="font-mono text-[10px] uppercase text-[#66717D] block mb-1">
                              {media.moderatedBy ? "Moderated By" : media.speakers ? "Speakers" : "Featured Expert"}
                            </span>
                            {media.moderatedBy || media.speakers || media.featuredExpert}
                          </div>
                        )}

                        <p className="text-sm text-[#969BA3] leading-relaxed mb-5">
                          {media.summary}
                        </p>

                        {/* Key Discussion Pillars & Strategic Insights */}
                        {media.keyTakeaways && media.keyTakeaways.length > 0 && (
                          <div className="mt-auto mb-2 p-4 rounded-xl bg-[#1B1E24] border border-[#242933] space-y-2.5">
                            <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-[#C9A46C] font-semibold">
                              <Sparkles className="w-3 h-3 text-[#C9A46C]" />
                              <span>Core Discussion Pillars &amp; Insights</span>
                            </div>
                            <ul className="space-y-1.5 text-xs text-[#969BA3]">
                              {media.keyTakeaways.map((point, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <span className="text-[#C9A46C] font-mono text-[10px] mt-0.5 shrink-0">❖</span>
                                  <span className="leading-snug text-[#969BA3]">{point}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Card Bottom Action Bar */}
                    <div className="px-7 pb-7 sm:px-9 sm:pb-9 pt-0">
                      <div className="pt-4 border-t border-[#242933]">
                        <div className="flex items-center justify-between text-xs font-mono text-[#66717D] mb-3">
                          <span className="truncate pr-2">PLATFORM: {media.source}</span>
                          <span className="inline-flex items-center gap-1.5 text-[#C9A46C] text-xs shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform font-semibold">
                            <span>
                              {isLinkedIn
                                ? "View on LinkedIn"
                                : isVideo
                                ? "Watch Interview"
                                : "Read Full Article"}
                            </span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {media.topics.map((t) => (
                            <span
                              key={t}
                              className="px-2.5 py-0.5 rounded bg-[#1B1E24] border border-[#242933] text-[10px] font-mono text-[#969BA3]"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>

          {/* Right Sliding Button */}
          <button
            type="button"
            onClick={() => handleScroll("right")}
            disabled={!canScrollRight}
            aria-label="Next card"
            className="absolute -right-3 sm:-right-5 lg:-right-6 top-1/2 -translate-y-1/2 z-20 p-3 sm:p-3.5 rounded-full bg-[#111317]/95 backdrop-blur-md border border-[#242933] text-[#FAFAF8] hover:border-[#C9A46C] hover:text-[#C9A46C] disabled:opacity-20 disabled:cursor-not-allowed transition-all shadow-xl hover:scale-105"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

          {/* Carousel Pagination Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {Array.from({ length: totalSlides }).map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                onClick={() => {
                  if (!carouselRef.current) return;
                  const { scrollWidth, clientWidth } = carouselRef.current;
                  const isDesktop = clientWidth >= 768;
                  const cardStep = isDesktop ? (clientWidth - 32) / 2 + 32 : clientWidth;
                  const targetLeft =
                    dotIdx === totalSlides - 1
                      ? scrollWidth - clientWidth
                      : dotIdx * cardStep;
                  carouselRef.current.scrollTo({ left: targetLeft, behavior: "smooth" });
                }}
                aria-label={`Go to slide ${dotIdx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeSlide === dotIdx ? "w-8 bg-[#C9A46C]" : "w-2 bg-[#242933] hover:bg-[#66717D]"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Verified Historical Engagements */}
      <section className="py-20 px-6 lg:px-12 bg-[#111317] border-y border-[#242933]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16">
            <div className="text-xs font-mono text-[#C9A46C] uppercase tracking-widest mb-3">
              VERIFIED ENGAGEMENTS
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#FAFAF8]">
              Selected Public Addresses &amp; Symposia
            </h2>
            <p className="text-sm text-[#969BA3] mt-2">
              Verified addresses, symposium chairmanships, and panel discussions on microelectronics and policy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SPEAKING_ENGAGEMENTS.map((item, idx) => (
              <div
                key={item.id}
                className="p-8 sm:p-10 rounded-2xl bg-[#08090B] border border-[#242933] hover:border-[#C9A46C]/60 transition-all flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2 px-3 py-1 rounded bg-[#1B1E24] border border-[#242933] text-xs font-mono text-[#C9A46C]">
                      <Mic className="w-3.5 h-3.5" />
                      <span>{item.format}</span>
                    </div>
                    <span className="text-xs font-mono text-[#66717D] tabular-nums">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#FAFAF8] tracking-tight mb-4 leading-snug">
                    {item.topic}
                  </h3>

                  <p className="text-sm text-[#969BA3] leading-relaxed mb-8">
                    {item.summary}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#242933] space-y-2">
                  <div className="text-sm font-mono text-[#FAFAF8] font-semibold">
                    {item.event}
                  </div>
                  <div className="flex flex-wrap items-center justify-between text-xs font-mono text-[#66717D] gap-2">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#C9A46C]" />
                      {item.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#C9A46C]" />
                      {item.year}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 sm:p-10 rounded-2xl bg-[#1B1E24]/60 border border-[#242933] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#FAFAF8] mb-2">
                Inquire for Keynote or Panel Participation
              </h3>
              <p className="text-sm text-[#969BA3]">
                Available for industry summits, corporate strategy retreats, and academic leadership convocations.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#C9A46C] text-[#08090B] font-mono text-xs font-bold tracking-wider uppercase hover:bg-[#E1C58F] transition-all whitespace-nowrap"
            >
              <span>Submit Speaking Request</span>
              <ArrowRight className="w-4 h-4 text-[#08090B]" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
