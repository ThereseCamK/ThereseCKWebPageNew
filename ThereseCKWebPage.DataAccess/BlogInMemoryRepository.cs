using System;
using System.Collections.Generic;
using System.Text;
using ThereseCKWebPage.Core.DomainModel;
using ThereseCKWebPage.Core.DomainService;

namespace ThereseCKWebPage.DataAccess
{
    public class BlogInMemoryRepository : IBlogRepository
    {

        private List<Blog> _blog;

        public BlogInMemoryRepository()
        {
            _blog = new List<Blog>();
        }

        public bool Create(Blog blog)
        {
            _blog.Add(blog);
            return true;
        }

        public BlogList ReadAll()
        {

            return new BlogList(_blog);
        }
    }
}
