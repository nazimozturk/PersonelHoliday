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
        private readonly  PersonelRepository _personelRepository;

        public APIController(PersonelRepository personelRepository)
        {
            _personelRepository = personelRepository;
        }

        
        [HttpGet("Personel")]
        public ActionResult Get()
        {
            List<PersonelModel> returnModel = _personelRepository.GetPersonelList();
            
            return Ok(returnModel);
        }

        [HttpGet("Departman")]
        public ActionResult DepartmanList()
        {
            List<DepartmanModel> returnModel = _personelRepository.GetDepartmanList();

            return Ok(returnModel);
        }

        // POST api/<APIController>
        [HttpPost("PersonelInsert")]
        public bool Post(string FirstName, string LastName, string Email, string Password)
        {
            return _personelRepository.Insert(FirstName, LastName, Password, Email);
        }

        // PUT api/<APIController>/5
        [HttpPut("Update")]
        public bool Put(int id, string FirstName, string LastName, string Email)
        {
            return _personelRepository.Update(id,FirstName,LastName,Email);
        }

        // DELETE api/<APIController>/5
        [HttpDelete("DeletePersonel")]
        public bool Delete(int id)
        {
          return _personelRepository.Delete(id);
        }
    }
}
