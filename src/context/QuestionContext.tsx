import React, { createContext, useState, ReactNode, FC } from 'react';
import { Match } from '../interfaces/Match';
import { Question } from '../interfaces/Question';

interface ContextProps {
    currentQuestion: Question | null;
    match: Match | null;
    setCurrentQuestion: (question: Question) => void;
    setMatch: (match: Match) => void;
}

const QuestionContext = createContext<ContextProps | undefined>(undefined);

export const QuestionProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
    const [match, setMatch] = useState<Match | null>(null);

    return (
        <QuestionContext.Provider value={{ currentQuestion, match, setCurrentQuestion, setMatch }}>
            {children}
        </QuestionContext.Provider>
    );
};

export { QuestionContext };
