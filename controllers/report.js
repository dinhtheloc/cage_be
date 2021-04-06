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

    sumProfit = 0;

    if (data && data.length > 0) {
        for (const iterator of data) {
            const { _id, count } = iterator;
            const product = await productModel.findById(_id).exec();

            profitAmount = (product.saleprice * count) - (product.buyingPrice * count);
            sumProfit += profitAmount;

            dataTrendingProducts.push({
                product,
                count,
                profitAmount
            });
        }
        dataTrendingProducts.sort((a, b) => (a.count > b.count) ? -1 : ((b.count > a.count) ? 1 : 0))
        res.json({
            dataTrendingProducts,
            sumProfit
        });
    } else {
        res.json({
            dataTrendingProducts,
            sumProfit
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

    const countCustomer = await customerModel.countDocuments();


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
        dataRankCustomers.sort((a, b) => (a.totalAmount > b.totalAmount) ? -1 : ((b.totalAmount > a.totalAmount) ? 1 : 0))
        res.json({
            dataRankCustomers,
            countCustomer
        });
    } else {
        res.json({
            dataRankCustomers,
            countCustomer
        });
    }

}

const getReportOrder = async (req, res) => {
    const dataTrue = await orderModel.aggregate([
        {
            $match: {
                status: true
            }
        }
    ]).exec();
    const dataFalse = await orderModel.aggregate([
        {
            $match: {
                status: false
            }
        }
    ]).exec();

    const countTrue = dataTrue.length;
    const countFalse = dataFalse.length;

    res.json({
        countTrue,
        countFalse
    });
}

const getDataChart = async (req, res) => {
    const {
        fromDate,
        toDate
    } = req.body;

    const daylist = getDaysArray(new Date(fromDate), new Date(toDate));
    daylist.map((v) => v.toISOString().slice(0, 10)).join("")

    const result = [];
    let totalProfit = 0;
    let totalCount = 0;

    if (daylist && daylist.length > 0) {
        for (const iterator of daylist) {
            const request = {}
            const dateFrom = new Date(iterator);
            dateFrom.setHours(0, 0, 0, 0);
            const dateTo = new Date(iterator);
            dateTo.setHours(23, 59, 59, 999);

            request.createDate = {
                $gte: dateFrom,
                $lt: dateTo
            }
            const data = await orderModel.find(request);
            const count = data.length;

            if (count > 0) {
                totalCount += count;

                for (const iterator2 of data) {
                    totalProfit += iterator2.profitAmount;
                }
            }

            result.push({
                value: count,
                label: dateFrom
            })
        }
    }

    // orderModel
    res.json({
        result,
        totalProfit,
        totalCount
    });
}

const getDaysArray = function (start, end) {
    for (var arr = [], dt = new Date(start); dt <= end; dt.setDate(dt.getDate() + 1)) {
        arr.push(new Date(dt));
    }
    return arr;
};


module.exports = {
    getTrendingProducts,
    getRankCustomers,
    getReportOrder,
    getDataChart
};