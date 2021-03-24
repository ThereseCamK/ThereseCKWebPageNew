
function addBlogCommitment() {
    let blogComitments = model.pagesContent.blogPage;
   
    const blogs = blogComitments.map(com => 
        `
        <hr>
        <div onclick="editBlog()">
            Overskrift: ${com.headLine} 
            <br>
            Innhold: ${com.blogContent} <br>
            Picture:${com.picture} 
        </div>
    `).join('');
    const html = `
            <button onclick="adminView()"> tilbake </button><br>
            <input type="text" placeholder="Overskrift" oninput="model.pagesContent.blogInput.headLine = this.value"></input><br>
            <textarea type="text" placeholder="legg inn ett bloggInlegg" oninput="model.pagesContent.blogInput.content = this.value"></textarea><br>
            <input type="media" placeholder="bilde" oninput="model.pagesContent.blogInput.picture = this.value"></input><br>
            <input type="date" placeholder="dato" oninput="model.pagesContent.blogInput.date = this.value"></input><br>
            <button onclick="addNewBlog()">Lagre blogg</button>
            
            ${blogs}

    `;
    document.getElementById('adminContent').innerHTML = html;

}