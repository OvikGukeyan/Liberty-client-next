import React from 'react';
import styles from './checkout.module.scss'
import Header from '@/components/Header';
import RegistrationForm from '@/components/RegistrationForm';

const Checkout = () => {
  return (
    <div className={styles.checkout}>
        <Header/>
        <RegistrationForm/>
    </div>
  )
}

export default Checkout