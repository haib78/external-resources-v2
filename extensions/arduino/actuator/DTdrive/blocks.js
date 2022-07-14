/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#FF6F00';
    const secondaryColour = '#FF4F00';

    const pwmPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        .find(block => block.type === 'arduino_pin_ZQsetPwmOutput201')
        .getField('PIN')
        .getOptions();

    Blockly.Blocks.DT_init = {
        init: function () {
            this.jsonInit({
                message0: '初始化电调 端口 %1',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'EN',
                        options: pwmPins
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.DT_run = {
        init: function () {
            this.jsonInit({
                message0: '设置电机速度 %1',
                args0: [
                    {
                        type: 'input_value',
                        name: 'SPEED'
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
