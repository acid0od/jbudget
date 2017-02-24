import {InMemoryDbService} from 'angular-in-memory-web-api';

import {IQuestion} from './question';
import {Answer} from "../answer/answer.model";

export class QuestionData implements InMemoryDbService {

    createDb() {
        let questions: IQuestion[] = [
            {
                'id': 2,
                'title': 'title1',
                'type': 'type1',
                'accuracy': 10,
                'cost': 1,
                'prompt': 'prompt1',
                answers: [
                    {
                        'title': 'a_title1',
                        'cost': 10,
                        'checked': false,
                        'right': false,
                        'prompt': 'a_prompt'
                    },
                    {
                        'title': 'a_title2',
                        'cost': 10,
                        'checked': false,
                        'right': true,
                        'prompt': 'a_prompt'
                    },
                    {
                        'title': 'a_title3',
                        'cost': 10,
                        'checked': false,
                        'right': false,
                        'prompt': 'a_prompt'
                    },
                    {
                        'title': 'a_title4',
                        'cost': 10,
                        'checked': false,
                        'right': false,
                        'prompt': 'a_prompt'
                    }
                ]
            }
        ];
        return {questions};
    }
}