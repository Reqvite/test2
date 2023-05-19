import { useStateContext } from "@/context/StateContext";
import { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import "../../app/styles/reviews.css";

const Reviews = ({ id, reviews, productsReviews, productsStars }: any) => {
  const [numberOfReviews2, setnumberOfReviews2] = useState(productsReviews);
  let number = productsStars;

  const { setReviews } = useStateContext();

  const updatedNumber = reviews?.includes(id)
    ? numberOfReviews2 + 1
    : numberOfReviews2;

  const [numberOfReviews, setNumberOfReviews] = useState(updatedNumber);

  const handleReview = () => {
    if (reviews.includes(id)) {
      return;
    }

    setReviews([...reviews, id]);
    setNumberOfReviews((prev:any) => prev + 1);
  };

  const stars = Array.from({ length: 5 }, (_, index) => {
    if (index < number) {
      return (
        <AiFillStar key={index} onClick={handleReview} className="review-box" />
      );
    } else {
      return (
        <AiOutlineStar
          key={index}
          onClick={handleReview}
          className="review-box"
        />
      );
    }
  });

  return (
    <div className="reviews">
      <div>{stars}</div>
      <p>({numberOfReviews})</p>
    </div>
  );
};

export default Reviews;
