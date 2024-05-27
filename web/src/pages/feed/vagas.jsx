import React, {useEffect, useState} from 'react'
import styles from './styles.module.css'
import { Filter } from './components/filter'
import { CardVaga } from '../../components/card/vagascard.jsx'
import { api } from '../../services/api.service'

export const Vagas = () => {

  const [vagas, setVagas] = useState([]);

  async function getVagas(){
    const {data: vagasData} = await api.get('/vagas');
    setVagas(vagasData);
  }

  function setPagination(arr, index, size){
    const temp = vagas[index * size];
  }

  useEffect(() => {
    getVagas();
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
              vagas.map((item) => {
                return <CardVaga key={item.id} {...item}/>
              })
            }
          </div>
        </div>
    </>
  )
}

