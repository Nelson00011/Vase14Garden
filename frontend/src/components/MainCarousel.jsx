import { Box, Typography, IconButton, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';

//COMMENTS: Carousel Design Import Below
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { shades } from './../theme';

//COMMENTS: Imports all images from ASSETS folder
const importAll = (r) =>
  r.keys().reduce((acc, item) => {
    acc[item.replace("./", "")] = r(item);
    return acc;
  }, {});

export const heroTextureImports = importAll(
  require.context("./../assets", false, /\.(png|jpe?g|svg)$/)
);

//COMMENTS: Components below:
const MainCarousel = () => {

  const navigate = useNavigate(); // <-- Add this line

    return (
      <Carousel
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        renderArrowPrev={(onClickHandler, hasPrev, label) => (
          <IconButton
            onClick={onClickHandler}
            sx={{
              position: "absolute",
              top: "50%",
              left: "0",
              color: "white",
              padding: "5px",
              zIndex: "10",
            }}
          >
            <NavigateBeforeIcon sx={{ fontSize: 40 }} />
          </IconButton>
        )}
        renderArrowNext={(onClickHandler, hasNext, label) => (
          <IconButton
            onClick={onClickHandler}
            sx={{
              position: "absolute",
              top: "50%",
              right: "0",
              color: "white",
              padding: "5px",
              zIndex: "10",
            }}
          >
            <NavigateNextIcon sx={{ fontSize: 40 }} />
          </IconButton>
        )}
      >
        {Object.values(heroTextureImports).map((texture, index) => (
          <Box key={`carousel-image-${index}`}>
            <img
              src={texture}
              alt={`carousel-${index}`}
              style={{
                width: "100%",
                height: "700px",
                objectFit: "cover",
                backgroundAttachment: "fixed",
              }}
            />
            <Box
            sx={{
            position: 'absolute',
            top: '45%',
            left: '50%',
            
            transform: 'translate(-50%, -50%)', // Perfectly centers the box
            bgcolor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background
            color: 'white',
            p: 4,
            borderRadius: 2,
            margin: "0 auto",
            zIndex: 10, // Ensures it sits above the carousel
            }}
            >
              <Typography color={shades.secondary[200]}>Spilling Tea in the Garden</Typography>
              <Typography variant="h1">Rose Grounds</Typography>
              
              <Typography
                
                onClick={() =>navigate('/gardens')} 
                sx={{ 
                  "&:hover": { cursor: "pointer" }, 
                  textDecoration: "underline",
                  fontWeight: "bold",
                  color: shades.secondary[300]
                }}
              >
                Discover Rose Gardens
              </Typography>
            </Box>
          </Box>
        ))}
      </Carousel>
    );
  };
  
  export default MainCarousel;