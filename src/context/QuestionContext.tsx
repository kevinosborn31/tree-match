import { createContext, useState, ReactNode, FC } from 'react';
import { Match } from '../interfaces/Match';
import { Question } from '../interfaces/Question';
import { fetchInitialQuestion } from '../services/questionService';

interface ContextProps {
    currentQuestion: Question | null;
    match: Match | null;
    setCurrentQuestion: (question: Question) => void;
    setMatch: (match: Match) => void;
    reset: () => void;
    startAgain: () => Promise<void>;
}

const defaultContext: ContextProps = {
    currentQuestion: null,
    match: null,
    setCurrentQuestion: () => { },
    setMatch: () => { },
    reset: () => { },
    startAgain: async () => { },
};

const QuestionContext = createContext<ContextProps>(defaultContext);

export const QuestionProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
    const [match, setMatch] = useState<Match | null>(null);

    const reset = () => {
        setCurrentQuestion(null);
        setMatch(null);
    };

    const startAgain = async () => {
        reset();
        const data = await fetchInitialQuestion();
        setCurrentQuestion(data.question);
    };

    return (
        <QuestionContext.Provider value={{ currentQuestion, match, setCurrentQuestion, setMatch, reset, startAgain }}>
            {children}
        </QuestionContext.Provider>
    );
};

export { QuestionContext };
