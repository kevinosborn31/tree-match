import { FC, useContext, useEffect } from 'react';
import { Container } from '@mui/material';
import { QuestionContext } from '../context/QuestionContext';
import { fetchInitialQuestion, submitAnswer } from '../services/questionService';
import LoadingState from './LoadingState';
import QuestionsPage from './QuestionsPage';
import ResultsPage from './ResultsPage';

const HomePage: FC = () => {
    const context = useContext(QuestionContext);

    useEffect(() => {
        const loadQuestion = async () => {
            const data = await fetchInitialQuestion();
            context?.setCurrentQuestion(data.question);
        };
        loadQuestion();
    }, [context]);

    const handleAnswer = async (answer: string) => {
        if (context?.currentQuestion) {
            const data = await submitAnswer(context.currentQuestion.step_id, answer);
            if (data.match) {
                context.setMatch(data.match);
            } else {
                context.setCurrentQuestion(data.question);
            }
        }
    };

    if (!context) return <LoadingState />;

    return (
        <Container>
            {context.match ? (
                <ResultsPage match={context.match} />
            ) : context.currentQuestion ? (
                <QuestionsPage question={context.currentQuestion} onAnswer={handleAnswer} />
            ) : (
                <LoadingState />
            )}
        </Container>
    );
};

export default HomePage;
