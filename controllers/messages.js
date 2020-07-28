const Message = require('../models/Message')
const messageMapper = require('../mappers/message')

module.exports.messageList = async function messages(ctx) {
  if (!ctx.user) {
    ctx.throw(401, 'Пользователь не залогинен')
  }

  const messages = await Message.find({ user: ctx.user.displayName }).limit(20)

  ctx.body = { messages: messages.map(messageMapper) }
}
