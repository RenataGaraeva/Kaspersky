import { Flex, Tag, Typography } from "antd";
import { IData_SnippetNews, IData_TagItem } from "../../../../app/Types.tsx";

interface KeywordsProps {
  news: IData_SnippetNews;
}

export default function Keywords({ news }: KeywordsProps) {
  return (
    <Flex wrap={true} gap="small">
      {news.KW.map((keywords: IData_TagItem) => (
        <Tag style={{ display: "flex" }}>
          <Typography.Text type={"secondary"} style={{ marginRight: "5px" }}>
            {keywords.value}
          </Typography.Text>
          <Typography>{keywords.count}</Typography>
        </Tag>
      ))}
    </Flex>
  );
}
