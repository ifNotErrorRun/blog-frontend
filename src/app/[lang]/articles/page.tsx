"use server";

import { getDictionary } from "@/shared/config/i18n/dictionaries";
import TypographyH1 from "@/shared/components/atom/TypographyH1";

interface Props {
  params: { lang: string };
}

export default async function SeriesPage({ params: { lang } }: Props) {
  const t = await getDictionary(lang);

  return (
    <>
      <TypographyH1>{t.global.articles}</TypographyH1>
      <div className="mt-5"></div>
    </>
  );
}