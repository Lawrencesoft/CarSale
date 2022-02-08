using CarSale.Database.Model;

namespace CarSale.Business
{
    public interface ICarSaleBusiness
    {
        /// <summary>
        /// Get all the vehicle details from Business
        /// </summary>
        /// <returns></returns>
        public IList<Vehicles> GetAllVehicles();
    }
}
