import Link from 'next/link';
import { Product } from '../../types/Product';
import styles from './style.module.css';

type Props = {
  data: Product;
  mainColor: string;
  secondColor: string;
}

export const ProductItem = ({data, mainColor, secondColor}: Props) => {
  return (
    <Link href={`/jucadelivery/product/${data.id}`}>
      <a className={styles.container}>
        <div className={styles.head} style={{backgroundColor: secondColor}}></div>
        <div className={styles.info}>
          <div className={styles.imgInfo}>
            {/* <img src="/tmp/burguer.png" alt="Burguer"/> */}
            <img src={data.image} alt="Burguer"/>
          </div>
          <div className={styles.catName}>{data.categoryName}</div>
          <div className={styles.ProductName}>{data.name}</div>
          <div className={styles.price} style={{color: mainColor}}>{data.price}</div>
        </div>
      </a>
    </Link>
  );
}