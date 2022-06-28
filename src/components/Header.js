import {useState} from "react";
import Typography from "@mui/material/Typography";
import {Button, Drawer, useTheme} from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {Link} from "react-router-dom";
import GitHubIcon from '@mui/icons-material/GitHub';


export const Header = ({title, links}) => {
  const theme = useTheme();
  const [openDrawer, setOpenDrawer] = useState(false);
  const titleComponent = <Typography
    variant="h4"
    component="a"
    sx={{ flexGrow: 1 }}
    color={theme.palette.primary.main}
    gutterBottom
    href="/"
  >
    {title}
  </Typography>;
  const linkComponents = links.map(
    (title, i) => <Link
      key={`${title}-${i}-header-link`}
      to={title}
    >{
      title}
    </Link>
  );
  return <AppBar position="static">
    <Toolbar>
      {titleComponent}
      <Button onClick={()=>setOpenDrawer(true)}>Jump to</Button>
      <Drawer
        anchor={"right"}
        open={openDrawer}
        onClose={()=>setOpenDrawer(false)}
      >
        {linkComponents}
        <a href={"https://www.github.com/studyhog/deck" }
           target="_blank">
          <GitHubIcon/>
        </a>
      </Drawer>
    </Toolbar>
  </AppBar>
}