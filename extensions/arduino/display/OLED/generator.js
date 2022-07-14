/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

    Blockly.Arduino.oled_page = function (block) {
        var branch = Blockly.Arduino.statementToCode(this, 'DO');
        Blockly.Arduino.includes_.Wire = `#include <Wire.h>`;
        Blockly.Arduino.includes_.oled_page = `#include <Adafruit_GFX.h>\n#include <Adafruit_SSD1306.h>`;
        Blockly.Arduino.definitions_.oled_page = `Adafruit_SSD1306 oled(128, 64, &Wire);`;
        Blockly.Arduino.setups_.oled_page = `oled.begin(SSD1306_SWITCHCAPVCC, 0x3c);\n  oled.setTextSize(1);\n  oled.setTextColor(SSD1306_WHITE, SSD1306_WHITE);\n  oled.clearDisplay();`;
        var code='oled.setCursor(0, 0);\n' + branch + 'oled.display();\noled.clearDisplay();\n'
        return code;
    };
    
    Blockly.Arduino.oled_print = function (block) {
        const data = Blockly.Arduino.valueToCode(block, 'DATA', Blockly.Arduino.ORDER_ATOMIC);
        const eol = block.getFieldValue('EOL');

        if (eol === 'warp') {
            return `oled.println(${data});\n`;
        }
        return `oled.print(${data});\n`;

    };

    return Blockly;
}

exports = addGenerator;
