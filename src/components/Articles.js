

import React from 'react'
import Card from './Card';
import Grid from '@mui/material/Grid';



const Articles = ({ data }) => {

    return (
        <>
            {data.map(item => (
                <div>
                    <Grid container spacing={2}>
                        <Grid item xs>
                            <Card title={item.title} author={item.author} description={item.description} date={item.date} link={item.link} />
                        </Grid>

                    </Grid>

                </div>
            ))}
        </>
    )
}

export default Articles;