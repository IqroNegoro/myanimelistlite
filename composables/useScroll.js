export default (ref, cb) => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(v => {
            if (v.isIntersecting) {
                cb(v)
            }
        })
    }, {
        threshold: 1,
        rootMargin: "0px"
    });
    ref.forEach(v => observer.observe(v));
}