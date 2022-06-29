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

    Blockly.Arduino.rgbLedStrip_setPixelColor = function (block) {
        const pin = block.getFieldValue('PIN') ;
        const colour = Blockly.Arduino.valueToCode(block, 'COLOR', Blockly.Arduino.ORDER_ATOMIC).replace('#', '0x');
        Blockly.Arduino.includes_.rgbLedStrip_init = `#include <Adafruit_NeoPixel.h>`;
        Blockly.Arduino.definitions_['init' + pin ] =
        `Adafruit_NeoPixel ledStrip(1, ${pin}, NEO_GRB + NEO_KHZ800);`;
        Blockly.Arduino.setups_.oled_page = 'ledStrip.begin();';
        return `ledStrip.setPixelColor(0, ${colour});\nledStrip.show();\n`;
    };

    Blockly.Arduino.rgbLedStrip_setPixelColor1 = function (block) {
        const pin = block.getFieldValue('PIN') ;
        const pin1 = block.getFieldValue('PIN1') ;
        Blockly.Arduino.includes_.rgbLedStrip_init = `#include <Adafruit_NeoPixel.h>`;
        Blockly.Arduino.definitions_['init' + pin ] =
        `Adafruit_NeoPixel ledStrip(1, ${pin}, NEO_GRB + NEO_KHZ800);`;
        Blockly.Arduino.setups_.oled_page = 'ledStrip.begin();\n';
        return `ledStrip.setPixelColor(0, ${pin1});\nledStrip.show();\n`;
    };

    Blockly.Arduino.rgbLedStrip_color = function (block) {
        const r = Blockly.Arduino.valueToCode(block, 'R', Blockly.Arduino.ORDER_ATOMIC);
        const g = Blockly.Arduino.valueToCode(block, 'G', Blockly.Arduino.ORDER_ATOMIC);
        const b = Blockly.Arduino.valueToCode(block, 'B', Blockly.Arduino.ORDER_ATOMIC);

        return [`ledStrip.Color(${r}, ${g}, ${b})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.rgbLedStrip_setBrightness = function (block) {
        const brightness = Blockly.Arduino.valueToCode(block, 'BRT', Blockly.Arduino.ORDER_ATOMIC);

        return `ledStrip.setBrightness(${brightness});\n`;
    };

    Blockly.Arduino.rgbtsc = function (block) {
        const pin = block.getFieldValue('PIN') ;
        Blockly.Arduino.includes_.Wire = `#include <Wire.h>`;
        Blockly.Arduino.includes_.rgbtcs_init = `#include <MH_TCS34725.h>`;
        Blockly.Arduino.definitions_.rgbtcs_init =
        `MH_TCS34725 tcs = MH_TCS34725(TCS34725_INTEGRATIONTIME_50MS, TCS34725_GAIN_4X);`;
        Blockly.Arduino.setups_.rgbtcs = 'tcs.begin();';
        return [`tcs.getRGBZQ(${pin})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = addGenerator;
