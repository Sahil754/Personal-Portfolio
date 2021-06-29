

/*------------ about section tabs ------------*/

(() =>{
    const aboutSection = document.querySelector(".about-section"),
    tabsContainer = document.querySelector(".about-tabs");

    tabsContainer.addEventListener("click", (event) =>{
        /* If event.target contains 'tab-item' class and does not contain
        'active' class */
        if(event.target.classList.contains("tab-item") &&
        !event.target.classList.contains("active")){
            const target = event.target.getAttribute("data-target");
            // Deactivate existing active 'tab-item'
            tabsContainer.querySelector(".active").classList.remove("outer-shadow", "active");
            // Activate new 'tab-item'
            event.target.classList.add("active", "outer-shadow");
            // Deactivate existing active 'tab-content'
            aboutSection.querySelector(".tab-content.active").classList.remove("active");
            // Activate new 'tab-content'
            aboutSection.querySelector(target).classList.add("active");
        }
    })
})();