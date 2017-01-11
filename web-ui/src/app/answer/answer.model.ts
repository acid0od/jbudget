export class Answer {
    title: string;
    cost: number;
    right: number;
    prompt: string;
    checked: boolean;

    constructor (title: string, cost: number, right: number, promtp?: string, checked?: boolean) {
        this.title = title;
        this.cost = cost;
        this.right = right;
        this.prompt = promtp || "";
        this.checked = checked || false;
    }
}