import styles from "./navbar.module.css";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className={styles.containerNav}>
      <img className={styles.imgLogo} src="" alt="logo" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="180"
        height="180"
        viewBox="0 0 181 181"
        fill="none"
      >
        <circle cx="90.5" cy="90.5" r="90.5" fill="#BCD2F2" />
        <path
          d="M90.5 0C40.544 0 0 40.544 0 90.5C0 140.456 40.544 181 90.5 181C140.456 181 181 140.456 181 90.5C181 40.544 140.456 0 90.5 0ZM90.5 27.15C105.523 27.15 117.65 39.277 117.65 54.3C117.65 69.323 105.523 81.45 90.5 81.45C75.477 81.45 63.35 69.323 63.35 54.3C63.35 39.277 75.477 27.15 90.5 27.15ZM90.5 155.66C67.875 155.66 47.8745 144.076 36.2 126.519C36.4715 108.509 72.4 98.645 90.5 98.645C108.509 98.645 144.529 108.509 144.8 126.519C133.126 144.076 113.125 155.66 90.5 155.66Z"
          fill="#FFFCF8"
        />
      </svg>
      <h3 className={styles.nombreUser}>Usuario</h3>
      <ul className={styles.containerLinks}>
        <Link href="/mascotas" className={styles.link}>
          <span className={styles.point}></span>
          <p className={styles.linkText}>Mis mascotas</p>
        </Link>
        <Link href="/calendario" className={styles.link}>
          <span className={styles.point}></span>
          <p className={styles.linkText}>Calendario</p>
        </Link>
        <Link href="/contactos" className={styles.link}>
          <span className={styles.point}></span>
          <p className={styles.linkText}>Contactos</p>
        </Link>
      </ul>
    </div>
  );
};
