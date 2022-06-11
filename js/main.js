const links = [
    {
      label: "Week1 notes",
      url: "week01/index.html"
    },
    {
      label: "Week2 notes",
      url: "week02/index2.html"
    },

    {
      label: "Week3 notes",
      url: "week03/index3.html"
    },
    {
      label: "Week4 notes",
      url: "week04/index4.html"
    },
    {
      label: "Week5 notes",
      url: "week05/index05.html"
    },
    {
      label: "Week6 notes",
      url: "week06/index06.html"
    },
    {
      label: "Week7 notes",
      url: "week07/index07.html"
    },
    {
      label: "Week8 notes",
      url: "week08/index08.html"
    }

  ]

  function loadIndex()
  {
    const ol =  document.querySelector("#linksList");

    links.forEach( link => {
        const li = document.createElement("li");
        const href = document.createElement("a");
        href.setAttribute("href", link.url);
        href.innerText = link.label;

        li.appendChild(href);
        ol.appendChild(li);

    })
  }