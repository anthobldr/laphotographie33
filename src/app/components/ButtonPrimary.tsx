import style from "./Button.module.css"

export default function ButtonPrimary({text}:{text: string}){
    return (
        <button className={`btn rounded-0 px-4 py-1 ${style.primary}`}> 
            {text}
        </button>
    )
}