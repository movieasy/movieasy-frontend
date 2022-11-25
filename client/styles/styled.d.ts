import "styled-components";

declare module "styled-components" {
  export type DefaultShadowKey = "normal" | "purple" | "blue";
  export type DefaultThemeColorKey =
    | "black"
    | "white"
    | "opacityWhite"
    | "red"
    | "purple"
    | "blue"
    | "gray"
    | "green"
    | "lightGreen"
    | "darkGray";

  export interface DefaultTheme {
    color: {
      [key in DefaultThemeColorKey]: string;
    };
    boxShadow: {
      [key in DefaultShadowKey]: string;
    };
  }
}
