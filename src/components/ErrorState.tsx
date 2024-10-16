import { FC } from 'react';
import { Box } from '@mui/material';

const ErrorState: FC<{ error: string }> = ({ error }) => (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        {error}
    </Box>
);

export default ErrorState;
