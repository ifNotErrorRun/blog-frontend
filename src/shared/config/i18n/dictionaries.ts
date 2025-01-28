import 'server-only';

const dictionaries: {
  [key: string]: () => Promise<DictType>;
} = {
  ko: () => import('./messages/ko.json').then((module) => module.default),
  jp: () => import('./messages/jp.json').then((module) => module.default),
};

export const getDictionary = async (lang: string) => dictionaries[lang]();
