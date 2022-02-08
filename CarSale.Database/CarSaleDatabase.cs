using CarSale.Database.Model;
using Newtonsoft.Json;

namespace CarSale.Database
{
    /// <summary>
    /// Carsale database implementation class
    /// </summary>
    public class CarSaleDatabase : ICarSaleDatabase
    {

        /// <summary>
        /// To get all the cars details from the DB
        /// </summary>
        /// <returns></returns>
        public IList<Vehicles> GetAllVehicles()
        {
            List<Vehicles> vehicleList = new List<Vehicles>();
            var results = JsonConvert.DeserializeObject<IList<WarehouseJsonModel>>(File.ReadAllText($"{Directory.GetCurrentDirectory()}/warehouses.json"));
            if (results?.Count > 0)
            {
                vehicleList = results.SelectMany(item => item.Cars.Vehicles.Select(vehicle => new Vehicles
                {
                    Id = vehicle.Id,
                    Make = vehicle.Make,
                    Model = vehicle.Model,
                    YearModel = vehicle.YearModel,
                    Price = vehicle.Price,
                    licensed = vehicle.Licensed,
                    DateAdded = vehicle.DateAdded,
                    WarehouseId = item.Id,
                    WarehouseName = item.Name,
                    CarLocation = item.Cars.Location
                })).ToList();
            }
            return vehicleList;
        }
    }
}