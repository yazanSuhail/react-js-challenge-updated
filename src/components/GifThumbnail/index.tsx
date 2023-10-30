import { IGifThumbnailProps } from "../../interfaces/IGifThumbnailProps";
import Card from "../Card";

import { Container } from "./styles";

function GifThumbnail({ data, isLoading, isError }: IGifThumbnailProps) {
  return (
    <Container>
      {!isLoading && !isError && data && (
        <>
          {data?.map((item: any, index: any) => (
            <div key={index}>
              <Card url={item.downsized.url} width={item.downsized.width} />
            </div>
          ))}
        </>
      )}
    </Container>
  );
}

export default GifThumbnail;
