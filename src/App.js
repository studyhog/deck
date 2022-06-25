import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Page } from "./components/Page";

import { EMULATION_RESOURCES } from "./data/emulation";
import { GUIDE_RESOURCES } from "./data/guides";

import "./App.css";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  }
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <Page
          title={"Emulation"}
          resources={EMULATION_RESOURCES}
        />
        <Page
          title={"Guides"}
          resources={GUIDE_RESOURCES}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
