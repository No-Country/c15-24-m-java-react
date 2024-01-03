import Image from "next/image";
import banner from "../../../public/images/banner.png";
import pets from "../../../public/images/pet.png";
import React from "react";
import styles from "./styles.module.css";

export const Wallapaper = () => {
  return (
    <section className="h-full flex flex-col items-center justify-center rounded-2xl ">
      <div className="relative flex items-center justify-center ">
        <Image src={banner} alt="banner" />
      </div>
      <div className="relative w-96 h-96 p-3">
        <Image src={pets} alt="wallpaper" className={styles.pets_img} fill />
      </div>
    </section>
  );
};
