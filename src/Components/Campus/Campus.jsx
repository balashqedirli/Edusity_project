import React from 'react'
import './Campus.css'
import galery_1 from '../../assets/gallery1.png'
import galery_2 from '../../assets/gallery2.png'
import galery_3 from '../../assets/gallery3.png'
import galery_4 from '../../assets/gallery4.png'
import RightBtn from '../../assets/rightButton.svg'

const Campus = () => {
  return (
    <div className='campus'>
        <div className="gallery">
            <img src={galery_1 }alt="gallery" />
            <img src={galery_2 }alt="gallery" />
            <img src={galery_3 }alt="gallery" />
            <img src={galery_4 }alt="gallery" />

        </div>
      <button className='btn dark-btn'>See more here <img src={RightBtn} alt="" /></button>
    </div>
  )
}

export default Campus
