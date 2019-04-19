const main = () => {
  const disp = window.pageYOffset > 1000 ? 'block' : 'none';
  const upBtn = document.createElement('div');
  upBtn.setAttribute('class', 'up-button');
  upBtn.setAttribute('title', 'UP');
  upBtn.style.display = disp;
  upBtn.innerText = "UP";

  const image = document.createElement('img');
  image.src = chrome.extension.getURL('icons/go_up_arrow.png');

  upBtn.append(image);

  document.getElementsByTagName("body")[0].append(upBtn);
  upBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 400) {
      upBtn.style.display = 'block';
    }
    else {
      upBtn.style.display = 'none';
    }
  });
};

(() => {
  main();
})();
