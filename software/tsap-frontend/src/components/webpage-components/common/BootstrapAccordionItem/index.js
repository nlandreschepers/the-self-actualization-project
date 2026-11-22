import React from "react";

function BootstrapAccordionItem(props) {

    let accordionId = 'id'+crypto.randomUUID();
    let accordionHeadingId = 'id'+crypto.randomUUID();
    let accordionBodyId = 'id'+crypto.randomUUID();

    return (
        <div className="accordion shadow-sm " id={accordionId}>
            <div className="accordion-item">
                <h2 className="accordion-header" id={accordionHeadingId}>
                    <button className="accordion-button" type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={'#' + accordionBodyId}
                            aria-expanded="true"
                            aria-controls={accordionBodyId}>
                        {props.itemPrompt}
                    </button>
                </h2>
                <div id={accordionBodyId}
                     className="accordion-collapse collapse show"
                     aria-labelledby={accordionHeadingId}
                     data-bs-parent={'#'+accordionId}>
                    <div className={"accordion-body" +
                        " qu-trainer-editor-accordion-body " + props.bodyClassNames}>
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BootstrapAccordionItem;