let { customerModel } = require('../models/customer');

const getCustomer = async (req, res) => {
    const { pageIndex = 1, pageSize = 1, name = '' } = req.query;
    try {
        let customer;
        const request = {}

        if (name) {
            request.name = new RegExp(name, 'i');
        }

        if (
            Number(pageIndex) === 0 && Number(pageSize) === 0
        ) {
            customer = await customerModel.find(request)
                .sort({ createDate: -1 })
                .exec();
        } else {
            customer = await customerModel.find(request)
                .sort({ createDate: -1 })
                .limit(pageSize * 1)
                .skip((pageIndex - 1) * pageSize)
                .exec();
        }

        // get total documents in the Posts collection 
        const count = await customerModel.countDocuments(request);
        // return response with posts, total pages, and current page
        res.json({
            customer,
            count,
            totalPages: Math.ceil(count / pageSize),
            pageIndex
        });
    } catch (err) {
        console.error(err.message);
    }
}

const getCustomerById = async (req, res) => {
    const { _id } = req.body;
    try {
        const item = await customerModel.findById(_id).exec();
        res.json(item);
    } catch (err) {
        console.error(err.message);
    }
}

const createCustomer = async (req, res) => {
    const {
        name,
        dateOfBirth = new Date(),
        address,
        phone,
        facebook,
        email,
    } = req.body;

    const bodyCreate = {
        name,
        dateOfBirth,
        address,
        phone,
        facebook,
        email
    };

    customerModel.create({ ...bodyCreate }, (error, data) => {
        if (error) {
            res.status(500).send('Hệ thống gặp lỗi');
            return;
        } else {
            res.status(200).send('Tạo mới thành công');
        }
    });
}



const updateCustomer = async (req, res) => {
    const {
        _id,
        name,
        dateOfBirth,
        address,
        phone,
        facebook,
        email
    } = req.body;


    const item = await customerModel.findById(_id);
    item.name = name;
    item.dateOfBirth = dateOfBirth;
    item.address = address;
    item.phone = phone;
    item.facebook = facebook;
    item.email = email;
    item.updateDate = new Date();
    item.save();

    res.status(200).send('Cập nhật thành công');
}

const deleteCustomer = async (req, res) => {
    const {
        _id
    } = req.body;

    customerModel.findByIdAndDelete(_id, (err) => {
        if (err) {
            res.status(500).send('Hệ thống gặp lỗi');
            return;
        }
        res.status(200).send('Xóa thành công ' + _id);
    });
}

module.exports = {
    createCustomer,
    getCustomerById,
    getCustomer,
    updateCustomer,
    deleteCustomer
};