using System;
using System.Collections.Generic;
using System.Text;
using ThereseCKWebPage.Core.DomainModel;
using ThereseCKWebPage.Core.DomainService;

namespace ThereseCKWebPage.Core.ApplicationService
{
    public class BlogService
    {
        private readonly IBlogRepository _blogs;

        public BlogService(IBlogRepository blogs)
        {
            _blogs = blogs;
        }

        public bool AddNewBlog(Blog addNew)
        {
            return _blogs.Create(addNew);
        }

        public BlogList GetBlogs()
        {
            var allBlogs = _blogs.ReadAll();
            return allBlogs;
        }
    }
}
