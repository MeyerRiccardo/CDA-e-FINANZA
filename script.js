const sezioni_da_osservare = document.querySelectorAll(".watch")



const observer = new IntersectionObserver(entries => {
    entries.forEach(entry=>{
        entry.target.classList.toggle("show", entry.isIntersecting)
    })
    console.log(entries)
    },{
    threshold: 0.6,
    }
    )
    sezioni_da_osservare.forEach(elemento =>{
        observer.observe(elemento)
    })



const elementi_da_osservare = document.querySelectorAll(".watch100")

const observer100 = new IntersectionObserver(entries => {
    entries.forEach(entry=>{
        entry.target.classList.toggle("show100", entry.isIntersecting)
    })
    console.log(entries)
    },{
    threshold: 1,
    }
    )
    elementi_da_osservare.forEach(elemento =>{
        observer.observe(elemento)
    })



