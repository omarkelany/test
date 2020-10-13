const crypto = require("crypto");

const users = [
    {
        username: "Omar Kelany",
        email: "kelany@email.com",
        token: '$2y$10$e9f009f82e6160e12af81a72e28f24bf057862233ad9fe3fdb34ec6f45d9ba7739d6dad7fded9f502a2a921ba3b08b4a5a7f9a2024'
    },
    {
        username: "Jack Sparrow",
        email: "jack@email.com",
        token: '$2y$10$' + crypto.randomBytes(53).toString('hex')
    },
];

module.exports = users;