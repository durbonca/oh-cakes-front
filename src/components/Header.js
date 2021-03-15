import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons'
import { ReactSVG } from 'react-svg'

export function Header(){

    function toggleMenu(){
       document.getElementById('mobile-menu').classList.toggle('hidden')
    }
       
    return(
        <>
            <div className="flex justify-between items-center">
                <ReactSVG src="logo.svg" className="h-40 w-40" />

                <div className="sm:hidden pr-10">
                    <FontAwesomeIcon 
                        icon={faBars} 
                        className="text-2xl text-primary"
                        onClick={toggleMenu}
                        />
                </div>

                <form className="hidden sm:flex h-10 items-center px-5">
                    <input type="text" 
                    className="border-primary border-2 rounded-xl outline-none | p-2" 
                    placeholder="Buscar"/>
                    <button className="p-2">
                        <FontAwesomeIcon icon={faSearch} className="text-primary"/>
                    </button>
                </form>
            </div>

            <ul id="mobile-menu" className="h-auto w-screen bg-secondary flex flex-col text-white text-4xl">
                <li className="">
                    <form className="flex items-center w-full">
                        <input type="text" 
                        className="outline-none | text-secondary w-full p-3" 
                        placeholder="Buscar"/>
                        <button className="bg-white h-full p-3">
                            <FontAwesomeIcon icon={faSearch} className="text-secondary"/>
                        </button>
                    </form>
                </li>
            </ul>
        </>
    )
}