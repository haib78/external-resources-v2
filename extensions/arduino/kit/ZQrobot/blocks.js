/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const colour = '#42CCFF';
    const secondaryColour = '#00BFFF';
    const colour1 = '#7700FF';
    const secondaryColour1 = '#4400B3';
    const digitalPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        .find(block => block.type === 'arduino_pin_ZQsetDigitalOutput')
        .getField('PIN')
        .getOptions();

    Blockly.Blocks.oled_page = {
        init: function() {
            this.jsonInit({
              message0:'%1 显示刷新',
              message1: "%1", // Statement
              args0: [
                {
                }
              ],
              args1: [
                {
                  "type": "input_statement",
                  "name": "DO"
                }
              ],
              colour: colour,
              secondaryColour: secondaryColour,
              extensions: ["shape_statement"]
            });
      }
    };

    Blockly.Blocks.oled_print = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.OLED_PRINT,
                args0: [
                    {
                        type: 'input_value',
                        name: 'DATA'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'EOL',
                        options: [
                            [Blockly.Msg.OLED_EOL_WARP, 'warp'],
                            [Blockly.Msg.OLED_EOL_NOWARP, 'noWarp']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.rgbLedStrip_setPixelColor = {
        init: function () {
            this.jsonInit({
                message0:'设置RGB灯 端口 %1 颜色 %2',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: digitalPins
                    },
                    {
                        type: 'input_value',
                        name: 'COLOR'
                    }
                ],
                colour: colour1,
                secondaryColour: secondaryColour1,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.rgbLedStrip_setPixelColor1 = {
        init: function () {
            this.jsonInit({
                message0:'设置RGB灯 端口 %1 颜色 %2',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'PIN1',
                        options: [
                            ['红','0xff0000'],
                            ['橙','0xFF7F00'],
                            ['黄','0xFFFF00'],
                            ['绿','0x00FF00'],
                            ['青','0x00FFFF'],
                            ['蓝','0x0000FF'],
                            ['紫','0x8B00FF']
                        ]
                    }
                ],
                colour: colour1,
                secondaryColour: secondaryColour1,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.rgbLedStrip_setBrightness = {
        init: function () {
            this.jsonInit({
                message0: '设置RGB灯亮度 %1',
                args0: [
                    {
                        type: 'input_value',
                        name: 'BRT'
                    }
                ],
                colour: colour1,
                secondaryColour: secondaryColour1,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.rgbLedStrip_color = {
        init: function () {
            this.jsonInit({
                message0: 'RGB灯条颜色 R %1 G %2 B %3',
                args0: [
                    {
                        type: 'input_value',
                        name: 'R'
                    },
                    {
                        type: 'input_value',
                        name: 'G'
                    },
                    {
                        type: 'input_value',
                        name: 'B'
                    }
                ],
                colour: colour1,
                secondaryColour: secondaryColour1,
                extensions: ['output_string']
            });
        }
    };

    Blockly.Blocks.rgbtsc = {
        init: function () {
            this.jsonInit({
                message0: '读取颜色传感器 %1 值',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: [
                            ['R','1'],
                            ['G','2'],
                            ['B','3'],
                            ['勒克斯(LUX)','5'],
                            ['色温(colorTemp)','4']
                        ]
                    }
                ],
                colour: colour1,
                secondaryColour: secondaryColour1,
                extensions: ['output_string']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
