import { IData_SnippetNews } from "../../../app/Types.tsx";
import { Button, Flex } from "antd";
import Keywords from "./Footer_Component/Keywords.tsx";

interface Props {
  news: IData_SnippetNews
}

export default function Footer ({news}: Props) {

  return (
    <Flex gap={'large'} vertical={true}>
      <Keywords news={news} />
      <a href={news.URL}>
        <Button color="primary" variant="filled" >Original Source</Button>
      </a>
    </Flex>
  )
}