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

  const [images, setImages] = useState(() => {
    return [
      {
        id: 3573351,
        avg_color: '#374824',
        src: {
          original:
            'https://images.pexels.com/photos/3573351/pexels-photo-3573351.png',
          large:
            'https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&h=650&w=940',
          medium:
            'https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&h=350',
          small:
            'https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&h=130',
        },
        alt: 'Brown Rocks During Golden Hour',
      },
      {
        id: 35733515,
        avg_color: '#374824',
        src: {
          original:
            'https://images.pexels.com/photos/3573351/pexels-photo-3573351.png',
          large:
            'https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&h=650&w=940',
          medium:
            'https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&h=350',
          small:
            'https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&h=130',
        },
        alt: 'Brown Rocks During Golden Hour',
      },
    ];
  });

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
        visibleLoader();
        const data = await getPhotos(query, page);
        console.log(data.photos);
        setImages(prevImages => [...prevImages, ...data.photos]);
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

      {err ? `Woops ${err}` : ''}

      {images.length === 0 ? (
        ''
      ) : (
        <Button onClick={handleBtnMore}>Load more</Button>
      )}
    </>
  );
};

export default Photos;
