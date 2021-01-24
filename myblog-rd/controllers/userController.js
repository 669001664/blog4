const model = require('../models/userModel')
const { createToken } = require('../auth');

module.exports = {
    async login(ctx) {
        let { username, password } = ctx.request.body
        let results = await model.getUserByNameAndPwd(username, password);
        console.log(results);
        if (results.length > 0) {
            let payload = {
                userId: results[0].user_id,
                username
            }
            var token = createToken(payload)
            ctx.body = {
                status: 'success',
                token,
                payload
            }
        }
    },
    async regist(ctx) {
        console.log('111111111111111111111');
        let { username, password, nickname } = ctx.request.body;
        if (username.trim().length == 0) {
            ctx.body = {
                state: 'fail'
            }
        } else {
            let results = await model.saveUser({ username, password, nickname });
            if (results.insertId) {
                ctx.body = {
                    state: 'success'
                }
            } else {
                ctx.body = {
                    state: 'fail'
                }
            }
        }
    },
    async checkUser(ctx) {
        let { username } = ctx.query;
        console.log({ username });
        let results = await model.getUserByUsername(username);
        console.log(results);
        if (results.length > 0) {
            ctx.body = {
                state: 'fail'
            }
        } else {
            ctx.body = {
                state: 'success'
            }
        }
    }
}
