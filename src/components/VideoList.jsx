import React from "react";
import popular from "../videos/popular.json";

export default function VideoList() {
  return (
    <ul>
      {popular.items.map((video, index) => {
        const { title } = video.snippet;
        return <li key={index}>{title}</li>;
      })}
    </ul>
  );
}
