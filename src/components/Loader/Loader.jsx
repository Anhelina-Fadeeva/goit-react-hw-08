import { Circles } from 'react-loader-spinner';
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <Circles
        visible={true}
        height={80}
        width={80}
        color='#d57f34' // изменен цвет на соответствующий вашей цветовой палитре
        ariaLabel='circles-loading'
      />
    </div>
  );
};

export default Loader;

