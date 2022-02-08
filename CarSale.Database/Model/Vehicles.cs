namespace CarSale.Database.Model
{
    /// <summary>
    /// This class used have the Vehicle details
    /// </summary>
    public class Vehicles
    {
        /// <summary>
        /// Vehicle Id
        /// </summary>
        public int Id { get; set; }

        /// <summary>
        /// Vehicle Make
        /// </summary>
        public string Make { get; set; }

        /// <summary>
        /// Vehicle Model
        /// </summary>
        public string Model { get; set; }

        /// <summary>
        /// Vehicle model year
        /// </summary>
        public int YearModel { get; set; }

        /// <summary>
        /// Vehicle Price
        /// </summary>
        public double Price { get; set; }

        /// <summary>
        /// Vehicle Licensed
        /// </summary>
        public bool licensed { get; set; }

        /// <summary>
        /// Vehicle date added
        /// </summary>
        public DateTime DateAdded { get; set; }

        /// <summary>
        /// Warehouse Id
        /// </summary>
        public int WarehouseId { get; set; }

        /// <summary>
        /// Warehouse Name
        /// </summary>
        public string WarehouseName { get; set; }

        /// <summary>
        /// Car Location
        /// </summary>
        public string CarLocation { get; set; }
    }

}
