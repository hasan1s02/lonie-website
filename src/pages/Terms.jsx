import React from 'react';
import { FileText } from 'lucide-react';

const Terms = () => {
  return (
    <main className="page-container fade-in">
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
        <FileText size={48} color="#6366F1" />
        <h1 style={{ margin: 0 }}>Terms of Service</h1>
      </div>
      
      <p>Last updated: {new Date().toLocaleDateString()}</p>
      
      <h2>1. Acceptance of Terms</h2>
      <p>By accessing and using the Lonie app, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our application.</p>

      <h2>2. Subscription and Payments</h2>
      <p>Lonie provides premium features accessible via a recurring subscription (Monthly or Quarterly). Subscriptions auto-renew unless canceled at least 24 hours before the end of the current period. Payments are handled securely entirely through Apple App Store or Google Play Store mechanisms. You can cancel your subscription inside your device's native subscription settings.</p>

      <h2>3. Code of Conduct</h2>
      <p>You agree to use Lonie for its intended educational purpose of practicing English. Abusive, explicit, or inappropriate language submitted maliciously to the AI may result in access restrictions to maintain system integrity.</p>

      <h2>4. Intellectual Property</h2>
      <p>The Lonie application, including its designs, content, scenario texts, graphics, and interactive features, is strictly the intellectual property of Lonie and may not be copied, reproduced, or used without permission.</p>

      <h2>5. Limitation of Liability</h2>
      <p>Lonie offers AI-based educational experiences. While we strive for accuracy, the AI's responses or grammatical corrections are generated artificially and may occasionally be incorrect or imperfect. We accept no liability for damages or misunderstandings arising from the use of our services.</p>

      <h2>6. Contact Us</h2>
      <p>If you have any questions or suggestions regarding these Terms, contact us at support@lonieapp.com.</p>
    </main>
  );
};

export default Terms;
