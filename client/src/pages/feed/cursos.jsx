import React, {useEffect, useState} from 'react'
import styles from './styles.module.css'
import { Filter } from './components/filter'
import { Card } from '../../components/card/cursoscard.jsx'
import { api } from '../../services/api.service'

export const Cursos = () => {

  const [cursos, setCursos] = useState([]);

  async function getCursos(){
    const {data: cursosData} = await api.get('/cursos');
    setCursos(cursosData);
  }

  function setPagination(arr, index, size){
    const temp = cursos[index * size];
  }

  useEffect(() => {
    getCursos();
  }, [])

  return (
    <>
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
    </>
  )
}

