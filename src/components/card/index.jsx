import React from 'react'
import styles from './styles.module.css'

export const Card = ({nome_do_curso, area, conteudo, duracao}) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardContent}>
        <div className={styles.cardHeader}>
          <h3 className={styles.name}>{nome_do_curso}</h3>
          <h4 className={styles.subject}>{area}</h4>
        </div>
        <span className={styles.contents}>{conteudo}</span>
        <span className={styles.link}>Ver mais</span>
      </div>
    </div>
  )
}
