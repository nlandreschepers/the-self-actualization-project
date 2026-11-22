import {updateStateCloneDeep} from "../../../../../util/ReactStateUtils";
import _ from "lodash";

export const resetJson = (setTitle, setItems) => {
    setTitle("");
    setItems([]);
    localStorage.removeItem("items");
    localStorage.removeItem("title");
}

export const processFileContents = (fileText, updateTitle, updateItems) => {
    try {
        let a = JSON.parse(fileText);
        updateTitle(a.title);
        updateItems(a.items);
    } catch (e) {
        console.error(e);
    }
}

export const updateItem = (items, item, updateItemsCallback) => {
    let copy = _.cloneDeep(items);
    let newItems = _.map(copy, oldItem => oldItem.id === item.id ? item : oldItem);
    updateItemsCallback(newItems);
}

export const deleteItem = (items, itemId, updateItemsCallback) => {
    let copy = _.cloneDeep(items);
    let newItems = _.filter(copy, oldItem => oldItem.id !== itemId);
    updateItemsCallback(newItems);
}

export const onManualEditingChange = (json, updateTitle, updateItems) => {
    try {
        let parsed = JSON.parse(json);
        updateTitle(parsed.title);
        updateItems(parsed.items);
    } catch (e) {
        console.error(e);
    }
}

export const addItem = (items, updateItems) => {
    updateStateCloneDeep(items, (copy) => copy.push({
        id: crypto.randomUUID(),
        promptTitle: 'Item prompt title',
        promptItemLines: [
            {
                "id": "cabef3c1-849f-48e5-a704-4303a472ed1d",
                "text": "New item prompt text line.",
                "type": "AGGREGATE_TEXT_LINE_TYPE_PLAIN_TEXT"
            }
        ],
        cardinality: 'SINGLE',
        options: [{
            id: crypto.randomUUID(),
            optionItemLines: [
                {
                    id: crypto.randomUUID(),
                    text: 'Option prompt line 1',
                    type: "AGGREGATE_TEXT_LINE_TYPE_PLAIN_TEXT"
                }
            ],
            isCorrectOption: true
        },{
            id: crypto.randomUUID(),
            optionItemLines: [
                {
                    id: crypto.randomUUID(),
                    text: 'Option prompt line 1',
                    type: "AGGREGATE_TEXT_LINE_TYPE_PLAIN_TEXT"
                }
            ],
            isCorrectOption: false
        },{
            id: crypto.randomUUID(),
            optionItemLines: [
                {
                    id: crypto.randomUUID(),
                    text: 'Option prompt line 1',
                    type: "AGGREGATE_TEXT_LINE_TYPE_PLAIN_TEXT"
                }
            ],
            isCorrectOption: false
        },{
            id: crypto.randomUUID(),
            optionItemLines: [
                {
                    id: crypto.randomUUID(),
                    text: 'Option prompt line 1',
                    type: "AGGREGATE_TEXT_LINE_TYPE_PLAIN_TEXT"
                }
            ],
            isCorrectOption: false
        }]
    }), updateItems);
}
