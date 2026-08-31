import styles from "./page.module.css";

export default function OnboardingProfile() {
  return (
    <div className={styles.page}>
      <main className={styles.step}>
        <div className={styles.indicator}>
          <span className={styles.indicatorLabel}>Step 1 of 3</span>
          <span className={styles.track} aria-hidden="true">
            <span className={`${styles.tick} ${styles.tickOn}`} />
            <span className={styles.tick} />
            <span className={styles.tick} />
          </span>
        </div>

        <h1 className={styles.heading}>Let&rsquo;s get you set up</h1>

        <p className={styles.help}>
          Just your name and what you do — it&rsquo;s how your teammates will
          recognise you on every expense you file.
        </p>

        <div className={styles.fields}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="full-name">
              Your name
            </label>
            <input
              className={styles.input}
              id="full-name"
              name="full-name"
              type="text"
              placeholder="Ada Okonkwo"
              autoComplete="name"
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="role">
              Your role
            </label>
            <input
              className={styles.input}
              id="role"
              name="role"
              type="text"
              placeholder="Operations lead"
              autoComplete="organization-title"
            />
          </div>
        </div>

        <button className={styles.button} type="button">
          Continue
        </button>
      </main>
    </div>
  );
}
