module.exports = {
    doneGetItems: (item) => {
        return {status: 'OK', code: 200, message: 'Done get items', data: item};
    },
    doneCreateItem: (item) => {
        return {status: 'OK', code: 200, message: 'Done create item', data: item};
    },
    badRequest: (errors) => {
        return {status: 'Bad Request', code: 400, message: 'Something went wrong', errors: errors};
    },
    notAuthorize: () => {
        return {status: 'Not Authorize', code: 401, message: 'You are not authorize'};
    },
};