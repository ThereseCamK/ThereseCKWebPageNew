using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ThereseCKWebPage.Core.ApplicationService;
using ThereseCKWebPage.Core.DomainModel;
using ThereseCKWebPage.UserInterface.Model;

namespace ThereseCKWebPage.UserInterface.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectsController : ControllerBase
    {
        private readonly ProjectService _projectService;

        public ProjectsController(ProjectService projectService)
        {
            _projectService = projectService;
        }

        [HttpPost]
        public void Post(ProjectViewModel project)
        {
            var addNew = new Project(
               project.Title,
               project.Description,
               project.Link
            );
            _projectService.AddNewProject(addNew);
        }

        [HttpGet]
        public ActionResult<ProjectList> Get()
        {
            return _projectService.GetProjects();
        }
    }
}
