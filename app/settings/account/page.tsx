import styles from "./page.module.css";

const timezones = [
  "(UTC+02:00) Johannesburg",
  "(UTC+01:00) Lagos",
  "(UTC+01:00) Berlin",
  "(UTC+00:00) London",
  "(UTC-05:00) New York",
  "(UTC-08:00) Los Angeles",
];

export default function SettingsAccount() {
  return (
    <div className={styles.page}>
      <main className={styles.panel}>
        <header className={styles.header}>
          <h1 className={styles.heading}>Account</h1>
          <p className={styles.description}>
            Your name and email are what teammates see on every expense you
            file. Your timezone decides when a day&rsquo;s spending is counted.
          </p>
        </header>

        <div className={styles.card}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="account-name">
              Full name
            </label>
            <input
              className={styles.input}
              id="account-name"
              name="account-name"
              type="text"
              defaultValue="Ada Okonkwo"
              autoComplete="name"
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="account-email">
              Email address
            </label>
            <input
              className={styles.input}
              id="account-email"
              name="account-email"
              type="email"
              defaultValue="ada@northwind.com"
              autoComplete="email"
            />
            <p className={styles.hint}>
              Approvals and reimbursement notices go here.
            </p>
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="account-timezone">
              Timezone
            </label>
            <div className={styles.selectWrap}>
              <select
                className={styles.select}
                id="account-timezone"
                name="account-timezone"
                defaultValue="(UTC+02:00) Johannesburg"
              >
                {timezones.map((timezone) => (
                  <option key={timezone} value={timezone}>
                    {timezone}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <button className={styles.button} type="button">
          Save changes
        </button>
      </main>
    </div>
  );
}
