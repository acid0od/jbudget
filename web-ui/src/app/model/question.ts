import { Answer } from './answer';

export interface IQuestion {
    id: string;
    title: string;
    type: string;
    cost: number;
    accuracy: number;
    prompt: string;
    answers: Answer[];
}