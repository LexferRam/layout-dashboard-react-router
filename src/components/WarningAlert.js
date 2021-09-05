import React from 'react'
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import { makeStyles } from '@material-ui/core/styles'
import useWarningAlert from 'hooks/useWarningAlert'

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}))

export default function WarningAlert() {
  const classes = useStyles()
  const { open, message, setOpen } = useWarningAlert()

  const handleClose = (event, reason) => {
    setOpen(false)
  }

  return (
    <div className={classes.root}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity='warning'>
          {message}
        </Alert>
      </Snackbar>
      {/* <Alert open={open} severity='success'>
        {message}
      </Alert> */}
    </div>
  )
}
