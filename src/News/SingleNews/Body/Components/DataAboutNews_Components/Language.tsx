import { BookOutlined } from "@ant-design/icons";
import { Flex, Typography } from "antd";
import { getFirstLetterCapital } from "../../../../../app/Const.tsx";

interface Props {
  language: string;
}

export default function Language({ language }: Props) {
  return (
    <Flex gap={5}>
      <BookOutlined style={{ color: "grey" }} />
      <Typography.Text type={"secondary"}>
        {getFirstLetterCapital(language)}
      </Typography.Text>
    </Flex>
  );
}
