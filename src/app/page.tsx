import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { ServiceCard } from "@/components/ServiceCard";

const heroImg = "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?auto=format&fit=crop&w=1600&q=80";
const aboutImg = "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=1600&q=80";
const galleryImg = "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=1600&q=80";
const galleryImg2 = "https://images.unsplash.com/photo-1554519934-e32b1629d9ee?auto=format&fit=crop&w=1600&q=80";

const services = [
  { image: "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?auto=format&fit=crop&w=600&q=80", alt: "Hair cut and styling", title: "Cut & style", desc: "Precision cuts tailored to your face shape and lifestyle." },
  { image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=600&q=80", alt: "Hair colour treatment", title: "Colour", desc: "Highlights, balayage, and full colour with careful consultation." },
  { image: "https://images.unsplash.com/photo-1554519934-e32b1629d9ee?auto=format&fit=crop&w=600&q=80", alt: "Bridal hair styling", title: "Bridal & events", desc: "Updos and styling for weddings and special occasions." },
  { image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=600&q=80", alt: "Hair treatment in salon", title: "Treatments", desc: "Deep conditioning and gloss treatments for healthy shine." },
];

const reviews = [
  { quote: "Lee understood exactly what I wanted — best colour I've had in years.", name: "Emma L.", detail: "Colour client" },
  { quote: "Relaxed salon vibe at Mida House. Always leave feeling great.", name: "Rachel P.", detail: "Regular" },
  { quote: "Portfolio-quality finish for my wedding party.", name: "Sophie H.", detail: "Bridal" },
];

export default function Page() {
  return (
    <main>
      <section className="text-center px-6 py-16">
        <p className="text-xs uppercase tracking-[0.3em] text-[var(--rose)]">Mida House · Village Way, Cranleigh</p>
        <h1 className="font-display mt-4 text-4xl sm:text-5xl">Cuts &amp; colour, beautifully shown online.</h1>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-[var(--muted)]">
          Demo portfolio for Lee Taman — gallery-led site replacing scattered social links with a proper booking inquiry flow.
        </p>
        <Link href="/contact" className="mt-8 inline-block border border-[var(--rose)] px-8 py-2 text-sm uppercase tracking-widest">
          Book inquiry
        </Link>
        <div className="relative mx-auto mt-12 aspect-[16/9] max-w-4xl overflow-hidden rounded-lg">
          <Image src={heroImg} alt="Hair styling in salon" fill className="object-cover" priority sizes="896px" />
        </div>
      </section>

      <section className="section-trust border-y border-rose-100">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-8 px-6 py-6 text-center text-sm">
          <p><span className="font-bold text-[var(--rose)]">Portfolio</span> · cuts &amp; colour</p>
          <p><span className="font-bold">Village Way, Cranleigh</span></p>
          <p><span className="font-bold">By appointment</span></p>
        </div>
      </section>

      <section className="section-services mx-auto max-w-6xl px-6 py-14">
        <h2 className="font-display text-2xl text-[var(--ink)]">Services</h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {services.map((s) => (
            <ServiceCard key={s.title} image={s.image} alt={s.alt} title={s.title} desc={s.desc} />
          ))}
        </ul>
      </section>

      <section className="section-about mx-auto max-w-6xl px-6 py-14">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
            <Image src={aboutImg} alt="Lee Taman hairdressing" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
          </div>
          <div>
            <h2 className="font-display text-2xl">Why book with Lee</h2>
            <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
              A calm, professional salon experience with work that photographs well — ideal for clients who want
              their style to look as good leaving the chair as it does a week later.
            </p>
          </div>
        </div>
      </section>

      <CtaBand
        image={galleryImg}
        imageAlt="Hair colour result"
        title="Ready for a refresh?"
        body="Send a booking inquiry with inspiration photos. Demo site — confirm prices and availability with the salon."
        primaryHref="/contact"
        primaryLabel="Book inquiry"
        secondaryHref="/contact"
        secondaryLabel="View price list"
      />

      <section className="section-reviews mx-auto max-w-6xl px-6 py-14">
        <h2 className="font-display text-2xl">Client words</h2>
        <ul className="mt-8 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <li key={r.name} className="rounded-lg bg-white p-6 shadow-sm">
              <p className="text-sm italic text-[var(--muted)]">&ldquo;{r.quote}&rdquo;</p>
              <p className="mt-4 font-semibold">{r.name}</p>
              <p className="text-xs text-[var(--muted)]">{r.detail}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="section-gallery mx-auto max-w-6xl px-6 pb-14">
        <h2 className="font-display text-2xl">Style gallery</h2>
        <div className="mt-6 grid grid-cols-2 gap-2 md:grid-cols-4">
          {[heroImg, galleryImg, galleryImg2, aboutImg].map((src, i) => (
            <div key={i} className="relative aspect-square overflow-hidden rounded-lg">
              <Image src={src} alt={`Hair style ${i + 1}`} fill className="object-cover" sizes="25vw" />
            </div>
          ))}
        </div>
      </section>

      <CtaBand
        reverse
        image={galleryImg2}
        imageAlt="Salon interior"
        title="Mida House, Village Way"
        body="Portfolio and price list in one place — a modern replacement for scattered gallery links."
        primaryHref="/contact"
        primaryLabel="Get in touch"
      />
    </main>
  );
}
