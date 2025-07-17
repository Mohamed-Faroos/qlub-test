/* React core and React Native components */
import React from 'react';

/* Third party libraries */
import { SvgProps } from 'react-native-svg';

type SvgComponent = React.FC<SvgProps>;

const CreateIcon = (Component: SvgComponent): SvgComponent => {
  return ({ width = 24, height = 24, fill = 'transparent', ...rest }: SvgProps) => (
    <Component width={width} height={height} fill={fill} {...rest} />
  );
};

export default CreateIcon;