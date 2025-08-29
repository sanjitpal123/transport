import { useContext, useEffect, useState } from "react";
import { GlobalStore } from "../component/GlobalStore";
import { FetchBooking } from "../services/DashBoard";

function BookingPage() {
  const { User } = useContext(GlobalStore);
  const wholeObject = JSON.parse(localStorage.getItem("user"));
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log("loginuser in booking", wholeObject);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;

  // Fetch booking data
  async function Booking() {
    try {
      setLoading(true);
      const data = await FetchBooking(wholeObject.access_token);
      console.log("data in booking", data);
      setBookings(data.dataList || []);
    } catch (error) {
      console.log("Error in booking", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    Booking();
  }, []);

  // Pagination logic
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = bookings.slice(indexOfFirstRecord, indexOfLastRecord);
  const totalPages = Math.ceil(bookings.length / recordsPerPage);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="p-4 bg-white min-h-screen">
      <h1 className="text-2xl font-bold text-black mb-4 text-center">
        Booking Details
      </h1>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <p className="text-lg text-gray-600">Loading bookings...</p>
        </div>
      ) : bookings.length === 0 ? (
        <div className="flex justify-center items-center h-64">
          <p className="text-lg text-gray-600">No bookings found.</p>
        </div>
      ) : (
        <>
          <div className="overflow-x-auto rounded-lg shadow-lg">
            <table className="table-auto border-collapse border border-gray-300 w-full text-sm">
              <thead className="bg-black text-white sticky top-0">
                <tr>
                  <th className="border border-gray-300 px-4 py-2">ID</th>
                  <th className="border border-gray-300 px-4 py-2">Name</th>
                  <th className="border border-gray-300 px-4 py-2">Email</th>
                  <th className="border border-gray-300 px-4 py-2">Mobile</th>
                  <th className="border border-gray-300 px-4 py-2">Pickup</th>
                  <th className="border border-gray-300 px-4 py-2">Dropoff</th>
                  <th className="border border-gray-300 px-4 py-2">
                    Pickup Date
                  </th>
                  <th className="border border-gray-300 px-4 py-2">
                    Pickup Time
                  </th>
                  <th className="border border-gray-300 px-4 py-2">
                    Passengers
                  </th>
                  <th className="border border-gray-300 px-4 py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {currentRecords.map((item, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-100 transition duration-200"
                  >
                    <td className="border border-gray-300 px-4 py-2">
                      {item.id}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {item.name}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {item.booking_email}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {item.booking_mobile}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {item.pickup_location}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {item.dropoff_location}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {item.pickup_date}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {item.pickup_time}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {item.passengers}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-green-600">
                      {item.status_description || "N/A"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center mt-5 gap-2">
            <button
              className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed"
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>

            {/* Page Numbers */}
            {[...Array(totalPages).keys()].slice(0, 10).map((num) => (
              <button
                key={num + 1}
                onClick={() => goToPage(num + 1)}
                className={`px-3 py-1 rounded-lg ${
                  currentPage === num + 1
                    ? "bg-black text-white"
                    : "bg-gray-200 text-black hover:bg-gray-300"
                }`}
              >
                {num + 1}
              </button>
            ))}

            {totalPages > 5 && <span className="px-2">...</span>}

            {totalPages > 5 && (
              <button
                onClick={() => goToPage(totalPages)}
                className={`px-3 py-1 rounded-lg ${
                  currentPage === totalPages
                    ? "bg-black text-white"
                    : "bg-gray-200 text-black hover:bg-gray-300"
                }`}
              >
                {totalPages}
              </button>
            )}

            <button
              className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed"
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default BookingPage;
