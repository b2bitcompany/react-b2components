import styled from 'styled-components';

export const Container = styled.div`
  width: 165px;
  height: 133px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1.5px dashed ${(props) => props.theme.colors.main};
  border-radius: 8px;
  margin-top: 10px;
`;

export const CameraContainer = styled.div`
  width: 165px;
  height: 133px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const ImageText = styled.span`
  color: ${(props) => props.theme.colors.main};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  font-size: 12px;
  margin-bottom: 5px;
`;

export const ImageTypes = styled.span`
  color: ${(props) => props.theme.colors.main};
  font-weight: ${(props) => props.theme.fontWeight.medium};
  font-size: 10px;
`;
