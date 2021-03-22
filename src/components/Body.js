//import {useState} from 'react'

export function Body (){

    //const [data, setData] = useState()
   
    const call = async function () {
            fetch ('https://dev.ohcakes.cl/drupal-9.1.5-OhCakes1/jsonapi/node/article/',
              {
                method: "GET",
                mode:'cors',
                headers: {
                  "Content-Type": "application/json"
               }})
                .then(Response => Response.json())
                .then(data => console.log(data))
                .error(err => console.error('error en : ' + err))
            }

    call()

    return(
        <div className="bg-primary flex h-screen items-center justify-center">
            <h1 className="font-extrabold text-white text-secondary">OH CAKES</h1>
        </div>
    )
}