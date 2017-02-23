import {PipeTransform, Pipe} from '@angular/core';
import {IQuestion} from './question';

@Pipe({
    name: 'questionFilter'
})
export class QuestionFilterPipe implements PipeTransform {

    transform(value: IQuestion[], filterBy: string): IQuestion[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((question: IQuestion) =>
            question.title.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}