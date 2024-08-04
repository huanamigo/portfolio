import styles from './page.module.scss';

export default function ContactPage() {
  return (
    <main className={styles.container}>
      <div className={styles.textContainer}>
        <h1>Contact me!</h1>
        <p>{`Have a question? A job offer? Want to create something together? Contact me and let's talk!`}</p>
        <p>Artur Furtak</p>
        <p>Poland, 40-833 Katowice</p>
        <p>+48 883 655 934</p>
        <p>artur.furtak@proton.me</p>
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
