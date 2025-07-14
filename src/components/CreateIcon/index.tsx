import React from 'react';
import { SvgProps } from 'react-native-svg';

type SvgComponent = React.FC<SvgProps>;

const CreateIcon = (Component: SvgComponent): SvgComponent => {
  return ({ width = 24, height = 24, fill = '#000', ...rest }) => (
    <Component width={width} height={height} fill={fill} {...rest} />
  );
};

export default CreateIcon;