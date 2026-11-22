import {
    AGGREGATE_TEXT_LINE_MOVE_LINE_DIRECTION_DOWN,
    AGGREGATE_TEXT_LINE_MOVE_LINE_DIRECTION_UP,
    AGGREGATE_TEXT_LINE_TYPE_IMAGE,
    AGGREGATE_TEXT_LINE_TYPE_KATEX,
    AGGREGATE_TEXT_LINE_TYPE_PLAIN_TEXT
} from "./constants";
import {
    updateLineDataIsSelected,
    updateLineDataText,
    updateLineDataType
} from "./functions";

function QUQTrainerEditorAggregateTextEditorLine(props) {

    let first = props.index === 0;
    let last = props.index === props.nrOfLineItems - 1;

    let itemLineTypeBlockName = "item-line-type-block-" + crypto.randomUUID();
    let imageUrlId = "image-url-" + crypto.randomUUID();
    let katexLatexBlockId = "katex-latex-block-" + crypto.randomUUID();
    let plainTextId = "plain-text-" + crypto.randomUUID();

    let lineType = props.lineData.type;
    let lineText = props.lineData.text;
    let lineId = props.lineData.id;

    return (
        <div className={"qu-trainer-editor-item-line-container"}>
            <div className="input-group mb-3">
                    <textarea className="form-control"
                              value={lineText}
                              onChange={(event) => updateLineDataText(props.lineData, event.target.value, props.updateLineDataCallBack)}/>
                {!first && <button
                    onClick={() => props.moveLine(lineId, AGGREGATE_TEXT_LINE_MOVE_LINE_DIRECTION_UP)}
                    className="btn btn-outline-secondary" type="button">
                    <i className="fa-solid fa-angle-up"></i>
                </button>}
                {!last && <button
                    onClick={() => props.moveLine(lineId, AGGREGATE_TEXT_LINE_MOVE_LINE_DIRECTION_DOWN)}
                    className="btn btn-outline-secondary" type="button">
                    <i className="fa-solid fa-angle-down"></i>
                </button>}
                <button
                    onClick={() => props.deleteLine(lineId)}
                    className="btn btn-outline-secondary" type="button">
                    <i
                        className="fa-solid fa-trash-can"></i>
                </button>
                &nbsp;&nbsp;
                {!!props.showSelectionSwitch &&
                    <div className="form-check form-switch"
                         data-bs-toggle="tooltip"
                         data-bs-placement="top" title="Correct answer">
                        <input className="form-check-input" type="checkbox"
                               checked={props.lineData.isSelected}
                               onChange={event => updateLineDataIsSelected(props.lineData, event.target.checked, props.updateLineDataCallBack)}/>
                    </div>
                }
            </div>
            <div
                className="qu-trainer-editor-item-line-container-item-line-type">
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio"
                           name={itemLineTypeBlockName} id={plainTextId}
                           value={AGGREGATE_TEXT_LINE_TYPE_PLAIN_TEXT}
                           checked={lineType === AGGREGATE_TEXT_LINE_TYPE_PLAIN_TEXT}
                           onChange={() => updateLineDataType(props.lineData, AGGREGATE_TEXT_LINE_TYPE_PLAIN_TEXT, props.updateLineDataCallBack)}/>
                    <label className="form-check-label"
                           htmlFor={plainTextId}>Plain text</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio"
                           name={itemLineTypeBlockName} id={katexLatexBlockId}
                           value={AGGREGATE_TEXT_LINE_TYPE_KATEX}
                           checked={lineType === AGGREGATE_TEXT_LINE_TYPE_KATEX}
                           onChange={() => updateLineDataType(props.lineData, AGGREGATE_TEXT_LINE_TYPE_KATEX, props.updateLineDataCallBack)}/>
                    <label className="form-check-label"
                           htmlFor={katexLatexBlockId}>Katex / Latex</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio"
                           name={itemLineTypeBlockName} id={imageUrlId}
                           value={AGGREGATE_TEXT_LINE_TYPE_IMAGE}
                           checked={lineType === AGGREGATE_TEXT_LINE_TYPE_IMAGE}
                           onChange={() => updateLineDataType(props.lineData, AGGREGATE_TEXT_LINE_TYPE_IMAGE, props.updateLineDataCallBack)}/>
                    <label className="form-check-label"
                           htmlFor={imageUrlId}>Image URL</label>
                </div>
            </div>
        </div>
    );
}

export default QUQTrainerEditorAggregateTextEditorLine;
