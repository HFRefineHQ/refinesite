export default function ValueSection() {
  return (
    <section id="value" className="scroll-mt-16 py-24 px-6 sm:px-8 lg:px-12 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-12">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
              The Hidden Cost of SaaS Bloat
            </h2>
            <p className="text-lg text-foreground/70">
              Most companies waste 30-40% of their software budget on unused licenses, overlapping tools, and poor contract management. We help you find and eliminate that waste.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-lg border border-border/50 bg-background/40 backdrop-blur-sm hover:border-primary/50 transition-colors text-center">
              <div className="space-y-2">
                <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
                  40%
                </div>
                <p className="text-foreground/70 font-medium">Average SaaS waste per company</p>
              </div>
            </div>

            <div className="p-8 rounded-lg border border-border/50 bg-background/40 backdrop-blur-sm hover:border-primary/50 transition-colors text-center">
              <div className="space-y-2">
                <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
                  $450K
                </div>
                <p className="text-foreground/70 font-medium">Typical annual savings for enterprise</p>
              </div>
            </div>

            <div className="p-8 rounded-lg border border-border/50 bg-background/40 backdrop-blur-sm hover:border-primary/50 transition-colors text-center">
              <div className="space-y-2">
                <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
                  1 Hour
                </div>
                <p className="text-foreground/70 font-medium">To complete your initial audit</p>
              </div>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-5xl mx-auto w-full">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">
                How Refine Works
              </h3>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Kickoff & Discovery</h4>
                    <p className="text-foreground/60">We start with a structured meeting to understand your team, tools, contracts, and current pain points.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Spend & Usage Review</h4>
                    <p className="text-foreground/60">We review licenses, plans, usage patterns, and redundancies across your software stack.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Recommendations & Next Steps</h4>
                    <p className="text-foreground/60">You receive a clear summary of cost-saving opportunities, plan changes, and renewal risks</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">
                What You Get
              </h3>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-foreground/80">A complete inventory of active SaaS tools and licenses</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-foreground/80">Identification of unused, underused, or redundant software</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-foreground/80">Plan and seat optimization recommendations</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-foreground/80">Renewal calendar and cost-control suggestions</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-foreground/80">Clear, non-technical summary for built for founders or finance leads</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
