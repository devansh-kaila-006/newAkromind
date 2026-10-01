export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20 font-sans space-y-12 bg-warm-cream">
      <header className="space-y-3 border-b border-[#E5E0D5] pb-8">
        <span className="text-[10px] font-mono uppercase tracking-widest text-terracotta font-bold">
          Institutional Governance
        </span>
        <h1 className="text-4xl font-serif italic text-warm-charcoal">Privacy & Data Governance Policy</h1>
        <p className="text-xs text-stone-500 font-mono">Effective Date: June 2026 · New Akromind Legal Compliance</p>
      </header>

      <div className="space-y-8 text-sm text-stone-700 leading-relaxed font-sans">
        <section className="p-6 bg-[#FCFAF7] border border-[#E5E0D5] rounded-sm space-y-3">
          <h2 className="text-base font-bold text-warm-charcoal uppercase tracking-wider font-sans">1. Preamble & Scope</h2>
          <p>
            New Akromind ("we", "our", or "the Ecosystem"), headquartered at 18, Kapoor Niwas, Dugri, Ludhiana, Punjab (141001), respects and safeguards your personal privacy. This Privacy Policy outlines the standards governing how we collect, process, store, and protect personal, academic, psychological, and transaction data across AKROMIND, AKROTUTION, AKROPLACEMENT, and AKROHOLIDAYS.
          </p>
        </section>

        <section className="p-6 bg-[#FCFAF7] border border-[#E5E0D5] rounded-sm space-y-3">
          <h2 className="text-base font-bold text-warm-charcoal uppercase tracking-wider font-sans">2. Information Collection Across Verticals</h2>
          <p>We collect information strictly necessary to provide tailored, high-integrity growth services:</p>
          <ul className="list-disc pl-5 space-y-2 text-xs text-stone-600">
            <li><strong>AKROMIND:</strong> Intake reflections, aptitude test responses, and communication notes. All counseling dialogue is protected under strict client-counselor privilege.</li>
            <li><strong>AKROTUTION:</strong> Student contact records, academic marks, board targets, homework submissions, and diagnostic test analytics.</li>
            <li><strong>AKROPLACEMENT:</strong> Resumes, employment history, portfolios, mock interview recordings, and corporate compensation targets.</li>
            <li><strong>AKROHOLIDAYS:</strong> Passport identification details, visa documentation proofs, dietary preferences, and travel party member records.</li>
          </ul>
        </section>

        <section className="p-6 bg-[#FCFAF7] border border-[#E5E0D5] rounded-sm space-y-3">
          <h2 className="text-base font-bold text-warm-charcoal uppercase tracking-wider font-sans">3. Zero Data Sale Commitment</h2>
          <p>
            We strictly enforce a Zero Data Monetization pledge: New Akromind never sells, rents, or trades your personal data, resumes, test scores, or counseling logs to third-party data brokers or advertisers under any circumstances.
          </p>
        </section>

        <section className="p-6 bg-[#FCFAF7] border border-[#E5E0D5] rounded-sm space-y-3">
          <h2 className="text-base font-bold text-warm-charcoal uppercase tracking-wider font-sans">4. Security & Retention Protocols</h2>
          <p>
            All electronic data transmissions are encrypted using industry-standard TLS 1.3 encryption. Physical archives are kept under restricted dual-authorization lock. Clients may request total deletion of their profile records upon graduation or disenrollment by writing to hello.newakromind@gmail.com.
          </p>
        </section>
      </div>
    </div>
  );
}
