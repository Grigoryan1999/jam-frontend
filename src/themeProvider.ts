import { createTheme, ThemeOptions } from "@mui/material";
import { orange } from "@mui/material/colors";

const themeOptions: ThemeOptions = {
    palette: {
        primary: {
            main: orange[500]
        }
    }
  }

export const theme = createTheme(themeOptions);