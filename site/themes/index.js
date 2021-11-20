import baseTheme from "./base";

function getThemeByName(name, mode = 'light') {
  switch(name) {
    default: return baseTheme(mode);
  }
};

export const themeNames = [
  'Base'
];

export default getThemeByName;
