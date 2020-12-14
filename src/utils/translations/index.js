import { LANGUAGE } from 'constant';
import translations from './translation.json';

let selectedLanguage = window.localStorage.getItem('selectedLanguage') || LANGUAGE.find((e) => e.default).code;

/**
 * Set a language
 * @param {String} langCode must be a standard langauge code like "de" for German
 */
export const setLanguage = (langCode = '') => {
  const language = LANGUAGE.find((e) => e.code === langCode);
  if (language) {
    selectedLanguage = language.code;
    window.localStorage.setItem('selectedLanguage', selectedLanguage);
  }
};

/**
 * Translate the phrase to the selected language
 * @param {String} key the phrase which need to be translated
 * @returns {String} translated phrase
 */
export const _t = (key = '') => {
  if (translations[key] && translations[key][selectedLanguage]) {
    return translations[key][selectedLanguage];
  }
  return key;
};
