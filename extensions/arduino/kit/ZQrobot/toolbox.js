/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="其它模块" id="OLED_CATEGORY" colour="#42CCFF" secondaryColour="#00BFFF">
    <label text="==OLED显示=="></label>
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
    <label text="==RGB彩灯=="></label>
    <block type="rgbLedStrip_setPixelColor" id="rgbLedStrip_setPixelColor">
        <field name="PIN">4</field>
        <value name="COLOR">
            <shadow type="colour_picker"/>
        </value>
    </block>
    <block type="rgbLedStrip_setPixelColor1" id="rgbLedStrip_setPixelColor1">
        <field name="PIN">4</field>
    </block>
    <block type="rgbLedStrip_color" id="rgbLedStrip_color">
        <value name="R">
            <shadow type="math_uint8_number">
                <field name="NUM">255</field>
            </shadow>
        </value>
        <value name="G">
            <shadow type="math_uint8_number">
                <field name="NUM">255</field>
            </shadow>
        </value>
        <value name="B">
            <shadow type="math_uint8_number">
                <field name="NUM">255</field>
            </shadow>
        </value>
    </block>
    <block type="rgbLedStrip_setBrightness" id="rgbLedStrip_setBrightness">
        <value name="BRT">
            <shadow type="math_uint8_number">
                <field name="NUM">255</field>
            </shadow>
        </value>
    </block>
    <label text="==颜色传感器=="></label>
    <block type="rgbtsc" id="rgbtsc">
        <field name="PIN">1</field>
    </block>
</category>`;
}

exports = addToolbox;


