const API_URL = "http://fe-interview-api-dev.ap-southeast-2.elasticbeanstalk.com/api";

export const fetchInitialQuestion = async () => {
    const response = await fetch(`${API_URL}/begin`);
    if (!response.ok) throw new Error('Failed to fetch initial question');
    return response.json();
};

export const submitAnswer = async (step_id: number, answer: string) => {
    const response = await fetch(`${API_URL}/answer`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ step_id, answer }),
    });
    if (!response.ok) throw new Error('Failed to submit answer');
    return response.json();
};
