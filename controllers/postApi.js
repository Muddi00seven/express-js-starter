// import { oModelFindOne } from '../../helpers/helperFunction.js'

const PostApi = async (req, res) => {
    try {

        let id = req.body.id
        let obj = {
            status: true,
            data: id
        }
        res.send(obj);

    } catch (error) {
        let obj = {
            status: false,
            error: error
        }
        console.log(obj);
        res.send(obj);
    }
};



module.exports = {
    PostApi
}