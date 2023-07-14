import React from "react";
import "./projects.css";

const Projects = ({ title, imageUrl, body }) => {
	return (
		<section className="projects section" id="projects">
			<h2 className="section__title">Projects</h2>
			<span className="section__subtitle">
				My learnings and implementation of knowledge I have
                    
			</span>

			<div className="projects__container container grid">
				<div className="img__container">
					<img src={imageUrl} alt="" />
				</div>
				<div className="card__content">
					<div className="project__title">
						<h3>{title}</h3>
					</div>
					<div className="project__body">
						<p>{body}</p>
					</div>
				</div>
				<div className="project__links">
					<button>
						<a className="project__link" href="">Github</a>
					</button>
					<button>
						<a className="project__link" href="">Live</a>
					</button>
				</div>
			</div>
		</section>
	);
};

export default Projects;
