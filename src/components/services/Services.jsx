import React, { useState } from "react";
import "./services.css";

const Services = () => {
	const [toggle, setToggle] = useState(0);
	const toggleTab = (index) => {
		setToggle(index);
	};

	return (
		<section className="services section" id="services">
			<h2 className="section__title">Projects</h2>
			<span className="section__subtitle">
				My learnings and implementation of knowledge I have
			</span>

			<div className="services__container container grid">
				<div className="services__content">
					<div>
						<i className="uil uil-web-grid services__icon"></i>
						<h3 className="services__title">
							Service <br />1
						</h3>
					</div>
					<span className="services__button " onClick={() => toggleTab(1)}>
						View More
						<i className="uil uil-arrow-right services__button-icon"></i>
					</span>
					<div
						className={
							toggle === 1
								? "services__modal active-modal"
								: "services__modal"
						}
					>
						<div className="services__modal-content">
							<i
								onClick={() => toggleTab(0)}
								className="uil uil-times services__modal-close"
							></i>

							<h3 className="services__modal-title">Service 1</h3>
							<p className="services__modal-description">
								TODO: Add description about the service and how it can
								help the user, also mention experience and skills with
								trust.
							</p>

							<ul className="services__modal-services grid">
								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">
										TOFO: name service / what I do
									</p>
								</li>

								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">
										TOFO: name service / what I do
									</p>
								</li>

								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">
										TOFO: name service / what I do
									</p>
								</li>

								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">
										TOFO: name service / what I do
									</p>
								</li>

								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">
										TOFO: name service / what I do
									</p>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="services__content">
					<div>
						<i className="uil uil-arrow services__icon"></i>
						<h3 className="services__title">
							Service <br />2
						</h3>
					</div>
					<span className="services__button" onClick={() => toggleTab(2)}>
						View More
						<i className="uil uil-arrow-right services__button-icon"></i>
					</span>
					<div
						className={
							toggle === 2
								? "services__modal active-modal"
								: "services__modal"
						}
					>
						<div className="services__modal-content">
							<i
								onClick={() => toggleTab(0)}
								className="uil uil-times services__modal-close"
							></i>

							<h3 className="services__modal-title">Service 2</h3>
							<p className="services__modal-description">
								TODO: Add description about the service and how it can
								help the user, also mention experience and skills with
								trust.
							</p>

							<ul className="services__modal-services grid">
								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">
										TOFO: name service / what I do
									</p>
								</li>

								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">
										TOFO: name service / what I do
									</p>
								</li>

								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">
										TOFO: name service / what I do
									</p>
								</li>

								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">
										TOFO: name service / what I do
									</p>
								</li>

								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">
										TOFO: name service / what I do
									</p>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="services__content">
					<div>
						<i className="uil uil-edit services__icon"></i>
						<h3 className="services__title">
							Service <br />3
						</h3>
					</div>
					<span className="services__button" onClick={() => toggleTab(3)}>
						View More
						<i className="uil uil-arrow-right services__button-icon"></i>
					</span>
					<div
						className={
							toggle === 3
								? "services__modal active-modal"
								: "services__modal"
						}
					>
						<div className="services__modal-content">
							<i
								onClick={() => toggleTab(0)}
								className="uil uil-times services__modal-close"
							></i>

							<h3 className="services__modal-title">Service 3</h3>
							<p className="services__modal-description">
								TODO: Add description about the service and how it can
								help the user, also mention experience and skills with
								trust.
							</p>

							<ul className="services__modal-services grid">
								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">
										TOFO: name service / what I do
									</p>
								</li>

								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">
										TOFO: name service / what I do
									</p>
								</li>

								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">
										TOFO: name service / what I do
									</p>
								</li>

								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">
										TOFO: name service / what I do
									</p>
								</li>

								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">
										TOFO: name service / what I do
									</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
