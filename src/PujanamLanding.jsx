import React, { useState, useEffect } from "react";
import { User, Box, Clock, Leaf } from "lucide-react";

// Replace BETA_WEBHOOK_URL with your webhook (Zapier/Make/endpoint) that will notify you (email/Slack/etc.).
// Example: const BETA_WEBHOOK_URL = "https://hooks.zapier.com/hooks/catch/123456/abcdef";
const BETA_WEBHOOK_URL = window.BETA_WEBHOOK_URL || "";

// Single-file React component for Pujanam landing page
// Uses Tailwind CSS for styling. Meant to be dropped into a React app that
// already has Tailwind configured. Uses lucide-react icons (install with `npm i lucide-react`).

export default function PujanamLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-amber-50 to-white text-slate-900">
      {/* NAV */}
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-semibold">PN</div>
          <div>
            <div className="text-lg font-semibold">Pujanam</div>
            <div className="text-sm text-slate-500">End-to-end puja ecosystem</div>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
          
          <a href="#how" className="hover:underline">How it works</a>
          <button onClick={() => window.__setBetaModalOpen && window.__setBetaModalOpen(true)} className="ml-4 rounded-md px-4 py-2 bg-amber-600 text-white text-sm shadow">Sign up for Beta</button>
        </nav>
      </header>

      {/* HERO */}
      <main className="max-w-6xl mx-auto px-6">
        {/* Beta modal state bridge for header button to open modal */}
        <BetaModalBridge />

        <section className="rounded-2xl p-8 md:p-12 shadow-sm bg-no-repeat">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-2xl md:text-3xl font-medium text-amber-700">Now you can experience the divine effortlessly.</p>
              <h1 className="mt-4 text-3xl md:text-5xl leading-tight font-extrabold">Pujanam — your end-to-end puja ecosystem</h1>
              <p className="mt-4 text-slate-700 text-lg md:text-xl">Stop coordinating logistics and start focusing on devotion. We manage the pandit, samagri, muhurat and eco-friendly disposal.</p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <button onClick={() => window.__setBetaModalOpen && window.__setBetaModalOpen(true)} className="inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 bg-amber-600 text-white font-medium shadow">Join Exclusive Beta</button>
              </div>

              <div className="mt-6 text-sm text-slate-500">Trusted by families & temples — curated pandits, authentic samagri, accurate muhurats and respectful disposal.</div>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-md">
              <div className="text-sm text-slate-500">Now you can</div>
              <div className="mt-3 grid grid-cols-1 gap-3">
                <div className="flex items-start gap-3">
                  <div className="p-3 rounded-md bg-amber-50">
                    <User className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <div className="font-medium">Book a Verified Pandit</div>
                    <div className="text-sm text-slate-500">Curated network of knowledgeable pandits for any ceremony.</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-3 rounded-md bg-amber-50">
                    <User className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <div className="font-medium">AI‑Assisted Pandit</div>
                    <div className="text-sm text-slate-500">Instant ritual steps, mantras, clarifications & puja guidance powered by AI.</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-3 rounded-md bg-amber-50">
                    <Box className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <div className="font-medium">Get Authentic Samagri</div>
                    <div className="text-sm text-slate-500">Pre-packed kits delivered to your doorstep with traditional items.</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-3 rounded-md bg-amber-50">
                    <Clock className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <div className="font-medium">Find the Perfect Muhurat</div>
                    <div className="text-sm text-slate-500">Accurate timings and personalized scheduling for ceremonies.</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-3 rounded-md bg-amber-50">
                    <Leaf className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <div className="font-medium">Conclude Respectfully</div>
                    <div className="text-sm text-slate-500">Eco-friendly disposal and guidance for sacred remains.</div>
                  </div>
                </div>

                <a href="#book" className="mt-4 inline-block text-center rounded-md px-4 py-2 bg-amber-600 text-white font-medium">Get Started</a>
              </div>
            </div>
          </div>
        </section>

        

        {/* HOW IT WORKS */}
        <section id="how" className="mt-12 rounded-2xl p-8 bg-white shadow-sm">
          <h2 className="text-2xl font-semibold">How Pujanam works</h2>

          {/* Visual stepper */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-5 gap-4 items-start">
            <div className="flex flex-col items-start gap-3 p-4 rounded-xl bg-amber-50">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-amber-600 font-semibold">1</div>
              <div className="font-semibold">Select Pooja</div>
              <div className="text-sm text-slate-600">Pick the ceremony you want to perform from our catalog.</div>
            </div>

            <div className="flex flex-col items-start gap-3 p-4 rounded-xl bg-amber-50">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-amber-600 font-semibold">2</div>
              <div className="font-semibold">Auspicious Muhurat</div>
              <div className="text-sm text-slate-600">We suggest the best muhurat based on your location and date.</div>
            </div>

            <div className="flex flex-col items-start gap-3 p-4 rounded-xl bg-amber-50">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-amber-600 font-semibold">3</div>
              <div className="font-semibold">Choose Guidance</div>
              <div className="text-sm text-slate-600">Book a verified pandit or use AI‑assisted step-by-step guidance.</div>
            </div>

            <div className="flex flex-col items-start gap-3 p-4 rounded-xl bg-amber-50">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-amber-600 font-semibold">4</div>
              <div className="font-semibold">Samagri Kit</div>
              <div className="text-sm text-slate-600">We recommend a tailored kit you can accept, customize or pick items from.</div>
            </div>

            <div className="flex flex-col items-start gap-3 p-4 rounded-xl bg-amber-50">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-amber-600 font-semibold">5</div>
              <div className="font-semibold">Respectful Conclusion</div>
              <div className="text-sm text-slate-600">Options for eco-friendly disposal, pickup or step-by-step home methods.</div>
            </div>
          </div>

          
        </section>

        {/* CONTACT / CTA */}
        <section id="how-video" className="mt-12 mb-12 rounded-2xl p-8 bg-white shadow-sm">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">How it works — quick walkthrough</h3>
            {/* Replace VIDEO_ID with your YouTube video id */}
            <div className="aspect-w-16 aspect-h-9 bg-black rounded-lg overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/VIDEO_ID"
                title="Pujanam — How it works"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className="mt-4 text-sm text-slate-600">Embed a YouTube walkthrough here. To change the video, replace <code>VIDEO_ID</code> in the iframe <code>src</code>.</p>
          </div>
        </section>

        {/* FOOTER */}
        
        {/* BETA PROGRAM */}
        

        <footer className="py-8 text-sm text-slate-500">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <div>© {new Date().getFullYear()} Pujanam. All rights reserved.</div>
            <div className="flex gap-4">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Support</a>
            </div>
          </div>
        </footer>

        {/* BETA SIGNUP MODAL (in-page) */}
        <BetaModal />
      </main>
    </div>
  );
}

