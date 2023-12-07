import styles from "./ContainerMain.module.css";
import { ReactNode } from "react";

export const ContainerMain = ({ children }: { children: ReactNode }) => {
  return <div className={styles.containerMain}>{children}</div>;
};