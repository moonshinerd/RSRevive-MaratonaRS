import React from 'react'
import styles from './styles.module.css'

export const Filter = () => {
  return (
    <section className={styles.filterSection}>
      <h4 className={styles.title}>Filtros</h4>
      <div>
        <h5 className={styles.nameFilter}>Título</h5>
        <ul className={styles.filterOptions}>
          <li>
            <input type='checkbox'/>
            <label>Nome</label>
          </li>
          <li>
            <input type='checkbox'/>
            <label>Nome</label>
          </li>
          <li>
            <input type='checkbox'/>
            <label>Nome</label>
          </li>
        </ul>
      </div>
      <div>
        <h5 className={styles.nameFilter}>Título</h5>
        <ul className={styles.filterOptions}>
          <li>
            <input type='checkbox'/>
            <label>Nome</label>
          </li>
          <li>
            <input type='checkbox'/>
            <label>Nome</label>
          </li>
          <li>
            <input type='checkbox'/>
            <label>Nome</label>
          </li>
        </ul>
      </div>
      <div>
        <h5 className={styles.nameFilter}>Título</h5>
        <ul className={styles.filterOptions}>
          <li>
            <input type='checkbox'/>
            <label>Nome</label>
          </li>
          <li>
            <input type='checkbox'/>
            <label>Nome</label>
          </li>
          <li>
            <input type='checkbox'/>
            <label>Nome</label>
          </li>
        </ul>
      </div>
    </section>
  )
}
