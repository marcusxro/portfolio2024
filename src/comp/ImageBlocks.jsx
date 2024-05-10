import React, { useEffect } from 'react'
import gsap from 'gsap'
const ImageBlocks = () => {

  useEffect(() => {
    const blocks = document.getElementsByClassName('blocks');
    const resDur = 300
    for (let i = 0; i < blocks.length; i++) {
      let timeoutId;

      blocks[i].addEventListener('mouseenter', () => {
        clearTimeout(timeoutId);
          gsap.to(blocks[i], {
            backgroundColor: "black",
            opacity: .6,
          })
          timeoutId = setTimeout(() => {
            gsap.to(blocks[i], {
              backgroundColor: "transparent",
              opacity: 0,
            })
          }, resDur)
      });
    }
  }, []);


  return (
    <div className="imageBlocks">
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
      
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
          </div>
  )
}

export default ImageBlocks
