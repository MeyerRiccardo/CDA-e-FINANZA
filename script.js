const sezioniNascoste = document.querySelectorAll(".fade-in")

const observerSez = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        entry.target.classList.toggle("in-page", entry.isIntersecting);
        //  sezioniNascoste.forEach((el) => observer.observe(el));
    })
    },
    {
        rootMargin: "-20px",
        threshold: 0.80,
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
        // rootMargin: "-50px",
        threshold: 1,
    }
);

bottoniNascosti.forEach((Btn) => observerBtn.observe(Btn));




const elementiNascosti = document.querySelectorAll(".watch")

const observerEl = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        entry.target.classList.toggle("showed", entry.isIntersecting);

    })
    },
    {
        // rootMargin: "-25px",
        threshold: 0.60,
    }
);

elementiNascosti.forEach((El) => observerEl.observe(El));







