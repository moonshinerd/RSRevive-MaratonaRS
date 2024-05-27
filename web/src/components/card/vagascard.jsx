import React from 'react'
import styles from './styles.module.css'

export const CardVaga = ({cidade, titulo, descricao, tipo, data_postagem, remuneracao, requisitos, contato}) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardContent}>
        <div className={styles.cardHeader}>
          <h3 className={styles.nameVaga}>{titulo}</h3>
          <h4 className={styles.subjectVaga}>{descricao}</h4>
        </div>
        <span className={styles.contentsVaga}>{tipo}</span>
        <span className={styles.linkVaga}>Ver mais</span>
      </div>
    </div>
  )
}
