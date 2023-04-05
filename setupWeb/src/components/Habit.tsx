interface HabitProps {
    completed: number
}

export function Habit( props: HabitProps){
    return(
        <div className="bg-zinc-900 w-10 text-white rounded m-2  flex text-center items-center justify-center">
        <h1> {props.completed}</h1>
        </div>
        )
  
}