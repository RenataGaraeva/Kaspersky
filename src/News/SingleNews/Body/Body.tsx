import { IData_SnippetNews } from "../../../app/Types.tsx";
import Title from "./Components/Title.tsx";

interface Props {
  news: IData_SnippetNews
}

export default function Body ({news}: Props) {

  return (
    <>
    <Title title = {news.TI} />

    </>
  )
}