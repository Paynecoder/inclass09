import styles from "./Add.module.css";
import { useState } from "react";

export default function Ad() {
  const [ad, setAd] = useState(true);

  return (
    <div className={styles.ad}>
      {ad ? (
        <div className={styles.container}>
          <div className={styles.popup}>
            Ad
            <button className={styles.close} onClick={() => setAd(false)}>
              X
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
