import {Typography } from "antd";


interface Props {
  country: string;
  src: string;
}

export default function Country ({country, src}: Props) {
  return (


    <>
      <img src={src} alt="country flag" style={{ color: 'grey' }} />
      <Typography.Text type={'secondary'}>{country}</Typography.Text>
    </>
  )
}