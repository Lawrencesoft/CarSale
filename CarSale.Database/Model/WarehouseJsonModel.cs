using Newtonsoft.Json;

namespace CarSale.Database.Model
{
    /// <summary>
    /// Warehouse class to retrive the data from json file
    /// </summary>
    public class WarehouseJsonModel
    {
        [JsonProperty("_id")]
        public int Id { get; set; }

        [JsonProperty("name")]
        public string Name { get; set; }

        [JsonProperty("location")]
        public Location Location { get; set; }

        [JsonProperty("cars")]
        public Cars Cars { get; set; }
    }
   
    /// <summary>
    /// This class used have the Vehicle details
    /// </summary>
    public class Vehicle
    {
        [JsonProperty("_id")]
        public int Id { get; set; }

        [JsonProperty("make")]
        public string Make { get; set; }

        [JsonProperty("model")]
        public string Model { get; set; }

        [JsonProperty("year_model")]
        public int YearModel { get; set; }

        [JsonProperty("price")]
        public double Price { get; set; }

        [JsonProperty("licensed")]
        public bool Licensed { get; set; }

        [JsonProperty("date_added")]
        public DateTime DateAdded { get; set; }
    }

    /// <summary>
    /// This class used have the cars object
    /// </summary>
    public class Cars
    {
        [JsonProperty("location")]
        public string Location { get; set; }

        [JsonProperty("vehicles")]
        public List<Vehicle> Vehicles { get; set; }
    }

    /// <summary>
    /// This class used have the latitude & longitude
    /// </summary>
    public class Location
    {
        [JsonProperty("lat")]
        public string Latitude { get; set; }

        [JsonProperty("long")]
        public string Longitude { get; set; }
    }
}
