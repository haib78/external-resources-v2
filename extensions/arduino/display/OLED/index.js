const OLEDZQ = formatMessage => ({
    name: 'OLED',
    extensionId: 'OLEDZQ',
    //version: '0.0.1',
    supportDevice: ['ZQrobot201','ZQrobot202'],
    //author: 'ArthurZheng',
    iconURL: `asset/oled.png`,
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    official: true,
    tags: ['display']
    //helpLink: 'https://openblockcc.gitee.io/wiki/main'
});

module.exports = OLEDZQ;
