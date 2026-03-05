import { ReactNode } from "react";

interface LegalLayoutProps {
  title: string;
  effectiveDate: string;
  lastUpdated: string;
  children: ReactNode;
}

export default function LegalLayout({
  title,
  effectiveDate,
  lastUpdated,
  children,
}: LegalLayoutProps) {
  return (
    <main className="min-h-screen bg-surface pt-24">
      <div className="mx-auto max-w-[780px] px-6 pb-20 pt-14">
        <div className="mb-12 border-b border-surface-dark pb-8">
          <h1 className="mb-3 text-4xl font-bold leading-tight text-text-heading">
            {title}
          </h1>
          <p className="text-sm text-text-muted">
            Effective Date: {effectiveDate} &middot; Last Updated:{" "}
            {lastUpdated}
          </p>
        </div>
        <div className="legal-content">{children}</div>
      </div>

      <style>{`
        .legal-content h2 {
          font-size: 1.35rem;
          font-weight: 700;
          margin-bottom: 14px;
          padding-top: 8px;
          color: #0B1628;
        }
        .legal-content p {
          margin-bottom: 14px;
          font-size: 0.95rem;
          color: #334155;
          line-height: 1.7;
        }
        .legal-content ul {
          margin: 12px 0 14px 20px;
          font-size: 0.95rem;
          color: #334155;
          line-height: 1.7;
        }
        .legal-content li {
          margin-bottom: 8px;
        }
        .legal-content section {
          margin-bottom: 40px;
        }
        .legal-content a {
          color: #00a896;
        }
        .legal-content a:hover {
          text-decoration: underline;
        }
        .highlight-box {
          background: #e6f7f4;
          border-left: 3px solid #00a896;
          border-radius: 0 8px 8px 0;
          padding: 20px 24px;
          margin: 32px 0;
        }
        .sms-card {
          background: white;
          border: 1px solid #E8EDF2;
          border-radius: 12px;
          padding: 28px 32px;
          margin: 32px 0;
        }
        .sms-card h2 {
          color: #00a896 !important;
        }
        .legal-divider {
          border: none;
          border-top: 1px solid #E8EDF2;
          margin: 40px 0;
        }
        .see-also {
          font-size: 0.85rem;
          color: #94A3B8;
        }
      `}</style>
    </main>
  );
}
