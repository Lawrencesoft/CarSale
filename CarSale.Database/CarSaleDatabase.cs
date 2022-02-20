using CarSale.Database.Model;
using CarSale.Database.MongoDBWebAPI;
using MongoDB.Driver;
using Newtonsoft.Json;

namespace CarSale.Database
{
    /// <summary>
    /// Carsale database implementation class
    /// </summary>
    public class CarSaleDatabase : ICarSaleDatabase
    {
        private readonly IMongoDBWebAPIService _mongoDBWebAPIService;

        public CarSaleDatabase(IMongoDBWebAPIService mongoDBWebAPIService)
        {
            _mongoDBWebAPIService = mongoDBWebAPIService;
        }


        /// <summary>
        /// To get all the cars details from the DB
        /// </summary>
        /// <returns></returns>
        public IList<Vehicles> GetAllVehicles()
        {
            List<Vehicles> vehicleList = new List<Vehicles>();

            var results = _mongoDBWebAPIService.GetAllWarehouseDetails();
            //var results = JsonConvert.DeserializeObject<IList<WarehouseJsonModel>>(File.ReadAllText($"{Directory.GetCurrentDirectory()}/warehouses.json"));
            if (results?.Count > 0)
            {
                vehicleList = results.SelectMany(item => item.cars.vehicles.Select(vehicle => new Vehicles
                {
                    Id = vehicle._id,
                    Make = vehicle.make,
                    Model = vehicle.model,
                    YearModel = vehicle.year_model,
                    Price = vehicle.price,
                    licensed = vehicle.licensed,
                    DateAdded = Convert.ToDateTime(vehicle.date_added),
                    WarehouseId = Convert.ToInt32(item._id),
                    WarehouseName = item.name,
                    CarLocation = item.cars.location
                })).ToList();
            }
            return vehicleList;
        }
    }
}