import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#a855f7" },
    background: {
      default: "#070d1a",
      paper: "rgba(255,255,255,0.02)",
    },
    text: {
      primary: "#ffffff",
      secondary: "rgba(255,255,255,0.75)",
    },
  },
  components: {
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
        fullWidth: true,
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "rgba(255,255,255,0.80)",
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: "#ffffff",

          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(255,255,255,0.35)",
          },

          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(255,255,255,0.60)",
          },

          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#ffffff",
          },

          "&.Mui-error .MuiOutlinedInput-notchedOutline": {
            borderColor: "#ff6b6b",
          },
        },

        input: {
          color: "#ffffff",
          "&::placeholder": {
            color: "rgba(255,255,255,0.55)",
            opacity: 1,
          },
        },
      },
    },

    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: "rgba(255,255,255,0.70)",
          marginLeft: 0,
          "&.Mui-error": { color: "#ff6b6b" },
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 700,
        },
      },
    },
  },
});
