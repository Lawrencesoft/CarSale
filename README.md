# Car Sale
Second Hand Car sales in online

# Challenge Description:
### Background</br>
So, I have a friend called Frank. He owns a second hand car garage and needs your help!
He would like you to create a website for his shop. These days Frank only sells his second hand cars online and could use a website of his own. With that said I guess we should do this in phases, because you know...agile! So it would be best if you start with Phase1!
#### Phase 1:</br>
Start by creating a page that will display all of the cars that Frank has across all of his warehouses. Please
sort the list according to _date_added_ asc.
Create one GET API to fetch the list of cars. Mock this JSON file ([warehouses.json](https://github.com/Lawrencesoft/CarSale/blob/main/CareSale.API/warehouses.json))
#### Phase 2:</br>
Now, allowing the user to click on any of the cars (that are licensed = true) would make it a lot nicer. Once the user clicked on a car, we then show more details such as, the warehouse where it is stored and its location perhaps? It is up to you how detailed you want to make it.
#### Phase 3:</br>
Wow! Okay, we now have some good functionality! So let’s take it one step further! Let’s allow the user to add the car he is viewing to some sort of shopping cart so that he can easily checkout once he is done shopping. Oh, and perhaps we should show the user the total amount as well?

# Technologies and Details
- For the Front end framework - Angular
- For the Back end -C# Core Web API
- Created Frond end and Back end separately
- Test cases created separately
- Sample data([warehouses.json](https://github.com/Lawrencesoft/CarSale/blob/main/CareSale.API/warehouses.json)) stored in Mongo DB.
- Added Dependancy Injection

# Required version to build and execute the Repository
.NET 6.0 version(.Net Core 6.0) Visual Studio 2022 IDE: Visual Studio CODE for UI Layer- Angular

# Build and Run the Repository
Build any .NET Core project using the .NET Core CLI, which is installed with the [.NET Core SDK](https://dotnet.microsoft.com/download). Then run these commands from the CLI in the directory of this project:<br />

``dotnet build``<br />
``dotnet run``<br />

These will install any needed dependencies, build the project, and run the project respectively.  

**Other Options** - 
1) **Buid :** Open the Visual Studio(2022) IDE **Build**  Menu --> **Build solution**
2) **Run :** Open the [CarSale.API.sln](https://github.com/Lawrencesoft/CarSale/blob/main/CarSale.API.sln) in Visual Studio(2022) IDE and make the CarSale.API as startup project and execute it or publish the API project in IIS and execute from there(Attached the screenshot below). 

**Publish :** Open the Visual Studio(2022) IDE **Build**  Menu --> **Publish CarSaleAPI** <br />
&nbsp;&nbsp;&nbsp;&nbsp;Select the path to publish it. Once it is publish to the path, This path can be link from IIS and run from there <br />

**Test Project Execution:** Open the Visual Studio(2022) IDE **Test**  Menu --> Run All Tests<br />
    Once it is executed, Test explorer will show the test results(Executed screenshot added below) 

# ScreenShots
****Login Page**** <br>
Username: ****admin****
<br>Password: ****password****
![image](https://user-images.githubusercontent.com/63959021/154868885-c07fddd4-e8ae-4e10-9bef-11d4b51c36ef.png)
****Phase 1:****![image](https://user-images.githubusercontent.com/63959021/154869192-62d83811-19f7-440c-b7ad-07561b8b52b7.png)
****Phase 2:**** ![image](https://user-images.githubusercontent.com/63959021/154869263-cd91213c-26d4-4611-b4a2-6ee9b5b50cc6.png)
****Phase 3:**** ![image](https://user-images.githubusercontent.com/63959021/154869290-c3132f17-538b-4df5-808b-51360e9796f6.png)

****Swagger API****<br>
![image](https://user-images.githubusercontent.com/63959021/154868738-9c84f642-9cae-48cb-9147-5efb62c3ce8e.png)
![image](https://user-images.githubusercontent.com/63959021/154869660-5d602d54-0bec-45f2-876d-5ef3e58d2f7e.png)


****Unit Test case Results****<br>
![image](https://user-images.githubusercontent.com/63959021/154869367-a0cfdbff-0043-4ad5-b4a4-4778247c1ea2.png)<br>
****UI Unit test cases****<br>
![image](https://user-images.githubusercontent.com/63959021/154869424-abf7f0ae-2e6c-42dd-b38f-3afcbeff7f77.png)


