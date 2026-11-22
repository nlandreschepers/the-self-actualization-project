import _ from "lodash";

export const updateFeedbackLines = (item, newFeedbackLines, updateItemCallback) => {
    let itemCopy = _.cloneDeep(item);
    itemCopy.feedbackLines = newFeedbackLines;
    updateItemCallback(itemCopy);
}