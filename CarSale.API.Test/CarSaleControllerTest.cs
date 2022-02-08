using CarSale.API.Controllers;
using CarSale.Business;
using CarSale.Database.Model;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using NSubstitute;
using System;
using System.Collections.Generic;

namespace CarSale.API.Test
{
    [TestClass]
    public class CarSaleControllerTest
    {
        private readonly ICarSaleBusiness _carSaleBusiness;
        private readonly CarSaleController _carSaleController;

        public CarSaleControllerTest()
        {
            _carSaleBusiness = Substitute.For<ICarSaleBusiness>();
            _carSaleController = new CarSaleController(_carSaleBusiness);
        }

        [TestMethod]
        public void GetAllVehicles_EmptyList_ResponseShouldBeZero()
        {
            //Arrange

            //Act
            var response = _carSaleController.GetAllVehicles();

            //Assert
            Assert.IsNotNull(response);
            Assert.AreEqual(0, response.Count);
        }

        [TestMethod]
        public void GetAllVehicles_CheckFirstVechiclAfterSorting_ShouldMatchResponse()
        {
            //Arrange
            List<Vehicles> vehicles = new List<Vehicles>();
            vehicles.Add(new Vehicles { WarehouseId = 1, WarehouseName = "Warehouse A", CarLocation = "West wing", Make = "Volkswagen", Model = "Jetta III", Price = 300, DateAdded = DateTime.Today });
            vehicles.Add(new Vehicles { WarehouseId = 2, WarehouseName = "Warehouse B", CarLocation = "Suid wing", Make = "Lexus", Model = "RX", Price = 500, DateAdded = DateTime.Today.AddDays(1) });
            vehicles.Add(new Vehicles { WarehouseId = 3, WarehouseName = "Warehouse C", CarLocation = "East wing", Make = "Volkswagen", Model = "RX1", Price = 700, DateAdded = DateTime.Today.AddDays(-30) });
            vehicles.Add(new Vehicles { WarehouseId = 4, WarehouseName = "Warehouse D", CarLocation = "North wing", Make = "Volkswagen", Model = "RX2", Price = 1300, DateAdded = DateTime.Today.AddDays(+30) });
            _carSaleBusiness.GetAllVehicles().Returns(vehicles);

            //Act
            var response = _carSaleController.GetAllVehicles();

            //Assert
            Assert.IsNotNull(response);
            Assert.AreEqual(4, response.Count);
            Assert.AreEqual("Warehouse A", response[0].WarehouseName);
            Assert.AreEqual(1, response[0].WarehouseId);
            Assert.AreEqual("West wing", response[0].CarLocation);
            Assert.AreEqual("Volkswagen", response[0].Make);
            Assert.AreEqual("Jetta III", response[0].Model);
            Assert.AreEqual(300, response[0].Price);
            Assert.AreEqual(DateTime.Today.ToShortDateString(), response[0].DateAdded.ToShortDateString());
        }


        [TestMethod]
        public void GetAllVehicles_CheckLastVechicle_ShouldMatchResponse()
        {
            //Arrange
            List<Vehicles> vehicles = new List<Vehicles>();
            vehicles.Add(new Vehicles { WarehouseId = 1, WarehouseName = "Warehouse A", CarLocation = "West wing", Make = "Volkswagen", Model = "Jetta III", Price = 300, DateAdded = DateTime.Today });
            vehicles.Add(new Vehicles { WarehouseId = 2, WarehouseName = "Warehouse B", CarLocation = "Suid wing", Make = "Lexus", Model = "RX", Price = 500, DateAdded = DateTime.Today.AddDays(1) });
            vehicles.Add(new Vehicles { WarehouseId = 3, WarehouseName = "Warehouse C", CarLocation = "East wing", Make = "Volkswagen", Model = "RX1", Price = 700, DateAdded = DateTime.Today.AddDays(-30) });
            vehicles.Add(new Vehicles { WarehouseId = 4, WarehouseName = "Warehouse D", CarLocation = "North wing", Make = "Volkswagen", Model = "RX2", Price = 1300, DateAdded = DateTime.Today.AddDays(+30) });
            _carSaleBusiness.GetAllVehicles().Returns(vehicles);

            //Act
            var response = _carSaleController.GetAllVehicles();

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