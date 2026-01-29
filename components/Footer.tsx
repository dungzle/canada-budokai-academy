import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-budokai-dark text-stone-500 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-4 mb-6">
            <Image
              src="/dojo-logo.png"
              alt="Canada Budokai Academy Logo"
              width={100}
              height={100}
              className="h-16 w-auto object-contain brightness-110"
            />
            <span className="font-sans font-bold text-xl text-white tracking-widest">
              CANADA <span className="text-gold-600">BUDOKAI ACADEMY</span>
            </span>
          </div>
          <p className="max-w-xl text-xs leading-relaxed mb-6 text-stone-400 italic">
            Preserving the lineage of Shorinji-ryu and the Aiki traditions
            across Canada.
          </p>
          <div className="flex gap-4 mb-8">
            <a
              href="https://www.facebook.com/carsadojo"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:bg-[#166fe5] hover:scale-110 transition-all duration-300 shadow-lg"
              aria-label="Follow us on Facebook"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M23.998 12c0-6.627-5.372-12-11.999-12C5.372 0 0 5.373 0 12c0 5.99 4.388 10.954 10.125 11.854V15.47H7.078V12h3.047V9.356c0-3.007 1.792-4.668 4.533-4.668 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.49 0-1.956.925-1.956 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.737-.9 10.125-5.864 10.125-11.853z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="text-center pt-8 border-t border-stone-900 text-[9px] uppercase font-bold tracking-[0.4em] text-stone-600">
          &copy; {new Date().getFullYear()} CANADA BUDOKAI ACADEMY.
        </div>
      </div>
    </footer>
  );
}
