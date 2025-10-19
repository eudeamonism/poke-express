const express = require('express');
const router = express.Router();
const users = require('../data/users')

router.get('/', (req, res) => {
    const {city, role, active} =req.query;
    let filteredUsers = users;

    if(city) {
        filteredUsers = filteredUsers.filter(user => user.city.toLowerCase() === city.toLowerCase());
    }

    if(role) {
        filteredUsers = filteredUsers.filter(user => user.role.toLowerCase() === role.toLowerCase());
    }

    if(active) {
        const isActive = active.toLowerCase() === 'true';
        filteredUsers = filteredUsers.filter(user => user.active === isActive);
    }

    res.status(200).json(filteredUsers);
});

module.exports = router;