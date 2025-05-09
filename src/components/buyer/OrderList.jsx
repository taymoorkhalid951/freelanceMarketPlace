const OrderList = ({ type }) => {
  const orders = type === "recent" ? ["Logo Design", "Web Dev"] : ["SEO Setup"];

  return (
    <div className="space-y-4">
      {orders.map((order, i) => (
        <div
          key={i}
          className="bg-white/10 backdrop-blur-lg p-4 rounded-xl border border-white/20 shadow-lg"
        >
          <p className="font-medium">{order}</p>
          <p className="text-sm text-gray-300">
            {type === "recent" ? "In Progress" : "Completed"}
          </p>
        </div>
      ))}
    </div>
  );
};

export default OrderList;
