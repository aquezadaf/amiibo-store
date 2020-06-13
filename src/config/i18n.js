import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import es from './languages/es';

const resources = { es };

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es',
    keySeparator: '.',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
