let orderModel = require('../models/order');
let { productModel } = require('../models/product');

const getOrder = async (req, res) => {
    const { pageIndex = 1, pageSize = 1, name = '', status, from, to } = req.query;
    try {
        let order;
        const request = {}

        if (name) {
            request.name = new RegExp(name, 'i');
        }

        if (status === '1') {
            request.status = true;
        } else if (status === '0') {
            request.status = false;
        }

        if (from && to) {
            const dateFrom = new Date(from);
            dateFrom.setHours(0,0,0,0);
            const dateTo = new Date(to);
            dateTo.setHours(23,59,59,999);
            request.createDate = {
                $gte: dateFrom,
                $lt: dateTo
            }
        }

        if (
            Number(pageIndex) === 0 && Number(pageSize) === 0
        ) {
            order = await orderModel.find(request)
                .sort({ createDate: -1 })
                .exec();
        } else {
            order = await orderModel.find(request)
                .sort({ createDate: -1 })
                .limit(pageSize * 1)
                .skip((pageIndex - 1) * pageSize)
                .exec();
        }

        // get total documents in the Posts collection 
        const count = await orderModel.countDocuments(request);
        // return response with posts, total pages, and current page
        res.json({
            order,
            count,
            totalPages: Math.ceil(count / pageSize),
            pageIndex
        });
    } catch (err) {
        console.error(err.message);
    }
}

const getOrderById = async (req, res) => {
    const { _id } = req.body;
    try {
        const item = await orderModel.findById(_id).exec();
        res.json(item);
    } catch (err) {
        console.error(err.message);
    }
}

const createOrder = async (req, res) => {
    const {
        name,
        address,
        customerInfo,
        list,
        totalAmount,
        profitAmount
    } = req.body;

    const bodyCreate = {
        name,
        address,
        customerInfo,
        list,
        totalAmount,
        profitAmount
    };

    if (list && list.length > 0) {
        for (const iterator of list) {
            const product = await productModel.findById(iterator._id);
            product.inventoryNumber -= Number(iterator.quantity);
            product.save();
        }
    }

    orderModel.create({ ...bodyCreate }, (error, data) => {
        if (error) {
            res.status(500).send('Hệ thống gặp lỗi');
            return;
        } else {
            res.status(200).send('Tạo mới thành công');
        }
    });
}



const updateOrder = async (req, res) => {
    const {
        _id,
        name,
        address,
        customerInfo
    } = req.body;

    const item = await orderModel.findById(_id);
    item.name = name;
    item.address = address;
    item.customerInfo = customerInfo;
    item.save();

    res.status(200).send('Cập nhật thành công');
}


const updateStatusOrder = async (req, res) => {
    const {
        _id,
        status
    } = req.body;

    const item = await orderModel.findById(_id);
    item.status = status;
    item.save();

    res.status(200).send('Cập nhật thành công');
}

const deleteOrder = async (req, res) => {
    const {
        _id,
        list
    } = req.body;

    if (list && list.length > 0) {
        for (const iterator of list) {
            const product = await productModel.findById(iterator._id);
            product.inventoryNumber += Number(iterator.quantity);
            product.save();
        }
    }

    orderModel.findByIdAndDelete(_id, (err) => {
        if (err) {
            res.status(500).send('Hệ thống gặp lỗi');
            return;
        }
        res.status(200).send('Xóa thành công ' + _id);
    });
}

module.exports = {
    createOrder,
    getOrderById,
    getOrder,
    updateOrder,
    deleteOrder,
    updateStatusOrder
};