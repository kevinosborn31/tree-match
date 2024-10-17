import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { Match } from '../interfaces/Match';

const ResultsPage: FC<{ match: Match }> = ({ match }) => (
    <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            textAlign: 'center',
            bgcolor: 'background.paper',
            padding: 3,
        }}
    >
        <Typography variant="h4" sx={{ marginBottom: 2 }}>
            {match.name}
        </Typography>
        <Typography sx={{ maxWidth: '600px' }}>
            {match.description}
        </Typography>
    </Box>
);

export default ResultsPage;