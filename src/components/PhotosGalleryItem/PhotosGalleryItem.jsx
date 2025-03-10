import styles from './PhotosGalleryItem.module.css';

const PhotosGalleryItem = ({ image: { avg_color, src, alt } }) => {
  return (
    <div
      className={styles.thumb}
      style={{ backgroundColor: avg_color, borderColor: avg_color }}
    >
      <img src={src.large} alt={alt} />
    </div>
  );
};
export default PhotosGalleryItem;
