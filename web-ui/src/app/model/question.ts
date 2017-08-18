import { Answer } from './answer';

export interface IQuestion {
    id: string;
    title: string;
    type: string;
    cost: number;
    accuracy: number;
    prompt: string;
    state: string;
    correctness: string;
    selected: number;
    answers: Answer[];
}
