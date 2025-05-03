import { GlobalOutlined } from "@ant-design/icons";
import Link from "antd/es/typography/Link";
import { Flex } from "antd";

interface Props {
  source: string;
}

export default function Source ({source}: Props) {
return (

<Flex gap={5}>
  <GlobalOutlined/>
  <Link>
    {source}</Link>
</Flex>
)
}