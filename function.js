function FadeInSection(props){
    const [isVisible, setVisible] = React.useState(true);
    const domRef = React.useRef();
    React.useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });

        observer.observer(domRef.current);
        return () => observer.unobserve(domRef.current);
    }, []);

    return (
        <div className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
        ref={domRef}
        >
            {props.children}
        </div>
    );
}

/*variables for the carousel*/
const images = document.querySelectorAll(".carousel img");
const leftArrow = document.querySelector(".arrow.left");
const rightArrow = document.querySelector(".arrow.right");
const current_project_text = document.querySelectorAll(".project-desc");
let current = 0;

function showImage(index) {
    images.forEach((img, i) => {
    img.classList.remove("active");
    if (i === index) img.classList.add("active");
    });
}

function showProjectDescription(index) {
    current_project_text.forEach((div, i) => {
        div.classList.remove("active");
        if (i === index) div.classList.add("active");
    });
}

leftArrow.addEventListener("click", () => {
    current = (current - 1 + images.length) % images.length;
    showImage(current);
    showProjectDescription(current);
});

rightArrow.addEventListener("click", () => {
    current = (current + 1) % images.length;
    showImage(current);
    showProjectDescription(current);
});


/*Fade section to apply*/