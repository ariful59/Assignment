export default function About() {

    return (
        <div>
            <div className="carousel w-full border-2 border-cyan-500">
                <div id="item1" className="carousel-item w-full">
                    <img src="/images/1.jpeg" className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src="/images/2.jpeg" className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src="/images/3.jpeg" className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src="/images/4.jpeg" className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
            <div>
                <h1 className={"flex flex-row item-center justify-center text-3xl mt-5 mb-5 font-bold"}>History</h1>
                <p className={"px-8 mb-5"}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            </div>
        </div>
    );
}

