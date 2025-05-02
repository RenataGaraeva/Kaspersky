import { IData_SnippetNews } from "../../../../app/Types.tsx";
import Source from "./DataAboutNews_Components/Source.tsx";

interface Props {
  news: IData_SnippetNews;
}
export default function DataAboutNews ({news}: Props) {

  return (
    <>
    <Source source= {news.DOM}/>
    </>
  )
}