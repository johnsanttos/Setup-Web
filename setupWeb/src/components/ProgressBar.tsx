
interface ProgressBarProps{
    progress: number
}

export default function ProgressBar (props: ProgressBarProps){
// const progressStyles= {
//     width: `{props.progress}%`
// }

    return(
    
        <div className='h-3 rounded-xl bg-zinc-700 w-full mt-4'
            role='progressbar'
            aria-valuenow={props.progress}
            aria-label='Progresso de hábitos completados nesse dia'
        >
            <div className='h-3 rounded-xl bg-violet-600 ' 
            style={{
                width: `${props.progress}%`
            }}
            />
        </div>
    )
}