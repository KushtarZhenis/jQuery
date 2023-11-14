$(document).ready(() => {
  const intervalFunc = (funcIndex) => {
    const $images = $(".carousel > img");
    $images.hide();
    $images.each((i, el) => {
      if (i == funcIndex) {
        el.show();
      } else {
        el.hide();
      }
    });
  };

  let index = 0;
  setInterval(() => {
    intervalFunc(index++);
  }, 1500);
});
