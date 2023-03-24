import React, { useReducer } from 'react';
import { ImageBox } from './../../components/image-box/image-box';
import { ReactComponent as RightArrow } from './../../asset/svg/right-arrow.svg';
import { ReactComponent as LeftArrow } from './../../asset/svg/left-arrow.svg';
import { string } from './../../asset/string/string_fr';
import './image-caroussel.scss';

const { error_image_reducer_parameter } = string; 
const ACTION = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT'
};

const imagesReducer = (state, action, images) => {
  const { index, arrayLength } = state;
  const arrayEnd = arrayLength -1;

  switch (action) {
    case ACTION.INCREMENT:

      return index +1 > arrayEnd
        ? {...state, index:0 }
        : {...state, index: index +1 };
    case ACTION.DECREMENT:

      return index -1 === -1
        ? {...state, index: arrayEnd }
        : {...state, index: index -1 }
    default: 
      throw new Error(error_image_reducer_parameter(action))
  }
};

export const ImageCarrousel = ({ images }) => {
  const [state, dispatch] = useReducer(imagesReducer, { 
    pictureArray: images, 
    index: 0,
    arrayLength: images.length 
  });
  const { pictureArray, index } = state;

  const increment = () => dispatch(ACTION.INCREMENT, images);
  const decrement = () => dispatch(ACTION.DECREMENT, images);

  return (
    <>
      <ImageBox
        id='location_background_image'
        imgUrl={pictureArray[index]}
      > {
          state.arrayLength > 1 && 
          <>
            <LeftArrow 
              id='left_arrow' 
              onClick={decrement}
            />
            <RightArrow 
              id='right_arrow'
              onClick={increment}
            />  
          </> 
        }
      </ImageBox>
    </>
  )
};
