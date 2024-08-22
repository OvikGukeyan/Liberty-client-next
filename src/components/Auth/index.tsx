"use client"

import React, { useState } from 'react'
import styles from './Auth.module.scss'
import { LoginForm, RegistrationForm } from '..'

export const Auth = () => {
  const authMethods = [{ name: 'Registration' }, { name: 'Login' }]
  const [authMethod, setAuthMethod] = useState({ name: 'Registration' })

  return (
    <div className={styles.auth}>
            <h1>Authorization</h1>
            <div className={styles.switch}>
              {authMethods.map(item => <button onClick={() => setAuthMethod(item)} key={item.name} className={`${styles.auth_switch} ${authMethod.name === item.name && styles.active}`}>{item.name}</button>)}
            </div>
            {authMethod.name === 'Registration' ?
              <RegistrationForm />
              :
              <LoginForm />
            }

          </div>
  )
}
