import {AGGREGATE_TEXT_LINE_TYPE_PLAIN_TEXT} from "./constants";
import _ from "lodash";

export const createNewLine = () => {
    return {
        id: crypto.randomUUID(),
        text: 'New line.',
        type: AGGREGATE_TEXT_LINE_TYPE_PLAIN_TEXT
    }
};

export const updateLineDataText = (lineData, newText, updateLineDataCallback) => {
    let lineDataCopy = _.cloneDeep(lineData);
    lineDataCopy.text = newText;
    updateLineDataCallback(lineDataCopy);
}

export const updateLineDataType = (lineData, newType, updateLineDataCallback) => {
    let lineDataCopy = _.cloneDeep(lineData);
    lineDataCopy.type = newType;
    updateLineDataCallback(lineDataCopy);
}

export const updateLineDataIsSelected = (lineData, isSelected, updateLineDataCallback) => {
    let lineDataCopy = _.cloneDeep(lineData);
    lineDataCopy.isSelected = isSelected;
    updateLineDataCallback(lineDataCopy);
}