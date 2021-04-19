module.exports = app => {
    const save = (req, res) => {
        res.send('user salve')
    }
    return { save }
}