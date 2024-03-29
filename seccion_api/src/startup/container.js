const { createContainer, asClass, asValue, asFunction } = require("awilix");

// Config
const config = require("../config");
const app = require(".");

// Servicios
const {
  HomeService,
  CommentService,
  IdeaService,
  UserService,
  AuthService,
} = require("../services");

// Controladores
const {
  HomeController,
  CommentController,
  IdeaController,
  UserController,
  AuthController,
} = require("../controllers");

// Routes
const {
  HomeRoutes,
  CommentRoutes,
  UserRoutes,
  ideaRoutes,
  AuthRoutes,
} = require("../routes/index.routes");
const Routes = require("../routes");

// Modelos
const { Comment, Idea, User } = require("../models");

// Repositorios
const {
  CommentRepository,
  IdeaRepository,
  UserRepository,
} = require("../repositories");
const container = createContainer();

container
  .register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config),
  })
  .register({
    HomeService: asClass(HomeService).singleton(),
    UserService: asClass(UserService).singleton(),
    IdeaService: asClass(IdeaService).singleton(),
    CommentService: asClass(CommentService).singleton(),
    AuthService: asClass(AuthService).singleton(),
  })
  .register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton(),
    UserController: asClass(UserController.bind(UserController)).singleton(),
    IdeaController: asClass(IdeaController.bind(IdeaController)).singleton(),
    CommentController: asClass(
      CommentController.bind(CommentController)
    ).singleton(),
    AuthController: asClass(AuthController.bind(AuthController)).singleton(),
  })
  .register({
    HomeRoutes: asFunction(HomeRoutes).singleton(),
    UserRoutes: asFunction(UserRoutes).singleton(),
    ideaRoutes: asFunction(ideaRoutes).singleton(),
    CommentRoutes: asFunction(CommentRoutes).singleton(),
    AuthRoutes: asFunction(AuthRoutes).singleton(),
  })
  .register({
    User: asValue(User),
    Idea: asValue(Idea),
    Comment: asValue(Comment),
  })
  .register({
    UserRepository: asClass(UserRepository).singleton(),
    IdeaRepository: asClass(IdeaRepository).singleton(),
    CommentRepository: asClass(CommentRepository).singleton(),
  });

module.exports = container;
