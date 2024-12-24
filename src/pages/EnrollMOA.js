import React from 'react';
import './EnrollPage.css';

const lectures = [
    {
        title: 'Lecture 01: Introduction to Architecture',
        videoId: 'your_youtube_video_id_1',
        description: 'An overview of the field of architecture, including its history, key concepts, and the role of architects in society.'
    },
    {
        title: 'Lecture 02: Architectural Design Principles',
        videoId: 'your_youtube_video_id_2',
        description: 'Learn the fundamental principles of architectural design, including space planning, form, and function.'
    },
    {
        title: 'Lecture 03: Building Materials and Methods',
        videoId: 'your_youtube_video_id_3',
        description: 'Explore various building materials and construction methods used in architectural design and their impact on building performance.'
    },
    {
        title: 'Lecture 04: Sustainable Architecture',
        videoId: 'your_youtube_video_id_4',
        description: 'Understand the principles of sustainable architecture, including energy efficiency, environmental impact, and green building practices.'
    },
    {
        title: 'Lecture 05: Advanced Architectural Design',
        videoId: 'your_youtube_video_id_5',
        description: 'Dive into advanced design techniques and concepts, including complex geometries, parametric design, and cutting-edge technologies.'
    },
    {
        title: 'Lecture 06: Urban Design and Planning',
        videoId: 'your_youtube_video_id_6',
        description: 'Study the principles of urban design and planning, including city layout, land use, and the integration of architecture with urban environments.'
    },
    {
        title: 'Lecture 07: Historical Architecture',
        videoId: 'your_youtube_video_id_7',
        description: 'Explore architectural styles and movements throughout history and their influence on contemporary architecture.'
    },
    {
        title: 'Lecture 08: Future Trends in Architecture',
        videoId: 'your_youtube_video_id_8',
        description: 'Examine emerging trends and innovations in architecture, including smart buildings, sustainable technologies, and future challenges.'
    },
];

class EnrollMOA extends React.Component {
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

export default EnrollMOA;
