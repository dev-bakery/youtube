import React from "react";
import search from "../videos/search.json";

export default function SearchList() {
  return (
    <ul>
      {search.items.map((video, index) => {
        const { title } = video.snippet;
        return <li key={index}>{title}</li>;
      })}
    </ul>
  );
}
