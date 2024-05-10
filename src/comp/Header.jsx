import React, { useEffect } from 'react';
import gsap from 'gsap'
const Header = () => {

  useEffect(() => {
    const homes = document.querySelectorAll('.navItem');

    homes.forEach((home, index) => {
      home.addEventListener('mouseenter', () => {
        gsap.to(home.querySelector('.firstHover'), {
          y: '-200%',
          duration: 0.5,
          ease: 'power4.out',
        });
        gsap.to(home.querySelector('.secHover'), {
          y: '-110%',
          ease: 'power4.out',
          duration: 0.5,
        });
      });

      home.addEventListener('mouseleave', () => {
        gsap.to(home.querySelector('.firstHover'), {
          y: '0%',
          duration: 0.5,
          ease: 'power4.out',
        });
        gsap.to(home.querySelector('.secHover'), {
          y: '100%',
          ease: 'power4.out',
          duration: 0.5,
        });
      });

    });
  }, []);


  return (
    <header>
      <div className="logo">
        Marcus <span>DEV</span>
      </div>

      <div className="rightCon">
        <div className="navItem">
          <div class="firstHover">Home</div>
          <div class="secHover">Home</div>
        </div>
        <div className="navItem">
        <div class="firstHover">About</div>
          <div class="secHover">About</div>
        </div>
        <div className="navItem">
        <div class="firstHover">Services</div>
          <div class="secHover">Services</div>
        </div>
        <div className="navItem">
        <div class="firstHover">Works</div>
          <div class="secHover">Works</div>
        </div>
        <div className="navItem">
        <div class="firstHover">Contact</div>
          <div class="secHover">Contact</div>
        </div>
        <div className="navItem last">
          12:00pm
        </div>
      </div>
      <div className="menu">
        <div className="lines"></div>
        <div className="lines"></div>
      </div>
    </header>
  )
}

export default Header
