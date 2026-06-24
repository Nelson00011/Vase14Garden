import React from 'react';

import { Box, Typography, useMediaQuery } from '@mui/material';
//COMMNETS: components infocards
import InfoCard from './InfoCard';



const MainInfo = () => {

    const breakPoint = useMediaQuery("(min-width:600px)");
  
  //USE EFFECT HERE for API CALL First 6 in LIST ONLY! 
      // async function getRoses() {
      //       const items = await fetch(
      //         "http://localhost:8000/api/roses",
      //         { method: "GET" }
      //       );

      //       const itemsJSON = await items.json();
      //       dispatch(setItems(itemsJSON.data));
      //     }

      // useEffect(() => {
      //     getRoses();
      //   }, []); 

  
    return (<Box sx={{ width: '80%', margin: '80px auto' }}>
        <Typography sx={{ variant: "h3", textAlign: 'center' }}>
          Main Info
        </Typography>
        
        <Box
          sx={{
            mx: 'auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, 300px)',
            justifyContent: 'space-around',
            rowGap: '20px',
            columnGap: '1.33%'
          }}
        > 
        TESTING HERE FOR API call
        <InfoCard />

           {/* {value === "all" && items.map((item) => (
              <Item item={item} key={`${item.name}-${item.id}`} />
            ))} */}
            HISTORICAL INFORMATION
            TOP PARKS - PHOTO BASED
            
        </Box>
      </Box>
      );
  };
  
  export default MainInfo;

