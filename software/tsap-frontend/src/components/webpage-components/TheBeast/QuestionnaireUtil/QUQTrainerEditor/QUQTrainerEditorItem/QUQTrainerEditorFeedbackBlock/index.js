import QUQTrainerEditorAggregateTextEditorBlock
    from "../QUQTrainerEditorAggregateTextEditorBlock";
import {updateFeedbackLines} from "./functions";

function QUQTrainerEditorFeedbackBlock(props) {

    return (
        <div
            className="shadow border border-info p-3 rounded-3 qu-qtrainer-editor-feedback-block">

            <h1>Feedback</h1>

            <QUQTrainerEditorAggregateTextEditorBlock
                lines={props.item.feedbackLines}
                updateAggregateTextLines={(newLines) => updateFeedbackLines(props.item, newLines, props.updateItem)}/>
        </div>
    )
}

export default QUQTrainerEditorFeedbackBlock;