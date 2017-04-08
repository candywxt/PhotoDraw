require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

let imageDatas = [
  {
    "fileName": "1.jpg",
    "title": "Heaven of time",
    "desc": "Here he comes Here comes Speed Racer."
  },
  {
    "fileName": "2.jpg",
    "title": "Heaven of time",
    "desc": "Here he comes Here comes Speed Racer."
  },
  {
    "fileName": "3.jpg",
    "title": "Heaven of time",
    "desc": "Here he comes Here comes Speed Racer."
  },
  {
    "fileName": "4.jpg",
    "title": "Heaven of time",
    "desc": "Here he comes Here comes Speed Racer. "
  },
  {
    "fileName": "5.jpg",
    "title": "Heaven of time",
    "desc": "Here he comes Here comes Speed Racer. "
  },
  {
    "fileName": "6.jpg",
    "title": "Heaven of time",
    "desc": "Here he comes Here comes Speed Racer. "
  },
  {
    "fileName": "7.jpg",
    "title": "Heaven of time",
    "desc": "Here he comes Here comes Speed Racer. "
  },
  {
    "fileName": "8.jpg",
    "title": "Heaven of time",
    "desc": "Here he comes Here comes Speed Racer. "
  },
  {
    "fileName": "9.jpg",
    "title": "Heaven of time",
    "desc": "Here he comes Here comes Speed Racer. "
  },
  {
    "fileName": "10.jpg",
    "title": "Heaven of time",
    "desc": "Here he comes Here comes Speed Racer. "
  },
  {
    "fileName": "11.jpg",
    "title": "Heaven of time",
    "desc": "Here he comes Here comes Speed Racer. "
  },
  {
    "fileName": "12.jpg",
    "title": "Heaven of time",
    "desc": "Here he comes Here comes Speed Racer.  "
  },
  {
    "fileName": "13.jpg",
    "title": "Heaven of time",
    "desc": "Here he comes Here comes Speed Racer.  "
  },
  {
    "fileName": "14.jpg",
    "title": "Heaven of time",
    "desc": "Here he comes Here comes Speed Racer.  "
  },
  {
    "fileName": "15.jpg",
    "title": "Heaven of time",
    "desc": "Here he comes Here comes Speed Racer.  "
  },
  {
    "fileName": "16.jpg",
    "title": "Heaven of time",
    "desc": "Here he comes Here comes Speed Racer.  "
  }
];


// 获取图片数据，自执行函数将图片信息转化成图片完成的fileURl地址
imageDatas = (function getImageUrl(imageDataArr) {
  for (var singeImageData of imageDataArr) {
    singeImageData.imageURL = '../images/'+singeImageData.fileName;
  }
  return imageDataArr;
})(imageDatas)

class ImgFigure extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <figure>
        <img src={this.props.data.imageURL}
          alt={this.props.data.title}
        />
        <figcaption>
          <h2>{this.props.data.title}</h2>
        </figcaption>
      </figure>
    );
  }
}

class AppComponent extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    var controllerUnits = [];
    var imgFigures = [];

    for (var value of imageDatas) {
      imgFigures.push(<ImgFigure data={value} />);
    };
    console.log(imgFigures.length);
    return (
      <section className="stage">
        <section className="img-sec">
          {imgFigures}
        </section>
        <nav className="controller-nav">
        </nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
