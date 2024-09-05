import styles from './page.module.scss';

export default function ContactPage() {
  return (
    <main className={styles.container}>
      <div className={styles.textContainer}>
        <h1>Contact me!</h1>
        <p>
          {`Have a question? A job offer? Want to create something together? Contact me and let's talk!`}
          <br />
          <br />
          <br />
        </p>
        <p>
          <span className={styles.bold}>Poland, 40-833 Katowice</span>
        </p>
        <p>
          <span className={styles.bold}>+48 883 655 934</span>
        </p>
        <p>
          <span className={styles.bold}>artur.furtak@proton.me</span>
        </p>
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form} action="">
          <input
            type="text"
            name="name"
            placeholder="name"
            className={styles.name}
          />
          <input
            type="email"
            name="email"
            placeholder="email"
            className={styles.email}
          />
          <input
            type="text"
            name="subject"
            placeholder="subject"
            className={styles.subject}
          />
          <textarea
            name="message"
            placeholder="message"
            className={styles.message}
          />
          <div className={styles.sendBtnWrapper}>
            <button className={styles.sendBtn}>send</button>
          </div>
        </form>
      </div>
    </main>
  );
}
