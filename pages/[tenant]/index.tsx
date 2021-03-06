import { Banner } from '../../components/Banner';
import { SearcInput } from '../../components/SearchInput';
import { ProductItem } from '../../components/ProductItem';
import styles from '../../styles/Home.module.css';

const Home = () => {

  const handleSearch = (searchValue: string) => {
    console.log(`Você está buscando por: ${searchValue}`)
  }
  
  return (
    <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.headerTop}>
            <div className={styles.headerTopLeft}>
              <div className={styles.headerTitle}>Seja Bem-vindo(a) 👋</div>
              <div className={styles.headerSubtitle}>O que deseja para Hoje?</div>
            </div>
            <div className={styles.headerTopRight}>
              <div className={styles.menuButton}>
                <div className={styles.menuButtonLine}></div>
                <div className={styles.menuButtonLine}></div>
                <div className={styles.menuButtonLine}></div>
              </div>
            </div>
          </div>
          <div className={styles.headerBottom}>
            <SearcInput 
              mainColor="#FB9400"
              onSearch={handleSearch}
            />
          </div>
        </header>

        <Banner />

        <div className={styles.grid}>
          <ProductItem 
            data={{id: 1, image: '/tmp/burguer.png', categoryName: 'Tradicional', name: 'Texas Burguer', price: 'R$ 25,90'}}
            mainColor="#FB9400"
            secondColor="#FFF9F2"
          />
          <ProductItem 
            data={{id: 2, image: '/tmp/burguer.png', categoryName: 'Tradicional', name: 'Texas Burguer', price: 'R$ 25,90'}}
            mainColor="#FB9400"
            secondColor="#FFF9F2"
          />
          <ProductItem 
            data={{id: 3, image: '/tmp/burguer.png', categoryName: 'Tradicional', name: 'Texas Burguer', price: 'R$ 25,90'}}
            mainColor="#FB9400"
            secondColor="#FFF9F2"
          />
          <ProductItem 
            data={{id: 4, image: '/tmp/burguer.png', categoryName: 'Tradicional', name: 'Texas Burguer', price: 'R$ 25,90'}}
            mainColor="#FB9400"
            secondColor="#FFF9F2"
          />
          <ProductItem 
            data={{id: 5, image: '/tmp/burguer.png', categoryName: 'Tradicional', name: 'Texas Burguer', price: 'R$ 25,90'}}
            mainColor="#FB9400"
            secondColor="#FFF9F2"
          />
        </div>
    </div>
  );
}

export default Home;