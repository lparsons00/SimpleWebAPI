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
using Microsoft.AspNetCore.Cors;

namespace webapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BuilderController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public BuilderController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        #region BUILDER CRUD
        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                    select * from dbo.Builder";
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

            return new JsonResult(table);
        }

        [HttpPost]
        public JsonResult Post(Builder builder)
        {
            string query = @"
                    insert into dbo.Builder values 
                    ('" + builder.AccountName + @"')
                    ('" + builder.ContactName + @"')
                    ('" + builder.BuilderAddress + @"')
                    ('" + builder.ABN + @"')

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
        public JsonResult Put(Builder builder)
        {
            string query = @"
                    update dbo.Builder set 
                    AccountName = '" + builder.AccountName + @"'
                    ContactName = '" + builder.ContactName + @"'
                    BuilderAddress = '" + builder.BuilderAddress+ @"'
                    ABN = '" + builder.ABN + @"'
                    where BuilderID = " + builder.BuilderID + @" 
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
                    delete from dbo.Builder
                    where BuilderID = " + id + @" 
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
        #region Other Functions

        [HttpGet]
        [Route("GetAllBuilderNames")]
        public JsonResult GetAllBuilderNames()
        {
            string query = @"
                    select AccountName from dbo.Builder
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

            return new JsonResult(table);
        }

        #endregion
    }
}