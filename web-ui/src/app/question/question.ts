import {Answer} from "../answer/answer.model";

export interface IQuestion {
    id: number;
    title: string;
    type: string;
    cost: number;
    accuracy: number;
    prompt: string;
    answers: Answer[];
}