import "server-only";

interface DictType {
  global: {
    title: string;
    description: string;
    home: string;
    about: string;
    articles: string;
    series: string;
    tags: string;
    resume: string;
  };
}

const dictionaries: {
  [key: string]: () => Promise<DictType>;
} = {
  en: () => import("./messages/en.json").then((module) => module.default),
  ko: () => import("./messages/ko.json").then((module) => module.default),
  jp: () => import("./messages/jp.json").then((module) => module.default),
};

export const getDictionary = async (lang: string) => dictionaries[lang]();
