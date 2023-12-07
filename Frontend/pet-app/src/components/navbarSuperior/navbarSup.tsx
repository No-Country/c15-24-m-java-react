import styles from "./navbarSup.module.css";

export const NavbarSup = () => {
  return (
    <div className={styles.containerNavSup}>
      <div className={styles.containerBtns}>
        <button>NOTI</button>
        <button>USER</button>
      </div>
    </div>
  );
};
