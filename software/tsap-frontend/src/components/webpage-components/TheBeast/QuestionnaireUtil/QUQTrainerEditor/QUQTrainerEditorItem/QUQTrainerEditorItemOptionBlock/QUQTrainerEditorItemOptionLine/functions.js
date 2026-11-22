import _ from "lodash";

export const updateOptionText = (option, newText, updateOptionCallback) => {
    let copy = _.cloneDeep(option);
    copy.text = newText;
    updateOptionCallback(copy);
}

export const updateOptionIsCorrectOption = (option, isCorrectOption, updateOptionCallback) => {
    let copy = _.cloneDeep(option);
    copy.isCorrectOption = isCorrectOption;
    updateOptionCallback(copy);
}