import React from 'react';
import { Wrapper, Text } from './styles';
import { DateTime } from 'luxon';
import { Strings } from '../../language/strings';

const Home: React.FC = () => {
  return (
    <Wrapper>
      <Text>{Strings.Home.welcome}</Text>
      <Text>{DateTime.local().toString()}</Text>
      <Text>{DateTime.local().toLocaleString(DateTime.DATETIME_FULL)}</Text>
    </Wrapper>
  );
};

export default Home;
