//TODO: make info cards for the backend data 
import PinkRose from "../images/PinkRoseSquare.jpeg"

import { Box, FlexBox, Divider, Typography } from "@mui/material";



const InfoCard = () => {

    const item= { id: '01',
        attributes: {
            name: "Pink Rose",
            shortDescription: "A beautiful pink rose.",
            price: 19.99
        }
     };

    
    return (
            <Box key={`grid-item-${item.id}`}>
                  <Box p="15px 0">
                    <Box flex="1 1 40%">
                      <img
                        alt={item.attributes.name}

                        width="200px"
                        height="200px"
                        src={PinkRose}
                        
                        // onClick={() => navigate(`/item/${item.id}`)}
                        style={{ cursor: "pointer" }}
                      />

                    </Box>
                    <Box flex="1 1 60%">
                      < Box mb="5px">
                        <Typography fontWeight="bold">
                        {/* {item.attributes.name} */}
                        TEST NAME
                        </Typography>
                        
                      </ Box>
                      <Typography>{item.attributes.shortDescription}</Typography>
                      < Box m="15px 0">                         
                      <Typography fontWeight="bold">
                        {/* ${item.attributes.price.toFixed(2)} */}
                        TEST Link
                        </Typography>
                      </ Box>
                    </Box>
                  </Box>
                  <Divider />
            </Box>
    )
}

export default InfoCard;