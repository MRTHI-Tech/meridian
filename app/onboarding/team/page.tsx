import styles from "./page.module.css";

export default function OnboardingTeam() {
  return (
    <div className={styles.page}>
      <main className={styles.step}>
        <div className={styles.indicator}>
          <span className={styles.indicatorLabel}>Step 3 of 3</span>
          <span className={styles.track} aria-hidden="true">
            <span className={`${styles.tick} ${styles.tickOn}`} />
            <span className={`${styles.tick} ${styles.tickOn}`} />
            <span className={`${styles.tick} ${styles.tickOn}`} />
          </span>
        </div>

        <h1 className={styles.heading}>Who else is coming along?</h1>

        <p className={styles.help}>
          Invite a few teammates to get you started — you can always bring the
          rest of the team over later.
        </p>

        <div className={styles.fields}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="invite-one">
              First teammate
            </label>
            <input
              className={styles.input}
              id="invite-one"
              name="invite-one"
              type="email"
              placeholder="kwame@northwind.com"
              autoComplete="off"
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="invite-two">
              Second teammate
            </label>
            <input
              className={styles.input}
              id="invite-two"
              name="invite-two"
              type="email"
              placeholder="priya@northwind.com"
              autoComplete="off"
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="invite-three">
              Third teammate
            </label>
            <input
              className={styles.input}
              id="invite-three"
              name="invite-three"
              type="email"
              placeholder="sofia@northwind.com"
              autoComplete="off"
            />
          </div>

          <label className={styles.check}>
            <input className={styles.control} type="checkbox" name="can-submit" />
            Let them submit expenses straight away
          </label>
        </div>

        <button className={styles.button} type="button">
          Continue
        </button>
      </main>
    </div>
  );
}
