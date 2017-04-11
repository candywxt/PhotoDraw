require('normalize.css/normalize.css');
require('styles/App.scss');
import React from 'react';
import ReactDOM from 'react-dom'

let imageDatas = [
  {
    'fileName': '1.jpg',
    'title': 'Hi 王欣彤',
    'desc': 'Here he comes Here comes Speed Racer.'
  },
  {
    'fileName': '2.jpg',
    'title': 'Hi 王欣彤',
    'desc': 'Here he comes Here comes Speed Racer.'
  },
  {
    'fileName': '3.jpg',
    'title': 'Hi 王欣彤',
    'desc': 'Here he comes Here comes Speed Racer.'
  },
  {
    'fileName': '4.jpg',
    'title': 'Hi 王欣彤',
    'desc': 'Here he comes Here comes Speed Racer. '
  },
  {
    'fileName': '5.jpg',
    'title': 'Hi 王欣彤',
    'desc': 'Here he comes Here comes Speed Racer. '
  },
  {
    'fileName': '6.jpg',
    'title': 'Heaven of time',
    'desc': 'Here he comes Here comes Speed Racer. '
  },
  {
    'fileName': '7.jpg',
    'title': 'Heaven of time',
    'desc': 'Here he comes Here comes Speed Racer. '
  },
  {
    'fileName': '8.jpg',
    'title': 'Heaven of time',
    'desc': 'Here he comes Here comes Speed Racer. '
  },
  {
    'fileName': '9.jpg',
    'title': 'Heaven of time',
    'desc': 'Here he comes Here comes Speed Racer. '
  },
  {
    'fileName': '10.jpg',
    'title': 'Heaven of time',
    'desc': 'Here he comes Here comes Speed Racer. '
  },
  {
    'fileName': '11.jpg',
    'title': 'Heaven of time',
    'desc': 'Here he comes Here comes Speed Racer. '
  },
  {
    'fileName': '12.jpg',
    'title': 'Heaven of time',
    'desc': 'Here he comes Here comes Speed Racer.  '
  },
  {
    'fileName': '13.jpg',
    'title': 'Heaven of time',
    'desc': 'Here he comes Here comes Speed Racer.  '
  },
  {
    'fileName': '14.jpg',
    'title': 'Hi 王欣彤',
    'desc': 'Here he comes Here comes Speed Racer.  '
  },
  {
    'fileName': '15.jpg',
    'title': 'Hi 王欣彤',
    'desc': 'Here he comes Here comes Speed Racer.  '
  },
  {
    'fileName': '16.jpg',
    'title': 'Heaven of time',
    'desc': 'Here he comes Here comes Speed Racer.  '
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
  componentDidMount() {
  }
  render() {
    var styleObj = {};
    if (this.props.arrange.pos) {
      styleObj = this.props.arrange.pos;
    }
    return (
      <figure className="img-figure" style={styleObj} ref="figure">
        <img src={this.props.data.imageURL}
          alt={this.props.data.title}
        />
        <figcaption>
          <h2 className="img-title">{this.props.data.title}</h2>
        </figcaption>
      </figure>
    );
  }
}

var Constant = {
  centerPos: {
    left: 0,
    right: 0
  },
  hPosRange: {   // 水平方向的取值范围
    leftSecX: [0, 0],
    rightSecX: [0, 0],
    y: [0, 0]
  },
  vPosRange: {    // 垂直方向的取值范围
    x: [0, 0],
    topY: [0, 0]
  }
}

class AppComponent extends React.Component {
  constructor(props) {
    super(props)
    this.rangeRandom = this.rangeRandom.bind(this);
    this.state = {
        imgsArrangeArr: [
          {
            pos: {
              left: 0,
              top: 0
            }
          }
        ]
    }
  }
  componentDidMount() {
    var stageDOM = this.sectionBox,
        stageW = stageDOM.scrollWidth,
        stageH = stageDOM.scrollHeight,
        halfStageW = Math.ceil(stageW / 2),
        halfStageH = Math.ceil(stageH / 2);

    var imgFigureDom = this.refs.imgFigure0.refs.figure,
        imgW = imgFigureDom.scrollWidth,
        imgH = imgFigureDom.scrollHeight,
        halfImgW = Math.ceil(imgW / 2),
        halfImgH = Math.ceil(imgW / 2);
        console.log(this.refs.imgFigure0.refs.figure);

    Constant.centerPods = {
        left: halfStageW - halfImgW,
        top: halfStageH - halfImgH
    };

    Constant.hPosRange.leftSecX[0] = -halfImgW;
    Constant.hPosRange.leftSecX[1] = halfStageW - halfImgW * 3;
    Constant.hPosRange.rightSecX[0] = halfStageW - halfImgW;
    Constant.hPosRange.rightSecX[1] = stageW - halfImgW;
    Constant.hPosRange.y[0] = -halfImgH;
    Constant.hPosRange.y[1] = stageH - halfImgH;

    Constant.vPosRange.topY[0] = -halfImgH;
    Constant.vPosRange.topY[1] = halfStageH - halfImgH * 3;
    Constant.vPosRange.x[0] = halfImgW - imgW;
    Constant.vPosRange.x[1] = halfImgW;

    this.rearrange(0);
  }

  rearrange(centerIndex) {
    var imgsArrangeArr = this.state.imgsArrangeArr;
    var centerPos = Constant.centerPos;
    var hPosRange = Constant.hPosRange;
    var vPosRange = Constant.vPosRange;
    var hPosRangeLeftSecX = hPosRange.leftSecX;
    var hPosRangeRightSecX = hPosRange.rightSecX;
    var hPosRangeY = hPosRange.y;
    var vPosRangeTopY = vPosRange.topY;
    var vPosRageX = vPosRange.x;

    var imgsArrangeTopArr = [];
    var topImgNum = Math.ceil(Math.random() * 2);
    var topImgSpliceIndex = 0;
    var imgsArrangeCenterArr = imgsArrangeArr.splice(centerIndex, 1);

    imgsArrangeCenterArr[0].pos = centerPos;
    topImgSpliceIndex =  Math.ceil(Math.random() * (imgsArrangeArr.length - topImgNum));
    imgsArrangeTopArr = imgsArrangeArr.splice(topImgSpliceIndex, topImgNum);

    // 布局上部图片
    imgsArrangeTopArr.forEach(function(value, index) {
      imgsArrangeTopArr[index].pos = {
        top: this.rangeRandom(vPosRangeTopY[0], vPosRangeTopY[1]),
        left: this.rangeRandom(vPosRageX[0], vPosRageX[1])
      }
    }.bind(this));

    for(var i = 0, j = imgsArrangeArr.length, k = j / 2; i < j; i++) {
      var hPosRangeLORX = null;
      if (i<k) {
          hPosRangeLORX = hPosRangeLeftSecX;
      } else {
          hPosRangeLORX = hPosRangeRightSecX;
      }
      imgsArrangeArr[i].pos = {
        top: this.rangeRandom(hPosRangeY[0], hPosRangeY[1]),
        left: this.rangeRandom(hPosRangeLORX[0], hPosRangeLORX[1])
      }
    }

    if (imgsArrangeTopArr && imgsArrangeTopArr[0]) {
      imgsArrangeArr.splice(topImgSpliceIndex, 0, imgsArrangeTopArr[0]);
    }
    imgsArrangeArr.splice(centerIndex, 0, imgsArrangeCenterArr[0]);
    this.setState ({
      imgsArrangeArr: imgsArrangeArr
    });
    console.log(imgsArrangeArr);
  }

  rangeRandom (low, high) {
    return Math.ceil(Math.random() * (high - low) + low);
  }

  render() {
    var controllerUnits = [];
    var imgFigures = [];

    imageDatas.forEach(function (value, index) {
      if (!this.state.imgsArrangeArr[index]) {
        this.state.imgsArrangeArr[index] = {
          pos: {
            left: 0,
            top: 0
          }
        }
      }

      imgFigures.push(<ImgFigure key={index} data={value} ref={"imgFigure"+index} arrange={this.state.imgsArrangeArr[index]} />);


    }.bind(this))

    return (
      <section className="stage" ref={(ref) => this.sectionBox = ref}>
        <section className="img-sec">
          {imgFigures}
        </section>
        <nav className="controller-nav">
          {controllerUnits}
        </nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
