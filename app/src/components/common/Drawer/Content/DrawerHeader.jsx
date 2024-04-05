import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Stack, Chip } from '@mui/material';

// project import
// import Logo from 'components/Logo';


export default function DrawerHeader() {
    const theme = useTheme();

    const DrawerHeaderStyled = styled(Box, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
        ...theme.mixins.toolbar,
        display: 'flex',
        alignItems: 'center',
        justifyContent: open ? 'flex-start' : 'center',
        paddingLeft: theme.spacing(open ? 3 : 0)
    }));

    return (
        // only available in paid version
        <DrawerHeaderStyled theme={theme} open={open}>
            <Stack direction="row" spacing={1} alignItems="center">
                {/* <Logo /> */}
                <Chip
                    label={process.env.REACT_APP_VERSION}
                    size="small"
                    sx={{ height: 16, '& .MuiChip-label': { fontSize: '0.625rem', py: 0.25 } }}
                    component="a"
                    href="https://github.com/codedthemes/mantis-free-react-admin-template"
                    target="_blank"
                    clickable
                />
            </Stack>
        </DrawerHeaderStyled>
    );
}

DrawerHeader.propTypes = {
    open: PropTypes.bool
};