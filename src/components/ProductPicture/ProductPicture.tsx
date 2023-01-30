import { CircularProgress } from "@mui/material";
import { FC, useState } from "react";
import { Picture, ProgressBarField } from "./ProductPicture.style";

export const ProductPicture: FC<IProductPictureProps> = ({ src }) => {
  const [isLoad, setLoad] = useState(false);
  const onLoadHandle = () => {
    setLoad(true);
  };

  return (
    <>
          <Picture src={src || './icons/logo.jpg'} onLoad={onLoadHandle} loading="lazy" style={
            {
                display: isLoad ? 'block' : 'none'
            }
          } />
      {!isLoad &&
      <ProgressBarField>
        <CircularProgress />
        </ProgressBarField>
        }
    </>
  );
};

export interface IProductPictureProps {
  src: string | null;
}
