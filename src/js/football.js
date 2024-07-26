const field = document.querySelector(".football__field")
const ball = document.querySelector(".football__img")

field.addEventListener('click', (event) => {
  ball.style.left = `${event.clientX - Math.round(field.getBoundingClientRect().left)}px`;
  ball.style.top = `${event.clientY - Math.round(field.getBoundingClientRect().top)}px`;
})