//TODO Gardens Map / weather / InfoCards
import Mapping from '../components/MapCard';
import Forecast from '../components/WeatherCard';
import InfoCard from '../components/InfoCard';



import { Box, Typography } from '@mui/material';

const GardenPage = () => {
    
    return (
        <Box 
            sx={{
                margin: "70px auto",
                width: "80%",
                padding: "40px 0",
                
            }} >

            
            <Mapping/>
            <Forecast/>

            <Typography variant="h4" textAlign="center">
            Teas, Fashion, Festivals
            </Typography>
            <Box 
                sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, 300px)',
                    justifyContent: 'space-around',
                    rowGap: '20px',
                    columnGap: '1.33%',
                    mx: 'auto',       // Shorthand for margin-left: auto and margin-right: auto
                    maxWidth: '100%', // Ensures it doesn't overflow its parent container
                }}
                    >
                <InfoCard />
                <InfoCard />
                <InfoCard />
            </Box>
        </Box>
    )
}

export default GardenPage;