import { useState } from "react";
import { EXPERTISE_CATEGORIES, EXPERTISE_NODES, ExpertiseNode } from "../../data/expertise";
import { CheckCircle2, Cpu, Sparkles } from "lucide-react";

export function ExpertiseSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeNodeId, setActiveNodeId] = useState<string>("chiplets");

  const filteredNodes =
    selectedCategory === "all"
      ? EXPERTISE_NODES
      : EXPERTISE_NODES.filter((n) => n.category === selectedCategory);

  const activeNode =
    EXPERTISE_NODES.find((n) => n.id === activeNodeId) || EXPERTISE_NODES[0];

  return (
    <section id="expertise" className="relative py-28 px-6 lg:px-12 bg-[#07090D] border-t border-[#1F2633]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono text-[#6FA8FF] uppercase tracking-widest">
            08 // COMPETENCY CONSTELLATION
          </span>
          <div className="h-[1px] w-12 bg-[#1F2633]" />
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#FAFAF8] leading-[1.08] mb-4">
              DEEP TECHNOLOGY. <br />
              <span className="text-[#A8B0BA]">STRATEGIC PERSPECTIVE.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#A8B0BA] max-w-xl leading-relaxed">
              An architectural knowledge graph interconnecting transistor-level physics, multi-die advanced packaging standards, OSAT manufacturing economics, and national semiconductor roadmaps.
            </p>
          </div>

          {/* Category Filters (Segmented Functional Buttons) */}
          <div className="flex flex-wrap gap-1.5 p-1.5 bg-[#0D1117] border border-[#1F2633] rounded-xl max-w-xl">
            {EXPERTISE_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all focus:outline-none focus-visible:ring-1 focus-visible:ring-[#6FA8FF] whitespace-nowrap ${
                    isSelected
                      ? "bg-[#151A22] text-[#FAFAF8] font-medium border border-[#6FA8FF]/40 shadow-sm"
                      : "text-[#66717D] hover:text-[#A8B0BA]"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Constellation Matrix & Detail Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Nodes Canvas */}
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-2xl bg-[#0D1117] border border-[#1F2633] relative">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-[#66717D] uppercase tracking-wider">
                Active Nodes ({filteredNodes.length}) · Select to Traverse Linkages
              </span>
              <span className="text-xs font-mono text-[#D88A52]">
                CATEGORY: {selectedCategory.toUpperCase()}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {filteredNodes.map((node) => {
                const isActive = activeNodeId === node.id;
                const isRelated = activeNode.related.includes(node.id);

                return (
                  <button
                    key={node.id}
                    onClick={() => setActiveNodeId(node.id)}
                    className={`p-4 rounded-xl text-left border transition-all duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#6FA8FF] ${
                      isActive
                        ? "bg-[#151A22] border-[#6FA8FF] shadow-[0_0_16px_rgba(111,168,255,0.2)]"
                        : isRelated
                        ? "bg-[#151A22]/50 border-[#D88A52]/60"
                        : "bg-[#07090D] border-[#1F2633] hover:border-[#66717D]"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#66717D]">
                        {node.category}
                      </span>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#6FA8FF]" />
                      )}
                      {isRelated && !isActive && (
                        <span className="text-[10px] font-mono text-[#D88A52]">LINKED</span>
                      )}
                    </div>
                    <div className="font-display font-semibold text-sm text-[#FAFAF8] group-hover:text-[#6FA8FF]">
                      {node.label}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Detail Inspector Card */}
          <div className="lg:col-span-4 p-6 sm:p-8 rounded-2xl bg-[#0D1117] border border-[#1F2633] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono text-[#6FA8FF] uppercase tracking-wider">
                  {activeNode.category}
                </span>
                <span className="text-[#66717D]">·</span>
                <span className="text-xs font-mono text-[#A8B0BA]">Node Specification</span>
              </div>

              <h3 className="font-display text-2xl font-bold text-[#FAFAF8] tracking-tight mb-4">
                {activeNode.label}
              </h3>

              <p className="text-sm text-[#A8B0BA] leading-relaxed mb-6">
                {activeNode.description}
              </p>
            </div>

            <div className="border-t border-[#1F2633] pt-6">
              <div className="text-xs font-mono text-[#D88A52] uppercase tracking-wider mb-3">
                Interconnected Competency Nodes:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {activeNode.related.map((relId) => {
                  const target = EXPERTISE_NODES.find((n) => n.id === relId);
                  return (
                    <button
                      key={relId}
                      onClick={() => setActiveNodeId(relId)}
                      className="px-2.5 py-1 rounded bg-[#151A22] border border-[#1F2633] hover:border-[#6FA8FF] text-[11px] font-mono text-[#FAFAF8] transition-colors"
                    >
                      {target ? target.label : relId}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
