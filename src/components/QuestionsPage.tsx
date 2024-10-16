import { FC } from 'react';
import { Button, Typography } from '@mui/material';

const QuestionsPage: FC<{ question: any; onAnswer: (answer: string) => void }> = ({ question, onAnswer }) => (
    <Box>
        <Typography variant="h5">{question.question}</Typography>
        {question.answers.map((answer: string) => (
            <Button key={answer} onClick={() => onAnswer(answer)}>
                {answer}
            </Button>
        ))}
    </Box>
);

export default QuestionsPage;
