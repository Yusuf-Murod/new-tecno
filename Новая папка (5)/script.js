const apps = document.querySelectorAll(".app");

apps.forEach(app => {

    app.addEventListener("click", function () {

        if (!this.classList.contains("open")) {
            this.classList.add("open");
        }

    });

    const back = app.querySelector(".back");

    back.addEventListener("click", function (e) {

        e.stopPropagation();

        app.classList.remove("open");

    });

});