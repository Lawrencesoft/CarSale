using Microsoft.Extensions.Configuration;

namespace CarSale.Database.MongoDBWebAPI.Models
{
    /// <summary>
    /// CarSale Configuration Model class to get Mongo DB connectionstrings
    /// </summary>
    public class CarSaleDatabaseSettings : ICarSaleDatabaseSettings
    {
        public CarSaleDatabaseSettings(IConfiguration configuration)
        {
            CarSaleCollectionName = configuration.GetSection("CarSaleDatabaseSettings").GetSection("CarSaleCollectionName").Value;
            ConnectionString = configuration.GetSection("CarSaleDatabaseSettings").GetSection("ConnectionString").Value;
            DatabaseName = configuration.GetSection("CarSaleDatabaseSettings").GetSection("DatabaseName").Value;

        }

        /// <summary>
        /// CarSale Collection Name
        /// </summary>
        public string CarSaleCollectionName { get; set; }

        /// <summary>
        /// CarSale Connection String
        /// </summary>
        public string ConnectionString { get; set; }

        /// <summary>
        /// CarSale Database Name
        /// </summary>
        public string DatabaseName { get; set; }
    }

    /// <summary>
    /// Interface for CarSale Configuration Model class to get Mongo DB connectionstrings
    /// </summary>
    public interface ICarSaleDatabaseSettings
    {
        /// <summary>
        /// CarSale Collection Name
        /// </summary>
        public string CarSaleCollectionName { get; set; }

        /// <summary>
        /// CarSale Connection String
        /// </summary>
        public string ConnectionString { get; set; }

        /// <summary>
        /// CarSale Database Name
        /// </summary>
        public string DatabaseName { get; set; }
    }
}

