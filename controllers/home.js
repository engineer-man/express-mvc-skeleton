module.exports = {

    async home(req, res) {
        let posts = await db.posts
            .find_all();

        return res.render('home/home', {
            posts
        });
    }

};
