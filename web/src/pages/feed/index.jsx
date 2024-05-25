import React from 'react';
import { Header } from '../../components/header';
import { Footer } from '../../components/footer';
import { Card } from '../../components/card';
import { Filter } from './components/filter';

import styles from './styles.module.css'

export const Feed = () => {
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
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

