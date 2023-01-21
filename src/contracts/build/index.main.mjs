// Automatically generated with Reach 0.1.13 (f79282c4)
/* eslint-disable */
export const _version = '0.1.13';
export const _versionHash = '0.1.13 (f79282c4)';
export const _backendVersion = 27;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Contract;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '80'));
  const ctc5 = stdlib.T_Token;
  return {
    create: [ctc0, ctc1, ctc0, ctc2, ctc3, ctc4, ctc0, ctc5],
    end: [ctc0, ctc0, ctc0],
    updateHighestBidder: [ctc0, ctc2]
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0],
      4: [ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Admin(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Admin expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Admin expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Contract;
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '80'));
  const ctc6 = stdlib.T_Token;
  const ctc7 = stdlib.T_Struct([['id', ctc1], ['contractInfo', ctc2], ['blockCreated', ctc1], ['owner', ctc3], ['title', ctc4], ['description', ctc5], ['price', ctc1], ['tokenId', ctc6]]);
  const ctc8 = stdlib.T_Tuple([ctc7]);
  const ctc9 = stdlib.T_Struct([['id', ctc1], ['blockEnded', ctc1], ['lastBid', ctc1]]);
  const ctc10 = stdlib.T_Tuple([ctc9]);
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Tuple([ctc1, ctc3]);
  const ctc13 = stdlib.T_Data({
    Auctions_created0_43: ctc8,
    Auctions_ended0_43: ctc10,
    Auctions_getID0_43: ctc11,
    Auctions_updateHighestBidder0_43: ctc12
    });
  
  
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./src/contracts/index.rsh:44:15:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./src/contracts/index.rsh:44:15:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v297, time: v296, didSend: v22, from: v295 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v297, time: v296, didSend: v22, from: v295 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v295],
    evt_cnt: 0,
    funcNum: 1,
    lct: v296,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./src/contracts/index.rsh:46:15:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v300, time: v299, didSend: v27, from: v298 } = txn2;
      
      ;
      const v302 = await ctc.getContractInfo();
      
      const v304 = stdlib.checkedBigNumberify('./src/contracts/index.rsh:48:42:decimal', stdlib.UInt_max, '0');
      const v305 = v299;
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v300, time: v299, didSend: v27, from: v298 } = txn2;
  ;
  const v301 = stdlib.addressEq(v295, v298);
  stdlib.assert(v301, {
    at: './src/contracts/index.rsh:46:15:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Admin'
    });
  const v302 = await ctc.getContractInfo();
  stdlib.protect(ctc0, await interact.deployed(v302), {
    at: './src/contracts/index.rsh:47:32:application',
    fs: ['at ./src/contracts/index.rsh:47:32:application call to [unknown function] (defined at: ./src/contracts/index.rsh:47:32:function exp)', 'at ./src/contracts/index.rsh:47:32:application call to "liftedInteract" (defined at: ./src/contracts/index.rsh:47:32:application)'],
    msg: 'deployed',
    who: 'Admin'
    });
  
  let v304 = stdlib.checkedBigNumberify('./src/contracts/index.rsh:48:42:decimal', stdlib.UInt_max, '0');
  let v305 = v299;
  
  let txn3 = txn2;
  while (await (async () => {
    
    return true;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc13],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v386], secs: v388, time: v387, didSend: v209, from: v385 } = txn4;
    switch (v386[0]) {
      case 'Auctions_created0_43': {
        const v389 = v386[1];
        undefined /* setApiDetails */;
        ;
        const v398 = v389[stdlib.checkedBigNumberify('./src/contracts/index.rsh:55:21:spread', stdlib.UInt_max, '0')];
        const v399 = null;
        await txn4.getOutput('Auctions_created', 'v399', ctc0, v399);
        const v414 = v398.id;
        const v415 = v398.contractInfo;
        const v416 = v398.blockCreated;
        const v417 = v398.owner;
        const v418 = v398.title;
        const v419 = v398.description;
        const v420 = v398.price;
        const v421 = v398.tokenId;
        null;
        const cv304 = v304;
        const cv305 = v387;
        
        v304 = cv304;
        v305 = cv305;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'Auctions_ended0_43': {
        const v455 = v386[1];
        undefined /* setApiDetails */;
        ;
        const v489 = v455[stdlib.checkedBigNumberify('./src/contracts/index.rsh:71:21:spread', stdlib.UInt_max, '0')];
        const v490 = v489.id;
        const v491 = v489.blockEnded;
        const v492 = v489.lastBid;
        null;
        const v493 = null;
        await txn4.getOutput('Auctions_ended', 'v493', ctc0, v493);
        const cv304 = v304;
        const cv305 = v387;
        
        v304 = cv304;
        v305 = cv305;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'Auctions_getID0_43': {
        const v521 = v386[1];
        undefined /* setApiDetails */;
        ;
        await txn4.getOutput('Auctions_getID', 'v304', ctc1, v304);
        const v575 = stdlib.safeAdd(v304, stdlib.checkedBigNumberify('./src/contracts/index.rsh:53:44:decimal', stdlib.UInt_max, '1'));
        const cv304 = v575;
        const cv305 = v387;
        
        v304 = cv304;
        v305 = cv305;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'Auctions_updateHighestBidder0_43': {
        const v587 = v386[1];
        undefined /* setApiDetails */;
        ;
        const v643 = v587[stdlib.checkedBigNumberify('./src/contracts/index.rsh:82:21:spread', stdlib.UInt_max, '0')];
        const v644 = v587[stdlib.checkedBigNumberify('./src/contracts/index.rsh:82:21:spread', stdlib.UInt_max, '1')];
        null;
        const v645 = null;
        await txn4.getOutput('Auctions_updateHighestBidder', 'v645', ctc0, v645);
        const cv304 = v304;
        const cv305 = v387;
        
        v304 = cv304;
        v305 = cv305;
        
        txn3 = txn4;
        continue;
        break;
        }
      }
    
    }
  return;
  
  
  
  
  };
export async function _Auctions_created4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Auctions_created4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Auctions_created4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Contract;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '80'));
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Struct([['id', ctc0], ['contractInfo', ctc1], ['blockCreated', ctc0], ['owner', ctc2], ['title', ctc3], ['description', ctc4], ['price', ctc0], ['tokenId', ctc5]]);
  const ctc7 = stdlib.T_Tuple([ctc6]);
  const ctc8 = stdlib.T_Struct([['id', ctc0], ['blockEnded', ctc0], ['lastBid', ctc0]]);
  const ctc9 = stdlib.T_Tuple([ctc8]);
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Tuple([ctc0, ctc2]);
  const ctc12 = stdlib.T_Data({
    Auctions_created0_43: ctc7,
    Auctions_ended0_43: ctc9,
    Auctions_getID0_43: ctc10,
    Auctions_updateHighestBidder0_43: ctc11
    });
  const ctc13 = stdlib.T_Null;
  
  
  const [v304] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0]);
  const v325 = stdlib.protect(ctc7, await interact.in(), {
    at: './src/contracts/index.rsh:1:23:application',
    fs: ['at ./src/contracts/index.rsh:55:21:application call to [unknown function] (defined at: ./src/contracts/index.rsh:55:21:function exp)', 'at ./src/contracts/index.rsh:48:41:application call to "runAuctions_created0_43" (defined at: ./src/contracts/index.rsh:55:21:function exp)', 'at ./src/contracts/index.rsh:48:41:application call to [unknown function] (defined at: ./src/contracts/index.rsh:48:41:function exp)'],
    msg: 'in',
    who: 'Auctions_created'
    });
  const v348 = ['Auctions_created0_43', v325];
  
  const txn1 = await (ctc.sendrecv({
    args: [v304, v348],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc12],
    pay: [stdlib.checkedBigNumberify('./src/contracts/index.rsh:55:21:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v386], secs: v388, time: v387, didSend: v209, from: v385 } = txn1;
      
      switch (v386[0]) {
        case 'Auctions_created0_43': {
          const v389 = v386[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Auctions_created"
            });
          ;
          const v398 = v389[stdlib.checkedBigNumberify('./src/contracts/index.rsh:55:21:spread', stdlib.UInt_max, '0')];
          const v399 = null;
          const v400 = await txn1.getOutput('Auctions_created', 'v399', ctc13, v399);
          
          const v414 = v398.id;
          const v415 = v398.contractInfo;
          const v416 = v398.blockCreated;
          const v417 = v398.owner;
          const v418 = v398.title;
          const v419 = v398.description;
          const v420 = v398.price;
          const v421 = v398.tokenId;
          null;
          const v1081 = v304;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Auctions_ended0_43': {
          const v455 = v386[1];
          
          break;
          }
        case 'Auctions_getID0_43': {
          const v521 = v386[1];
          
          break;
          }
        case 'Auctions_updateHighestBidder0_43': {
          const v587 = v386[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [v386], secs: v388, time: v387, didSend: v209, from: v385 } = txn1;
  switch (v386[0]) {
    case 'Auctions_created0_43': {
      const v389 = v386[1];
      undefined /* setApiDetails */;
      ;
      const v398 = v389[stdlib.checkedBigNumberify('./src/contracts/index.rsh:55:21:spread', stdlib.UInt_max, '0')];
      const v399 = null;
      const v400 = await txn1.getOutput('Auctions_created', 'v399', ctc13, v399);
      if (v209) {
        stdlib.protect(ctc13, await interact.out(v389, v400), {
          at: './src/contracts/index.rsh:55:22:application',
          fs: ['at ./src/contracts/index.rsh:55:22:application call to [unknown function] (defined at: ./src/contracts/index.rsh:55:22:function exp)', 'at ./src/contracts/index.rsh:56:28:application call to "ret" (defined at: ./src/contracts/index.rsh:55:51:function exp)', 'at ./src/contracts/index.rsh:55:51:application call to [unknown function] (defined at: ./src/contracts/index.rsh:55:51:function exp)'],
          msg: 'out',
          who: 'Auctions_created'
          });
        }
      else {
        }
      
      const v414 = v398.id;
      const v415 = v398.contractInfo;
      const v416 = v398.blockCreated;
      const v417 = v398.owner;
      const v418 = v398.title;
      const v419 = v398.description;
      const v420 = v398.price;
      const v421 = v398.tokenId;
      null;
      const v1081 = v304;
      return;
      
      break;
      }
    case 'Auctions_ended0_43': {
      const v455 = v386[1];
      return;
      break;
      }
    case 'Auctions_getID0_43': {
      const v521 = v386[1];
      return;
      break;
      }
    case 'Auctions_updateHighestBidder0_43': {
      const v587 = v386[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Auctions_ended4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Auctions_ended4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Auctions_ended4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Struct([['id', ctc0], ['blockEnded', ctc0], ['lastBid', ctc0]]);
  const ctc2 = stdlib.T_Tuple([ctc1]);
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '80'));
  const ctc7 = stdlib.T_Token;
  const ctc8 = stdlib.T_Struct([['id', ctc0], ['contractInfo', ctc3], ['blockCreated', ctc0], ['owner', ctc4], ['title', ctc5], ['description', ctc6], ['price', ctc0], ['tokenId', ctc7]]);
  const ctc9 = stdlib.T_Tuple([ctc8]);
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Tuple([ctc0, ctc4]);
  const ctc12 = stdlib.T_Data({
    Auctions_created0_43: ctc9,
    Auctions_ended0_43: ctc2,
    Auctions_getID0_43: ctc10,
    Auctions_updateHighestBidder0_43: ctc11
    });
  const ctc13 = stdlib.T_Null;
  
  
  const [v304] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0]);
  const v352 = stdlib.protect(ctc2, await interact.in(), {
    at: './src/contracts/index.rsh:1:23:application',
    fs: ['at ./src/contracts/index.rsh:71:21:application call to [unknown function] (defined at: ./src/contracts/index.rsh:71:21:function exp)', 'at ./src/contracts/index.rsh:48:41:application call to "runAuctions_ended0_43" (defined at: ./src/contracts/index.rsh:71:21:function exp)', 'at ./src/contracts/index.rsh:48:41:application call to [unknown function] (defined at: ./src/contracts/index.rsh:48:41:function exp)'],
    msg: 'in',
    who: 'Auctions_ended'
    });
  const v365 = ['Auctions_ended0_43', v352];
  
  const txn1 = await (ctc.sendrecv({
    args: [v304, v365],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc12],
    pay: [stdlib.checkedBigNumberify('./src/contracts/index.rsh:71:21:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v386], secs: v388, time: v387, didSend: v209, from: v385 } = txn1;
      
      switch (v386[0]) {
        case 'Auctions_created0_43': {
          const v389 = v386[1];
          
          break;
          }
        case 'Auctions_ended0_43': {
          const v455 = v386[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Auctions_ended"
            });
          ;
          const v489 = v455[stdlib.checkedBigNumberify('./src/contracts/index.rsh:71:21:spread', stdlib.UInt_max, '0')];
          const v490 = v489.id;
          const v491 = v489.blockEnded;
          const v492 = v489.lastBid;
          null;
          const v493 = null;
          const v494 = await txn1.getOutput('Auctions_ended', 'v493', ctc13, v493);
          
          const v1091 = v304;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Auctions_getID0_43': {
          const v521 = v386[1];
          
          break;
          }
        case 'Auctions_updateHighestBidder0_43': {
          const v587 = v386[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [v386], secs: v388, time: v387, didSend: v209, from: v385 } = txn1;
  switch (v386[0]) {
    case 'Auctions_created0_43': {
      const v389 = v386[1];
      return;
      break;
      }
    case 'Auctions_ended0_43': {
      const v455 = v386[1];
      undefined /* setApiDetails */;
      ;
      const v489 = v455[stdlib.checkedBigNumberify('./src/contracts/index.rsh:71:21:spread', stdlib.UInt_max, '0')];
      const v490 = v489.id;
      const v491 = v489.blockEnded;
      const v492 = v489.lastBid;
      null;
      const v493 = null;
      const v494 = await txn1.getOutput('Auctions_ended', 'v493', ctc13, v493);
      if (v209) {
        stdlib.protect(ctc13, await interact.out(v455, v494), {
          at: './src/contracts/index.rsh:71:22:application',
          fs: ['at ./src/contracts/index.rsh:71:22:application call to [unknown function] (defined at: ./src/contracts/index.rsh:71:22:function exp)', 'at ./src/contracts/index.rsh:79:28:application call to "ret" (defined at: ./src/contracts/index.rsh:71:49:function exp)', 'at ./src/contracts/index.rsh:71:49:application call to [unknown function] (defined at: ./src/contracts/index.rsh:71:49:function exp)'],
          msg: 'out',
          who: 'Auctions_ended'
          });
        }
      else {
        }
      
      const v1091 = v304;
      return;
      
      break;
      }
    case 'Auctions_getID0_43': {
      const v521 = v386[1];
      return;
      break;
      }
    case 'Auctions_updateHighestBidder0_43': {
      const v587 = v386[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Auctions_getID4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Auctions_getID4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Auctions_getID4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Tuple([]);
  const ctc2 = stdlib.T_Contract;
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '80'));
  const ctc6 = stdlib.T_Token;
  const ctc7 = stdlib.T_Struct([['id', ctc0], ['contractInfo', ctc2], ['blockCreated', ctc0], ['owner', ctc3], ['title', ctc4], ['description', ctc5], ['price', ctc0], ['tokenId', ctc6]]);
  const ctc8 = stdlib.T_Tuple([ctc7]);
  const ctc9 = stdlib.T_Struct([['id', ctc0], ['blockEnded', ctc0], ['lastBid', ctc0]]);
  const ctc10 = stdlib.T_Tuple([ctc9]);
  const ctc11 = stdlib.T_Tuple([ctc0, ctc3]);
  const ctc12 = stdlib.T_Data({
    Auctions_created0_43: ctc8,
    Auctions_ended0_43: ctc10,
    Auctions_getID0_43: ctc1,
    Auctions_updateHighestBidder0_43: ctc11
    });
  const ctc13 = stdlib.T_Null;
  
  
  const [v304] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0]);
  const v317 = stdlib.protect(ctc1, await interact.in(), {
    at: './src/contracts/index.rsh:1:23:application',
    fs: ['at ./src/contracts/index.rsh:51:21:application call to [unknown function] (defined at: ./src/contracts/index.rsh:51:21:function exp)', 'at ./src/contracts/index.rsh:48:41:application call to "runAuctions_getID0_43" (defined at: ./src/contracts/index.rsh:51:21:function exp)', 'at ./src/contracts/index.rsh:48:41:application call to [unknown function] (defined at: ./src/contracts/index.rsh:48:41:function exp)'],
    msg: 'in',
    who: 'Auctions_getID'
    });
  const v321 = ['Auctions_getID0_43', v317];
  
  const txn1 = await (ctc.sendrecv({
    args: [v304, v321],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc12],
    pay: [stdlib.checkedBigNumberify('./src/contracts/index.rsh:51:21:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v386], secs: v388, time: v387, didSend: v209, from: v385 } = txn1;
      
      switch (v386[0]) {
        case 'Auctions_created0_43': {
          const v389 = v386[1];
          
          break;
          }
        case 'Auctions_ended0_43': {
          const v455 = v386[1];
          
          break;
          }
        case 'Auctions_getID0_43': {
          const v521 = v386[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Auctions_getID"
            });
          ;
          const v570 = await txn1.getOutput('Auctions_getID', 'v304', ctc0, v304);
          
          const v575 = stdlib.safeAdd(v304, stdlib.checkedBigNumberify('./src/contracts/index.rsh:53:44:decimal', stdlib.UInt_max, '1'));
          const v1101 = v575;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Auctions_updateHighestBidder0_43': {
          const v587 = v386[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [v386], secs: v388, time: v387, didSend: v209, from: v385 } = txn1;
  switch (v386[0]) {
    case 'Auctions_created0_43': {
      const v389 = v386[1];
      return;
      break;
      }
    case 'Auctions_ended0_43': {
      const v455 = v386[1];
      return;
      break;
      }
    case 'Auctions_getID0_43': {
      const v521 = v386[1];
      undefined /* setApiDetails */;
      ;
      const v570 = await txn1.getOutput('Auctions_getID', 'v304', ctc0, v304);
      if (v209) {
        stdlib.protect(ctc13, await interact.out(v521, v570), {
          at: './src/contracts/index.rsh:51:22:application',
          fs: ['at ./src/contracts/index.rsh:51:22:application call to [unknown function] (defined at: ./src/contracts/index.rsh:51:22:function exp)', 'at ./src/contracts/index.rsh:52:28:application call to "ret" (defined at: ./src/contracts/index.rsh:51:44:function exp)', 'at ./src/contracts/index.rsh:51:44:application call to [unknown function] (defined at: ./src/contracts/index.rsh:51:44:function exp)'],
          msg: 'out',
          who: 'Auctions_getID'
          });
        }
      else {
        }
      
      const v575 = stdlib.safeAdd(v304, stdlib.checkedBigNumberify('./src/contracts/index.rsh:53:44:decimal', stdlib.UInt_max, '1'));
      const v1101 = v575;
      return;
      
      break;
      }
    case 'Auctions_updateHighestBidder0_43': {
      const v587 = v386[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Auctions_updateHighestBidder4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Auctions_updateHighestBidder4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Auctions_updateHighestBidder4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Tuple([ctc0, ctc1]);
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '80'));
  const ctc6 = stdlib.T_Token;
  const ctc7 = stdlib.T_Struct([['id', ctc0], ['contractInfo', ctc3], ['blockCreated', ctc0], ['owner', ctc1], ['title', ctc4], ['description', ctc5], ['price', ctc0], ['tokenId', ctc6]]);
  const ctc8 = stdlib.T_Tuple([ctc7]);
  const ctc9 = stdlib.T_Struct([['id', ctc0], ['blockEnded', ctc0], ['lastBid', ctc0]]);
  const ctc10 = stdlib.T_Tuple([ctc9]);
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Data({
    Auctions_created0_43: ctc8,
    Auctions_ended0_43: ctc10,
    Auctions_getID0_43: ctc11,
    Auctions_updateHighestBidder0_43: ctc2
    });
  const ctc13 = stdlib.T_Null;
  
  
  const [v304] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0]);
  const v369 = stdlib.protect(ctc2, await interact.in(), {
    at: './src/contracts/index.rsh:1:23:application',
    fs: ['at ./src/contracts/index.rsh:82:21:application call to [unknown function] (defined at: ./src/contracts/index.rsh:82:21:function exp)', 'at ./src/contracts/index.rsh:48:41:application call to "runAuctions_updateHighestBidder0_43" (defined at: ./src/contracts/index.rsh:82:21:function exp)', 'at ./src/contracts/index.rsh:48:41:application call to [unknown function] (defined at: ./src/contracts/index.rsh:48:41:function exp)'],
    msg: 'in',
    who: 'Auctions_updateHighestBidder'
    });
  const v379 = ['Auctions_updateHighestBidder0_43', v369];
  
  const txn1 = await (ctc.sendrecv({
    args: [v304, v379],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc12],
    pay: [stdlib.checkedBigNumberify('./src/contracts/index.rsh:82:21:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v386], secs: v388, time: v387, didSend: v209, from: v385 } = txn1;
      
      switch (v386[0]) {
        case 'Auctions_created0_43': {
          const v389 = v386[1];
          
          break;
          }
        case 'Auctions_ended0_43': {
          const v455 = v386[1];
          
          break;
          }
        case 'Auctions_getID0_43': {
          const v521 = v386[1];
          
          break;
          }
        case 'Auctions_updateHighestBidder0_43': {
          const v587 = v386[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Auctions_updateHighestBidder"
            });
          ;
          const v643 = v587[stdlib.checkedBigNumberify('./src/contracts/index.rsh:82:21:spread', stdlib.UInt_max, '0')];
          const v644 = v587[stdlib.checkedBigNumberify('./src/contracts/index.rsh:82:21:spread', stdlib.UInt_max, '1')];
          null;
          const v645 = null;
          const v646 = await txn1.getOutput('Auctions_updateHighestBidder', 'v645', ctc13, v645);
          
          const v1111 = v304;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [v386], secs: v388, time: v387, didSend: v209, from: v385 } = txn1;
  switch (v386[0]) {
    case 'Auctions_created0_43': {
      const v389 = v386[1];
      return;
      break;
      }
    case 'Auctions_ended0_43': {
      const v455 = v386[1];
      return;
      break;
      }
    case 'Auctions_getID0_43': {
      const v521 = v386[1];
      return;
      break;
      }
    case 'Auctions_updateHighestBidder0_43': {
      const v587 = v386[1];
      undefined /* setApiDetails */;
      ;
      const v643 = v587[stdlib.checkedBigNumberify('./src/contracts/index.rsh:82:21:spread', stdlib.UInt_max, '0')];
      const v644 = v587[stdlib.checkedBigNumberify('./src/contracts/index.rsh:82:21:spread', stdlib.UInt_max, '1')];
      null;
      const v645 = null;
      const v646 = await txn1.getOutput('Auctions_updateHighestBidder', 'v645', ctc13, v645);
      if (v209) {
        stdlib.protect(ctc13, await interact.out(v587, v646), {
          at: './src/contracts/index.rsh:82:22:application',
          fs: ['at ./src/contracts/index.rsh:82:22:application call to [unknown function] (defined at: ./src/contracts/index.rsh:82:22:function exp)', 'at ./src/contracts/index.rsh:84:28:application call to "ret" (defined at: ./src/contracts/index.rsh:82:71:function exp)', 'at ./src/contracts/index.rsh:82:71:application call to [unknown function] (defined at: ./src/contracts/index.rsh:82:71:function exp)'],
          msg: 'out',
          who: 'Auctions_updateHighestBidder'
          });
        }
      else {
        }
      
      const v1111 = v304;
      return;
      
      break;
      }
    }
  
  
  };
export async function Auctions_created(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Auctions_created expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Auctions_created expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Auctions_created4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Auctions_ended(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Auctions_ended expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Auctions_ended expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Auctions_ended4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Auctions_getID(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Auctions_getID expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Auctions_getID expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Auctions_getID4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Auctions_updateHighestBidder(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Auctions_updateHighestBidder expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Auctions_updateHighestBidder expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Auctions_updateHighestBidder4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Auctions_created((uint64,uint64,uint64,address,byte[20],byte[80],uint64,uint64))void`, `Auctions_ended((uint64,uint64,uint64))void`, `Auctions_getID()uint64`, `Auctions_updateHighestBidder(uint64,address)void`, `_reachp_0((uint64))void`, `_reachp_1((uint64))void`, `_reachp_3((uint64,(byte,byte[172])))void`],
    pure: [],
    sigs: [`Auctions_created((uint64,uint64,uint64,address,byte[20],byte[80],uint64,uint64))void`, `Auctions_ended((uint64,uint64,uint64))void`, `Auctions_getID()uint64`, `Auctions_updateHighestBidder(uint64,address)void`, `_reachp_0((uint64))void`, `_reachp_1((uint64))void`, `_reachp_3((uint64,(byte,byte[172])))void`]
    },
  GlobalNumByteSlice: 2,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCAFAAEIBBAmAgABADEYQQNRKGRJIls1ASRbNQIpZIIHBAdAXz0EFIl4rgRt7b2ABHW6rOgEwZStmQTYwWRtBN/ZIyg2GgCOBwEeAEkAYQABAuIDAQL2ADYaATULJK8pNAtQUDULJTQBEkQiWzUPNAsiWzUMNAtXCK01DYAEfZLXxTQMFlA0DVCwNAyIA2M0DSJVjQQC+QL8Av8DAkL/tzYaATULJK+AAQE0C1CBlAGvUFA1C0L/roC1AQAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1C0L+8TYaARc2GgI1CzUMJK+AAQM0DBY0C1BQgYQBr1BQNQtC/s80DVcBrDUVKDULgAgAAAAAAAABjzQLULA0CzUENBUiWzUUNBUkWzUTNBUhBFs1EjQVVxggNRE0FVc4FDUQNBVXTFA1DTQVgZwBWzUMNBWBpAFbNQuABFqNnV80FBZQNBMWUDQSFlA0EVA0EFA0DVA0DBZQNAsWULAyBjUONA8WgRivUCUyBjUCNQEpTFcAIGcoNAEWNAIWUGcxGSISRIgBxDQDQAAKgAQVH3x1NARQsCNDNA1XARhJNRAiWzUNNBAkWzUMNBAhBFs1C4AE8HKZ1DQNFlA0DBZQNAsWULAoNQuACAAAAAAAAAHtNAtQsDQLNQQyBjUOQv+CgAgAAAAAAAABMDQPFlCwNA8WNQQ0DyMIMgY1DjUPQv9hNAsiWzUNNAtXCCA1DIAEXhYloTQNFlA0DFCwKDULgAgAAAAAAAAChTQLULA0CzUEMgY1DkL/KjEANQ00Cxc1DIAEgsRh/jQMFlCwNAyIAPA0DSMyBkL/EyM0ARJEVwAgNQ00Cxc1DIAE1RUZFDQMFlCwNAyIAMk0DTEAEkQiMgY1DjUPQv7aiACygaCNBjQGCDUGNhoBNQtC/5yIAJ42GgE1C0L/sogAkzYaATULQv0DIjE0EkSBAjE1EkQiMTYSRCIxNxJEiABzMgMiIkL+mzEZIhJEQv6zIrIBI7IQsgeyCLOJQv3+Qv6tQv7yNA1XASg1C0L/CUiJTAlJNQYyCYgAU4kJSUH/7kk1BjEWNAAjCEk1AAlHAjgHMgoSRDgQIxJEOAgSRIkxGYEFEkSIABkiMgoyCYgAIUL+SiM1A4lJIhJMNAISEUSJNAY0B0oPQf+mQv+usUL/frGyCUL/eA==`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `33`,
    1000: `463`,
    1001: `463`,
    1002: `463`,
    1003: `464`,
    1004: `464`,
    1005: `464`,
    1006: `466`,
    1007: `467`,
    1008: `467`,
    1009: `468`,
    101: `33`,
    1010: `470`,
    1011: `471`,
    1012: `472`,
    1013: `473`,
    1014: `474`,
    1015: `474`,
    1016: `475`,
    1017: `476`,
    1018: `477`,
    1019: `478`,
    102: `35`,
    1020: `480`,
    1021: `480`,
    1022: `481`,
    1023: `481`,
    1024: `482`,
    1025: `483`,
    1026: `484`,
    1027: `484`,
    1028: `484`,
    1029: `485`,
    103: `36`,
    1030: `485`,
    1031: `485`,
    1032: `487`,
    1033: `488`,
    1034: `488`,
    1035: `488`,
    1036: `490`,
    1037: `491`,
    1038: `491`,
    1039: `492`,
    104: `36`,
    105: `37`,
    106: `38`,
    107: `40`,
    108: `41`,
    109: `42`,
    11: `2`,
    110: `42`,
    111: `43`,
    112: `43`,
    113: `44`,
    114: `45`,
    115: `46`,
    116: `46`,
    117: `47`,
    118: `47`,
    119: `48`,
    12: `2`,
    120: `48`,
    121: `48`,
    122: `49`,
    123: `49`,
    124: `50`,
    125: `50`,
    126: `50`,
    127: `50`,
    128: `50`,
    129: `50`,
    13: `4`,
    130: `51`,
    131: `51`,
    132: `52`,
    133: `53`,
    134: `54`,
    135: `54`,
    136: `55`,
    137: `56`,
    138: `58`,
    139: `58`,
    14: `4`,
    140: `59`,
    141: `59`,
    142: `59`,
    143: `60`,
    144: `60`,
    145: `61`,
    146: `62`,
    147: `63`,
    148: `63`,
    149: `63`,
    15: `5`,
    150: `63`,
    151: `63`,
    152: `63`,
    153: `63`,
    154: `63`,
    155: `63`,
    156: `63`,
    157: `64`,
    158: `64`,
    159: `64`,
    16: `5`,
    160: `66`,
    161: `66`,
    162: `66`,
    163: `67`,
    164: `67`,
    165: `69`,
    166: `70`,
    167: `71`,
    168: `71`,
    169: `71`,
    17: `5`,
    170: `72`,
    171: `72`,
    172: `73`,
    173: `74`,
    174: `74`,
    175: `74`,
    176: `75`,
    177: `76`,
    178: `77`,
    179: `78`,
    18: `6`,
    180: `78`,
    181: `79`,
    182: `79`,
    183: `79`,
    184: `82`,
    185: `82`,
    186: `82`,
    187: `82`,
    188: `82`,
    189: `82`,
    19: `7`,
    190: `82`,
    191: `82`,
    192: `82`,
    193: `82`,
    194: `82`,
    195: `82`,
    196: `82`,
    197: `82`,
    198: `82`,
    199: `82`,
    2: `2`,
    20: `8`,
    200: `82`,
    201: `82`,
    202: `82`,
    203: `82`,
    204: `82`,
    205: `82`,
    206: `82`,
    207: `82`,
    208: `82`,
    209: `82`,
    21: `9`,
    210: `82`,
    211: `82`,
    212: `82`,
    213: `82`,
    214: `82`,
    215: `82`,
    216: `82`,
    217: `82`,
    218: `82`,
    219: `82`,
    22: `10`,
    220: `82`,
    221: `82`,
    222: `82`,
    223: `82`,
    224: `82`,
    225: `82`,
    226: `82`,
    227: `82`,
    228: `82`,
    229: `82`,
    23: `11`,
    230: `82`,
    231: `82`,
    232: `82`,
    233: `82`,
    234: `82`,
    235: `82`,
    236: `82`,
    237: `82`,
    238: `82`,
    239: `82`,
    24: `11`,
    240: `82`,
    241: `82`,
    242: `82`,
    243: `82`,
    244: `82`,
    245: `82`,
    246: `82`,
    247: `82`,
    248: `82`,
    249: `82`,
    25: `12`,
    250: `82`,
    251: `82`,
    252: `82`,
    253: `82`,
    254: `82`,
    255: `82`,
    256: `82`,
    257: `82`,
    258: `82`,
    259: `82`,
    26: `13`,
    260: `82`,
    261: `82`,
    262: `82`,
    263: `82`,
    264: `82`,
    265: `82`,
    266: `82`,
    267: `82`,
    268: `82`,
    269: `82`,
    27: `14`,
    270: `82`,
    271: `82`,
    272: `82`,
    273: `82`,
    274: `82`,
    275: `82`,
    276: `82`,
    277: `82`,
    278: `82`,
    279: `82`,
    28: `14`,
    280: `82`,
    281: `82`,
    282: `82`,
    283: `82`,
    284: `82`,
    285: `82`,
    286: `82`,
    287: `82`,
    288: `82`,
    289: `82`,
    29: `15`,
    290: `82`,
    291: `82`,
    292: `82`,
    293: `82`,
    294: `82`,
    295: `82`,
    296: `82`,
    297: `82`,
    298: `82`,
    299: `82`,
    3: `2`,
    30: `16`,
    300: `82`,
    301: `82`,
    302: `82`,
    303: `82`,
    304: `82`,
    305: `82`,
    306: `82`,
    307: `82`,
    308: `82`,
    309: `82`,
    31: `18`,
    310: `82`,
    311: `82`,
    312: `82`,
    313: `82`,
    314: `82`,
    315: `82`,
    316: `82`,
    317: `82`,
    318: `82`,
    319: `82`,
    32: `18`,
    320: `82`,
    321: `82`,
    322: `82`,
    323: `82`,
    324: `82`,
    325: `82`,
    326: `82`,
    327: `82`,
    328: `82`,
    329: `82`,
    33: `18`,
    330: `82`,
    331: `82`,
    332: `82`,
    333: `82`,
    334: `82`,
    335: `82`,
    336: `82`,
    337: `82`,
    338: `82`,
    339: `82`,
    34: `18`,
    340: `82`,
    341: `82`,
    342: `82`,
    343: `82`,
    344: `82`,
    345: `82`,
    346: `82`,
    347: `82`,
    348: `82`,
    349: `82`,
    35: `18`,
    350: `82`,
    351: `82`,
    352: `82`,
    353: `82`,
    354: `82`,
    355: `82`,
    356: `82`,
    357: `82`,
    358: `82`,
    359: `82`,
    36: `18`,
    360: `82`,
    361: `82`,
    362: `82`,
    363: `82`,
    364: `82`,
    365: `82`,
    366: `82`,
    367: `82`,
    368: `83`,
    369: `83`,
    37: `18`,
    370: `84`,
    371: `84`,
    372: `84`,
    373: `86`,
    374: `86`,
    375: `86`,
    376: `87`,
    377: `88`,
    378: `88`,
    379: `88`,
    38: `18`,
    380: `89`,
    381: `89`,
    382: `90`,
    383: `90`,
    384: `92`,
    385: `93`,
    386: `94`,
    387: `94`,
    388: `94`,
    389: `95`,
    39: `18`,
    390: `95`,
    391: `96`,
    392: `97`,
    393: `97`,
    394: `98`,
    395: `99`,
    396: `100`,
    397: `100`,
    398: `100`,
    399: `101`,
    4: `2`,
    40: `18`,
    400: `102`,
    401: `103`,
    402: `104`,
    403: `104`,
    404: `105`,
    405: `105`,
    406: `105`,
    407: `107`,
    408: `107`,
    409: `108`,
    41: `18`,
    410: `108`,
    411: `108`,
    412: `109`,
    413: `109`,
    414: `110`,
    415: `111`,
    416: `111`,
    417: `112`,
    418: `112`,
    419: `112`,
    42: `18`,
    420: `112`,
    421: `112`,
    422: `112`,
    423: `112`,
    424: `112`,
    425: `112`,
    426: `112`,
    427: `113`,
    428: `113`,
    429: `114`,
    43: `18`,
    430: `115`,
    431: `116`,
    432: `116`,
    433: `117`,
    434: `117`,
    435: `118`,
    436: `118`,
    437: `119`,
    438: `120`,
    439: `121`,
    44: `18`,
    440: `121`,
    441: `122`,
    442: `122`,
    443: `123`,
    444: `124`,
    445: `125`,
    446: `125`,
    447: `126`,
    448: `126`,
    449: `127`,
    45: `18`,
    450: `127`,
    451: `128`,
    452: `129`,
    453: `129`,
    454: `130`,
    455: `130`,
    456: `131`,
    457: `131`,
    458: `131`,
    459: `132`,
    46: `18`,
    460: `132`,
    461: `133`,
    462: `133`,
    463: `134`,
    464: `134`,
    465: `134`,
    466: `135`,
    467: `135`,
    468: `136`,
    469: `136`,
    47: `18`,
    470: `137`,
    471: `137`,
    472: `137`,
    473: `138`,
    474: `138`,
    475: `139`,
    476: `139`,
    477: `140`,
    478: `140`,
    479: `140`,
    48: `18`,
    480: `141`,
    481: `142`,
    482: `142`,
    483: `143`,
    484: `143`,
    485: `144`,
    486: `144`,
    487: `144`,
    488: `145`,
    489: `146`,
    49: `18`,
    490: `146`,
    491: `147`,
    492: `147`,
    493: `147`,
    494: `147`,
    495: `147`,
    496: `147`,
    497: `148`,
    498: `148`,
    499: `149`,
    5: `2`,
    50: `18`,
    500: `150`,
    501: `151`,
    502: `151`,
    503: `152`,
    504: `153`,
    505: `154`,
    506: `154`,
    507: `155`,
    508: `156`,
    509: `157`,
    51: `18`,
    510: `157`,
    511: `158`,
    512: `159`,
    513: `159`,
    514: `160`,
    515: `161`,
    516: `161`,
    517: `162`,
    518: `163`,
    519: `163`,
    52: `18`,
    520: `164`,
    521: `165`,
    522: `166`,
    523: `166`,
    524: `167`,
    525: `168`,
    526: `169`,
    527: `171`,
    528: `171`,
    529: `172`,
    53: `18`,
    530: `172`,
    531: `175`,
    532: `175`,
    533: `176`,
    534: `177`,
    535: `177`,
    536: `178`,
    537: `179`,
    538: `180`,
    539: `181`,
    54: `18`,
    540: `181`,
    541: `183`,
    542: `183`,
    543: `184`,
    544: `184`,
    545: `185`,
    546: `186`,
    547: `187`,
    548: `187`,
    549: `187`,
    55: `18`,
    550: `188`,
    551: `189`,
    552: `190`,
    553: `190`,
    554: `191`,
    555: `192`,
    556: `192`,
    557: `193`,
    558: `194`,
    559: `195`,
    56: `18`,
    560: `196`,
    561: `196`,
    562: `197`,
    563: `198`,
    564: `199`,
    565: `201`,
    566: `201`,
    567: `201`,
    568: `203`,
    569: `203`,
    57: `18`,
    570: `204`,
    571: `204`,
    572: `204`,
    573: `206`,
    574: `206`,
    575: `206`,
    576: `206`,
    577: `206`,
    578: `206`,
    579: `207`,
    58: `18`,
    580: `207`,
    581: `208`,
    582: `209`,
    583: `211`,
    584: `212`,
    585: `214`,
    586: `214`,
    587: `215`,
    588: `215`,
    589: `215`,
    59: `18`,
    590: `216`,
    591: `217`,
    592: `217`,
    593: `218`,
    594: `219`,
    595: `220`,
    596: `220`,
    597: `221`,
    598: `221`,
    599: `222`,
    6: `2`,
    60: `18`,
    600: `223`,
    601: `224`,
    602: `224`,
    603: `225`,
    604: `225`,
    605: `226`,
    606: `226`,
    607: `227`,
    608: `228`,
    609: `228`,
    61: `18`,
    610: `229`,
    611: `229`,
    612: `229`,
    613: `229`,
    614: `229`,
    615: `229`,
    616: `230`,
    617: `230`,
    618: `231`,
    619: `232`,
    62: `18`,
    620: `233`,
    621: `233`,
    622: `234`,
    623: `235`,
    624: `236`,
    625: `236`,
    626: `237`,
    627: `238`,
    628: `239`,
    629: `241`,
    63: `18`,
    630: `242`,
    631: `242`,
    632: `243`,
    633: `243`,
    634: `243`,
    635: `243`,
    636: `243`,
    637: `243`,
    638: `243`,
    639: `243`,
    64: `18`,
    640: `243`,
    641: `243`,
    642: `244`,
    643: `244`,
    644: `245`,
    645: `246`,
    646: `247`,
    647: `247`,
    648: `248`,
    649: `248`,
    65: `18`,
    650: `249`,
    651: `249`,
    652: `250`,
    653: `250`,
    654: `251`,
    655: `251`,
    656: `251`,
    657: `253`,
    658: `253`,
    659: `253`,
    66: `18`,
    660: `253`,
    661: `253`,
    662: `253`,
    663: `253`,
    664: `253`,
    665: `253`,
    666: `253`,
    667: `254`,
    668: `254`,
    669: `255`,
    67: `18`,
    670: `256`,
    671: `257`,
    672: `258`,
    673: `258`,
    674: `259`,
    675: `260`,
    676: `260`,
    677: `261`,
    678: `261`,
    679: `262`,
    68: `19`,
    680: `263`,
    681: `264`,
    682: `264`,
    683: `265`,
    684: `265`,
    685: `266`,
    686: `266`,
    687: `267`,
    688: `267`,
    689: `267`,
    69: `19`,
    690: `269`,
    691: `269`,
    692: `270`,
    693: `271`,
    694: `272`,
    695: `272`,
    696: `273`,
    697: `273`,
    698: `274`,
    699: `274`,
    7: `2`,
    70: `19`,
    700: `274`,
    701: `275`,
    702: `275`,
    703: `276`,
    704: `276`,
    705: `276`,
    706: `276`,
    707: `276`,
    708: `276`,
    709: `277`,
    71: `20`,
    710: `277`,
    711: `278`,
    712: `279`,
    713: `280`,
    714: `280`,
    715: `281`,
    716: `282`,
    717: `284`,
    718: `285`,
    719: `285`,
    72: `20`,
    720: `286`,
    721: `286`,
    722: `286`,
    723: `286`,
    724: `286`,
    725: `286`,
    726: `286`,
    727: `286`,
    728: `286`,
    729: `286`,
    73: `20`,
    730: `287`,
    731: `287`,
    732: `288`,
    733: `289`,
    734: `290`,
    735: `290`,
    736: `291`,
    737: `291`,
    738: `292`,
    739: `292`,
    74: `20`,
    740: `293`,
    741: `293`,
    742: `294`,
    743: `294`,
    744: `294`,
    745: `296`,
    746: `296`,
    747: `297`,
    748: `297`,
    749: `298`,
    75: `20`,
    750: `298`,
    751: `299`,
    752: `300`,
    753: `300`,
    754: `301`,
    755: `301`,
    756: `301`,
    757: `301`,
    758: `301`,
    759: `301`,
    76: `20`,
    760: `302`,
    761: `302`,
    762: `303`,
    763: `304`,
    764: `305`,
    765: `307`,
    766: `307`,
    767: `308`,
    768: `308`,
    769: `308`,
    77: `20`,
    770: `310`,
    771: `310`,
    772: `311`,
    773: `312`,
    774: `312`,
    775: `313`,
    776: `313`,
    777: `313`,
    778: `315`,
    779: `316`,
    78: `20`,
    780: `316`,
    781: `317`,
    782: `318`,
    783: `320`,
    784: `320`,
    785: `320`,
    786: `321`,
    787: `321`,
    788: `322`,
    789: `322`,
    79: `20`,
    790: `323`,
    791: `324`,
    792: `324`,
    793: `325`,
    794: `325`,
    795: `325`,
    796: `325`,
    797: `325`,
    798: `325`,
    799: `326`,
    8: `2`,
    80: `20`,
    800: `326`,
    801: `327`,
    802: `328`,
    803: `329`,
    804: `331`,
    805: `331`,
    806: `332`,
    807: `332`,
    808: `332`,
    809: `333`,
    81: `20`,
    810: `333`,
    811: `334`,
    812: `334`,
    813: `335`,
    814: `336`,
    815: `339`,
    816: `340`,
    817: `340`,
    818: `341`,
    819: `341`,
    82: `20`,
    820: `342`,
    821: `342`,
    822: `343`,
    823: `343`,
    824: `343`,
    825: `345`,
    826: `345`,
    827: `345`,
    828: `346`,
    829: `346`,
    83: `20`,
    830: `346`,
    831: `346`,
    832: `348`,
    833: `348`,
    834: `349`,
    835: `350`,
    836: `350`,
    837: `351`,
    838: `351`,
    839: `351`,
    84: `20`,
    840: `352`,
    841: `352`,
    842: `353`,
    843: `353`,
    844: `353`,
    845: `355`,
    846: `355`,
    847: `355`,
    848: `356`,
    849: `356`,
    85: `20`,
    850: `356`,
    851: `357`,
    852: `357`,
    853: `358`,
    854: `358`,
    855: `358`,
    856: `360`,
    857: `360`,
    858: `360`,
    859: `361`,
    86: `20`,
    860: `361`,
    861: `361`,
    862: `362`,
    863: `362`,
    864: `363`,
    865: `363`,
    866: `363`,
    867: `365`,
    868: `366`,
    869: `366`,
    87: `22`,
    870: `367`,
    871: `368`,
    872: `369`,
    873: `369`,
    874: `370`,
    875: `370`,
    876: `371`,
    877: `372`,
    878: `373`,
    879: `374`,
    88: `24`,
    880: `374`,
    881: `375`,
    882: `376`,
    883: `377`,
    884: `378`,
    885: `378`,
    886: `379`,
    887: `380`,
    888: `381`,
    889: `381`,
    89: `24`,
    890: `381`,
    891: `382`,
    892: `382`,
    893: `383`,
    894: `384`,
    895: `385`,
    896: `385`,
    897: `385`,
    898: `387`,
    899: `387`,
    9: `2`,
    90: `24`,
    900: `388`,
    901: `389`,
    902: `390`,
    903: `392`,
    904: `392`,
    905: `392`,
    906: `394`,
    907: `395`,
    908: `395`,
    909: `396`,
    91: `25`,
    910: `397`,
    911: `397`,
    912: `398`,
    913: `398`,
    914: `399`,
    915: `399`,
    916: `400`,
    917: `401`,
    918: `403`,
    919: `403`,
    92: `25`,
    920: `403`,
    921: `405`,
    922: `405`,
    923: `405`,
    924: `407`,
    925: `407`,
    926: `407`,
    927: `409`,
    928: `409`,
    929: `410`,
    93: `27`,
    930: `410`,
    931: `410`,
    932: `411`,
    933: `411`,
    934: `412`,
    935: `412`,
    936: `412`,
    937: `414`,
    938: `415`,
    939: `417`,
    94: `28`,
    940: `418`,
    941: `419`,
    942: `420`,
    943: `420`,
    944: `421`,
    945: `421`,
    946: `422`,
    947: `422`,
    948: `422`,
    949: `423`,
    95: `29`,
    950: `425`,
    951: `426`,
    952: `427`,
    953: `427`,
    954: `427`,
    955: `428`,
    956: `429`,
    957: `429`,
    958: `432`,
    959: `432`,
    96: `30`,
    960: `433`,
    961: `433`,
    962: `434`,
    963: `435`,
    964: `436`,
    965: `437`,
    966: `437`,
    967: `438`,
    968: `439`,
    969: `439`,
    97: `30`,
    970: `440`,
    971: `440`,
    972: `441`,
    973: `441`,
    974: `442`,
    975: `443`,
    976: `444`,
    977: `444`,
    978: `445`,
    979: `446`,
    98: `31`,
    980: `447`,
    981: `448`,
    982: `448`,
    983: `449`,
    984: `450`,
    985: `451`,
    986: `453`,
    987: `453`,
    988: `454`,
    989: `454`,
    99: `32`,
    990: `455`,
    991: `456`,
    992: `458`,
    993: `458`,
    994: `458`,
    995: `460`,
    996: `461`,
    997: `461`,
    998: `462`,
    999: `462`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: null,
  extraPages: 0,
  stateKeys: 1,
  stateSize: 32,
  unsupported: [],
  version: 13,
  warnings: []
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T9","name":"v1139","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T9","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T9","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T7","name":"which","type":"uint8"},{"components":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address payable","name":"contractInfo","type":"address"},{"internalType":"uint256","name":"blockCreated","type":"uint256"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"bytes20","name":"title","type":"bytes20"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes16","name":"elem2","type":"bytes16"}],"internalType":"struct T0","name":"description","type":"tuple"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"address payable","name":"tokenId","type":"address"}],"internalType":"struct T1","name":"elem0","type":"tuple"}],"internalType":"struct T2","name":"_Auctions_created0_43","type":"tuple"},{"components":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"blockEnded","type":"uint256"},{"internalType":"uint256","name":"lastBid","type":"uint256"}],"internalType":"struct T3","name":"elem0","type":"tuple"}],"internalType":"struct T4","name":"_Auctions_ended0_43","type":"tuple"},{"internalType":"bool","name":"_Auctions_getID0_43","type":"bool"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"}],"internalType":"struct T6","name":"_Auctions_updateHighestBidder0_43","type":"tuple"}],"internalType":"struct T7","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T8","name":"_a","type":"tuple"}],"name":"_reach_e3","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"}],"name":"_reach_oe_v304","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v399","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v493","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v645","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"},{"indexed":false,"internalType":"address payable","name":"v1","type":"address"},{"indexed":false,"internalType":"uint256","name":"v2","type":"uint256"},{"indexed":false,"internalType":"address payable","name":"v3","type":"address"},{"indexed":false,"internalType":"bytes20","name":"v4","type":"bytes20"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes16","name":"elem2","type":"bytes16"}],"indexed":false,"internalType":"struct T0","name":"v5","type":"tuple"},{"indexed":false,"internalType":"uint256","name":"v6","type":"uint256"},{"indexed":false,"internalType":"address payable","name":"v7","type":"address"}],"name":"create","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"v2","type":"uint256"}],"name":"end","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"},{"indexed":false,"internalType":"address payable","name":"v1","type":"address"}],"name":"updateHighestBidder","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address payable","name":"contractInfo","type":"address"},{"internalType":"uint256","name":"blockCreated","type":"uint256"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"bytes20","name":"title","type":"bytes20"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes16","name":"elem2","type":"bytes16"}],"internalType":"struct T0","name":"description","type":"tuple"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"address payable","name":"tokenId","type":"address"}],"internalType":"struct T1","name":"v1118","type":"tuple"}],"name":"Auctions_created","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"blockEnded","type":"uint256"},{"internalType":"uint256","name":"lastBid","type":"uint256"}],"internalType":"struct T3","name":"v1124","type":"tuple"}],"name":"Auctions_ended","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Auctions_getID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v1135","type":"uint256"},{"internalType":"address payable","name":"v1136","type":"address"}],"name":"Auctions_updateHighestBidder","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T9","name":"v1142","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T7","name":"which","type":"uint8"},{"components":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address payable","name":"contractInfo","type":"address"},{"internalType":"uint256","name":"blockCreated","type":"uint256"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"bytes20","name":"title","type":"bytes20"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes16","name":"elem2","type":"bytes16"}],"internalType":"struct T0","name":"description","type":"tuple"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"address payable","name":"tokenId","type":"address"}],"internalType":"struct T1","name":"elem0","type":"tuple"}],"internalType":"struct T2","name":"_Auctions_created0_43","type":"tuple"},{"components":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"blockEnded","type":"uint256"},{"internalType":"uint256","name":"lastBid","type":"uint256"}],"internalType":"struct T3","name":"elem0","type":"tuple"}],"internalType":"struct T4","name":"_Auctions_ended0_43","type":"tuple"},{"internalType":"bool","name":"_Auctions_getID0_43","type":"bool"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"}],"internalType":"struct T6","name":"_Auctions_updateHighestBidder0_43","type":"tuple"}],"internalType":"struct T7","name":"elem1","type":"tuple"}],"internalType":"struct T8","name":"v1145","type":"tuple"}],"name":"_reachp_3","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x6080620019a390813803601f1980601f83011683019360018060401b039284861084871117620002d65780859260409788528339602094859181010312620002ec578451906200004f82620002f1565b51815243600355845160a081019080821085831117620002d6576080918752600091818380935282888201528289820152826060820152015260049160ff835416620002bf577f87b51d26f290dc1fb530aed45f92ac77d813efb7cccb67b06c40d875955dde87878051338152835189820152a1518015908115620002b2575b50156200029b573462000284578551620000e981620002f1565b3390526001948582554386558651923382850152818452878401848110878211176200027157885283519586116200025e57600254908782811c9216801562000253575b83831014620002405750601f8111620001f4575b508093601f86116001146200018c5750509183949184939462000180575b50501b916000199060031b1c1916176002555b5161169590816200030e8239f35b0151925038806200015f565b600283528183209493928692918316915b88838310620001d95750505010620001bf575b505050811b0160025562000172565b015160001960f88460031b161c19169055388080620001b0565b8587015188559096019594850194879350908101906200019d565b60028352818320601f870160051c81019183881062000235575b601f0160051c019087905b8281106200022957505062000141565b84815501879062000219565b90915081906200020e565b634e487b7160e01b845260229052602483fd5b91607f16916200012d565b634e487b7160e01b835260419052602482fd5b634e487b7160e01b845260418252602484fd5b855163100960cb60e01b8152600981840152602490fd5b855163100960cb60e01b8152600881840152602490fd5b90506001541438620000cf565b865163100960cb60e01b8152600781850152602490fd5b634e487b7160e01b600052604160045260246000fd5b600080fd5b602081019081106001600160401b03821117620002d65760405256fe6040608081526004908136101561001d575b5050361561001b57005b005b600091823560e01c9081630c7d57ce1461075b5781631e93b0f11461073c578163236d27c61461069e5781632cfbfba7146106555781634c344d9d146105b9578163573b85101461031a57816374688e3e146101155750806383230757146100f75763ab53f2c60361001157346100f357816003193601126100f35781546100a3610950565b91805193849283526020828185015284518093850152815b8381106100dc57505060608094508284010152601f80199101168101030190f35b8086018201518782016060015286945081016100bb565b5080fd5b50346100f357816003193601126100f3576020906001549051908152f35b82846102403660031901126103175761012c610a05565b91805192610139846108b2565b843584526102203660231901126102fc5781519460a086016001600160401b03811187821017610304578352602435908110156103005785526101403660431901126102fc5781519361018b856108e3565b82519561019787610919565b60443587526001600160a01b0396606435969088881688036102f857602097888201526084358682015260a43589811681036102f057606082015260c4356001600160601b0319811681036102f057608082015260603660e31901126102f857855161020281610935565b60e43581526101043589820152610124356001600160801b0319811681036102f4578782015260a08201526101443560c08201526101643589811681036102f05760e08201528152818701526060366101831901126102ec578351610266816108e3565b845161027181610935565b6101843581526101a435888201526101c435868201528152848201526101e43580151581036102e857606082015283610203193601126102ec5783516102b6816108b2565b6102043581526102243597881688036102e85786976102e2959697820152608082015286820152610b78565b51908152f35b8580fd5b8480fd5b8780fd5b8880fd5b8680fd5b8280fd5b8380fd5b634e487b7160e01b855260418252602485fd5b80fd5b8383602092836003193601126102fc57610332610a05565b5081519061033f826108e3565b80358252600191828554036105a257610356610950565b9086828051810103126102e85786855192610370846108e3565b01516001600160a01b03919082811681036102f057835260ff84541661058b577fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee8159686805133815283518b820152a1518015908115610580575b5015610569573461055257339151160361053b5782516103e8816108b2565b84815243868201528351906103fc826108e3565b858252518091528185554383558351908682015285815261041c816108b2565b8051916001600160401b0383116105285750610439600254610878565b601f81116104e1575b508590601f8311600114610480579282939183928794610475575b50501b916000199060031b1c19161760025551908152f35b01519250878061045d565b60028652868620919083601f198116885b8a888383106104ca57505050106104b1575b505050811b016002556102e2565b015160001960f88460031b161c191690558580806104a3565b868601518855909601959485019487935001610491565b60028652868620601f840160051c81019188851061051e575b601f0160051c019084905b828110610513575050610442565b878155018490610505565b90915081906104fa565b634e487b7160e01b865260419052602485fd5b602490600e84519163100960cb60e01b8352820152fd5b845163100960cb60e01b8152600d81850152602490fd5b845163100960cb60e01b8152600c81850152602490fd5b9050845414886103c9565b855163100960cb60e01b8152600b81860152602490fd5b835163100960cb60e01b8152600a81840152602490fd5b905060603660031901126102fc5760209261064a83926105d7610a05565b9283918551906105e682610935565b35815260243588820152604435868201528551610602816108b2565b865161060d816108e3565b610615610a30565b8152815288810191610625610ab2565b8352815152600182515251868251015261063d610b11565b9182525187820152610b78565b015115159051908152f35b5050816003193601126100f3576060602092610695610672610a05565b809261067c610b11565b878101906002825152511515868251015261063d610b11565b01519051908152f35b828481600319360112610317576001600160a01b0360243581811694919290859003610317576080929161064a916106d4610a05565b9384928751916106e3836108b2565b6020998a84019235845282528851916106fb836108b2565b8951610706816108b2565b858152858c82015283528a83019361071c610ab2565b85525183515251168982510152600382515251868251015261063d610b11565b5050346100f357816003193601126100f3576020906003549051908152f35b828461014036600319011261031757610772610a05565b9082519361077f85610919565b358452602435936001600160a01b0380861686036102fc57602095868301526044358583015260643581811681036103005760608301526084356001600160601b03198116810361030057608083015260603660a31901126102fc5784516107e681610935565b60a435815260c4358782015260e4356001600160801b0319811681036102ec578682015260a08301526101043560c08301526101243590811681036102fc5792809282879560e061064a950152865161083e816108b2565b610846610a4f565b815286810191610854610ab2565b83528151528282515251868251015261086b610b11565b9182525185820152610b78565b90600182811c921680156108a8575b602083101461089257565b634e487b7160e01b600052602260045260246000fd5b91607f1691610887565b604081019081106001600160401b038211176108cd57604052565b634e487b7160e01b600052604160045260246000fd5b602081019081106001600160401b038211176108cd57604052565b60a081019081106001600160401b038211176108cd57604052565b61010081019081106001600160401b038211176108cd57604052565b606081019081106001600160401b038211176108cd57604052565b60405190600060025461096281610878565b8085526001918083169081156109e657506001146109a0575b5050829003601f01601f191682016001600160401b038111838210176108cd57604052565b600260009081526020935091836000805160206116698339815191525b8385106109d25750505050830101388061097b565b8054888601830152930192849082016109bd565b919250506020925060ff191682850152151560051b830101388061097b565b60405190610a12826108fe565b60006080838281528260208201528260408201528260608201520152565b60405190610a3d82610935565b60006040838281528260208201520152565b60405190610a5c826108e3565b6040518261010082016001600160401b038111838210176108cd576040526000808352806020840152806040840152806060840152806080840152610a9f610a30565b60a08401528060c084015260e083015252565b60405190610abf826108fe565b8160008152610acc610a4f565b6020820152604051610add816108e3565b610ae5610a30565b8152604082015260006060820152608060405191610b02836108b2565b60008352600060208401520152565b60405190610b1e826108b2565b81600081526020610b2d610ab2565b910152565b80518252602080820151908301526040908101516001600160801b031916910152565b516004811015610b625790565b634e487b7160e01b600052602160045260246000fd5b90604051610b8581610935565b610b8d610a4f565b8152604051610b9b816108e3565b610ba3610a30565b8152602082015260405190610bb7826108b2565b60009182815282602082015260408201526004928383540361165057610bdb610950565b9460208680518101031261030057602060405196610bf8886108e3565b0151865260ff8554166116385760405133815281516020820152602082015180518781101561162557916080610260927f09fd98ee5ac46b0a991f46a6e8136af87c8401278c292f9e9ea8cd5f47e748ff9460408401526020810151518051606085015260018060a01b0360208201511683850152604081015160a085015260018060a01b0360608201511660c085015260018060601b0319838201511660e0850152610cae60a0820151610100860190610b32565b60c081015161016085015260e001516001600160a01b039081166101808501526040828101515180516101a08701526020808201516101c08801529101516101e086015260608301511515610200860152929091015180516102208501529091015116610240820152a180518015908115611619575b501561160157610d376020820151610b55565b858110156115ee57610fc4576020809101510151825234610fac577f55648752e16a06369257037ff12234ced55d1627f04500d14c58cb79807cf4d391836020610140937fd6e4ed551c43b3d794d4372357fed9296840b6799a7ea7c2f494dda7e8ebdbb082604051858152a10152515180519060018060a01b0360208201511690610e1b604082015160018060a01b0360608401511660018060601b03196080850151169060a08501519260c08601519560e060018060a01b039101511696604051988952602089015260408801526060870152608086015260a0850190610b32565b610100830152610120820152a160405192610e35846108b2565b818452602084019082825251845243905260405192610e53846108e3565b8184525180935281815560019243845560405190602082015260208152610e79816108b2565b8051926001600160401b038411610f995750610e96600254610878565b601f8111610f45575b50602091601f8411600114610ed95791839491849394610ece575b50501b916000199060031b1c191617600255565b015192503880610eba565b600281526000805160206116698339815191529291908490601f198216905b87828210610f2c57505010610f13575b505050811b01600255565b015160001960f88460031b161c19169055388080610f08565b8486015187559095019460209485019487935001610ef8565b60028352600080516020611669833981519152601f850160051c81019160208610610f8f575b601f0160051c019085905b828110610f84575050610e9f565b848155018590610f76565b9091508190610f6b565b634e487b7160e01b835260419052602482fd5b60405163100960cb60e01b8152601281860152602490fd5b9491610fd36020870151610b55565b95858710156115ee5760019687036111cc576020604091015101516020820152346111b45783917f8ae1d12745070499deb90f74dbda066d3ebb9066dc64fa2d22e24615fabfb34c60606020604094015151805190856020820151910151908651928352602083015285820152a17f42b255989cb65514f4c47dfe412890f19aa02e81f3a8100f7f37212975cdcee360208351858152a1015260405190611079826108b2565b828252602082019083825251825243905260405190611097826108e3565b82825251809152828255438455604051906020820152602081526110ba816108b2565b8051926001600160401b038411610f9957506110d7600254610878565b601f8111611160575b50602091601f841160011461110e5791839491849394610ece5750501b916000199060031b1c191617600255565b600281526000805160206116698339815191529291908490601f198216905b8782821061114757505010610f1357505050811b01600255565b848601518755909501946020948501948793500161112d565b60028352600080516020611669833981519152601f850160051c810191602086106111aa575b601f0160051c019085905b82811061119f5750506110e0565b848155018590611191565b9091508190611186565b60405163100960cb60e01b8152601381870152602490fd5b9594939291906111df6020880151610b55565b96858810156115ee5760029788036113b8575050346113a0577f693dc210059312542cfbb7d1d32fb9fb4b766dea60548afdeab67ba18e9864bc60208351604051908152a16060825191015260405190611238826108b2565b8282526020820190838252518581019081811161138d57811061030057825243905260405190611267826108e3565b828252518091528282554384556040519060208201526020815261128a816108b2565b8051926001600160401b038411610f9957506112a68554610878565b601f8111611345575b50602091601f84116001146112e857918394918493946112dd575b50501b916000199060031b1c1916179055565b0151925038806112ca565b919083601f19811687855260208520945b8782821061132c57505010611313575b505050811b019055565b015160001960f88460031b161c19169055388080611309565b84860151875590950194602094850194879350016112f9565b85835260208320601f850160051c81019160208610611383575b601f0160051c019085905b8281106113785750506112af565b84815501859061136a565b909150819061135f565b634e487b7160e01b855260118652602485fd5b60405163100960cb60e01b8152601481860152602490fd5b6113c56020820151610b55565b868110156115db576003146113df575b5050505050505050565b60200151608001516040820152346115c35783917fe01ee6bd3c9de453f0a87c76609e73f19fb4edb39f5be4e8f6cdb7091bd618636040806080940151805190602060018060a01b039101511682519182526020820152a17ff95a9f28b3a584e669e3f18072659bc6054e3c80f6dfd0176dc8893acaff82446020604051858152a1015260405190611470826108b2565b82825260208201908382525182524390526040519061148e826108e3565b82825251809152828255438455604051906020820152602081526114b1816108b2565b8051926001600160401b038411610f9957506114cd8554610878565b601f811161157b575b50602091601f841160011461151b5791839491849394611510575b50501b916000199060031b1c19161790555b38808080808080806113d5565b0151925038806114f1565b919083601f19811687855260208520945b8782821061156257505010611549575b505050811b019055611503565b015160001960f88460031b161c1916905538808061153c565b848601518755909501946020948501948793500161152c565b85835260208320601f850160051c810191602086106115b9575b601f0160051c019085905b8281106115ae5750506114d6565b8481550185906115a0565b9091508190611595565b60405163100960cb60e01b8152601581870152602490fd5b634e487b7160e01b865260218752602486fd5b634e487b7160e01b855260218652602485fd5b60405163100960cb60e01b8152601181870152602490fd5b90506001541438610d24565b634e487b7160e01b875260218852602487fd5b60405163100960cb60e01b8152601081870152602490fd5b60405163100960cb60e01b8152600f81860152602490fdfe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000811000a`,
  BytecodeLen: 6563,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './src/contracts/index.rsh:45:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './src/contracts/index.rsh:87:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './src/contracts/index.rsh:48:41:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Admin": Admin,
  "Auctions_created": Auctions_created,
  "Auctions_ended": Auctions_ended,
  "Auctions_getID": Auctions_getID,
  "Auctions_updateHighestBidder": Auctions_updateHighestBidder
  };
export const _APIs = {
  Auctions: {
    created: Auctions_created,
    ended: Auctions_ended,
    getID: Auctions_getID,
    updateHighestBidder: Auctions_updateHighestBidder
    }
  };
