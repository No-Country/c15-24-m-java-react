import styles from "./navbar.module.css";
import point from "./assets/point.png";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className={styles.containerNav}>
      <img className={styles.imgLogo} src="" alt="logo" />
      <img className={styles.imgUser} src="" alt="foto user" />
      <h3 className={styles.nombreUser}>Usuario</h3>
      <ul className={styles.containerLinks}>
        <Link href="/mascotas" className={styles.link}>
          <img className={styles.point} src={point.src} alt="punto negro" />
          <p className={styles.linkText}>Mis mascotas</p>
        </Link>
        <Link href="/calendario" className={styles.link}>
          <img className={styles.point} src={point.src} alt="punto negro" />
          <p className={styles.linkText}>Calendario</p>
        </Link>
        <Link href="/contactos" className={styles.link}>
          <img className={styles.point} src={point.src} alt="punto negro" />
          <p className={styles.linkText}>Contactos</p>
        </Link>
      </ul>
    </div>
  );
};
