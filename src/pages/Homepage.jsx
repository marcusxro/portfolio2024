import React, { useEffect, useRef, useState } from 'react'
import selfPic from '../images/self.png'
import gsap from 'gsap'
import Header from '../comp/Header'
import ImageBlocks from '../comp/ImageBlocks'
import Marquee from "react-fast-marquee";
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Lenis from 'lenis'


//picture bgs
import BrutalismPic from '../images/Brutalism.jpg'
import brutalistTwo from '../images/brutalistTwo.jpg'
import cafeEunoia from '../images/sideBg.jpg'
import pcup from '../images/pcup.jpg'
import ULCTELE from '../images/ULC.png'
import ririWater from '../images/RIRI.jpg'
import Chaat from '../images/Chaat.JPG'
//cert imgs
import ReactCert from '../images/reactCert.JPG'
import jsCert from '../images/jsCert.JPG'
import cssCert from '../images/cssCert.JPG'
import htmlCert from '../images/HTML cert.JPG'

const Homepage = () => {
  const [percent, setPercent] = useState(0)

  useEffect(() => {
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])


  useEffect(() => {
    const animateLoader = () => {
      // Create the GSAP animation for the loader
      gsap.to('.loader .secLoader', {
        width: `${percent}%`,
        ease: 'power4.out',
      });
      gsap.to('.loader .percent span', {
        y: 0,
        delay: 0.7,
        ease: 'power4.out',
        onComplete: () => {
          animatePercentage();
        }
      });


    };
    const animatePercentage = async () => {
      for (let i = 0; i <= 100; i++) {
        await new Promise(resolve => setTimeout(resolve, 40)); // Delay for smoother animation
        setPercent(i);
        gsap.to('.loader .secLoader', {
          width: `${i}%`,
          ease: 'power3.out',
        });
        if (i === 100) {
          gsap.to('.loader .percent span', {
            y: '-100%',
            delay: 0.7,
            ease: 'power4.inOut',
            onComplete: () => {
              gsap.to('.secSpan', {
                top: '100%',
                left: 0,
                ease: 'power4.inOut',
                onComplete: () => {
                  gsap.to('.loader', {
                    opacity: 0,
                    duration: 1,
                    ease: 'power4.inOut',
                    onComplete: () => {
                      gsap.to('.loader', {
                        display: 'none',
                        duration: 0,
                      })

                      gsap.to('.bigImage img', {
                        scale: 1,
                        delay: 0.7,
                        duration: 2,
                        ease: 'power4.inOut',
                        filter: 'blur(0px)'
                      });
                      gsap.to('.bigImage img', {
                        duration: 1,
                        delay: 0.2,
                        ease: 'power4.inOut',
                        filter: 'blur(0px)'
                      });
                      gsap.to('.secHeader span', {
                        y: 0,
                        stagger: 0.5,
                        delay: 0.7,
                        ease: 'power4.inOut',
                        onComplete: () => {
                          gsap.to('.goUp', {
                            stagger: 0.1,
                            opacity: 1,
                            y: 0,
                            ease: 'power4.inOut',
                          });
                        }
                      });
                    }
                  });
                }
              })
            }
          });
        }
      }
    };

    animateLoader();
  }, []);


  useEffect(() => {
    const btnHover = document.querySelectorAll('.about .textSide button');

    btnHover.forEach((spanHover, index) => {
      spanHover.addEventListener('mouseenter', () => {
        gsap.to(spanHover.querySelector('.FirstHover'), {
          y: '-200%',
          duration: 0.5,
          ease: 'power4.inOut',
        });
        gsap.to(spanHover.querySelector('.SecHover'), {
          y: '-150%',
          ease: 'power4.inOut',
          duration: 0.5,
        });
      });

      spanHover.addEventListener('mouseleave', () => {
        gsap.to(spanHover.querySelector('.FirstHover'), {
          y: '0%',
          duration: 0.5,
          ease: 'power4.out',
        });
        gsap.to(spanHover.querySelector('.SecHover'), {
          y: '100%',
          ease: 'power4.out',
          duration: 0.5,
        });
      });

    });
  }, []);


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.to('.about .textSide .line', {
      width: "100%",
      ease: 'power4.out',
      duration: 1,
      delay: 0.5,
      scrollTrigger: {
        trigger: '.line',
        top: 'top -20%',
        end: 'bottom',
      }
    })

    gsap.to('.about  .stagg', {
      opacity: "1",
      ease: 'power4.out',
      duration: 1,
      stagger: .3,
      delay: 0.5,
      onComplete: () => {
        gsap.to('.about', {
          opacity: "1",
          ease: 'power4.out',
          duration: 1,
        })

      },
      scrollTrigger: {
        trigger: '.about',
        top: 'top -20%',
        end: 'bottom',
      }
    })

  }, [])


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.to('.mission .imgCon', {
      opacity: "1",
      ease: 'power4.out',
      duration: 1,
      stagger: 0.3,
      delay: 0.5,
      onComplete: () => {
        gsap.to('.mission .overText span', {
          y: "0",
          ease: 'power4.out',
          duration: 1,
          stagger: 0.3,
        })
      },
      scrollTrigger: {
        trigger: '.mission',
        top: 'top -20%',
        end: 'bottom',
      }
    })

    gsap.to('.mission .textCon .line', {
      width: "100%",
      ease: 'power4.out',
      duration: 1,
      stagger: 0.3,
      delay: 0.5,
      scrollTrigger: {
        trigger: '.mission',
        top: 'top -20%',
        end: 'bottom',
      }
    })

    gsap.to('.mission .stagger', {
      opacity: "1",
      ease: 'power4.out',
      duration: 1,
      stagger: 0.4,
      scrollTrigger: {
        trigger: '.mission',
        top: 'top -20%',
        end: 'bottom',
      }
    })

    gsap.to('.mission .descs .stagge', {
      opacity: "1",
      ease: 'power4.out',
      duration: 1,
      stagger: 0.4,
      delay: .5,
      scrollTrigger: {
        trigger: '.mission .descs ',
        top: 'top -20%',
        end: 'bottom',
      }
    })

  }, [])

  useEffect(() => {
    // Ensure ScrollTrigger is updated with GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Select all service items

    gsap.to('.expertise .line ', {
      width: '100%',
      duration: .5,
      delay: .5,
      scrollTrigger: {
        trigger: '.expertise',
        start: 'top 70%',
      },
    });

    gsap.to('.stggr', {
      opacity: '1',
      duration: .5,
      delay: .5,
      stagger: 0.3,
      scrollTrigger: {
        trigger: '.expertise',
        start: 'top 70%',
      },
    });
    gsap.to('.expertise .rfm-marquee-container .marqItem', {
      y: 0,
      duration: 1,
      delay: .5,
      stagger: 0.3,
      scrollTrigger: {
        trigger: '.expertise .rfm-marquee-container ',
        start: 'top 100%',
      },
    });

    const serviceItems = document.querySelectorAll('.expertise .servicesCon .serviceItem');

    // Loop through each service item
    serviceItems.forEach((serviceItem, index) => {
      // Create a ScrollTrigger for each service item
      gsap.to(serviceItem, {
        opacity: 1,
        duration: .5,
        delay: .5,
        scrollTrigger: {
          trigger: serviceItem,
          start: 'top 70%', // Trigger animation when the top of the element hits the bottom of the viewport
        },
      });
      gsap.to(serviceItem.querySelectorAll('.line'), {
        width: '100%',
        duration: 1,
        delay: .5,
        stagger: 0.3,
        scrollTrigger: {
          trigger: serviceItem,
          start: 'top 70%', // Trigger animation when the top of the element hits the bottom of the viewport
        },
      });


    });

  }, []);

  const marqs = useRef(null)


  useEffect(() => {
    if (marqs.current) {
      gsap.registerPlugin(ScrollTrigger);

      // Animation for elements inside the Marquee
      gsap.to(marqs.current.querySelectorAll('.rfm-marquee-container'), { // Use ref to select inner elements
        y: 0,
        duration: 1,
        delay: 0.5,
        stagger: 0.3,
        scrollTrigger: {
          trigger: marqs.current, // Use ref to set the trigger
          start: 'top 100%',
        },
      });
    }
  }, [marqs]);


  useEffect(() => {
    // Check if the screen width is greater than a certain threshold (e.g., 768px)
    if (window.innerWidth > 1080) {
      gsap.registerPlugin(ScrollTrigger);
      const worksItem = document.querySelectorAll('.works .outerProjCon .projectContainer');

      worksItem.forEach((works, index) => {
        const textSide = works.querySelector('.textSide');

        gsap.to(textSide, {
          y: '80%',
          delay: 0.5,
          position: 'sticky',
          scrollTrigger: {
            trigger: textSide,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 3,
          },
        });
      });
    }
  }, []);


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const projCon = document.querySelectorAll('.works .outerProjCon .projectContainer');

    projCon.forEach((projectItem) => {
      gsap.to(projectItem, {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: projectItem,
          start: 'top 80%', // Adjusted start position to trigger animation earlier
          end: 'bottom bottom',
        },
      });

      const pictureContainer = projectItem.querySelector('.pictureContainer img');

      gsap.to(pictureContainer, {
        y: 250,
        scale: 1.5,
        duration: 1,
        scrollTrigger: {
          trigger: projectItem,
          start: 'top 80%', // Adjusted start position to trigger animation earlier
          end: 'bottom bottom',
          scrub: true, // Enable scrubbing for smoother parallax effect
        },
      });

      projectItem.addEventListener('mouseover', () => {
        gsap.to('.custom-cursor', {
          scale: 1,
          opacity: 1,
          cursor: 'pointer'
        })
      })


      projectItem.addEventListener('mouseleave', () => {
        gsap.to('.custom-cursor', {
          scale: 0,
          opacity: 0
        })
      })


    });

  }, []);


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);


    gsap.to('.works .line', {
      width: '100%',
      duration: 1,
      delay: .5,
      scrollTrigger: {
        trigger: '.works',
        start: 'top 100%', // Adjusted start position to trigger animation earlier
        end: 'bottom bottom',
      },
    });

    gsap.to('.works .isVisi', {
      opacity: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: '.works',
        start: 'top 100%', // Adjusted start position to trigger animation earlier
        end: 'bottom bottom',
      },
    });

  }, []);


  useEffect(() => {
    document.addEventListener('mousemove', (event) => {
      const cursor = document.querySelector('.custom-cursor');
      gsap.to(cursor, {
        x: event.clientX,
        y: event.clientY,
        duration: 1, // Adjust duration as needed
      });
    });

  }, [])

  useEffect(() => {
    document.addEventListener('mousemove', (event) => {
      const cursor = document.querySelector('.customCur');
      gsap.to(cursor, {
        x: event.clientX,
        y: event.clientY,
        duration: 1, // Adjust duration as needed
      });
    });

  }, [])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to('.seeProj .line', {
      width: '100%',
      ease: 'power4.inOut',
      delay: 0.5,
      duration: 0.8,
      scrollTrigger: {
        trigger: '.seeProj .line',
        top: 'top',
        end: 'bottom',
      }
    })

    gsap.to('.seeProj button', {
      opacity: 1,
      ease: 'power4.inOut',
      delay: 0.5,
      scrollTrigger: {
        trigger: '.seeProj .line',
        top: 'top',
        end: 'bottom',
      }
    })


    const btnHover = document.querySelectorAll('.seeProj button')

    btnHover.forEach((itm) => {
      itm.addEventListener('mouseenter', () => {
        gsap.to('.seeProj .btnCon button .seeAllHoverOne', {
          y: '-150%',
          ease: 'power4.inOut',
        })
        gsap.to('.seeProj .btnCon button .seeAllHoverTwo', {
          y: '-140%',
          ease: 'power4.inOut',
        })
      })

      itm.addEventListener('mouseleave', () => {
        gsap.to('.seeProj .btnCon button .seeAllHoverOne', {
          y: '0%',
          ease: 'power4.inOut',
        })
        gsap.to('.seeProj .btnCon button .seeAllHoverTwo', {
          y: '100%',
          ease: 'power4.inOut',
        })
      })

    })

  }, [])


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);



    // const hovButtonName = document.querySelectorAll('.discover .textCon button')

    // hovButtonName.forEach((itm) => {
    //   itm.addEventListener('mouseenter', () => {
    //     gsap.to(itm.querySelector('.btnOne', {
    //       y: '100%'
    //     }))
    //   })
    // })


    const elScroll = document.querySelectorAll('.discover .absoScroll')



    elScroll.forEach((itm) => {
      gsap.to(itm.querySelectorAll('.scrollItem'), {
        y: '-300px',
        stagger: 0.1,
        delay: 0.5,
        scrollTrigger: {
          trigger: '.discover',
          top: 'top 30%',
          end: 'bottom',
          scrub: 1,
        }
      })

    })

  }, [])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to('.contact .overlayImg', {
      top: '-30%',
      ease: 'power4.out',
      delay: 0.5,
      scrollTrigger: {
        trigger: '.contact',
        top: 'top 80%',
        end: 'bottom',
        scrub: 2,
      }
    })


  }, [])



  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to('.overLayText .textItem', {
      y: '-200px',
      delay: 0.5,
      scrollTrigger: {
        trigger: '.overLayText ',
        top: 'top 80%',
        end: 'bottom',
        scrub: 2,
      }
    })
    gsap.to('.overLayText .textItem span', {
      y: 0,
      delay: 0.8,
      stagger: 0.3,
      scrollTrigger: {
        trigger: '.overLayText ',
        start: 'center 100%',
        end: 'bottom',
      }
    })



  }, [])


  const [imgCon, setIMGcon] = useState(null)
  useEffect(() => {
    const imageItems = document.querySelectorAll('.awardsCon .awardItem');

    imageItems.forEach((itm, index) => {
      itm.addEventListener('mouseover', () => {
        if (window.innerWidth <= 768) {
          gsap.to('.awardsCon .imageItem', {
            maxHeight: '200px',
            ease: 'power4.inOut',
            duration: 1,
          });
          if (imageItems.length > 0) {
            switch (index) {
              case 0:
                setIMGcon(ReactCert);
                break;
              case 1:
                setIMGcon(jsCert);
                break;
              case 2:
                setIMGcon(htmlCert);
                break;
              case 3:
                setIMGcon(cssCert);
                break;
              default:
                setIMGcon(null);
                break;
            }
          }
        } else {
          gsap.to('.awardsCon .imageItem', {
            maxHeight: '500px',
            ease: 'power4.inOut',
            duration: 1,
          });
          if (imageItems.length > 0) {
            switch (index) {
              case 0:
                setIMGcon(ReactCert);
                break;
              case 1:
                setIMGcon(jsCert);
                break;
              case 2:
                setIMGcon(htmlCert);
                break;
              case 3:
                setIMGcon(cssCert);
                break;
              default:
                setIMGcon(null);
                break;
            }
          }
        }
      });


      itm.addEventListener('mouseleave', () => {
        gsap.to('.awardsCon .imageItem', {
          maxHeight: '0px',
          ease: 'power4.inOut',
          duration: 1,
        });
      });

    });


    // Set the image source based on the index

  }, []);


  useEffect(() => {

    
    document.querySelector('.emailText').addEventListener('mouseenter', () => {
        gsap.to('.absoLineCon .lines', {
          width: '0%',
          ease: 'power4.Out', // easing function for smooth animation
          duration: 0.5 ,// animation duration in seconds
          transformOrigin: 'right' // set the transform origin to left
        })
        gsap.to('.absoLineCon .linez', {
          width: '100%',
          ease: 'power4.Out',
          delay: .5, // easing function for smooth animation
          duration: 0.5 ,// animation duration in seconds
          transformOrigin: 'right' // set the transform origin to left
        })
        gsap.to('.customCur', {
          scale: 1,
          opacity: 1,
          duration: .5,
          ease: 'power4.Out', // easing function for smooth animati
        })
    })

    document.querySelector('.emailText').addEventListener('mouseleave', () => {
      gsap.to('.absoLineCon .lines', {
        width: '0%'
      })
      gsap.to('.absoLineCon .linez', {
        width: '100%',
        ease: 'power4.Out',
        delay: 1, // easing function for smooth animation

      })
      gsap.to('.customCur', {
        scale: 0,
        opacity: 0,
        duration: .5,
        ease: 'power4.Out', // easing function for smooth animati
      })
      
  })
  }, [])

  return (
    <div className='Homepage'>

      <div className="loader">
        <div className="secLoader">
        </div>
        <div className="percent">
          <span>{percent}%</span>
          <span className='secSpan'>WELCOME</span>
        </div>
      </div>

      <div className="custom-cursor">VIEW PROJECT</div>
      <div className="firstContent">
        <Header />

        <div className="bigImage">
          <img src={selfPic} alt="" />
          <ImageBlocks />
          <div className="headerContent">
            <div className="firstHeader">
              <div className="headerItem"> <div className="goUp">Based in Quezon City, PH</div></div>
              <div className="headerItem"><div className="goUp">(©2024)</div></div>
              <div className="headerItem">
                <div className="goUp">
                  SCROLL DOWN <span className='getRotated'><ion-icon name="arrow-forward-outline"></ion-icon></span>

                </div>
              </div>
            </div>
            <div className="secHeader">
              <span>SOFTWARE </span><span>-</span><span> DEVELOPER</span>
            </div>
            <div className="thirdHeader">
              <div className="goUp">
                & DESIGNER
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about">
        <div className="textSide">
          <div className="line"></div>
          <div className="firstText stagg">
            <span>(MY STORY)</span>
            <span>01</span>
          </div>
          <Marquee autoFill >
            <div className="items ">
              - ABOUT ME
            </div>

          </Marquee>
          <div className="desc stagg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis pariatur repellat sint, eligendi ipsam ipsa, eius veritatis consequatur consectetur laboriosam non dicta quasi omnis inventore eaque doloribus! Atque, odit officiis?
          </div>
          <button className='stagg'>
            <span className='FirstHover'>MORE ABOUT ME <ion-icon name="paper-plane-outline"></ion-icon></span>
            <span className='SecHover'>MORE ABOUT ME <ion-icon name="paper-plane-outline"></ion-icon></span>
          </button>
        </div>

        <div className="imgCon stagg">
          <ImageBlocks />
          <img src={selfPic} alt="" />
        </div>
      </div>

      <div className="mission">
        <div className="descs">
          <div className="itemDesc stagge">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, dicta similique obcaecati deleniti molestiae explicabo temporibus ducimus ad fugiat, eos itaque nobis, dolores suscipit quis dignissimos aperiam vero minus mollitia.
          </div>
          <div className="itemDesc stagge">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, dicta similique obcaecati deleniti molestiae explicabo temporibus ducimus ad fugiat, eos itaque nobis, dolores suscipit quis dignissimos aperiam vero minus mollitia.
          </div>
        </div>
        <div className="line"></div>
        <div className="imgCon">
          <img src={BrutalismPic} alt="" />
          <div className="overlay">
            <div className="overText">
              <span>DESIGN</span>
            </div>
            <div className="overText">
              <span>DEVELOP</span>
            </div>
            <div className="overText">
              <span>REBUILD</span>
            </div>
          </div>
        </div>
        <div className="textCon">
          <div className="firstCon">
            <div className="line"></div>
            <div className="firstHeader">
              <span className='stagger'>(MY MISSION)</span>
              <span className='stagger'>02</span>
            </div>
          </div>
          <div className="desc">
            <div className="itemDesc stagger">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, dicta similique obcaecati deleniti molestiae explicabo temporibus ducimus ad fugiat, eos itaque nobis, dolores suscipit quis dignissimos aperiam vero minus mollitia.
            </div>
            <div className="itemDesc stagger">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, dicta similique obcaecati deleniti molestiae explicabo temporibus ducimus ad fugiat, eos itaque nobis, dolores suscipit quis dignissimos aperiam vero minus mollitia.
            </div>
          </div>
        </div>
      </div>


      <div className="expertise">
        <div className="line"></div>
        <div className="firstCon stggr">
          <span>(SERVICES)</span>
          <span>03</span>
        </div>
        <div className="marqCon" ref={marqs}>
          <Marquee autoFill>
            <span className="marqItem">
              -  EXPERTISE
            </span>
          </Marquee>
        </div>
        <div className="servicesCon">

          <div className="serviceItem">
            <div className="line"></div>
            <div className="content">
              <div className="num">
                01.
              </div>
              <div className="midContent">
                <div className="title">
                  DEVELOPMENT
                </div>
                <div className="desc">
                  Aut ea consectetur deserunt, explicabo dolorem, quam voluptates saepe, impedit nobis modi ullam ducimus dignissimos non. Asperiores dolorem culpa enim maiores ea?
                </div>
              </div>
              <div className="icon">
                <ion-icon name="code-slash-outline"></ion-icon>
              </div>
            </div>
            <div className="line lineTwo"></div>
          </div>


          <div className="serviceItem">

            <div className="content">
              <div className="num">
                02.
              </div>
              <div className="midContent">
                <div className="title">
                  UI/UX DESIGN
                </div>
                <div className="desc">
                  Aut ea consectetur deserunt, explicabo dolorem, quam voluptates saepe, impedit nobis modi ullam ducimus dignissimos non. Asperiores dolorem culpa enim maiores ea?
                </div>
              </div>
              <div className="icon">
                <ion-icon name="brush-outline"></ion-icon>
              </div>
            </div>
            <div className="line"></div>
          </div>


          <div className="serviceItem">

            <div className="content">
              <div className="num">
                03.
              </div>
              <div className="midContent">
                <div className="title">
                  MOTION DESIGN
                </div>
                <div className="desc">
                  Aut ea consectetur deserunt, explicabo dolorem, quam voluptates saepe, impedit nobis modi ullam ducimus dignissimos non. Asperiores dolorem culpa enim maiores ea?
                </div>
              </div>
              <div className="icon">
                <ion-icon name="tv-outline"></ion-icon>
              </div>
            </div>
            <div className="line"></div>
          </div>


          <div className="serviceItem">

            <div className="content">
              <div className="num">
                04.
              </div>
              <div className="midContent">
                <div className="title">
                  BRANDING
                </div>
                <div className="desc">
                  Aut ea consectetur deserunt, explicabo dolorem, quam voluptates saepe, impedit nobis modi ullam ducimus dignissimos non. Asperiores dolorem culpa enim maiores ea?
                </div>
              </div>
              <div className="icon">
                <ion-icon name="code-slash-outline"></ion-icon>
              </div>
            </div>
            <div className="line"></div>
          </div>


        </div>
      </div>




      <div className="works">

        <div className="line"></div>
        <div className="firstHeader">
          <span className='isVisi' >(WORKS)</span>
          <span className='isVisi'>04</span>
        </div>

        <div className="secHeader">
          <div className="content">
            <div className="icon isVisi">
              <ion-icon name="arrow-down-outline"></ion-icon>
            </div>
            <div className="innerContent">
              <div className="title">
                <span className='isVisi'>SELECTED WORK</span>
                <span className='isVisi'>©2021 — 2024</span>
              </div>
              <div className="desc isVisi">
                Here, you'll find a curated collection of our finest work, showcasing our expertise in web design, branding, animation, and more. Each project is a testament to our passion for creativity and innovation. Take a glimpse into what we do best and discover how we can transform your ideas into compelling digital experiences. Let our portfolio inspire your next project.
              </div>
            </div>
          </div>
        </div>

        <div className="lines"></div>


        <div className="outerProjCon">
          <div className="projectContainer">
            <div className="textSide">
              <div className="firstHeader">
                <span>©2024</span>
                <div className="services">
                  <div className="serviceItm">
                    DEVELOPMENT
                  </div>
                  <div className="serviceItm">
                    UI/UX DESIGN
                  </div>
                  <div className="serviceItm">
                    MOTION DESIGN
                  </div>
                </div>
              </div>
              <div className="sliderTitle">
                CAFE EUNOIA
              </div>
            </div>
            <div className="pictureContainer">
              <img src={cafeEunoia} alt="" />
              <ImageBlocks />
            </div>
          </div>

          <div className="line"></div>
          <div className="projectContainer">
            <div className="textSide">
              <div className="firstHeader">
                <span>©2024</span>
                <div className="services">
                  <div className="serviceItm">
                    DEVELOPMENT
                  </div>
                  <div className="serviceItm">
                    UI/UX DESIGN
                  </div>
                  <div className="serviceItm">
                    MOTION DESIGN
                  </div>
                </div>
              </div>
              <div className="sliderTitle">
                PCUP - GOV
              </div>
            </div>

            <div className="pictureContainer">
              <img src={pcup} alt="" />
              <ImageBlocks />
            </div>
          </div>

          <div className="line"></div>
          <div className="projectContainer">
            <div className="textSide">
              <div className="firstHeader">
                <span>©2024</span>
                <div className="services">
                  <div className="serviceItm">
                    DEVELOPMENT
                  </div>
                  <div className="serviceItm">
                    UI/UX DESIGN
                  </div>
                  <div className="serviceItm">
                    MOTION DESIGN
                  </div>
                </div>
              </div>
              <div className="sliderTitle">
                ULCTELESALES
              </div>
            </div>

            <div className="pictureContainer">
              <img src={ULCTELE} alt="" />
              <ImageBlocks />
            </div>
          </div>

          <div className="line"></div>
          <div className="projectContainer">
            <div className="textSide">
              <div className="firstHeader">
                <span>©2024</span>
                <div className="services">
                  <div className="serviceItm">
                    DEVELOPMENT
                  </div>
                  <div className="serviceItm">
                    UI/UX DESIGN
                  </div>
                  <div className="serviceItm">
                    MOTION DESIGN
                  </div>
                </div>
              </div>
              <div className="sliderTitle">
                M.RIRI WRS
              </div>
            </div>

            <div className="pictureContainer">
              <img src={ririWater} alt="" />
              <ImageBlocks />
            </div>
          </div>

          <div className="line"></div>
          <div className="projectContainer">
            <div className="textSide">
              <div className="firstHeader">
                <span>©2024</span>
                <div className="services">
                  <div className="serviceItm">
                    DEVELOPMENT
                  </div>
                  <div className="serviceItm">
                    UI/UX DESIGN
                  </div>
                  <div className="serviceItm">
                    MOTION DESIGN
                  </div>
                </div>
              </div>
              <div className="sliderTitle">
                CHAAT AI
              </div>
            </div>

            <div className="pictureContainer">
              <img src={Chaat} alt="" />
              <ImageBlocks />
            </div>
          </div>
        </div>
      </div>

      <div className="seeProj">
        <div className="line"></div>
        <div className="btnCon">
          <button>
            <span className='seeAllHoverOne'>
              SEE ALL PROJECTS <ion-icon name="color-wand-outline"></ion-icon>
            </span>
            <span className='seeAllHoverTwo'>
              SEE ALL PROJECTS <ion-icon name="color-wand-outline"></ion-icon>
            </span>
          </button>
        </div>
      </div>


      <div className="discover">
        <div className="absoScroll">
          <div className="scrollItem scrollOne">
            <div className="imageCon">
              <img src={cafeEunoia} alt="" />
            </div>
            <div className="imageCon">
              <img src={ULCTELE} alt="" />
            </div>
            <div className="imageCon">
              <img src={cafeEunoia} alt="" />
            </div>
            <div className="imageCon">
              <img src={ULCTELE} alt="" />
            </div>
            <div className="imageCon">
              <img src={cafeEunoia} alt="" />
            </div>
            <div className="imageCon">
              <img src={ULCTELE} alt="" />
            </div>
          </div>
          <div className="scrollItem scrollTwo">
            <div className="imageCon">
              <img src={pcup} alt="" />
            </div>
            <div className="imageCon">
              <img src={pcup} alt="" />
            </div>
            <div className="imageCon">
              <img src={pcup} alt="" />
            </div>
            <div className="imageCon">
              <img src={pcup} alt="" />
            </div>
            <div className="imageCon">
              <img src={pcup} alt="" />
            </div>
            <div className="imageCon">
              <img src={pcup} alt="" />
            </div>
          </div>
        </div>
        <div className="name">
          LET'S DO THIS!
        </div>
        <div className="textCon">
          <div className="details">
            <div className="title">
              INTERESTED?
            </div>
            <div className="desc">
              Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Eum, culpa asperiores
              hic fugiat voluptas fuga.
            </div>
            <button className='hovButtonName'>
              <span className='btnOne'>DOWNLOAD CV</span>
              <span className='btnTwo'>DOWNLOAD CV</span>
            </button>
          </div>
        </div>
      </div>


      <div className="design">
        <div className="bigImg">
          <img src={brutalistTwo} alt="" />
          <ImageBlocks />
        </div>
        <div className="firstCon">
          <div className="line"></div>
          <div className="firstHeader">
            <span>(STYLE)</span>
            <span>06</span>
          </div>
        </div>
        <div className="overLayText">
          <div className="textItem">
            <span>I CREATE</span>
          </div>
          <div className="textItem">
            <span>UNSEEN DESIGN</span>
          </div>
          <div className="textItem">
            <span>WITH A TASTE</span>
          </div>
          <div className="textItem">
            <span>OF DEJA-VU.</span>
          </div>
        </div>
      </div>


      <div className="awards">
        <div className="line"></div>
        <div className="firstHeader">
          <span>AWARDS</span><span>07</span>
        </div>
        <div className="title">
          MY RECENT CERTIFICATIONS
        </div>

        <div className="awardsCon">
          <div className="imageCon">
            <div className="imageItem">
              {imgCon && <img src={imgCon} alt="" />}
            </div>
          </div>
          <div className="line"></div>
          <div className="awardItem">
            <div className="where">
              GREAT <br />
              LEARNING
            </div>
            <div className="language">
              <ion-icon name="logo-react"></ion-icon>  REACT
            </div>
            <div className="date">
              JAN 6, 2023
            </div>
          </div>
          <div className="line"></div>
          <div className="awardItem">
            <div className="where">
              GREAT <br />
              LEARNING
            </div>
            <div className="language">
              <ion-icon name="logo-javascript"></ion-icon>  JAVASCRIPT
            </div>
            <div className="date">
              JAN 6, 2023
            </div>
          </div>
          <div className="line"></div>
          <div className="awardItem">
            <div className="where">
              GREAT <br />
              LEARNING
            </div>
            <div className="language">
              <ion-icon name="logo-html5"></ion-icon> HTML
            </div>
            <div className="date">
              JAN 6, 2023
            </div>
          </div>
          <div className="line"></div>
          <div className="awardItem">
            <div className="where">
              GREAT <br />
              LEARNING
            </div>
            <div className="language">
              <ion-icon name="logo-css3"></ion-icon> CSS
            </div>
            <div className="date">
              JAN 6, 2023
            </div>
          </div>
          <div className="line"></div>
        </div>
      </div>

      <div className="contact">
        <div className="line"></div>
        <div className="firstHeader">
          <span>(CONTACT)</span>
          <span>08</span>
        </div>

        <div className="textCon">
          <div className="firstText">
            WANT TO WORK TOGETHER?
          </div>
          <div className="secText">
            SAY HI!
          </div>
          <div className="emailText">
            <div className="text">
            MARCUSSALOPASO1@GMAIL.COM
            </div>
            <div className="customCur">
              MESSAGE ME! <ion-icon name="mail-outline"></ion-icon>
            </div>
            <div className="absoLineCon">
                <div className="lines"></div>
                <div className="lines linez"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="firstCon">
          <div className="items">
            <img src="https://assets-global.website-files.com/6596aca1a31aa73c7b252db2/65ba48b203903b8029e5b0f1_arrow-up-white.svg" alt="" />
          </div>
          <div className="items socials">
            <div className="socialItem">
              <ion-icon name="logo-facebook"></ion-icon> FACEBOOK
            </div>
            <div className="socialItem">
              <ion-icon name="logo-instagram"></ion-icon> INSTAGRAM
            </div>
            <div className="socialItem">
              <ion-icon name="logo-tiktok"></ion-icon> TIKTOK
            </div>
            <div className="socialItem">
              <ion-icon name="logo-github"></ion-icon> GITHUB
            </div>
          </div>
          <div className="items lowerHeader">
            <div className="lowerItem">HOME</div>
            <div className="lowerItem">ABOUT</div>
            <div className="lowerItem">SERVICES</div>
            <div className="lowerItem">WORKS</div>
            <div className="lowerItem">CONTACTS</div>
          </div>
        </div>
        <div className="secCon">
          <div className="name secItem">
            <div className="nameItem">       MARCUS <br />
              SALOPASO</div>
            <div className="c">
            ©2024
            </div>
          </div>
          <div className="desc secItem">
            <div className="descItem">
              DESIGNED BY MARCUS AND
            </div>
            <div className="descItem">
              DEVELOPED BY MARCUS
            </div>
          </div>
        </div>
      </div>

        <div className="music">
            <div className="text">
              SOUND <span>OFF</span>
            </div>
        </div>
    </div>
  )
}

export default Homepage
