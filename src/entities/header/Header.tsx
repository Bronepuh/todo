import {
  Flex,
  rem,
  Select,
  Switch,
  Text,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { useState } from "react";
import { CaretDown, MoonStars, Sun } from "tabler-icons-react";
import i18n from "../../i18n";
import { themesEnum } from "../../app/utils/constants";
import { changeLanguage } from "../../shared/utils/helpers";

export const Header = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
  const { setColorScheme, colorScheme } = useMantineColorScheme();

  const theme = useMantineTheme();

  const sunIcon = (
    <Sun
      style={{ width: rem(16), height: rem(16), cursor: "pointer" }}
      color={theme.colors.yellow[4]}
    />
  );

  const moonIcon = (
    <MoonStars
      style={{ width: rem(16), height: rem(16), cursor: "pointer" }}
      color={theme.colors.blue[6]}
    />
  );

  const handleThemeClick = () => {
    console.log(colorScheme);
    if (colorScheme === themesEnum.LIGHT) {
      setColorScheme(themesEnum.DARCK);
    } else {
      setColorScheme(themesEnum.LIGHT);
    }
  };

  const handleLanguageSelect = (language: string | null) => {
    changeLanguage(language);
    setSelectedLanguage(language || "en"); // Обновляем локальное состояние при выборе языка
  };
  return (
    <Flex
      style={{
        alignItems: "center",
        minHeight: 50,
      }}
    >
      <Text size={"20px"} fw={"bold"} mr={10} c={"dark"}>
        ToDo
      </Text>
      <Switch
        size="md"
        color="dark.4"
        onLabel={sunIcon}
        offLabel={moonIcon}
        onClick={handleThemeClick}
      />
      <Select
        w={65}
        ml={"auto"}
        c={"dark"}
        defaultValue={selectedLanguage || "ru"} // Используем локальное состояние для выбранного языка
        data={[
          { value: "en", label: "En" },
          { value: "ru", label: "Ру" },
        ]}
        onChange={handleLanguageSelect} // Используем обработчик для изменения языка
        style={{
          borderColor: "white",
          fontWeight: "bold",
        }}
        styles={{
          input: {
            borderColor: "grey", // Изменение цвета рамки
            fontWeight: "bold",
          },
          dropdown: {
            padding: 0,
          },
        }}
        rightSection={<CaretDown color="grey" />}
      />
    </Flex>
  );
};
