import _ from "lodash";

export const updateOption = (newOptionItemLines, optionItem, optionItemIndex, options, updateOptionsCallback) => {
    let optionsCopy = _.cloneDeep(options);
    let optionItemCopy = _.cloneDeep(optionItem);
    optionItemCopy.optionItemLines = _.cloneDeep(newOptionItemLines);
    optionsCopy = _.set(optionsCopy, optionItemIndex, optionItemCopy);
    updateOptionsCallback(optionsCopy);
}

export const deleteOption = (optionId, options, updateOptionsCallback) => {
    let copy = _.cloneDeep(options);
    updateOptionsCallback(copy.filter(oldOption => oldOption.id !== optionId));
}

export const updateIsCorrectOption = (optionId, options, isCorrectOption, updateOptionsCallback) => {
    let copy = _.cloneDeep(options);
    copy.forEach(option => {
        if (option.id === optionId) {
            option.isCorrectOption = isCorrectOption;
        }
    });
    updateOptionsCallback(copy);
}

export const moveOption = (optionId, direction, options, updateOptionsCallback) => {
    console.info('Move line');
    let copy = _.cloneDeep(options);
    let index = _.findIndex(copy, (option) => option.id === optionId);
    let option = copy[index];
    copy.splice(index, 1);
    let newIndex = index + direction;
    if (newIndex < 0 || newIndex > copy.length) {
        // noop
        console.info('No op');
        return;
    }
    copy.splice(newIndex, 0, option);
    updateOptionsCallback(copy);
}

export const addOption = (options, updateOptionsCallback) => {
    let copy = _.cloneDeep(options);
    copy.push({
        id: crypto.randomUUID(),
        isCorrectOption: false
    });
    updateOptionsCallback(copy);
}

