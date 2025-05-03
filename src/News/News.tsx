import {Col, Flex, Row} from "antd";
import SingleNews from "./SingleNews/SingleNews.tsx";
import { IData_SnippetNews } from "../app/Types.tsx";
import { useAppDispatch, useAppSelector } from "../API/hooks.tsx";
import { fetchPosts, selectAllNews, selectNewsStatus } from "../API/NewsSlice.tsx";
import { useEffect } from "react";
import LoadingAndError from "../app/LoadingEndError.tsx";

export default function News() {

  const dispatch = useAppDispatch()
  const news = useAppSelector(selectAllNews)
  const newsStatus = useAppSelector(selectNewsStatus)

  useEffect(() => {
    if (newsStatus === 'idle') {
      dispatch(fetchPosts())
    }
  }, [newsStatus, dispatch])

  return (
    <Row justify={"center"} align={"middle"} className="news">
      <Col xs={22} sm={22} md={22} lg={16} xl={12}>
        <Flex vertical={true} wrap={true} align={'center'} >
          {news.map((news: IData_SnippetNews) => (
            <SingleNews news={news}/>
          ))}
          <LoadingAndError/>
        </Flex>
      </Col>
    </Row>
  );
}