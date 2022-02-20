using CarSale.Database.Model;

namespace CarSale.Database.MongoDBWebAPI
{
    public interface IMongoDBWebAPIService
    {
        /// <summary>
        /// Get all the Warehouse details from MongoDBWebAPI
        /// </summary>
        /// <returns></returns>
        public IList<WarehouseDetails> GetAllWarehouseDetails();

        /// <summary>
        /// Get specific Warehouse from MongoDBWebAPI
        /// </summary>
        /// <returns></returns>
        public WarehouseDetails GetWarehouse(string id);

        
    }
}
