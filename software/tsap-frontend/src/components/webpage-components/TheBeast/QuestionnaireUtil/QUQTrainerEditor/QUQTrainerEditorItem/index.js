import BootstrapAccordionItem from "../../../../common/BootstrapAccordionItem";
import QUQTrainerEditorItemOptionBlock from "./QUQTrainerEditorItemOptionBlock";
import QUQTrainerEditorCardinality from "./QUQTrainerEditorCardinality";
import QUQTrainerEditorItemPrompt from "./QUQTrainerEditorItemPrompt";
import QUQTrainerEditorItemPromptBlock from "./QUQTrainerEditorItemPromptBlock";
import QUQTrainerEditorFeedbackBlock from "./QUQTrainerEditorFeedbackBlock";
import {
    onCardinalityChange,
    updateItemPromptTitle,
    updateOptions
} from "./functions";
import QUQTrainerEditoQUQTrainerEditorItemPreview
    from "./QUQTrainerEditorItemPreview";

function QUQTrainerEditorItem(props) {

    let item = props.item;
    let itemPrompt = item.prompt;
    let itemPromptTitle = item.promptTitle;

    return (
        <>
            <BootstrapAccordionItem itemPrompt={itemPromptTitle}>

                <button
                    className="btn btn-danger" type="button"
                    onClick={() => props.deleteItem(item.id)}>
                    <i
                        className="fa-solid fa-trash-can"></i>
                </button>

                <br/><br/>

                <QUQTrainerEditorItemPrompt
                    updateItemPromptTitle={(newPromptTitle) => updateItemPromptTitle(item, newPromptTitle, props.updateItem)}
                    itemPromptTitle={itemPromptTitle}
                    item={item}/>

                <br/>

                <QUQTrainerEditorItemPromptBlock item={item}
                                                 updateItem={props.updateItem}/>

                <br/>

                <QUQTrainerEditorCardinality
                    handleCardinalityChange={(newCardinality) => onCardinalityChange(props.item, newCardinality, props.updateItem)}
                    cardinality={props.item.cardinality}
                />

                <br/>

                <QUQTrainerEditorItemOptionBlock
                    options={props.item.options}
                    updateOptions={(newOptions) => updateOptions(props.item, newOptions, props.updateItem)}/>

                <br/>

                <QUQTrainerEditorFeedbackBlock
                    updateItem={props.updateItem}
                    item={props.item}/>

                <br/>

                <QUQTrainerEditoQUQTrainerEditorItemPreview
                    itemPromptTitle={itemPromptTitle}
                    itemPrompt={itemPrompt}
                    item={item}/>

                <br/>

            </BootstrapAccordionItem>

            <br/>

        </>
    )
}

export {QUQTrainerEditorItem as default};