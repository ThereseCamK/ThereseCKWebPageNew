using System;
using System.Collections.Generic;
using System.Text;

namespace ThereseCKWebPage.Core.DomainModel
{
    public class ProjectList
    {
        public IEnumerable<Project> Projects { get; set; }

        public ProjectList(IEnumerable<Project> projects)
        {
            Projects = projects;
        }
    }
}
