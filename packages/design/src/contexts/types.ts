import { Palette } from "../theme/palette";
import { Fonts } from "../theme/fonts";

export type Stretch = "1200px" | "none";
export type Mode = "light" | "dark" | "mix";
export type Presets = "green" | "blue" | "red";
export type SidebarStyle = "flat" | "icon";

interface SidebarMotion {
  style: SidebarStyle;
  width: number;
  transitionDuration: string;
}
export type Sidebar = Record<SidebarStyle, SidebarMotion>;

export interface Theme {
  palette: Palette;
  sidebar: SidebarMotion;
  layout: { minWidth: number };
  stretch: Stretch;
  mode: Mode;
  color: Presets;
  fonts: Fonts;
}
