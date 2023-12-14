import styles from "./navbarSup.module.css";

interface navbarSupInterface {
  isInCalendar?: boolean;
}

export const NavbarSup = ({ isInCalendar = false }: navbarSupInterface) => {
  return (
    <div
      className={
        isInCalendar ? styles.containerNavSupInCalendar : styles.containerNavSup
      }
    >
      <div className={styles.containerBtns}>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="38"
            height="38"
            viewBox="0 0 48 48"
            fill="none"
          >
            <g clipPath="url(#clip0_200_331)">
              <path
                d="M24 44C26.2 44 28 42.2 28 40H20C20 42.2 21.78 44 24 44ZM36 32V22C36 15.86 32.72 10.72 27 9.36V8C27 6.34 25.66 5 24 5C22.34 5 21 6.34 21 8V9.36C15.26 10.72 12 15.84 12 22V32L8 36V38H40V36L36 32Z"
                fill="#AE7565"
              />
            </g>
            <defs>
              <clipPath id="clip0_200_331">
                <rect width="48" height="48" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 40 40"
            fill="none"
          >
            <path
              d="M20 0C8.96 0 0 8.96 0 20C0 31.04 8.96 40 20 40C31.04 40 40 31.04 40 20C40 8.96 31.04 0 20 0ZM20 6C23.32 6 26 8.68 26 12C26 15.32 23.32 18 20 18C16.68 18 14 15.32 14 12C14 8.68 16.68 6 20 6ZM20 34.4C15 34.4 10.58 31.84 8 27.96C8.06 23.98 16 21.8 20 21.8C23.98 21.8 31.94 23.98 32 27.96C29.42 31.84 25 34.4 20 34.4Z"
              fill="#AE7565"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
