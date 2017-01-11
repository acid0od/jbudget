import {Answer} from "../answer/answer.model";

export class Question {
    title: string;
    type: string;
    cost: number;
    accuracy: number;
    prompt: string;
    answers: Answer[];

    constructor(title: string, type: string, cost?: number, accuracy?: number, prompt?: string, answers?: Answer[] ) {
        this.title = title;
        this.type = type;
        this.cost = cost || 0;
        this.accuracy = accuracy || 0;
        this.prompt = prompt || "";
        this.answers = answers || [];
    }
}