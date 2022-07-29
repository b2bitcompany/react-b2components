import React, { useState } from 'react';

import { SliderContainer, SliderImage, ArrowLeft, ArrowRight } from './styles';

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
    const newIndex = currentSlide === images.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newIndex);
    onChangeImage?.(newIndex);
  };

  const prevSlide = () => {
    if (disablePrevious) {
      return;
    }
    const newIndex = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
    setCurrentSlide(newIndex);
    onChangeImage?.(newIndex);
  };

  return (
    <SliderContainer className={className}>
      <ArrowLeft onClick={prevSlide} disabled={disablePrevious} />
      <SliderImage
        src={images[currentSlide].url}
        alt={images[currentSlide].alt}
      />
      <ArrowRight onClick={nextSlide} disabled={disableNext} />
    </SliderContainer>
  );
};
