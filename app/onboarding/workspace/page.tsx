import styles from "./page.module.css";

export default function OnboardingWorkspace() {
  return (
    <div className={styles.page}>
      <main className={styles.step}>
        <div className={styles.indicator}>
          <span className={styles.indicatorLabel}>Step 2 of 3</span>
          <span className={styles.track} aria-hidden="true">
            <span className={`${styles.tick} ${styles.tickOn}`} />
            <span className={`${styles.tick} ${styles.tickOn}`} />
            <span className={styles.tick} />
          </span>
        </div>

        <h1 className={styles.heading}>Tell us about your team</h1>

        <p className={styles.help}>
          A few details about how you work today, so Meridian fits around your
          team rather than the other way round.
        </p>

        <div className={styles.fields}>
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

          <div className={styles.field}>
            <label className={styles.label} htmlFor="company-size">
              How many of you are there?
            </label>
            <select
              className={styles.select}
              id="company-size"
              name="company-size"
              defaultValue=""
            >
              <option value="" disabled>
                Choose a size
              </option>
              <option value="1-9">Just a few of us (1–9)</option>
              <option value="10-49">A growing team (10–49)</option>
              <option value="50-199">An established team (50–199)</option>
              <option value="200-plus">200 or more</option>
            </select>
          </div>

          <fieldset className={styles.group}>
            <legend className={styles.legend}>How do you expense today?</legend>
            <div className={styles.options}>
              <label className={styles.option}>
                <input
                  className={styles.control}
                  type="radio"
                  name="expense-method"
                  value="spreadsheets"
                />
                Spreadsheets and a folder of receipts
              </label>
              <label className={styles.option}>
                <input
                  className={styles.control}
                  type="radio"
                  name="expense-method"
                  value="another-tool"
                />
                Another expense tool we&rsquo;d like to leave behind
              </label>
              <label className={styles.option}>
                <input
                  className={styles.control}
                  type="radio"
                  name="expense-method"
                  value="not-yet"
                />
                Nothing formal yet — you&rsquo;re our first
              </label>
            </div>
          </fieldset>
        </div>

        <button className={styles.button} type="button">
          Continue
        </button>
      </main>
    </div>
  );
}
