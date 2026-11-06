import { useState, FormEvent } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  Globe,
  Linkedin,
  Mail,
  Send,
  Loader2,
  AlertCircle
} from "lucide-react";
import { PROFILE } from "../../data/profile";
import { MagneticButton } from "../motion/MagneticButton";
import { sendBookingEmail, ADMIN_EMAIL, BookingFormData } from "../../services/emailService";

export function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isConfigMissing, setIsConfigMissing] = useState(false);
  const [lastSubmitted, setLastSubmitted] = useState<{ name: string; email: string; topic: string } | null>(null);
  const [honeypot, setHoneypot] = useState("");
  const [formLoadTime] = useState<number>(() => Date.now());

  const [formData, setFormData] = useState<BookingFormData>({
    name: "",
    organization: "",
    email: "",
    topic: "Semiconductor Strategy & Capex",
    message: ""
  });

  const handleMailtoFallback = () => {
    const subject = encodeURIComponent(`[Advisory Inquiry: ${formData.topic}] from ${formData.name || "Executive"}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nOrganization: ${formData.organization}\nEmail: ${formData.email}\nTopic: ${formData.topic}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${ADMIN_EMAIL}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // 1. Bot Trap: Honeypot field filled by automated crawler
    if (honeypot.trim().length > 0) {
      console.warn('[Anti-Spam] Bot submission blocked by honeypot.');
      // Silently pretend success to fool the bot without sending any email
      setFormSubmitted(true);
      return;
    }

    // 2. Bot Trap: Inhuman submission speed (< 1.5 seconds)
    const elapsedSeconds = (Date.now() - formLoadTime) / 1000;
    if (elapsedSeconds < 1.5) {
      console.warn('[Anti-Spam] Submission was too fast. Blocked potential automated bot.');
      setFormSubmitted(true);
      return;
    }

    // 3. Fake / Disposable Email Filter
    const emailLower = formData.email.trim().toLowerCase();
    const fakeEmails = ['test@test.com', 'test@gmail.com', 'fake@fake.com', 'asdf@asdf.com', 'abc@abc.com', 'admin@admin.com', 'no@no.com'];
    const disposableDomains = ['mailinator.com', 'tempmail.com', '10minutemail.com', 'guerrillamail.com', 'throwawaymail.com', 'yopmail.com', 'sharklasers.com', 'trashmail.com'];
    const emailDomain = emailLower.split('@')[1] || '';

    if (fakeEmails.includes(emailLower) || disposableDomains.includes(emailDomain)) {
      setErrorMessage('Please provide a genuine, active professional email address. Temporary or placeholder addresses are not permitted.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);
    setIsConfigMissing(false);

    try {
      const result = await sendBookingEmail(formData);

      if (result.success) {
        setLastSubmitted({
          name: formData.name,
          email: formData.email,
          topic: formData.topic
        });
        setFormSubmitted(true);
        setFormData({
          name: "",
          organization: "",
          email: "",
          topic: "Semiconductor Strategy & Capex",
          message: ""
        });
      } else {
        setIsConfigMissing(!!result.isConfigurationMissing);
        setErrorMessage(
          result.message || "Failed to send message. Please try again or contact us directly."
        );
      }
    } catch (err: any) {
      setErrorMessage(err?.message || "An unexpected error occurred while sending your inquiry.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-12 lg:py-16 px-6 lg:px-12 bg-[#08090B]">
      <div className="max-w-7xl mx-auto">
        {/* Header Badge */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono text-[#C9A46C] uppercase tracking-widest">
            CONFIDENTIAL INQUIRY · EXECUTIVE DIALOGUE
          </span>
          <div className="h-[1px] w-12 bg-[#242933]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Text & Links */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAFAF8] leading-[1.08] mb-6">
                LET'S TALK ABOUT <br />
                <span className="font-serif italic font-normal text-[#C9A46C]">
                  WHAT COMES NEXT.
                </span>
              </h1>

              <p className="text-base text-[#969BA3] leading-relaxed mb-8">
                Whether you are exploring a new technology opportunity, building a manufacturing capability, developing strategic partnerships or navigating a complex industry challenge, let's start a conversation.
              </p>

              <div className="space-y-4 pt-6 border-t border-[#242933]">
                {/* Direct Advisory Desk - Official Corporate Email */}
                <a
                  href="mailto:info@rksc.co.in"
                  className="flex items-center justify-between p-4 rounded-xl bg-[#111317] border border-[#242933] hover:border-[#C9A46C] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#C9A46C]" />
                    <div>
                      <div className="text-sm font-semibold text-[#FAFAF8]">
                        Direct Advisory Desk
                      </div>
                      <div className="text-xs font-mono text-[#66717D] group-hover:text-[#C9A46C] transition-colors">
                        info@rksc.co.in
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#66717D] group-hover:text-[#C9A46C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-[#111317] border border-[#242933] hover:border-[#C9A46C] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-5 h-5 text-[#C9A46C]" />
                    <div>
                      <div className="text-sm font-semibold text-[#FAFAF8]">
                        Connect on LinkedIn
                      </div>
                      <div className="text-xs font-mono text-[#66717D]">
                        linkedin.com/in/sharatkaul
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#66717D] group-hover:text-[#C9A46C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <div className="p-4 rounded-xl bg-[#111317] border border-[#242933] flex items-center gap-3">
                  <Globe className="w-5 h-5 text-[#C9A46C]" />
                  <div>
                    <div className="text-sm font-semibold text-[#FAFAF8]">
                      Global Advisory Corridors
                    </div>
                    <div className="text-xs font-mono text-[#66717D]">
                      Dallas, TX · Bengaluru, India
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 text-xs font-mono text-[#66717D]">
              DISCRETE &amp; CONFIDENTIAL C-SUITE ENGAGEMENTS
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-2xl bg-[#111317] border border-[#242933] shadow-2xl">
            {formSubmitted ? (
              <div className="py-12 text-center space-y-5">
                <div className="w-16 h-16 rounded-full bg-[#C9A46C]/20 border border-[#C9A46C] text-[#C9A46C] mx-auto flex items-center justify-center animate-bounce-short">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#C9A46C] bg-[#C9A46C]/10 px-3 py-1 rounded-full border border-[#C9A46C]/20">
                    Message Dispatched Successfully
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#FAFAF8] pt-2">
                    Dialogue Initiated
                  </h3>
                </div>

                <div className="p-4 rounded-xl bg-[#1B1E24] border border-[#242933] max-w-lg mx-auto text-left text-xs space-y-2 font-mono text-[#969BA3]">
                  <div className="flex justify-between">
                    <span className="text-[#66717D]">Status:</span>
                    <span className="text-[#C9A46C]">Delivered to Advisory Desk</span>
                  </div>
                  {lastSubmitted?.name && (
                    <div className="flex justify-between">
                      <span className="text-[#66717D]">Sender:</span>
                      <span className="text-[#FAFAF8]">{lastSubmitted.name}</span>
                    </div>
                  )}
                  {lastSubmitted?.email && (
                    <div className="flex justify-between">
                      <span className="text-[#66717D]">Confirmation for:</span>
                      <span className="text-[#FAFAF8]">{lastSubmitted.email}</span>
                    </div>
                  )}
                  {lastSubmitted?.topic && (
                    <div className="flex justify-between">
                      <span className="text-[#66717D]">Topic:</span>
                      <span className="text-[#C9A46C]">{lastSubmitted.topic}</span>
                    </div>
                  )}
                </div>

                <p className="text-sm text-[#969BA3] max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out. Your consultation request has been received. Our advisory team will review your message and reply back to <span className="text-[#FAFAF8] font-mono">{lastSubmitted?.email}</span> shortly.
                </p>

                <div className="pt-2">
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setErrorMessage(null);
                    }}
                    className="px-6 py-2.5 rounded-lg bg-[#1B1E24] border border-[#242933] text-xs font-mono text-[#FAFAF8] hover:text-[#C9A46C] hover:border-[#C9A46C] transition-all"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Anti-spam Honeypot: Invisible to human users, traps automated bots */}
                <div style={{ display: "none", position: "absolute", opacity: 0, zIndex: -1 }} aria-hidden="true">
                  <label htmlFor="hp_website">Leave this field blank</label>
                  <input
                    id="hp_website"
                    type="text"
                    name="hp_website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                  />
                </div>

                {/* Error Banner if any */}
                {errorMessage && (
                  <div className="p-4 rounded-xl bg-red-950/40 border border-red-500/40 text-red-200 text-xs space-y-2">
                    <div className="flex items-center gap-2 font-semibold">
                      <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                      <span>Unable to send inquiry</span>
                    </div>
                    <p className="text-red-300/90 leading-relaxed">
                      {errorMessage}
                    </p>
                    {isConfigMissing && (
                      <p className="font-mono text-[11px] text-amber-300/90 bg-amber-950/40 p-2 rounded border border-amber-600/30">
                        To enable direct delivery, please configure your email settings in your project's <code className="text-white">.env</code> file.
                      </p>
                    )}
                    <button
                      type="button"
                      onClick={handleMailtoFallback}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-red-900/60 hover:bg-red-900 text-white font-mono text-[11px] transition-colors"
                    >
                      <span>Send directly using your mail client</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#969BA3] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Dr. Priya Sharma"
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-lg bg-[#1B1E24] border border-[#242933] text-sm text-[#FAFAF8] placeholder-[#66717D] focus:outline-none focus:border-[#C9A46C] transition-colors disabled:opacity-50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#969BA3] mb-2">
                      Organization / Entity
                    </label>
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="e.g. Foundry / Technology Group"
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-lg bg-[#1B1E24] border border-[#242933] text-sm text-[#FAFAF8] placeholder-[#66717D] focus:outline-none focus:border-[#C9A46C] transition-colors disabled:opacity-50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#969BA3] mb-2">
                      Professional Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@enterprise.com"
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-lg bg-[#1B1E24] border border-[#242933] text-sm text-[#FAFAF8] placeholder-[#66717D] focus:outline-none focus:border-[#C9A46C] transition-colors disabled:opacity-50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#969BA3] mb-2">
                      What would you like to discuss?
                    </label>
                    <select
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-lg bg-[#1B1E24] border border-[#242933] text-sm text-[#FAFAF8] focus:outline-none focus:border-[#C9A46C] transition-colors disabled:opacity-50"
                    >
                      <option value="Semiconductor Strategy &amp; Capex">Semiconductor Strategy &amp; Capex</option>
                      <option value="Advanced Packaging &amp; OSAT Advisory">Advanced Packaging &amp; OSAT Advisory</option>
                      <option value="Technology &amp; Business Development">Technology &amp; Business Development</option>
                      <option value="Ecosystem &amp; National Roadmaps">Ecosystem &amp; National Roadmaps</option>
                      <option value="Manufacturing &amp; Cleanroom Scale-Up">Manufacturing &amp; Cleanroom Scale-Up</option>
                      <option value="Executive Advisory &amp; Board Briefings">Executive Advisory &amp; Board Briefings</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#969BA3] mb-2">
                    Executive Message / Scope *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe the strategic opportunity, manufacturing requirement, or technology challenge..."
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-lg bg-[#1B1E24] border border-[#242933] text-sm text-[#FAFAF8] placeholder-[#66717D] focus:outline-none focus:border-[#C9A46C] transition-colors resize-none disabled:opacity-50"
                  />
                </div>

                <div className="pt-2">
                  <MagneticButton
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#C9A46C] text-[#08090B] font-mono text-xs font-bold tracking-wider uppercase hover:bg-[#E1C58F] transition-all shadow-xl shadow-[#C9A46C]/10 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-[#08090B]" />
                        <span>Sending Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Start a Conversation</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </MagneticButton>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
