export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">

      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-sm font-medium">
          For Local Businesses Running Google Ads
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Find Wasted Spend in Your<br />
          <span className="text-[#58a6ff]">Google Ads Campaigns</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Connect your Google Ads account and instantly see which keywords, audiences, and campaigns are burning your budget — with clear, actionable fixes.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
        >
          Start Scanning — $19/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No contracts.</p>

        {/* Social proof strip */}
        <div className="mt-12 grid grid-cols-3 gap-6 border border-[#30363d] rounded-xl bg-[#161b22] p-6">
          <div>
            <p className="text-2xl font-bold text-white">$4,200</p>
            <p className="text-sm text-[#8b949e]">avg. waste found per account</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">3 min</p>
            <p className="text-sm text-[#8b949e]">to connect &amp; get insights</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">Local</p>
            <p className="text-sm text-[#8b949e]">business focused analysis</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="border border-[#58a6ff] rounded-2xl bg-[#161b22] p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <p className="text-sm font-semibold text-[#58a6ff] uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$19</p>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Full Google Ads account analysis',
              'Wasted keyword detection',
              'Audience &amp; placement waste report',
              'Campaign-level budget scoring',
              'Weekly automated scans',
              'Actionable fix recommendations',
            ].map((f, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span dangerouslySetInnerHTML={{ __html: f }} />
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-center"
          >
            Get Started
          </a>
          <p className="mt-3 text-xs text-[#8b949e]">Secure checkout via Lemon Squeezy</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="border border-[#30363d] rounded-xl bg-[#161b22] p-6">
            <h3 className="font-semibold text-white mb-2">How does it connect to my Google Ads account?</h3>
            <p className="text-sm text-[#8b949e]">After subscribing, you authorize access via Google OAuth. We use read-only permissions to pull your campaign data — we never make changes to your account.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl bg-[#161b22] p-6">
            <h3 className="font-semibold text-white mb-2">What counts as "wasted" spend?</h3>
            <p className="text-sm text-[#8b949e]">Keywords with high cost and zero conversions, irrelevant search terms, underperforming placements, and campaigns with poor quality scores relative to their budget.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl bg-[#161b22] p-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel anytime?</h3>
            <p className="text-sm text-[#8b949e]">Yes. Cancel with one click from your billing portal. You keep access until the end of your billing period with no questions asked.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Google Ads Waste Scanner. All rights reserved.
      </footer>
    </main>
  )
}
