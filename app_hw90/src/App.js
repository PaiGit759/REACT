import './App.css';

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it

window.onclick = function (event) {

  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
        
    var i = 0;
     
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


function App() {

  return (

    <div>
      <button onClick={myFunction} className="dropbtn">Dropdown</button>
      <div id="myDropdown" className="dropdown-content">
        <a href="https://www.w3schools.com/html/html_links.asp" target='_blank'>Link 1</a>
        <a href="https://www.w3schools.com/howto/howto_js_dropdown.asp" target='_blank'>Link 2</a>
        <a href="https://www.w3schools.com/tags/ref_html_browsersupport.asp" target='_blank'>Link 3</a>
      </div>
    </div>
  );
}

export default App;

