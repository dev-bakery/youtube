import React from "react";
import { useNavigate } from "react-router-dom";
import { formatAgo } from "../util/date";

export default function VideoCard({ video, id }) {
  const navigate = useNavigate();

  const { title, thumbnails, publishedAt, channelTitle } = video.snippet;
  return (
    <li
      onClick={() => {
        // navigate에서 최상위 루트에서 시작하길 원한다면 맨앞에 / 넣어줌
        navigate(`/videos/watch/${video.id}`, { state: { video } });
      }}>
      {/* state를 통해서 객체를 전달할 수 있음 */}
      <img className='w-full' src={thumbnails.medium.url} alt={title} />
      <div>
        <p className='font-semibold my-2 line-clamp-2'>{title}</p>
        <p className='text-sm opacity-80'>{channelTitle}</p>
        <p className='text-sm opacity-80'>{formatAgo(publishedAt)}</p>
      </div>
    </li>
  );
}
