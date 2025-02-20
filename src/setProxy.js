// const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = function (app) {
//     // '/api'로 시작하는 모든 요청을 프록시합니다.
//     app.use(
//         '/api',  // '/api'로 시작하는 URL 패턴에 대해
//         createProxyMiddleware({
//             target: 'http://localhost:8080',  // 실제 API 서버 주소 (로컬 서버의 8080 포트로 요청을 보냄)
            
//             // 'changeOrigin: true'는 대상 서버에서 요청의 origin을 프록시 서버의 origin으로 변경하도록 설정합니다.
//             changeOrigin: true,  // 요청을 다른 서버로 보내는 경우, origin을 대상 서버의 origin으로 변경
//         })
//     );
// };