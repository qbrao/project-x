/**
 * 接口 - 接口测试
 *
 * @url /list
 * 
 * GET: 请求方法及参数
 *   uid 这是请求的用户ID
 *
 * 参数描述和其他说明
 */

module.exports = {
  'code': function () { // simulation error code, 1/10 probability of error code 1.
    return Math.random() < 0.1 ? 1 : 0;
  },
  'result|10': [
    ['@ctitle(9, 20)', '@integer(10000, 99999)', '@natural']
  ]
};