import React from "react";
import { motion } from "framer-motion";

// Simple inline icon components (to avoid external UI deps)
const Icon = ({ path, className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path d={path} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowRight = (props) => (
  <Icon {...props} path="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
);
const Play = (props) => <Icon {...props} path="M5 3l14 9-14 9V3z" />;
const Mail = (props) => (
  <Icon {...props} path="M3 6l9 6 9-6M4 6h16v12H4z" />
);
const Check = (props) => (
  <Icon {...props} path="M5 13l4 4L19 7" />
);
const Star = (props) => <Icon {...props} path="M12 2l2.9 6 6.6.6-5 4.2 1.6 6.4L12 16l-6.1 3.2L7.5 13 2.5 8.6l6.6-.6L12 2z" />;
const Insta = (props) => (
  <svg viewBox="0 0 24 24" className={"w-5 h-5"} fill="currentColor"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5zM18 6.5a1 1 0 1 1 1 1 1 1 0 0 1-1-1z"/></svg>
);
const XIcon = (props) => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M3 3h3l6 7 6-7h3l-7.5 9.1L21 21h-3l-6-7-6 7H3l7.5-8.9L3 3z"/></svg>
);
const LinkIcon = (props) => <Icon {...props} path="M10 14l-2 2a4 4 0 0 1-6-6l2-2m10 2l2-2a4 4 0 1 1 6 6l-2 2" />;

const Section = ({ id, children, className = "" }) => (
  <section id={id} className={`max-w-7xl mx-auto px-6 sm:px-8 ${className}`}>{children}</section>
);

const Card = ({ children, className = "" }) => (
  <div className={`bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-lg ${className}`}>{children}</div>
);

const Feature = ({ title, children, icon }) => (
  <Card className="h-full">
    <div className="flex items-start gap-3">
      <div className="p-2 rounded-xl bg-white/10 text-white">{icon}</div>
      <div>
        <h4 className="font-semibold text-white/90">{title}</h4>
        <p className="text-white/70 text-sm mt-1">{children}</p>
      </div>
    </div>
  </Card>
);

const Tier = ({ name, price, features, highlighted }) => (
  <Card className={`h-full ${highlighted ? "ring-2 ring-fuchsia-400" : ""}`}>
    <div className="flex items-center justify-between">
      <h4 className="text-white font-semibold tracking-wide">{name}</h4>
      {highlighted && (
        <span className="text-xs px-2 py-1 rounded-full bg-fuchsia-500/20 text-fuchsia-200">Most Popular</span>
      )}
    </div>
    <div className="mt-4 flex items-end gap-1">
      <span className="text-4xl font-bold text-white">{price}</span>
      <span className="text-white/60">/mo</span>
    </div>
    <ul className="mt-4 space-y-2">
      {features.map((f, i) => (
        <li key={i} className="flex items-start gap-2 text-white/80 text-sm">
          <Check className="w-5 h-5 text-emerald-300" /> {f}
        </li>
      ))}
    </ul>
    <button className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-pink-500 px-4 py-3 text-white font-medium hover:opacity-90 transition">
      Subscribe <ArrowRight className="w-4 h-4" />
    </button>
  </Card>
);

export default function SiennaBlazeSite() {
  const gallery = [
    "https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1520975922284-9b953f7a1c54?q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1526178618720-6a145cbcd1ba?q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1544890225-2f3faec4cd60?q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1532339142463-fd0a8979791f?q=80&w=1400&auto=format&fit=crop",
  ];

  return (
    <div className="min-h-screen bg-[radial-gradient(100%_100%_at_0%_0%,#2d0a3a_0%,#0b0c15_60%)] text-white">
      {/* Nav */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/20 border-b border-white/10">
        <Section className="py-4 flex items-center justify-between">
          <a href="#hero" className="font-semibold tracking-wide">Sienna Blaze</a>
          <div className="hidden sm:flex items-center gap-6 text-sm text-white/80">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#gallery" className="hover:text-white">Gallery</a>
            <a href="#tiers" className="hover:text-white">Membership</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
          <a href="#tiers" className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm hover:bg-white/20">
            Join <ArrowRight className="w-4 h-4" />
          </a>
        </Section>
      </nav>

      {/* Hero */}
      <Section id="hero" className="pt-16 sm:pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-xs uppercase tracking-widest text-fuchsia-300/80">AI Influencer • Barcelona</span>
            <h1 className="mt-3 text-4xl sm:text-6xl font-extrabold leading-tight">
              Meet <span className="bg-gradient-to-r from-fuchsia-300 to-pink-300 bg-clip-text text-transparent">Sienna Blaze</span>
            </h1>
            <p className="mt-4 text-white/80 max-w-xl">
              Hyper‑real, brand‑safe and always online. Sienna blends fashion, travel and a touch of mischief to create thumb‑stopping content across platforms.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#tiers" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-pink-500 px-5 py-3 font-medium">
                Subscribe <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#gallery" className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 font-medium hover:bg-white/10">
                <Play className="w-4 h-4" /> View Gallery
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-white/70 text-sm">
              <span className="inline-flex items-center gap-2"><Star className="w-4 h-4 text-amber-300" /> 4.9/5 • 2k+ supporters</span>
              <span className="inline-flex items-center gap-2"><LinkIcon className="w-4 h-4" /> @siennablaze</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1500&auto=format&fit=crop" alt="Sienna Blaze portrait" className="w-full h-[520px] object-cover rounded-3xl border border-white/10 shadow-2xl" />
              <div className="absolute -bottom-5 -left-5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4">
                <p className="text-xs text-white/80">Next drop in <span className="font-semibold text-white">48h</span></p>
              </div>
              <div className="absolute -top-4 -right-4 bg-fuchsia-500/20 border border-fuchsia-300/30 rounded-2xl p-4">
                <p className="text-xs">New set: <span className="font-semibold">“Midnight in BCN”</span></p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* USP */}
      <Section className="pb-12">
        <div className="grid sm:grid-cols-3 gap-4">
          <Feature title="Brand‑ready" icon={<Check className="w-5 h-5 text-emerald-300" />}>Rights‑cleared visuals, consistent look, fast turnarounds for campaigns.</Feature>
          <Feature title="Always on" icon={<Play className="w-5 h-5 text-amber-300" />}>Daily posts, story takeovers and custom shoots generated on demand.</Feature>
          <Feature title="Global reach" icon={<LinkIcon className="w-5 h-5 text-sky-300" />}>Audience across IG, TikTok and Fanvue with high engagement.</Feature>
        </div>
      </Section>

      {/* Gallery */}
      <Section id="gallery" className="py-8">
        <h2 className="text-2xl sm:text-3xl font-bold">Gallery</h2>
        <p className="text-white/70 mt-2">A taste of Sienna’s world. Swap these with your best shots or embedded reels.</p>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
          {gallery.map((src, i) => (
            <motion.img
              key={i}
              src={src}
              alt={`gallery-${i}`}
              className="w-full h-56 object-cover rounded-2xl border border-white/10"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            />
          ))}
        </div>
      </Section>

      {/* About */}
      <Section id="about" className="py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <Card>
            <h3 className="text-xl font-semibold">About Sienna</h3>
            <p className="mt-3 text-white/80">
              Sienna Blaze is a virtual model born in Barcelona. Trained on a curated aesthetic, she delivers consistent visuals and a playful voice tailored to your brand. From travel diaries to high‑gloss fashion, Sienna adapts to any brief while staying unmistakably herself.
            </p>
            <div className="mt-4 grid sm:grid-cols-2 gap-3 text-sm">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">Turnaround: <span className="font-medium text-white">24‑72h</span></div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">Usage rights: <span className="font-medium text-white">Included</span></div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">Formats: <span className="font-medium text-white">IG, TikTok, Web</span></div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">Languages: <span className="font-medium text-white">EN / ES / DK</span></div>
            </div>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold">Newsletter</h3>
            <p className="mt-3 text-white/80">Get drops, behind‑the‑scenes and limited collabs.</p>
            <form onSubmit={(e)=>e.preventDefault()} className="mt-4 flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 py-3">
                  <Mail className="w-4 h-4 text-white/60" />
                  <input className="bg-transparent outline-none w-full placeholder:text-white/50" placeholder="Enter your email" />
                </div>
              </div>
              <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-black px-5 py-3 font-medium hover:bg-white/90">
                Join list <ArrowRight className="w-4 h-4" />
              </button>
            </form>
            <p className="text-xs text-white/60 mt-2">By signing up you agree to our terms.</p>
          </Card>
        </div>
      </Section>

      {/* Pricing / Membership */}
      <Section id="tiers" className="py-8">
        <h2 className="text-2xl sm:text-3xl font-bold">Membership</h2>
        <p className="text-white/70 mt-2">Unlock premium sets, BTS and monthly requests.</p>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          <Tier name="Supporter" price="$9" highlighted={false} features={["Early access drops", "1080p gallery", "Members‑only chat"]} />
          <Tier name="VIP" price="$19" highlighted features={["All Supporter perks", "4K photo sets", "Monthly poll access", "DM priority"]} />
          <Tier name="Producer" price="$49" highlighted={false} features={["All VIP perks", "1 custom prompt/mo", "Brand mention in story", "Commercial OK"]} />
        </div>
        <p className="text-xs text-white/60 mt-3">Payments handled via your platform of choice (e.g., Fanvue/Patreon). Buttons can deep‑link.</p>
      </Section>

      {/* Contact / CTA */}
      <Section id="contact" className="py-16">
        <div className="grid lg:grid-cols-2 gap-8">
          <Card>
            <h3 className="text-xl font-semibold">Bookings & Collabs</h3>
            <p className="mt-2 text-white/80">For campaigns, custom shoots or UGC packs, drop a line with your brief and timing.</p>
            <form onSubmit={(e)=>e.preventDefault()} className="mt-4 space-y-3">
              <input className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 outline-none" placeholder="Your name" />
              <input className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 outline-none" placeholder="Email or IG handle" />
              <textarea rows={4} className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 outline-none" placeholder="Project details" />
              <button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-pink-500 px-5 py-3 font-medium">
                Send inquiry <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </Card>
          <div className="grid sm:grid-cols-2 gap-4">
            <Card>
              <h4 className="font-semibold">Social</h4>
              <div className="mt-3 space-y-2 text-sm text-white/80">
                <a className="flex items-center gap-2 hover:text-white" href="#"><Insta /> Instagram</a>
                <a className="flex items-center gap-2 hover:text-white" href="#"><XIcon /> X / Twitter</a>
                <a className="flex items-center gap-2 hover:text-white" href="#"><Play /> TikTok</a>
              </div>
            </Card>
            <Card>
              <h4 className="font-semibold">Press Kit</h4>
              <p className="text-white/80 text-sm mt-2">Download bio, usage rights and brand guidelines.</p>
              <button className="mt-3 inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-2 hover:bg-white/10">
                Get PDF <ArrowRight className="w-4 h-4" />
              </button>
            </Card>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <Section className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/60">
          <p>© {new Date().getFullYear()} Sienna Blaze • Virtual Creator</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#hero" className="hover:text-white">Back to top</a>
          </div>
        </Section>
      </footer>
    </div>
  );
}
