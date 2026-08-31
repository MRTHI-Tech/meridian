import styles from "./page.module.css";

export default function AcceptInvite() {
  return (
    <div className={styles.page}>
      <aside className={styles.brand}>
        <div className={styles.wordmark}>Meridian</div>
        <p className={styles.pitch}>
          Expense tracking for small teams. Submit, approve and reimburse in one
          place.
        </p>
      </aside>

      <main className={styles.content}>
        <div className={styles.mark} aria-hidden="true">
          N
        </div>

        <h1 className={styles.heading}>Kwame invited you to Northwind</h1>
        <p className={styles.supporting}>
          Kwame Mensah added you to the{" "}
          <span className={styles.workspace}>Northwind</span> workspace on
          Meridian, where the team tracks and approves expenses together.
        </p>

        <div className={styles.actions}>
          <button className={`${styles.button} ${styles.primary}`} type="button">
            Accept invite
          </button>
          <button
            className={`${styles.button} ${styles.secondary}`}
            type="button"
          >
            Not now
          </button>
        </div>
      </main>
    </div>
  );
}
