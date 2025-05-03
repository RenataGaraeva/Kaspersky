import { Typography } from "antd";

interface Props {
  title: string;
}

export default function Title({ title }: Props) {
  return <Typography.Link className="title">{title}</Typography.Link>;
}
