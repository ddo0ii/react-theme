import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Hello from "./pages/Hello";

const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#ff6f23",
    },
    secondary: {
      main: "#507daa",
    },
    warning: {
      main: "#000000",
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Hello />
      </ThemeProvider>
    </div>
  );
}

export default App;
