import Link from 'next/link'




const LinkButton = ({textButtom, as, href }) => (

        <Link href={ href } as={as}>
                <a>textButtom</a>
        </Link>

)
  
export default LinkButton;