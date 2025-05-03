import { Flex, Typography } from "antd";

interface Props {
  newsDate: string;
}
export default function DATE({ newsDate }: Props) {
  const date = new Date(newsDate);
  const day = date.getDate();
  const month = new Intl.DateTimeFormat("en-US", {
    month: "short",
  }).format(date);
  const year = date.getFullYear();

  return (
    <Flex gap={5} wrap={true}>
      <Typography>{day}</Typography>
      <Typography.Text type={"secondary"}>{month}</Typography.Text>
      <Typography.Text type={"secondary"}>{year}</Typography.Text>
    </Flex>
  );
}
