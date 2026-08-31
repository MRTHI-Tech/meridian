import styles from "./page.module.css";

export default function GetStarted() {
  return (
    <div className={styles.page}>
      <main className={styles.card}>
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

        <p className={styles.signin}>
          Already have an account?{" "}
          <a className={styles.signinLink} href="/signin">
            Sign in
          </a>
        </p>
      </main>
    </div>
  );
}
