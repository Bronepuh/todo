import i18n from "../../i18n";

export const changeLanguage = (language: string | null) => {
  if (language) {
    i18n.changeLanguage(language); // Смена языка, если language не null
  } else {
    console.log("ошибка при смене языка...");
  }
};
