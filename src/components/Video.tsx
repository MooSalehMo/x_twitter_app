"use client"

import { Video } from '@imagekit/next';

const urlEndpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT
type VideoType = {
  path: string;
  w: number;
  h: number;
  className?: string;
  tr?: boolean;

}


export default function IKVideo({path, className, w, h, tr}:VideoType ) {
  return (
    <Video
      urlEndpoint= {urlEndpoint}
      src={path}
      width=""
      className={className}
      {...(tr 
        ? { transformation: [{ width: `${w}`, height: `${h}` }]}
        : { width: w, height: h })}
      controls
    />
  )
}
