using CarSale.Database.Model;
using CarSale.Database.MongoDBWebAPI.Models;
using MongoDB.Driver;

namespace CarSale.Database.MongoDBWebAPI.Services
{
    /// <summary>
    /// Mongo DB Web API Service
    /// </summary>
    public class MongoDBWebAPIService : IMongoDBWebAPIService
    {
        private readonly IMongoCollection<WarehouseDetails> _warehouseDetails;

        /// <summary>
        /// Mongo DB Web API Service Constructer
        /// </summary>
        /// <param name="settings"></param>
        public MongoDBWebAPIService(ICarSaleDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _warehouseDetails = database.GetCollection<WarehouseDetails>(settings.CarSaleCollectionName);

        }

        /// <summary>
        /// To get all the warehouse details from Mongo DB
        /// </summary>
        /// <returns></returns>
        public IList<WarehouseDetails> GetAllWarehouseDetails()
        {
            List<WarehouseDetails> warehouseDetails;
            try
            {
                warehouseDetails = _warehouseDetails.Find(warehouse => true).ToList();
                return warehouseDetails;
            }
            catch (Exception)
            {
                //Log the exception
                return null;
            }
        }

        /// <summary>
        /// To get specific warehouse details from Mongo DB
        /// </summary>
        /// <returns></returns>
        public WarehouseDetails GetWarehouse(string id)
        {
            WarehouseDetails warehouseDetail;
            try
            {
                warehouseDetail = _warehouseDetails.Find(warehouse => warehouse._id == id).FirstOrDefault();
                return warehouseDetail;
            }
            catch (Exception)
            {
                //Log the exception
                return null;
            }
        }
    }
}
