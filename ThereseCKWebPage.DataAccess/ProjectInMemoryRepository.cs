using System;
using System.Collections.Generic;
using System.Text;
using ThereseCKWebPage.Core.DomainModel;
using ThereseCKWebPage.Core.DomainService;

namespace ThereseCKWebPage.DataAccess
{
    public class ProjectInMemoryRepository : IProjectsRepository
    {
        private List<Project> _projectList;


        public ProjectInMemoryRepository()
        {
            _projectList = new List<Project>();
        }
        public bool Create(Project projs)
        {
            _projectList.Add(projs);
            return true;
        }

        public ProjectList ReadAll()
        {
            return new ProjectList(_projectList);
        }
    }
}
