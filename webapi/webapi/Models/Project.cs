using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace webapi.Models
{
    public class Project
    {
        public int ProjectID { get; set; }
        public string ProjectName { get; set; }
        public string ProjectAddress { get; set; }
        public string ProjectTown { get; set; }
        public string Council { get; set; }
        public string ProjectState { get; set; }
        public int ApproxValue { get; set; }
        public string StartDate { get; set; }
        public string ExpectEnd { get; set; }
        public string Builder { get; set; }
    }
}
