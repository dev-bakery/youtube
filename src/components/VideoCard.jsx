import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { formatAgo } from "../util/date";

export default function VideoCard({ video, id }) {
  console.log(video);
  const navigate = useNavigate();

  const { title, thumbnails, publishedAt, channelTitle } = video.snippet;
  return (
    <li>
      <Link onClick={navigate(`videos/watch/${id}`, { replace: true })}>
        <img className='w-full' src={thumbnails.medium.url} alt={title} />
        <div>
          <p className='font-semibold my-2 line-clamp-2'>{title}</p>
          <p className='text-sm opacity-80'>{channelTitle}</p>
          <p className='text-sm opacity-80'>{formatAgo(publishedAt)}</p>
        </div>
      </Link>
    </li>
  );
}
