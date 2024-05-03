import { IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { AiFillDislike, AiFillLike, AiOutlineDislike, AiOutlineLike } from "react-icons/ai";

import style from '../../../../tailwind.config'
import resolveConfig from 'tailwindcss/resolveConfig'
import { ExtendedColors } from "../../../../tailwind";


const { theme } = resolveConfig(style)
const colors : ExtendedColors = theme.colors
const fontSize = "1.5rem";

const ratingValues = {
    like: 1,
    dislike: -1,
    none: 0,
};

export default function RatingButtons({ messageId }: { messageId: string | number }) {
  const [isLiked, setIsLiked] = useState<Boolean>(false);
  const [isDisliked, setIsDisliked] = useState<Boolean>(false);

  const setRating = async (rating: number) =>
    fetch("/api/like",
      {
        method: "POST",
        body: JSON.stringify({ messageId, rating }),
      },
    );

  const handleLike = () => {
    setIsLiked(true);
    setIsDisliked(false);
    setRating(ratingValues.like);
  };

  const handleDislike = () => {
    setIsLiked(false);
    setIsDisliked(true);
    setRating(ratingValues.dislike);
  };

  return(
    <div style={{ alignSelf: "end" }}>
      <IconButton
        aria-label="like-button"
        background="transparent"
        _hover={{ background: "transparent" }}
        icon={
          isLiked
          ?
            (<AiFillLike color={colors?.tertiary} size={fontSize}/>)
          :
            (<AiOutlineLike color={colors?.tertiary} size={fontSize}/>)
        }
        onClick={handleLike}
      />
      <IconButton
        aria-label="dislike-button"
        background="transparent"
        _hover={{ background: "transparent" }}
        icon={
          isDisliked
          ?
            (<AiFillDislike color={colors?.tertiary} size={fontSize}/>)
          :
            (<AiOutlineDislike color={colors?.tertiary} size={fontSize}/>)
        }
        onClick={handleDislike}
      />
    </div>
  );
}