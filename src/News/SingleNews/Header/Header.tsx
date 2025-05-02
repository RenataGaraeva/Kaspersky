import { IData_SnippetNews } from "../../../app/Types.tsx";
import DATE from "./Components/Date.tsx";
import Reach from "./Components/Reach.tsx";
import Traffic from "./Components/Traffic.tsx";
import Sent from "./Components/Sent.tsx";

interface Props {
  news: IData_SnippetNews
}

export default function Header ({news}: Props) {

  return (
    <>
   <DATE newsDate={news.DP} />
      <Reach reach={news.REACH}/>
      <Traffic traffic={news.TRAFFIC}/>
      <Sent sent={news.SENT} />
    </>
  )
}