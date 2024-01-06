const path = require("path");

function render(file, res){
    return res.sendFile(path.join(__dirname + `./../views/${file}.html`))
}

class HomeContoller{
    async index(req, res){
        return render("home", res);
    }

    async about(req, res){
        return render("about", res);
    }
}


module.exports = new HomeContoller();