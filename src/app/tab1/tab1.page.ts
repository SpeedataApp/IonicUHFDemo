import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() { }

  winInit = function (result) {
    alert(result)
  };

  failInit = function (error) {
    alert("failed: " + error)
  };

  openDev() {
    try {
      (<any>window).uhf.openDev(this.winInit, this.failInit);
    } catch (error) {
      alert("Error: " + error)
    }
  }

  closeDev() {
    try {
      (<any>window).uhf.closeDev(this.winInit, this.failInit);
    } catch (error) {
      alert("Error: " + error)
    }
  }

  readArea() {
    try {
      //掩码
      var jsonmask = [true, "BBBBFFFFEEEEFFFF99997777"];
      (<any>window).uhf.selectCard(null, null, jsonmask);
      //设置读卡区域，地址，块数，密码
      var jsonstr = [1, 2, 2, "00000000"];
      (<any>window).uhf.readArea(null, this.failInit, jsonstr);
      (<any>window).uhf.getReadAreaResult(this.readResult, this.readFail);
    } catch (err) {
      alert("Error: " + err)
    }
  }

  readResult = function (result) {
    document.getElementById("content").innerHTML = result;
  };

  readFail = function (error) {
    document.getElementById("content").innerHTML = error;
  };

  writeArea() {
    try {
      //设置写卡区域，地址，密码，内容
      var jsonstr = [3, 2, "00000000", "11111111"];
      (<any>window).uhf.writeArea(null, this.failInit, jsonstr);
      (<any>window).uhf.getWriteAreaResult(this.writeResult, this.writeFail);
    } catch (err) {
      alert("Error: " + err)
    }
  }

  writeResult = function (result) {
    document.getElementById("content").innerHTML = result;
  };

  writeFail = function (error) {
    document.getElementById("content").innerHTML = error;
  };


  setAntennaPower() {
    try {
      //设置天线功率（3992模块传参0代表false 1代表true）,（旗联-FLX模块取值为19-30）其他0-30
      var jsonstr = [29];
      (<any>window).uhf.setAntennaPower(this.winInit, this.failInit, jsonstr);

    } catch (err) {
      alert("Error: " + err)
    }
  }
  getAntennaPower() {
    try {
      //读取当前天线功率值
      (<any>window).uhf.getAntennaPower(this.winInit, this.failInit);

    } catch (err) {
      alert("Error: " + err)
    }
  }
  setFreqRegion() {
    try {
      //设置频率区域
      var jsonstr = [2];
      (<any>window).uhf.setFreqRegion(this.winInit, this.failInit, jsonstr);

    } catch (err) {
      alert("Error: " + err)
    }
  }
  getFreqRegion() {
    try {
      //获取当前频率区域
      (<any>window).uhf.getFreqRegion(this.winInit, this.failInit);

    } catch (err) {
      alert("Error: " + err)
    }
  }

  inventoryStart() {
    try {
      //取消掩码
      (<any>window).uhf.selectCard(false, "");
      //开始盘点
      (<any>window).uhf.inventoryStart(null, this.failInit);
      (<any>window).uhf.getInventoryResult(this.writeResult, this.writeFail);
    } catch (err) {
      alert("Error: " + err)
    }
  }
  inventoryStop() {
    try {
      //停止盘点
      (<any>window).uhf.inventoryStop(this.winInit, this.failInit);

    } catch (err) {
      alert("Error: " + err)
    }
  }

  setQueryTagGroup() {
    try {
      //设置session值
      var jsonstr = [0, 0, 0];
      (<any>window).uhf.setQueryTagGroup(this.winInit, this.failInit, jsonstr);
    } catch (err) {
      alert("Error: " + err)
    }
  }
  getQueryTagGroup() {
    try {
      //获取session值
      (<any>window).uhf.getQueryTagGroup(this.winInit, this.failInit);
    } catch (err) {
      alert("Error: " + err)
    }
  }


  clean() {
    document.getElementById("content").innerHTML = "显示内容区域";
  }


}
