/* The Allocation — landing page */
const { useState, useEffect, useRef } = React;

/* ---------- Tweak defaults ---------- */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "ink-gold",
  "displayFont": "instrument",
  "wordmarkStyle": "italic-the",
  "showMarquee": true,
  "heroTreatment": "grid"
} /*EDITMODE-END*/;

/* ---------- Palettes ---------- */
const PALETTES = {
  "ink-gold": { "--bg": "#0B0D12", "--bg-2": "#0F1218", "--surface": "#14171F", "--ink": "#E8E0CF", "--ink-soft": "#C9C2B0", "--gold": "#C9A66B" },
  "midnight": { "--bg": "#0A1220", "--bg-2": "#0D1828", "--surface": "#132338", "--ink": "#E8EEF6", "--ink-soft": "#BCC8D8", "--gold": "#8FA6C5" },
  "oxblood": { "--bg": "#120A0B", "--bg-2": "#1A0F11", "--surface": "#22141A", "--ink": "#EFE3D9", "--ink-soft": "#D1BFB1", "--gold": "#B66242" },
  "bone": { "--bg": "#F2EBDC", "--bg-2": "#ECE4D2", "--surface": "#E4DCC8", "--ink": "#16171B", "--ink-soft": "#3A3B3F", "--gold": "#8A6A2E", "--muted": "#6A6555", "--muted-2": "#A8A28E", "--line": "rgba(22,23,27,0.10)", "--line-strong": "rgba(22,23,27,0.22)" }
};
const DISPLAY_FONTS = {
  "instrument": '"Instrument Serif", "Cormorant Garamond", "Times New Roman", serif',
  "cormorant": '"Cormorant Garamond", "Times New Roman", serif',
  "ebgaramond": '"EB Garamond", "Cormorant Garamond", serif',
  "playfair": '"Playfair Display", "Times New Roman", serif'
};

