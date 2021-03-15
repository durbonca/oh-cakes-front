export function Header(){

    return(
        <div className="flex justify-between | p-10">
            <div>Logo Here //TODO: send me SVG LOGO</div>

            <form className="flex">
                <input type="text" 
                className="border-gray-300 border-2 rounded-xl outline-none | p-2" 
                placeholder="buscar"/>
                <button className="p-2">🔍</button>
            </form>
        </div>
    )
}