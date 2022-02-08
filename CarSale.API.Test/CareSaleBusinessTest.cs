using CarSale.Business;
using CarSale.Database;
using CarSale.Database.Model;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using NSubstitute;
using System;
using System.Collections.Generic;

namespace CarSale.API.Test
{
    [TestClass]
    public class CareSaleBusinessTest
    {
        private readonly ICarSaleBusiness _carSaleBusiness;
        private readonly ICarSaleDatabase _carSaleDatabase;
        public CareSaleBusinessTest()
        {
            _carSaleDatabase = Substitute.For<ICarSaleDatabase>();
            _carSaleBusiness = new CarSaleBusiness(_carSaleDatabase);
        }

        [TestMethod]
        public void GetAllVehicles_EmptyList_ResponseShouldBeZero()
        {
            //Arrange

            //Act
            var response = _carSaleBusiness.GetAllVehicles();

            //Assert
            Assert.IsNotNull(response);
            Assert.AreEqual(0, response.Count);
        }

        [TestMethod]
        public void GetAllVehicles_CheckFirstVechiclAfterSorting_ShouldMatchResponse()
        {
            //Arrange
            List<Vehicles> vehicles = new List<Vehicles>();
            vehicles.Add(new Vehicles { WarehouseId = 1, WarehouseName = "Warehouse A", CarLocation = "West wing", Make = "Volkswagen", Model = "Jetta III",Price = 300, DateAdded = DateTime.Today });
            vehicles.Add(new Vehicles { WarehouseId = 2, WarehouseName = "Warehouse B", CarLocation = "Suid wing", Make = "Lexus", Model = "RX", Price = 500, DateAdded = DateTime.Today.AddDays(1) });
            vehicles.Add(new Vehicles { WarehouseId = 3, WarehouseName = "Warehouse C", CarLocation = "East wing", Make = "Volkswagen", Model = "RX1", Price = 700, DateAdded = DateTime.Today.AddDays(-30) });
            vehicles.Add(new Vehicles { WarehouseId = 4, WarehouseName = "Warehouse D", CarLocation = "North wing", Make = "Volkswagen", Model = "RX2", Price = 1300, DateAdded = DateTime.Today.AddDays(+30) });
            _carSaleDatabase.GetAllVehicles().Returns(vehicles);

            //Act
            var response = _carSaleBusiness.GetAllVehicles();

            //Assert
            Assert.IsNotNull(response);
            Assert.AreEqual(4, response.Count);
            Assert.AreEqual("Warehouse C", response[0].WarehouseName);
            Assert.AreEqual(3, response[0].WarehouseId);
            Assert.AreEqual("East wing", response[0].CarLocation);
            Assert.AreEqual("Volkswagen", response[0].Make);
            Assert.AreEqual("RX1", response[0].Model);
            Assert.AreEqual(700, response[0].Price);
            Assert.AreEqual(DateTime.Today.AddDays(-30).ToShortDateString(), response[0].DateAdded.ToShortDateString());
        }


        [TestMethod]
        public void GetAllVehicles_CheckLastVechicleAfterSorting_ShouldMatchResponse()
        {
            //Arrange
            List<Vehicles> vehicles = new List<Vehicles>();
            vehicles.Add(new Vehicles { WarehouseId = 1, WarehouseName = "Warehouse A", CarLocation = "West wing", Make = "Volkswagen", Model = "Jetta III", Price = 300, DateAdded = DateTime.Today });
            vehicles.Add(new Vehicles { WarehouseId = 2, WarehouseName = "Warehouse B", CarLocation = "Suid wing", Make = "Lexus", Model = "RX", Price = 500, DateAdded = DateTime.Today.AddDays(1) });
            vehicles.Add(new Vehicles { WarehouseId = 3, WarehouseName = "Warehouse C", CarLocation = "East wing", Make = "Volkswagen", Model = "RX1", Price = 700, DateAdded = DateTime.Today.AddDays(-30) });
            vehicles.Add(new Vehicles { WarehouseId = 4, WarehouseName = "Warehouse D", CarLocation = "North wing", Make = "Volkswagen", Model = "RX2", Price = 1300, DateAdded = DateTime.Today.AddDays(+30) });
            _carSaleDatabase.GetAllVehicles().Returns(vehicles);

            //Act
            var response = _carSaleBusiness.GetAllVehicles();

            //Assert
            Assert.IsNotNull(response);
            Assert.AreEqual(4, response.Count);
            Assert.AreEqual("Warehouse D", response[3].WarehouseName);
            Assert.AreEqual(4, response[3].WarehouseId);
            Assert.AreEqual("North wing", response[3].CarLocation);
            Assert.AreEqual("Volkswagen", response[3].Make);
            Assert.AreEqual("RX2", response[3].Model);
            Assert.AreEqual(1300, response[3].Price);
            Assert.AreEqual(DateTime.Today.AddDays(+30).ToShortDateString(), response[3].DateAdded.ToShortDateString());
        }
    }
}
