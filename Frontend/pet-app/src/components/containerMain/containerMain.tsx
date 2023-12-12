import styles from "./containerMain.module.css";
import { ReactNode } from "react";

interface ContainerMainProps {
  children: ReactNode;
  isActive?: boolean;
}

export const ContainerMain = ({
  children,
  isActive = false,
}: ContainerMainProps) => {
  return (
    <div
      className={
        isActive ? styles.containerMainInCalendar : styles.containerMain
      }
    >
      {children}
    </div>
  );
};
