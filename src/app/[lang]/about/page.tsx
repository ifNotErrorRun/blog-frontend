"use server";

import { getDictionary } from "@/shared/config/i18n/dictionaries";
import TypographyH1 from "@/shared/components/atom/TypographyH1";
import Link from "next/link";

type Params = Promise<{ lang: string }>;

export default async function AboutPage({
  params,
}: {
  readonly params: Params;
}) {
  const { lang } = await params;
  const t = await getDictionary(lang);

  return (
    <>
      <TypographyH1>{t.global.about}</TypographyH1>
      <div className="mt-5">
        <Link href={`/${lang}/about/resume`}>{t.global.resume}</Link>
      </div>
    </>
  );
}
