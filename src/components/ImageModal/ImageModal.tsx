import { Image } from "../../types";
import css from "./ImageModal.module.css";

interface ImageModalProps {
  images: Omit<Image, "id">;
}

const ImageModal: React.FC<ImageModalProps> = ({ images }) => {
  const { urls, alt_description } = images;
  return (
    <div>
      <img src={urls.regular} alt={alt_description} className={css.image} />
    </div>
  );
};
export default ImageModal;
