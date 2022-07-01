const ZQrobot = () => ({
    name: 'ZQrobot',
    extensionId: 'ZQrobot',
    supportDevice: ['ZQrobot201','ZQrobot202'],
    hide: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib'
});

module.exports = ZQrobot;
