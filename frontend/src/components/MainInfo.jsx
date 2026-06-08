import React from 'react';

import { Box, Typography, useMediaQuery } from '@mui/material';
//COMMNETS: components infocards
import InfoCard from './InfoCards';



const MainInfo = () => {

    const breakPoint = useMediaQuery("(min-width:600px)");
  
  
  
    return (<Box width="80%" margin="80px auto">
        <Typography variant="h3" textAlign="center">
          Main Info
        </Typography>
        
        <Box
          margin="0 auto"
          display="grid"
          gridTemplateColumns="repeat(auto-fill, 300px)"
          justifyContent="space-around"
          rowGap="20px"
          columnGap="1.33%"
        > 
        TESTING HERE 
        <InfoCard />

           {/* {value === "all" && items.map((item) => (
              <Item item={item} key={`${item.name}-${item.id}`} />
            ))} */}
            ADD INFO CARDS HERE
            
        </Box>
      </Box>
      );
  };
  
  export default MainInfo;

