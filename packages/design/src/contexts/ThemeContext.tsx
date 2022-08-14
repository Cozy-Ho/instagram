import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { useReducer, useEffect, createContext, Dispatch } from "react";
import {
  blue,
  darkMode,
  green,
  lightMode,
  mixMode,
  red,
} from "../theme/palette";
import fonts from "../theme/fonts";

import { Mode, Presets, Sidebar, SidebarStyle, Theme } from "./types";

const sidebar: Sidebar = {
  flat: { style: "flat", width: 280, transitionDuration: "0.5s" },
  icon: { style: "icon", width: 80, transitionDuration: "0.5s" },
};

type Action =
  | { type: "SET_MODE"; mode: Mode }
  | { type: "SET_STRETCH"; stretch: boolean }
  | { type: "SET_COLOR"; color: Presets }
  | { type: "SET_SIDEBAR_STYLE"; style: SidebarStyle };
type ThemeDispatch = Dispatch<Action>;

function reducer(state: Theme, action: Action): Theme {
  switch (action.type) {
    case "SET_MODE":
      localStorage.setItem("mode", action.mode);

      const mode =
        action.mode === "dark"
          ? darkMode
          : action.mode === "mix"
          ? mixMode
          : lightMode;

      return {
        ...state,
        palette: { ...state.palette, ...mode },
        mode: action.mode,
      };

    case "SET_COLOR":
      const colors =
        action.color === "blue" ? blue : action.color === "red" ? red : green;
      localStorage.setItem("color", action.color);

      return {
        ...state,
        palette: { ...state.palette, ...colors },
        color: action.color,
      };
    case "SET_STRETCH":
      localStorage.setItem("stretch", `${action.stretch}`);

      return {
        ...state,
        stretch: action.stretch ? "none" : "1200px",
      };

    case "SET_SIDEBAR_STYLE":
      localStorage.setItem("sidebarStyle", action.style);

      return {
        ...state,
        sidebar: sidebar[action.style],
      };

    default:
      throw new Error("Unhandled action");
  }
}

const ThemeStateContext = createContext<Theme | null>(null);
const ThemeDispatchContext = createContext<ThemeDispatch | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, {
    palette: { ...green, ...lightMode },
    sidebar: sidebar.flat,
    layout: { minWidth: 330 },
    stretch: "none",
    mode: "mix",
    color: "green",
    fonts: fonts,
  });

  useEffect(() => {
    // FIXME: Initail settings
    const mode = getMode();
    dispatch({
      type: "SET_MODE",
      mode: mode,
    });
    const primaryColor = getPrimaryColor();
    dispatch({ type: "SET_COLOR", color: primaryColor });
    const stretch = getStretch();
    dispatch({ type: "SET_STRETCH", stretch: stretch });
    const sidebarStyle = getSidebarStyle();
    dispatch({ type: "SET_SIDEBAR_STYLE", style: sidebarStyle });
  }, []);

  return (
    <ThemeStateContext.Provider value={state}>
      <ThemeDispatchContext.Provider value={dispatch}>
        <EmotionThemeProvider theme={state}>{children}</EmotionThemeProvider>
      </ThemeDispatchContext.Provider>
    </ThemeStateContext.Provider>
  );
}
