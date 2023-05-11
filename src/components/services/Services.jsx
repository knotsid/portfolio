import React from "react";
import "./services.css";

const Services = () => {
	return (
		<section className="services section" id="services">
			<h2 className="section__title">Services</h2>
			<span className="section__subtitle">What I offer</span>

			<div className="services__container container grid">
				<div className="services__content">
					<div>
						<i className="uil uil-web-grid services__icon"></i>
						<h3 className="services__title">
							Service <br />1
						</h3>
					</div>
					<span className="services__button">
						View More
						<i className="uil uil-arrow-right services__button-icon"></i>
					</span>
					<div className="services__modal">
						<div className="services__modal-content">
							<i className="uil uil-times services__modal-close"></i>

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
					<span className="services__button">
						View More
						<i className="uil uil-arrow-right services__button-icon"></i>
					</span>
					<div className="services__modal">
						<div className="services__modal-content">
							<i className="uil uil-times services__modal-close"></i>

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
					<span className="services__button">
						View More
						<i className="uil uil-arrow-right services__button-icon"></i>
					</span>
					<div className="services__modal">
						<div className="services__modal-content">
							<i className="uil uil-times services__modal-close"></i>

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
