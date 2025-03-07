import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Portfolio = () => {
	return (
		<div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
			<div className="flex justify-around max-w-5xl w-full max-md:flex-col-reverse items-center">
				<div className="text-center">
					<p className="text-4xl text-left">👋</p>
					<h2 className="font-extrabold text-5xl max-md:text-3xl">Hello, I am Serhii Zavadskyi</h2>
					<p className="mt-2 min-md:text-3xl"> Software engineer | Frontend Developer</p>
					<section className="w-full mt-6 text-center">
						<div className="flex justify-center space-x-4">
							<a
								href="https://github.com/SerhiiZavadskyi"
								className="text-gray-700 text-2xl"
								target="blank"
							>
								<FaGithub />
							</a>
							<a
								href="http://linkedin.com/in/serhiizavadskyi"
								className="text-blue-700 text-2xl"
								target="blank"
							>
								<FaLinkedin />
							</a>
							<a href="mailto:serhii.zavadskti@gmail.com" className="text-red-600 text-2xl">
								<FaEnvelope />
							</a>
						</div>
					</section>
				</div>
				<div className="text-[160px]">👨‍💻</div>
			</div>
		</div>
	);
};

export default Portfolio;
