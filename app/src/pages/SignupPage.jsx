import { Link } from 'react-router-dom';

// material-ui
import { Grid, Stack, Typography } from '@mui/material';

// project import
import Signup from '../components/auth/Signup';
import AuthWrapper from '../components/auth/AuthWrapper';

export default function SignupPage() {
    return (
        <AuthWrapper>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
                        <Typography variant="h3">Sign up</Typography>
                        <Typography component={Link} to="/login" variant="body1" sx={{ textDecoration: 'none' }} color="primary">
                            Already have an account?
                        </Typography>
                    </Stack>
                </Grid>
                <Grid item xs={12}>
                    <Signup />
                </Grid>
            </Grid>
        </AuthWrapper>
    )
}
