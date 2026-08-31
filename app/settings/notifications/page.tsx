import styles from "./page.module.css";

const alerts = [
  {
    id: "needs-approval",
    name: "An expense needs your approval",
    hint: "Only for expenses routed to you.",
    on: true,
  },
  {
    id: "approved",
    name: "Your expense was approved",
    hint: "Sent once the last approver signs off.",
    on: true,
  },
  {
    id: "returned",
    name: "Your expense was returned",
    hint: "Includes the note the approver left.",
    on: true,
  },
  {
    id: "reimbursed",
    name: "A reimbursement has been paid",
    hint: "Sent when the transfer leaves the account.",
    on: true,
  },
  {
    id: "missing-receipt",
    name: "A receipt is missing",
    hint: "One nudge per expense, never more.",
    on: false,
  },
  {
    id: "comments",
    name: "Someone comments on an expense",
    hint: "Covers expenses you filed or approved.",
    on: false,
  },
];

const frequencies = [
  { id: "daily", name: "Daily", hint: "Every weekday morning." },
  { id: "weekly", name: "Weekly", hint: "Monday, covering the week before." },
  { id: "monthly", name: "Monthly", hint: "On the first, with the close-off." },
  { id: "never", name: "Never", hint: "Alerts only, no digest." },
];

export default function SettingsNotifications() {
  return (
    <div className={styles.page}>
      <main className={styles.panel}>
        <header className={styles.header}>
          <h1 className={styles.heading}>Notifications</h1>
          <p className={styles.description}>
            Choose what reaches you as it happens, and how often we round the
            rest up into a digest.
          </p>
        </header>

        <div className={styles.card}>
          <fieldset className={styles.group}>
            <legend className={styles.legend}>Send me an alert when</legend>

            <div className={styles.toggles}>
              {alerts.map((alert) => (
                <label className={styles.toggleRow} key={alert.id}>
                  <span className={styles.rowText}>
                    <span className={styles.rowName}>{alert.name}</span>
                    <span className={styles.rowHint}>{alert.hint}</span>
                  </span>
                  <input
                    className={styles.toggle}
                    type="checkbox"
                    name={alert.id}
                    defaultChecked={alert.on}
                  />
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset className={styles.group}>
            <legend className={styles.legend}>Digest frequency</legend>

            <div className={styles.radios}>
              {frequencies.map((frequency) => (
                <label className={styles.radioRow} key={frequency.id}>
                  <input
                    className={styles.radio}
                    type="radio"
                    name="digest"
                    value={frequency.id}
                    defaultChecked={frequency.id === "weekly"}
                  />
                  <span className={styles.rowText}>
                    <span className={styles.rowName}>{frequency.name}</span>
                    <span className={styles.rowHint}>{frequency.hint}</span>
                  </span>
                </label>
              ))}
            </div>
          </fieldset>
        </div>

        <button className={styles.button} type="button">
          Save changes
        </button>
      </main>
    </div>
  );
}
