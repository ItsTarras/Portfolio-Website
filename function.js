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

<FadeInSection>
    <p> this should fade in </p>
</FadeInSection>