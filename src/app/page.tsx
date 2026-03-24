import { NewsletterForm } from "./newsletter-form";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ToolsGrid />
        <WhyDevKit />
        <HowItWorks />
        <Pricing />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*  Nav                                                                       */
/* -------------------------------------------------------------------------- */

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 h-16">
        <a
          href="#"
          className="flex items-center gap-2.5 font-semibold text-base tracking-tight text-gray-300"
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 28 28"
            fill="none"
            aria-hidden="true"
          >
            <rect width="28" height="28" rx="7" fill="#6366f1" />
            <path
              d="M8 10h12M8 14h8M8 18h10"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          DevKit
        </a>

        <nav
          className="hidden md:flex items-center gap-8 text-sm text-gray-500"
          aria-label="Main"
        >
          <a href="#tools" className="hover:text-gray-300 transition-colors">
            Tools
          </a>
          <a href="#pricing" className="hover:text-gray-300 transition-colors">
            Pricing
          </a>
          <a
            href="https://github.com/codewprincee/devkit"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            GitHub
          </a>
          <a
            href="#download"
            className="inline-flex items-center justify-center rounded-lg bg-indigo-500 px-5 py-2 text-sm font-medium text-white hover:bg-indigo-400 transition-colors"
          >
            Download
          </a>
        </nav>
      </div>
    </header>
  );
}

/* -------------------------------------------------------------------------- */
/*  Hero                                                                      */
/* -------------------------------------------------------------------------- */

