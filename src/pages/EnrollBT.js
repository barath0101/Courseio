import React from 'react';
import './EnrollPage.css';

const lectures = [
    {
        title: 'Lecture 01: Introduction to Building Technology',
        videoId: 'your_youtube_video_id_1',
        description: 'An overview of building technology, including the basic principles, materials, and methods used in construction.'
    },
    {
        title: 'Lecture 02: Building Materials and Their Properties',
        videoId: 'your_youtube_video_id_2',
        description: 'A detailed study of various building materials, their properties, and applications in construction projects.'
    },
    {
        title: 'Lecture 03: Structural Systems in Buildings',
        videoId: 'your_youtube_video_id_3',
        description: 'An exploration of different structural systems, including load-bearing walls, frames, and the factors influencing structural integrity.'
    },
    {
        title: 'Lecture 04: Sustainable Building Technologies',
        videoId: 'your_youtube_video_id_4',
        description: 'Learn about sustainable building practices, including energy-efficient materials and eco-friendly construction techniques.'
    },
    {
        title: 'Lecture 05: Advanced Construction Techniques',
        videoId: 'your_youtube_video_id_5',
        description: 'A deep dive into advanced construction methods, such as prefabrication, modular construction, and the use of cutting-edge technologies.'
    },
    {
        title: 'Lecture 06: Building Information Modeling (BIM)',
        videoId: 'your_youtube_video_id_6',
        description: 'An introduction to Building Information Modeling (BIM) and how it is revolutionizing the construction industry.'
    },
    {
        title: 'Lecture 07: Smart Buildings and Automation',
        videoId: 'your_youtube_video_id_7',
        description: 'Explore the integration of smart technologies in buildings, including automation systems, IoT, and smart energy management.'
    },
    {
        title: 'Lecture 08: Future Trends in Building Technology',
        videoId: 'your_youtube_video_id_8',
        description: 'A look at the future of building technology, covering trends like 3D printing, sustainable architecture, and the role of AI in construction.'
    },
];

class EnrollBT extends React.Component {
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

export default EnrollBT;
