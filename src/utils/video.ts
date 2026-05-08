export type VideoHost = "vimeo" | "youtube";

export interface ParsedVideo {
  host: VideoHost;
  id: string;
  embedSrc: string;
  ambientSrc: string;
  posterUrl: string;
  watchUrl: string;
}

const VIMEO_RE = /vimeo\.com\/(?:video\/)?(\d+)/;
const YOUTUBE_RE = /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w-]{11})/;

export function parseVideoUrl(url: string): ParsedVideo {
  const vimeo = url.match(VIMEO_RE);
  if (vimeo) {
    const id = vimeo[1];
    return {
      host: "vimeo",
      id,
      embedSrc: `https://player.vimeo.com/video/${id}?dnt=1`,
      ambientSrc: `https://player.vimeo.com/video/${id}?background=1&autoplay=1&loop=1&muted=1&dnt=1`,
      posterUrl: `https://vumbnail.com/${id}.jpg`,
      watchUrl: `https://vimeo.com/${id}`,
    };
  }
  const yt = url.match(YOUTUBE_RE);
  if (yt) {
    const id = yt[1];
    return {
      host: "youtube",
      id,
      embedSrc: `https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1`,
      ambientSrc: `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&loop=1&playlist=${id}&mute=1&controls=0&modestbranding=1&playsinline=1&rel=0&iv_load_policy=3`,
      posterUrl: `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`,
      watchUrl: `https://www.youtube.com/watch?v=${id}`,
    };
  }
  throw new Error(`Unsupported video URL: ${url}`);
}
