import { IData_SnippetNews } from "../../../../app/Types.tsx";
import Source from "./DataAboutNews_Components/Source.tsx";
import Country from "./DataAboutNews_Components/Country.tsx";
import Language from "./DataAboutNews_Components/Language.tsx";

interface Props {
  news: IData_SnippetNews;
}
export default function DataAboutNews ({news}: Props) {

  return (
    <>
    <Source source= {news.DOM}/>
     <Country country={news.CNTR} src={news.FAV} />
      <Language language={news.LANG} />
    </>
  )
}