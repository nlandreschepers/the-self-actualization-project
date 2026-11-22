function QUQTrainerEditorItemPrompt(props) {

    return (
        <>
            <div className="shadow-sm input-group mb-3">
                <span className="input-group-text"
                      id="qu-trainer-editor-item-prompt-input">Item prompt title</span>
                <input type="text" className="form-control"
                       value={props.itemPromptTitle}
                       onChange={(event) => props.updateItemPromptTitle(event.target.value)}/>
            </div>
        </>
    )
}

export default QUQTrainerEditorItemPrompt;