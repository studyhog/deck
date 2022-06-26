import Typography from "@mui/material/Typography";
import {useTheme} from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Link from "@mui/material/Link";
import GitHubIcon from '@mui/icons-material/GitHub';

export const Header = ({title}) => {
  const theme = useTheme();
  const titleComponent = <Typography
    variant="h4"
    component="a"
    sx={{ flexGrow: 1 }}
    color={theme.palette.primary.main}
    gutterBottom
    href="/"
  >
    {title}
  </Typography>
  return <AppBar position="static">
    <Toolbar>
      {titleComponent}
      <Link href="https://www.github.com/studyhog/deck"
            target="_blank">
        <GitHubIcon/>
      </Link>
    </Toolbar>
  </AppBar>
}