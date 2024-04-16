import Navigation from './Navigation';
import SimpleBarScroll from '../../third-party/SimpleBar';


export default function DrawerContent() {
    return (
        <SimpleBarScroll
            sx={{
                '& .simplebar-content': {
                    display: 'flex',
                    flexDirection: 'column'
                }
            }}
        >
            <Navigation />
        </SimpleBarScroll>
    )
}
