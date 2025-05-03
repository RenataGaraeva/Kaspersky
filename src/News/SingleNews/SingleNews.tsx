import { IData_SnippetNews } from "../../app/Types.tsx";
import { Card, Flex } from "antd";
import Header from "./Header/Header.tsx";
import Footer from "./Footer/Footer.tsx";
import Body from "./Body/Body.tsx";

interface Props {
news: IData_SnippetNews
}

export default function SingleNews ({news}: Props){

  return (
    <Card className="singleNews">
      <Flex key={news.ID}  wrap={true} vertical={true} gap={"middle"}>
        <Header news={news} />
        <Body news={news} />
        <Footer news={news}/>
      </Flex>
    </Card>
  )
}