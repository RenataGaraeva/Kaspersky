import {Typography} from "antd";
import { useAppSelector } from "../API/hooks.tsx";
import { selectNewsStatus } from "../API/NewsSlice.tsx";

export default function LoadingAndError () {

  const newsStatus = useAppSelector(selectNewsStatus)

  let content = ""
  if (newsStatus === 'pending') {
    content = "LoadingAndError..."
  }  else if (newsStatus === 'rejected') {
    content = "Не получилось загрузить ещё новости. Проверьте ссылку на сервер"
  }

  return (
    <Typography.Text style={{margin: '10px 0', textAlign: 'center'}}>
      {content}
    </Typography.Text>
  )
}