/* Beta modal bridge component: provides a global setter so the header button can open the modal */
function BetaModalBridge() {
  const [, setOpen] = useState(false);
  // expose a setter globally so header button can open the modal (simple and avoids prop threading)
  useEffect(() => {
    window.__setBetaModalOpen = setOpen;
    return () => { window.__setBetaModalOpen = null; };
  }, []);
  return null;
}

function BetaModal() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', interest: 'AI‑Assisted Pandit', note: '' });

  // sync with global setter
  useEffect(() => {
    window.__setBetaModalOpen = (val) => setOpen(true);
    return () => { window.__setBetaModalOpen = null; };
  }, []);

  const handleChange = (k) => (e) => setForm(s => ({ ...s, [k]: e.target.value }));

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const payload = { ...form, timestamp: new Date().toISOString() };

    try {
      // Try POSTing to the configured webhook. Replace BETA_WEBHOOK_URL with your real endpoint.
      if (BETA_WEBHOOK_URL) {
        await fetch(BETA_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      } else {
        // Fallback: send a beacon to the local server route (if you later add one), or log to console.
        if (navigator.sendBeacon) {
          const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
          navigator.sendBeacon('/api/beta-signup', blob);
        }
        console.log('Beta signup payload (no webhook configured):', payload);
      }

      // mark success and show message
      setSuccess(true);

      // also store locally (helpful for debugging / review)
      const stored = JSON.parse(localStorage.getItem('pujanam_beta_signups' || '[]')) || [];
      stored.push(payload);
      localStorage.setItem('pujanam_beta_signups', JSON.stringify(stored));

      // Optional: notify the site owner using Notification API (shows desktop notification to current user only)
      if (typeof Notification !== 'undefined' && Notification.permission === 'granted') {
        new Notification('Thanks — Beta signup received', { body: `${form.name} — ${form.email}` });
      } else if (typeof Notification !== 'undefined' && Notification.permission !== 'denied') {
        Notification.requestPermission().then(p => { if (p === 'granted') new Notification('Thanks — Beta signup received', { body: `${form.name} — ${form.email}` }); });
      }

    } catch (err) {
      console.error('Failed to send beta signup', err);
      alert('Failed to submit — please try again.');
    } finally {
      setLoading(false);
      // auto-close after a short delay so user sees success
      setTimeout(() => { setOpen(false); setSuccess(false); setForm({ name: '', email: '', phone: '', interest: 'AI‑Assisted Pandit', note: '' }); }, 1800);
    }
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
      <div className="relative w-full max-w-xl bg-white rounded-xl shadow-lg p-6">
        <button className="absolute top-3 right-3 text-slate-500" onClick={() => setOpen(false)}>✕</button>

        {!success ? (
          <form onSubmit={handleSubmit} className="grid gap-3">
            <h3 className="text-xl font-semibold">Request Beta Access</h3>
            <p className="text-sm text-slate-600">Join the exclusive beta for early access to AI‑Pandit, priority booking and offers.</p>

            <label className="text-sm text-slate-600">Full name</label>
            <input required value={form.name} onChange={handleChange('name')} className="px-4 py-2 rounded-md border" />

            <label className="text-sm text-slate-600">Email</label>
            <input required type="email" value={form.email} onChange={handleChange('email')} className="px-4 py-2 rounded-md border" />

            <label className="text-sm text-slate-600">Phone (optional)</label>
            <input value={form.phone} onChange={handleChange('phone')} className="px-4 py-2 rounded-md border" />

            <label className="text-sm text-slate-600">What are you interested in?</label>
            <select value={form.interest} onChange={handleChange('interest')} className="px-4 py-2 rounded-md border">
              <option>AI‑Assisted Pandit</option>
              <option>Verified Pandit</option>
              <option>Samagri Kits</option>
              <option>All of the above</option>
            </select>

            <label className="text-sm text-slate-600">Tell us briefly (optional)</label>
            <textarea value={form.note} onChange={handleChange('note')} rows={3} className="px-4 py-2 rounded-md border" />

            <div className="flex items-center gap-3">
              <button disabled={loading} type="submit" className="rounded-md px-4 py-2 bg-amber-600 text-white">{loading ? 'Submitting...' : 'Request Beta Access'}</button>
              <button type="button" className="text-sm text-slate-600" onClick={() => setOpen(false)}>Cancel</button>
            </div>
          </form>
        ) : (
          <div className="text-center py-8">
            <div className="text-2xl">🎉</div>
            <div className="mt-3 font-semibold">You're in — thank you!</div>
            <div className="mt-2 text-sm text-slate-600">We’ll review your request and email you if accepted.</div>
          </div>
        )}
      </div>
    </div>
  );
}

function FeatureCard({ title, children, icon }) {
  return (
    <div className="rounded-xl p-6 bg-white shadow-sm flex gap-4 items-start">
      <div className="p-3 rounded-md bg-amber-50">{icon}</div>
      <div>
        <div className="font-semibold">{title}</div>
        <div className="text-sm text-slate-600 mt-1">{children}</div>
      </div>
    </div>
  );
}
