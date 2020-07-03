module.exports = {

    async home(req, res) {
        let posts = await db.posts
            .find_all();

        // this says: render the views/home/home.twig file and give it the posts variable to use
        return res.render('home/home', {
            posts
        });
    }

};
