import React, { useRef } from 'react';
import './Testimonials.css';
import nextBtn from '../../assets/nextBtn.png';
import backBtn from '../../assets/backBtn.png';
import user_1 from '../../assets/user1.png';
import user_2 from '../../assets/user2.png';
import user_3 from '../../assets/user3.png';
import user_4 from '../../assets/user4.png';

const Testimonials = () => {
    const slider = useRef(null); 
    let tx = 0;

    const slideForward = () => {
        if (tx > -75) {
            tx -= 25;
        }
        if (slider.current) {
            slider.current.style.transform = `translateX(${tx}%)`;
        }
    };

    const slideBackward = () => {
        if (tx < 0) {
            tx += 25;
        }
        if (slider.current) {
            slider.current.style.transform = `translateX(${tx}%)`;
        }
    };

    return (
        <div className='testimonials'>
            <img src={nextBtn} alt="nextBtn" className='next-btn' onClick={slideForward} />
            <img src={backBtn} alt="backBtn" className='back-btn' onClick={slideBackward} />
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="" />
                                <div>
                                    <h3>William Jackson 1</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem cumque voluptatibus omnis asperiores doloribus sit unde eius atque culpa, quidem laudantium. Tempora, dolore!</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt="" />
                                <div>
                                    <h3>William Jackson 2</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem cumque voluptatibus omnis asperiores doloribus sit unde eius atque culpa, quidem laudantium. Tempora, dolore!</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt="" />
                                <div>
                                    <h3>William Jackson 3</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem cumque voluptatibus omnis asperiores doloribus sit unde eius atque culpa, quidem laudantium. Tempora, dolore!</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt="" />
                                <div>
                                    <h3>William Jackson 4</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem cumque voluptatibus omnis asperiores doloribus sit unde eius atque culpa, quidem laudantium. Tempora, dolore!</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Testimonials;
