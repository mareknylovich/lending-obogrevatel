import React from 'react';
import { useRouter } from 'next/router';

import { HeaderView } from './View';

export const Header = () => {
  const router = useRouter();

  const isFull = router.pathname === '/';

  return <HeaderView isFull={isFull} />;
};
