import React, { useState } from 'react'
import Exercises from '../components/Exercises'
import SearchExercises from '../components/SearchExercises'
import HeroBanner from '../components/HeroBanner'
import { Box } from '@mui/material'


export const Home = () => {

    return (
        <Box>

            <SearchExercises />
            <Exercises />
        </Box>

    )
}


