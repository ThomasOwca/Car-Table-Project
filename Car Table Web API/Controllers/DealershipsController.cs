using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Models;

namespace Car_Table_Web_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DealershipsController : ControllerBase
    {
        private List<Dealership> dealerships;

        public DealershipsController ()
        {
            dealerships = new List<Dealership>();
            dealerships = new List<Dealership>()
            {
                new Dealership() 
                { 
                    Id = 1, 
                    Address = "4732 Olde Park Dr.",
                    City = "Tipp City",
                    State = "Ohio",
                    ZipCode = 45371,
                    PhoneNumber = "937-999-9999",
                    Stock = new List<Car>()
                    { 
                        new Car { Year = 2020, Make = "Toyota", Model = "Supra", Price = 54499.99M },
                        new Car { Year = 2019, Make = "Dodge", Model = "Challenger SRT-8", Price = 44499.99M },
                        new Car { Year = 2019, Make = "Dodge", Model = "Charger SRT-8", Price = 41499.99M },
                        new Car { Year = 2019, Make = "Mazda", Model = "Miata", Price = 31499.99M }
                    }
                },
                new Dealership() 
                { 
                    Id = 2, 
                    Address = "109 Portsmouth Ct.",
                    City = "Glendale Heights",
                    State = "Illinois",
                    ZipCode = 60139,
                    PhoneNumber = "630-999-9999",
                    Stock = new List<Car>()
                    { 
                        new Car { Year = 2018, Make = "Toyota", Model = "Corolla", Price = 30499.99M },
                        new Car { Year = 2018, Make = "Dodge", Model = "Journey", Price = 34499.99M },
                        new Car { Year = 2018, Make = "Dodge", Model = "Ram", Price = 47499.99M },
                        new Car { Year = 2018, Make = "Mazda", Model = "CX-5", Price = 25499.99M }
                    }
                }
            };
        }

        // GET api/dealerships
        [HttpGet]
        public IActionResult Get()
        {
            var result = dealerships.ToList();
            return Ok(result);
        }
    }
}
