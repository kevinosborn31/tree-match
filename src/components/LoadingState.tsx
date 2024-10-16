import { FC } from 'react';
import { CircularProgress, Box } from '@mui/material';

const LoadingState: FC = () => (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
    </Box>
);

export default LoadingState;
