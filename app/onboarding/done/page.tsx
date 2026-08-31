import Link from "next/link";

import styles from "./page.module.css";

export default function OnboardingDone() {
  return (
    <div className={styles.page}>
      <main className={styles.card}>
        <div className={styles.mark} aria-hidden="true">
          ✓
        </div>

        <h1 className={styles.heading}>Account provisioning complete</h1>

        <p className={styles.supporting}>
          Your workspace is ready and your teammates have their invites. Head to
          the dashboard to log your first expense.
        </p>

        <Link className={styles.button} href="/dashboard">
          Go to dashboard
        </Link>
      </main>
    </div>
  );
}
