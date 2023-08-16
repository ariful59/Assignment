const Hero = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-600">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="/images/background.jpg" className="max-w-sm h-48 rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Software Engineer!</h1>
                        <p className="py-6">I have more than five (5) years of experience in the R&D industry and I work on health-tech applications. I am proficient in building smartwatch applications from scratch, designing, integrating APIs and implementing smartwatch’s internal APIs, building re-usable components, following scalable design models, logging, error handling. I love learning new technologies and I always try to stay updated.</p>
                        <button className="btn btn-primary">Download Resume</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;