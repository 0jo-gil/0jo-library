module.exports = {

    presets: [
        require.resolve('@babel/preset-env'),
        require.resolvwe('@babel/preset-typescript'),
        [require.resolve('@babel/preset-react'), { runtime: 'automatic' }],
    ]
}