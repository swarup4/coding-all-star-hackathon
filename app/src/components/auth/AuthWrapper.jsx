// material-ui
import { Box, Grid } from '@mui/material';

// project import
// import Logo from 'components/Logo';
import AuthFooter from './AuthFooter';
import MainCard from '../common/MainCard';

// assets
import AuthBackground from '../../assets/images/auth/AuthBackground';


export default function AuthWrapper({ children }) {
    return (
        <Box sx={{ minHeight: '100vh' }}>
            <AuthBackground />
            <Grid container direction="column" justifyContent="flex-end"
                sx={{ minHeight: '100vh' }}
            >
                {/* <Grid item xs={12} sx={{ ml: 3, mt: 3 }}>
                    <Logo />
                </Grid> */}
                <Grid item xs={12}>
                    <Grid item xs={12} container justifyContent="center" alignItems="center"
                        sx={{ minHeight: { xs: 'calc(100vh - 134px)', md: 'calc(100vh - 112px)' } }}
                    >
                        <Grid item>
                            {/* <AuthCard>{children}</AuthCard> */}
                            <MainCard
                                sx={{
                                    maxWidth: { xs: 400, lg: 475 },
                                    margin: { xs: 2.5, md: 3 },
                                    '& > *': {
                                        flexGrow: 1,
                                        flexBasis: '50%'
                                    }
                                }}
                                content={false}
                                border={false}
                                boxShadow
                            >
                                <Box sx={{ p: { xs: 2, sm: 3, md: 4, xl: 5 } }}>{children}</Box>
                            </MainCard>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
                    <AuthFooter />
                </Grid>
            </Grid>
        </Box>
    )
}
