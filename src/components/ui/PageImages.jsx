import circles from "../../assets/images/circles.png";
import sphere from "../../assets/images/sphere.png";
import star_img_one from "../../assets/images/star-img-one.png";
import star_img_two from "../../assets/images/star-img-two.png";
import star_img_three from "../../assets/images/star-img-three.png";

const PageImages = () => {
  return (
    <>
      <img src={circles} id="circles-image" style={{position: "absolute", zIndex: "1"}} alt="CIRCLES IMAGE" />
      <img src={sphere} id="sphere-image" style={{position: "absolute", zIndex: "1"}} alt="CIRCLES IMAGE" />
      <img src={star_img_one} id="star-image-one" style={{position: "absolute", zIndex: "1"}} alt="CIRCLES IMAGE" />
      <img src={star_img_two} id="star-image-two" style={{position: "absolute", zIndex: "1"}} alt="CIRCLES IMAGE" />
      <img src={star_img_three} id="star-image-three" style={{position: "absolute", zIndex: "1"}} alt="CIRCLES IMAGE" />
    </>
  );
};

export default PageImages;