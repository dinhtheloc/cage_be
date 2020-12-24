// const roomChatModel = require('../models/roomChat');
let post = require('../models/post');
const { userModel } = require('../models/user');

const getPosts = async (req, res) => {

    const { pageIndex = 1, pageSize = 1, rankFilter } = req.query;
    try {
        const now = new Date();
        const start = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 1, 0, 0);

        const end = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 59, 59);


        const filter = {
            createDate: {
                $gte: start,
                $lt: end
            }
        }

        if (rankFilter) {
            filter.rank = rankFilter
        }
        console.log(filter)

        const posts = await post.find(filter)
            .sort({ createDate: -1 })
            .limit(pageSize * 1)
            .skip((pageIndex - 1) * pageSize)
            .exec();

        // get total documents in the Posts collection 
        const count = await post.countDocuments();
        // return response with posts, total pages, and current page
        res.json({
            posts,
            count,
            totalPages: Math.ceil(count / pageSize),
            pageIndex
        });
    } catch (err) {
        console.error(err.message);
    }
}

const createPost = async (req, res) => {
    const { title, rank, description } = req.body;

    if (!title && !rank && !description) {
        res.status(400).send('Dữ liệu không hợp lệ');
        return;
    }

    const { _id } = res.locals.user;
    const user = await userModel.findById(_id).exec();

    const createDate = new Date();

    const data = {
        title, rank, description, user, createDate
    };

    post.create({ ...data }, (error, data) => {
        if (error) {
            res.status(500).send('Hệ thống gặp lỗi');
            return;
        } else {
            res.status(200).send('Tạo mới thành công');
        }
    });
}


module.exports = { getPosts, createPost };