import React, { useState } from 'react';

import { redirect } from '../../utils/navigation';
import { PaymentFormView } from './View';

export const PaymentForm = ({ ...props }) => {
  const [purchaseType, setPurchaseType] = useState(null);

  const handleChangePurchaseType = (e) => {
    setPurchaseType(e.target.value);
  };

  const price = purchaseType === 'kaufen' ? 42 : purchaseType === 'mieten' ? 1 : null;
  const priceText =
    purchaseType === 'kaufen'
      ? '42 €'
      : purchaseType === 'mieten'
      ? '1 € (Die Probezeit gilt für einen Monat)'
      : null;

  const handleSubmit = (e) => {
    e.preventDefault();

    const ref = localStorage.getItem('ref');
    const service = 8;

    window.location = `https://3ds.challange.shop?service=${service}&ref=${ref}`;
  };

  return (
    <PaymentFormView
      {...props}
      handleSubmit={handleSubmit}
      handleChangePurchaseType={handleChangePurchaseType}
      priceText={priceText}
    />
  );
};
