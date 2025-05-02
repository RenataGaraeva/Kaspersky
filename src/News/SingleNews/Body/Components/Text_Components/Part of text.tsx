import {Button, Flex, Typography} from "antd";
import { CaretUpOutlined } from "@ant-design/icons";
import { IData_SnippetNews } from "../../../../../app/Types.tsx";

interface Props {
  news: IData_SnippetNews;
  setIsOpenedFullText: (value: boolean) => void;
}
export default function PartOfText ({ news, setIsOpenedFullText }: Props) {
  const showFullText = () => {
    setIsOpenedFullText(false);
  };
  return (
    <>
      <Flex gap={5} vertical={true}>
        <Typography.Text>{news.AB}</Typography.Text>
        <Button color="primary" variant="text" onClick={showFullText} className="buttonToShowMoreAndLess">Show less <CaretUpOutlined />
        </Button>
      </Flex>
    </>
  );
}