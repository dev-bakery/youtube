import React from "react";
import { useParams } from "react-router-dom";
import SearchList from "../components/SearchList";
import VideoList from "../components/VideoList";

export default function Videos() {
  const { keyword } = useParams();
  return <div>Videos {keyword ? <SearchList /> : <VideoList />}</div>;
}
