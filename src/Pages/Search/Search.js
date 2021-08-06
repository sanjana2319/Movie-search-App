import React, { useEffect } from 'react'
import axios from 'axios'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import { useState } from 'react'
import { Button, TextField } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import CostomPagination from '../../component/Pagination/Pagination'
import Transition from '../../component/Transition/Transition'
import './Search.css'

const Search = () => {
	const [page, setPage] = useState(0)
	const [searchText, setSearchText] = useState('')
	const [title, setTitle] = useState('')
	const [content, setContent] = useState()
	const [apiData, setApiData] = useState({})
	const [falseResponse, setFalseResponse] = useState(false)
	const [showModal, setShowModal] = useState(false)
	const [type, setType] = useState(1)
	const [numOfPages, setNumOfPages] = useState()
	const [open, setOpen] = useState(false)

	const handleOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}

	const handleClick = () => {
		setOpen(true)
	}

	const darkTheme = createTheme({
		palette: {
			type: 'dark',
			primary: {
				main: '#fff',
			},
		},
	})
	const fetchSearch = async () => {
		try {
			setFalseResponse(false)
			setTitle('')
			setContent('')
			setType('')
			setApiData('')
			const { data } = await axios.get(
				`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&t=${searchText}`,
			)

			if (data.Response === 'False') {
				if (searchText.length !== 0) setFalseResponse(true)
			} else {
				setTitle(data.Title)
				setContent(data.Poster)
				setType(data.Type)
				setApiData(data)
			}
			console.log(data)
		} catch (error) {
			console.log(error)
		}
	}
	useEffect(() => {
		fetchSearch()
	}, [searchText])

	return (
		<div>
			<ThemeProvider theme={darkTheme}>
				<div style={{ display: 'flex', margin: '10px 0' }}>
					<TextField
						style={{ flex: 1 }}
						className="searchbox"
						label="Search"
						varient="filled"
						onChange={(e) => setSearchText(e.target.value)}
					/>
					<Button
						variant="contained"
						style={{ marginLeft: 10 }}
						onClick={fetchSearch}>
						<SearchIcon />
					</Button>
				</div>
			</ThemeProvider>

			{falseResponse ? <h2>No Movies | Series Found!</h2> : null}
			{title ? (
				<div>
					<div onClick={handleClick} className="media">
						{content !== "N/A" ? <img src={content} alt="Poster"/> : <span className = "PNotFound">Poster not found</span>}
						<p className="title">{title}</p>
						<p className="subTitle">{type}</p>
					</div>
				</div>
			) : null}
			<div onClick={handleClick}>
				<Transition
					open={open}
					handleClose={handleClose}
					title={title}
					data={apiData}
				/>
			</div>

			<CostomPagination />
		</div>
	)
}

export default Search