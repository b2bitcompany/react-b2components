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
  maxSize: number;
  onChooseImage: (image: File) => Promise<boolean>;
  onInvalidExtension: () => void;
  onInvalidSize: () => void;
  className?: string;
}

export const B2ImagePicker: React.FC<IB2ImagePicker> = ({
  text,
  extensions,
  maxSize,
  onChooseImage,
  onInvalidExtension,
  onInvalidSize,
  className,
}) => {
  const inputImageFile = useRef<HTMLInputElement>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState<File>();

  const isExtensionValid = (chosenImage: File) => {
    return extensions.includes(chosenImage.type);
  };

  const onImageChange: React.ChangeEventHandler<HTMLInputElement> = useCallback(
    async (event) => {
      const file = event.target.files?.[0];
      if (!file) {
        return;
      }

      if (!isExtensionValid(file)) {
        onInvalidExtension();
        return;
      }

      if (file.size > maxSize) {
        onInvalidSize();
        return;
      }

      setIsLoading(true);
      const result = await onChooseImage(file);
      setIsLoading(false);

      if (result) {
        setImage(file);
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
        <ImageTypes>
          {extensions.join(', ').replaceAll('image/', '')}
        </ImageTypes>
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
        ref={inputImageFile}
        type="file"
        accept={extensions.join(',')}
        onChange={onImageChange}
      />
    </Container>
  );
};
