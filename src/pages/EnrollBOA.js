import React from 'react';
import './EnrollPage.css';

const lectures = [
    {
        title: 'Lecture 01: Introduction to Architecture',
        videoId: 'FJfEl6Jhqdk',
        description: 'An introduction to the field of architecture, exploring the history, principles, and key concepts that define the profession.'
    },
    {
        title: 'Lecture 02: Architectural Design Principles',
        videoId: 'wfIzvkjgInY',
        description: 'Learn about the fundamental design principles that guide architectural practices, including form, function, and aesthetics.'
    },
    {
        title: 'Lecture 03: Building Materials and Construction Techniques',
        videoId: 'a1cQcIJfjPw',
        description: 'An overview of the materials and techniques used in construction, and how they impact architectural design.'
    },
    {
        title: 'Lecture 04: Environmental and Sustainable Design',
        videoId: 'your_youtube_video_id_4',
        description: 'Explore sustainable design practices and how architects can create environmentally responsible structures.'
    },
    {
        title: 'Lecture 05: Advanced Architectural Design',
        videoId: 'your_youtube_video_id_5',
        description: 'A deep dive into advanced design concepts, including complex geometries, digital tools, and innovative architectural solutions.'
    },
    {
        title: 'Lecture 06: Urban Planning and Landscape Architecture',
        videoId: 'your_youtube_video_id_6',
        description: 'Learn about urban planning and landscape architecture, and how they integrate with building design in modern cities.'
    },
    {
        title: 'Lecture 07: Architectural Theory and Criticism',
        videoId: 'your_youtube_video_id_7',
        description: 'An exploration of architectural theory and criticism, examining the philosophical and cultural dimensions of architecture.'
    },
    {
        title: 'Lecture 08: Professional Practice and Ethics in Architecture',
        videoId: 'your_youtube_video_id_8',
        description: 'Understand the professional and ethical responsibilities of architects, including client relations, project management, and legal considerations.'
    },
];

class EnrollBOA extends React.Component {
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

export default EnrollBOA;
