"use client";
import SignInWithGoogle from "@/components/SignInWithGoogle";
import Link from "next/link";

const page = () => {
  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)]">
      {/* Navigation */}
      <nav className="glass-effect fixed top-0 left-0 right-0 z-50 border-b border-[var(--color-neutral-700)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">⚡</span>
              <span className="font-display text-xl font-bold text-[var(--color-text-primary)]">
                Flashlearn
              </span>
            </div>
            <div className="flex items-center space-x-6">
              <Link 
                href="/about" 
                className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-200 font-medium"
              >
                About
              </Link>
              <button className="btn-header">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="space-y-8">
            <div className="text-5xl sm:text-6xl lg:text-8xl font-display font-light leading-tight">
              <span className="text-[var(--color-text-primary)]">Turn chaos into</span>
              <br />
              <span className="text-gradient">mastery</span>
            </div>
            
            <p className="text-xl sm:text-2xl text-[var(--color-text-secondary)] max-w-3xl mx-auto leading-relaxed">
              AI-powered document analysis and summarization that transforms overwhelming information into actionable insights.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <SignInWithGoogle />
              <button className="btn-secondary">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer 
      <footer className="bg-[var(--color-bg-primary)] border-[var(--color-neutral-700)] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <span className="text-2xl">⚡</span>
              <span className="font-display text-xl font-bold text-[var(--color-text-primary)]">
                Flashlearn
              </span>
            </div>
            <div className="flex items-center space-x-6">
              <Link 
                href="/about" 
                className="text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] transition-colors duration-200"
              >
                About
              </Link>
              <span className="text-[var(--color-text-muted)]">
                © 2024 Flashlearn. All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </footer>}
      */}
    </div>
  );
};

export default page;
