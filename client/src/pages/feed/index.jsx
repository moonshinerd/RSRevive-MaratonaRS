import React, { useEffect, useState } from 'react';
import { Header } from '../../components/header';
import { Footer } from '../../components/footer';
import { Card } from '../../components/card/cursoscard';
import { Filter } from './components/filter';
import { api } from '../../services/api.service';
import { Link, useLocation } from 'react-router-dom'
import { Cursos } from './cursos';
import { Vagas } from './vagas';

import styles from './styles.module.css';

export const Feed = () => {

  const useQuery = new URLSearchParams(useLocation().search);

  const [page, setPage] = useState('cursos');
  const [cursos, setCursos] = useState([]);
  const [vagas, setVagas] = useState([]);
  
  async function getCursos(){
    const {data: cursosData} = await api.get('/cursos');
    setCursos(cursosData);
  }
  async function getVagas(){
    const {data: vagaData} = await api.get('/vaga');
    setVagas(vagaData);
  }

  useEffect(() => {
    getCursos();
    const temp = useQuery.get("page");
    //setPage(temp == null? "cursos" : 'temp');
  }, []);

  return (
    <>
      <Header />
      <main>
        <nav className={styles.buttonsWrapper}>
          <Link to="?page=cursos" className={[styles.navButton]} onClick={() => setPage('cursos')}>
            cursos
          </Link>
          <Link to="?page=vagas" className={styles.navButton} onClick={() => setPage('vagas')}>
            vagas
          </Link>
          <Link to="?page=voluntariado" className={styles.navButton} onClick={() => setPage('voluntariado')}>
            voluntariado
          </Link>
        </nav>
        {
          page == 'cursos' &&
          <Cursos cursos={cursos}/>
        }
        {
          page == 'vagas' &&
          <Vagas vagas={vagas}/>
        }
        {

        }
      </main>
      <Footer />
    </>
  )
}