function Hero() {
  return (
    <section
      id="download"
      className="pt-36 pb-24 sm:pt-44 sm:pb-32"
    >
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="animate-fade-in">
          <p className="inline-flex items-center gap-2 rounded-full border border-border-bright bg-surface px-4 py-1.5 text-xs font-medium text-gray-400 font-mono tracking-wide mb-10">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-500" />
            Now available for macOS
          </p>
        </div>

        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-[-0.04em] leading-[0.95] text-white animate-fade-in-delay-1">
          The developer
          <br />
          toolbox for macOS
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg sm:text-xl leading-relaxed text-gray-400 animate-fade-in-delay-2">
          Replace 10 terminal commands with one native app. Five beautifully
          crafted developer tools &mdash; port manager, env file guard, API
          client, log viewer, and service dashboard &mdash; all in a
          single 5&nbsp;MB download.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-delay-3">
          <a
            href="https://github.com/codewprincee/devkit/releases/latest"
            className="inline-flex items-center justify-center rounded-lg bg-indigo-500 px-8 py-3.5 text-sm font-medium text-white hover:bg-indigo-400 transition-colors"
          >
            <svg
              className="mr-2 h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M10 2a1 1 0 011 1v8.586l2.293-2.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 11.586V3a1 1 0 011-1z" />
              <path d="M4 15a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1z" />
            </svg>
            Download for macOS
          </a>
          <a
            href="https://apipad-web.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-border-bright px-8 py-3.5 text-sm font-medium text-gray-300 hover:border-gray-600 hover:bg-surface transition-colors"
          >
            Try API Pad in Browser
          </a>
        </div>

        <div className="mt-4 flex items-center justify-center gap-4 animate-fade-in-delay-3">
          <a
            href="https://github.com/codewprincee/devkit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-300 transition-colors"
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            View on GitHub
          </a>
        </div>

        <p className="mt-6 text-xs text-gray-600 font-mono animate-fade-in-delay-3">
          Free &amp; open source &middot; AGPL-3.0 &middot; macOS 12+
        </p>

        {/* Terminal preview */}
        <div className="mt-14 mx-auto max-w-xl animate-fade-in-delay-4">
          <div className="rounded-xl border border-border-bright bg-surface overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
              <span className="h-3 w-3 rounded-full bg-rose-500/60" />
              <span className="h-3 w-3 rounded-full bg-amber-400/60" />
              <span className="h-3 w-3 rounded-full bg-green-500/60" />
              <span className="ml-2 text-xs text-gray-600 font-mono">Terminal</span>
            </div>
            <div className="px-5 py-4 text-left font-mono text-sm leading-7 text-gray-400">
              <p className="terminal-line text-gray-300">brew install --cask devkit</p>
              <p>
                <span className="text-green-400">&raquo;</span> Downloading DevKit.dmg (4.8 MB)
              </p>
              <p>
                <span className="text-green-400">&raquo;</span> Installing DevKit
              </p>
              <p>
                <span className="text-green-400">&raquo;</span>{" "}
                <span className="text-gray-300">devkit installed successfully</span>
              </p>
              <p className="terminal-line text-gray-300">devkit --status</p>
              <p>
                <span className="text-indigo-400">PortMan</span>{" "}
                <span className="text-green-400">ready</span> &middot;{" "}
                <span className="text-indigo-400">EnvGuard</span>{" "}
                <span className="text-green-400">ready</span> &middot;{" "}
                <span className="text-indigo-400">API Pad</span>{" "}
                <span className="text-green-400">ready</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Tools Grid                                                                */
/* -------------------------------------------------------------------------- */

const tools = [
  {
    name: "PortMan",
    description:
      "See every listening port, kill rogue processes, and free up ports instantly.",
    status: "Available" as const,
    accent: "bg-indigo-500/10 text-indigo-400",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="3"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle cx="8" cy="12" r="2" fill="currentColor" />
        <circle cx="16" cy="12" r="2" fill="currentColor" />
        <path
          d="M10 12h4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "EnvGuard",
    description:
      "Manage, validate, diff, and encrypt your .env files across every project.",
    status: "Available" as const,
    accent: "bg-green-500/10 text-green-400",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path
          d="M12 2L4 7v5c0 5.25 3.4 10.2 8 11 4.6-.8 8-5.75 8-11V7l-8-5z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M9 12l2 2 4-4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "API Pad",
    description:
      "A 5 MB Postman alternative. Craft HTTP requests, inspect responses, save collections.",
    status: "Available" as const,
    accent: "bg-amber-500/10 text-amber-400",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path
          d="M4 6h16M4 12h16M4 18h10"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="19" cy="18" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M21 20l2 2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "LogLens",
    description:
      "Tail, search, and parse JSON logs in real time with syntax highlighting.",
    status: "Available" as const,
    accent: "bg-rose-500/10 text-rose-400",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path
          d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M14 2v6h6M8 13h8M8 17h5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "DevDash",
    description:
      "Docker containers, MongoDB collections, and Redis keys in one dashboard.",
    status: "Available" as const,
    accent: "bg-sky-500/10 text-sky-400",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <rect
          x="3"
          y="3"
          width="7"
          height="7"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <rect
          x="14"
          y="3"
          width="7"
          height="7"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <rect
          x="3"
          y="14"
          width="7"
          height="7"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <rect
          x="14"
          y="14"
          width="7"
          height="7"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
];

function ToolsGrid() {
  return (
    <section id="tools" className="py-24 sm:py-32 bg-surface">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-medium text-indigo-400 font-mono tracking-widest uppercase mb-3">
            Tools
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-[-0.03em] text-white">
            Five tools. One app.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-gray-400 leading-relaxed">
            Everything a developer needs, from port management to API testing,
            packaged in a single native application.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="bg-surface-raised border border-border rounded-2xl p-8 flex flex-col hover:border-border-bright transition-colors"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className={`flex items-center justify-center h-12 w-12 rounded-xl ${tool.accent}`}>
                  {tool.icon}
                </div>
                <h3 className="text-lg font-semibold text-white font-mono">
                  {tool.name}
                </h3>
              </div>

              <p className="text-sm leading-relaxed text-gray-400 flex-1">
                {tool.description}
              </p>

              <span
                className={`mt-6 inline-flex items-center gap-1.5 text-xs font-medium font-mono ${
                  tool.status === "Available"
                    ? "text-green-400"
                    : "text-gray-600"
                }`}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    tool.status === "Available"
                      ? "bg-green-400"
                      : "bg-gray-600"
                  }`}
                />
                {tool.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Why DevKit                                                                */
/* -------------------------------------------------------------------------- */

const reasons = [
  {
    title: "5 MB not 500 MB",
    description:
      "Built with Tauri and Rust. No Electron, no Chromium bloat. Starts in under a second and barely touches your RAM.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path
          d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Works offline",
    description:
      "No accounts, no telemetry, no cloud sync. Your data never leaves your machine. Open the app and start working.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path
          d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path d="M2 12h20" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10A15.3 15.3 0 0112 2z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    title: "Open source",
    description:
      "AGPL-3.0 licensed. Read the source, fork it, contribute. No vendor lock-in, no surprise pricing changes.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path
          d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

function WhyDevKit() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-medium text-indigo-400 font-mono tracking-widest uppercase mb-3">
            Why DevKit
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-[-0.03em] text-white">
            Why developers choose DevKit
          </h2>
          <p className="mt-5 text-base sm:text-lg text-gray-400 leading-relaxed">
            Built for developers who value speed, privacy, and simplicity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-surface border border-border rounded-2xl p-8 hover:border-border-bright transition-colors"
            >
              <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-indigo-500/10 text-indigo-400 mb-6">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold text-white">
                {reason.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  How It Works                                                              */
/* -------------------------------------------------------------------------- */

const steps = [
  {
    step: "1",
    title: "Download",
    description:
      "Grab the .dmg from GitHub Releases. One file, under 5 MB.",
  },
  {
    step: "2",
    title: "Launch",
    description:
      "Drag to Applications and open. No sign-up, no config, no waiting.",
  },
  {
    step: "3",
    title: "Ship faster",
    description:
      "Manage ports, env files, APIs, logs, and services from one window.",
  },
];

function HowItWorks() {
  return (
    <section className="py-24 sm:py-32 bg-surface">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-medium text-indigo-400 font-mono tracking-widest uppercase mb-3">
            Get started
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-[-0.03em] text-white">
            Up and running in 30 seconds
          </h2>
          <p className="mt-5 text-base sm:text-lg text-gray-400 leading-relaxed">
            No dependencies, no setup wizards, no accounts required.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
          {steps.map((item) => (
            <div key={item.step} className="step-connector">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-500 text-white text-lg font-bold mb-6">
                {item.step}
              </div>
              <h3 className="text-xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Pricing                                                                   */
/* -------------------------------------------------------------------------- */

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Everything you need to get started.",
    cta: "Download Free",
    highlighted: false,
    features: [
      "All 5 developer tools",
      "Unlimited projects",
      "Works completely offline",
      "Community support",
      "Open source (AGPL-3.0)",
    ],
  },
  {
    name: "Pro",
    price: "$8",
    period: "/dev/mo",
    description: "For power users who want more.",
    cta: "Get Pro",
    highlighted: true,
    features: [
      "Everything in Free",
      "Priority tool updates",
      "Advanced env encryption",
      "Request history & collections",
      "Log search & bookmarks",
      "Email support",
    ],
  },
  {
    name: "Team",
    price: "$15",
    period: "/dev/mo",
    description: "Collaborate across your team.",
    cta: "Contact Sales",
    highlighted: false,
    features: [
      "Everything in Pro",
      "Shared env vaults",
      "Team API collections",
      "Centralized config",
      "SSO & SAML",
      "Dedicated support",
    ],
  },
];

function Pricing() {
  return (
    <section id="pricing" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-medium text-indigo-400 font-mono tracking-widest uppercase mb-3">
            Pricing
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-[-0.03em] text-white">
            Simple, transparent pricing
          </h2>
          <p className="mt-5 text-base sm:text-lg text-gray-400 leading-relaxed">
            Start free. Upgrade when you need more power.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl p-8 sm:p-10 flex flex-col border ${
                tier.highlighted
                  ? "border-indigo-500/50 bg-surface-raised shadow-lg shadow-indigo-500/5 relative"
                  : "border-border bg-surface"
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-white font-mono">
                  {tier.name}
                </h3>
                {tier.highlighted && (
                  <span className="text-[10px] font-medium font-mono text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-full">
                    Popular
                  </span>
                )}
              </div>
              <p className="mt-2 text-sm text-gray-500">{tier.description}</p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold tracking-tight text-white">
                  {tier.price}
                </span>
                <span className="text-sm text-gray-500 font-mono">
                  {tier.period}
                </span>
              </div>

              <ul className="mt-8 space-y-3 flex-1">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-gray-400"
                  >
                    <svg
                      className="mt-0.5 h-4 w-4 flex-shrink-0 text-indigo-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#download"
                className={`mt-8 block w-full rounded-lg py-3 text-center text-sm font-medium transition-colors ${
                  tier.highlighted
                    ? "bg-indigo-500 text-white hover:bg-indigo-400"
                    : "border border-border-bright text-gray-300 hover:border-gray-600 hover:bg-surface-raised"
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Newsletter                                                                */
/* -------------------------------------------------------------------------- */

function Newsletter() {
  return (
    <section className="py-24 sm:py-32 bg-surface">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-xl bg-surface-raised rounded-2xl border border-border p-10 sm:p-12 text-center">
          <p className="text-xs font-medium text-indigo-400 font-mono tracking-widest uppercase mb-3">
            Stay updated
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-[-0.02em] text-white">
            Get notified when new tools ship
          </h2>
          <p className="mt-4 text-base text-gray-400 leading-relaxed">
            Join the mailing list. We&rsquo;ll send one email when new tools
            and features ship. No spam, ever.
          </p>

          <NewsletterForm />

          <p className="mt-4 text-xs text-gray-600">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Footer                                                                    */
/* -------------------------------------------------------------------------- */

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="flex items-center gap-2 text-sm font-medium tracking-tight text-gray-300">
              <svg
                width="22"
                height="22"
                viewBox="0 0 28 28"
                fill="none"
                aria-hidden="true"
              >
                <rect width="28" height="28" rx="7" fill="#6366f1" />
                <path
                  d="M8 10h12M8 14h8M8 18h10"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              DevKit
            </div>
            <p className="text-xs text-gray-600">Developer tools for macOS</p>
          </div>

          <nav
            className="flex items-center gap-6 text-sm text-gray-500"
            aria-label="Footer"
          >
            <a
              href="https://github.com/codewprincee/devkit"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://twitter.com/codewprincee"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              Twitter
            </a>
            <a
              href="https://discord.gg/devkit"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              Discord
            </a>
          </nav>

          <p className="text-xs text-gray-600">
            &copy; 2026 DevKit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
