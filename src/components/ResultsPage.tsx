import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { Match } from '../interfaces/Match';

const ResultsPage: FC<{ match: Match }> = ({ match }) => (
    <Box>
        <Typography variant="h4">{match.name}</Typography>
        <Typography>{match.description}</Typography>
    </Box>
);

export default ResultsPage;
