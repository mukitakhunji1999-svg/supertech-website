export type FeaturedProductItem = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
  ctaLabel: string;
};

export type FeaturedProductTab = {
  id: string;
  label: string;
  items: FeaturedProductItem[];
};

/** Paths are under `public/images/productimages` → `/images/productimages/...` on Vercel */
export const featuredProductTabs: FeaturedProductTab[] = [
  {
    id: "pumps",
    label: "Pumps",
    items: [
      {
        title: "Borewell pumps",
        description: "High-head configurations for borehole extraction with export-grade materials.",
        imageSrc: "/images/productimages/Borewell%20Submersible%20Pumps.jpeg",
        imageAlt: "Borewell pumps",
        href: "/products/borewell-submersible-pumps",
        ctaLabel: "Specifications →"
      },
      {
        title: "Openwell pumps",
        description: "Flooded suction designs for sump and reservoir applications.",
        imageSrc: "/images/productimages/Openwell%20Submersible%20Pumps.jpeg",
        imageAlt: "Openwell pumps",
        href: "/products/openwell-submersible-pumps",
        ctaLabel: "Catalogue →"
      },
      {
        title: "Centrifugal pumps",
        description: "End-suction and process variants for HVAC, circulation and transfer.",
        imageSrc: "/images/productimages/Centrifugal%20Pumps.jpeg",
        imageAlt: "Centrifugal pumps",
        href: "/products/centrifugal-pumps",
        ctaLabel: "View line →"
      },
      {
        title: "Sewage pumps",
        description: "Non-clog impellers for wastewater and lift-station duties.",
        imageSrc: "/images/productimages/Sewage%20Pumps.jpeg",
        imageAlt: "Sewage pumps",
        href: "/products/sewage-pumps",
        ctaLabel: "Enquire →"
      },
      {
        title: "Booster pumps",
        description: "Pressure boosting for towers, campuses and industrial headers.",
        imageSrc: "/images/productimages/Pressure%20Booster%20Pumps.jpeg",
        imageAlt: "Booster pumps",
        href: "/products/pressure-booster-pumps",
        ctaLabel: "Enquire →"
      },
      {
        title: "Multistage pumps",
        description: "High-pressure stacked stages for RO feed, boiler and industrial boost.",
        imageSrc: "/images/productimages/Horizontal%20Pumps.jpeg",
        imageAlt: "Multistage pumps",
        href: "/products/horizontal-pumps",
        ctaLabel: "View range →"
      }
    ]
  },
  {
    id: "valves",
    label: "Valves",
    items: [
      {
        title: "Ball valves",
        description: "Quarter-turn isolation for process and utility lines.",
        imageSrc: "/images/productimages/Valves/Ball%20Valves.jpeg",
        imageAlt: "Ball valves",
        href: "/products/ball-valves",
        ctaLabel: "Details →"
      },
      {
        title: "Butterfly valves",
        description: "Compact throttling and shutoff for large nominal bores.",
        imageSrc: "/images/productimages/Valves/Butterfly%20valves.jpeg",
        imageAlt: "Butterfly valves",
        href: "/products/butterfly-valves",
        ctaLabel: "Details →"
      },
      {
        title: "Non-return valves",
        description: "Swing, dual-plate and silent disc-lift check valves for pump discharge protection.",
        imageSrc: "/images/productimages/Valves/Pneumatic%20valve.jpeg",
        imageAlt: "Non-return valves (NRV)",
        href: "/products/nrv-valves",
        ctaLabel: "Details →"
      },
      {
        title: "Gate valves",
        description: "Full-bore isolation for pipeline integrity.",
        imageSrc: "/images/productimages/Valves/Gate%20Valves.jpeg",
        imageAlt: "Gate valves",
        href: "/products/gate-valves",
        ctaLabel: "Details →"
      }
    ]
  },
  {
    id: "panels",
    label: "Panels",
    items: [
      {
        title: "MCC panels",
        description: "Motor control centres with segregated bus zones.",
        imageSrc: "/images/productimages/PANELS/MCC%20panels.jpeg",
        imageAlt: "MCC panels",
        href: "/products/control-panels",
        ctaLabel: "Details →"
      },
      {
        title: "VFD panels",
        description: "Harmonic-aware variable-speed packages.",
        imageSrc: "/images/productimages/PANELS/VFD%20panels.jpeg",
        imageAlt: "VFD panels",
        href: "/products/vfd-panels",
        ctaLabel: "Details →"
      },
      {
        title: "PLC panels",
        description: "Structured I/O for automation and SCADA integration.",
        imageSrc: "/images/productimages/PANELS/PLC%20panels.jpeg",
        imageAlt: "PLC panels",
        href: "/products/automation-panels",
        ctaLabel: "Details →"
      }
    ]
  },
  {
    id: "cables",
    label: "Cables",
    items: [
      {
        title: "Submersible cables",
        description: "Elastomeric jackets for downhole electrical integrity.",
        imageSrc: "/images/productimages/CABLES/Submersible%20cables.jpeg",
        imageAlt: "Submersible cables",
        href: "/products/submersible-flat-cables",
        ctaLabel: "Details →"
      },
      {
        title: "Industrial cables",
        description: "Power, control and shielded constructions for plants.",
        imageSrc: "/images/productimages/CABLES/Industrial%20cables.jpeg",
        imageAlt: "Industrial cables",
        href: "/products/industrial-cables",
        ctaLabel: "Details →"
      }
    ]
  },
  {
    id: "solar",
    label: "Solar",
    items: [
      {
        title: "Solar PV panels",
        description: "High-irradiance modules for pumping and rooftop programmes.",
        imageSrc: "/images/productimages/SOLAR/Solar%20PV%20panels.jpeg",
        imageAlt: "Solar PV panels",
        href: "/products/solar-pv-modules",
        ctaLabel: "Solar systems →"
      },
      {
        title: "Solar pumping systems",
        description: "Integrated arrays, controllers and pump hydraulics.",
        imageSrc: "/images/productimages/SOLAR/Solar%20pumping%20systems.jpeg",
        imageAlt: "Solar pumping systems",
        href: "/products/solar-pumping-systems",
        ctaLabel: "Engineering sheet →"
      }
    ]
  }
];
