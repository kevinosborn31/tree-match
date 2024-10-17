import { render, screen, fireEvent } from '@testing-library/react';
import QuestionsPage from './QuestionsPage';
import { Question } from '../interfaces/Question';

const mockQuestion: Question = {
    step_id: 1,
    question: "What's your favorite kind of tree?",
    answers: ["Fruit trees", "Gum trees", "Red-black trees"],
};

describe('QuestionsPage', () => {
    const mockOnAnswer = jest.fn();

    beforeEach(() => {
        render(<QuestionsPage question={mockQuestion} onAnswer={mockOnAnswer} />);
    });

    test('renders the question text', () => {
        expect(screen.getByText(/what's your favorite kind of tree\?/i)).toBeInTheDocument();
    });

    test('renders the answer buttons', () => {
        mockQuestion.answers.forEach(answer => {
            expect(screen.getByRole('button', { name: answer })).toBeInTheDocument();
        });
    });

    test('calls onAnswer function when a button is clicked', () => {
        const button = screen.getByRole('button', { name: 'Gum trees' });
        fireEvent.click(button);
        expect(mockOnAnswer).toHaveBeenCalledWith('Gum trees');
    });
});
