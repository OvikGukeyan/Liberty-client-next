import React from "react";
import styles from "./SocialMedia.module.scss";
import Image from "next/image";

export const SocialMedia = () => {
  return (
    <div className={styles.social_media}>
      <Image
        src={"/assets/instagram.png"}
        alt="instagram"
        width={24}
        height={24}
      />
      <Image src={"/assets/youtube.png"} alt="youtube" width={24} height={24} />
      <Image src={"/assets/tiktok.png"} alt="tiktok" width={24} height={24} />
    </div>
  );
};
