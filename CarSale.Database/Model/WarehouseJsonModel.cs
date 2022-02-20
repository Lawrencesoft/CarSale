using Newtonsoft.Json;

namespace CarSale.Database.Model
{
    /// <summary>
    /// Warehouse class to retrive the data from json file
    /// </summary>
    public class WarehouseDetails
    {
        public string _id { get; set; }
        public string name { get; set; }
        public Location location { get; set; }
        public Cars cars { get; set; }
    }

    /// <summary>
    /// This class used have the Vehicle details
    /// </summary>
    public class Vehicle
    {
        public int _id { get; set; }
        public string make { get; set; }
        public string model { get; set; }
        public int year_model { get; set; }
        public double price { get; set; }
        public bool licensed { get; set; }
        public string date_added { get; set; }
    }

    /// <summary>
    /// This class used have the cars object
    /// </summary>
    public class Cars
    {
        public string location { get; set; }
        public List<Vehicle> vehicles { get; set; }
    }

    /// <summary>
    /// This class used have the latitude & longitude
    /// </summary>
    public class Location
    {
        public string lat { get; set; }
        public string @long { get; set; }
    }


}
