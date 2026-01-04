export default function HeroSection() {
  return (
    <section className="pt-32 pb-12 px-6 sm:px-8 lg:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <div className="space-y-6">
          <div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground tracking-tight leading-tight">
              Refine Your
              <span className="block bg-gradient-to-r from-primary via-primary to-emerald-400 bg-clip-text text-transparent">
                Software Spend
              </span>
            </h1>
          </div>

          <p className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Stop throwing away money on unused SaaS licenses. We identify hidden waste and optimize your software portfolio to save you thousands every month.
          </p>
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-6">
          <button className="px-8 py-4 border border-foreground/20 text-foreground rounded-lg font-semibold hover:border-primary hover:bg-primary/5 transition-all text-base sm:text-lg">
            Learn More
          </button>
          <svg className="w-6 h-6 text-primary animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>

      </div>
    </section>
  );
}
