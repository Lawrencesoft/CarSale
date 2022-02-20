using CarSale.Business;
using CarSale.Database;
using CarSale.Database.MongoDBWebAPI;
using CarSale.Database.MongoDBWebAPI.Models;
using CarSale.Database.MongoDBWebAPI.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//Setup Dependancy Injection
builder.Services.AddSingleton<ICarSaleBusiness, CarSaleBusiness>()
    .AddSingleton<ICarSaleDatabase, CarSaleDatabase>()
    .AddSingleton<IMongoDBWebAPIService, MongoDBWebAPIService>()
    .AddSingleton< ICarSaleDatabaseSettings,CarSaleDatabaseSettings>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
