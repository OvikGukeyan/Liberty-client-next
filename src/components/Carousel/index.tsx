"use client";

import React, {
  useEffect,
  useState,
  Children,
  useRef,
  FC,
  PropsWithChildren,
} from "react";
import styles from "./Carousel.module.scss";
import { debounce } from "lodash";

type CarouselTypes = {
  controllers?: boolean;
  auto?: boolean
};

export const Carousel: FC<PropsWithChildren<CarouselTypes>> = ({ children, controllers, auto }) => {
  const [offset, setOffset] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [sliderWidth, setSliderWidth] = useState(0);

  const handleLeftArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + sliderWidth;
      const maxOffset = -(sliderWidth * (Children.count(children) - 1));
      const result = newOffset <= 0 ? newOffset : maxOffset;
      // return Math.min(newOffset, 0)
      return result;
    });
  };

  const handleRightArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - sliderWidth;
      const maxOffset = -(sliderWidth * (Children.count(children) - 1));
      const result = newOffset >= maxOffset ? newOffset : 0;

      // Math.max(newOffset, maxOffset)
      return result;
    });
  };

  const handleResize = debounce(() => {
    if (sliderRef.current) {
      const width = sliderRef.current.offsetWidth;
      setSliderWidth(width);
      setOffset(0);
    }
  }, 100); // debounce через каждые 100 мс

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  

  useEffect(() => {
    if (auto) {
      let animationFrameId: number;
      let start: number | null = null;

      const step = (timestamp: number) => {
        if (!start) start = timestamp;
        const elapsed = timestamp - start;

        if (elapsed > 3000) { // Автопрокрутка каждые 3 секунды
          handleRightArrowClick();
          start = timestamp; // Сбрасываем время начала
        }

        animationFrameId = requestAnimationFrame(step);
      };

      animationFrameId = requestAnimationFrame(step);

      return () => {
        cancelAnimationFrame(animationFrameId); // Очищаем requestAnimationFrame при размонтировании
      };
    }
  }, [sliderWidth, children, auto]);



  return (
    <div className={styles.main_container}>
      <div ref={sliderRef} className={styles.window}>
        <div
          className={styles.all_pages_container}
          style={{
            transform: `translateX(${offset}px)`,
          }}
        >
          {Children.map(children, (child, index) => (
            <div
              key={index}
              style={{
                minWidth: "100%",
                maxWidth: "100%",
                height: "100%",
              }}
            >
              {child}
            </div>
          ))}
        </div>

        {controllers && <div className={styles.slider}>
          <div onClick={handleLeftArrowClick} className={styles.button_left}>
            <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 0L1 12l12 12" fill="none" fillRule="evenodd" />
            </svg>
          </div>
          <div onClick={handleRightArrowClick} className={styles.button_right}>
            <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 0l12 12L1 24" fill="none" fillRule="evenodd" />
            </svg>
          </div>
        </div>}

      </div>
    </div>
  );
};

