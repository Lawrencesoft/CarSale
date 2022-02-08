using CarSale.Database.Model;

namespace CarSale.Database
{
    /// <summary>
    /// This interface helps to define the DB layer methods
    /// </summary>
    public interface ICarSaleDatabase
    {
        /// <summary>
        /// Get all the vehicle details from DB
        /// </summary>
        /// <returns></returns>
        public IList<Vehicles> GetAllVehicles();
    }
}
