import React from 'react';

import { Container, Section, Typography } from '@vrs-mobile-framework-ui/foundation';

import { VFButton } from '@vfgroup-oneplatform/foundation/Components';

const KitchenSinkScreen = () => {
  return (
    <Container touchable maxWidth={'xl'}>
      <Section clippedGutters>
        <Typography variant={'h2'} color={'primary'} noEllipsis>
          VF Foundation Kitchen Sink
        </Typography>
      </Section>
      <Section clippedGutters>
        <VFButton title={'Login'} onPress={() => console.log('Vodafone button!')} />
      </Section>
    </Container>
  );
};

export default KitchenSinkScreen;
