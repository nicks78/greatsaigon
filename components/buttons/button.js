import Link from 'next/link'




const Button = ({textButtom, onSubmit, classeButton}) => (

        <button onClick={ onSubmit } className={`uk-button ${ classeButton } uk-float-right`}>
                {textButtom}
                <style jsx global>{`
                button {
                        width: 100%;
                        border-radius: 24px
                        color: white;
                }
                .facebook{
                        background-color: #3b5998;
                        color: white;
                        transition: 0.2s linear
                        
                }
                .default{
                        background-color: red
                        color: white;
                        transition: 0.2s linear
                }
                .facebook:focus,
                .default:focus,
                .facebook:hover,
                .default:hover{
                        background-color: #f6a406
                }
            `}</style> 
        </button>

)
  
export default Button