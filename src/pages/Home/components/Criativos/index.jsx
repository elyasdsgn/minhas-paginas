import Carrossel from "../Carrossel";
import { SwiperSlide } from "swiper/react"
import CreativeCard from "../CreativeCard"

import desenv1 from "../../assets/trabalhos/criativos/desenv1.webp" 
import desenv2 from "../../assets/trabalhos/criativos/desenv2.webp" 
import desenv3 from "../../assets/trabalhos/criativos/desenv3.webp" 
import desenv4 from "../../assets/trabalhos/criativos/desenv4.webp" 
import desenv5 from "../../assets/trabalhos/criativos/desenv5.webp" 
import desenv6 from "../../assets/trabalhos/criativos/desenv6.webp" 
import gym1 from "../../assets/trabalhos/criativos/gym1.webp" 
import gym2 from "../../assets/trabalhos/criativos/gym2.webp" 
import gym3 from "../../assets/trabalhos/criativos/gym3.webp" 
import gym4 from "../../assets/trabalhos/criativos/gym4.webp" 
import gym5 from "../../assets/trabalhos/criativos/gym5.webp" 
import gym6 from "../../assets/trabalhos/criativos/gym6.webp" 
import gym7 from "../../assets/trabalhos/criativos/gym7.webp" 
import gym8 from "../../assets/trabalhos/criativos/gym8.webp" 
import gym9 from "../../assets/trabalhos/criativos/gym9.webp" 
import est1 from "../../assets/trabalhos/criativos/est1.webp" 
import est2 from "../../assets/trabalhos/criativos/est2.webp" 
import est3 from "../../assets/trabalhos/criativos/est3.webp" 
import est4 from "../../assets/trabalhos/criativos/est4.webp" 

import "./criativos.scss";

function Criativos() {

  const settings = {
    loop: true,
    autoplay: {
      delay: 1000 * 3,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    breakpoints: {
      280: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      540: {
        slidesPerView: 2,
      },
      840: {
        slidesPerView: 3,
      },
      1100: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    },
  };

  return (
    <div className='criativos-portfolio d-flex a'>
      <p>Criativos</p>
      {/* LINHA 1 */}
      <div className="criativos-cards">
        <Carrossel settings={settings}>
          <SwiperSlide>
            <CreativeCard creativeImg={desenv1}/>
          </SwiperSlide>
          <SwiperSlide>
            <CreativeCard creativeImg={desenv2}/>
          </SwiperSlide>
          <SwiperSlide>
            <CreativeCard creativeImg={desenv3}/>
          </SwiperSlide>
          <SwiperSlide>
            <CreativeCard creativeImg={desenv4}/>
          </SwiperSlide>
          <SwiperSlide>
            <CreativeCard creativeImg={desenv5}/>
          </SwiperSlide>
          <SwiperSlide>
            <CreativeCard creativeImg={desenv6}/>
          </SwiperSlide>
        </Carrossel>
      </div>
      {/* LINHA 2 */}
      <div className="criativos-cards">
        <Carrossel settings={settings}>
          <SwiperSlide>
            <CreativeCard creativeImg={gym1}/>
          </SwiperSlide>
          <SwiperSlide>
            <CreativeCard creativeImg={gym2}/>
          </SwiperSlide>
          <SwiperSlide>
            <CreativeCard creativeImg={gym3}/>
          </SwiperSlide>
          <SwiperSlide>
            <CreativeCard creativeImg={gym4}/>
          </SwiperSlide>
          <SwiperSlide>
            <CreativeCard creativeImg={gym5}/>
          </SwiperSlide>
          <SwiperSlide>
            <CreativeCard creativeImg={gym6}/>
          </SwiperSlide>
          <SwiperSlide>
            <CreativeCard creativeImg={gym7}/>
          </SwiperSlide>
          <SwiperSlide>
            <CreativeCard creativeImg={gym8}/>
          </SwiperSlide>
          <SwiperSlide>
            <CreativeCard creativeImg={gym9}/>
          </SwiperSlide>
        </Carrossel>
      </div>
      {/* LINHA 3 */}
      <div className="criativos-cards">
        <Carrossel settings={settings}>
          <SwiperSlide>
            <CreativeCard creativeImg={est1}/>
          </SwiperSlide>
          <SwiperSlide>
            <CreativeCard creativeImg={est2}/>
          </SwiperSlide>
          <SwiperSlide>
            <CreativeCard creativeImg={est3}/>
          </SwiperSlide>
          <SwiperSlide>
            <CreativeCard creativeImg={est4}/>
          </SwiperSlide>
        </Carrossel>
      </div>
    </div>
  )
}

export default Criativos