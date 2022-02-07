namespace CarSale.API.Model
{
    public class Cars
    {
        /// <summary>
        /// Car Id
        /// </summary>
        public int Id { get; set; }

        /// <summary>
        /// Car location
        /// </summary>
        public string Location { get; set; }

        /// <summary>
        /// Car Warehouse
        /// </summary>
        public Warehouse Warehouse { get; set; }

        /// <summary>
        /// Car Vehicle
        /// </summary>
        public Vehicles Vehicle { get; set; }
    }
}
