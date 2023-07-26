export default (element, callback) => {
    let options = {
        threshold: 1,
        rootMargin: "0px"
    }
    let observer = new IntersectionObserver(entries => {
        entries.forEach(v => {
            if (v.isIntersecting) {
                callback(v)
                observer.unobserve(v.target);
            }
        })
    }, options)

    element.forEach(v => {
        observer.observe(v)
    })
}