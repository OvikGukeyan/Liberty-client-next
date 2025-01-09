"use client";
import React, { FC, useRef, useState } from "react";
import styles from "./CoworkingZone.module.scss";
import { useRouter } from "next/navigation";
import { Button } from "..";
import { useCurrentRoomStore } from "@/app/(main)/booking-options/store";
import { Room } from "@/app/(main)/checkout/page";

interface CoworkingZoneTypes {
  item: Room;
}

export const CoworkingZone: FC<CoworkingZoneTypes> = ({ item }) => {
  const router = useRouter();
  const setCurrentRoom = useCurrentRoomStore((store) => store.setCurrentRoom);
  const handleBookingClick = () => {
    setCurrentRoom(item);
    router.push("/booking-options");
  };

  return (
    <div className={styles.zone}>
      <div className={styles.about}>
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <div className={styles.button_boix}>
          <Button className={"pink_button"} onClick={handleBookingClick}>
            Buchen
          </Button>
        </div>
      </div>
      <div className={styles[item.img]}></div>
    </div>
  );
};
