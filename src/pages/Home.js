import React, {useState, useEffect} from 'react'
import SearchBar from "../components/SearchBar"
import SearchResults from "../components/SearchResults"

export default function Home() {
    return(
        <>
        <SearchBar />
        <SearchResults />
        <h1>Pagina home</h1>
        </>
    )
}