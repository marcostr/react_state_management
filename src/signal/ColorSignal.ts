import { signal } from "@preact/signals-react";

export interface Colors {
  text: string;
  background: string;
}

const colors = signal<Colors>({ text: "black", background: "white" });

const changeTextColor = (color: string) => {
  colors.value = { ...colors.value, text: color };
};

const changeBackgroundColor = (color: string) => {
  colors.value = { ...colors.value, background: color };
};

const resetColors = () => {
  colors.value = { text: "black", background: "white" };
};

export { colors, changeTextColor, changeBackgroundColor, resetColors };
