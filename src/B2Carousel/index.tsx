import React from 'react';

import { Carousel, TabContainer, Header, HeaderText } from './styles';

export interface IB2Carousel {
  options: Array<string>;
  selected: number;
  onSelect: (selected: number) => void;
  children: React.ReactNode;
  className?: string;
}

export const B2Carousel: React.FC<IB2Carousel> = ({
  options,
  selected,
  onSelect,
  className,
}) => {
  return (
    <Carousel className={className}>
      <TabContainer>
        <Header>
          {options.map((option, index) => (
            <HeaderText
              selected={selected === index}
              onClick={() => onSelect(index)}
            >
              {option}
            </HeaderText>
          ))}
        </Header>
      </TabContainer>
    </Carousel>
  );
};
