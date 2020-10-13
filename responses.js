module.exports = {
    doneCreateItem: function (item) {
        return {status: 'ok', code: 200, message: 'Done create Item', data: item};
    }
};