import { Link } from 'react-router-dom';

// material-ui
import { Grid, Stack, Typography } from '@mui/material';

// project import
import Login from '../components/auth/Login';
import AuthWrapper from '../components/auth/AuthWrapper';


export default function LoginPage() {
    return (
        <AuthWrapper>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
                        <Typography variant="h3">Login</Typography>
                        <Typography component={Link} to="/signup" variant="body1" sx={{ textDecoration: 'none' }} color="primary">
                            Don&apos;t have an account?
                        </Typography>
                    </Stack>
                </Grid>
                <Grid item xs={12}>
                    <Login />
                </Grid>
            </Grid>
        </AuthWrapper>
    )
}
