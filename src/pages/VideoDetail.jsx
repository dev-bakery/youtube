/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { useLocation } from "react-router-dom";
import ChannelInfo from "../components/ChannelInfo";
import RelativeVideos from "../components/RelativeVideos";

export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation();
  const { title, channelId, channelTitle, description } = video.snippet;
  return (
    <>
      <section>
        <article>
          <iframe
            id='player'
            type='text/html'
            width='100%'
            height='640'
            src={`http://www.youtube.com/embed/${video.id}`}
            frameBorder='0'></iframe>
          <div>
            <h2>{title}</h2>
            <ChannelInfo id={channelId} name={channelTitle} />
            <pre>{description}</pre>
          </div>
        </article>
        <section>
          <RelativeVideos id={video.id} />
        </section>
      </section>
    </>
  );
}
