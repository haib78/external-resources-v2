/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="OLED显示" id="OLED_CATEGORY" colour="#42CCFF" secondaryColour="#00BFFF">
    <block type="oled_page" id="oled_page">
        <statement name="DO"> 
            <block type="oled_print" id="oled_print">
                <value name="DATA">
                    <shadow type="text">
                        <field name="TEXT">Hello Robot</field>
                    </shadow>
                </value>
            </block>
        </statement>
    </block>
    <block type="oled_print" id="oled_print">
        <value name="DATA">
            <shadow type="text">
                <field name="TEXT">Hello Robot</field>
            </shadow>
        </value>
    </block>
</category>`;
}

exports = addToolbox;


