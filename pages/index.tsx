import type { NextPage } from 'next';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Product from '../components/Product';
import img_1 from "../assets/img/pngwing 76.png";
import img_2 from "../assets/img/81DY++foRwL 1.png";
import "swiper/css/pagination";
import SwiperCore, {
  Pagination,
  Autoplay
} from 'swiper';
SwiperCore.use([Pagination,Autoplay]);
const Home: NextPage = () => {
  return (
   <div className = "bg-[url('../assets/img/img.jpg')] h-screen w-screen flex items-center justify-center flex-col">
     <h2 className = "text-[42px] leading-[50px] text-[#347758] font-bold font-['Signika'] mb-8">Deal Of The Month</h2>
     <Swiper
      slidesPerView={2}
      pagination={true}
      autoplay={{
        "delay": 3500,
        "disableOnInteraction": false
      }}
      className = "w-full !py-8"
      
    >
      <SwiperSlide>
       <Product img = {img_1}/>
      </SwiperSlide>
      <SwiperSlide>  
        <Product img = {img_2}/>
      </SwiperSlide>
      <SwiperSlide> 
        <Product img = {img_2}/>
      </SwiperSlide>
      <SwiperSlide> 
        <Product img = {img_1}/>
      </SwiperSlide>
    </Swiper>
   </div>
  )
}

export default Home
