// It goes to the top of the screen
const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
}

export default goToTop;