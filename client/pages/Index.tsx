import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ValueSection from "@/components/ValueSection";
import ContactSection from "@/components/ContactSection";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ValueSection />
        <ContactSection />
      </main>
      <footer className="border-t border-border/30 py-8 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto text-center text-foreground/50 text-sm">
          <p>&copy; 2024 Refine. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
