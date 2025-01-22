import ImageBg from '../../assets/background.jpeg';
import styles from './Background.module.css';

const Background = () => {
  return (
    <div className={styles.container}>
      <img 
        src={ImageBg} 
        className={styles.image}
        alt="background"
      />
    </div>
  );
}

export default Background;
