import React, { useState, useRef } from 'react';

import { MdCameraAlt } from 'react-icons/md';

import { B2Spinner } from '../B2Spinner';
import {
  Container,
  Image,
  ImageText,
  ImageTypes,
  CameraContainer,
} from './styles';

export interface IB2ImagePicker {
  text: string;
  extensions: Array<string>;
  isLoading: boolean;
  onImageUploaded: (image: File) => void;
  className?: string;
}

export const B2ImagePicker: React.FC<IB2ImagePicker> = ({
  text,
  extensions,
  isLoading,
  onImageUploaded,
  className,
}) => {
  const inputImageFile = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<File>();

  const imageIsTooBig = (chosenImage: File) => {
    if (chosenImage.size > 5000000) {
      alert(
        'A imagem selecionada é grande demais. Por favor, selecione imagens com tamanho até 5MB.'
      );
      return true;
    }
    return false;
  };

  const imageHasUnsupportedExtension = (chosenImage: File) => {
    const extension = chosenImage.type.split('/')[1];
    if (!extensions.includes(extension)) {
      alert(
        `Extensão do arquivo não é suportada. Por favor, envie imagens ` +
          extensions.join(', ')
      );
      return true;
    }
    return false;
  };

  const isImageValid = (chosenImage: File) => {
    if (imageHasUnsupportedExtension(chosenImage)) return false;
    if (imageIsTooBig(chosenImage)) return false;
    return true;
  };

  const onFileSelectorPress = () => {
    if (inputImageFile.current) {
      inputImageFile.current.click();
    }
  };

  const onImageChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    if (event.target.files && event.target.files[0]) {
      if (isImageValid(event.target.files[0])) {
        setImage(event.target.files[0]);
        onImageUploaded(event.target.files[0]);
      }
    }
  };

  const renderImage = () => {
    if (isLoading) {
      return <B2Spinner />;
    }

    if (image) {
      return <Image src={URL.createObjectURL(image)} alt={text} />;
    }

    return (
      <CameraContainer>
        <MdCameraAlt size={36} style={{ color: '#3E699F' }} />
        <ImageText>{text}</ImageText>
        <ImageTypes>{extensions.join(', ')}</ImageTypes>
      </CameraContainer>
    );
  };

  return (
    <Container className={className} onClick={onFileSelectorPress}>
      {renderImage()}

      <input
        type="file"
        id="file"
        ref={inputImageFile}
        style={{ display: 'none' }}
        onChange={onImageChange}
      />
    </Container>
  );
};
