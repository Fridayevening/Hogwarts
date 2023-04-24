import { Link } from 'react-router-dom';

import styles from './index.module.less';

const Page = () => {
  return (
    <div className={styles.container}>
      <Link to="/gryffindor" className={styles.link}>
        Gryffindor
      </Link>
      <Link to="/hufflepuff" className={styles.link}>
        Hufflepuff
      </Link>
      <Link to="/ravenclaw" className={styles.link}>
        Ravenclaw
      </Link>
      <Link to="/slytherin" className={styles.link}>
        Slytherin
      </Link>
    </div>
  );
};

export default Page;
