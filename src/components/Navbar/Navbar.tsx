import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/logo/logo.svg?react";

type NavItem = {
  label: string;
  to: string;
  external?: boolean;
};

const items: NavItem[] = [
  { label: "ABOUT", to: "/about" },
  { label: "WORK", to: "/work" },
  { label: "BLOG", to: "/blog" },
  { label: "ARCHIVE", to: "https://regular-approach-478341.framer.app/", external: true }
];

export default function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <nav aria-label="Primary" className="bg-base-50/60 backdrop-blur-[8px]">
        <div className="px-[50px]">
          <ul className="flex items-center gap-6 py-4 md:gap-10">
            {items.map((item) => {
              if (item.external) {
                return (
                  <li key={item.label}>
                    <a
                      href={item.to}
                      target="_blank"
                      rel="noreferrer"
                      className="text-12 font-medium text-base-800 transition-colors hover:text-base-500 md:text-15"
                    >
                      {item.label}
                    </a>
                  </li>
                );
              }

              return (
                <li key={item.label}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      [
                        "text-12 font-medium transition-colors md:text-15",
                        isActive
                          ? "text-accent"
                          : "text-base-800 hover:text-base-500",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-base-50"
                      ].join(" ")
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              );
            })}
          </ul>

          <div className="h-px origin-top scale-y-50 bg-base-950/50" />

          <div className="pt-4">
            <Link
              to="/"
              aria-label="Home"
              className="inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-base-50"
            >
              <Logo className="h-10 w-auto text-accent" />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}