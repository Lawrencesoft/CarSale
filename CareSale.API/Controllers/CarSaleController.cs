using CarSale.Business;
using CarSale.Database.Model;
using Microsoft.AspNetCore.Mvc;

namespace CarSale.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarSaleController : ControllerBase
    {
        /// <summary>
        /// Car sale business object
        /// </summary>
        private readonly ICarSaleBusiness _carSaleBusiness;

        /// <summary>
        /// Constructer
        /// </summary>
        /// <param name="carSaleBusiness"></param>
        public CarSaleController(ICarSaleBusiness carSaleBusiness)
        {
            _carSaleBusiness = carSaleBusiness;
        }

        /// <summary>
        /// To get all the vehicle details
        /// </summary>
        /// <returns></returns>
        [HttpGet("/VehicleDetails")]
        public IList<Vehicles> GetAllVehicles()
        {
            return _carSaleBusiness.GetAllVehicles();
        }
        
    }
}
