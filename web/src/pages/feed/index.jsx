import React, { useEffect, useState } from 'react';
import { Header } from '../../components/header';
import { Footer } from '../../components/footer';
import { Card } from '../../components/card';
import { Filter } from './components/filter';
import { api } from '../../services/api.service'

import styles from './styles.module.css'

export const Feed = () => {

  const [cursos, setCursos] = useState([]);

  async function getCursos(){
    const {data: cursosData} = await api.get('/cursos');
    setCursos(cursosData);
  }

  useEffect(() => {
    getCursos();
    console.log(cursos)
  }, []);

  return (
    <>
      <Header />
      <main>
        <nav className={styles.buttonsWrapper}>
          <button className={styles.navButton}>
            cursos
          </button>
          <button className={styles.navButton}>
            vagas
          </button>
          <button className={styles.navButton}>
            voluntariado
          </button>
        </nav>
        <div className={styles.filtersWrapper}>
          <input type='text' className={styles.input} placeholder='Pesquisar'/>
          <div className={styles.filtersLinksWrapper}>
            <span className={styles.filterLink}>Filtros</span>
            <span className={styles.filterLink}>Ordenação</span>
          </div>
        </div>
        <div className={styles.cardsFilterContainer}>
          <Filter />
          <div className={styles.cardsWrapper}>
            {
              cursos.map((item) => {
                return <Card key={item.id} {...item}/>
              })
            }
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

