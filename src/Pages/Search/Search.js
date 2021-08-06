import React, { useEffect } from 'react';
import axios from "axios";
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import CostomPagination from '../../component/Pagination/Pagination';
import Transition from '../../component/Transition/Transition';
import "./Search.css";

const Search = () => {
     
    const [page, setPage] = useState(0);
    const [searchText, setSearchText] = useState("");
    const [content, setContent] = useState();
    const [type, setType] = useState(1);
    const [numOfPages, setNumOfPages] = useState();

    const darkTheme = createTheme({
        palette: {
            type: "dark",
            primary: {
                main: "#fff",
            },
        },
    });
    const fetchSearch = async() => {
        try {
            const {data} = await axios.get(
                // `http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_API_KEY}
                // &language=en-US&query=${searchText}&page=${page}`
                `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&t=${searchText}`
            ); 

            setSearchText(data.Title);
            setContent(data.Poster);
            setType(data.Type);
            // console.log(data.Type)
            // console.log(data.Poster);
            console.log(data);
            // // {Response === false && (type ? <h2>No Movies found</h2>: <h2>No Series Found</h2>)}
            // console.log(Response)
        } catch (error){
            console.log(error);
        }
    }
    useEffect(() => {
        window.scroll(0,0);
        fetchSearch();
    },[page]);
    return (
        <div>
        <ThemeProvider theme = {darkTheme}>
            <div style = {{display: "flex", margin: "10px 0"}}>
            <TextField
            style = {{flex:1}}
            className = "searchbox"
            label = "Search"
            varient = "filled"
            onChange= {(e) => setSearchText(e.target.value)}

        />
        <Button variant = "contained" style= {{marginLeft: 10}}
        onClick= {fetchSearch}><SearchIcon/></Button>
        </div>
        </ThemeProvider>
        <Button ><div onClick = {<Transition />} className = "media">
        {/* <Transition type = {type}/> */}
        <img  src = {content} />
        <p className = "title">{searchText}</p>
        <p className = "subTitle">{type}</p>

        </div>
        
        <Transition>Title: </Transition> 
        </Button>
        <CostomPagination/>
        </div>
        
        
    );
};

export default Search;
