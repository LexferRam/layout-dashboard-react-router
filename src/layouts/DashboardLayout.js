import React from 'react'
import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { NavLink } from 'react-router-dom'
import { Collapse } from '@material-ui/core'
import { ExpandLess, ExpandMore } from '@material-ui/icons'

import Icon from '@material-ui/core/Icon'
import useAuth from 'auth/useAuth'
import { menuItems } from './menuItems'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}))

export default function DashboardLayout({ children }) {
  const classes = useStyles()
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)
  const [openNestedList, setOpenNestedList] = React.useState(false)

  const auth = useAuth()

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const handleClick = () => {
    setOpenNestedList(!openNestedList)
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position='fixed'
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap style={{ flex: 0.95 }}>
            User: {auth.user.name}
          </Typography>
          <Typography
            variant='h6'
            style={{ cursor: 'pointer' }}
            noWrap
            onClick={() => {
              const result = window.confirm('Are you sure you want to logout?')
              if (result) auth.logout()
            }}
          >
            Salir
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant='permanent'
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {menuItems &&
            menuItems.map((item,i) =>
              !item.dropdown ? (
                <NavLink
                  exact
                  to={item.to}
                  activeClassName='active'
                  style={{ textDecoration: 'none', color: 'black' }}
                  key={item.key}
                >
                  <ListItem button>
                    <ListItemIcon>
                      <Icon>{item.icon}</Icon>
                    </ListItemIcon>
                    <ListItemText primary={item.listItemText} />
                  </ListItem>
                </NavLink>
              ) : (
                <>
                  <ListItem button onClick={handleClick} key={item.key}>
                    <ListItemIcon>
                      <Icon>{item.icon}</Icon>
                    </ListItemIcon>
                    <ListItemText primary={item.listItemText} />
                    {openNestedList ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                  <Collapse in={openNestedList} timeout='auto' unmountOnExit>
                    {item.dropdownItems.map((dropdownitem) => (
                      <List
                        component='div'
                        disablePadding
                        key={dropdownitem.key}
                      >
                        <NavLink
                          to={dropdownitem.to}
                          activeClassName='active'
                          style={{ textDecoration: 'none', color: 'black' }}
                        >
                          <ListItem button className={classes.nested}>
                            <ListItemIcon>
                              <Icon>{dropdownitem.icon}</Icon>
                            </ListItemIcon>
                            <ListItemText primary={dropdownitem.listItemText} />
                          </ListItem>
                        </NavLink>
                      </List>
                    ))}
                  </Collapse>
                </>
              )
            )}
        </List>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  )
}
