import React from 'react';
import { Strings } from '../../language/strings';
import { Wrapper, Text } from './styles';

const Profile: React.FC = () => {
  return (
    <Wrapper>
      <Text>{Strings.Profile.settings}</Text>
    </Wrapper>
  );
};

export default Profile;
