import { Flex, Typography } from "antd";

interface Props {
  reach: number;
}

export default function Reach({ reach }: Props) {
  const markOfReach = Math.floor(reach / 1000);
  return (
    <Flex gap={5} wrap={true}>
      <Typography>{markOfReach + "k"}</Typography>
      <Typography.Text type={"secondary"}>Reach</Typography.Text>
    </Flex>
  );
}
