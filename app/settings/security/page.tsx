import styles from "./page.module.css";

const sessions = [
  {
    id: "macbook",
    device: "Chrome on macOS",
    location: "Cape Town, South Africa",
    current: true,
  },
  {
    id: "iphone",
    device: "Safari on iPhone",
    location: "Cape Town, South Africa",
    current: false,
  },
  {
    id: "windows",
    device: "Firefox on Windows",
    location: "Maseru, Lesotho",
    current: false,
  },
];

export default function SettingsSecurity() {
  return (
    <div className={styles.page}>
      <main className={styles.panel}>
        <header className={styles.header}>
          <h1 className={styles.heading}>Security</h1>
          <p className={styles.description}>
            Your password, a second factor, and everywhere you&rsquo;re
            currently signed in. Signing a session out ends it straight away.
          </p>
        </header>

        <div className={styles.card}>
          <section className={styles.section}>
            <h2 className={styles.sectionHeading}>Password</h2>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="current-password">
                Current password
              </label>
              <input
                className={styles.input}
                id="current-password"
                name="current-password"
                type="password"
                autoComplete="current-password"
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="new-password">
                New password
              </label>
              <input
                className={styles.input}
                id="new-password"
                name="new-password"
                type="password"
                autoComplete="new-password"
              />
              <p className={styles.hint}>
                At least twelve characters, and not one you use elsewhere.
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionHeading}>Two-factor authentication</h2>

            <label className={styles.toggleRow}>
              <span className={styles.rowText}>
                <span className={styles.rowName}>
                  Ask for a code at sign-in
                </span>
                <span className={styles.rowHint}>
                  Uses your authenticator app. Recovery codes are issued when
                  you turn this on.
                </span>
              </span>
              <input
                className={styles.toggle}
                type="checkbox"
                name="two-factor"
                defaultChecked
              />
            </label>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionHeading}>Signed-in sessions</h2>

            <ul className={styles.sessions}>
              {sessions.map((session) => (
                <li className={styles.session} key={session.id}>
                  <span className={styles.rowText}>
                    <span className={styles.rowName}>
                      {session.device}
                      {session.current ? (
                        <span className={styles.current}>This device</span>
                      ) : null}
                    </span>
                    <span className={styles.rowHint}>{session.location}</span>
                  </span>
                  <button
                    className={styles.signOut}
                    type="button"
                    disabled={session.current}
                  >
                    Sign out
                  </button>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className={styles.actions}>
          <button className={styles.delete} type="button">
            Delete account
          </button>
          <button className={styles.button} type="button">
            Save changes
          </button>
        </div>
      </main>
    </div>
  );
}
