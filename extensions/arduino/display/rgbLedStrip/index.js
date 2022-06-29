const rgbLedStrip = formatMessage => ({
    name:'RGB灯',
    extensionId: 'rgbLedStrip',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoMini', 'arduinoLeonardo',
        'arduinoMega2560', 'arduinoEsp8266', 'arduinoEsp32','ZQrobot201','ZQrobot202'],
    author: 'ArthurZheng',
    iconURL: `asset/rgbLedStrip.png`,
    description: formatMessage({
        id: 'rgbLedStrip.description',
        default: 'Single-wire-based RGB LED pixels and strip.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    official: true,
    tags: ['display'],
    helpLink: 'https://openblockcc.gitee.io/wiki/main'
});

module.exports = rgbLedStrip;
