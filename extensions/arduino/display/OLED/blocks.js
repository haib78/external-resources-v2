/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const colour = '#42CCFF';
    const secondaryColour = '#00BFFF';

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

    return Blockly;
}

exports = addBlocks;
