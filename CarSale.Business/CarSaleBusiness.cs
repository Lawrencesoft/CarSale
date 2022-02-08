using CarSale.Database;
using CarSale.Database.Model;

namespace CarSale.Business
{
    /// <summary>
    /// Car Sale Business class
    /// </summary>
    public class CarSaleBusiness : ICarSaleBusiness
    {
        /// <summary>
        /// Car Sale database object
        /// </summary>
        private readonly ICarSaleDatabase _carSaleDatabase;

        /// <summary>
        /// Car Sale Business Constructer
        /// </summary>
        /// <param name="carSaleDatabase"></param>
        public CarSaleBusiness(ICarSaleDatabase carSaleDatabase)
        {
            _carSaleDatabase = carSaleDatabase;
        }
        
        /// <summary>
        /// To get all vehicle details
        /// </summary>
        /// <returns></returns>
        public IList<Vehicles> GetAllVehicles()
        {
            var vehicleList = _carSaleDatabase.GetAllVehicles();
            return vehicleList.OrderBy(x => x.DateAdded).ToList();
        }
    }
}