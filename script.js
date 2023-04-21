function changeToX(event)
{
  const container = event.currentTarget;
  const image = container.querySelector('#grid .checkbox');
  restore();
  image.src = "images/checked.png";
  console.log(image);
  
  
}



const boxes = document.querySelectorAll('#grid div');
for (const box of boxes)
{
  box.addEventListener('click', changeToX);
}


function restore()
{
    const image=document.querySelectorAll('.checkbox');
}
for(const img1 of image)
{
  const  img1= image.querySelector('.checkbox');
  img1.src='images/unchecked.png';
  
}