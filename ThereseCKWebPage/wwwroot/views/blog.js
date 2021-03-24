function blogPage() {

    let blogComitments = model.pagesContent.blogPage;

    const blogs = blogComitments.map(com => `
            <div><hr>    ${com.headLine} <br>
                  Innhold: ${com.blogContent} <br>
                Bilde: ${com.picture}<br> 
                Dato: ${com.publishedDate} 
        </div>`).join('');
    let html = ` <h1>Blog Innlegg</h1>
            
    ${blogs}
    `;
    console.log(blogComitments, 'viser denne noe?');


    document.getElementById('mainContent').innerHTML = html;


}