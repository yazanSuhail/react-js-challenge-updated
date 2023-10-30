import { useMutation } from "react-query";

import { searchGifs } from "../../services/gif-services";

import { IGifImageProps } from "../../interfaces/IGifThumbnailProps";
import { useMessageAlertStatus } from "../../contexts/use-alertMessageStatus";

function useGetGifsUrls() {
  const { handleParams } = useMessageAlertStatus();
  return useMutation(
    async (searchParams: string) => {
      if (searchParams) {
        const { data } = await searchGifs(searchParams);
        const images = data.data.map(
          (item: { images: IGifImageProps }) => item.images
        );
        return images;
      }
    },
    {
      useErrorBoundary: false,
      onMutate: () => {
        handleParams({
          isLoadingRequestToGetGif: true,
          isSuccessRequestToGetGif: false,
          isErrorRequestToGetGif: false,
        });
      },
      onSuccess: () => {
        handleParams({
          isSuccessRequestToGetGif: true,
          isLoadingRequestToGetGif: false,
          isErrorRequestToGetGif: false,
        });
        setTimeout(() => {
          handleParams({
            isSuccessRequestToGetGif: false,
            isLoadingRequestToGetGif: false,
            isErrorRequestToGetGif: false,
          });
        }, 6000);
      },
      onError: () => {
        handleParams({
          isErrorRequestToGetGif: true,
          isSuccessRequestToGetGif: false,
          isLoadingRequestToGetGif: false,
        });
        setTimeout(() => {
          handleParams({
            isSuccessRequestToGetGif: false,
            isLoadingRequestToGetGif: false,
            isErrorRequestToGetGif: false,
          });
        }, 10000);
      },
    }
  );
}

export { useGetGifsUrls };
