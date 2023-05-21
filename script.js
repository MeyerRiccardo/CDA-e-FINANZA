const sezioniNascoste = document.querySelectorAll(".watch")

const observerSez = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        entry.target.classList.toggle("show", entry.isIntersecting);
        //  sezioniNascoste.forEach((el) => observer.observe(el));
    })
    },
    {
        rootMargin: "-20px",
        threshold: 0.60,
    }
);

sezioniNascoste.forEach((sez) => observerSez.observe(sez));




const bottoniNascosti = document.querySelectorAll(".watchBtn")

const observerBtn = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        entry.target.classList.toggle("showBtn", entry.isIntersecting);

    })
    },
    {
        threshold: 0.99,
    }
);

bottoniNascosti.forEach((sez) => observerBtn.observe(sez));







