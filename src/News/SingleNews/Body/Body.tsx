import { IData_SnippetNews } from "../../../app/Types.tsx";
import Title from "./Components/Title.tsx";
import DataAboutNews from "./Components/DataAboutNews.tsx";
import Text from "./Components/Text.tsx";

interface Props {
  news: IData_SnippetNews
}

export default function Body ({news}: Props) {

  return (
    <>
    <Title title = {news.TI} />
      <DataAboutNews news={news}/>
      <Text news={news}/>
    </>
  )
}