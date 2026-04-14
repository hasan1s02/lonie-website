import React from 'react';
import { BookOpen } from 'lucide-react';

const Blog = () => {
  return (
    <main className="page-container fade-in">
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
        <BookOpen size={48} color="#6366F1" />
        <h1 style={{ margin: 0 }}>Lonie Blog</h1>
      </div>

      <p style={{ fontSize: '1.2rem', marginBottom: '4rem', color: 'var(--text-secondary)' }}>
        Discover tips, tricks, and science-backed methods to fluency. Aimed at helping you speak English naturally.
      </p>
      
      <article style={{ marginBottom: '4rem', paddingBottom: '3rem', borderBottom: '1px solid var(--card-border)' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--accent-color)' }}>How to Practice English Speaking at Home: The 10-Minute Method</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>Published on {new Date().toLocaleDateString()}</p>
        <p>Many English learners believe that they need to live abroad or spend hours studying grammar books to become fluent. However, linguistic studies show that consistency is far more powerful than intensity. By committing just <strong>10 minutes a day</strong> to active speaking practice, you can dramatically improve your confidence and pronunciation.</p>
        
        <h3 style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>1. Ditch the Textbooks, Start Talking</h3>
        <p>Instead of reading silently, talk out loud. Even if you are alone, talking to yourself forces your brain to retrieve vocabulary actively rather than passively recognizing it.</p>
        
        <h3 style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>2. Use an AI Language Partner</h3>
        <p>With apps like <strong>Lonie</strong>, you have a native AI coach in your pocket. Open the app for 10 minutes during your commute or coffee break and jump into a quick real-world scenario. You get instant feedback without the judgment or pressure of speaking to a real human.</p>
        
        <h3 style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>3. Focus on Phrasal Verbs and Collocations</h3>
        <p>Native speakers don't talk in isolated words; they use chunks of language. Focus on learning phrases rather than single vocabulary words.</p>
      </article>

      <article style={{ marginBottom: '4rem', paddingBottom: '3rem', borderBottom: '1px solid var(--card-border)' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--accent-color)' }}>Overcoming the Fear of Speaking English: Boost Your Confidence</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>Published on {new Date().toLocaleDateString()}</p>
        <p>The "Fear of Speaking" (Xenoglossophobia) is one of the most common hurdles for ESL learners. You know the grammar, you know the words, but when it's time to speak, you freeze. Why does this happen?</p>
        
        <h3 style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>The Psychology of Making Mistakes</h3>
        <p>Our brains are wired to avoid social embarrassment. When we speak a foreign language, we feel vulnerable. The secret to overcoming this is creating a psychological "safe space" where mistakes are not punished, but rewarded as learning opportunities.</p>
        
        <h3 style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>Gamifying Your Mistakes</h3>
        <p>When you practice with Lonie, the AI doesn't judge you. In fact, finding a grammar mistake and getting it fixed is part of leveling up. Treat your mistakes as XP points. The more you make, the faster you learn the correct structure.</p>
      </article>

      <article style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--accent-color)' }}>Top 5 Daily Life Scenarios That Build Unstoppable English Fluency</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>Published on {new Date().toLocaleDateString()}</p>
        <p>If you want to be fluent, you must practice the situations you will actually face in real life. Here are the top 5 scenarios that you should master first:</p>
        
        <ul style={{ marginTop: '1rem', marginLeft: '1.5rem' }}>
          <li style={{ marginBottom: '1rem' }}><strong>The Job Interview:</strong> Practicing how to confidently answer "Tell me about yourself" is crucial for career growth.</li>
          <li style={{ marginBottom: '1rem' }}><strong>Ordering at a Restaurant or Coffee Shop:</strong> The foundation of everyday small talk and transactions.</li>
          <li style={{ marginBottom: '1rem' }}><strong>Small Talk with a Colleague:</strong> Knowing how to casually discuss the weekend or the weather without awkward silences.</li>
          <li style={{ marginBottom: '1rem' }}><strong>Traveling and Customs:</strong> Preparing responses for immigration officers or hotel check-ins.</li>
          <li style={{ marginBottom: '1rem' }}><strong>Going on a Date:</strong> The ultimate test of keeping a natural, engaging conversation flowing.</li>
        </ul>
        <p>You can practice all 5 of these directly in the Lonie app today!</p>
      </article>

    </main>
  );
};

export default Blog;
