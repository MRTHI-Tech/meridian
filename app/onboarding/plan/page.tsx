import styles from "./page.module.css";

const plans = [
  {
    id: "solo",
    name: "Solo",
    price: "$0",
    cadence: "per month",
    summary: "One person, unlimited expenses, exports whenever you need them.",
  },
  {
    id: "team",
    name: "Team",
    price: "$12",
    cadence: "per person, per month",
    summary: "Approvals, shared categories and a receipt inbox for the team.",
  },
  {
    id: "company",
    name: "Company",
    price: "$28",
    cadence: "per person, per month",
    summary: "Multiple workspaces, custom approval chains and audit history.",
  },
];

export default function OnboardingPlan() {
  return (
    <div className={styles.page}>
      <main className={styles.step}>
        <h1 className={styles.heading}>Choose a plan</h1>

        <p className={styles.help}>
          Every plan starts with a free trial — you can change or cancel it from
          workspace settings at any time.
        </p>

        <div className={styles.plans}>
          {plans.map((plan) => (
            <label className={styles.plan} key={plan.id}>
              <input
                className={styles.control}
                type="radio"
                name="plan"
                value={plan.id}
              />
              <span className={styles.planName}>{plan.name}</span>
              <span className={styles.planPrice}>{plan.price}</span>
              <span className={styles.planCadence}>{plan.cadence}</span>
              <span className={styles.planSummary}>{plan.summary}</span>
            </label>
          ))}
        </div>

        <button className={styles.button} type="button">
          Submit
        </button>
      </main>
    </div>
  );
}
