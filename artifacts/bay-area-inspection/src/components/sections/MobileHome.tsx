import { Link } from "wouter";
import { ArrowRight, ArrowUpRight, ShieldCheck, Star, Check, Phone } from "lucide-react";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { homeFaqs } from "@/data/home-faqs";
import heroImage from "@assets/generated_images/hero_inspection_underway-480.webp";
import "./mobile-home.css";

export function MobileHome() {
  const book = () => window.dispatchEvent(new CustomEvent("openBookingModal"));
  return (
    <div className="mobile-home">
      <section className="mobile-hero" aria-labelledby="mobile-home-title">
        <p className="mobile-eyebrow">LOCAL EXPERTISE. A CLEARER PICTURE.</p>
        <h1 id="mobile-home-title">Know your home.<br /><span>Move forward<br />with confidence.</span></h1>
        <p className="mobile-intro">Thorough Bay Area home inspections.<br />Straight answers. A report the same day.</p>
        <button className="mobile-primary" onClick={book}>Book an inspection <ArrowUpRight size={19} /></button>
        <a className="mobile-rating" href={site.google.reviewsUrl} target="_blank" rel="noopener noreferrer">
          <Star size={15} fill="currentColor" /> <strong>{site.google.rating}</strong><span>from {site.google.reviewCount} Google reviews</span><ArrowUpRight size={14} />
        </a>
        <figure className="mobile-hero-photo">
          <img src={heroImage} alt="Inspection equipment beside a Bay Area home" width={480} height={600} fetchPriority="high" />
          <figcaption><ShieldCheck size={17} /> InterNACHI certified &amp; insured</figcaption>
        </figure>
      </section>

      <section className="mobile-section" aria-labelledby="mobile-services">
        <p className="mobile-eyebrow">WHAT WE INSPECT</p>
        <h2 id="mobile-services">Home inspections.<br />Specialist testing.</h2>
        <p className="mobile-body">Explore whole-home inspections, mold testing, and checks for moisture or gas leaks.</p>
        <div className="mobile-services">
          {services.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`} className="mobile-service">
              <span className="mobile-service-icon"><service.icon size={20} strokeWidth={1.6} /></span>
              <span>{service.shortName}</span><ArrowUpRight size={17} />
            </Link>
          ))}
        </div>
        <Link href="/pricing" className="mobile-text-link">Explore pricing <ArrowRight size={16} /></Link>
      </section>

      <section className="mobile-section mobile-assurance" aria-labelledby="mobile-why">
        <p className="mobile-eyebrow">A BUILDER'S EYE FOR DETAIL</p>
        <h2 id="mobile-why">Practical insight.<br />No repair sales pitch.</h2>
        <p className="mobile-body">Your inspector's hands-on building experience helps uncover what matters. We inspect homes—we don't sell repairs.</p>
        <ul className="mobile-checks">
          <li><Check size={17} /> Thermal imaging included in full inspections</li>
          <li><Check size={17} /> Clear findings with detailed photos</li>
          <li><Check size={17} /> A walkthrough to answer your questions</li>
        </ul>
        <Link href="/sample-report" className="mobile-text-link">See a sample report <ArrowRight size={16} /></Link>
      </section>

      <section className="mobile-section" aria-labelledby="mobile-process">
        <p className="mobile-eyebrow">FROM BOOKING TO CLARITY</p>
        <h2 id="mobile-process">Simple from the start.</h2>
        <ol className="mobile-steps">
          <li><span>01</span><div><h3>Tell us about your home</h3><p>Request a time. We'll confirm availability and your quote.</p></div></li>
          <li><span>02</span><div><h3>We'll take a closer look</h3><p>Most inspections take 2–4 hours. Join us for the walkthrough.</p></div></li>
          <li><span>03</span><div><h3>Get your clear next steps</h3><p>Your digital report arrives the same day, with photos and recommendations.</p></div></li>
        </ol>
      </section>

      <section className="mobile-section mobile-faq" aria-labelledby="mobile-questions">
        <p className="mobile-eyebrow">GOOD QUESTIONS</p>
        <h2 id="mobile-questions">Before you book.</h2>
        {homeFaqs.map(({question, answer}) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}
      </section>

      <section className="mobile-section mobile-closing" aria-labelledby="mobile-ready">
        <p className="mobile-eyebrow">SAN FRANCISCO &amp; THE BAY AREA</p>
        <h2 id="mobile-ready">Your next chapter.<br />Start with confidence.</h2>
        <p>Serving San Francisco, the Peninsula,<br />South Bay and East Bay.</p>
        <button className="mobile-primary" onClick={book}>Find an inspection time <ArrowUpRight size={19} /></button>
        <a className="mobile-closing-call" href={site.phoneHref}><Phone size={16} /> {site.phoneDisplay}</a>
        <Link href="/service-areas" className="mobile-text-link">Check your service area <ArrowRight size={16} /></Link>
      </section>
    </div>
  );
}
