import React from 'react'
import './Programs.css'
import student_1 from '../../assets/student1.png'
import student_2 from '../../assets/student2.png'
import student_3 from '../../assets/student3.png'
import student_icon_1 from '../../assets/student_icon1.png'
import student_icon_2 from '../../assets/student_icon2.png'
import student_icon_3 from '../../assets/student_icon3.png'


const Programs = () => {
  return (
    
      <div className="programs">
        <div className="program">
            <img src={student_1} alt="student" />
            <div className="caption">
                <img src={student_icon_1} alt="icon" />
                <p>Gradutaion Degree</p>
            </div>
        </div>
        <div className="program">
            <img src={student_2} alt="student" />
            <div className="caption">
                <img src={student_icon_2} alt="icon" />
                <p>Masters Degree</p>
            </div>
        </div>
        <div className="program">
            <img src={student_3} alt="student" />
            <div className="caption">
                <img src={student_icon_3} alt="icon" />
                <p>Post Gradutaion</p>
            </div>
        </div>
      </div>
  
  )
}

export default Programs
