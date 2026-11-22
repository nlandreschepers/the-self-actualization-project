import _ from "lodash";

export function onCardinalityChange(item, newCardinality, updateItem) {
    let copy = _.cloneDeep(item);
    copy.cardinality = newCardinality;
    updateItem(copy);
}

export const updateOptions = (item, newOptions, updateItemCallback) => {
    let copy = _.cloneDeep(item);
    copy.options = newOptions;
    updateItemCallback(copy);
}

export const updateItemPromptTitle = (item, newPromptTitle, updateItem) => {
    let copy = _.cloneDeep(item);
    copy.promptTitle = newPromptTitle;
    updateItem(copy);
}
