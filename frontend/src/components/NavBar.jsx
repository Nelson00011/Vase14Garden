//Pages
import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { Badge, Box, IconButton } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ParkIcon from '@mui/icons-material/Park';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from "react-router-dom";
import YardIcon from '@mui/icons-material/Yard';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
//style
import { shades } from "../theme";
import classes from './NavBar.module.css';
// import { setIsCartOpen } from '../state';


function NavBar (){
    const navigate = useNavigate();
    // const dispatch = useDispatch();
    // const cart = useSelector((state) => state.cart.cart);
    const [login, setLogin] = useState(false);
    const token = localStorage.getItem('token')
    //TODO HERE Auth() LOGO
    useEffect(()=>
        setLogin(localStorage.getItem('token', false)), [token]
    )
    

    // const loggedIn = <>
    //     <IconButton 
    //     onClick={()=>navigate('/profile')}
    //     className={classes.iconButton}>
    //         <PersonIcon /> 
    //     </IconButton>
    //     <IconButton 
    //     onClick={()=> {
    //         localStorage.setItem('token', false)
    //         setLogin(false)
    //         navigate('/home')
    //     }}
    //     onClickclassName={classes.iconButton}>
    //         <LogoutIcon /> 
    //     </IconButton>
    //     </>

    // const loggedOut = <>
    //     <IconButton 
    //     onClick={()=>navigate('/auth')}
    //     className={classes.iconButton}>
    //             <LoginIcon /> 
    //     </IconButton>
    //     </>
    
    return (
        <Box className={classes.outterBox}>
            <Box className={classes.innerBox}>
                <Box onClick={() =>navigate('/')} 
                    sx={{ "&:hover": { cursor: "pointer" } 
                    ,
                    color: "#4caf50",
                    fontWeight: 'bold'}}
                   >Rose Grounds</Box>
                <Box className={classes.icons}>
                    <IconButton className={classes.iconButton}
                    onClick={() =>navigate('/facts')} 
                    sx={{ "&:hover": { cursor: "pointer" } }}
                    color={shades.secondary[500]}
                     >
                    <SearchOutlinedIcon />
                    </IconButton>
                    {/* {login && loggedIn}
                    {!login && loggedOut} */}
                     {/* LogIn Icon Test */}

                     <IconButton className={classes.iconButton}
                     onClick={() =>navigate('/info')} 
                     sx={{ "&:hover": { cursor: "pointer" } }}
                     color={shades.secondary[500]}>
                        <InfoIcon />
                    </IconButton>
                    
                    <IconButton className={classes.iconButton}
                    onClick={() =>navigate('/grow')} 
                    sx={{ "&:hover": { cursor: "pointer" } }}
                    color={shades.secondary[500]}
                    >
                        <YardIcon />
                    </IconButton>

                    <IconButton className={classes.iconButton}
                    onClick={() =>navigate('/gardens')} 
                    sx={{ "&:hover": { cursor: "pointer" } }}
                    color={shades.secondary[500]}
                    >
                        <ParkIcon />
                    </IconButton>
                     
                     
                    {/* <Badge
                        badgeContent={cart.length}
                        color="secondary"
                        invisible={cart.legth === 0}
                        sx={{
                            "& .MuiBadge-badge": {
                              right: 5,
                              top: 5,
                              padding: "0 4px",
                              height: "14px",
                              minWidth: "13px",
                            },
                          }}
                        >
                    <IconButton className={classes.iconButton} onClick={() => dispatch(setIsCartOpen({}))}>
                        <ShoppingBagOutlined />
                    </IconButton>
                    </Badge> */}
                    
                </Box>
            </Box>
        </Box>
    )
};

export default NavBar;