function QUQTrainerEditorBase64(props) {
    return <div className="input-group mb-3 qu-trainer-editor-base64-wrapper">
        <input type="text" className="form-control"
               value={props.base64Code}
               placeholder="Recipient's username"
               aria-label="Recipient's username"
               aria-describedby="button-addon2" readOnly={true}/>
        <button
            className="btn btn-outline-secondary qu-trainer-editor-base64-button"
            type="button"
            onClick={() => window.open('/#/the-beast/questionnaire-util/trainer/' + props.base64Code, '_blank')}
            id="button-addon2"><i
            className="fa-solid fa-up-right-from-square"></i>
        </button>
    </div>
}

export {QUQTrainerEditorBase64};