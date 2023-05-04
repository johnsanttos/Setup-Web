import { useEffect, useState } from "react"
import { generateDatesFromYearBeginning } from "../utils/generate-date-from-year-beginning"
import { HabitDay } from "./HabitDay"
import { api } from "../api/axios"
import dayjs from "dayjs"

type Summary = {
id:string
date: string
completed: number
amount: number
}[]

export default function SummaryTable() {

    const [summary, setSummary] = useState <Summary>([])

    useEffect(() => {
        api.get('summary').then(response => {
            //console.log('hahahahahah', response.data)
            setSummary(response.data)
        })

    }, [])

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

    //console.log('la eleeee , ', summaryDates)
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
                        //para checar e comparar data dentro do resumo, isSame compara tudo
                        const dayInSummary = summary.find(day => {
                            return dayjs(date).isSame(day.date,'day')
                        })
                        return (
                            <HabitDay
                                key={date.toString()}
                                date={date}
                                amount={dayInSummary?.amount}
                                completed={dayInSummary?.completed}
                            />)
                    })
                }

                {amountOfDaysToFill > 0 && Array.from({ length: amountOfDaysToFill }).map((_, i) => {
                    return (

                        <div
                    
                          >
                            <div  key={i}className="w-10 h-10 bg-zinc-900 border-2 border-zinc-600 rounded-lg  opacity-40 cursor-not-allowed" ></div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}