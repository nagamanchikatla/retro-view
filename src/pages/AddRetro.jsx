import React, { useState } from "react";
import { Stack, TextField, Button, MenuItem } from "@mui/material";
import { DatePicker } from "@mui/lab";
import {useNavigate} from 'react-router-dom'

const AddRetro = () => {
  const [date, setDate] = useState("");
  const [rName, setRName] = useState("");
  const [summary, setSummary] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [pName, setPName] = useState([]);
  const navigate = useNavigate();

  const addURL = "http://localhost:8000/api/addretro";
  const addOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      rName,
      summary,
      date,
      pName,
    }),
  };
  
  const handleAddBtn = async (e) => {
    e.preventDefault();
    const response = await fetch(addURL, addOptions);
    if (response.status === 201) {
      setRedirect(true);
    } else {
      setErrorMsg("There is an error, Please make sure Retrospective Name is not duplicate. Participants and Date fields are not empty");
    }
  };
  const handleSelectChange = (event) => {
    const value = event.target.value;
    setPName(typeof value === "string" ? value.split(",") : value);
  };
  if (redirect) {
    navigate('/');;
  }

  return (
    <Stack direction="column" spacing={2} sx={{ width: "250px" }}>
      <h5 style={{ color: "red" }}>{errorMsg}</h5>
      <TextField
      required
        label="Retrospective Name"
        onChange={(e) => {
          setRName(e.target.value);
        }}
      ></TextField>
      <TextField
        label="Summary"
        onChange={(e) => {
          setSummary(e.target.value);
        }}
      ></TextField>
      <TextField
      required
        label="Select Participants"
        select
        value={pName}
        onChange={handleSelectChange}
        fullWidth
        SelectProps={{
          multiple: true,
        }}
      >
        <MenuItem value="Naga">Naga</MenuItem>
        <MenuItem value="Samala">Samala</MenuItem>
        <MenuItem value="Laxmi">Laxmi</MenuItem>
      </TextField>
      <DatePicker
      required
        label="Date"
        renderInput={(prams) => <TextField {...prams} />}
        value={date}
        onChange={(value) => {
          setDate(value.toLocaleDateString());
        }}
      ></DatePicker>
      <Stack direction="row" spacing={2} sx={{ width: "250px" }}>
        <Button href="/" variant="outlined">
          Cancel
        </Button>
        <Button variant="contained" onClick={handleAddBtn}>
          Add
        </Button>
      </Stack>
    </Stack>
  );
};

export default AddRetro;
