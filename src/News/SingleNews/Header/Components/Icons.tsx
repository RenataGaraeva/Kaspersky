import { Flex } from "antd";
import { BorderOutlined, InfoOutlined } from "@ant-design/icons";

export default function Icons () {
  return (
    <>
      <Flex gap={'small'}>
        <BorderOutlined />
        <InfoOutlined />
        <BorderOutlined />
      </Flex>
    </>
  )
}