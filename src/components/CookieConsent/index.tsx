"use client"

import { useState, useEffect } from 'react';
import styles from './CookieConsent.module.scss';
import { Button } from '../Button';
import Cookies from 'js-cookie';
import Image from "next/image";


export const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const userConsent = Cookies.get('userConsent');
        if (!userConsent) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        Cookies.set('userConsent', 'true', { expires: 365 });
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className={`${styles.overlay} ${isVisible ? styles.overlayVisible : ""}`}>
            <div className={styles.board}>
                <Image
                    src={"/assets/cookie.png"}
                    alt="submited"
                    width={200}
                    height={200}
                />
                <h1>Verwendung von Cookies</h1>
                <p>
                    Diese Website verwendet Cookies, um Ihre Benutzererfahrung zu verbessern. Indem Sie auf „Akzeptieren“ klicken, stimmen Sie der Verwendung von Cookies gemäß unserer Datenschutzerklärung zu.
                </p>
                <div className={styles.buttons}>
                    <Button onClick={handleAccept} className='pink_button'>Akzeptieren</Button>
                    <Button className='pink_button'>Mehr erfahren</Button>
                </div>
            </div>
        </div>
    )
};

