import styles from "./page.module.css";

export default function GetStarted() {
  return (
    <div className={styles.page}>
      <aside className={styles.brand}>
        <div className={styles.wordmark}>Meridian</div>
        <p className={styles.pitch}>
          Expense tracking for small teams. Submit, approve and reimburse in one
          place.
        </p>
        <p className={styles.account}>
          Already have an account?{" "}
          <a className={styles.accountLink} href="/signin">
            Sign in
          </a>
        </p>
      </aside>

      <main className={styles.content}>
        <h1 className={styles.heading}>Get started with Meridian</h1>
        <p className={styles.supporting}>
          Name your workspace to start tracking team expenses in one place.
        </p>

        <div className={styles.form}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="workspace-name">
              Workspace name
            </label>
            <input
              className={styles.input}
              id="workspace-name"
              name="workspace-name"
              type="text"
              placeholder="Northwind"
              autoComplete="organization"
            />
          </div>

          <button className={styles.button} type="button">
            Get started
          </button>
        </div>
      </main>
    </div>
  );
}
