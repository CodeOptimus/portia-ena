export type Project = {
  slug: string;
  /** Shown above the title, e.g. role or engagement type */
  role?: string;
  title: string;
  /** Short card summary */
  description: string;
  year: string;
  tags: string[];
  /** Optional grouping label (e.g. Fintech / Ecommerce) */
  category?: "Fintech" | "Ecommerce" | "Web" | "Security" | "Other";
  /** Tools used to build the project */
  toolsUsed?: string[];
  /** Optional expanded details for the card */
  details?: {
    overview?: string;
    keyFeatures?: string[];
    highlights?: string[];
    nextImprovements?: string[];
  };
  url: string | null;
  repo: string | null;
};

export const projects: Project[] = [
  {
    slug: "pawnpal",
    role: "Frontend project · e-commerce",
    title: "PawnPal",
    description:
      "A React + Vite e-commerce storefront with product search, cart/checkout/payment flow, user dashboard, and a multi-step seller onboarding experience.",
    year: "2024",
    tags: ["React", "Vite", "React Router", "Context API"],
    category: "Ecommerce",
    toolsUsed: [
      "React 19",
      "Vite",
      "React Router DOM",
      "Context API",
      "localStorage",
      "CSS Modules",
      "react-icons",
      "react-slick + slick-carousel",
    ],
    details: {
      overview:
        "PawnPal is a modern e-commerce frontend built with React + Vite that simulates the complete “browse → cart → checkout → payment” shopping journey. The project focuses on multi-page navigation, reusable UI components, and persistent client-side state (cart + user session), while keeping the interface fast, clean, and mobile-friendly.\n\nIt includes a homepage storefront experience, product search, cart flows with quantity controls, checkout with delivery-method logic, a simulated payment screen, simulated auth UX (login/signup + OTP UI + session persistence), and a multi-step seller onboarding flow.",
      keyFeatures: [
        "Homepage storefront experience: hero, categories, new arrivals, hot deals (countdown), testimonials, sponsors, footer layout",
        "Product browsing + search via URL query params (e.g. ?q=...) with grid listing",
        "Cart flow: add-to-cart, quantity controls, remove items, checkout single item or all items",
        "Checkout: order summary + totals, delivery method selection (pickup vs doorstep) affecting charges, localStorage persistence for selected checkout items",
        "Payment (simulated): Mobile Money + Card UI, processing state + success popup, clears cart on success",
        "User auth UX (simulated): login/signup, OTP verification UI, session persistence + simple timeout/refresh limiting",
        "Seller onboarding (multi-step): terms → personal details → product upload with image preview",
      ],
      highlights: [
        "End-to-end UX: full customer journey so it feels like a real storefront, not static pages.",
        "State + persistence: cart and session behavior persists using Context + localStorage.",
        "Reusable components: consistent layout via shared sections (Navbar/Footer + homepage components).",
        "Routing + query-based search: shareable URLs and app-like navigation patterns.",
      ],
      nextImprovements: [
        "Replace hardcoded products with a real API + pagination/filtering",
        "Add real authentication and secure session handling (JWT/cookies)",
        "Integrate a real payment gateway (Paystack/Stripe) instead of simulated processing",
        "Improve cart behavior (merge duplicates, compute totals consistently)",
        "Add tests (React Testing Library) and accessibility checks",
      ],
    },
    url: "https://pawnpal.vercel.app/",
    repo: null,
  },
  {
    slug: "checkout-engine",
    role: "Fintech project · payments UX",
    title: "Checkout & payment flow UI",
    description:
      "A conversion-focused checkout UI with multi-step forms, validation, saved payment methods, and transaction state handling.",
    year: "2026",
    tags: ["TypeScript", "React", "Forms"],
    category: "Fintech",
    toolsUsed: ["React", "TypeScript", "Zod", "React Hook Form", "Vite", "Tailwind CSS"],
    details: {
      overview:
        "A fintech-style checkout experience that emphasizes clear form UX, resilient state transitions (idle → processing → success/failure), and safe client-side validation patterns.",
      keyFeatures: [
        "Multi-step checkout with progress indicator",
        "Field validation + inline error states",
        "Saved payment methods UI + add-new-card flow",
        "Transaction status handling with retry states",
      ],
    },
    url: null,
    repo: null,
  },
  {
    slug: "wallet-dashboard",
    role: "Fintech project · dashboard",
    title: "Wallet dashboard",
    description:
      "A responsive wallet dashboard with balances, recent transactions, filters, export, and privacy-friendly display controls.",
    year: "2026",
    tags: ["React", "UI", "Data viz"],
    category: "Fintech",
    toolsUsed: ["React", "TypeScript", "Charting library", "Vite", "CSS Modules"],
    details: {
      overview:
        "A dashboard-style interface for fintech products that prioritizes clarity, fast scanning, and mobile usability for transaction history.",
      keyFeatures: [
        "Balances and account cards",
        "Transaction list with filters and search",
        "Export/download UI (CSV) + empty/loading states",
        "Privacy mode (hide/show sensitive values)",
      ],
    },
    url: null,
    repo: null,
  },
  {
    slug: "kyc-onboarding",
    role: "Fintech project · onboarding",
    title: "KYC onboarding flow",
    description:
      "A guided onboarding flow that collects identity details, document uploads, and review states with strong UX and constraints.",
    year: "2026",
    tags: ["React", "UX", "Uploads"],
    category: "Fintech",
    toolsUsed: ["React", "TypeScript", "File upload UI", "Form validation", "Vite"],
    details: {
      overview:
        "A multi-step onboarding/KYC UI that demonstrates careful UX around sensitive inputs, document capture, and review workflows.",
      keyFeatures: [
        "Step-by-step identity capture with validation",
        "Document upload UI with previews and constraints",
        "Review and submission states",
        "Error handling + resume flow patterns",
      ],
    },
    url: null,
    repo: null,
  },
  {
    slug: "ecommerce-admin",
    role: "Ecommerce project · admin",
    title: "Store admin (inventory & orders)",
    description:
      "A lightweight admin UI for inventory, product creation, and order status updates with filtering and bulk actions.",
    year: "2026",
    tags: ["React", "CRUD", "Tables"],
    category: "Ecommerce",
    toolsUsed: ["React", "TypeScript", "Vite", "Table UI", "Form validation"],
    details: {
      overview:
        "An e-commerce admin interface focused on the practical workflows that power a storefront: inventory, product CRUD, and order management.",
      keyFeatures: [
        "Product creation/editing with image previews",
        "Inventory count updates + bulk actions",
        "Orders table with filters and status transitions",
        "Empty/loading/error states designed for ops flow",
      ],
    },
    url: null,
    repo: null,
  },
  {
    slug: "portfolio-platform",
    role: "Lead developer",
    title: "Portfolio & dual-site platform",
    description:
      "This site—fast React/Next UI with a dedicated security corner for writeups, certs, and research.",
    year: "2026",
    tags: ["Next.js", "React", "AppSec"],
    url: null,
    repo: "https://github.com/CodeOptimus",
  },
  {
    slug: "secure-product-work",
    role: "Frontend engineer · security-minded delivery",
    title: "Web apps with defense in depth",
    description:
      "Shipping product UI while baking in sensible auth, headers, dependency hygiene, and review-friendly patterns.",
    year: "2025",
    tags: ["TypeScript", "APIs", "OWASP-minded"],
    url: null,
    repo: null,
  },
  {
    slug: "labs-and-tooling",
    role: "Security tooling & labs",
    title: "Scripts, labs, and CTF workflow",
    description:
      "Automation and small tools that speed up recon, parsing, and repeatable checks during hands-on practice.",
    year: "2025",
    tags: ["Python", "CTF", "Automation"],
    url: null,
    repo: null,
  },
];