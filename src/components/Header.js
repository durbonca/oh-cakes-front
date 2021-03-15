import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { ReactSVG } from 'react-svg'


export function Header(){

    return(
        <div className="flex justify-between items-center">
            <ReactSVG src="logo.svg" className="h-40 w-40" />

            <form className="flex h-10 items-center px-5">
                <input type="text" 
                className="border-primary border-2 rounded-xl outline-none | p-2" 
                placeholder="buscar"/>
                <button className="p-2">
                    <FontAwesomeIcon icon={faSearch} className="text-primary"/>
                </button>
            </form>
        </div>
    )
}