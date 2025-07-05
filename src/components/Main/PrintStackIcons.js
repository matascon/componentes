import './PrintStackIcons.css';

export const PrintStackIcons = (images) => {
  const ul = document.createElement('ul');

  for (const image of images) {
    const li = document.createElement('li');
    const img = document.createElement('img');

    img.src = image.route;
    img.alt = image.name;
    li.appendChild(img);
    ul.appendChild(li);
  }

  return ul;
}; 