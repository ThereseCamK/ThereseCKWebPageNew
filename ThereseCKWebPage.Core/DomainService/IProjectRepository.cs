using System;
using System.Collections.Generic;
using System.Text;
using ThereseCKWebPage.Core.DomainModel;

namespace ThereseCKWebPage.Core.DomainService
{
    public interface IProjectsRepository
    {
        bool Create(Project projs);
        ProjectList ReadAll();
    }
}
