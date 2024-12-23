"use server";

import { getDictionary } from "@/shared/config/i18n/dictionaries";
import TypographyH1 from "@/shared/components/atom/TypographyH1";

type Params = Promise<{ lang: string }>

export default async function ResumePage({ params }: { params: Params }) {
  const { lang } = await params;
  const t = await getDictionary(lang);

  return (
    <>
      <TypographyH1>{t.global.resume}</TypographyH1>
      <div className="mt-5"></div>
    </>
  );
}