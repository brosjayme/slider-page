 var swiper = new Swiper(".slide-content", {
    slidersPerview: 3,
    spaceBetween: 30,
    slidesPerGroup:3,
    loop: true,
    loopFillGroupWithBlank: false,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        precEl: ".swiper-button-prev",
    },
 })
//  import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import "./styles.css";

// // import required modules
// import { Keyboard, Pagination, Navigation } from "swiper";

// export default function App() {
//   return (
//     <>
//       <Swiper
//         slidesPerView={1}
//         spaceBetween={30}
//         keyboard={{
//           enabled: true,
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         modules={[Keyboard, Pagination, Navigation]}
//         className="mySwiper"
//       >
//         <SwiperSlide>Slide 1</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//         <SwiperSlide>Slide 6</SwiperSlide>
//         <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//         <SwiperSlide>Slide 9</SwiperSlide>
//       </Swiper>
//     </>
//   );
// }
