import { FC } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Question } from '../interfaces/Question';

const QuestionsPage: FC<{ question: Question; onAnswer: (answer: string) => void }> = ({ question, onAnswer }) => (
    <Box>
        <Typography variant="h5">{question.question}</Typography>
        {question.answers.map((answer: string) => (
            <Button variant="contained" key={answer} onClick={() => onAnswer(answer)}>
                {answer}
            </Button>
        ))}
    </Box>
);

export default QuestionsPage;
