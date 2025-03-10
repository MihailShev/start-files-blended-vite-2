import { useEffect, useState } from 'react';
import FormSearch from '../components/FormSearch/FormSearch';
import PhotosGallery from '../components/PhotosGallery/PhotosGallery';
import Loader from '../components/Loader/Loader';
import { getPhotos } from '../apiService/photos';
import Button from '../components/Button/Button';

const Photos = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [err, setErr] = useState('');
  const [loader, setLoader] = useState(false);
  const [imagesEmpty, setImagesEmpty] = useState(false);

  const [images, setImages] = useState([]);

  const visibleLoader = () => setLoader(true);
  const hideLoader = () => setLoader(false);

  const getQuery = newValue => {
    setQuery(newValue);
    setPage(1);
    setImages([]);
  };

  useEffect(() => {
    if (!query) return;

    async function fetchPhoto() {
      try {
        setImagesEmpty(false);
        visibleLoader();
        const data = await getPhotos(query, page);
        console.log(data.photos);
        const newsImages = data.photos;

        if (newsImages.length === 0) {
          setImagesEmpty(true);
          return;
        }

        setImages(prevImages => [...prevImages, ...newsImages]);
      } catch (error) {
        setErr(error.message);
      } finally {
        hideLoader();
      }
    }
    fetchPhoto();
  }, [query, page]);

  const handleBtnMore = () => setPage(page + 1);

  return (
    <>
      <FormSearch addSerchValue={getQuery} />

      {loader ? <Loader /> : <PhotosGallery images={images} />}

      {err && <p>Woops {err}</p>}

      {!query && <p>Please enter value</p>}

      {imagesEmpty && <p>Nothing found, please enter another value</p>}

      {images.length > 0 && <Button onClick={handleBtnMore}>Load more</Button>}
    </>
  );
};

export default Photos;
