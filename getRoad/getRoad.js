function getRoad(){$.getJSON("highRoadLayer.json",null,function(e){$("body").append(e);for(var o=e["kml:kml"]["kml:Document"]["kml:Placemark"],t=[],n=0;n<o.length;n++){var a={},l=o[n]["kml:MultiGeometry"]["kml:LineString"]["kml:coordinates"],r=l.split(" ");a.lonlats=r,a.name=getRoadName(r),t.push(a)}console.log(t)})}function getRoadName(e){if(!e||e.length<1)return null;for(var o=0;o<e.length;o++){var t=e[o].split(",")[0],n=e[o].split(",")[1];$.ajax({url:"http://api.tianditu.gov.cn/geocoder?postStr={'lon':"+t+",'lat':"+n+",'ver':1}&type=geocode&tk=2ce94f67e58faa24beb7cb8a09780552",type:"GET",async:!1,data:{},dataType:"json",success:function(e){e&&e.result&&e.result.addressComponent&&e.result.addressComponent.road&&(-1!=e.result.addressComponent.road.indexOf("高速")?tempRoadName=e.result.addressComponent.road:console.log("不含有高速:"+e.result.addressComponent.road))},error:function(){console.log("失败")}})}}var tempRoadName=null;!function(){getRoad()}();