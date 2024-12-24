import React from 'react';
import './EnrollPage.css';

const lectures = [
    {
        title: 'Lecture 01: Introduction to Cybersecurity',
        videoId: 'ULGILG-ZhO0',
        description: 'An introduction to cybersecurity, covering fundamental concepts, the importance of cybersecurity, and the evolving threat landscape.'
    },
  
    {
        title: 'Lecture 02: Cryptography',
        videoId: 'C7vmouDOJYM&list=PLEiEAq2VkUULgKbiq9J4z517w8RV3-yJe',
        description: 'An overview of cryptography, focusing on the principles of encryption, decryption, and secure communication.'
    },
    {
        title: 'Lecture 03: Threats and Vulnerabilities',
        videoId: 'RRst_l9NYkg',
        description: 'Explore common cybersecurity threats and vulnerabilities, and learn how to identify and mitigate them effectively.'
    },
    {
        title: 'Lecture 04: Ethical Hacking and Penetration Testing',
        videoId: 'RWSqDF_6n4k',
        description: 'Understand the role of ethical hacking in cybersecurity and learn the basics of penetration testing to identify security weaknesses.'
    },
    {
        title: 'Lecture 05: Security Operations and Incident Response',
        videoId: 'IVXLbm1TKJQ',
        description: 'Learn about security operations, incident response, and how to handle security breaches effectively.'
    },
    {
        title: 'Lecture 06: Cybersecurity Laws and Regulations',
        videoId: '_nVq7f26-Uo',
        description: 'An overview of cybersecurity laws, regulations, and compliance requirements that organizations must adhere to.'
    },
    {
        title: 'Lecture 07: Advanced Cybersecurity Strategies',
        videoId: '6TE0LovKQa4',
        description: 'Explore advanced cybersecurity strategies, including threat intelligence, security automation, and the future of cybersecurity.'
    },
];

class EnrollCS extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLecture: lectures[0]
        };
    }

    selectLecture = (lecture) => {
        this.setState({ selectedLecture: lecture });
    }

    render() {
        return (
            <div className="enroll-container">
                <div className="course-outline">
                    <ul>
                        {lectures.map((lecture, index) => (
                            <li
                                key={index}
                                className={this.state.selectedLecture.title === lecture.title ? 'active' : ''}
                                onClick={() => this.selectLecture(lecture)}
                            >
                                {lecture.title}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="lecture-content">
                    <h2>{this.state.selectedLecture.title}</h2>
                    <div className="video-container">
                        <iframe
                            width="560"
                            height="315"
                            src={`https://www.youtube.com/embed/${this.state.selectedLecture.videoId}`}
                            title={this.state.selectedLecture.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <p>{this.state.selectedLecture.description}</p>
                </div>
            </div>
        );
    }
}

export default EnrollCS;
