module.exports.me = function me(ctx) {
  ctx.body = {
    email: ctx.user.email,
    displayName: ctx.user.displayName,
  }
}
