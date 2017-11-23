export default ({
  theme: {
    primary = 'hsl(0, 0%, 0%)',
    primaryAlternate = 'hsl(0, 0%, 10%)',
    secondary = 'hsl(0, 0%, 100%)',
    secondaryAlternate = 'hsl(0, 0%, 90%)',
    tertiary = 'hsl(0, 0%, 50%)',
    tertiaryAlternate = 'hsl(0, 0%, 60%)',
    accent = 'hsl(0, 0%, 750%)',
  },
}) => `
  :root {
    --primary: ${primary};
    --primaryAlternate: ${primaryAlternate};
    --secondary: ${secondary};
    --secondaryAlternate: ${secondaryAlternate};
    --tertiary: ${tertiary};
    --tertiaryAlternate: ${tertiaryAlternate};
    --accent: ${accent};
  }
`;
