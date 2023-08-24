const Hero = () => {
    return (
            <div className="hero min-h-screen bg-gradient-to-r from-cyan-100 to-blue-100">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="/images/background.jpg" className="max-w-sm h-64 rounded-lg shadow-xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Software Engineer!</h1>
                        <p className="px-2 justify-left font-medium text-xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                        <button className="btn btn-primary">Download Resume</button>
                    </div>
                </div>
            </div>
    );
};

export default Hero;