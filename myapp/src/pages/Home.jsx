import React, { useState, useEffect } from "react";

const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("http://localhost:8080/ads/get");
        const data = await response.json();
        setItems(data); // array
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  }, []);

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:8080/ads/${id}`, {
        method: "DELETE",
      });

      setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
      <div>
        <div className="grid grid-cols-3 gap-6 p-6">
          {items.length > 0 ? (
            items.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-lg rounded-lg p-4"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 object-cover rounded-lg"
                />
                <h3 className="text-xl font-bold mt-4">{item.title}</h3>
                <p className="text-gray-600 mt-2">Category: {item.category}</p>
                <p className="text-gray-600 mt-2">{item.description}</p>
                <p className="text-green-600 font-bold mt-2">
                  Rs {item.price}
                </p>

                <button
                  onClick={() => handleDelete(item.id)}
                  className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            ))
          ) : (
            <p>{items.length === 0 ? "No items available." : "Loading items..."}</p>
          )}
        </div>

        {/* Hardcoded items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 p-4">
          {[
            {
              id: 1,
              image:
                "https://www.apple.com/v/iphone/home/by/images/overview/select/iphone_16pro__erw9alves2qa_xlarge.png",
              title: "Iphone 16",
              category: "Electronics",
              description: "salli thiba dawasata gnwa, ethakn na ithin",
              price: "1,000",
            },
            {
              id: 2,
              image:
                "https://www.apple.com/v/iphone/home/by/images/overview/select/iphone_16__c5bvots96jee_xlarge.png",
              title: "Iphone 15",
              category: "Electronics",
              description: "salli thiba dawasata gnwa, ethakn na ithin",
              price: "2,000",
            },
            {
              id: 3,
              image:
                "https://www.apple.com/v/iphone/home/by/images/overview/select/iphone_15__buwagff0mwwi_xlarge.png",
              title: "Iphone 14",
              category: "Electronics",
              description: "salli thiba dawasata gnwa, ethakn na ithin",
              price: "3,000",
            },
            {
              id: 4,
              image:
                "https://www.apple.com/v/iphone/home/by/images/overview/select/iphone_14__eso1fig4ci6a_xlarge.png",
              title: "Iphone 13",
              category: "Electronics",
              description: "salli thiba dawasata gnwa, ethakn na ithin",
              price: "4,000",
            },
            {
              id: 5,
              image:
                "https://www.apple.com/v/iphone/home/by/images/overview/select/iphone_se__cuaa2bdndqeu_xlarge.png",
              title: "SE 2",
              category: "Electronics",
              description: "salli thiba dawasata gnwa, ethakn na ithin",
              price: "5,000",
            },
          ].map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-lg p-3 w-full max-w-md flex flex-col justify-center items-center text-center"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-50 h-40 object-cover rounded-lg"
              />
              <h3 className="text-xl font-bold mt-4">{item.title}</h3>
              <p className="text-gray-600 mt-1">Category: {item.category}</p>
              <p className="text-gray-600 mt-1">{item.description}</p>
              <p className="text-green-600 font-bold mt-1">
                Rs {item.price}
              </p>
              <button
                onClick={() => alert(`Delete Item ${item.id}`)}
                className="mt-4 bg-red-500 text-white py-2 px-8 rounded hover:bg-red-600"
              >
                Delete
              </button>
              <button
                onClick={() => alert(`Add to cart Item ${item.id}`)}
                className="mt-2 bg-green-500 text-white py-2 px-7 rounded hover:bg-green-600"
              >
                Update
              </button>
            </div>
          ))}
        </div>
      </div>
  );
};

export default Home;
