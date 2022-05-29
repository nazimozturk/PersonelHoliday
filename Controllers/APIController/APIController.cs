using Data.Model;
using Data.Repository;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace PersonelHoliday.Controllers.APIController
{
    [Route("home/api")]
    [ApiController]
    public class APIController : ControllerBase
    {
        private readonly  PersonelRepository _personelReposiroty;

         public APIController(PersonelRepository personelRepository)
        {
            _personelReposiroty = personelRepository;
        }
        
        [HttpGet("Personel")]
        public ActionResult Get()
        {
            List<PersonelModel> returnModel = _personelReposiroty.GetPersonelList();
            
            return Ok(returnModel);
        }

        // POST api/<APIController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<APIController>/5
        [HttpPut("Update")]
        public void Put(int id, [FromBody] string value)
        {
        }

        //// DELETE api/<APIController>/5
        //[HttpDelete("DeletePersonel/{id}")]
        //public ActionResult Delete(int id)
        //{
        //    List<PersonelModel> returnModel = _personelReposiroty.Delete(id);

        //    return Ok(returnModel);
        //}
    }
}
