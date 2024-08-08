const colors = {
  primary50: "#edefff",
  primary100: "#dee2ff",
  primary400: "#6B5AFA",
  primary900: "#22184E",
  gray400: "#98A2B3",
  gray200: "#e4e7ec",
  gray100: "#F2F4F7",
  gray50: "#f9fafb",
  white: "#FFF",
  black: "#000",
  error: "#F2404C",
  success: "#12B76A",
  success100: "#d1fadf",
  yellow: "#FBA944",
};

export default colors;

export interface ColorOption {
  name: string;
  code: keyof typeof colors;
}
