import { getFirstLetterCapital } from "../../../../app/Const.tsx";
import { Tag } from "antd";

interface Props {
  sent: string;
}
export default function Sent ({sent}: Props) {
return (
  <Tag color="#f50">{getFirstLetterCapital(sent)}</Tag>
)
}