import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { Page } from "./components/Page";
import { Header } from "./components/Header";
import { EMULATION_RESOURCES } from "./data/emulation";
import { GUIDE_RESOURCES } from "./data/guide";
import { PLUGIN_RESOURCES } from "./data/plugin";
import { ROM_RESOURCES } from "./data/rom";
import { VALVE_RESOURCES } from "./data/valve";
import { OTHER_RESOURCES } from "./data/other";
import { resourceTitleComparator } from "./utils";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  }
});

const ALL_RESOURCES = {
  "Emulation": EMULATION_RESOURCES,
  "Guide": GUIDE_RESOURCES,
  "Plugin": PLUGIN_RESOURCES,
  "ROM": ROM_RESOURCES,
  "Valve": VALVE_RESOURCES,
  "Other": OTHER_RESOURCES,
}

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App" style={{
        background: darkTheme.palette.background.default,
      }}>
        <Header title={"Steam Deck Resources"}/>
        {Object.entries(ALL_RESOURCES).map(([title, resources], i) => {
          const sortedResources = resources.sort(resourceTitleComparator);
          return <div key={`${title}-${i}-container-div`}>
            <Typography
              variant="h6"
              sx={{flexGrow: 1}}
              color={darkTheme.palette.text.primary}
            >
              {title}
            </Typography>
            <Page
              title={title}
              resources={sortedResources}
            />
            <br/>
          </div>
        })}
      </div>
    </ThemeProvider>
  );
}

export default App;
