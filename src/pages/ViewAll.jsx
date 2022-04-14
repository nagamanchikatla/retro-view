import React, { useState } from "react";
import {Stack, Button} from '@mui/material';
import RetroTable from '../Components/RetroTable';

function ViewAll() {
  const [retros, setRetros] = useState([]);

const getBtnHandleCHange = async (e) => {
  const res = await fetch("http://localhost:8000/api/getretros", {
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  const content = await res.json();
  setRetros(content);
}

  return (
    <>
      <RetroTable retros={retros}></RetroTable>
      <div style={{height: "10px"}}></div>
      <Stack direction="row" spacing={2} sx={{ width: "250px" }}>
        <Button href='/' variant="outlined">
          Cancel
        </Button>
        <Button variant="contained" onClick={getBtnHandleCHange}>
          Get
        </Button>
      </Stack>
    </>
  );
}

export default ViewAll;
