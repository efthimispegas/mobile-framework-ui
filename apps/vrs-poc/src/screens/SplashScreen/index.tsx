import React, { FC, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';

import { Box, Container } from '@vrs-mobile-framework-ui/foundation';

import { Colors } from '@vfgroup-oneplatform/foundation/Components/Themes';
import {
  withSplash,
  SplashModes,
  WrappedComponentProps,
} from '@vfgroup-oneplatform/foundation/Splash';

const config = {
  defaultTime: 4000,
  mode: SplashModes.TRANSITION,
  color: Colors.vfRed,
};

const SplashScreen: FC<WrappedComponentProps> = ({ startSplashEndingAnimation, setSplashMode }) => {
  useEffect(() => {
    const logoX = -140;
    const logoY = -288;

    setSplashMode(SplashModes.TRANSITION);

    startSplashEndingAnimation({
      startAfter: 1000,
      _endX: logoX,
      _endY: logoY,
    }).then(response => {
      if (response.done) {
        response.dismissSplash();
      }
    });
  }, []);

  return (
    <Container maxWidth={'xl'} fixed>
      <Box direction='row' align={'center'} classes={[{ flex: 1 }]}>
        <ActivityIndicator size={'small'} />
      </Box>
    </Container>
  );
};

export default withSplash(SplashScreen, config);
