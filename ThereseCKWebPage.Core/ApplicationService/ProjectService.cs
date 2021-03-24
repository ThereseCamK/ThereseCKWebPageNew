using System;
using System.Collections.Generic;
using System.Text;
using ThereseCKWebPage.Core.DomainModel;
using ThereseCKWebPage.Core.DomainService;

namespace ThereseCKWebPage.Core.ApplicationService
{
    public class ProjectService
    {
        private readonly IProjectsRepository _projects;

        public ProjectService(IProjectsRepository projects)
        {
            _projects = projects;
        }

        public bool AddNewProject(Project addNew)
        {
            return _projects.Create(addNew);
        }

        public ProjectList GetProjects()
        {
            var allProjects = _projects.ReadAll();
            return allProjects;
        }
    }
}
