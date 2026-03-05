import { Metadata } from "next";
import LegalLayout from "@/components/layout/LegalLayout";

export const metadata: Metadata = {
  title: "Terms & Conditions | FlowSurge AI",
  description: "FlowSurge AI Terms & Conditions governing use of our platform and communications services.",
};

export default function Terms() {
  return (
    <LegalLayout
      title="Terms &amp; Conditions"
      effectiveDate="February 18, 2026"
      lastUpdated="February 18, 2026"
    >
      <div className="highlight-box">
        <p>
          These Terms &amp; Conditions govern your use of FlowSurge&apos;s platform
          and communications services. By engaging with communications sent
          through FlowSurge on behalf of your dental or orthodontic provider,
          you agree to these terms.
        </p>
      </div>

      <section>
        <h2>1. About FlowSurge</h2>
        <p>
          FlowSurge is a healthcare technology platform that helps dental and
          orthodontic practices manage patient communications, appointment
          scheduling, and operational workflows. FlowSurge sends communications
          on behalf of healthcare providers to their existing patients.
        </p>
      </section>

      <section>
        <h2>2. Use of the Platform</h2>
        <p>
          FlowSurge&apos;s platform is made available to licensed dental and
          orthodontic practices (&ldquo;Providers&rdquo;) to facilitate patient
          communications. Patients (&ldquo;End Users&rdquo;) receive communications from
          Providers through the FlowSurge platform. By receiving and interacting
          with these communications, End Users agree to these terms.
        </p>
      </section>

      <div className="sms-card">
        <h2>3. SMS / Text Messaging Terms</h2>

        <p>
          If you have provided your mobile phone number to your dental or
          orthodontic provider and consented to receive text messages, you may
          receive SMS communications through the FlowSurge platform, including:
        </p>
        <ul>
          <li>Appointment reminders and scheduling confirmations</li>
          <li>Upcoming visit notifications and preparation instructions</li>
          <li>Post-visit follow-up messages</li>
          <li>Referral coordination and specialist scheduling updates</li>
          <li>Other healthcare-related operational communications</li>
        </ul>

        <p>
          <strong>Consent:</strong> SMS consent is obtained by your healthcare
          provider at the point of care through a written or electronic intake
          form. Consent is not a condition of receiving healthcare services.
        </p>

        <p>
          <strong>Message Frequency:</strong> Message frequency varies based on
          your appointment schedule and treatment activity. You may receive
          multiple messages per month during active care periods.
        </p>

        <p>
          <strong>Message and Data Rates:</strong> Message and data rates may
          apply. Please check with your mobile carrier if you are unsure about
          your plan&apos;s messaging rates.
        </p>

        <p>
          <strong>How to Opt Out:</strong> You may opt out of SMS messages at
          any time by replying <strong>STOP</strong> to any message. After
          opting out, you will receive one final confirmation message and no
          further messages will be sent unless you re-enroll by replying{" "}
          <strong>START</strong>.
        </p>

        <p>
          <strong>Help:</strong> Reply <strong>HELP</strong> to any message for
          assistance, or contact us directly at{" "}
          <a href="mailto:support@flowsurge.ai">support@flowsurge.ai</a>.
        </p>

        <p>
          <strong>No Third-Party Marketing:</strong> SMS messages sent through
          FlowSurge are exclusively for healthcare operational purposes. Your
          mobile number will never be used for third-party marketing or sold to
          advertisers.
        </p>

        <p>
          <strong>Supported Carriers:</strong> SMS service is available on most
          major U.S. carriers. Carrier support is not guaranteed for all
          carriers.
        </p>
      </div>

      <section>
        <h2>4. Healthcare Provider Responsibilities</h2>
        <p>
          Dental and orthodontic practices using FlowSurge are responsible for:
        </p>
        <ul>
          <li>Obtaining valid patient consent prior to initiating SMS communications</li>
          <li>Ensuring consent language meets applicable state and federal requirements</li>
          <li>Maintaining accurate and up-to-date patient contact information</li>
          <li>Honoring patient opt-out requests promptly</li>
        </ul>
      </section>

      <section>
        <h2>5. Prohibited Uses</h2>
        <p>FlowSurge&apos;s platform may not be used to send:</p>
        <ul>
          <li>Unsolicited marketing messages to individuals who have not consented</li>
          <li>Messages to individuals who have opted out</li>
          <li>False, misleading, or deceptive communications</li>
          <li>Content that violates applicable laws or regulations</li>
        </ul>
      </section>

      <section>
        <h2>6. Intellectual Property</h2>
        <p>
          All content, trademarks, and materials associated with the FlowSurge
          platform are the property of FlowSurge. Unauthorized reproduction or
          use is prohibited.
        </p>
      </section>

      <section>
        <h2>7. Disclaimer of Warranties</h2>
        <p>
          FlowSurge&apos;s platform is provided &ldquo;as is&rdquo; without warranties of any
          kind, express or implied. We do not warrant uninterrupted or
          error-free operation of our messaging services.
        </p>
      </section>

      <section>
        <h2>8. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, FlowSurge shall not be liable
          for any indirect, incidental, or consequential damages arising from
          use of the platform or delivery of communications.
        </p>
      </section>

      <section>
        <h2>9. Governing Law</h2>
        <p>
          These Terms are governed by the laws of the State of Delaware, without
          regard to conflict of law principles.
        </p>
      </section>

      <section>
        <h2>10. Changes to These Terms</h2>
        <p>
          We may update these Terms from time to time. The effective date at the
          top of this page reflects the most recent revision. Continued use of
          or interaction with our communications constitutes acceptance of
          updated terms.
        </p>
      </section>

      <section>
        <h2>11. Contact Us</h2>
        <p>For questions about these Terms, please contact:</p>
        <p>
          <strong>FlowSurge</strong>
          <br />
          Email:{" "}
          <a href="mailto:support@flowsurge.ai">support@flowsurge.ai</a>
        </p>
      </section>

      <hr className="legal-divider" />
      <p className="see-also">
        See also: <a href="/privacy/">Privacy Policy</a> &middot;{" "}
        <a href="/sms-terms/">SMS Terms &amp; Disclosures</a>
      </p>
    </LegalLayout>
  );
}
