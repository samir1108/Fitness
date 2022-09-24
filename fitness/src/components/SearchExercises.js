import React from 'react'
import { useState } from 'react'
import { Stack, Typography, TextField, Button } from '@mui/material'

const SearchExercises = () => {
    const [search, setSearch] = useState(' ')
    return (
        <Stack mt='40px' direction='row'>
            <TextField sx={{
                input: { fontWeight: '700', border: 'none', borderRadius: '4px' },
                width: { lg: '1200px', xs: '350px' },
                backgroundColor: '#fff', borderRadius: '40px'
            }} value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())} placeholder='Search Exercises' type='text' />


        </Stack >
    )
}

export default SearchExercises
