import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Link from "@mui/material/Link";
import Badge from "@mui/material/Badge";

const SHIELDS_URL = "https://img.shields.io/badge/";

const shorten = (s, maxLen=10) => s.length > maxLen ? `${s.slice(0, 10)}...` : s;

export const Row = ({rowKey, title, badges, link, description}) => {
  const hyperlink = <Link
    href={link}
    underline="always"
    target="_blank"
    rel="noreferrer">
    {title}
  </Link>
  const availableBadges = badges || [];
  while (availableBadges.length !== 3) {
    availableBadges.push({
      "alt": title,
      "src": `${SHIELDS_URL}${shorten(title)}-inactive`
    })
  }
  return <TableRow
    key={rowKey}
    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
  >
    <TableCell
      key={`${rowKey}-0`}
      component="th"
      scope="row"
    >
      {hyperlink}
    </TableCell>
    {badges.map(
      (b, j) => <TableCell
        key={`${rowKey}-${j}`}
      >
        <Badge><img alt={b.alt} src={b.src}/></Badge>
      </TableCell>
    )}
    <TableCell
      key={`${rowKey}-4`}
    >
      {description}
    </TableCell>
  </TableRow>;
}