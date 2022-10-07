const { statusCode, responseMessage } = require('../utils/response');

class responseHelper {
    success(res, message, data = {}) {
        return res.status(statusCode.HTTP_OK).json({
            status: statusCode.HTTP_OK,
            message: message,
            data: data
        });
    }

    error(res, message, data = {}, status = null) {
        status = status ? status : statusCode.HTTP_CONFLICT;
        console.log("error message", data)
        return res.status(status).json({
            status: status,
            message: message,
            data: data
        });
    }

    joierrors(res, message, err) {

        let error = err.details.reduce((prev, curr) => {
            prev[curr.path[0]] = curr.message.replace(/"/g, '');
            return prev;
        }, {});

        let status = statusCode.HTTP_BAD_REQUEST;

        console.log("joi error message", error);
        return res.status(status).json({
            status,
            message,
            error
        });
    }

    authorizationError(res) {
        return res.status(statusCode.HTTP_UNAUTHORIZED).json({
            status: statusCode.HTTP_UNAUTHORIZED,
            message: 'Unauthorized',
            error: 'Unauthorized'
        });
    }

    serverError(res) {
        return res.status(statusCode.HTTP_INTERNAL_SERVER_ERROR).json({
            status: statusCode.HTTP_INTERNAL_SERVER_ERROR,
            message: responseMessage.common.internalServerError
        });
    }
}

module.exports = new responseHelper()