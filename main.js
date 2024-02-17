let menuBtn = document.querySelector('#menubar');
let navbar = document.querySelector('.navbar');






document.querySelector('.header .btn').onclick = () => {
    document.querySelector('.login-box-container').classList.toggle('active');
}
document.querySelector('#close-login-box-container').onclick = () => {
    document.querySelector('.login-box-container').classList.remove('active');
}
menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');
    }
}


const sections = document.querySelectorAll('section');

sections.forEach((section) => {
    //Add active class to all sections on the page according to the position of the page scrolled so far on page load and scroll
    window.addEventListener("load", eventListener);
    window.addEventListener("scroll", eventListener);

    function eventListener() {
        let windowHeight = window.innerHeight;
        let sectionRectTop = section.getBoundingClientRect().top;

        //console.log("window Height: " + windowHeight);
        //console.log("section RectTop: " + sectionRectTop);

        if (sectionRectTop < windowHeight) {
            section.classList.add("active");
        }
    }
    //revealing elements one by one on scroll
    window.addEventListener("scroll", () => {
        let reveals = section.querySelectorAll(".reveal");

        reveals.forEach((reveal, index) => {
            if (section.classList.contains("active")) {
                const delay = 600;
                setTimeout(() => {
                    reveal.classList.add("active");
                }, index * delay);
            }
        });
    });
    //revealing elements one by one on scroll according to a revealing point
    //window.addEventListener("scroll", () => {
    //    let reveals = section.querySelectorAll(".reveal");

    //   reveals.forEach((reveal, index) => {
    //       let windowHeight = window.innerHeight;
    //       let revealRectTop = reveal.getBoundingClientRect().top;
    //        let revealpoint = -250;

    //        if (revealRectTop < windowHeight - revealpoint) {
    //            const delay = 600;

    //            setTimeout(() => {
    //               reveal.classList.add("active");
    //           }, index * delay);
    //        }
    //    });
    //});
    //Revealing elements one by one on load (page reload)
    window.addEventListener("load", () => {
        let reveals = section.querySelectorAll(".reveal");

        reveals.forEach((reveal, index) => {
            if (section.classList.contains("active")) {
                const delay = 600;
                setTimeout(() => {
                    reveal.classList.add("active");
                }, index * delay);
            }
        })
    })
});
//Revealing elements one by one on load (page reload)
//   window.addEventListener("load", () => {
//       let reveals = section.querySelectorAll(".reveal");

//       reveals.forEach((reveal, index) => {
//           let windowHeight = window.innerHeight;
//           let revealRectTop = section.getBoundingClientRect().top;

//           if (revealRectTop < windowHeight) {
//               const delay = 600;

//               setTimeout(() => {
//                   reveal.classList.add("active");
//               }, index * delay);
//           }
//        });
//    });


