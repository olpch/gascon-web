"use client";

import Link from "next/link";
import Container from "./container";
import Image from 'next/image';
import { useLanguage } from "@/app/providers/language-context";

export default function Footer() {

  const { t } = useLanguage();

  return (
    <footer className="border-t bg-[#383838] border-black/10 py-16">
      <Container className="!text-white">
        <div className="grid gap-16 md:grid-cols-3">
          <div>
            <h3 className="text-2xl">
              <Image
                className="logo-footer"
                src="/imgs/logo_w.png"
                width={550} height={189}
                alt="logo footer"
              />
            </h3>

            <p className="mt-6 max-w-sm leading-8">
              Contemporary architecture with timeless values.
            </p>
          </div>

          <div>
            <p className="mb-6 uppercase tracking-[.3em] text-sm">
              {t('navigation.label')}
            </p>

            <div className="flex flex-col gap-4">
              <Link href="/">{t('navigation.home')}</Link>
              <Link href="/projects">{t('navigation.projects')}</Link>
              <Link href="/staff">{t('navigation.staff')}</Link>
              <Link href="/contact">{t('navigation.contact')}</Link>
            </div>
          </div>

          <div>
            <p className="mb-6 uppercase tracking-[.3em] text-sm">
              {t('navigation.contact')}
            </p>
            <p>{t('general.email')}</p>
            <p className="mt-3">{t('general.phone')}</p>
          </div>
        </div>
        <div className="mt-24 flex justify-between border-t border-black/10 pt-8 text-sm">
          <span>{t('general.copyright')}</span> <span className="text-white/30">(v0.1.12-Beta)</span>
        </div>
      </Container>
    </footer>
  );
}