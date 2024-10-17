import { FC } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Question } from '../interfaces/Question';

const QuestionsPage: FC<{ question: Question; onAnswer: (answer: string) => void }> = ({ question, onAnswer }) => (
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
        <Typography variant="h5" sx={{ marginBottom: 2 }}>
            {question.question}
        </Typography>
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
            }}
        >
            {question.answers.map((answer: string) => (
                <Button
                    variant="contained"
                    key={answer}
                    onClick={() => onAnswer(answer)}
                    sx={{
                        width: '200px',
                        padding: '10px',
                        bgcolor: 'primary.main',
                        '&:hover': {
                            bgcolor: 'primary.dark',
                        },
                    }}
                >
                    {answer}
                </Button>
            ))}
        </Box>
    </Box>
);

export default QuestionsPage;
