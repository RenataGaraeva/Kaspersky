import { IData_SnippetNews } from "../../app/Types.tsx";

interface Props {
news: IData_SnippetNews
}
export default function SingleNews ({news}: Props){

  return (
    <>
      {news.AB}
    </>
  )
}