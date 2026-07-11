const VIDEO_EXTENSION = /\.(mp4|webm|mov)$/i;

export function getVideoPosterUrl(videoUrl: string): string {
  return videoUrl.replace(VIDEO_EXTENSION, "-poster.jpg");
}
