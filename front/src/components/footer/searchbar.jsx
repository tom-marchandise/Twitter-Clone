import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Searchbar() {
    const [userData, setUserData] = useState(null)
    const navigate = useNavigate()
    const handleSearch = (e) => {
        e.preventDefault(); // Empêcher le rechargement de la page
        const searchValue = new FormData(e.target);
        fetch('http://127.0.0.1:8000/api/getUsers', {
            method: 'POST',
            body: searchValue
          })
              .then(res => res.json()).then(data => {
                setUserData(data)
                console.log(data)
                navigate('/search')
                
              })
    }

    return (
        <div className={"flex flex-row w-[55%] mt-1 h-10 items-center bg-gray-200 rounded-full"}>
            <form onSubmit={handleSearch} className={"flex ml-3 items-center"}>
                <button type="submit">
                    <svg className={"w-6 h-6 stroke-gray-300 fill-gray-600"}>
                        <path d="M 10.25 3.75 c -3.59 0 -6.5 2.91 -6.5 6.5 s 2.91 6.5 6.5 6.5 c 1.795 0
                        3.419 -0.726 4.596 -1.904 c 1.178 -1.177 1.904 -2.801 1.904 -4.596 c 0 -3.59
                        -2.91 -6.5 -6.5 -6.5 Z m -8.5 6.5 c 0 -4.694 3.806 -8.5 8.5 -8.5 s 8.5 3.806 8.5 8.5
                        c 0 1.986 -0.682 3.815 -1.824 5.262 l 4.781 4.781 l -1.414 1.414 l -4.781 -4.781
                        c -1.447 1.142 -3.276 1.824 -5.262 1.824 c -4.694 0 -8.5 -3.806 -8.5 -8.5 Z"></path>
                    </svg>
                </button>
                <input type="text" id="search" name="search" className={"h-10 p-3 ml-2 bg-gray-200 rounded-full outline-0"} placeholder={"Search"} />
            </form>
        </div>
    );
}

export default Searchbar;
