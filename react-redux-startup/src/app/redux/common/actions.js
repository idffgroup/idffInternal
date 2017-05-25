import request from 'superagent';
import Storage from '../../shared/utils/Storage';

export const types = {
  SHOW_TOAST: 'SHOW_TOAST',
  SHOW_LOADER : 'SHOW_LOADER',
  REDIRECT_URL: 'REDIRECT_URL',
};

export function redirectEvent(redirectUrl){
    return {
      type: types.REDIRECT_URL,
      redirectUrl
    };
}

export function loaderEvent(showLoader) {
  return {
    type: types.SHOW_LOADER,
    showLoader
  };
}

export function toastEvent (message, showToast) {
  return {
    type: types.SHOW_TOAST,
    message,
    showToast
  };
}
export function restlogin(route, reqData) {
  return new Promise((reslove, reject) => {
    request
      .post(route)
      .set('Content-Type', 'application/json')
      .send(reqData)
      .end((err, res) => {
        if (err) {
          reject(err);
        } else {
          const respData = JSON.parse(res.text);
          if (respData.status == 1) {
            Storage.setJWT(respData.jwt);
            Storage.setMenu(respData.data.menuList);
            delete respData.data.menuList;
            Storage.setUser(JSON.stringify(respData.data));
            reslove(respData.data);
          } else {
            reject(respData.error);
          }
        }
      })
  });
}

export function rest(route, reqData, isSecure) {
  return new Promise((reslove, reject) => {
    request
      .post(route)
      .set('Content-Type', 'application/json')
      .send(reqData)
      .end((err, res) => {
        if (err) {
          reject(err);
        } else {
          const respData = JSON.parse(res.text);
          if (respData.status == 1) {
            reslove(respData.data);
          } else {
            reject(respData.error);
          }
        }
      })
  });
}