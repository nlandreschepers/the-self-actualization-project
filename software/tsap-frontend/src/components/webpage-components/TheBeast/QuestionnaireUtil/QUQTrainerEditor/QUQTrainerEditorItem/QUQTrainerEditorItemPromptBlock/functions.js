import _ from "lodash";
import {
    createNewLine
} from "../QUQTrainerEditorAggregateTextEditorBlock/QUQTrainerEditorAggregateTextEditorLine/functions";


export const addItemLine = (item, updateItemCallback) => {
    let itemLines = item.promptItemLines;
    var newItemLines = []
    if (!!!itemLines) {
        newItemLines.push(createNewLine());
    } else {
        itemLines.push(createNewLine());
        newItemLines = itemLines;
    }
    let copy = _.cloneDeep(item);
    copy.promptItemLines = newItemLines;
    updateItemCallback(copy);
}

export const updatePromptLinesType = (item, newPromptLines, updateItemCallback) => {
    let itemCopy = _.cloneDeep(item);
    itemCopy.promptItemLines = newPromptLines;
    updateItemCallback(itemCopy);
}