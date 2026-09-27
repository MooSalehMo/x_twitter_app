"use client";
//import Image from 'next/image'
import { Image as IKImage} from '@imagekit/next';


const urlEndpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT

type ImageType = {
  path: string;
  w?: number;
  h?: number;
  alt: string;
  className?: string;
  tr?: boolean;
};

export default function Image({ path, w, h, alt, className, tr}:ImageType) {
  return (
    <IKImage
      urlEndpoint= {urlEndpoint}
      className={className}
      src={path}
      alt={alt}
      {...(tr 
        ? { transformation: [{ width: `${w}`, height: `${h}` }]}
        : { width: w, height: h })}
    />
  )
}
