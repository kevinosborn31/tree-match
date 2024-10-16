import { FC } from 'react';
import { Box, Typography } from '@mui/material';

const ResultsPage: FC<{ match: any }> = ({ match }) => (
    <Box>
        <Typography variant="h4">{match.name}</Typography>
        <Typography>{match.description}</Typography>
    </Box>
);

export default ResultsPage;
