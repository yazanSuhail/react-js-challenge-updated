import React, { useEffect, useState } from "react";
import SearchForm from "../../components/SearchForm";
import GifThumbnail from "../../components/GifThumbnail";
import { useGetGifsUrls } from "../../hooks/getGifs";

import Modal from "../../components/Lightbox";

import Alert from "../../components/Alert";
import { useMessageAlertStatus } from "../../contexts/use-alertMessageStatus";

function MainPage() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { data, isError, isLoading, mutateAsync, isSuccess } = useGetGifsUrls();

  const { params } = useMessageAlertStatus();

  useEffect(() => {
    if (searchQuery !== "") {
      mutateAsync(searchQuery);
    }
  }, [searchQuery]);

  const gifsCount = data?.map((item: any) => item);

  return (
    <>
      <SearchForm isLoading={isLoading} setSearchQuery={setSearchQuery} />

      <GifThumbnail
        data={data}
        isError={isError}
        isLoading={isLoading}
        searchQuery={searchQuery}
      />

      <Modal data={data} />
      <Alert
        isOpen={params.isSuccessRequestToGetGif}
        content={
          gifsCount?.length > 0
            ? `Found ${gifsCount?.length} gifs`
            : `Couldn't find a gif for ${searchQuery}... try again.`
        }
      />
    </>
  );
}

export default MainPage;
