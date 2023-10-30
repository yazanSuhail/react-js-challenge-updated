export interface IGifThumbnailProps {
  data: any;
  isLoading: boolean;
  isError: boolean;
  searchQuery: string;
}

export interface ICardsItemProps {
  height: string;
  width: string;
  url: string;
  size: string;
}

export interface IDataItemProps {
  item: {
    downsized: ICardsItemProps;
  };
  index: number;
}

export interface IGifImageProps {
  original: {
    height: string;
    width: string;
    size: string;
    url: string;
    mp4_size: string;
    mp4: string;
    webp_size: string;
    webp: string;
    frames: string;
    hash: string;
  };
  downsized: {
    height: string;
    width: string;
    size: string;
    url: string;
  };
  downsized_large: {
    height: string;
    width: string;
    size: string;
    url: string;
  };
  downsized_medium: {
    height: string;
    width: string;
    size: string;
    url: string;
  };
  downsized_small: {
    height: string;
    width: string;
    mp4_size: string;
    mp4: string;
  };
  downsized_still: {
    height: string;
    width: string;
    size: string;
    url: string;
  };
  fixed_height: {
    height: string;
    width: string;
    size: string;
    url: string;
    mp4_size: string;
    mp4: string;
    webp_size: string;
    webp: string;
  };
  fixed_height_downsampled: {
    height: string;
    width: string;
    size: string;
    url: string;
    webp_size: string;
    webp: string;
  };
  fixed_height_small: {
    height: string;
    width: string;
    size: string;
    url: string;
    mp4_size: string;
    mp4: string;
    webp_size: string;
    webp: string;
  };
  fixed_height_small_still: {
    height: string;
    width: string;
    size: string;
    url: string;
  };
  fixed_height_still: {
    height: string;
    width: string;
    size: string;
    url: string;
  };
  fixed_width: {
    height: string;
    width: string;
    size: string;
    url: string;
    mp4_size: string;
    mp4: string;
    webp_size: string;
    webp: string;
  };
  fixed_width_downsampled: {
    height: string;
    width: string;
    size: string;
    url: string;
    webp_size: string;
    webp: string;
  };
  fixed_width_small: {
    height: string;
    width: string;
    size: string;
    url: string;
    mp4_size: string;
    mp4: string;
    webp_size: string;
    webp: string;
  };
  fixed_width_small_still: {
    height: string;
    width: string;
    size: string;
    url: string;
  };
  fixed_width_still: {
    height: string;
    width: string;
    size: string;
    url: string;
  };
  looping: {
    mp4_size: string;
    mp4: string;
  };
  original_still: {
    height: string;
    width: string;
    size: string;
    url: string;
  };
  original_mp4: {
    height: string;
    width: string;
    mp4_size: string;
    mp4: string;
  };
  preview: {
    height: string;
    width: string;
    mp4_size: string;
    mp4: string;
  };
  preview_gif: {
    height: string;
    width: string;
    size: string;
    url: string;
  };
  preview_webp: {
    height: string;
    width: string;
    size: string;
    url: string;
  };
}
