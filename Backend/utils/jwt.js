const { expressjwt: Jwt } = require("express-jwt");

function authJwt() {
  const secret = "Student_Group_PM";
  return Jwt({
    secret,
    algorithms: ["HS256"],
    isRevoked: isRevoked,
  }).unless({
    path: [`/api/users/login`, `/api/users/register`],
  });
}

async function isRevoked(req, payload, done) {
  console.log(payload.email);
  if (!payload.email) {
    done(null, true);
  }

  done();
}

module.exports = authJwt;
