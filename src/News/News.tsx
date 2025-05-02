import {Col, Flex, Row} from "antd";
import SingleNews from "./SingleNews/SingleNews.tsx";
import { IData_SnippetNews } from "../app/Types.tsx";
import { useAppSelector } from "../API/hooks.tsx";
import { selectAllNews } from "../API/NewsSlice.tsx";

export default function News() {
  const news = useAppSelector(selectAllNews)
  return (

    <Row justify={"center"} align={"middle"}>
      <Col xs={22} sm={22} md={22} lg={16} xl={12}>
        <Flex vertical={true} wrap={true} align={'center'} >
          {news.map((news: IData_SnippetNews) => (
            <SingleNews news={news}/>
          ))}
        </Flex>
      </Col>
    </Row>

  );
}