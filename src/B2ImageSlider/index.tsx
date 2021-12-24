import React, { useState, useEffect } from 'react';

import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdClose,
} from 'react-icons/md';

import { SliderContainer, SliderImage, ImageContainer } from './styles';

export interface ISliderProps {
  imgIndex: string;
  onClose: () => void;
  imgData: {
    id: string;
    type: string;
    url: string;
  }[];
}

export const ImageSlider: React.FC<ISliderProps> = ({
  imgData,
  imgIndex,
  onClose,
}) => {
  const imgIndexNum = Number(imgIndex);
  const [currentSlide, setCurrentSlide] = useState(0);
  const length = imgData.length;

  useEffect(() => {
    setCurrentSlide(imgIndexNum);
  }, [imgIndexNum]);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
  };

  return (
    <SliderContainer>
      <MdKeyboardArrowLeft
        style={{
          position: 'absolute',
          top: '50%',
          left: '0',
          fontSize: '32px',
          cursor: 'pointer',
        }}
        onClick={prevSlide}
      />
      {imgData.map((img, index) => {
        return (
          <ImageContainer
            className={index === currentSlide ? 'slide active' : 'slide'}
            key={img.id}
          >
            {index === currentSlide && (
              <SliderImage src={img.url} alt={img.type} />
            )}
          </ImageContainer>
        );
      })}
      <MdClose
        onClick={onClose}
        style={{
          position: 'absolute',
          top: '0',
          right: '0',
          fontSize: '32px',
          cursor: 'pointer',
        }}
      />
      <MdKeyboardArrowRight
        style={{
          position: 'absolute',
          top: '50%',
          right: '0',
          fontSize: '32px',
          cursor: 'pointer',
        }}
        onClick={nextSlide}
      />
    </SliderContainer>
  );
};
