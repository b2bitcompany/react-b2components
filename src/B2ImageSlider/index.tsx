import React, { useState } from 'react';

import {
  SliderContainer,
  SliderImage,
  ArrowLeft,
  ArrowRight,
  SliderImageContainer,
  SliderImageSubtitle,
} from './styles';

export interface IB2ImageSlider {
  images: Array<{
    alt: string;
    url: string;
  }>;
  onChangeImage?: (index: number) => void;
  disablePrevious?: boolean;
  disableNext?: boolean;
  className?: string;
}

export const B2ImageSlider: React.FC<IB2ImageSlider> = ({
  images,
  onChangeImage,
  disablePrevious = false,
  disableNext = false,
  className,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (disableNext) {
      return;
    }
    const newIndex = (currentSlide + 1) % images.length;
    setCurrentSlide(newIndex);
    onChangeImage?.(newIndex);
  };

  const prevSlide = () => {
    if (disablePrevious) {
      return;
    }
    const newIndex = (currentSlide - 1) % images.length;
    setCurrentSlide(newIndex);
    onChangeImage?.(newIndex);
  };

  return (
    <SliderContainer className={className}>
      <ArrowLeft onClick={prevSlide} disabled={disablePrevious} />
      <SliderImageContainer>
        <SliderImage
          src={images.at(currentSlide)?.url}
          alt={images.at(currentSlide)?.alt}
        />
        <SliderImageSubtitle>
          {images.at(currentSlide)?.alt}
        </SliderImageSubtitle>
      </SliderImageContainer>
      <ArrowRight onClick={nextSlide} disabled={disableNext} />
    </SliderContainer>
  );
};
