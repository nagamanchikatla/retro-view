import React, { useState } from "react";
import { Stack, TextField, Button } from "@mui/material";

import { DatePicker } from "@mui/lab";
import RetroTable from "../Components/RetroTable";

function ViewByDate(props) {
  const [date, setDate] = useState("");
  const [retros, setRetros] = useState([]);

  const getBtnHandleCHange = async (e) => {
    const res = await fetch("http://localhost:8000/api/getretrosbydate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        date,
      }),
    });
    const content = await res.json();
    setRetros(content);
  };
  return (
    <div>
      <RetroTable retros={retros}></RetroTable>
    <div style={{height:"20px"}}></div>
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
        <Button variant="contained" onClick={getBtnHandleCHange}>
          Get
        </Button>
      </Stack>
    </div>
  );
}

export default ViewByDate;
