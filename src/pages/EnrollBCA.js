import React from 'react';
import './EnrollPage.css';

const lectures = [
    {
        title: 'Lecture 01: Introduction to Computer Applications',
        videoId: 'CeaSZlnDC1w',
        description: 'An overview of computer applications, introducing the basics of computing, software, and hardware fundamentals.'
    },
    {
        title: 'Lecture 02: Database Management Systems',
        videoId: '6Iu45VZGQDk',
        description: 'Learn about database management systems (DBMS), including relational databases, SQL, and database design.'
    },
    {
        title: 'Lecture 03: Web Development Basics',
        videoId: '5YDVJaItmaY',
        description: 'An introduction to web development, covering HTML, CSS, JavaScript, and the basics of creating responsive websites.'
    },
    {
        title: 'Lecture 04: Data Structures and Algorithms',
        videoId: 's2mYsPWzLjg',
        description: 'This lecture dives into data structures and algorithms, essential for efficient problem-solving and programming.'
    },
    {
        title: 'Lecture 05: Software Engineering Principles',
        videoId: 'kF7rQmSRlq0',
        description: 'Understand the principles of software engineering, including software development life cycles, methodologies, and best practices.'
    },
    {
        title: 'Lecture 06: Computer Networks',
        videoId: 'keeqnciDVOo',
        description: 'Explore the fundamentals of computer networks, including network architecture, protocols, and security.'
    },
    {
        title: 'Lecture 07: Advanced Programming Concepts',
        videoId: 'KSiRzuSx120&list=PL7yh-TELLS1FuqLSjl5bgiQIEH25VEmIc',
        description: 'This lecture covers advanced programming concepts, including object-oriented programming, design patterns, and more.'
    },
];

class EnrollBCA extends React.Component {
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

export default EnrollBCA;
