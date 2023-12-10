import React from 'react';

type Props = {
  currentWindowWidth: number;
  breakpoint: number;
  children: JSX.Element[];
};

const ScreenWidthComponentSelector: React.FC<Props> = (props) => {
  return props.currentWindowWidth > props.breakpoint
    ? props.children[0]
    : props.children[1];
};

export default ScreenWidthComponentSelector;
