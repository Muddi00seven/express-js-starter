
const GetApi = async (req, res) => {
    try {
        let arr = [
            {
                "one": "two",
                "three": "four"
            }
        ]
        let obj = {
            status: true,
            data: arr
        }
        res.send(obj);

    } catch (error) {
        let obj = {
            status: false,
            error: error
        }
        res.send(obj);
    }
};



module.exports = {
    GetApi
}