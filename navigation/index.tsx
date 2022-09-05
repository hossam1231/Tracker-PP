import React from 'react';
import { useAuthentication } from '../utils/hooks/useAuthentication';
import UserStack from './userStack';
import AuthStack from './authStack';
import HydratePartner from '../scripts/HydratePartner';

export default function RootNavigation() {
  const { user } = useAuthentication();

  return user ?
    <HydratePartner user={user}>
      <UserStack user={user} />
    </HydratePartner>
    : <AuthStack />;
}