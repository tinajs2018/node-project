function sidebarToggle(){
    if (document.getElementById("sidebarHidden") != null){
      console.log("deberia de monstrarse");
      document.getElementById("sidebarHidden").id = "sidebarShown";
      document.getElementById('toggle').innerHTML = "Hide";
    }else if(document.getElementById("sidebarShown") != null){
      console.log("deberia de esconderse");
      document.getElementById("sidebarShown").id = "sidebarHidden";
      document.getElementById('toggle').innerHTML = "Show";
    }
  }