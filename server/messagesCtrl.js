let allMessages = [];

module.export = {

    getAllMessages: (req, res) => {
        res.status(200).send(allMessages);
    },

    createMessage: (req, res) => {
        let messages = {
            username: req.bosy.username,
            message: req.body.message
        };
        allMessages.push(newMessage);
        res.status(200).send(allMessages);
    }
};