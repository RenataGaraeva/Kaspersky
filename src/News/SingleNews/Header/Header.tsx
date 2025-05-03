import { IData_SnippetNews } from "../../../app/Types.tsx";
import DATE from "./Components/Date.tsx";
import Reach from "./Components/Reach.tsx";
import Traffic from "./Components/Traffic.tsx";
import Sent from "./Components/Sent.tsx";
import Icons from "./Components/Icons.tsx";
import { Flex } from "antd";

interface Props {
  news: IData_SnippetNews;
}

export default function Header({ news }: Props) {
  return (
    <Flex vertical={false} justify={"space-between"} gap={"small"} wrap={true}>
      <Flex vertical={false} gap={"large"} wrap={true}>
        <DATE newsDate={news.DP} />
        <Reach reach={news.REACH} />
        <Traffic traffic={news.TRAFFIC} />
      </Flex>
      <Flex>
        <Sent sent={news.SENT} />
        <Icons />
      </Flex>
    </Flex>
  );
}
