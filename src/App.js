import {createTheme, ThemeProvider} from "@mui/material/styles";
import useMediaQuery from '@mui/material/useMediaQuery';
import {Route, Routes} from "react-router-dom";
import {Page} from "./components/Page";
import {Header} from "./components/Header";
import {PAGE_RESOURCE_MAP} from "./data/constants";
import CssBaseline from '@mui/material/CssBaseline';
import {useState} from "react";
import "./App.css";

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const resources = PAGE_RESOURCE_MAP;
  const resourceKeys = Object.keys(resources);
  const [darkMode, setDarkMode] = useState(prefersDarkMode);
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    }
  })
  const header = <Header
    title={"Steam Deck Resources"}
    links={resourceKeys}
    setDarkMode={setDarkMode}
  />;
  return (
    <CssBaseline enableColorScheme>
      <ThemeProvider theme={theme}>
        <div className="App" style={{
          background: theme.palette.background.default,
        }}>
          {header}
          <Routes>
            {Object.entries(resources).map(
              ([title, pageResources], i) => <Route
                path={`/${title}`}
                key={`${title}-${i}-route`}
                element={
                  <Page resources={pageResources}/>
                }
              />
            )}
          </Routes>
        </div>
      </ThemeProvider>
    </CssBaseline>
  );
}

export default App;
