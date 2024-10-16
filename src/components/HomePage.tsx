import { FC, useContext, useEffect, useState } from 'react';
import { Container } from '@mui/material';
import { QuestionContext } from '../context/QuestionContext';
import { fetchInitialQuestion, submitAnswer } from '../services/questionService';
import LoadingState from './LoadingState';
import QuestionsPage from './QuestionsPage';
import ResultsPage from './ResultsPage';
import ErrorState from './ErrorState';

const HomePage: FC = () => {
    const context = useContext(QuestionContext);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadQuestion = async () => {
            try {
                const data = await fetchInitialQuestion();
                context?.setCurrentQuestion(data.question);
            } catch (err) {
                setError('Failed to load question');
            } finally {
                setLoading(false);
            }
        };

        loadQuestion();
    }, []);

    const handleAnswer = async (answer: string) => {
        if (context?.currentQuestion) {
            try {
                const data = await submitAnswer(context.currentQuestion.step_id, answer);
                if (data.match) {
                    context.setMatch(data.match);
                } else {
                    context.setCurrentQuestion(data.question);
                }
            } catch (err) {
                setError('Failed to submit answer');
            }
        }
    };

    if (loading) return <LoadingState />;
    if (error) return <ErrorState error={error} />;

    return (
        <Container>
            {context?.match ? (
                <ResultsPage match={context.match} />
            ) : context?.currentQuestion ? (
                <QuestionsPage question={context.currentQuestion} onAnswer={handleAnswer} />
            ) : (
                <LoadingState />
            )}
        </Container>
    );
};

export default HomePage;
