using System.Collections.Generic;

namespace Models
{
    public class Dealership
    {
        public int Id { get; set; } 
        public string Address { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public int ZipCode { get; set; }
        public string PhoneNumber { get; set; }
        public List<Car> Stock { get; set; }
    }
}