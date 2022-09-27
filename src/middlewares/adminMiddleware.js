let admins = ['Ada', 'Greta', 'Vim', 'Tim'];

function adminMiddle(req, res, next) {
    let user = req.query.user;

    if(user){
        admins.forEach(function(admin){
            if(admin == user){
                next();
            }
        });
        res.send('No tienes los privilegios para ingresar');
    } else {
        res.send('No tienes los privilegios para ingresar');
    }
}

module.exports = adminMiddle;