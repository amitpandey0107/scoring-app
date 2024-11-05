import { useState } from "react"

export default function Scoring() {
    const [runs, setRuns] = useState([]);
    const handleScore = (r)=>{
        let a = [...runs];
        a.push(r);
        setRuns(a)
    }
    console.log(runs)
    return (
        <div className="flex pt-2 justify-center items-center rounded-lg overflow-hidden flex-col">
            <div className="flex justify-center items-center h-[300px] w-[500px]" style={{backgroundImage:`url('./images/bg1.jpg')`, backgroundPosition:`top`, backgroundRepeat:`no-repeat`, backgroundSize:`cover`}}>
                <div className="flex mr-2">
                    <div className="text-6xl font-normal text-white">36</div>
                    <div className="text-6xl font-normal text-white">/</div>
                    <div className="text-6xl font-normal text-white">0</div>
                </div>
                <div className="text-xl text-white">
                    (<span>1.4</span> / <span>20.0</span>)
                </div>
            </div>

            <div className="flex justify-start items-start flex-wrap flex-row w-[500px] bg-gray-600 pt-5 pb-5 pl-2 pr-2 overflow-auto">
                <div className="flex justify-center items-center rounded-full h-14 w-14 bg-green-500 text-xl font-semibold mr-3">6</div>
                <div className="flex justify-center items-center rounded-full h-14 w-14 bg-yellow-500 text-xl font-semibold mr-3">4</div>
                <div className="flex justify-center items-center rounded-full h-14 w-14 bg-white text-xl font-semibold mr-3">1</div>
                <div className="flex justify-center items-center rounded-full h-14 w-14 bg-cyan-500 text-xl font-semibold mr-3">2</div>
                <div className="flex justify-center items-center rounded-full h-14 w-14 bg-orange-500 text-xl font-semibold mr-3">3</div>
                <div className="flex justify-center items-center rounded-full h-14 w-14 bg-gray-300 text-xl font-semibold mr-3">0</div>
                <div className="flex justify-center items-center rounded-full h-14 w-14 bg-red-500 text-xl font-semibold mr-3">W</div>
            </div>

            <div className="flex justify-start items-start flex-wrap flex-row w-[500px] bg-gray-200 overflow-auto">
                <button className="h-24 border w-[25%] bg-red-200 text-2xl text-gray-500" onClick={()=>handleScore(0)}>0</button>
                <button className="h-24 border w-[25%] bg-red-200 text-2xl text-gray-500" onClick={()=>handleScore(1)}>1</button>
                <button className="h-24 border w-[25%] bg-red-200 text-2xl text-gray-500" onClick={()=>handleScore(2)}>2</button>
                <button className="h-24 border w-[25%] bg-red-200 text-2xl text-gray-500" onClick={()=>handleScore(3)}>3</button>

                <button className="h-24 border w-[25%] bg-red-200 text-2xl text-gray-500" onClick={()=>handleScore(4)}>4</button>
                <button className="h-24 border w-[25%] bg-red-200 text-2xl text-gray-500" onClick={()=>handleScore(6)}>6</button>
                <button className="h-24 border w-[25%] bg-red-200 text-2xl text-gray-500" onClick={()=>handleScore(5)}>5/7</button>
                <button className="h-24 border w-[25%] bg-red-200 text-2xl text-red-500">Out</button>

                <button className="h-24 border w-[25%] bg-red-200 text-2xl text-gray-500" onClick={()=>handleScore(1)}>WD</button>
                <button className="h-24 border w-[25%] bg-red-200 text-2xl text-gray-500" onClick={()=>handleScore(1)}>NB</button>
                <button className="h-24 border w-[25%] bg-red-200 text-2xl text-gray-500" onClick={()=>handleScore(1)}>BYE</button>
                <button className="h-24 border w-[25%] bg-red-200 text-2xl text-gray-500" onClick={()=>handleScore(2)}>LB</button>
            </div>

        </div>
    )
}