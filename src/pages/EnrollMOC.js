import React from 'react';
import './EnrollPage.css';

const lectures = [
    {
        title: 'Lecture 01: Introduction to Commerce',
        videoId: 'your_youtube_video_id_1',
        description: 'This lecture introduces the basic concepts of commerce, including trade, business, and economics, laying the foundation for advanced studies.'
    },
    {
        title: 'Lecture 02: Financial Accounting',
        videoId: 'your_youtube_video_id_2',
        description: 'Explore the principles of financial accounting, including the preparation and analysis of financial statements.'
    },
    {
        title: 'Lecture 03: Managerial Economics',
        videoId: 'your_youtube_video_id_3',
        description: 'An in-depth look at managerial economics, focusing on decision-making processes within businesses using economic theory and quantitative methods.'
    },
    {
        title: 'Lecture 04: Corporate Finance',
        videoId: 'your_youtube_video_id_4',
        description: 'Learn about corporate finance, including investment decisions, capital structure, and financial management strategies.'
    },
    {
        title: 'Lecture 05: Marketing Management',
        videoId: 'your_youtube_video_id_5',
        description: 'Understand the concepts of marketing management, including market research, consumer behavior, and strategic marketing planning.'
    },
    {
        title: 'Lecture 06: Business Law',
        videoId: 'your_youtube_video_id_6',
        description: 'Explore the legal aspects of business, including contracts, company law, and regulatory compliance in commerce.'
    },
    {
        title: 'Lecture 07: Advanced Financial Management',
        videoId: 'your_youtube_video_id_7',
        description: 'A detailed study of advanced financial management techniques, including risk management, portfolio theory, and international finance.'
    },
    {
        title: 'Lecture 08: International Business',
        videoId: 'your_youtube_video_id_8',
        description: 'This lecture covers the complexities of international business, focusing on global trade, foreign exchange markets, and multinational corporations.'
    },
];

class EnrollMOC extends React.Component {
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

export default EnrollMOC;
