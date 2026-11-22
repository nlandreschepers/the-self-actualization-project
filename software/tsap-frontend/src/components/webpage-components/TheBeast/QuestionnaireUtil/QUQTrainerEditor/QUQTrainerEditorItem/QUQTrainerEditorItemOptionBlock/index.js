import {
    addOption,
    deleteOption,
    updateIsCorrectOption,
    updateOption,
    moveOption
} from "./functions";
import QUQTrainerEditorAggregateTextEditorBlock
    from "../QUQTrainerEditorAggregateTextEditorBlock";
import {
    AGGREGATE_TEXT_LINE_MOVE_LINE_DIRECTION_DOWN,
    AGGREGATE_TEXT_LINE_MOVE_LINE_DIRECTION_UP
} from "../QUQTrainerEditorAggregateTextEditorBlock/QUQTrainerEditorAggregateTextEditorLine/constants";

function QUQTrainerEditorItemOptionBlock(props) {

    let options = props.options.filter(option => option != null).map((option, index) => {

        let first = index === 0;
        let last = index === props.options.length - 1;

        return <div key={option.id}
                    className={"qu-trainer-editor-item-option-line" +
                        " shadow"}>
            {/*<QUQTrainerEditorItemOptionLine*/}
            {/*    updateOptionCallback={(newOption) => updateOption(newOption, props.options, props.updateOptions)}*/}
            {/*    option={option}*/}
            {/*    index={index}*/}
            {/*    nrOfOptions={props.options.length}*/}
            {/*    key={option.id}*/}
            {/*    deleteItemOption={() => deleteOption(option.id, props.options, props.updateOptions)}*/}
            {/*    moveOption={(optionId, direction) => moveOption(option.id, direction, props.options, props.updateOptions)}*/}
            {/*/>*/}
            <div className="input-group mb-3">
                {!first && <button
                    onClick={() => moveOption(option.id, AGGREGATE_TEXT_LINE_MOVE_LINE_DIRECTION_UP, props.options, props.updateOptions)}
                    className="btn btn-outline-secondary" type="button">
                    <i className="fa-solid fa-angle-up"></i>
                </button>}
                {!last && <button
                    onClick={() => moveOption(option.id, AGGREGATE_TEXT_LINE_MOVE_LINE_DIRECTION_DOWN, props.options, props.updateOptions)}
                    className="btn btn-outline-secondary" type="button">
                    <i className="fa-solid fa-angle-down"></i>
                </button>}
                <button
                    onClick={() => deleteOption(option.id, props.options, props.updateOptions)}
                    className="btn btn-outline-secondary" type="button">
                    <i
                        className="fa-solid fa-trash-can"></i>
                </button>
                &nbsp;&nbsp;
                Correct answer:
                &nbsp;&nbsp;
                {<div className="form-check form-switch"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top" title="Correct answer">
                    <input className="form-check-input" type="checkbox"
                           checked={option.isCorrectOption}
                           onChange={event => updateIsCorrectOption(option.id, props.options, event.target.checked, props.updateOptions)}/>
                </div>
                }
            </div>
            <QUQTrainerEditorAggregateTextEditorBlock
                lines={option.optionItemLines}
                updateAggregateTextLines={(newLines) => {
                    updateOption(newLines, option, index, props.options, props.updateOptions)
                }
                }/>
        </div>
    });

    return (
        <div
            className="qu-trainer-editor-option-container shadow border border-info p-3 rounded-3">
            <h4>Item option text:</h4>
            <br/>
            <div>
                <button type="button" className="btn btn-success"
                        onClick={() => addOption(props.options, props.updateOptions)}>
                    Add option
                </button>
            </div>
            <br/>
            {options}
        </div>
    )
}

export default QUQTrainerEditorItemOptionBlock;