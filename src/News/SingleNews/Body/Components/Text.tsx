import { useState } from "react";
import Highlights from "./Text_Components/Highlights.tsx";
import PartOfText from "./Text_Components/Part of text.tsx";
import { IData_SnippetNews } from "../../../../app/Types.tsx";

interface Props {
  news: IData_SnippetNews;
}

export default function Text({ news }: Props) {
  const [isOpenedFullText, setIsOpenedFullText] = useState(false);

  return (
    <>
      {isOpenedFullText ? (
        <PartOfText news={news} setIsOpenedFullText={setIsOpenedFullText} />
      ) : (
        <Highlights news={news} setIsOpenedFullText={setIsOpenedFullText} />
      )}
    </>
  );
}
