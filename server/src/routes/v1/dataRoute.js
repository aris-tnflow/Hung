import express from 'express';
import { rateLimiter } from '~/config/rateLimit';
import { dataController } from '~/controllers/dataController';
import { protectedRoute } from '~/utils/protected';

const Router = express.Router();

Router.route("/")
    .get(dataController.dataUsage)
    .get(rateLimiter.Admin, protectedRoute.isAdmin, dataController.backup)
    .post(rateLimiter.Admin, protectedRoute.isAdmin, dataController.restore);

export const dataRouter = Router;