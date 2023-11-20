import {StatusCodes} from "http-status-codes";

export class NotFoundError extends Error{
    constructor(message) {
        super(message);
        this.name = 'Data Not Found';
        this.statusCode = StatusCodes.NOT_FOUND;
    }
}
export class BadRequestError extends Error{
    constructor(message) {
        super(message);
        this.name = 'Bad Request';
        this.statusCode = StatusCodes.BAD_REQUEST;
    }
}
export class UnauthenticatedError extends Error{
    constructor(message) {
        super(message);
        this.name = 'Unauthenticated User';
        this.statusCode = StatusCodes.UNAUTHORIZED;
    }
}
export class UnauthorizedError extends Error{
    constructor(message) {
        super(message);
        this.name = 'Unauthorized User';
        this.statusCode = StatusCodes.UNAUTHORIZED;
    }
}