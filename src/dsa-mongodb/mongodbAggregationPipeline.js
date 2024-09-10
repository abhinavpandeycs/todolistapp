db.sales.aggregate([
    {
      $unwind:
        {
          path: "$items",
        },
    },
    {
      $group:
        {
          _id: {
            store: "$store",
            month: {
              $dateToString: {
                format: "%Y-%m",
                date: "$date",
              },
            },
          },
          totalRevenue: {
            $sum: {
              $multiply: [
                "$items.quantity",
                "$items.price",
              ],
            },
          },
          averagePrice: {
            $avg: "$items.price",
          },
        },
    },
    {
      $project:
        {
          _id: 0,
          store: "$_id.store",
          month: "$_id.month",
          totalRevenue: 1,
          averagePrice: 1,
        },
    },
    {
      $sort:
        {
          "_id.store": 1,
          "_id.month": 1,
        },
    },
  ]);
