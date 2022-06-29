import {PageContents} from "./PageContents";

export const Page = ({resources}) => {
  return <>
    {
      Object.entries(resources).map(
        ([title, availableResources], i) => <PageContents
          key={`${title}-${i}-section`}
          sectionNum={i}
          title={title}
          resources={availableResources}
        />
      )
    }
  </>;
}