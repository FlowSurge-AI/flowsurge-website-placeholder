import { Metadata } from "next";
import LegalLayout from "@/components/layout/LegalLayout";

export const metadata: Metadata = {
  title: "SMS Terms & Disclosures | FlowSurge AI",
  description: "FlowSurge SMS messaging terms, CTIA disclosures, opt-out instructions, and data rates information.",
};

export default function SmsTerms() {
  return (
    <LegalLayout
      title="SMS Terms &amp; Disclosures"
      effectiveDate="March 2, 2026"
      lastUpdated="March 2, 2026"
    >
      <div className="highlight-box">
        <p>
          This page describes FlowSurge&apos;s SMS messaging practices, including
          the types of messages we send, message frequency, how to opt out, and
          how to get help. These disclosures are provided in compliance with
          CTIA guidelines and carrier requirements.
        </p>
      </div>

      <section>
        <h2>Program Name</h2>
        <p>
          <strong>FlowSurge Patient Communications</strong> &mdash; operated by
          FlowSurge AI.
        </p>
      </section>

      <div className="sms-card">
        <h2>Types of Messages</h2>
        <p>
          When you or your dental/oral surgery provider opt you in to receive
          SMS messages through FlowSurge, you may receive the following types of
          text messages:
        </p>
        <ul>
          <li>Appointment reminders and scheduling confirmations</li>
          <li>Upcoming visit notifications and preparation instructions</li>
          <li>Post-visit follow-up messages</li>
          <li>Referral coordination and specialist scheduling updates</li>
          <li>Other healthcare-related operational communications</li>
        </ul>
        <p>
          Messages are sent on behalf of your dental or oral surgery provider.
          FlowSurge does not send marketing or promotional messages unrelated to
          your healthcare.
        </p>
      </div>

      <div className="sms-card">
        <h2>Message Frequency</h2>
        <p>
          Message frequency varies. You may receive multiple messages per month
          during active treatment or appointment scheduling. The number of
          messages depends on your appointment activity and care schedule.
        </p>
      </div>

      <div className="sms-card">
        <h2>Message and Data Rates</h2>
        <p>
          <strong>Message and data rates may apply.</strong> Please check with
          your mobile carrier if you are unsure about your plan&apos;s messaging
          rates. FlowSurge is not responsible for any charges from your carrier.
        </p>
      </div>

      <div className="sms-card">
        <h2>How to Opt Out (STOP)</h2>
        <p>
          You can opt out of SMS messages at any time by replying{" "}
          <strong>STOP</strong> to any message you receive from FlowSurge. After
          opting out, you will receive a single confirmation message and no
          further text messages will be sent.
        </p>
        <p>
          To resume receiving messages, reply <strong>START</strong>.
        </p>
      </div>

      <div className="sms-card">
        <h2>Help (HELP)</h2>
        <p>
          For assistance, reply <strong>HELP</strong> to any message, or contact
          us directly:
        </p>
        <p>
          Email:{" "}
          <a href="mailto:support@flowsurge.ai">support@flowsurge.ai</a>
        </p>
      </div>

      <section>
        <h2>Consent</h2>
        <p>
          SMS consent is collected by your healthcare provider at the point of
          care through a written or electronic intake/appointment form. Consent
          to receive SMS messages is not a condition of purchasing any goods or
          services or receiving healthcare.
        </p>
      </section>

      <section>
        <h2>Privacy</h2>
        <p>
          Your privacy is important to us. We do not sell, rent, or share your
          mobile phone number or SMS consent data with third parties for
          marketing purposes. For full details on how we handle your data, see
          our <a href="/privacy/">Privacy Policy</a>.
        </p>
      </section>

      <section>
        <h2>Supported Carriers</h2>
        <p>
          SMS service is available on most major U.S. carriers including
          AT&amp;T, Verizon, T-Mobile, and others. Carrier support is not
          guaranteed for all carriers.
        </p>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>
          If you have questions about our SMS practices, please contact:
        </p>
        <p>
          <strong>FlowSurge AI</strong>
          <br />
          3022 278th Pl SE, Sammamish, WA 98075
          <br />
          Email:{" "}
          <a href="mailto:support@flowsurge.ai">support@flowsurge.ai</a>
        </p>
      </section>

      <hr className="legal-divider" />
      <p className="see-also">
        See also: <a href="/privacy/">Privacy Policy</a> &middot;{" "}
        <a href="/terms/">Terms &amp; Conditions</a>
      </p>
    </LegalLayout>
  );
}
