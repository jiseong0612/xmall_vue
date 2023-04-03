const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  //outputDir : '../src/main/resources/static', // 빌드 타겟 디렉토리 
  //indexPath: "../src/main/resources/static/index.html",
  devServer : {
    proxy : { 
      '/api' : {
        // '/api' 로 들어오면 포트 8088(스프링 서버)로 보낸다
        target: 'http://localhost:8088',  
        changeOrigin: true, // cross origin 허용
      }
    }
  },
  transpileDependencies: true
});
