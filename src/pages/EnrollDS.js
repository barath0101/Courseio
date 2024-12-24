import React from 'react';
import './EnrollPage.css';

const lectures = [
    {
        title: 'Lecture 01: Introduction to Data Science',
        videoId: 'pzo13OPXZS4',
        description: 'This lecture introduces the basics of data science, including the key concepts, tools, and methodologies used in the field.'
    },
    {
        title: 'Lecture 02: Data Wrangling and Cleaning',
        videoId: 'v7RvZiMUtt0',
        description: 'Learn the techniques for transforming raw data into a usable format, focusing on cleaning and preparing data for analysis.'
    },
    {
        title: 'Lecture 03: Exploratory Data Analysis',
        videoId: 'jp3zGX7wLwQ',
        description: 'Explore the methods for analyzing data sets to summarize their main characteristics, often with visual methods.'
    },
    {
        title: 'Lecture 04: Machine Learning Basics',
        videoId: 'PeMlggyqz0Y',
        description: 'An introduction to machine learning, including supervised and unsupervised learning, and how to build predictive models.'
    },
 
    {
        title: 'Lecture 05: Deep Learning and Neural Networks',
        videoId: 'aircAruvnKk',
        description: 'Learn the fundamentals of deep learning and how neural networks are used to solve complex data science problems.'
    },
    {
        title: 'Lecture 06: Data Visualization Techniques',
        videoId: 'dcRiRVh6neE',
        description: 'Master the art of data visualization, understanding how to present data insights through charts, graphs, and other visual tools.'
    },
    {
        title: 'Lecture 07: Big Data and Cloud Computing',
        videoId: 'bAyrObl7TYE',
        description: 'Explore the tools and technologies used to manage and analyze large data sets in cloud computing environments.'
    },
];

class EnrollDS extends React.Component {
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

export default EnrollDS;
