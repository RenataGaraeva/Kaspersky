import { GlobalOutlined } from "@ant-design/icons";
import Link from "antd/es/typography/Link";


interface Props {
  source: string;
}

export default function Source ({source}: Props) {
return (


<>
  <GlobalOutlined/>
  <Link>
    {source}</Link>
</>
)
}