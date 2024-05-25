import React from 'react'
import styles from './styles.module.css'

export const Card = () => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardContent}>
        <div className={styles.cardHeader}>
          <h3 className={styles.name}>Nome do Curso</h3>
          <h4 className={styles.subject}>Área</h4>
        </div>
        <span className={styles.contents}>Descrição</span>
        <span className={styles.link}>Ver mais</span>
      </div>
    </div>
  )
}
