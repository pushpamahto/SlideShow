
   const ImgArr = [
    "https://cdn.pixabay.com/photo/2014/08/15/11/29/beach-418742_640.jpg",
    "https://cdn.pixabay.com/photo/2016/04/18/22/05/seashells-1337565_640.jpg",
    "https://cdn.pixabay.com/photo/2017/05/09/03/46/alberta-2297204_640.jpg",
    "https://cdn.pixabay.com/photo/2015/04/23/22/01/mountains-736886_640.jpg",
    "https://cdn.pixabay.com/photo/2018/01/12/14/24/night-3078326_640.jpg",
    "https://cdn.pixabay.com/photo/2015/06/19/20/13/sunset-815270_640.jpg",
    "https://cdn.pixabay.com/photo/2017/10/10/07/48/hills-2836301_640.jpg",
    "https://cdn.pixabay.com/photo/2013/04/03/21/25/flower-100263_640.jpg",
    "https://cdn.pixabay.com/photo/2014/01/22/19/44/flower-field-250016_640.jpg",
    "https://cdn.pixabay.com/photo/2015/07/31/06/50/forest-868715_640.jpg",
    "https://cdn.pixabay.com/photo/2015/04/19/08/33/flower-729512_640.jpg",
    "https://cdn.pixabay.com/photo/2014/12/04/14/46/magnolia-trees-556718_640.jpg",
    "https://cdn.pixabay.com/photo/2016/11/08/04/49/jungle-1807476_640.jpg",
    "https://cdn.pixabay.com/photo/2018/04/06/00/25/trees-3294681_640.jpg",
    "https://cdn.pixabay.com/photo/2014/12/24/05/02/drop-of-water-578897_640.jpg",
    "https://cdn.pixabay.com/photo/2015/01/28/23/34/mountains-615428_640.jpg",
    "https://cdn.pixabay.com/photo/2016/05/02/10/13/ship-1366926_640.jpg",
    "https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989_640.jpg",
    "https://cdn.pixabay.com/photo/2013/08/20/15/47/poppies-174276_640.jpg",
    "https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072_640.jpg"
];

const img = document.querySelector('.img-box img');
let currentImg = 0;
let intervalImg;

const startBtn = document.getElementById('btn-3');
const stopBtn = document.getElementById('btn-4');
const prevBtn = document.getElementById('btn-1');
const nextBtn = document.getElementById('btn-2');

function startSlideShow() {

    intervalImg = setInterval(() => {

        img.setAttribute('src', ImgArr[currentImg]);
        currentImg = (currentImg + 1) % ImgArr.length;
    }, 1000); 
}

function stopSlideShow() {
    clearInterval(intervalImg);
}

function showImage(index) {

    img.setAttribute('src', ImgArr[index]);
    currentImg = index;
}

startBtn.addEventListener('click', startSlideShow);
stopBtn.addEventListener('click', stopSlideShow);

prevBtn.addEventListener('click', () => {

    stopSlideShow();
    currentImg = (currentImg - 1 + ImgArr.length) % ImgArr.length;
    showImage(currentImg);
});

nextBtn.addEventListener('click', () => {

    stopSlideShow();
    currentImg = (currentImg + 1) % ImgArr.length;
    showImage(currentImg);
});
