import { BookOutlined } from "@ant-design/icons";
import {Typography } from "antd";
import { getFirstLetterCapital } from "../../../../../app/Const.tsx";


interface Props {
  language: string;
}

export default function Language({language}: Props) {
  return (


    <>
      <BookOutlined/>
      <Typography.Text type={'secondary'}>{getFirstLetterCapital(language)}</Typography.Text>
    </>
  )
}