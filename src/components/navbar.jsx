"use client"

import { serverLogout } from "@/actions/user";
import { useRouter } from "next/navigation";

export default function NavBar(){
    const { push } = useRouter()

    function handleLogout(){
        serverLogout()
        push("/login")
    }
    return(
    <nav className="bg-slate-900 p-4">
        <ul>
        <h1 className="text-3xl font-bold">Fiap Series</h1>
        </ul>
        <ul>
          <li>Favoritos</li>
        </ul>
        <ul>
          <li>Em Alta</li>
        </ul>
        <button onClick={handleLogout}>Logout</button>
    </nav>

    )
}