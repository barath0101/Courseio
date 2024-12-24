import React from 'react';
import './EnrollPage.css';

const lectures = [
    {
        title: 'Lecture 01: Introduction to Mathematics',
        videoId: 'your_youtube_video_id_1',
        description: 'An overview of basic mathematical concepts and principles that form the foundation for more advanced topics.'
    },
    {
        title: 'Lecture 02: Calculus I: Differentiation',
        videoId: 'your_youtube_video_id_2',
        description: 'An introduction to the concept of differentiation, covering limits, continuity, and the derivative.'
    },
    {
        title: 'Lecture 03: Calculus II: Integration',
        videoId: 'your_youtube_video_id_3',
        description: 'A deep dive into integration techniques, including definite and indefinite integrals, and their applications.'
    },
    {
        title: 'Lecture 04: Linear Algebra: Matrices and Vectors',
        videoId: 'your_youtube_video_id_4',
        description: 'Learn the fundamentals of linear algebra, focusing on matrices, vectors, and their operations.'
    },
    {
        title: 'Lecture 05: Abstract Algebra: Groups and Rings',
        videoId: 'your_youtube_video_id_5',
        description: 'An exploration of abstract algebraic structures, including groups, rings, and their properties.'
    },
    {
        title: 'Lecture 06: Probability and Statistics',
        videoId: 'your_youtube_video_id_6',
        description: 'An introduction to probability theory and statistical methods used in analyzing data and making predictions.'
    },
    {
        title: 'Lecture 07: Differential Equations',
        videoId: 'your_youtube_video_id_7',
        description: 'Study the methods for solving ordinary differential equations and their applications in various fields.'
    },
    {
        title: 'Lecture 08: Real Analysis',
        videoId: 'your_youtube_video_id_8',
        description: 'A rigorous examination of real numbers, sequences, series, and functions, providing the theoretical foundation for calculus.'
    },
    {
        title: 'Lecture 09: Complex Analysis',
        videoId: 'your_youtube_video_id_9',
        description: 'Explore the study of functions of a complex variable, including complex differentiation and integration.'
    },
    {
        title: 'Lecture 10: Advanced Topics in Mathematics',
        videoId: 'your_youtube_video_id_10',
        description: 'A look into advanced mathematical topics such as topology, number theory, and advanced calculus.'
    },
];

class EnrollBSC extends React.Component {
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

export default EnrollBSC;
