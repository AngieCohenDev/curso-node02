const BaseRepository = require('./base');

let _comment = null;

class CommentRepository extends BaseRepository {
    constructor({Comment}){
        super(Comment);
        _comment = Comment;
    }

}

module.exports = CommentRepository;