import {Button, Flex, Typography} from "antd";
import {CaretDownOutlined} from "@ant-design/icons";
import { IData_SnippetNews } from "../../../../../app/Types.tsx";

interface Props {
  news: IData_SnippetNews;
  setIsOpenedFullText: (value: boolean) => void;
}
export default function Highlights ({ news, setIsOpenedFullText }: Props) {
  const showLessText = () => {
    setIsOpenedFullText(true);
  };

  const formattedText = news.HIGHLIGHTS.map((element, elementIndex) => {

    const parts = element.split(/(<kw>.*?<\/kw>)/g).map((part, partIndex) => {
      if (part.match(/<kw>(.*?)<\/kw>/)) {
        const content = part.replace(/<kw>(.*?)<\/kw>/, '$1');
        return <span className="keywordsInTheText" key={`${elementIndex}-${partIndex}`}>{content}</span>;
      }
      return <span key={`${elementIndex}-${partIndex}`}>{part}</span>;
    });

    return (
      <>
        {parts.map(part => (
          <Typography.Text>{part} </Typography.Text>
        ))}
      </>

    )
  });

  return (
    <Flex vertical={true} >
              <span>
                {formattedText}
          </span>
      <Button color="primary" variant="text" className="buttonToShowMoreAndLess" onClick={showLessText}>Show more <CaretDownOutlined />
      </Button>
    </Flex>

  );
}