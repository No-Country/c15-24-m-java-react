import styles from "./navbarSup.module.css";

export const NavbarSup = () => {
  return (
    <div className={styles.containerNavSup}>
      <div className={styles.containerBtns}>
        <button>NEW</button>
        <button>USER</button>
      </div>
    </div>
  );
};
