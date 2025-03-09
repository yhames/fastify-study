import { register } from 'module';

const ERROR_MESSAGE = {
  badRequest: {
    success: false,
    status: 400,
    message: 'Bad Request',
  },
  likeAddError: {
    success: false,
    status: 400,
    message: 'You already liked this post',
  },
  likeCancelError: {
    success: false,
    status: 400,
    message: 'You have not liked this post',
  },
  unauthorized: {
    success: false,
    status: 401,
    message: 'Unauthorized',
  },
  invalidToken: {
    success: false,
    status: 401,
    message: 'Invalid Token',
  },
  notExpiredToken: {
    success: false,
    status: 401,
    message: 'Token is not expired',
  },
  forbidden: {
    success: false,
    status: 403,
    message: 'Forbidden',
  },
  alreadySignedUp: {
    success: false,
    status: 403,
    message: 'You have already signed up',
  },
  notFound: {
    success: false,
    status: 404,
    message: 'Not Found',
  },
  preconditionFailed: {
    success: false,
    status: 412,
    message: 'Precondition Failed',
  },
  internalServerError: {
    success: false,
    status: 500,
    message: 'Internal Server Error',
  },
} as const;

const SUCCESS_MESSAGE = {
  loginSuccess: {
    success: true,
    status: 200,
    message: 'Login Success',
  },
  logoutSuccess: {
    success: true,
    status: 200,
    message: 'Logout Success',
  },
  refreshSuccess: {
    success: true,
    status: 200,
    message: 'token reissued',
  },
  accessTokenSuccess: {
    success: true,
    status: 200,
    message: 'access token issued',
  },
  registerSuccess: {
    success: true,
    status: 201,
    message: 'Register Success',
  },
} as const;

export { ERROR_MESSAGE, SUCCESS_MESSAGE };
