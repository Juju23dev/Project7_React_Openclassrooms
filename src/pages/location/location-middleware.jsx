import React, {useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { NotFound } from "../not-found/not-found";
import { Location } from "./location";
import { isIdValid, getContentById } from "../../data";

export const LocationMiddleware = () => {
  const { id } = useParams();
  const [content, setContent] = useState();
  const isContent = !!content;
  const isUrlValid = useMemo(() => isIdValid(id), [id]);

  useEffect(() => {
    setContent((current) => {
      const actualContent = getContentById(id)
      
      if (actualContent !== current){
        return actualContent;
      }

      return current;
    })
  }, [id]);

  if (isUrlValid && isContent) {
    return <Location content={content}/>
  }

  return !isUrlValid
    ? <NotFound/>
    : null
}