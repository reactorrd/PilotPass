import * as React from 'react'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import Stack from '@mui/material/Stack'

const DescriptionAlert = ({severity, title, detail, onClose }) => {

    if(severity == 1){
        
        return(
            <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert onClose={onClose} severity="success">
                    <AlertTitle>{title}</AlertTitle>
                    {detail}
                </Alert>
            </Stack>
        )

    }else if(severity == 2){
        
        return(
            <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert onClose={onClose} severity="info">
                    <AlertTitle>{title}</AlertTitle>
                    {detail}
                </Alert>
            </Stack>
        )

    }else if(severity == 3){
        
        return(
            <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert onClose={onClose} severity="warning">
                    <AlertTitle>{title}</AlertTitle>
                    {detail}
                </Alert>
            </Stack>
        )

    }else{

        return(
            
            <Alert onClose={onClose} variant='outlined' severity="error">
                <AlertTitle>{title}</AlertTitle>
                {detail}
            </Alert>
            
        )

    }

}

export default DescriptionAlert