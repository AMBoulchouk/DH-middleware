const adminController = {
    admin: (req, res) => {
        res.send('Hola Admin: ' + req.query.user);
    }
};

module.exports = adminController;