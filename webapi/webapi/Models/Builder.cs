using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace webapi.Models
{
    public class Builder
    {
        public int BuilderID { get; set; }
        public string AccountName { get; set; }
        public string ContactName { get; set; }
        public string BuilderAddress { get; set; }
        public int ABN { get; set; }
    }
}
