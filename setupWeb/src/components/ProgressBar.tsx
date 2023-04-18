
export default function ProgressBar (){
    return(
    
        <div className='h-3 rounded-xl bg-zinc-700 w-full mt-4'
            role='progressbar'
            aria-valuenow={75}
            aria-label='Progresso de hábitos completados nesse dia'
        >
            <div className='h-3 rounded-xl bg-violet-600 w-3/4' />
        </div>
    )
}