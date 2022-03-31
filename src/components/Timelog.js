import React from 'react'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

const Timelog = () => {
  return (
    <Stack component="form" noValidate spacing={3}>
        <TextField
            id="time"
            type="time"
            InputLabelProps={{
            shrink: true,
            }}
            inputProps={{
            step: 300, // 5 min
            }}
            sx={{ width: 150 }}
        />
    </Stack>
  )
}

export default Timelog