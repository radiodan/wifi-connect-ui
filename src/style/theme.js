export default ({ theme: { primary, secondary, tertiary } }) => `
  body {
    color: ${secondary};
    background-color: ${primary};
  }

  .theme-primary-bg {
    background-color: ${primary};
  }

  .theme-primary-col {
    color: ${primary};
  }

  .theme-primary-bg > .theme-primary-bg,
  .theme-secondary-bg {
    background-color: ${secondary};
  }

  .theme-primary-col > .theme-primary-col,
  .theme-secondary-col {
    color: ${secondary};
  }
`;
