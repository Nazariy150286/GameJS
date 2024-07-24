const convertMinutes = () => {
  const secondsInput = document.querySelector('.time__input').value;
  let totalMinutes = +secondsInput;

  if (totalMinutes < 0) {
    document.querySelector('.time__result').textContent =
      'Веведіть валідну кілікість секунд';
    return;
  }


    const days = Math.floor(totalMinutes / 1440);
    totalMinutes %= 1440;
    const hours = Math.floor(totalMinutes/ 60);
    totalMinutes %= 60;
    const minutes = totalMinutes % 60;
    const timeResult= document.querySelector('.time__result')
    timeResult.textContent = `${days} днів, ${hours}год:${minutes}хв`;

