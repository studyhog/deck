import "./App.css";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {Routes, Route} from "react-router-dom";
import {Section} from "./components/Section";
import {Header} from "./components/Header";
import {EMULATION_RESOURCES} from "./data/emulation";
import {GUIDE_RESOURCES} from "./data/guide";
import {PLUGIN_RESOURCES} from "./data/plugin";
import {ROM_RESOURCES} from "./data/rom";
import {VALVE_RESOURCES} from "./data/valve";
import {OTHER_RESOURCES} from "./data/other";
import {SCRIPT_RESOURCES} from "./data/script";
import {GAME_REVIEW_RESOURCES} from "./data/game_review";
import {NON_STEAM_LAUNCHER_RESOURCES} from "./data/non_steam_launcher";
import {resourceTitleComparator} from "./utils";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  }
});

const ALL_RESOURCES = {
  "Emulation": EMULATION_RESOURCES,
  "Guides": GUIDE_RESOURCES,
  "Plugins": PLUGIN_RESOURCES,
  "ROM": ROM_RESOURCES,
  "Valve": VALVE_RESOURCES,
  "Launchers": NON_STEAM_LAUNCHER_RESOURCES,
  "GameReviews": GAME_REVIEW_RESOURCES,
  "Scripts": SCRIPT_RESOURCES,
  "Other": OTHER_RESOURCES,
}
const ALL_RESOURCES_SORTED = Object.fromEntries(
  Object.entries(ALL_RESOURCES).map(
    ([title, resources]) => {
      return [title, resources.sort(resourceTitleComparator)];
    }
  )
);

const Page = ({path, resources}) => {
  const my_resources = path === "" ? resources : {[path]: resources[path]}
  return <>
    {
      Object.entries(my_resources).map(
        ([title, availableResources], i) => <Section
          key={`${title}-${i}-section`}
          sectionNum={i}
          title={title}
          resources={availableResources}
        />
      )
    }
  </>;
}

function App() {
  const resources = ALL_RESOURCES_SORTED;
  const resourceKeys = Object.keys(resources)
  const header = <Header
    title={"Steam Deck Resources"}
    links={resourceKeys}
  />;
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App" style={{
        background: darkTheme.palette.background.default,
      }}>
        {header}
        <Routes>
          <Route
            path="/"
            element={
              <Page path=""
                    resources={resources}/>
            }
          />
          {Object.keys(resources).map(
            (title, i) => <Route
              path={`/${title}`}
              key={`${title}-${i}-route`}
              element={
                <Page path={title}
                      resources={resources}/>
              }
            />
          )}
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
