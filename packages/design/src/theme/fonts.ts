export interface Fonts {
  fontFamily: string;
  fontWeightRegular: number;
  fontWeightMedium: number;
  fontWeightBold: number;
  h1: Font;
  h2: Font;
  h3: Font;
  h4: Font;
  h5: Font;
  h6: Font;
  subtitle1: Font;
  subtitle2: Font;
  body1: Font;
  body2: Font;
  button: Font;
  caption: Font;
  overline: Font;
  // [index: string]: Font;
}

interface Font {
  fontSize: string;
  fontWeight: number;
  lineHeight: string;
  letterSpacing: string;
  textTransform?: "none" | "uppercase" | "capitalize";
  // [index: "string"]: string;
}

const FONT_PRIMARY = "Public Sans, sans-serif";

const fonts: Fonts = {
  fontFamily: FONT_PRIMARY,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1: {
    fontSize: "64px",
    fontWeight: 700,
    lineHeight: "80px",
    letterSpacing: "2px",
  },
  h2: {
    fontSize: "48px",
    fontWeight: 700,
    lineHeight: "64px",
    letterSpacing: "normal",
  },
  h3: {
    fontSize: "32px",
    fontWeight: 700,
    lineHeight: "48px",
    letterSpacing: "normal",
  },
  h4: {
    fontSize: "24px",
    fontWeight: 700,
    lineHeight: "36px",
    letterSpacing: "normal",
  },
  h5: {
    fontSize: "20px",
    fontWeight: 700,
    lineHeight: "30px",
    letterSpacing: "normal",
  },
  h6: {
    fontSize: "18px",
    fontWeight: 700,
    lineHeight: "28px",
    letterSpacing: "normal",
  },
  subtitle1: {
    fontSize: "16px",
    fontWeight: 600,
    lineHeight: "24px",
    letterSpacing: "normal",
  },
  subtitle2: {
    fontSize: "14px",
    fontWeight: 600,
    lineHeight: "22px",
    letterSpacing: "normal",
  },
  body1: {
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "24px",
    letterSpacing: "normal",
  },
  body2: {
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "22px",
    letterSpacing: "normal",
  },
  button: {
    fontSize: "14px",
    fontWeight: 700,
    lineHeight: "24px",
    letterSpacing: "normal",
    textTransform: "uppercase",
  },
  caption: {
    fontSize: "12px",
    fontWeight: 700,
    lineHeight: "18px",
    letterSpacing: "normal",
  },
  overline: {
    fontSize: "12px",
    fontWeight: 700,
    lineHeight: "18px",
    letterSpacing: "normal",
    textTransform: "uppercase",
  },
};

export default fonts;
