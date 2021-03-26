let orderModel = require('../models/order');
let { productModel } = require('../models/product');
let { customerModel } = require('../models/customer');

const getTrendingProducts = async (req, res) => {
    const data = await orderModel.aggregate([
        {
            $unwind: {
                path: "$list"
            }
        }, {
            $group: {
                _id: "$list._id",
                count: { $sum: 1 }
            }
        }]).exec();
    const dataTrendingProducts = [];

    if (data && data.length > 0) {
        for (const iterator of data) {
            const { _id, count } = iterator;
            const product = await productModel.findById(_id).exec();

            profitAmount = (product.saleprice * count) - (product.buyingPrice * count)

            dataTrendingProducts.push({
                product,
                count,
                profitAmount
            });
        }
        dataTrendingProducts.sort((a, b) => (a.count > b.count) ? -1 : ((b.count > a.count) ? 1 : 0))
        res.json({
            dataTrendingProducts
        });
    } else {
        res.json({
            dataTrendingProducts
        });
    }

}

const getRankCustomers = async (req, res) => {
    const data = await orderModel.aggregate([
        {
            $group: {
                _id: "$customerInfo._id",
                totalAmount: { $sum: "$totalAmount" },
                count: { $sum: 1 }
            }
        }]).exec();
    const dataRankCustomers = [];

    if (data && data.length > 0) {
        for (const iterator of data) {
            const { _id, count, totalAmount } = iterator;
            const customer = await customerModel.findById(_id).exec();


            dataRankCustomers.push({
                customer,
                totalAmount,
                count
            });
        }
        dataRankCustomers.sort((a, b) => (a.count > b.count) ? -1 : ((b.count > a.count) ? 1 : 0))
        res.json({
            dataRankCustomers
        });
    } else {
        res.json({
            dataRankCustomers
        });
    }

}

module.exports = {
    getTrendingProducts,
    getRankCustomers
};