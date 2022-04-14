import React, {useState } from "react";
import {Stack, TextField, Button, MenuItem} from '@mui/material';
import {useNavigate} from 'react-router-dom'



const AddFeedback = () => {
  const [rName, setRName] = useState('');
  const [retroNames, setRetroNames] = useState([])
  const [pName, setPName] = useState('');
  const [summary, setType] = useState('');
  const [body, setBody] = useState();
  const [errorMsg, setErrorMsg] = useState("");
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();


  const addURL = "http://localhost:8000/api/addfeedback";
  const addOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      rName,
      summary,
      body,
      pName,
    }),
  };
  
  const addBtnHandleCHange = async (e) => {
    e.preventDefault();
    const response = await fetch(addURL, addOptions);
    if (response.status === 201) {
      setRedirect(true);
    } else {
      console.log(response.text)
      setErrorMsg("There is an error, Please make sure Retrospective Name is not duplicate. Participants and Date fields are not empty");
    }
  };

  const handleFocus = async (e) => {
    const res = await fetch("http://localhost:8000/api/getretronames", {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const content = await res.json();
    setRetroNames(content);
  }

  if (redirect) {
    navigate('/');;
  }
  
    return (
      <Stack direction='column' spacing={2} sx={{width:'250px'}}>
      <h5 style={{ color: "red" }}>{errorMsg}</h5>
        <TextField required label="Select Retrospective" 
          select onFocus={handleFocus}
          onChange={(e) => {
            setRName(e.target.value);
          }}>
            {retroNames.map((name) => (
              <MenuItem value={name}>{name}</MenuItem>
            ))}
          </TextField>
          <TextField required label="Select Participant" 
          select 
          onChange={(e) => {
            setPName(e.target.value);
          }}
          >
            <MenuItem value='Naga'>Naga</MenuItem>
            <MenuItem value='Samala'>Samala</MenuItem>
            <MenuItem value='Laxmi'>Laxmi</MenuItem>
          </TextField>
        <TextField label='Body' onChange={(e) => {
            setBody(e.target.value);
          }}></TextField>
          <TextField required label="Select Type" 
          select
          onChange={(e) => {
            setType(e.target.value);
          }}
          >
            <MenuItem value='Positive'>Positive</MenuItem>
            <MenuItem value='Negative'>Negative</MenuItem>
            <MenuItem value='Idea'>Idea</MenuItem>
            <MenuItem value='Praise'>Praise</MenuItem>
          </TextField>
          <Stack direction='row' spacing={2} sx={{width:'250px'}}>
            <Button href='/' variant="outlined">Cancel</Button>
            <Button variant="contained" onClick={addBtnHandleCHange}>Add</Button>
          </Stack>
      </Stack>
    );
  }


export default AddFeedback;