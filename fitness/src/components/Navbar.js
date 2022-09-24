import React from 'react'
import { Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <Stack alignItems={'center'} mt='0px' justifyContent={'space-around'} sx={{ width: { xl: '1488px', xs: '400px' } }}  >
            <Typography sx={{ fontSize: { xs: '30px', xl: '50px' } }} mt="0px" color='red' >
                < Link to='/' style={{ textDecoration: 'none', color: 'red', fontWeight: "8px" }} color='red' >NO PAIN NO GAIN </Link>
            </Typography>

        </Stack>
    )
}

export default Navbar
