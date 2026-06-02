import { Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { shades } from "./../theme";


function Footer(){
    const { palette: { neutral }} = useTheme();
    

    return(
        <Box sx={{
                marginTop: "70px",
                padding: "40px 0",
                bgcolor: "#f5f5f5", // Or 'neutral.light'
            }}>
      <Box
        sx={{
        width: "80%",
        margin: "auto",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        rowGap: "30px",
        columnGap: "clamp(20px, 30px, 40px)",
        }}
      >

        <Box width="clamp(20%, 30%, 40%)">
            <Typography 
            
            variant="h4"
            sx={{
                fontWeight: 'bold',
                mb: '30px',
                color: shades.secondary[500]
            }}
            >
                Rose Grounds
            </Typography>
            <div>
            Throughout our collective history, roses have stood as some of the most enduring and storied cultivated plants. For those captivated by this species, I hope this brief overview serves as an engaging summary.
            Qui iudicabit adipiscing conclusionemque an,
            eu eirmod labores vix, ius impetus quaeque iudicabit eu. 
            </div>
            </Box>
            <Box>
                <Typography 
                 sx={{
                        typography: 'h4',
                        fontWeight: 'bold',
                        mb: '30px',
                        color: shades.secondary[500]
                    }}>
                    ABOUT US
                </Typography>
                <Typography mb="30px">Mission Statement</Typography>
                <Typography mb="30px">Our Team</Typography>
                <Typography mb="30px">Terms & Conditions</Typography>
                <Typography mb="30px">Privacy Policy</Typography>
                 
            </Box>
            <Box>
                <Typography 
                  sx={{
                        typography: 'h4',
                        fontWeight: 'bold',
                        mb: '30px',
                        color: shades.secondary[500]
                    }}>
                    HELP
                </Typography>
                <Typography mb="30px">Brief History</Typography>
                <Typography mb="30px">Co-Evolution</Typography>
                <Typography mb="30px">Rose Varieties</Typography>
                <Typography mb="30px">Growth Tips</Typography>
    
            </Box>
        <Box sx={{ width: 'clamp(20%, 25%, 30%)' }}>
        <Typography 
                sx={{
                        typography: 'h4',
                        fontWeight: 'bold',
                        mb: '30px',
                        color: shades.secondary[500]
                    }}
                 >
                    CONTACT US
                 </Typography>
                 <Typography mb="30px">Rose Bud, San Francisco 55555</Typography>
                 <Typography mb="30px">EMAIL: info@rosebud.com</Typography>
                 <Typography mb="30px">PHONE: (555)-555-5555</Typography>


        </Box>
        </Box>
    </Box>
    )
}

export default Footer;