#cssmenu {
  padding: 0;
  margin: 0;
  border: 0;
}
#cssmenu ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}
#cssmenu ul {
  position: relative;
  z-index: 597;
  float: left;
}
#cssmenu ul li {
  float: left;
  min-height: 1px;
  line-height: 1em;
  vertical-align: middle;
}
#cssmenu ul li.hover,
#cssmenu ul li:hover {
  position: relative;
  z-index: 599;
  cursor: default;
}
#cssmenu ul ul {
  visibility: hidden;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 598;
  width: 100%;
}
#cssmenu ul ul li {
  float: none;
}
#cssmenu ul li:hover > ul {
  visibility: visible;
}
#cssmenu ul ul {
  top: 0;
  left: 100%;
}
#cssmenu ul li {
  float: none;
}
/* Custom Stuff */
#cssmenu span,
#cssmenu a {
  display: inline-block;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  text-decoration: none;
}
#cssmenu {
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-background-clip: padding;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  -moz-box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.15);
  -webkit-box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.15);
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.15);
  font-weight: 600;
  width: 200px;
}
#cssmenu:after,
#cssmenu ul:after {
  content: '';
  display: block;
  clear: both;
}
#cssmenu > ul > li:first-child {
  -moz-border-radius: 5px 5px 0 0;
  -webkit-border-radius: 5px 5px 0 0;
  border-radius: 5px 5px 0 0;
  -moz-background-clip: padding;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
}
#cssmenu > ul > li:last-child {
  -moz-border-radius: 0 0 5px 5px;
  -webkit-border-radius: 0 0 5px 5px;
  border-radius: 0 0 5px 5px;
  -moz-background-clip: padding;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
}
#cssmenu > ul > li ul ul li:first-child {
  -moz-border-radius: 0 5px 0 0;
  -webkit-border-radius: 0 5px 0 0;
  border-radius: 0 5px 0 0;
  -moz-background-clip: padding;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
}
#cssmenu > ul > li ul ul li:last-child {
  -moz-border-radius: 0 0 5px 0;
  -webkit-border-radius: 0 0 5px 0;
  border-radius: 0 0 5px 0;
  -moz-background-clip: padding;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
}
#cssmenu ul,
#cssmenu li {
  width: 100%;
}
#cssmenu li {
  background: #c0bebf url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA0CAMAAAB8fKKlAAAAmVBMVEXy7ery7ery7ery7ery7ery7ery7ery7ery7ery7ery7erx7ery7ery7ery7ery7ery7ery7ery7ery7ery7ery7ery7ery7ery7ery7ery7ery7ery7ery7ery7ery7ery7ery7ery7ery7ery7ery7ery7ery7ery7ery7ery7ery7ery7ery7ery7ery7ery7ery7ery7eoO3g4TAAAAMnRSTlP8+fbz7+vn497Z1M/KxL+5s66oopuVj4mDfHZwamRdV1FMRkA7NTArJiEcGBQQDAkGA02z+X0AAABLSURBVHheDcGDEQMBAACwvFnbtrv/cO3F949AKBJLpDK5QqlSa2hqaevo6ukbGBoZm5iamVtYWlnb2NrZOzg6Obu4url7eHp5+/wAxikFLnlTZcYAAAAASUVORK5CYII=) repeat-x;
  background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #f2edea), color-stop(1, #c0bebf));
  background-image: -webkit-linear-gradient(top, #f2edea, #c0bebf);
  background-image: -moz-linear-gradient(top, #f2edea, #c0bebf);
  background-image: -ms-linear-gradient(top, #f2edea, #c0bebf);
  background-image: -o-linear-gradient(top, #f2edea, #c0bebf);
  background-image: linear-gradient(#f2edea, #c0bebf);
}
#cssmenu li:hover,
#cssmenu li.active {
  background: #606a76 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA0CAMAAAB8fKKlAAAAmVBMVEVKVmJKVmJKVmJKVmJKVmJKVmJKVmJKVmJKVmJKVmJKVmJKVmJKVmJKVmJKVmJKVmJKVmJKVmJKVmJKVmJKVmJKVmJKVmJKVmJKVmJKVmJKVmJKVmJKVmJKVmJKVmJKVmJKVmJKVmJKVmJKVmJKVmJKVmJKVmJKVmJKVmJKVmJKVmJKVmJKVmJKVmJKVmJKVmJKVmL///9KVmL3Z0MtAAAAMnRSTlP8+fby7+vm4t3Y087Iw723sauln5mTjIaAeXNsZmBaVE5IQjw3MSwnIh0ZFBANCQYDAAm6nKYAAABLSURBVHheDcGDEQMBAACwvFnbtrv/cO3F949AKBJLpDK5QqlSa2hqaevo6ukbGBoZm5iamVtYWlnb2NrZOzg6Obu4url7eHp5+/wAxikFLnlTZcYAAAAASUVORK5CYII=) repeat-x;
  -moz-box-shadow: inset 0 -2px 3px rgba(0, 0, 0, 0.15);
  -webkit-box-shadow: inset 0 -2px 3px rgba(0, 0, 0, 0.15);
  box-shadow: inset 0 -2px 3px rgba(0, 0, 0, 0.15);
  background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #4a5662), color-stop(1, #606a76));
  background-image: -webkit-linear-gradient(top, #4a5662, #606a76);
  background-image: -moz-linear-gradient(top, #4a5662, #606a76);
  background-image: -ms-linear-gradient(top, #4a5662, #606a76);
  background-image: -o-linear-gradient(top, #4a5662, #606a76);
  background-image: linear-gradient(#4a5662, #606a76);
}
#cssmenu li:hover > a,
#cssmenu li.active > a {
  color: #FFF;
}
#cssmenu a {
  color: #666666;
  line-height: 160%;
  padding: 16px 8px 16px 28px;
  width: 164px;
}
#cssmenu ul ul {
  -moz-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  width: 200px;
}
#cssmenu ul ul li {
  background: #606a76;
  border-bottom: 1px solid #59636F;
  -moz-box-shadow: inset 0 1px 0 #66707c;
  -webkit-box-shadow: inset 0 1px 0 #66707c;
  box-shadow: inset 0 1px 0 #66707c;
}
#cssmenu ul ul li:hover {
  background: #4a5662;
}
#cssmenu ul ul li a {
  color: #FFF;
}
#cssmenu ul ul a,
#cssmenu ul ul a span {
  font-size: 12px;
}


/* ======= ABOUT US =======*/

.p-t-30{
	padding-top: 60px;
	padding-bottom: 60px;
}

.services{
	background: #111;
	position: relative;
	width: 100%;
	text-align: center;
	z-index: 99;
}

.services h1{
	display: inline-block;
	color: #fff;   
	font-weight: 600;
	font-size: 2.2rem;
	padding-bottom: 10px;
}

.services span{
	color: var(--blurple);
	font-weight: 700;
}


.service{
	display: inline-block;
	margin: 0 -2px;
	padding: 20px;
	box-sizing: border-box;
	width: calc(100% / 3);
	transition: 0.4s;
}


.service i{
	font-size: 34px;
	color: var(--blurple);
	margin-bottom: 20px;
	transition: 0.5s;
}

.service i:hover{
	color: var(--purple);
	transform: scale(1.072);
}

.service h2{
	/*font-size: 18px;*/
	color: #fff;
	text-transform: uppercase;
	font-weight: 700;
	margin: 0;
	padding-bottom: 8px;
}

.service p{
	color: #fff;
	opacity: .7;
	font-weight: 300;
}
