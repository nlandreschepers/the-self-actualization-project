import BootstrapAccordionItem
    from "../../../../../common/BootstrapAccordionItem";
import ItemRenderer from "../../../QuestionnaireTrainer/ItemRenderer";
import {useState} from "react";
import {ErrorBoundary, getErrorMessage} from "react-error-boundary";

function QUQTrainerEditoQUQTrainerEditorItemPreview(props) {

    const [itemRendererKey, setitemRendererKey] = useState(crypto.randomUUID());

    let item = props.item;

    return (
        <>
            <BootstrapAccordionItem itemPrompt={"Preview"}
                                    bodyClassNames={"quqtrainereditor-editor-preview"}>
                <ErrorBoundary
                    fallbackRender={({error, resetErrorBoundary}) => (
                        <div role="alert">
                            <p>Something went wrong:</p>
                            <pre>{getErrorMessage(error)}</pre>
                            <button onClick={resetErrorBoundary}>Try again
                            </button>
                        </div>
                    )}
                    onError={(error, info) => {
                        // Log the error to your error reporting service
                    }}
                    onReset={() => {
                        // Reset any state that may have caused the error
                    }}
                >
                    <ItemRenderer key={itemRendererKey} {...item}
                                  continueCallback={() => {
                                      setitemRendererKey(crypto.randomUUID());
                                  }}/>
                </ErrorBoundary>
            </BootstrapAccordionItem>
        </>
    )
}

export default QUQTrainerEditoQUQTrainerEditorItemPreview;