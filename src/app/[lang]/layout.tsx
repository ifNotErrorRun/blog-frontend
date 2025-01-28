'use server';

import React from 'react';
import Link from 'next/link';
import { getDictionary } from '@/shared/config/i18n/dictionaries';

import { NavigationMenu, NavigationMenuList } from '@/shared/components/ui/navigation-menu';
import { Separator } from '@/shared/components/ui/separator';
import NavItem from '@/shared/components/atom/NavItem';
import TypographyH3 from '@/shared/components/atom/TypographyH3';
import ThemeToggle from '@/shared/components/atom/ThemeToggle';
import LangToggle from '@/shared/components/atom/LangToggle';

type Params = Promise<{ lang: string }>;

export default async function MainLayout({
  params,
  children,
}: Readonly<{
  params: Params;
  children: React.ReactNode;
}>) {
  const { lang } = await params;
  const t = await getDictionary(lang);

  return (
    <div className='flex justify-center w-full py-3'>
      <div className='flex flex-col xl:w-[1024px] lg:w-[768px] md:w-[600px] sm:w-[300px]'>
        <nav className='flex justify-between'>
          <TypographyH3>
            <Link href={`/${lang}`}>{t.global.title}</Link>
          </TypographyH3>
          <div className='grid grid-flow-col-dense gap-x-4'>
            <NavigationMenu>
              <NavigationMenuList>
                <NavItem link={`/${lang}/about`} label={t.global.about} />
                <NavItem link={`/${lang}/articles`} label={t.global.articles} />
                <NavItem link={`/${lang}/series`} label={t.global.series} />
                <NavItem link={`/${lang}/tags`} label={t.global.tags} />
              </NavigationMenuList>
            </NavigationMenu>
            <ThemeToggle />
            <LangToggle />
          </div>
        </nav>
        <Separator className='my-3' />

        <div className='mt-5 py-10 justify-start'>{children}</div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ko' }, { locale: 'jp' }];
}
