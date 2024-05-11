import React, { useState, useEffect } from "react";
import "./App.css";
import getImages from "./components/getImages";
import SearchBar from "./components/SearchBar/SearchBar";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import { Image } from "./types";
import Modal from "react-modal";

const options = {
  duration: 500,
  smooth: true,
};

interface Results {
  results: Image[];
  total_pages: number;
}

const App = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(0);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<Image | null>(null);

  useEffect(() => {
    if (!query) return;

    const fetchImagesByQuery = async (): Promise<void> => {
      try {
        setIsLoading(true);
        const data: Results = await getImages(query, page);
        // setImages((prevImages) => [...prevImages, ...data.results]);
        setImages(data.results);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchImagesByQuery();
  }, [query, page]);

  const onModalOpen = (pictures: Image): void => {
    setModalImage(pictures);
    setModalIsOpen(true);
  };

  const onModalClose = (): void => {
    setModalIsOpen(false);
  };

  const handleSearch = (data: string): void => {
    setPage(1);
    setQuery(data);
  };

  const onLoadMore = (): void => {
    setPage(page + 1);
  };
  return (
    <>
      <SearchBar onSetSearchQuery={handleSearch} />
      <ImageGallery images={images} onModalOpen={onModalOpen} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {images.length > 0 && <LoadMoreBtn onClick={onLoadMore} />}
      <Modal isOpen={modalIsOpen} onRequestClose={onModalClose}>
        {modalImage && <ImageModal images={modalImage} />}
      </Modal>
    </>
  );
};

export default App;
