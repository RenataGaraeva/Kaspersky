import { Flex, Typography } from "antd";
import { IData_TrafficItem } from "../../../../app/Types.tsx";

interface Props {
  traffic: IData_TrafficItem[];
}
export default function Traffic ({traffic}: Props) {
  const getPercent = (count: number) => Math.floor(count * 100) + '%';

  return (
    <Flex gap={5}>
    <Typography.Text type={"secondary"}>Top Traffic:</Typography.Text>
  {traffic.map((traffic, index) => (


    <Flex gap={5} wrap={true} key={index}>
      {traffic.value}
      <Typography>{getPercent(traffic.count)}</Typography>
    </Flex>
  ))}
    </Flex>
  )
}