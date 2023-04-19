import { Check } from "phosphor-react";
import * as Checkbox from '@radix-ui/react-checkbox';
import { FormEvent, useState } from "react";

const availableWeekDaysDays = [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado'
]

export default function NewHabitForm() {
    const [title, setTitle] = useState('')
    const [weekDays, setWeekDays] = useState<number[]>([])

    function createNewHabit(event: FormEvent) {
        event.preventDefault()
        console.log('olha isssooooooo',title, weekDays)
    }

    function handleToggleWeekDay(weekDay: number) {
        if (weekDays.includes(weekDay)) {
            const weekDayWhitRemovedOne = weekDays.filter(day => day != weekDay)

            setWeekDays(weekDayWhitRemovedOne)
        } else {
            const weekDaysWhitAddedOne = [... weekDays,weekDay]

            setWeekDays(weekDaysWhitAddedOne)
        }
    }


    return (
        <form onSubmit={createNewHabit} className="w-full flex flex-col mt-6">
            <label htmlFor="title" className="font-semibold leading-tight">
                Qual seu comprometimento?
            </label>
            <input
                type="text"
                className="p-4 rounded-lg bg-zinc-800 mt-3 text-white placeholder:text-zinc-400"
                title=""
                placeholder="ex.: Exercícios, dormir bem, etc..."
                autoFocus
                onChange={event => setTitle(event.target.value)}
            />

            <label htmlFor="" className="font-semibold leading-tight mt-4">
                Qual a recorrêcia?
            </label>

            <div className="flex flex-col gap-2 mt-3">

                {
                    availableWeekDaysDays.map((weekDay, i) => {
                        return (
                            <Checkbox.Root
                                onCheckedChange={() => {
                                    handleToggleWeekDay(i)
                                }}
                                
                                key={`${weekDay}-${i}`}
                                className='flex items-center gap-3 group'>

                                <div className='h-8 w-8 rounded-xl flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500'>
                                    <Checkbox.Indicator>
                                        <Check size={20} className="text-white" />
                                    </Checkbox.Indicator>
                                </div>

                                <span className='font-semibold text-xl text-white leading-tight  '>
                                    {weekDay}
                                </span>
                            </Checkbox.Root>
                        )

                    }
                    )
                }
            </div>

            <button type="submit"
                className="mt-6 rounded-lg p-4 flex items-center justify-center gap-3 font-semibold bg-green-600 hover:bg-green-500"
            >
                <Check size={20} weight="bold" />
                Confirmar
            </button>
        </form>
    )
}