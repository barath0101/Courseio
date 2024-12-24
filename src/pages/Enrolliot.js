import React from 'react';
import './EnrollPage.css';

const lectures = [
    {
        title: 'Lecture 01: Introduction to IoT',
        videoId: 'ps9ucSDH8s4',
        description: 'An introduction to the Internet of Things (IoT), exploring the basic concepts, architecture, and applications.'
    },
    {
        title: 'Lecture 02: IoT Communication Protocols',
        videoId: 'lSa3x2fApDc&list=PL5qVgQLbCu-NwgNMmfYHoJ4x8-lFiuNmj',
        description: 'An overview of communication protocols used in IoT, including MQTT, CoAP, and HTTP.'
    },
    {
        title: 'Lecture 03: IoT Hardware and Sensors',
        videoId: 'U_08E-xY1_4',
        description: 'A deep dive into the hardware components of IoT systems, focusing on sensors, actuators, and microcontrollers.'
    },
    {
        title: 'Lecture 04: IoT Security and Privacy',
        videoId: 'QKTxtrPudEQ',
        description: 'A discussion on the security challenges in IoT systems and best practices to ensure data privacy and integrity.'
    },
    {
        title: 'Lecture 05: IoT Cloud Platforms',
        videoId: 'z98nfFxk79M',
        description: 'Exploring various cloud platforms that support IoT applications, such as AWS IoT, Azure IoT, and Google Cloud IoT.'
    },
    {
        title: 'Lecture 06: Advanced IoT Applications',
        videoId: 'Yci9PfPppiw&list=PLgMDNELGJ1CZoUIF-iKcH9TSVcmG6IBcU',
        description: 'An exploration of advanced IoT applications, including smart cities, industrial IoT, and connected healthcare.'
    },
    {
        title: 'Lecture 07: IoT Data Analytics',
        videoId: '2BInsTPq698',
        description: 'Understanding how to analyze and interpret data generated by IoT devices using modern data analytics tools.'
    },
   
];

class Enrolliot extends React.Component {
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

export default Enrolliot;