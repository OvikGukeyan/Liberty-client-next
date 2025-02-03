import React from "react";
import styles from "./SocialMedia.module.scss";
import Image from "next/image";

export const SocialMedia = () => {
  return (
    <div className={styles.social_media}>
      <a href="https://www.instagram.com/libertyfinanz?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
        <Image
          src={"/assets/instagram.png"}
          alt="instagram"
          width={24}
          height={24}
        />
      </a>
      <a href="https://www.youtube.com/channel/UCWSgswa0QPxK7lhnL1HOa8Q">
        <Image
          src={"/assets/youtube.png"}
          alt="youtube"
          width={24}
          height={24}
        />
      </a>
      <a href="https://www.tiktok.com/@libertyfinanz">
        <Image src={"/assets/tiktok.png"} alt="tiktok" width={24} height={24} />
      </a>
    </div>
  );
};
