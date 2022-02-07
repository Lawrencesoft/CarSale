namespace CarSale.API.Model
{
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
        public DateOnly DateAdded { get; set; }
    }

}
