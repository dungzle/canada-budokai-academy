import FacebookIcon from "@/components/ui/FacebookIcon";
import { dojos } from "@/lib/constants";

export default function Footer() {
  const socialLinks = dojos.filter((dojo) => dojo.facebookUrl);

  return (
    <footer className="border-t border-gold-600/40 bg-black py-4 text-stone-500">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-6 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
            {/* LOGO */}
            <div className="flex cursor-pointer items-center gap-2 transition-all duration-300 lg:gap-4">
              <img
                src="/dojo-logo.webp"
                alt="Canada Budokai Academy Logo"
                className="h-16 w-auto object-contain brightness-110"
              />

              <span className="font-sans text-xl font-bold tracking-widest text-white">
                CANADA <span className="text-gold-500">BUDOKAI ACADEMY</span>
              </span>
            </div>

            {/* LOCATIONS */}
            <div>
              <p className="text-md mt-2 font-bold tracking-[0.1em] text-gold-500">
                LOCATIONS
              </p>

              <ul className="mt-2 w-full max-w-[36rem] divide-y divide-stone-700/50 text-left text-sm text-stone-200">
                {dojos.map((dojo) => (
                  <li
                    key={dojo.name}
                    className="grid grid-cols-1 gap-y-0.5 py-1 leading-relaxed sm:grid-cols-[9.5rem_1fr] sm:gap-x-3 sm:gap-y-0"
                  >
                    <span className="font-semibold text-stone-100 sm:pt-px">
                      {dojo.name}
                    </span>

                    <span className="text-stone-300">
                      {dojo.venue} - {dojo.address}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* FACEBOOK */}
            <div className="flex flex-col items-center lg:items-start">
              <p className="text-sm font-bold tracking-[0.1em] text-gold-500">
                FOLLOW US
              </p>

              <div className="mt-2 flex flex-col gap-1">
                {socialLinks.map((dojo) => (
                  <a
                    key={dojo.name}
                    href={dojo.facebookUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 py-1 text-sm text-stone-300 transition-colors hover:text-white"
                    aria-label={`Follow ${dojo.name} on Facebook`}
                  >
                    <FacebookIcon className="h-5 w-5 shrink-0" />
                    {dojo.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="pt-8 text-center text-[9px] font-bold uppercase tracking-[0.4em] text-stone-600">
          &copy; {new Date().getFullYear()} CANADA BUDOKAI ACADEMY
        </div>
      </div>
    </footer>
  );
}
