import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import axios from 'axios';
import { useState, useEffect } from 'react';



const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    // backgroundColor: theme.palette.background.paper,
    // border: '2px solid #000',
    // boxShadow: theme.shadows[5],
    // padding: theme.spacing(2, 4, 3),
    width: "40%",
    height:"50%",
    backgroundColor: "#39445a",
    border: "1px solid #282c34",
    color: "white",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1,1,3),

  },
}));



// useEffect(() => {
//     window.scroll(0,0);
//     fetchSearch();
// },[page]);

export default function Transition() {
  const [open, setOpen] = React.useState(false);
  const [searchText, setSearchText] = useState("");
  const [content, setContent] = useState();
  const [type, setType] = useState(1);
  const classes = useStyles();
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const fetchSearch = async() => {
    try {
        const {description} = await axios.get(
            `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&t=${searchText}`
        ); 
console.log(description.Title)
        console.log(description);
    } catch (error){
        console.log(error);
    }
}
useEffect(() => {
  window.scroll(0,0);
  fetchSearch();
});

  return (
    <div>
      <button type="button" className = "media" onClick={handleOpen}>
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 >Title: {searchText}</h2>
             
            <p id="transition-modal-description">Released:</p>
            <p>Year:</p>
            <h4>Genre:</h4>
            <h5>Actors:</h5>
            <h5>Description: </h5>


          </div>
        </Fade>
      </Modal>
    </div>
  );
}