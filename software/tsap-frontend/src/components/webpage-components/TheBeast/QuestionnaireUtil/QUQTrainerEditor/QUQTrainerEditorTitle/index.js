function QUQTrainerEditorTitle(props) {
    return <div className="input-group mb-3">
                <span className="input-group-text"
                      id="qu-trainer-editor-title">Title</span>
        <input type="text" className="form-control" value={props.title}
               aria-label="Sizing example input"
               aria-describedby="qu-trainer-editor-title"
               onChange={(event) => props.updateTitle(event.target.value)}/>
    </div>
}

export {QUQTrainerEditorTitle};