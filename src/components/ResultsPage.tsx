import { FC, useContext } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Match } from '../interfaces/Match';
import { QuestionContext } from '../context/QuestionContext';

const ResultsPage: FC<{ match: Match }> = ({ match }) => {
    const { startAgain } = useContext(QuestionContext);

    return (
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
            <Button
                variant="contained"
                onClick={startAgain}
                sx={{ marginTop: 3 }}
            >
                Restart
            </Button>
        </Box>
    );
};

export default ResultsPage;
