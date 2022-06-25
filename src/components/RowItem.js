import {Link} from "@mui/material";

export const RowItem = (props) => {
  return (
    <Link href={props.link}
          underline="always"
          target="_blank"
          rel="noreferrer"
    >
      {props.title}
    </Link>
  )
}