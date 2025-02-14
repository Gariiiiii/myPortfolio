import React from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';

const MyWork = () => {
    return (
        <div className="container mywork py-5" id="project-section">
            {/* Section Title */}
            <div className="text-center position-relative mb-5">
                <h1 className="fw-semibold px-3 fs-1">My Latest Portfolio</h1>
                <img src={theme_pattern} alt="Pattern" className="theme-pattern position-absolute bottom-0" />
            </div>

            {/* Portfolio Grid */}
            <div className="row g-4 mywork-img">
                {mywork_data.map((work, index) => (
                    <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                        <a href={work.w_link} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                            <div className="card project-card h-100 position-relative overflow-hidden">
                                <img src={work.w_img} className="card-img-top" alt={work.w_name} />
                                <div className="overlay position-absolute">
                                    <h5 className="fw-bold">{work.w_name}</h5>
                                    <p className="small">{work.w_desc}</p>
                                    <p className="tech-stack"><strong>Tech Stack:</strong> {work.w_stack}</p>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyWork;
