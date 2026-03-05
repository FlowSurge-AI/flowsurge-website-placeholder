import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white text-text-muted">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col items-center gap-4 md:items-start">
            <Image
              src="/main-logo-light.png"
              alt="FlowSurge AI"
              width={140}
              height={32}
            />
            <p className="text-sm">
              AI-powered workflow automation for specialty dental practices.
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 text-sm md:items-end">
            <div className="flex gap-6">
              <a href="/privacy/" className="transition-colors hover:text-teal">
                Privacy
              </a>
              <a href="/terms/" className="transition-colors hover:text-teal">
                Terms
              </a>
              <a href="/sms-terms/" className="transition-colors hover:text-teal">
                SMS Terms
              </a>
            </div>
            <p className="mt-2 text-xs">
              3022 278th Pl SE, Sammamish, WA 98075
            </p>
            <a
              href="mailto:support@flowsurge.ai"
              className="text-xs transition-colors hover:text-teal"
            >
              support@flowsurge.ai
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-center text-xs">
          &copy; 2026 FlowSurge AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
