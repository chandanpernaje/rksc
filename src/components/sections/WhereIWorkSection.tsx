import React from "react";
import { Link } from "react-router-dom";
import fig2AdvancedPackaging from "../../assets/images/regenerated_image_1791462301355.png";
import fig3ManufacturingTest from "../../assets/images/regenerated_image_1791462316127.png";
import fig4Ecosystems from "../../assets/images/regenerated_image_1791462339533.png";

export function WhereIWorkSection() {
  const cards = [
    {
      title: "Advanced packaging",
      description: "2.5D/3D, chiplets, OSAT partners.",
      image: fig2AdvancedPackaging,
      alt: "Advanced packaging 2.5D and 3D chiplets",
      path: "/services"
    },
    {
      title: "Manufacturing & test",
      description: "Cleanroom readiness to volume yield.",
      image: fig3ManufacturingTest,
      alt: "Semiconductor cleanroom manufacturing and testing",
      path: "/services"
    },
    {
      title: "Ecosystems",
      description: "Industry, government, academia, capital.",
      image: fig4Ecosystems,
      alt: "Semiconductor global ecosystems and capital networks",
      path: "/services"
    }
  ];

  return (
    <section id="where-i-work" className="relative py-20 lg:py-24 px-6 lg:px-12 bg-[#08090B] border-t border-[#1E2638]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between gap-6 mb-12">
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#FAFAF8]">
            Where we work.
          </h2>

          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-sans font-medium text-[#38BDF8] hover:text-[#7DD3FC] transition-colors group"
          >
            <span>All services</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card) => (
            <Link
              key={card.title}
              to={card.path}
              className="group flex flex-col focus:outline-none"
            >
              {/* Image Frame */}
              <div className="relative rounded-xl overflow-hidden border border-[#1E2638] bg-[#111317] aspect-[4/3] mb-4 shadow-lg group-hover:border-[#38BDF8]/50 transition-colors">
                <img
                  src={card.image}
                  alt={card.alt}
                  className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Meta Caption */}
              <div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-[#FAFAF8] group-hover:text-[#38BDF8] transition-colors mb-1">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#969BA3] leading-relaxed">
                  {card.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
