/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.DT_init = function (block) {
        const en = block.getFieldValue('EN');

        Blockly.Arduino.includes_['include_servo'] = `#include <Servo.h>`;
        Blockly.Arduino.definitions_['definitions_servo' + en] =
          `Servo Servo_${en};`;
        Blockly.Arduino.setups_['dt']=`Servo_${en}.attach(${en});\n  Servo_${en}.writeMicroseconds(1500);\n  delay(2000);`
        Blockly.Arduino.customFunctions_['dt']= 
        'void DTrun(int sp){\n  int msp=0;\n  if(sp>0){msp=map(sp,0,100,1500,2000);}\n  else{msp=map(sp,0,-100,1500,1000);}\n  Servo_' + en + '.writeMicroseconds(msp);\n}\n';
        return '';
    };

    Blockly.Arduino.DT_run = function (block) {
        const speed = Blockly.Arduino.valueToCode(block, 'SPEED', Blockly.Arduino.ORDER_ATOMIC);

        return `DTrun(${speed});\n`;
    };

    return Blockly;
}

exports = addGenerator;
