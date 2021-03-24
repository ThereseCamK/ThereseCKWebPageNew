function aboutView() {
    var aboutPageView = model.pagesContent.aboutPage;
    var headerInAbout = aboutPageView.header;

    html = `
    <div class="centerAbout" >

     <div class="headerInAbout"> ${headerInAbout}</div>
        <p> Jeg er ei jente som er i Praksis på GET Academy som lærer i programmering <br>
        Jeg har litt erfaring innenfor Javascript, HTML/CSS, C# og litt i SQL. Trives veldig godt med å utvikle forskjellige type ting. <br>
        Det som jeg har nå erfart er at man lærer veldig mye av å gjøre, og målet mitt er å gjøre enda mer og bli enda bedre! <br> 
        Nå er jeg ute etter enda mer erfaring og har lyst til å hjelpe deg, med å lage en hjemmeside / app eller lignende ved siden av lærerjobben. <br>
        Ikke vær redd for å ta kontakt hvis dette kan være interessant eller om du er nyskjerrig. </p>
            
    </div>
     `;
    document.getElementById("mainContent").innerHTML = html;
}