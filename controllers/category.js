// const roomChatModel = require('../models/roomChat');
let categoryModel = require('../models/category');

const getCategory = async (req, res) => {
    const { pageIndex = 1, pageSize = 1 } = req.query;
    try {
        let category;
        if (
            Number(pageIndex) === 0 &&
            Number(pageSize) === 0
        ) {
            category = await categoryModel.find()
                .sort({ createDate: -1 })
                .exec();
        } else {
            category = await categoryModel.find()
                .sort({ createDate: -1 })
                .limit(pageSize * 1)
                .skip((pageIndex - 1) * pageSize)
                .exec();
        }

        // get total documents in the Posts collection 
        const count = await categoryModel.countDocuments();
        // return response with posts, total pages, and current page
        res.json({
            category,
            count,
            totalPages: Math.ceil(count / pageSize),
            pageIndex
        });
    } catch (err) {
        console.error(err.message);
    }
}

const createCategory = async (req, res) => {
    const {
        name,
        isActive
    } = req.body;

    const slug = ChangeToSlug(name);

    const bodyCreate = {
        name,
        slug,
        isActive
    };

    categoryModel.create({ ...bodyCreate }, (error, data) => {
        if (error) {
            res.status(500).send('Hệ thống gặp lỗi');
            return;
        } else {
            res.status(200).send('Tạo mới thành công');
        }
    });
}



const updateCategory = async (req, res) => {
    const {
        _id,
        name,
        isActive
    } = req.body;

    const slug = ChangeToSlug(name);

    const item = await categoryModel.findById(_id);
    item.name = name;
    item.slug = slug;
    item.isActive = isActive;
    item.updateDate = new Date();
    item.save();
    res.status(200).send('Cập nhật thành công');
}


// const deleteArticle = async (req, res) => {
//     const {
//         _id
//     } = req.body;

//     article.findByIdAndDelete(_id, (err) => {
//         if (err) {
//             res.status(500).send('Hệ thống gặp lỗi');
//             return;
//         }
//         res.status(200).send('Xóa thành công ' + _id);
//     });
// }


function ChangeToSlug(name) {
    let slug;

    //Đổi chữ hoa thành chữ thường
    slug = name.toLowerCase();
    //Đổi ký tự có dấu thành không dấu
    slug = slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a');
    slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e');
    slug = slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i');
    slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o');
    slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u');
    slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y');
    slug = slug.replace(/đ/gi, 'd');
    //Xóa các ký tự đặt biệt
    slug = slug.replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi, '');
    //Đổi khoảng trắng thành ký tự gạch ngang
    slug = slug.replace(/ /gi, "-");
    //Đổi nhiều ký tự gạch ngang liên tiếp thành 1 ký tự gạch ngang
    //Phòng trường hợp người nhập vào quá nhiều ký tự trắng
    slug = slug.replace(/\-\-\-\-\-/gi, '-');
    slug = slug.replace(/\-\-\-\-/gi, '-');
    slug = slug.replace(/\-\-\-/gi, '-');
    slug = slug.replace(/\-\-/gi, '-');
    //Xóa các ký tự gạch ngang ở đầu và cuối
    slug = '@' + slug + '@';
    slug = slug.replace(/\@\-|\-\@|\@/gi, '');
    //In slug ra textbox có id “slug”
    return slug;
}


module.exports = {
    createCategory,
    getCategory,
    updateCategory
};