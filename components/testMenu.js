import React from 'react'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { useRouter } from 'next/router'
import style from './testMenu.module.sass'
import MenuList from '@material-ui/core/MenuList'

const TestMenu = () => {
  const router = useRouter()
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
    console.log('in')
  }
  const handleClose = () => {
    console.log('close')
    setAnchorEl(null)
  }

  const itemClick = (path) => {
    handleClose()
    console.log('name', path)
    router.push(path)
  }

  const mOut = () => {
    console.log('mOut')
  }

  return (
    <div className={style.menuWrapper}>
      <Button aria-controls="simple-menu" aria-haspopup="true" onMouseEnter={handleClick}>
        Open Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        
        open={Boolean(anchorEl)}
        onClose={handleClose}
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        // MenuListProps={{ onMouseLeave: handleClose }}

      >
        <MenuList onMouseLeave={handleClose}>
          <MenuItem onClick={()=> {
            itemClick('/page1')
          }}>page1</MenuItem>
          <MenuItem onClick={()=> {
            itemClick('/page2')
          }}>page2</MenuItem>
          <MenuItem onClick={()=> {
            itemClick('/items')
          }}>items</MenuItem>

        </MenuList>
      </Menu>

       
    </div>

  )
}

export default TestMenu