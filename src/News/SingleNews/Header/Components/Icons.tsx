import { Flex } from "antd";
import { BorderOutlined, InfoOutlined } from "@ant-design/icons";

export default function Icons () {
  return (
    <>
      <Flex className="icon"  gap={'small'}>
        <BorderOutlined  className="iconBorder" />
        <InfoOutlined className="iconI" />
        <BorderOutlined  className="iconBorder" />
      </Flex>
    </>
  )
}