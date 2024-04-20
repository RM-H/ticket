import {useState} from "react";
import {
    Box,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    Typography,
    IconButton
} from "@mui/material";
import {
    PersonPin,
    MusicNoteOutlined,
    EventSeatOutlined,
    TheaterComedyOutlined,
    ArchiveOutlined,
    ManageSearchOutlined,
    ContactlessOutlined
} from '@mui/icons-material'
import {Menu} from '@mui/icons-material'
import {useSelector} from "react-redux";
import {userinfoSelector} from "../Slices/userSlice";

import {NavDropDown, Navsearch} from './index'


import {useNavigate} from 'react-router-dom'


const Navbar = (props) => {

    // using this to make the active page noticeable in navbar
    const [activePage, setActivePage] = useState(0)
    const handleActivePage = (page) => {
        setActivePage(page)
    }


    const nav = useNavigate()

    const drawerWidth = 240;
    const {window} = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setTimeout(()=> setMobileOpen((prevState) => !prevState),300)

    };


    // checking to see if user exists or not in localstorage


    let user
    const status = useSelector((state) => state.userinfo.status)
    const dataneeded = useSelector(userinfoSelector)


    if (status === 'done') {
        user =
            <button onClick={() => nav('/dashboard')} className='button clrone pinar borderrad1 has-text-weight-bold'>
                <PersonPin/>{dataneeded.user.name}  </button>

    } else {
        user =
            <button onClick={() => nav('/login')} className='button clrone pinar borderrad1 has-text-weight-bold'>
                <PersonPin/>ورود / ثبت نام
            </button>

    }


    const drawer = (
        <Box sx={{textAlign: 'center'}}>
            <Typography onClick={() => {
                nav('/');
                handleActivePage(0)
            }} className='pinar' variant="h6" sx={{my: 2}}>
               بیلیتیم
            </Typography>

            <Divider sx={{my: 1}}/>



            <List sx={{'& .Mui-selected': {border: '0.15rem dashed #601FEB' , borderRadius:'0.5rem' , backgroundColor:'#ffffff' , mx:1 , justifyContent:'start' , pr:'2rem'}}}>

                <ListItem onClick={handleDrawerToggle} disablePadding >
                    <ListItemButton  selected={activePage === 1} onClick={() => {
                        nav('/concerts');
                        handleActivePage(1)
                    }}
                                    sx={{textAlign: 'center' , height:'3rem'}}>
                        <Typography className='pinar' variant="h6" sx={{my: 2}}>
                            کنسرت ها
                        </Typography>
                    </ListItemButton>
                </ListItem>

                <ListItem onClick={handleDrawerToggle} disablePadding>
                    <ListItemButton selected={activePage === 2} onClick={() => {
                        nav('/conference');
                        handleActivePage(2)
                    }}
                                    sx={{textAlign: 'center' , height:'3rem'}}>
                        <Typography className='pinar' variant="h6" sx={{my: 2}}>
                            همایش
                        </Typography>
                    </ListItemButton>
                </ListItem>

                <ListItem onClick={handleDrawerToggle} disablePadding>
                    <ListItemButton selected={activePage === 3} onClick={() => {
                        nav('/theatre');
                        handleActivePage(3)
                    }} sx={{textAlign: 'center' , height:'3rem'}}>
                        <Typography className='pinar' variant="h6" sx={{my: 2}}>
                            تئاتر
                        </Typography>
                    </ListItemButton>
                </ListItem>
                <ListItem onClick={handleDrawerToggle} disablePadding>
                    <ListItemButton selected={activePage === 4} onClick={() => {
                        nav('/live');
                        handleActivePage(4)
                    }} sx={{textAlign: 'center' , height:'3rem'}}>
                        <Typography className='pinar' variant="h6" sx={{my: 2}}>
                            آرشیو ویدیویی
                        </Typography>
                    </ListItemButton>
                </ListItem>

                <ListItem onClick={handleDrawerToggle} disablePadding>
                    <ListItemButton selected={activePage === 5} onClick={() => {
                        nav('/inquiry');
                        handleActivePage(5)
                    }} sx={{textAlign: 'center' , height:'3rem'}}>
                        <Typography className='pinar' variant="h6" sx={{my: 2}}>
                            پیگیری خرید
                        </Typography>
                    </ListItemButton>
                </ListItem>

                <ListItem onClick={handleDrawerToggle} disablePadding>
                    <ListItemButton selected={activePage === 6} onClick={() => {
                        nav('/contact');
                        handleActivePage(6)
                    }} sx={{textAlign: 'center' , height:'3rem'}}>
                        <Typography className='pinar' variant="h6" sx={{my: 2}}>
                            تماس با ما
                        </Typography>
                    </ListItemButton>
                </ListItem>


            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;


    return (
        <>
            <header>


                <nav className="navbar stcikynavmobile paddingtopandbuttom20 clrfive is-justify-content-center pb-0 "
                     role="navigation"
                     aria-label="main navigation" style={{width: '100%'}}
                >


                    {/*Responsive Drawer*/}
                    <nav>
                        <Drawer
                            container={container}
                            variant="temporary"
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            anchor='right'
                            ModalProps={{
                                keepMounted: true, // Better open performance on mobile.
                            }}
                            sx={{
                                display: {xs: 'block', sm: 'block' , md:'block'},
                                '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                            }}
                        >
                            {drawer}
                        </Drawer>
                    </nav>

                    {/*Responsive Drawer*/}

                    <div className='columns m-0 wdith100 navborderbotblack '>

                        <div className='is-hidden-desktop has-text-left navpadstart150 navpadend150 '>
                            {
                                user
                            }
                        </div>

                        <div
                            className='column is-12-mobile is-5-desktop  navpadstart150   '>
                            <div className='is-flex is-flex-direction-row  yekan'>
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    edge="start"
                                    onClick={handleDrawerToggle}
                                    sx={{ml: 1, display: {lg: 'none'}}}
                                >
                                    <Menu/>
                                </IconButton>
                                
                                {/*<p className='navbar-item py-0'>*/}
                                {/*    <img src="/images/logo.png"  width={200} height={50} style={{maxHeight:'55px'}}/>*/}
                                {/*</p>*/}


                                <a onClick={() => {
                                    nav('/');
                                    handleActivePage(0)
                                }}
                                   className={`navbar-item is-hidden-mobile underline px-0 ${activePage === 0 && 'navactive'}`}
                                   style={{alignItems: 'center'}}>
                                    <img src="/images/logo.png" width={150} height={50} style={{maxHeight: '55px'}}/>


                                    {/*بیلیتیم*/}
                                </a>
                                <div className='is-hidden-desktop is-flex is-justify-content-flex-end-flex-end pr-3 '>
                                    <NavDropDown/>
                                    <Navsearch/>

                                </div>


                                <div className='is-flex is-flex-direction-row is-hidden-touch '>
                                    <a onClick={() => {
                                        nav('/concerts');
                                        handleActivePage(1)
                                    }
                                    }
                                       className={`navbar-item  underline ${activePage === 1 && 'navactive'}`}>
                                        <MusicNoteOutlined/>
                                        کنسرت
                                    </a>
                                    <a onClick={() => {
                                        nav('/conference');
                                        handleActivePage(2)
                                    }
                                    }
                                       className={`navbar-item  underline ${activePage === 2 && 'navactive'}`}>
                                        <EventSeatOutlined/>
                                        همایش
                                    </a>
                                    <a onClick={() => {
                                        nav('/theatre');
                                        handleActivePage(3)
                                    }
                                    }
                                       className={`navbar-item  underline ${activePage === 3 && 'navactive'}`}>
                                        <TheaterComedyOutlined/>
                                        تئاتر
                                    </a>


                                    <a onClick={() => {
                                        nav('/live');
                                        handleActivePage(4)
                                    }}
                                       className={`navbar-item  underline ${activePage === 4 && 'navactive'}`}>
                                        <ArchiveOutlined/>
                                        آرشیو ویدیویی
                                    </a>


                                    <a onClick={() => {
                                        nav('/inquiry');
                                        handleActivePage(5)
                                    }}
                                       className={`navbar-item  underline ${activePage === 5 && 'navactive'}`}>
                                        <ManageSearchOutlined/>
                                        پیگیری خرید
                                    </a>


                                    <a onClick={() => {
                                        nav('/contact');
                                        handleActivePage(6)
                                    }}
                                       className={`navbar-item  underline ${activePage === 6 && 'navactive'}`}>
                                        <ContactlessOutlined/>
                                        ارتباط با ما
                                    </a>


                                </div>


                            </div>
                        </div>


                        <div
                            className='column is-12-mobile is-7 is-hidden-touch  navpadend150    is-flex   is-justify-content-end  navborderbotblack  '>
                            <div className='yekan flex-JCS-ACS '>
                                <NavDropDown/>
                                <Navsearch/>

                                {
                                    user
                                }


                            </div>
                        </div>


                    </div>


                </nav>

            </header>

        </>
    )
}
export default Navbar;