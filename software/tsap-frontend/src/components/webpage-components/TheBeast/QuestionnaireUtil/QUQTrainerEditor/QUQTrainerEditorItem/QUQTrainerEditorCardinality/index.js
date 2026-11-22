function QUQTrainerEditorCardinality(props) {

    let cardinality = props.cardinality;

    let idSingleOption = "single-option-"+crypto.randomUUID();
    let idPluralOption = "plural-option-"+crypto.randomUUID();
    let nameCardinalityBlock = "cardinality-choice-"+crypto.randomUUID();

    return (
        <div className="shadow border border-info p-3 rounded-3 qu-trainer-editor-cardinality-container">
            <h4>Item answer type:</h4>
            <div className="form-check">
                <input className="form-check-input" type="radio"
                       name={nameCardinalityBlock} id={idSingleOption}
                       value="SINGLE" checked={cardinality === 'SINGLE'}
                       onChange={() => props.handleCardinalityChange('SINGLE')}/>
                <label className="form-check-label"
                       htmlFor={idSingleOption}>
                    Single
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio"
                       name={nameCardinalityBlock} id={idPluralOption}
                       value="PLURAL" checked={cardinality === 'PLURAL'}
                       onChange={() => props.handleCardinalityChange('PLURAL')}/>
                <label className="form-check-label"
                       htmlFor={idPluralOption}>
                    Plural
                </label>
            </div>
        </div>
    )
}

export {QUQTrainerEditorCardinality};

export default QUQTrainerEditorCardinality;