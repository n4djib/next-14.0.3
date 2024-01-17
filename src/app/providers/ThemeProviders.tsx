"use client";

import { createTheme, ThemeProvider } from "@mui/material/styles";

type Props = {
  children: React.ReactNode;
};

const theme = createTheme({});

const ThemeProviders = ({ children }: Props) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeProviders;
