const BaseService = require("./base");

let _commentRepository = null;
let _ideaRepository;

class CommentService extends BaseService {
  constructor({ CommentRepository, IdeaRepository }) {
    super(CommentRepository);
    _commentRepository = CommentRepository;
    _ideaRepository = IdeaRepository;
  }

  async getUserByUsername(username) {
    return await _userRepository.getUserByUsername(username);
  }

  async getIdeaComments(ideaId) {
    if (!ideaId) {
      const error = new Error();
      error.status = 400;
      error.message = "IdeaId must be sent";
      throw error;
    }

    const idea = await _ideaRepository.get(ideaId);

    if (!idea) {
      const error = new Error();
      error.status = 404;
      error.message = "Idea does not exist";
      throw error;
    }

    const { comments } = idea;
    return comments;
  }

  async createComment(comment, ideaId) {
    if (!ideaId) {
      const error = new Error();
      error.status = 400;
      error.message = "IdeaId must be sent";
      throw error;
    }

    const idea = await _ideaRepository.get(ideaId);

    if (!idea) {
      const error = new Error();
      error.status = 404;
      error.message = "Idea does not exist";
      throw error;
    }

    const createComment = await _commentRepository.create(comment);
    idea.comments.push(createComment);

    return await _ideaRepository.update(ideaId, { comments: idea.comments });
  }
}

module.exports = CommentService;
