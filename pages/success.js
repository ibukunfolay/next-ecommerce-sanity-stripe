import React, { useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';
import { runSnow } from '../lib/utils';

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runSnow();
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your order!</h2>
        <p className="email-msg">Reciept has been sent to your inbox</p>
        <p className="description">
          If you have any questions, please email
          <a className="email" href="mailto:support@boomx.com">
            support@boomx.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Go back to store
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
