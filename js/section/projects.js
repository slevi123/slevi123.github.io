"use strict";
document.addEventListener("DOMContentLoaded", () => {
    console.log("I started");
    // DOM elements
    let story_line = document.getElementsByTagName("story-line")[0];
    let projects = document.getElementsByClassName("project-card");
    // constants
    const card_gap = parseInt(window.getComputedStyle(projects[0]).marginLeft);
    // variables used
    let offset_before = 0;
    Array.from(projects).forEach((project, i) => {
        let width_half = project.offsetWidth / 2;
        let mark = document.createElement("mark");
        story_line.appendChild(mark);
        const mark_width = parseInt(window.getComputedStyle(mark).getPropertyValue('border-right-width'));
        mark.style.marginLeft = (offset_before + card_gap + width_half - mark_width / 2) + "px";
        offset_before = width_half;
        if (i % 2 == 1) {
            project.classList.add('other-side-card');
            mark.classList.add('other-side-mark');
        }
        else {
            mark.classList.add('main-side-mark');
        }
    });
    console.log("Im done");
});
