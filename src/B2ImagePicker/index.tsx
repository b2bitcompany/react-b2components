import React, { useState, useRef, useCallback } from 'react';

import { MdCameraAlt } from 'react-icons/md';

import { B2Spinner } from '../B2Spinner';

import {
  Container,
  Image,
  ImageText,
  ImageTypes,
  CameraContainer,
  Input,
} from './styles';

export interface IB2ImagePicker {
  text: string;
  extensions: Array<string>;
  onChooseImage: (image: File) => Promise<boolean>;
  className?: string;
}

export const B2ImagePicker: React.FC<IB2ImagePicker> = ({
  text,
  extensions,
  onChooseImage,
  className,
}) => {
  const inputImageFile = useRef<HTMLInputElement>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState<File>();

  const onImageChange: React.ChangeEventHandler<HTMLInputElement> = useCallback(
    async (event) => {
      if (!event.target.files?.[0]) {
        return;
      }

      setIsLoading(true);
      const result = await onChooseImage(event.target.files[0]);
      setIsLoading(false);

      if (result) {
        setImage(event.target.files[0]);
      }
    },
    []
  );

  const renderImage = () => {
    if (isLoading) {
      return <B2Spinner />;
    }

    if (image) {
      return <Image src={URL.createObjectURL(image)} alt={text} />;
    }

    return (
      <CameraContainer>
        <MdCameraAlt size={36} />
        <ImageText>{text}</ImageText>
        <ImageTypes>{extensions.join(', ')}</ImageTypes>
      </CameraContainer>
    );
  };

  return (
    <Container
      className={className}
      onClick={() => inputImageFile.current?.click()}
    >
      {renderImage()}
      <Input
        type="file"
        id="file"
        ref={inputImageFile}
        onChange={onImageChange}
      />
    </Container>
  );
};
