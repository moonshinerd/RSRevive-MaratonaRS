import React from 'react'
import styles from './styles.module.css'

export const CardVaga = ({cidade, titulo, descricao, tipo, data_postagem, remuneracao, requisitos, contato}) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardContent}>
        <div className={styles.cardHeader}>
          <h3 className={styles.nameVaga}>{titulo}</h3>
          <h4 className={styles.subjectVaga}>{cidade}</h4>
        </div>
        <span className={styles.contentsVaga}>{tipo}</span>
        <span className={styles.contentsVaga}>
        <p>Requisitos:<span className={styles.contentsVaga}>{requisitos} </span></p>
        </span>
        <a href={descricao} ><span className={styles.link}>Ver mais</span></a>
      </div>
    </div>
  )
}
