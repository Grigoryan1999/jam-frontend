const screenSize = {
  mobileS: "400px",
  mobileM: "500px",
  mobile: "700px",
  tablet: "900px",
  desktop: "1200px",
};

export const device = {
  mobileS: `(max-width: ${screenSize.mobileS})`,
  mobileM: `(max-width: ${screenSize.mobileM})`,
  mobile: `(max-width: ${screenSize.mobile})`,
  tablet: `(max-width: ${screenSize.tablet})`,
  desktop: `(max-width: ${screenSize.desktop})`,
};
