import {  UserOutlined } from "@ant-design/icons";
import { Flex, Typography } from "antd";

interface Props {
  authors: string[];
}

export default function Authors({authors}: Props) {

  const getAuthor = (authors: string[])=> {
    if (authors.length === 0) {
      return 'Unknown author'
    } else if (authors.length <= 2) {
      return (
        <>
          {authors.map((author: string, index: number) => (
            <Typography>
              {author}
              {index === 0 ? (<span>,</span>) : null}
            </Typography>
          ))}
        </>
      )
    }
    else {
      return (
        <>
          {authors.slice(0,2).map((author) => (
            <Typography>{author} + ','</Typography>
          ))}
          <Typography>et al.</Typography>
        </>
      )
    }
  }

  return (
    <Flex gap={5}>
      <UserOutlined style={{color: "grey"}}/>
      <Typography.Text type={'secondary'}>{getAuthor(authors)}</Typography.Text>
    </Flex>
  )
}