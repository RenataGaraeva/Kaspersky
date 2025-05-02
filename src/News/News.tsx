import {Col, Flex, Row} from "antd";
import { data } from "../app/Const.tsx";
import SingleNews from "./SingleNews/SingleNews.tsx";
import { IData_SnippetNews } from "../app/Types.tsx";

export default function News() {

  return (

    <Row justify={"center"} align={"middle"}>
      <Col xs={22} sm={22} md={22} lg={16} xl={12}>
        <Flex vertical={true} wrap={true} align={'center'} >
          {data.map((news: IData_SnippetNews) => (
            <SingleNews news={news}/>
          ))}
        </Flex>
      </Col>
    </Row>

  );
}