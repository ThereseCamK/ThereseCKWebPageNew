using System;
using System.Collections.Generic;
using System.Text;

namespace ThereseCKWebPage.Core.DomainModel
{
    public class Project
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public string Link { get; set; }

        public Project(string title, string description, string link)
        {
            Title = title;
            Description = description;
            Link = link;
        }
    }
}
