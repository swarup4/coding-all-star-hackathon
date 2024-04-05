// material-ui
import { Box, Typography } from '@mui/material';

// project import
import NavGroup from './NavGroup';

export default function Navigation() {

    const menuItems = {
        items: [dashboard, pages, utilities, support]
      };

    const navGroups = menuItems.items.map((item, ind) => {
        switch (item.type) {
            case 'group':
                return <NavGroup key={ind} item={item} />;
            default:
                return (
                    <Typography key={ind} variant="h6" color="error" align="center">
                        Fix - Navigation Group
                    </Typography>
                );
        }
    });

    return <Box sx={{ pt: 2 }}>{navGroups}</Box>;
}
