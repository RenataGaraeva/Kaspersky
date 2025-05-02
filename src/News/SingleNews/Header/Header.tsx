import { IData_SnippetNews } from "../../../app/Types.tsx";

interface Props {
  news: IData_SnippetNews
}

export default function Header ({news}: Props) {

  return (
<>{news}</>
  )
}