import gallery1 from "../assets/gallery1.jpeg";
import gallery2 from "../assets/gallery2.jpg";
import gallery3 from "../assets/gallery3.jpg";
import gallery4 from "../assets/gallery4.jpg";
import gallery5 from "../assets/gallery5.jpeg";
import gallery6 from "../assets/gallery6.jpeg";
const Gallery = () => {
  const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

  return (
    <div className="columns-1 md:columns-2 xl:columns-3 gap-7">
      {images.map((image, index) => (
        <div key={index} className="break-inside-avoid mb-8">
          <img className="h-auto max-w-full rounded-lg" src={image} alt={`Gallery image ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
