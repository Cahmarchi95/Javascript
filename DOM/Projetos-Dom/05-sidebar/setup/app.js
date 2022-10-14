const sidebar = document.querySelector(".sidebar");
const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");

toggleBtn.addEventListener("click", function () {
  //console.log(sidebar.classList);
  //console.log(sidebar.classList.contains(".show-sidebar"));
  //if (sidebar.classList.contains("show-sidebar")) {
  //  sidebar.classList.remove("show-sidebar");
  //} else {
  //  sidebar.classList.add("show-sidebar");
  //}
  //atalho sem precisar do if
  sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
