import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Page } from "./components/Page";
import { Header } from "./components/Header";
import { EMULATION_RESOURCES } from "./data/emulation";
import { GUIDE_RESOURCES } from "./data/guides";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  }
});

const ALL_RESOURCES = {
  "Emulation": EMULATION_RESOURCES,
  "Guide": GUIDE_RESOURCES
}

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App" style={{
        background: darkTheme.palette.background.default,
      }}>
        <Header title={"Steam Deck Resources"}/>
        {Object.entries(ALL_RESOURCES).map(([title, resources], i) =>
          <div key={`${title}-${i}-container-div`}>
            <Page
              title={title}
              resources={resources}
            />
            <br/>
          </div>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
