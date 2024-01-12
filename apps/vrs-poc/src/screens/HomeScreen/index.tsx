import React from 'react';
import { ScrollView } from 'react-native';

import { Button, Header, Section, TodoList, Typography } from '@vrs-mobile-framework-ui/foundation';

import useHomeController from '../../hooks/controllers/Home/useHomeController';
import useHomeViewModel from '../../hooks/view-models/Home/useHomeViewModel';

const HomeScreen = () => {
  const { todos, isLoading, error } = useHomeViewModel();
  const { onActionPress, onCreatePress, onKitchenSinkPress } = useHomeController();

  return (
    <ScrollView>
      <Header p={'xs'}>
        <Typography color={'primary'} variant={'h2'}>
          Sample App,
        </Typography>
        {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
        <Typography color={'primary'} variant={'h1'} noEllipsis>
          Start organizing your day ✍️
        </Typography>
      </Header>
      <Section>
        <TodoList data={todos} error={error} isLoading={isLoading} onActionPress={onActionPress} />
        <Button
          fullWidth
          title={'Add todo'}
          onButtonPress={onCreatePress}
          disabled={isLoading || Boolean(error)}
        />
        <Button
          fullWidth
          color={'vfRed'}
          title={'Kitchen Sink'}
          onButtonPress={onKitchenSinkPress}
          disabled={isLoading || Boolean(error)}
        />
      </Section>
    </ScrollView>
  );
};

export default HomeScreen;
