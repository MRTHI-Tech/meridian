import styles from "./page.module.css";

type PlanStatus = "active" | "lapsed";

const plan = {
  name: "Team",
  price: "$12",
  cadence: "per person, per month",
  seats: "6 of 10 seats in use",
  status: "active" as PlanStatus,
};

const card = {
  brand: "Visa",
  last4: "4242",
  holder: "Ada Okonkwo",
};

const statusLabels: Record<PlanStatus, string> = {
  active: "Active",
  lapsed: "Payment overdue",
};

const statusVariants: Record<PlanStatus, string> = {
  active: styles.statusActive,
  lapsed: styles.statusLapsed,
};

/**
 * The payment action takes its colour from the plan. On an active plan
 * replacing the card is routine, so it stays quiet and lets "Save changes"
 * be the only filled button on the page; on a lapsed one it is the thing to
 * do next, and it takes the critical fill to say so.
 */
const paymentVariants: Record<PlanStatus, string> = {
  active: styles.paymentQuiet,
  lapsed: styles.paymentUrgent,
};

export default function SettingsBilling() {
  return (
    <div className={styles.page}>
      <main className={styles.panel}>
        <header className={styles.header}>
          <h1 className={styles.heading}>Billing</h1>
          <p className={styles.description}>
            The card we charge, where the receipts land, and what the workspace
            is on. Changing your plan takes effect on the next invoice.
          </p>
        </header>

        <div className={styles.card}>
          <section className={styles.section}>
            <h2 className={styles.sectionHeading}>Card on file</h2>
            <div className={styles.payment}>
              <span className={styles.paymentDetail}>
                <span className={styles.paymentCard}>
                  {card.brand} ending {card.last4}
                </span>
                <span className={styles.paymentHolder}>{card.holder}</span>
              </span>
              <button
                className={`${styles.paymentButton} ${paymentVariants[plan.status]}`}
                type="button"
              >
                Update payment method
              </button>
            </div>
          </section>

          <section className={styles.section}>
            <label className={styles.sectionHeading} htmlFor="billing-email">
              Billing email
            </label>
            <input
              className={styles.input}
              id="billing-email"
              name="billing-email"
              type="email"
              defaultValue="accounts@northwind.com"
              autoComplete="email"
            />
            <p className={styles.hint}>
              Invoices and receipts go here rather than to your account email.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionHeading}>Plan</h2>
            <div className={styles.plan}>
              <span className={styles.planTop}>
                <span className={styles.planName}>{plan.name}</span>
                <span
                  className={`${styles.status} ${statusVariants[plan.status]}`}
                >
                  {statusLabels[plan.status]}
                </span>
              </span>
              <span className={styles.planPrice}>
                {plan.price}{" "}
                <span className={styles.planCadence}>{plan.cadence}</span>
              </span>
              <span className={styles.planSeats}>{plan.seats}</span>
            </div>
          </section>
        </div>

        <button className={styles.button} type="button">
          Save changes
        </button>
      </main>
    </div>
  );
}
