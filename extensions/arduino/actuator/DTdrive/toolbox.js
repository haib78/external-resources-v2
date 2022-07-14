/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="电调驱动" id="L298N_CATEGORY" colour="#FF6F00" secondaryColour="#FF4F00">
    <block type="DT_init" id="DT_init">
        <field name="EN">2</field>
    </block>
    <block type="DT_run" id="DT_run">
        <value name="SPEED">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
</category>`;
}

exports = addToolbox;
