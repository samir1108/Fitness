import React from 'react'
import { Box, Typography, Stack } from '@mui/material'

const HeroBanner = () => {
    return (
        <Box sx={{
            mt: { lg: '212', xs: '70px' },
            ml: { sm: '50px' }
        }} position='relative' p='20px' >
            <Typography>
                Fitness Club
            </Typography>
            <Typography>
                No pain No GAIN
            </Typography>
            <Typography>
                check out the most effective exercises
            </Typography>
            <Stack>
                <a href='#' style={{ marginTop: '45px' }} > hello </a>
            </Stack>

        </Box>
    )
}

export default HeroBanner
