import React from 'react';
import chirag from '../../assets/chirag.jpg';
import lakshay from '../../assets/lakshay.jpg';
import namit from '../../assets/nam.jpg';
import vardhan from '../../assets/vardhan.jpg';
import './Team.css';

const Team = () => {
    const teamlead = [
        { name: 'Vardhan Chawla', designation: 'CEO & FOUNDER', hoverImage:vardhan , linkedin: 'https://www.linkedin.com/in/vardan-chawla-671256176?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
        { name: 'Chirag Bhargava', designation: 'TECHNICAL HEAD', hoverImage:chirag , linkedin: 'https://www.linkedin.com/in/chirag-bhargava-b636a0229/' },
    ];

    const specialThanks = [
        { name: 'Namit Goyal', designation: 'Website Developer', hoverImage:namit , linkedin: 'https://www.linkedin.com/in/namit-goyal-743315227/' },
        { name: 'Lakshay Bansal', designation: 'Website Developer', hoverImage:lakshay , linkedin: 'https://www.linkedin.com/in/lakshay-bansal-2b51a4227?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    ];

    return (
        <div className='t-wrapper'>
            <h2 className='t-heading'>Leadership</h2>
            <div className='t-members'>
                {teamlead.map((member, index) => (
                    <div key={index} className='t-member'>
                        <div className='t-container'>
                            <img src={member.hoverImage} alt={member.name} />
                        </div>
                        <div className='t-info'>
                            <a href={member.linkedin} target='_blank' rel='noopener noreferrer' className='t-name'>
                                {member.name}
                            </a>
                            <div className='t-designation'>{member.designation}</div>
                        </div>
                    </div>
                ))}
            </div>
            
            <h2 className='t-heading'>Special Thanks</h2>
            <div className='t-members'>
                {specialThanks.map((member, index) => (
                    <div key={index} className='t-member'>
                        <div className='t-container'>
                            <img src={member.hoverImage} alt={member.name} />
                        </div>
                        <div className='t-info'>
                            <a href={member.linkedin} target='_blank' rel='noopener noreferrer' className='t-name'>
                                {member.name}
                            </a>
                            <div className='t-designation'>{member.designation}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Team;
