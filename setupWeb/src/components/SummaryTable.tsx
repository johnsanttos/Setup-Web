import { generateDatesFromYearBeginning } from "../utils/generate-date-from-year-beginning"
import { HabitDay } from "./HabitDay"

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

    const summaryDates = generateDatesFromYearBeginning()

    const minimumSummaryDatesSize = 18 * 7 // 18 weeks

    const amountOfDaysToFill = minimumSummaryDatesSize - summaryDates.length

    console.log('la eleeee , ', summaryDates)
    return (
        <div className="w-full flex ">
            <div className=" grid grid-rows-7 grid-flow-row gap-3">

                {
                    // vai pegar a variavel weekDays,i e o indice do array = i para mapear
                    weekDays.map((weekDays, i) => {
                        return (
                            <div key={`${weekDays}-${i}`}
                                className="text-zinc-400 text-xl h-10 w-10 font-bold flex items-center justify-center ">
                                {weekDays}
                            </div>
                        )
                    }
                    )
                }

            </div>

            <div className="grid grid-rows-7 grid-flow-col gap-3">

                {
                    summaryDates.map(date => {
                        return <HabitDay key={date.toString()} />
                    })
                }

                {amountOfDaysToFill > 0 && Array.from({length: amountOfDaysToFill}).map((_,i)=>{
                    return(
                     
                        <div 
                        key={i}
                        className="bg-zinc-900 w-10 text-white rounded m-2  flex text-center items-center justify-center">
                        <div className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg  opacity-40 cursor-not-allowed" ></div>
                            </div>
                    )
                })}
            </div>

        </div>
    )
}