var WAIT_TIME = 5000;
var WAIT_LOAD_TIME = 1000;

gemini.suite('checkboxes', (child) => {

    child.setUrl('/checkboxes')
        .before((actions, find) => {
            actions.waitForElementToShow('.form-block', WAIT_TIME);
            actions.waitForElementToShow('clr-checkbox', WAIT_TIME);
        })
        .setCaptureElements('.form-block')
        .capture('default');

});