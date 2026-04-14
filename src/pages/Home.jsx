import React from 'react';
import { 
  Apple, 
  Smartphone, 
  CheckCircle2, 
  Activity, 
  Ear,
  Globe2,
  Trophy,
  Star,
  Sparkles
} from 'lucide-react';

const Home = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="container hero fade-in">
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles size={18} />
            <span>Meet Lonie, Your Native AI Coach</span>
          </div>
          <h1>Fluency Meets <br /> Real-Time Magic</h1>
          <p>
            Stop translating in your head. Talk directly to Lonie! She understands your accent, provides instant grammar corrections, and prepares you for real-world scenarios.
          </p>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            <span className="hero-badge" style={{ marginBottom: 0, fontSize: '0.8rem', padding: '0.25rem 0.75rem' }}>☕ Coffee Shop</span>
            <span className="hero-badge" style={{ marginBottom: 0, fontSize: '0.8rem', padding: '0.25rem 0.75rem' }}>💼 Job Interview</span>
            <span className="hero-badge" style={{ marginBottom: 0, fontSize: '0.8rem', padding: '0.25rem 0.75rem' }}>🍻 Bar / Dating</span>
            <span className="hero-badge" style={{ marginBottom: 0, fontSize: '0.8rem', padding: '0.25rem 0.75rem' }}>✈️ Airport Custom</span>
          </div>
          <div className="hero-actions delay-1 fade-in">
            <a href="#" className="btn btn-primary">
              <Apple size={24} />
              App Store
            </a>
            <a href="#" className="btn btn-secondary">
              <Smartphone size={24} />
              Play Store
            </a>
          </div>
        </div>

        <div className="hero-visual fade-in delay-2">
          <img src="/icon.png" alt="Lonie Avatar" className="hero-avatar" loading="lazy" />
          
          <div className="floating-card card-top-right">
            <CheckCircle2 color="#34D399" />
            <div>
              <strong style={{ display: 'block', fontSize: '0.9rem' }}>Grammar Fixed!</strong>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>"I have gone"</span>
            </div>
          </div>

          <div className="floating-card card-bottom-left">
            <Activity color="#60A5FA" />
            <div>
              <strong style={{ display: 'block', fontSize: '0.9rem' }}>+50 XP Gained</strong>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Job Interview</span>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats fade-in delay-3">
        <div className="container stats-grid">
          <div className="stat-item">
            <h3>24/7</h3>
            <p>Availability</p>
          </div>
          <div className="stat-item">
            <h3>100+</h3>
            <p>Real Scenarios</p>
          </div>
          <div className="stat-item">
            <h3>Instant</h3>
            <p>Vocal Feedback</p>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="container features fade-in">
        <div className="section-header">
          <h2>Why Practice With Lonie?</h2>
          <p>Traditional apps teach you rules. Lonie teaches you how to speak.</p>
        </div>
        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon"><Ear size={28} /></div>
            <h3>Hears Everything</h3>
            <p>Lonie's advanced speech recognition picks up the nuances of your accent and corrects your pronunciation perfectly.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><Globe2 size={28} /></div>
            <h3>Dynamic Scenarios</h3>
            <p>Ordering coffee in New York or surviving a tough job interview. Jump into role-plays and learn context naturally.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><Trophy size={28} /></div>
            <h3>Game-like Progress</h3>
            <p>Earn XP points, conquer daily streaks, and watch your fluency level skyrocket without getting bored.</p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-it-works fade-in">
        <div className="container">
          <div className="section-header">
            <h2>How It Works</h2>
          </div>
          <div className="steps">
            <div className="step-card">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Choose a Scenario</h3>
                <p>Pick from 100+ daily life situations like dates, interviews, or free talk.</p>
              </div>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Start Speaking</h3>
                <p>Hold the mic and talk to Lonie naturally. She listens, understands, and replies with a native voice.</p>
              </div>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Get Instant Feedback</h3>
                <p>Lonie highlights your grammar mistakes dynamically and tells you exactly how a native would say it.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section className="reviews fade-in">
        <div className="container">
          <div className="review-card">
            <div className="review-stars">
              <Star size={24} fill="currentColor" />
              <Star size={24} fill="currentColor" />
              <Star size={24} fill="currentColor" />
              <Star size={24} fill="currentColor" />
              <Star size={24} fill="currentColor" />
            </div>
            <p className="review-text">
              "Like having an American friend in your pocket. I used to freeze when speaking, but Lonie built my confidence in just two weeks!"
            </p>
            <p className="review-author">— Maria G., IELTS Student</p>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="pricing fade-in">
        <div className="container">
          <div className="section-header">
            <h2>Simple & Transparent Pricing</h2>
            <p>Invest in your fluency for the price of a fancy coffee.</p>
          </div>
          <div className="pricing-grid">
            
            <div className="pricing-card">
              <h3>Monthly Plan</h3>
              <div className="price">$6<span>/month</span></div>
              <p className="price-desc">Perfect to get started</p>
              <ul className="features-list">
                <li><CheckCircle2 size={20} color="#6366F1" /> Unlimited Voice Chats</li>
                <li><CheckCircle2 size={20} color="#6366F1" /> All Scenario Modes</li>
                <li><CheckCircle2 size={20} color="#6366F1" /> Instant AI Feedback</li>
                <li><CheckCircle2 size={20} color="#6366F1" /> Cancel Anytime</li>
              </ul>
              <button className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>Choose Monthly</button>
            </div>

            <div className="pricing-card popular">
              <div className="popular-badge">Most Popular - Save 16%</div>
              <h3>3 Months Plan</h3>
              <div className="price">$15<span>/3 mos</span></div>
              <p className="price-desc">Just $5 per month</p>
              <ul className="features-list">
                <li><CheckCircle2 size={20} color="#6366F1" /> Unlimited Voice Chats</li>
                <li><CheckCircle2 size={20} color="#6366F1" /> All Scenario Modes</li>
                <li><CheckCircle2 size={20} color="#6366F1" /> Premium Voices</li>
                <li><CheckCircle2 size={20} color="#6366F1" /> Priority Feedback</li>
              </ul>
              <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Choose 3 Months</button>
            </div>

          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="container fade-in">
        <div className="cta-banner">
          <div className="cta-banner-content">
            <h2>Ready to Speak Like a Native?</h2>
            <p>Join thousands of learners improving their English every single day.</p>
            <button className="btn">Download Lonie Now</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
