import _ from "lodash";
import {
    createNewLine
} from "./QUQTrainerEditorAggregateTextEditorLine/functions";

export const deleteLine = (lines, lineId, updateCallbackFunction) => {
    let copy = _.cloneDeep(lines);
    copy = copy.filter(line => line.id !== (lineId+''));
    updateCallbackFunction(copy);
};

export const replaceItemInListById = (lines, newLineData, updateCallbackFunction) => {
    let copy = _.cloneDeep(lines);
    let newLines = _.map(copy, oldItem => oldItem.id === newLineData.id ? newLineData : oldItem);
    updateCallbackFunction(newLines);
};

export const moveLine = (lines, lineId, direction, updateCallbackFunction) => {
    let copy = _.cloneDeep(lines);
    let index = copy.findIndex((line) => line.id === lineId);
    let line = copy[index];
    copy.splice(index, 1);
    let newIndex = index + direction;
    copy.splice(newIndex, 0, line);
    updateCallbackFunction(copy);
};

export const addItemLine = (lines, updateCallbackFunction) => {
    var newItemLines = []
    if (!!!lines) {
        newItemLines.push(createNewLine());
    } else {
        let copy = _.cloneDeep(lines);
        copy.push(createNewLine());
        newItemLines = copy;
    }
    let copy = _.cloneDeep(newItemLines);
    updateCallbackFunction(copy);
}
