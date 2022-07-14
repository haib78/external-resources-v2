const DTdrive = formatMessage => ({
    name: '电调驱动',
    extensionId: 'DTdrive',
    supportDevice: ['ZQrobot201','ZQrobot202'],
    iconURL: `asset/DTdrive.png`,
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    official: true,
    tags: ['actuator']
});

module.exports = DTdrive;
