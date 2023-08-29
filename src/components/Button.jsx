import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';


export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text" color='error'>Text</Button>
      <Button variant="contained" color="secondary">Contained</Button>
      <Button variant="outlined" >Outlined</Button>
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
      <Button variant="contained" endIcon={<AccessAlarmIcon />} color="warning">
        Alarm
      </Button>
    </Stack>
  );
}