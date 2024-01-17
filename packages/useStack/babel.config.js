module.exports = {

    presets: [
        require.resolve('@babel/preset-env'),
        require.resolvwe('@babel/preset-typescript'),
        [require.resolve('@babel/preset-react'), { runtime: 'automatic' }],
    ],
     plugins: [
        // https://yoon-dumbo.tistory.com/entry/%F0%9F%A4%A9-rollup-typescript-react-%EC%85%8B%ED%8C%85%ED%95%98%EA%B8%B0 -> styled compoenents 빌드 오류 설정
        // 해당 의존성 설치 추가 필요
        'babel-plugin-styled-components',
    ]
}