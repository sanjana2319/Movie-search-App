import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import { useState } from 'react'


const useStyles = makeStyles((theme) => ({
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	paper: {
		width: '40%',
		height: '20%',
		backgroundColor: '#39445a',
		border: '1px solid #282c34',
		color: 'white',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 2, 3),
    marginLeft: "25%",
    marginTop: "0%",
	},
}))

export default function Transition(props) {
	const classes = useStyles()
	
	return (
		<div>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				className={classes.modal}
				open={props.open}
				onClose={props.handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}>
				<Fade in={props.open}>
        <div className = "pageFix">
					<div className={classes.paper}>

						<h2>Title: {props.data.Title}</h2>
						<p id="transition-modal-description">Released: {props.data.Released}</p>
						<p>Year: {props.data.Released}</p>
						<h4>Genre: {props.data.Genre}</h4>
						<h4>Director: {props.data.Director}</h4>
						<h4>Writer: {props.data.Writer}</h4>
						<h5>Actors: {props.data.Actors}</h5>
						<h5>Description: {props.data.Plot}</h5>
					</div>
          </div>
          
				</Fade>
			</Modal>
		</div>
	)
}
