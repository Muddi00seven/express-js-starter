const express = require('express');


//demo
const { GetApi } = require("../controllers/getApi")
const { PostApi } = require("../controllers/postApi")




const router = express.Router();



router.get("/get_api", GetApi);
router.post("/post_api", PostApi);

//admin login route

// export default router;


module.exports = {
    routes: router
}