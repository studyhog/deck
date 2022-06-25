import {RowItem} from "./RowItem";

export const Page = (props) => {
  const resources = props.resources;
  return <div>
    {props.title}
    <ul>
      {resources.map(r => <li><RowItem {...r}/></li>)}
    </ul>
  </div>
}