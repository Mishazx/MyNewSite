import styles from './Contact.module.css';

const Contact: React.FC = () => {
  return (
    <div className={styles.contact}>
      <h2>Связаться со мной</h2>
      <div className={styles.content}>
        <form className={styles.form}>
          <input type="text" placeholder="Имя" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Сообщение"></textarea>
          <button type="submit">Отправить</button>
        </form>
      </div>
    </div>
  );
};

export default Contact; 