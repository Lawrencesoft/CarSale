using CarSale.Database;
using CarSale.Database.MongoDBWebAPI;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using NSubstitute;
using System;

namespace CarSale.API.Test
{
    [TestClass]
    public class CarSaleDatabaseTest
    {

        private readonly ICarSaleDatabase _carSaleDatabase;
        private readonly IMongoDBWebAPIService _mongoDBWebAPIService;
        public CarSaleDatabaseTest()
        {
            _mongoDBWebAPIService = Substitute.For<IMongoDBWebAPIService>();
            _carSaleDatabase = new CarSaleDatabase(_mongoDBWebAPIService);
        }

        [TestMethod]
        public void GetAllVehicles_CheckVechicleCount_ShouldMatchResponse()
        {
            //Arrange

            //Act
            var response = _carSaleDatabase.GetAllVehicles();

            //Assert
            Assert.IsNotNull(response);
            Assert.AreEqual(80, response.Count);
        }

        [TestMethod]
        public void GetAllVehicles_CheckFirstVechicleDetails_ShouldMatchResponse()
        {
            //Arrange

            //Act
            var response = _carSaleDatabase.GetAllVehicles();

            //Assert
            Assert.IsNotNull(response);
            Assert.AreEqual(80, response.Count);
            Assert.AreEqual("Warehouse A", response[0].WarehouseName);
            Assert.AreEqual(1, response[0].Id);
            Assert.AreEqual("West wing", response[0].CarLocation);
            Assert.AreEqual("Volkswagen", response[0].Make);
            Assert.AreEqual("Jetta III", response[0].Model);
            Assert.AreEqual(12947.52, response[0].Price);
            Assert.AreEqual("9/18/2018", response[0].DateAdded.ToShortDateString());
        }

        [TestMethod]
        public void GetAllVehicles_CheckLastVechicleDetails_ShouldMatchResponse()
        {
            //Arrange

            //Act
            var response = _carSaleDatabase.GetAllVehicles();

            //Assert
            Assert.IsNotNull(response);
            Assert.AreEqual(80, response.Count);
            Assert.AreEqual("Warehouse D", response[79].WarehouseName);
            Assert.AreEqual(4, response[79].WarehouseId);
            Assert.AreEqual(80, response[79].Id);
            Assert.AreEqual("Suid wing", response[79].CarLocation);
            Assert.AreEqual("Lexus", response[79].Make);
            Assert.AreEqual("RX", response[79].Model);
            Assert.AreEqual(17805.45, response[79].Price);
            Assert.AreEqual("9/11/2018", response[79].DateAdded.ToShortDateString());
        }
    }
}
