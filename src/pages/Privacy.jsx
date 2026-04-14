import React from 'react';
import { Shield } from 'lucide-react';

const Privacy = () => {
  return (
    <main className="page-container fade-in">
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
        <Shield size={48} color="#6366F1" />
        <h1 style={{ margin: 0 }}>Privacy Policy</h1>
      </div>
      
      <p>Last updated: {new Date().toLocaleDateString()}</p>
      
      <h2>1. Information We Collect</h2>
      <p>Lonieapp processes audio files (your voice) in real-time to provide speech recognition and grammar feedback. The voice data is processed securely to return textual and audio feedback and is not permanently stored or used for any other purposes unless explicitly consented by the user.</p>

      <h2>2. How We Use Your Information</h2>
      <ul>
        <li>To provide real-time English conversation practice with Lonie.</li>
        <li>To analyze grammar and pronunciation.</li>
        <li>To manage your account, save your progress (XP, streaks), and maintain leaderboards.</li>
      </ul>

      <h2>3. Data Deletion</h2>
      <p>You have the full right to delete your account and all associated data at any time from the settings menu inside the Lonie app. Upon deletion, all your progression, history, and account records completely vanish from our active databases.</p>

      <h2>4. Third-Party Services</h2>
      <p>We use third-party tools (like AWS Lambda and RevenueCat) for backend operations securely and to handle premium subscriptions. These services adhere to strict global security and privacy standards.</p>

      <h2>5. Contact Us</h2>
      <p>If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at support@lonieapp.com.</p>
    </main>
  );
};

export default Privacy;
