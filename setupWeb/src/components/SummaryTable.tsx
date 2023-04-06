
export default function SummaryTable() {
    const weekDays = [
        'D',
        'S',
        'T',
        'Q',
        'Q',
        'S',
        'S'
    ]
    return (
        <div className="w-full flex ">
            <div className=" grid grid-rows-7 grid-flow-row gap-3">

                {
                    // vai pegar a variavel weekDays,i e o indice do array = i para mapear
                    weekDays.map((weekDays, i) => {
                        return (
                            <div key={`${weekDays}-${i}`}
                                className="text-zinc-400 text-xl h-10 font-bold flex items-center justify-center">
                                {
                                    weekDays
                                }
                            </div>
                        )
                    }
                    )
                }
               
            </div>

            <div>
                
            </div>

        </div>
    )
}