/* ---------- Data ---------- */
const ABOUT_PARAGRAPHS = [
{ lead: true, html: <>Startup Grind Silicon Valley has been at the center of the Bay Area's founder and investor ecosystem for over 15 years — running <em>30+ events a year</em> across the Valley.</> },
{ html: <>The Allocation is a different kind of evening. No pitch competitions. No open networking. No noise.</> },
{ html: <>A deliberately curated, invite-only gathering for the Valley's most active fund managers and check-writers — built around one thing: high-quality networking and strategic partnerships.</> }];


const ATTENDEE_TIERS = [
{ role: <>General &amp; Managing <em>Partners</em></> },
{ role: <em>Partners</em> },
{ role: <em>Directors</em> },
{ role: <em>CVCs</em> },
{ role: <em>Family Offices</em> }];


const FIRMS_FEATURED = [
"Sequoia", "NEA", "Bessemer", "Battery", "Sapphire Ventures", "ICONIQ",
"Thrive Capital", "Menlo Ventures", "Mayfield Fund", "Permira", "TCV",
"Emergence Capital", "NFX", "Floodgate", "Upfront Ventures", "M12",
"Tribe Capital", "Antler", "F-Prime Capital", "Theory Ventures",
"Acrew Capital", "Unusual Ventures"];

const FIRMS_EMERGING = [
"Gradient Ventures", "Unshackled Ventures", "Operator Collective", "Sierra Ventures",
"Blumberg Capital", "Samsung Ventures", "Prelude Ventures", "Celesta Capital",
"Princeville Capital", "Hoxton Ventures", "Glasswing Ventures", "Fusion Fund",
"Race Capital", "Icon Ventures", "Allegis Capital", "Geodesic Capital",
"Shell Ventures", "Thomson Reuters Ventures", "MS&AD Ventures", "Nokia Ventures",
"SK Telecom Ventures", "ATEL Ventures", "Scrum Ventures"];


const FAQ = [
{
  q: "Who is invited to The Allocation?",
  a: "Senior decision-makers at Bay Area venture funds — General Partners, Managing Partners, Managing Directors, Principals with check-writing authority, and select family-office allocators. Application is open; admission is selective."
},
{
  q: "What is the review process?",
  a: "Each application is reviewed by the Startup Grind Silicon Valley team. We confirm role, firm, and active investment activity."
},
{
  q: "Are founders or service providers welcome?",
  a: "Not at this event. The Allocation is a closed room for fund managers and allocators. Sponsors and select strategic partners may attend in limited numbers — please apply through the partner channel."
},
{
  q: "Is the guest list published?",
  a: "No. Attendance and the guest list are held in confidence — both before and after the event. We share the composition of the room (firms, stages, AUM ranges) with attendees in advance."
},
{
  q: "What does the evening look like?",
  a: "Cocktail reception, bites and nibbles, and an off-the-record fireside conversation with a leading Silicon Valley icon. Dress is business attire. No pitches, no panels, no press."
},
{
  q: "Is there a cost to attend?",
  a: "No cost for the investor. All we ask is that you show up — if you don't, you'll have taken the opportunity away from another investor we've had to turn down."
},
{
  q: "I can't attend — can I send a colleague from my firm?",
  a: "Possibly. Substitutions are reviewed case-by-case to preserve the composition of the room. Please write to the curation team directly."
}];


const ACCESS_STEPS = [
{ num: "i.", title: "Apply", body: "Submit your application below. We require role, firm, fund stage, and a short note on what you hope to gain from the evening." },
{ num: "ii.", title: "Review", body: "The curation committee reviews each application against the composition of the room. Verifications are made through public sources and warm intros only." },
{ num: "iii.", title: "Invitation", body: "If approved, you'll receive a personal invitation with venue details, the published room composition, and a confidential RSVP link within five business days." }];


const HERO_META = [
{ label: "Date", value: "Aug. 20, 2026", italic: false },
{ label: "Locale", value: "Menlo Park", italic: true },
{ label: "Format", value: "Cocktail Party", italic: false },
{ label: "Capacity", value: "100 Guests", italic: true }];


/* ---------- Hero ---------- */
function Hero() {
  return (
    <section className="hero" id="top" data-screen-label="Hero">
      <div className="hero-photo" />
      <div className="hero-bg" />

      <div className="container hero-inner">
        <span className="eyebrow eyebrow-gold">Invite-only · Aug. 20, 2026 · Menlo Park</span>
        <h1 className="wordmark">
          <span className="the">The</span>Allocation
        </h1>
        <div className="brought-by mono">
          <span className="rule" /> Brought to you by <em>Startup Grind</em> <span className="rule" />
        </div>
        <p className="hero-tagline">
          An evening for the Bay Area's most active fund managers and check-writers.
          One room. <em>No noise.</em>
        </p>
        <div className="hero-actions">
          <a href="#apply" className="btn-primary">
            Request Invitation <span className="arrow">→</span>
          </a>
          <a href="#about" className="btn-ghost">About the Evening</a>
        </div>

        <div className="container hero-meta" style={{ padding: 0, maxWidth: "100%" }}>
          {HERO_META.map((m) =>
          <div key={m.label} className="item">
              <span className="label mono">— {m.label}</span>
              <span className={"value" + (m.italic ? " italic" : "")}>{m.value}</span>
            </div>
          )}
        </div>
      </div>
    </section>);

}

/* ---------- Marquee ---------- */
function Marquee() {
  const items = ["Curated", "Invite-Only", "6-8pm", "100 Seats", "Bay Area · Aug 20", "Senior GPs · MPs · MDs", "Strictly Senior"];
  const row =
  <span>
      {items.map((t, i) =>
    <React.Fragment key={i}>
          <span>{t}</span>
          <span className="sep">✶</span>
        </React.Fragment>
    )}
    </span>;

  return (
    <div className="marquee">
      <div className="marquee-inner">{row}{row}{row}{row}</div>
    </div>);

}

/* ---------- About ---------- */
function About() {
  return (
    <section className="section" id="about" data-screen-label="About">
      <div className="container">
        <div className="section-head">
          <div className="section-num">
            <span className="n">§ 01</span>
            <span className="l">The Evening</span>
          </div>
          <h2 className="section-title">A room built <em>by hand,</em> not at scale.</h2>
        </div>

        <div className="about-body">
          <div className="about-stats">
            <div className="about-stat">
              <div className="v">1</div>
              <div className="l">EVENING</div>
            </div>
            <div className="about-stat">
              <div className="v">100</div>
              <div className="l">INVESTORS</div>
            </div>
            <div className="about-stat">
              <div className="v">0</div>
              <div className="l">PITCHES</div>
            </div>
          </div>

          <div className="about-prose">
            {ABOUT_PARAGRAPHS.map((p, i) =>
            <p key={i} className={p.lead ? "lead" : ""}>{p.html}</p>
            )}
          </div>
        </div>
      </div>
    </section>);

}

/* ---------- Access ---------- */
function Access() {
  return (
    <section className="section access" id="access" data-screen-label="Access">
      <div className="container">
        <div className="section-head">
          <div className="section-num">
            <span className="n">§ 02</span>
            <span className="l">Access</span>
          </div>
          <h2 className="section-title">A <em>strict guest list,</em> by design.</h2>
        </div>
        <p className="who-intro" style={{ marginBottom: 48 }}>
          Attendance is subject to a deliberate review process — designed to ensure
          the room remains <em>high-caliber and engaged,</em> from the first handshake
          to the last drink.
        </p>
        <div className="access-grid">
          {ACCESS_STEPS.map((s) =>
          <div className="access-step" key={s.title}>
              <div className="num">{s.num}</div>
              <h4>{s.title}</h4>
              <p>{s.body}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

}

/* ---------- Who Will Be There ---------- */
function Who() {
  return (
    <section className="section" id="who" data-screen-label="Who">
      <div className="container">
        <div className="section-head">
          <div className="section-num">
            <span className="n">§ 03</span>
            <span className="l">The Room</span>
          </div>
          <h2 className="section-title">Who <em>will be</em> there.</h2>
        </div>

        <p className="who-intro">
          The Allocation convenes <em>100 senior allocators</em> from the most active
          early-stage venture funds in the Bay Area — across stage, sector, and vintage. Composition
          is balanced by hand.
        </p>

        <div className="who-grid">
          {ATTENDEE_TIERS.map((t, i) =>
          <div className="who-card" key={i}>
              <div className="role">{t.role}</div>
            </div>
          )}
        </div>

        <div className="who-firms">
          <div className="label">
            <span className="mono">Expected &amp; Invited Funds</span>
            <span className="note">Initial invite list — subject to confirmation</span>
          </div>
          <div>
            <div className="firm-wall">
              {FIRMS_FEATURED.map((f) => <span key={f} className="firm-chip">{f}</span>)}
              {FIRMS_EMERGING.map((f) => <span key={f} className="firm-chip dim">{f}</span>)}
              <span className="firm-chip more">+ many more</span>
            </div>
          </div>
        </div>
      </div>
    </section>);

}

/* ---------- FAQ ---------- */
function FAQSection() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section" id="faq" data-screen-label="FAQ">
      <div className="container">
        <div className="section-head">
          <div className="section-num">
            <span className="n">§ 04</span>
            <span className="l">Questions</span>
          </div>
          <h2 className="section-title">In <em>fine print.</em></h2>
        </div>
        <div className="faq-grid">
          <div className="mono" style={{ color: "var(--muted)" }}>FAQ · 07 items</div>
          <div className="faq-list">
            {FAQ.map((item, i) =>
            <div
              key={i}
              className={"faq-item" + (open === i ? " open" : "")}
              onClick={() => setOpen(open === i ? -1 : i)}>
              
                <div className="q">
                  <h4>{item.q}</h4>
                  <span className="plus" />
                </div>
                <div className="a">{item.a}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

}

/* ---------- Sponsors ---------- */
function Sponsors() {
  // 5x2 grid — first cell is the "Become a partner" call, others are placeholder slots
  return (
    <section className="section sponsors" id="partners" data-screen-label="Partners">
      <div className="container">
        <div className="section-head">
          <div className="section-num">
            <span className="n">§ 05</span>
            <span className="l">Partners</span>
          </div>
          <h2 className="section-title">Hosted <em>in confidence.</em></h2>
        </div>

        <div className="sponsor-marquee partners-2">
          <a href="https://startupgrind.com" target="_blank" rel="noreferrer" className="sponsor-cell partner">
            <span className="sponsor-name">Startup <em>Grind</em></span>
            <span className="sponsor-url mono">startupgrind.com ↗</span>
          </a>
          <a href="https://springline.com" target="_blank" rel="noreferrer" className="sponsor-cell partner">
            <span className="sponsor-name"><em>Springline</em></span>
            <span className="sponsor-url mono">springline.com ↗</span>
          </a>
        </div>

        <div className="sponsor-cta">
          <div className="mono" style={{ color: "var(--muted)" }}>Interested parties</div>
          <div>
            <div className="title">Become a <em>partner</em> for The Allocation '26.</div>
            <p>
              A small number of strategic partners support each edition of The Allocation.
              Slots are limited to firms aligned with the room — typically law, banking,
              recruiting, fund admin, and data. Reach out to discuss.
            </p>
            <a href="mailto:james.gee@startupgrind.com" className="btn-ghost">
              james.gee@startupgrind.com →
            </a>
          </div>
        </div>
      </div>
    </section>);

}

/* ---------- Hosts ---------- */
function Hosts() {
  return (
    <section className="section hosts" id="hosts" data-screen-label="Hosts">
      <div className="container">
        <div className="section-head">
          <div className="section-num">
            <span className="n">§ 06</span>
            <span className="l">Hosts</span>
          </div>
          <h2 className="section-title">Curated <em>by hand,</em> on home turf.</h2>
        </div>

        <div className="hosts-grid">
          <div className="host-card">
            <div className="host-eyebrow mono">— The Organization</div>
            <h3 className="host-title">Startup <em>Grind</em></h3>
            <p className="host-body">
              Founded in 2010 by <em>Derek Andersen,</em> Startup Grind is the world's largest
              independent community of founders — operating in 250+ cities across 100+ countries.
              The Bay Area sits at the program's center, with Startup Grind Silicon Valley
              running 30+ events a year for the region's most active founders and investors.
            </p>
            <div className="host-facts">
              <div><span className="k mono">Founded</span><span className="v">2010</span></div>
              <div><span className="k mono">Cities</span><span className="v">250+</span></div>
              <div><span className="k mono">Countries</span><span className="v">100+</span></div>
            </div>
            <a href="https://startupgrind.com" target="_blank" rel="noreferrer" className="host-contact mono">
              startupgrind.com ↗
            </a>
          </div>

          <div className="host-card">
            <div className="host-eyebrow mono">— Silicon Valley Team</div>
            <h3 className="host-title"><em>James</em> Gee</h3>
            <p className="host-subtitle">Chapter Director, Startup Grind Silicon Valley</p>
            <p className="host-body">
              James leads the Silicon Valley chapter — curating the room, the partnerships,
              and the conversations behind every Startup Grind evening in the Bay Area.
              He is the host of <em>The Allocation</em> and your direct line for invitations,
              substitutions, and partner inquiries.
            </p>
            <a href="mailto:james.gee@startupgrind.com" className="host-contact mono">
              james.gee@startupgrind.com →
            </a>
            <a href="https://www.startupgrind.com/silicon-valley-san-francisco-bay-area/" target="_blank" rel="noreferrer" className="host-contact mono">
              startupgrind.com/silicon-valley ↗
            </a>
          </div>
        </div>
      </div>
    </section>);

}

/* ---------- Application Form ---------- */
function ApplyForm() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [refCode] = useState(() => "TA-26-" + Math.random().toString(36).slice(2, 6).toUpperCase());
  const [data, setData] = useState({
    first: "", last: "", email: "", linkedin: "",
    firm: "", title: "Partner", aum: "", stage: "Seed",
    intent: "", referrer: ""
  });
  const [errors, setErrors] = useState({});

  function update(k, v) {setData((d) => ({ ...d, [k]: v }));}

  function validateStep1() {
    const e = {};
    if (!data.first.trim()) e.first = "Required";
    if (!data.last.trim()) e.last = "Required";
    if (!/^\S+@\S+\.\S+$/.test(data.email)) e.email = "Valid email required";
    setErrors(e);
    return Object.keys(e).length === 0;
  }
  function validateStep2() {
    const e = {};
    if (!data.firm.trim()) e.firm = "Required";
    if (!data.aum.trim()) e.aum = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  }
  function validateStep3() {
    const e = {};
    if (data.intent.trim().length < 20) e.intent = "Please share at least a sentence";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function next() {
    if (step === 0 && validateStep1()) setStep(1);else
    if (step === 1 && validateStep2()) setStep(2);else
    if (step === 2 && validateStep3()) {
      setSubmitted(true);
    }
  }
  function back() {
    setStep(Math.max(0, step - 1));
    setErrors({});
  }

  if (submitted) {
    return (
      <div className="form-card">
        <div className="form-success">
          <div className="seal">✶</div>
          <h3>Your application <em>has been received.</em></h3>
          <p>
            The curation committee will review and respond within five business days.
            Please look for an email from <span style={{ color: "var(--ink)" }}>james.gee@startupgrind.com</span> —
            consider whitelisting the domain.
          </p>
          <div className="ref">
            Reference · <span className="gold">{refCode}</span> · Submitted {new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
          </div>
        </div>
      </div>);

  }

  return (
    <div className="form-card">
      <div className="form-head">
        <span className="step">Step <span className="of">{(step + 1).toString().padStart(2, "0")}</span> / 03</span>
        <span className="title">
          {step === 0 ? "Identity" : step === 1 ? "Firm" : "Intent"}
        </span>
      </div>

      {step === 0 &&
      <div>
          <div className="field-row">
            <div className="field">
              <label>First Name<span className="req">*</span></label>
              <input value={data.first} onChange={(e) => update("first", e.target.value)} placeholder="—" />
              {errors.first && <span className="err">{errors.first}</span>}
            </div>
            <div className="field">
              <label>Surname<span className="req">*</span></label>
              <input value={data.last} onChange={(e) => update("last", e.target.value)} placeholder="—" />
              {errors.last && <span className="err">{errors.last}</span>}
            </div>
          </div>
          <div className="field">
            <label>Email (firm address)<span className="req">*</span></label>
            <input type="email" value={data.email} onChange={(e) => update("email", e.target.value)} placeholder="name@firm.com" />
            {errors.email && <span className="err">{errors.email}</span>}
          </div>
          <div className="field">
            <label>LinkedIn Profile</label>
            <input value={data.linkedin} onChange={(e) => update("linkedin", e.target.value)} placeholder="linkedin.com/in/…" />
          </div>
        </div>
      }

      {step === 1 &&
      <div>
          <div className="field">
            <label>Firm<span className="req">*</span></label>
            <input value={data.firm} onChange={(e) => update("firm", e.target.value)} placeholder="—" />
            {errors.firm && <span className="err">{errors.firm}</span>}
          </div>
          <div className="field-row">
            <div className="field">
              <label>Role<span className="req">*</span></label>
              <select value={data.title} onChange={(e) => update("title", e.target.value)}>
                <option>General Partner</option>
                <option>Managing Partner</option>
                <option>Managing Director</option>
                <option>Partner</option>
                <option>Principal</option>
                <option>Family Office / Allocator</option>
              </select>
            </div>
            <div className="field">
              <label>Primary Stage<span className="req">*</span></label>
              <select value={data.stage} onChange={(e) => update("stage", e.target.value)}>
                <option>Pre-Seed</option>
                <option>Seed</option>
                <option>Series A</option>
                <option>Series B / Growth</option>
                <option>Multi-Stage</option>
                <option>Late / Pre-IPO</option>
              </select>
            </div>
          </div>
          <div className="field">
            <label>Fund Size / AUM<span className="req">*</span></label>
            <select value={data.aum} onChange={(e) => update("aum", e.target.value)}>
              <option value="">— Select —</option>
              <option>Under $50M</option>
              <option>$50M – $250M</option>
              <option>$250M – $1B</option>
              <option>$1B – $5B</option>
              <option>$5B+</option>
            </select>
            {errors.aum && <span className="err">{errors.aum}</span>}
          </div>
        </div>
      }

      {step === 2 &&
      <div>
          <div className="field">
            <label>What do you hope to gain from the evening?<span className="req">*</span></label>
            <textarea
            value={data.intent}
            onChange={(e) => update("intent", e.target.value)}
            placeholder="A sentence is enough — we read every word."
            rows={4} />
          
            {errors.intent && <span className="err">{errors.intent}</span>}
          </div>
          <div className="field">
            <label>Referred by (optional)</label>
            <input value={data.referrer} onChange={(e) => update("referrer", e.target.value)} placeholder="Name of the GP / partner who suggested you" />
          </div>
        </div>
      }

      <div className="form-foot">
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          {step > 0 && <button className="btn-back" onClick={back}>← Back</button>}
          <div className="step-dots">
            {[0, 1, 2].map((i) =>
            <span key={i} className={"dot" + (i <= step ? " active" : "")} />
            )}
          </div>
        </div>
        <button className="btn-submit" onClick={next}>
          {step < 2 ? "Continue" : "Submit Application"} <span className="arrow">→</span>
        </button>
      </div>
    </div>);

}

function Apply() {
  return (
    <section className="section apply" id="apply" data-screen-label="Apply">
      <div className="apply-bg" />
      <div className="container">
        <div className="apply-grid">
          <div className="apply-intro">
            <span className="eyebrow eyebrow-gold">§ 07 — Application</span>
            <h2 style={{ marginTop: 24 }}><em>Request</em> an invitation.</h2>
            <p>Applications take about three minutes. The SG team reviews each within five business days. Everything you share remains confidential.


            </p>

            <div className="key-facts">
              <div className="row"><div className="k">Evening</div><div className="v">Thursday, <em>Aug. 20</em></div></div>
              <div className="row"><div className="k">Time</div><div className="v">6:00 – 8:30 PM PT</div></div>
              <div className="row"><div className="k">Locale</div><div className="v"><em>Menlo Park, CA</em></div></div>
              <div className="row"><div className="k">Dress</div><div className="v">Cocktail Party</div></div>
              <div className="row"><div className="k">Capacity</div><div className="v"><em>100</em> seats, final</div></div>
            </div>
          </div>
          <ApplyForm />
        </div>
      </div>
    </section>);

}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="footer" data-screen-label="Footer">
      <div className="container">
        <div className="footer-top">
          <div className="brand">
            <div className="mark">The Allocation</div>
            <div className="tag">Menlo Park · Aug. 20 · 2026</div>
            <div className="sg">A curated evening produced by <span style={{ color: "var(--gold)" }}>Startup Grind Silicon Valley</span> — connecting the Bay Area's most active fund managers since 2010.</div>
          </div>
          <div className="footer-col">
            <h5>Navigate</h5>
            <a href="#about">About</a>
            <a href="#access">Access</a>
            <a href="#who">The Room</a>
            <a href="#faq">Questions</a>
            <a href="#apply">Apply</a>
          </div>
          <div className="footer-col">
            <h5>Contact</h5>
            <a href="mailto:james.gee@startupgrind.com">james.gee@startupgrind.com</a>
            <a href="https://www.startupgrind.com" target="_blank" rel="noreferrer">startupgrind.com ↗</a>
            <a href="https://www.linkedin.com/in/james-gee-sg/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          </div>
          <div className="footer-col">
            <h5>Startup Grind</h5>
            <a href="https://www.startupgrind.com/silicon-valley-san-francisco-bay-area/" target="_blank" rel="noreferrer">Silicon Valley Chapter ↗</a>
            <a href="https://www.startupgrind.com/conference/" target="_blank" rel="noreferrer">Startup Grind Conference ↗</a>
            <a href="https://www.startupgrind.com" target="_blank" rel="noreferrer">Global Network ↗</a>
            <a href="https://www.linkedin.com/company/startup-grind/posts/?feedView=all" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="copy">© 2026 The Allocation · All rights reserved</span>
          <span className="ascii">↳ Strictly confidential · No press</span>
        </div>
      </div>
    </footer>);

}

/* ---------- Top Nav ---------- */
function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#top" className="nav-logo">
          <span className="mark">The Allocation '26</span>
          <span className="dot" />
        </a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#access">Access</a>
          <a href="#who">The Room</a>
          <a href="#faq">FAQ</a>
          <a href="#partners">Partners</a>
          <a href="#hosts">Hosts</a>
        </div>
        <div className="nav-cta-group">
          <a href="#partners" className="nav-cta nav-cta-secondary">
            <svg className="nav-icon" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M6 0.5 L7.4 4.6 L11.5 6 L7.4 7.4 L6 11.5 L4.6 7.4 L0.5 6 L4.6 4.6 Z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
            </svg>
            Sponsor
          </a>
          <a href="#apply" className="nav-cta">Apply</a>
        </div>
      </div>
    </nav>);

}

/* ---------- Tweaks ---------- */
const PALETTE_SWATCHES = [
{ key: "ink-gold", swatch: ["#0B0D12", "#C9A66B", "#E8E0CF"] },
{ key: "midnight", swatch: ["#0A1220", "#8FA6C5", "#E8EEF6"] },
{ key: "oxblood", swatch: ["#120A0B", "#B66242", "#EFE3D9"] },
{ key: "bone", swatch: ["#F2EBDC", "#8A6A2E", "#16171B"] }];


function Tweaks({ tweaks, setTweak }) {
  const swatchOptions = PALETTE_SWATCHES.map((p) => p.swatch);
  const currentSwatch = (PALETTE_SWATCHES.find((p) => p.key === tweaks.palette) || PALETTE_SWATCHES[0]).swatch;
  return (
    <TweaksPanel>
      <TweakSection title="Palette">
        <TweakColor
          label="Theme"
          value={currentSwatch}
          options={swatchOptions}
          onChange={(v) => {
            const match = PALETTE_SWATCHES.find((p) => p.swatch[0] === v[0] && p.swatch[1] === v[1]);
            if (match) setTweak("palette", match.key);
          }} />
        
      </TweakSection>
      <TweakSection title="Typography">
        <TweakSelect
          label="Display Font"
          value={tweaks.displayFont}
          options={[
          { value: "instrument", label: "Instrument Serif" },
          { value: "cormorant", label: "Cormorant Garamond" },
          { value: "ebgaramond", label: "EB Garamond" },
          { value: "playfair", label: "Playfair Display" }]
          }
          onChange={(v) => setTweak("displayFont", v)} />
        
        <TweakRadio
          label="Wordmark"
          value={tweaks.wordmarkStyle}
          options={[
          { value: "italic-the", label: "Italic 'The'" },
          { value: "all-roman", label: "All Roman" }]
          }
          onChange={(v) => setTweak("wordmarkStyle", v)} />
        
      </TweakSection>
      <TweakSection title="Composition">
        <TweakRadio
          label="Hero Treatment"
          value={tweaks.heroTreatment}
          options={[
          { value: "grid", label: "Grid" },
          { value: "soft", label: "Soft" }]
          }
          onChange={(v) => setTweak("heroTreatment", v)} />
        
        <TweakToggle
          label="Marquee Strip"
          value={tweaks.showMarquee}
          onChange={(v) => setTweak("showMarquee", v)} />
        
      </TweakSection>
    </TweaksPanel>);

}

/* ---------- App ---------- */
function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Apply palette vars to :root
  useEffect(() => {
    const palette = PALETTES[tweaks.palette] || PALETTES["ink-gold"];
    const root = document.documentElement;
    // Reset previously-applied custom keys
    ["--bg", "--bg-2", "--surface", "--ink", "--ink-soft", "--gold", "--muted", "--muted-2", "--line", "--line-strong"].forEach((k) => root.style.removeProperty(k));
    Object.entries(palette).forEach(([k, v]) => root.style.setProperty(k, v));
    root.style.setProperty("--serif", DISPLAY_FONTS[tweaks.displayFont] || DISPLAY_FONTS.instrument);
  }, [tweaks.palette, tweaks.displayFont]);

  // Apply wordmark style
  useEffect(() => {
    document.querySelectorAll(".wordmark .the").forEach((el) => {
      el.style.fontStyle = tweaks.wordmarkStyle === "italic-the" ? "italic" : "normal";
    });
  }, [tweaks.wordmarkStyle]);

  // Hero grid visibility
  useEffect(() => {
    const g = document.querySelector(".hero-grid");
    if (g) g.style.opacity = tweaks.heroTreatment === "grid" ? "1" : "0";
  }, [tweaks.heroTreatment]);

  return (
    <div className="page">
      <Nav />
      <Hero />
      {tweaks.showMarquee && <Marquee />}
      <About />
      <Access />
      <Who />
      <FAQSection />
      <Sponsors />
      <Hosts />
      <Apply />
      <Footer />
      <Tweaks tweaks={tweaks} setTweak={setTweak} />
    </div>);

}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);