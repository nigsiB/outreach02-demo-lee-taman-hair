import Link from "next/link";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-rose-900/30 bg-[#2c2420] text-[#fdf8f6]">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="text-xl font-bold tracking-tight">
            Lee Taman
          </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed opacity-80">Cuts, colour & styling on Village Way.</p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--rose)]">Quick links</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/" className="text-[#fdf8f6]/75 transition-colors hover:text-[var(--rose)]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#fdf8f6]/75 transition-colors hover:text-[var(--rose)]">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#fdf8f6]/75 transition-colors hover:text-[var(--rose)]">
                  Get a quote
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--rose)]">Contact</p>
            <div className="mt-4 space-y-2 text-sm opacity-85">
              <p>Mida House, Village Way, Cranleigh</p>
              <p>By appointment</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-current/15 pt-8 text-xs opacity-60 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} Lee Taman Hair</p>
          <p>Demo concept site for outreach — not affiliated with the live business.</p>
        </div>
      </div>
    </footer>
  );
}
