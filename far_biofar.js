const slider1 = document.getElementById('slider1');
    const slides1 = slider1.querySelectorAll('img');
    const visible1 = 4; // koliko slik je hkrati prikazanih
    let index1 = 0;

    function showSlide1(i) {
      if (i < 0) {
        index1 = slides1.length - visible1;
      } else if (i > slides1.length - visible1) {
        index1 = 0;
      } else {
        index1 = i;
      }
      slider1.style.transform = `translateX(${-index1 * (130 / visible1)}%)`;
    }

    function nextSlide1() {
      showSlide1(index1 + 1);
    }

    function prevSlide1() {
      showSlide1(index1 - 1);
    }




























































const slider2 = document.getElementById('slider2');
    const slides2 = slider2.querySelectorAll('img');
    const visible2 = 4; // koliko slik je hkrati prikazanih
    let index2 = 0;

    function showSlide2(i) {
      if (i < 0) {
        index2 = slides2.length - visible2;
      } else if (i > slides2.length - visible2) {
        index2 = 0;
      } else {
        index2 = i;
      }
      slider2.style.transform = `translateX(${-index2 * (130 / visible2)}%)`;
    }

    function nextSlide2() {
      showSlide2(index2 + 1);
    }

    function prevSlide2() {
      showSlide2(index2 - 1);
    }










































































const slider3 = document.getElementById('slider3');
    const slides3 = slider3.querySelectorAll('img');
    const visible3 = 4; // koliko slik je hkrati prikazanih
    let index3 = 0;

    function showSlide3(i) {
      if (i < 0) {
        index3 = slides3.length - visible3;
      } else if (i > slides3.length - visible3) {
        index3 = 0;
      } else {
        index3 = i;
      }
      slider3.style.transform = `translateX(${-index3 * (130 / visible3)}%)`;
    }

    function nextSlide3() {
      showSlide3(index3 + 1);
    }

    function prevSlide3() {
      showSlide3(index3 - 1);
    }

































































const slider4 = document.getElementById('slider4');
    const slides4 = slider4.querySelectorAll('img');
    const visible4 = 4; // koliko slik je hkrati prikazanih
    let index4 = 0;

    function showSlide4(i) {
      if (i < 0) {
        index4 = slides4.length - visible4;
      } else if (i > slides4.length - visible4) {
        index4 = 0;
      } else {
        index4 = i;
      }
      slider4.style.transform = `translateX(${-index4 * (130 / visible4)}%)`;
    }

    function nextSlide4() {
      showSlide4(index4 + 1);
    }

    function prevSlide4() {
      showSlide4(index4 - 1);
    }