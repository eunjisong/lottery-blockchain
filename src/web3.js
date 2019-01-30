import Web3 from 'web3';
const web3 = new Web3(window.web3.currentProvider)
// inject window's provider to my web3 instance to get private keys, account address and public keys from window provider
// window.web3.currentProvider <-- 현재 메타메스크가 제공하고 있는 올드버전 웹3(0.2)에 삽입되어 있는 프로바이더다
// 우리는 이 프로바이더를 우리의 인스턴트에 삽입하여 프라미스를 쓸 수 있게끔 해야한다.

export default web3;

