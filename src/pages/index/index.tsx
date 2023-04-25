import { Link } from 'react-router-dom';

import ImageGryffindor from '@/assets/images/gryffindor.jpeg';
import ImageHogwarts from '@/assets/images/hogwarts.png';
import ImageHufflepuff from '@/assets/images/hufflepuff.jpeg';
import ImageRavenclaw from '@/assets/images/ravenclaw.jpeg';
import ImageSlytherin from '@/assets/images/slytherin.jpeg';

import styles from './index.module.less';

const Page = () => {
  const links = [
    { name: 'Gryffindor', image: ImageGryffindor, path: '/gryffindor' },
    { name: 'Hufflepuff', image: ImageHufflepuff, path: '/hufflepuff' },
    { name: 'Ravenclaw', image: ImageRavenclaw, path: '/ravenclaw' },
    { name: 'Slytherin', image: ImageSlytherin, path: '/slytherin' },
  ];

  return (
    <div className={styles.container}>
      <img className={styles.bridge} src={ImageHogwarts} alt="hogwarts" />
      <div className={styles.links}>
        {links.map((link) => (
          <Link to={link.path} className={styles.link} key={link.name}>
            <img
              className={styles['link-logo']}
              src={link.image}
              alt={link.name}
            />
            <div className={styles['link-name']}>{link.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Page;
