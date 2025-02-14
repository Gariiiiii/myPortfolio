import React from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';

const MyWork = () => {
    return (
        <div className="container py-5 mywork" id="project-section">
            <div className="text-center position-relative mb-5">
                <h1 className="fw-semibold px-3 fs-1">My Latest Portfolio</h1>
                <img src={theme_pattern} alt="Pattern" className="theme-pattern bottom-0 position-absolute" />
            </div>
            <div className="row g-3">
                {mywork_data.map((work, index) => (
                    <div key={index} className="col-lg-4 col-md-6">
                        <a href={work.w_link} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                            <div className="card project-card h-100 position-relative overflow-hidden">
                                {/* Project Image */}
                                <img src={work.w_img} className="card-img-top" alt={work.w_name} />
                                
                                {/* Overlay with hover effect */}
                                <div className="overlay position-absolute">
                                    <h5 className="fw-bold text-white">{work.w_name}</h5>
                                    <p className="small text-white">{work.w_desc}</p>
                                    <p className="tech-stack text-white"><strong>Tech Stack:</strong> {work.w_stack}</p>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MyWork;
