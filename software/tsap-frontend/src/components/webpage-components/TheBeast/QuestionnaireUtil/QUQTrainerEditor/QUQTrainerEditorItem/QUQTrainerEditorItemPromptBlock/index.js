import {updatePromptLinesType} from "./functions";
import QUQTrainerEditorAggregateTextEditorBlock
    from "../QUQTrainerEditorAggregateTextEditorBlock";

function QUQTrainerEditorItemPromptBlock(props) {

    let item = props.item;
    let itemPromptItemLines = !!item.promptItemLines ? item.promptItemLines : [];

    return (

        <div
            className="qu-trainer-editor-item-prompt-block-container shadow border border-info p-3 rounded-3">
            <h4>Item prompt</h4>
            <br/>
            <br/>
            <QUQTrainerEditorAggregateTextEditorBlock
                updateAggregateTextLines={(newLines) => updatePromptLinesType(item, newLines, props.updateItem)}
                lines={itemPromptItemLines}/>
        </div>
    )
}

export default QUQTrainerEditorItemPromptBlock;