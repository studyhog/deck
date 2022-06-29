import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {IconButton, useTheme} from "@mui/material"
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import GitHubIcon from '@mui/icons-material/GitHub';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import ListIcon from '@mui/icons-material/List';
import {openInNewWindow} from "../utils";
import {
  GITHUB_REPO_URL,
} from "../data/constants";


export const Header = ({title, links, setDarkMode}) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const themeIcon = isDark ? <LightModeIcon/> : <DarkModeIcon/>;
  const themeButton = <IconButton onClick={()=>setDarkMode(!isDark)}>{themeIcon}</IconButton>;

  const navigate = useNavigate();
  const [openDrawer, setOpenDrawer] = useState(false);
  const titleComponent = <Typography
    variant="h4"
    component="a"
    sx={{ flexGrow: 1 }}
    color={theme.palette.text.primary}
    href="/"
  >
    {title}
  </Typography>;
  const linkComponents = links.map(
    (title, i) => <Button
      color="inherit"
      key={`${title}-${i}-header-button`}
      onClick={() => navigate(`/${title}`)}
    >
      {title || "HOME"}
    </Button>
  );
  return <AppBar position={"sticky"}>
    <Toolbar>
      {titleComponent}
      <Button
        color="inherit"
        startIcon={<ListIcon/>}
        onClick={()=>setOpenDrawer(true)}
      >
        Jump to
      </Button>
      {themeButton}
      <Drawer
        anchor={"right"}
        open={openDrawer}
        onClose={()=>setOpenDrawer(false)}
      >
        {linkComponents}
        <Button
          color="inherit"
          onClick={() => {openInNewWindow(GITHUB_REPO_URL)}}
        >
          <GitHubIcon/>
        </Button>
      </Drawer>
    </Toolbar>
  </AppBar>
}