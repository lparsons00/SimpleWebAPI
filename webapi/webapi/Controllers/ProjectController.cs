using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using System.Data;
using webapi.Models;
using System.IO;
using Microsoft.AspNetCore.Hosting;

namespace webapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;

        public ProjectController(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
        }

        #region PROJECT CRUD
        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                    select * from dbo.Project
                    ";
            DataTable table = new DataTable();
            //use same connection as builder as from same db
            string sqlDataSource = _configuration.GetConnectionString("BuilderAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }

        [HttpPost]
        public JsonResult Post(Project project)
        {
            string query = @"
                    insert into dbo.Project 
                    (ProjectName, ProjectAddress, ProjectTown, Council,
                    ProjectState, ApproxValue, StartDate, ExpectEnd, Builder)
                    values 
                    (
                    '" + project.ProjectName + @"'
                    ,'" + project.ProjectAddress + @"'
                    ,'" + project.ProjectTown + @"'
                    ,'" + project.Council + @"'
                    ,'" + project.ProjectState + @"'
                    ,'" + project.ApproxValue + @"'
                    ,'" + project.StartDate + @"'
                    ,'" + project.ExpectEnd + @"'
                    ,'" + project.Builder + @"'
                    )
                    ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("BuilderAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Added Successfully");
        }

        [HttpPut]
        public JsonResult Put(Project project)
        {

            string query = @"
                    update dbo.Project set 
                    ProjectName = '" + project.ProjectName + @"'
                    ,Project = '" + project.ProjectAddress + @"'
                    ,DateOfJoining = '" + project.ProjectTown + @"'
                    ,DateOfJoining = '" + project.Council + @"'
                    ,DateOfJoining = '" + project.ProjectState + @"'
                    ,DateOfJoining = '" + project.ApproxValue + @"'
                    ,DateOfJoining = '" + project.StartDate + @"'
                    ,DateOfJoining = '" + project.ExpectEnd + @"'
                    ,DateOfJoining = '" + project.Builder + @"'
                    where ProjectID = " + project.ProjectID + @" 
                    ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("BuilderAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Updated Successfully");
        }

        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            string query = @"
                    delete from dbo.Project
                    where ProjectID = " + id + @" 
                    ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("BuilderAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Deleted Successfully");
        }

        #endregion
    }
}