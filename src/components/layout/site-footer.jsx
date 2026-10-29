import Link from "next/link";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { Logo } from "@/components/layout/logo";
import { navLinks } from "@/config/navigation";
import { buildWhatsAppLink, buildMailtoLink } from "@/lib/links";
import { contactInfo } from "@/data/contact";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { COPYRIGHT_YEAR } from "@/constants/layout";

function FacebookIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );
}

function InstagramIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

const socialIconMap = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
};

export function SiteFooter() {
  const whatsappLink = buildWhatsAppLink();
  const emailLink = buildMailtoLink();

  return (
    <footer className="border-t border-line bg-ink">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <Logo variant="light" />
            <p className="mt-4 max-w-xs font-body text-sm leading-relaxed text-white/60">
              {siteConfig.tagline}
            </p>
          </div>

          <div>
            <h3 className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Quick links
            </h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-white/70 transition-colors hover:text-sky"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={contactInfo.phoneHref}
                  className="flex items-center gap-2 font-body text-sm text-white/70 transition-colors hover:text-sky"
                >
                  <Phone className="size-4 text-sky" />
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-body text-sm text-white/70 transition-colors hover:text-sky"
                >
                  <MessageCircle className="size-4 text-sky" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={emailLink}
                  className="flex items-center gap-2 font-body text-sm text-white/70 transition-colors hover:text-sky"
                >
                  <Mail className="size-4 text-sky" />
                  {contactInfo.email}
                </a>
              </li>
              <li className="font-body text-sm text-white/60">
                {contactInfo.address.line1}
                <br />
                {contactInfo.address.line2}
              </li>
            </ul>
            <div className="mt-4 flex gap-3">
              {contactInfo.socialLinks.map((social) => {
                const Icon = socialIconMap[social.icon] || MessageCircle;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={cn(
                      "flex size-10 items-center justify-center rounded-full border border-white/15 text-white/70",
                      "transition-colors hover:bg-white/10 hover:text-sky",
                    )}
                  >
                    <Icon className="size-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center">
          <p className="font-body text-xs text-white/40">
            {COPYRIGHT_YEAR} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
