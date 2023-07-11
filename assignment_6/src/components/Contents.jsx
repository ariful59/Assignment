import { useState } from "react";

const Body = () => {
    const [flag, setFlag] = useState(false);
    return (
        <div className="mt-10 mb-10 flex flex-col items-center justify-center">
            <button type="button" onClick={() => setFlag(!flag)} className=" bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full">
                Click Me
            </button>
            { flag && (<p className="border-8 w-64 border-solid text-center mt-10 border-spacing-4">
                    So I started to walk into the water. I wont lie to you boys, I was
                    terrified. But I pressed on, and I made my way past the breakers
                    a strange calm came over me. I dont know if it was divine intervention
                    or the kinship of all living things but I tell you Jerry at that moment,
                    I <em>was</em> a marine biologist.
                </p>)
            }
        </div>
    );
};

export default Body;