export type Source =
  | "wallhaven"
  | "konachan"
  | "gelbooru"
  | "zerochan"
  | "image"
export type Purity = "sfw" | "nsfw"


export interface Image {
  id: string,
  source: string,
  height: number,
  width: number,
  purity: Purity,
  sample: string,
  url: string,
  resolution: string
}
export interface ImageDetail extends Image {
  tags: string[],
  fileSize: string,
  created_at: string,
}