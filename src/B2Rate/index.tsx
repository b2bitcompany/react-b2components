import React from 'react';

import { MdStar, MdStarHalf, MdStarBorder } from 'react-icons/md';

import { Container } from './styles';

export interface IB2Rate {
  value: number;
  setValue?: (value: number) => void;
  starSize?: number;
  className?: string;
}

export const B2Rate: React.FC<IB2Rate> = ({
  value,
  setValue,
  starSize = 20,
  className,
}) => {
  return (
    <Container className={className}>
      {Array(5)
        .fill(0)
        .map((_, index) => {
          if (value >= index + 0.5 && value < index + 1) {
            return <MdStarHalf key={index} size={starSize} color="#F2C94C" />;
          } else if (value >= index + 1) {
            return (
              <MdStar
                key={index}
                size={starSize}
                color="#F2C94C"
                onClick={() => {
                  if (setValue) {
                    if (index === 0) {
                      if (value === 1) {
                        setValue(0);
                      } else {
                        setValue(1);
                      }
                    } else {
                      setValue(index + 1);
                    }
                  }
                }}
                style={setValue ? { cursor: 'pointer' } : undefined}
              />
            );
          } else {
            return (
              <MdStarBorder
                key={index}
                size={starSize}
                color="#F2C94C"
                onClick={() => setValue && setValue(index + 1)}
                style={setValue ? { cursor: 'pointer' } : undefined}
              />
            );
          }
        })}
    </Container>
  );
};
