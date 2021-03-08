module.exports = {
    chainWebpack: config => {
        config.plugins.delete("prefetch")
        // 删除index.html开头的带有prefetch属性的link, 不要异步下载暂时不需要的页面组件文件
    },
    // devServer: {
    //     proxy: {
    //         '/': { // 暗号
    //             target: `http://localhost:5050`, // 真实的服务器地址
    //             changeOrigin:true,  // 是否跨域
    //         }
    //     }
    // }
}