
function addProjects() {
    let projectComitments = model.pagesContent.projectPage;

    const projs = projectComitments.map(pro =>
        `
        <hr>
            <div>
                Tittel: ${pro.title}<br>
                Beskrivelse: ${pro.description}<br>
                Link: ${pro.link}
        </div>

`).join('');

 const html = `
            <button onclick="adminView()"> tilbake </button>

            <input type="text" placeholder="tittel" oninput="model.pagesContent.projectInput.title = this.value"></input>
            <input type="text" placeholder="beskrivelse" oninput="model.pagesContent.projectInput.description = this.value"></input>
            <input type="text" placeholder="link" oninput="model.pagesContent.projectInput.link = this.value"></input>

            <button onclick="addProjectInput()">Lagre</button>

                ${projs}
            `;
    document.getElementById('adminContent').innerHTML = html;
}