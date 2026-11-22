import {updateOptionIsCorrectOption, updateOptionText} from "./functions";

function QUQTrainerEditorItemOptionLine(props) {

    let option = props.option;
    let index = props.index;
    let nrOfOptions = props.nrOfOptions;

    let first = index === 0;
    let last = index === nrOfOptions - 1;

    return (
        <div className="input-group mb-3" key={option.id}>
            <div className="input-group">
                <input type="text" className="form-control"
                       value={option.text}
                       onChange={(event) => updateOptionText(option, event.target.value, props.updateOptionCallback)}/>
                {!first && <button
                    onClick={() => props.moveOption(option.id, -1)}
                    className="btn btn-outline-secondary" type="button">
                    <i className="fa-solid fa-angle-up"></i>
                </button>}
                {!last && <button
                    onClick={() => props.moveOption(option.id, 1)}
                    className="btn btn-outline-secondary" type="button">
                    <i className="fa-solid fa-angle-down"></i>
                </button>}
                <button
                    onClick={props.deleteItemOption}
                    className="btn btn-outline-secondary" type="button">
                    <i
                        className="fa-solid fa-trash-can"></i>
                </button>
                &nbsp;&nbsp;
                <div className="form-check form-switch" data-bs-toggle="tooltip"
                     data-bs-placement="top" title="Correct answer">
                    <input className="form-check-input" type="checkbox"
                           checked={option.isCorrectOption}
                           onChange={event => updateOptionIsCorrectOption(option, event.target.checked, props.updateOptionCallback)}/>
                </div>
            </div>
        </div>
    );
}

export default QUQTrainerEditorItemOptionLine;