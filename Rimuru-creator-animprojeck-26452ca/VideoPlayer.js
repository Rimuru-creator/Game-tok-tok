import React from "react";

export default function VideoPlayer({ url }) {
  return (
    <video controls width="100%" height="300">
      <source src={url} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
