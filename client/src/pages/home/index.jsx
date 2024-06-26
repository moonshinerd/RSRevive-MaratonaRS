import React from 'react';
import styles from './styles.module.css';
import { MoveRight } from 'lucide-react';
import FotoRs from '../../assets/FotoRs.jpeg';
import Logo from '../../assets/Logo.png';
import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Header } from '../../components/header';
import { Footer } from '../../components/footer';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';


register();


const Home = () => {
  const data = [
    { id: '1', image: 'https://www.diariodecontagem.com.br/fotos/materias/28032024085232_cursos-1.jpg' },
    { id: '2', image: 'https://i.insider.com/624ccb21f5c9cc00184f1389?width=600' },
    { id: '3', image: 'https://s1.static.brasilescola.uol.com.br/be/vestibular/fgv.jpg' },
    { id: '4', image: 'https://static.wixstatic.com/media/2a25c7_fae4a0eb329f4f83b02f9bf88fcd3657~mv2.png/v1/fill/w_640,h_242,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2a25c7_fae4a0eb329f4f83b02f9bf88fcd3657~mv2.png' },
    { id: '5', image: 'https://themosvagas.com.br/wp-content/uploads/2021/08/fundacao-bradesco-1-600x400.png' }
  ];

  return (
    <div>
      <Header></Header>
      <div className={styles.container}>
        <img src={FotoRs} alt="FotoRs" className={styles.image} />
        <div className={styles.contribua}>
          <h1 className={styles.textocontribua}>Contribua para a reconstrução do Rio Grande do Sul</h1>
          <button className={styles.botaocontribua}>
            <h1 className={styles.doar}>Doar</h1>
            <MoveRight className={styles.seta} />
          </button>
        </div>
      </div>
      <div className={styles.containerCursos}>
        <img src={Logo} alt="Logo" className={styles.logo} />
        <h1 className={styles.containerCursostxt}>Cursos</h1>
      </div>
      <div>
        <p className={styles.txtCursos}>
          Nós do RS Revive entendemos a gravidade da tragédia e por isso,
          criamos esse site que tem como propósito reunir cursos disponíveis gratuitamente para a população e ajudar o Rio Grande do Sul a REVIVER!
        </p>
      </div>
      <div className={styles.containerOndeColhemos}>
        <img src={Logo} alt="Logo" className={styles.logo1} />
        <h1 className={styles.containerOndeColhemostxt}>Onde colhemos os cursos?</h1>
      </div>
      <div className={styles.Slider}>
        <Swiper
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation={{ clickable: true }}
          /*autoplay={{ delay: 5000 }}*/
          loop={true}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <img
                src={item.image}
                alt="Slider"
                className="slide-item"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={styles.containerOportunidades}>
        <img src={Logo} alt="Logo" className={styles.logo2} />
        <h1 className={styles.containerOportunidadestxt}>Oportunidades</h1>
      </div>
      <div className={styles.oportunidades}>
        <p className={styles.oportunidadestxt1}>
          Sabemos também que nesse momento o que mais precisamos são de oportunidades, seja para ajudar ou seja ajudado. Por isso também reunimos aqui oportunidades de emprego e voluntariado.
        </p>
      <div className={styles.oportunidades2}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOTpUwomcRK8KLMFyxLBKgOP4UV9K1aOx5fxs3wHx6gkhABoat" alt='oportunidades' className={styles.foto1}/>
        <div className= {styles.botex}>
          <h2 className={styles.oportunidadestxt2}> 
          <strong>Encontre sua vaga de emprego ou voluntariado</strong>
          </h2>
          <button className={styles.botaovaga}>
            <h2 className={styles.vaga}>Procure já</h2>
              <MoveRight className={styles.seta} />
          </button>
         </div>
        </div>
        <br></br>
        <br></br>
      </div>
      <Footer></Footer>
    </div>
  );
};

export { Home };
