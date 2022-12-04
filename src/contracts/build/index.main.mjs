// Automatically generated with Reach 0.1.12 (1f68dfdb)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (1f68dfdb)';
export const _backendVersion = 26;

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
    create: [ctc0, ctc1, ctc0, ctc2, ctc3, ctc4, ctc0, ctc5, ctc0],
    end: [ctc0, ctc0, ctc0],
    passAddress: [ctc2]
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
  const ctc7 = stdlib.T_Struct([['id', ctc1], ['contractInfo', ctc2], ['blockCreated', ctc1], ['owner', ctc3], ['title', ctc4], ['description', ctc5], ['price', ctc1], ['tokenContract', ctc6], ['tokenID', ctc1]]);
  const ctc8 = stdlib.T_Tuple([ctc7]);
  const ctc9 = stdlib.T_Struct([['id', ctc1], ['blockEnded', ctc1], ['lastBid', ctc1]]);
  const ctc10 = stdlib.T_Tuple([ctc9]);
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Data({
    Auction_created0_42: ctc8,
    Auction_ended0_42: ctc10,
    Auction_getID0_42: ctc11
    });
  
  
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./src/contracts/index.rsh:46:15:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./src/contracts/index.rsh:46:15:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v252, time: v251, didSend: v22, from: v250 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v252, time: v251, didSend: v22, from: v250 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v250],
    evt_cnt: 0,
    funcNum: 1,
    lct: v251,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./src/contracts/index.rsh:48:15:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v255, time: v254, didSend: v27, from: v253 } = txn2;
      
      ;
      const v257 = await ctc.getContractInfo();
      
      null;
      const v259 = stdlib.checkedBigNumberify('./src/contracts/index.rsh:51:42:decimal', stdlib.UInt_max, '0');
      const v260 = v254;
      
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
  const {data: [], secs: v255, time: v254, didSend: v27, from: v253 } = txn2;
  ;
  const v256 = stdlib.addressEq(v250, v253);
  stdlib.assert(v256, {
    at: './src/contracts/index.rsh:48:15:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Admin'
    });
  const v257 = await ctc.getContractInfo();
  stdlib.protect(ctc0, await interact.deployed(v257), {
    at: './src/contracts/index.rsh:49:32:application',
    fs: ['at ./src/contracts/index.rsh:49:32:application call to [unknown function] (defined at: ./src/contracts/index.rsh:49:32:function exp)', 'at ./src/contracts/index.rsh:49:32:application call to "liftedInteract" (defined at: ./src/contracts/index.rsh:49:32:application)'],
    msg: 'deployed',
    who: 'Admin'
    });
  
  null;
  let v259 = stdlib.checkedBigNumberify('./src/contracts/index.rsh:51:42:decimal', stdlib.UInt_max, '0');
  let v260 = v254;
  
  let txn3 = txn2;
  while (await (async () => {
    
    return true;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc12],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v328], secs: v330, time: v329, didSend: v175, from: v327 } = txn4;
    switch (v328[0]) {
      case 'Auction_created0_42': {
        const v331 = v328[1];
        undefined /* setApiDetails */;
        ;
        const v339 = v331[stdlib.checkedBigNumberify('./src/contracts/index.rsh:58:21:spread', stdlib.UInt_max, '0')];
        const v340 = null;
        await txn4.getOutput('Auction_created', 'v340', ctc0, v340);
        const v356 = v339.id;
        const v357 = v339.contractInfo;
        const v358 = v339.blockCreated;
        const v359 = v339.owner;
        const v360 = v339.title;
        const v361 = v339.description;
        const v362 = v339.price;
        const v363 = v339.tokenContract;
        const v364 = v339.tokenID;
        null;
        const cv259 = v259;
        const cv260 = v329;
        
        v259 = cv259;
        v260 = cv260;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'Auction_ended0_42': {
        const v387 = v328[1];
        undefined /* setApiDetails */;
        ;
        const v422 = v387[stdlib.checkedBigNumberify('./src/contracts/index.rsh:75:21:spread', stdlib.UInt_max, '0')];
        const v423 = null;
        await txn4.getOutput('Auction_ended', 'v423', ctc0, v423);
        const v433 = v422.id;
        const v434 = v422.blockEnded;
        const v435 = v422.lastBid;
        null;
        const cv259 = v259;
        const cv260 = v329;
        
        v259 = cv259;
        v260 = cv260;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'Auction_getID0_42': {
        const v443 = v328[1];
        undefined /* setApiDetails */;
        ;
        await txn4.getOutput('Auction_getID', 'v259', ctc1, v259);
        const v498 = stdlib.safeAdd(v259, stdlib.checkedBigNumberify('./src/contracts/index.rsh:56:44:decimal', stdlib.UInt_max, '1'));
        const cv259 = v498;
        const cv260 = v329;
        
        v259 = cv259;
        v260 = cv260;
        
        txn3 = txn4;
        continue;
        break;
        }
      }
    
    }
  return;
  
  
  
  
  };
export async function _Auction_created4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Auction_created4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Auction_created4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Contract;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '80'));
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Struct([['id', ctc0], ['contractInfo', ctc1], ['blockCreated', ctc0], ['owner', ctc2], ['title', ctc3], ['description', ctc4], ['price', ctc0], ['tokenContract', ctc5], ['tokenID', ctc0]]);
  const ctc7 = stdlib.T_Tuple([ctc6]);
  const ctc8 = stdlib.T_Struct([['id', ctc0], ['blockEnded', ctc0], ['lastBid', ctc0]]);
  const ctc9 = stdlib.T_Tuple([ctc8]);
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Data({
    Auction_created0_42: ctc7,
    Auction_ended0_42: ctc9,
    Auction_getID0_42: ctc10
    });
  const ctc12 = stdlib.T_Null;
  
  
  const [v259] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0]);
  const v280 = stdlib.protect(ctc7, await interact.in(), {
    at: './src/contracts/index.rsh:1:23:application',
    fs: ['at ./src/contracts/index.rsh:58:21:application call to [unknown function] (defined at: ./src/contracts/index.rsh:58:21:function exp)', 'at ./src/contracts/index.rsh:51:41:application call to "runAuction_created0_42" (defined at: ./src/contracts/index.rsh:58:21:function exp)', 'at ./src/contracts/index.rsh:51:41:application call to [unknown function] (defined at: ./src/contracts/index.rsh:51:41:function exp)'],
    msg: 'in',
    who: 'Auction_created'
    });
  const v305 = ['Auction_created0_42', v280];
  
  const txn1 = await (ctc.sendrecv({
    args: [v259, v305],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./src/contracts/index.rsh:58:21:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v328], secs: v330, time: v329, didSend: v175, from: v327 } = txn1;
      
      switch (v328[0]) {
        case 'Auction_created0_42': {
          const v331 = v328[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Auction_created"
            });
          ;
          const v339 = v331[stdlib.checkedBigNumberify('./src/contracts/index.rsh:58:21:spread', stdlib.UInt_max, '0')];
          const v340 = null;
          const v341 = await txn1.getOutput('Auction_created', 'v340', ctc12, v340);
          
          const v356 = v339.id;
          const v357 = v339.contractInfo;
          const v358 = v339.blockCreated;
          const v359 = v339.owner;
          const v360 = v339.title;
          const v361 = v339.description;
          const v362 = v339.price;
          const v363 = v339.tokenContract;
          const v364 = v339.tokenID;
          null;
          const v759 = v259;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Auction_ended0_42': {
          const v387 = v328[1];
          
          break;
          }
        case 'Auction_getID0_42': {
          const v443 = v328[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v328], secs: v330, time: v329, didSend: v175, from: v327 } = txn1;
  switch (v328[0]) {
    case 'Auction_created0_42': {
      const v331 = v328[1];
      undefined /* setApiDetails */;
      ;
      const v339 = v331[stdlib.checkedBigNumberify('./src/contracts/index.rsh:58:21:spread', stdlib.UInt_max, '0')];
      const v340 = null;
      const v341 = await txn1.getOutput('Auction_created', 'v340', ctc12, v340);
      if (v175) {
        stdlib.protect(ctc12, await interact.out(v331, v341), {
          at: './src/contracts/index.rsh:58:22:application',
          fs: ['at ./src/contracts/index.rsh:58:22:application call to [unknown function] (defined at: ./src/contracts/index.rsh:58:22:function exp)', 'at ./src/contracts/index.rsh:59:31:application call to "notify" (defined at: ./src/contracts/index.rsh:58:54:function exp)', 'at ./src/contracts/index.rsh:58:54:application call to [unknown function] (defined at: ./src/contracts/index.rsh:58:54:function exp)'],
          msg: 'out',
          who: 'Auction_created'
          });
        }
      else {
        }
      
      const v356 = v339.id;
      const v357 = v339.contractInfo;
      const v358 = v339.blockCreated;
      const v359 = v339.owner;
      const v360 = v339.title;
      const v361 = v339.description;
      const v362 = v339.price;
      const v363 = v339.tokenContract;
      const v364 = v339.tokenID;
      null;
      const v759 = v259;
      return;
      
      break;
      }
    case 'Auction_ended0_42': {
      const v387 = v328[1];
      return;
      break;
      }
    case 'Auction_getID0_42': {
      const v443 = v328[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Auction_ended4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Auction_ended4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Auction_ended4 expects to receive an interact object as its second argument.`));}
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
  const ctc8 = stdlib.T_Struct([['id', ctc0], ['contractInfo', ctc3], ['blockCreated', ctc0], ['owner', ctc4], ['title', ctc5], ['description', ctc6], ['price', ctc0], ['tokenContract', ctc7], ['tokenID', ctc0]]);
  const ctc9 = stdlib.T_Tuple([ctc8]);
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Data({
    Auction_created0_42: ctc9,
    Auction_ended0_42: ctc2,
    Auction_getID0_42: ctc10
    });
  const ctc12 = stdlib.T_Null;
  
  
  const [v259] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0]);
  const v309 = stdlib.protect(ctc2, await interact.in(), {
    at: './src/contracts/index.rsh:1:23:application',
    fs: ['at ./src/contracts/index.rsh:75:21:application call to [unknown function] (defined at: ./src/contracts/index.rsh:75:21:function exp)', 'at ./src/contracts/index.rsh:51:41:application call to "runAuction_ended0_42" (defined at: ./src/contracts/index.rsh:75:21:function exp)', 'at ./src/contracts/index.rsh:51:41:application call to [unknown function] (defined at: ./src/contracts/index.rsh:51:41:function exp)'],
    msg: 'in',
    who: 'Auction_ended'
    });
  const v322 = ['Auction_ended0_42', v309];
  
  const txn1 = await (ctc.sendrecv({
    args: [v259, v322],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./src/contracts/index.rsh:75:21:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v328], secs: v330, time: v329, didSend: v175, from: v327 } = txn1;
      
      switch (v328[0]) {
        case 'Auction_created0_42': {
          const v331 = v328[1];
          
          break;
          }
        case 'Auction_ended0_42': {
          const v387 = v328[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Auction_ended"
            });
          ;
          const v422 = v387[stdlib.checkedBigNumberify('./src/contracts/index.rsh:75:21:spread', stdlib.UInt_max, '0')];
          const v423 = null;
          const v424 = await txn1.getOutput('Auction_ended', 'v423', ctc12, v423);
          
          const v433 = v422.id;
          const v434 = v422.blockEnded;
          const v435 = v422.lastBid;
          null;
          const v767 = v259;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Auction_getID0_42': {
          const v443 = v328[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v328], secs: v330, time: v329, didSend: v175, from: v327 } = txn1;
  switch (v328[0]) {
    case 'Auction_created0_42': {
      const v331 = v328[1];
      return;
      break;
      }
    case 'Auction_ended0_42': {
      const v387 = v328[1];
      undefined /* setApiDetails */;
      ;
      const v422 = v387[stdlib.checkedBigNumberify('./src/contracts/index.rsh:75:21:spread', stdlib.UInt_max, '0')];
      const v423 = null;
      const v424 = await txn1.getOutput('Auction_ended', 'v423', ctc12, v423);
      if (v175) {
        stdlib.protect(ctc12, await interact.out(v387, v424), {
          at: './src/contracts/index.rsh:75:22:application',
          fs: ['at ./src/contracts/index.rsh:75:22:application call to [unknown function] (defined at: ./src/contracts/index.rsh:75:22:function exp)', 'at ./src/contracts/index.rsh:76:31:application call to "notify" (defined at: ./src/contracts/index.rsh:75:52:function exp)', 'at ./src/contracts/index.rsh:75:52:application call to [unknown function] (defined at: ./src/contracts/index.rsh:75:52:function exp)'],
          msg: 'out',
          who: 'Auction_ended'
          });
        }
      else {
        }
      
      const v433 = v422.id;
      const v434 = v422.blockEnded;
      const v435 = v422.lastBid;
      null;
      const v767 = v259;
      return;
      
      break;
      }
    case 'Auction_getID0_42': {
      const v443 = v328[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Auction_getID4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Auction_getID4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Auction_getID4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Tuple([]);
  const ctc2 = stdlib.T_Contract;
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '80'));
  const ctc6 = stdlib.T_Token;
  const ctc7 = stdlib.T_Struct([['id', ctc0], ['contractInfo', ctc2], ['blockCreated', ctc0], ['owner', ctc3], ['title', ctc4], ['description', ctc5], ['price', ctc0], ['tokenContract', ctc6], ['tokenID', ctc0]]);
  const ctc8 = stdlib.T_Tuple([ctc7]);
  const ctc9 = stdlib.T_Struct([['id', ctc0], ['blockEnded', ctc0], ['lastBid', ctc0]]);
  const ctc10 = stdlib.T_Tuple([ctc9]);
  const ctc11 = stdlib.T_Data({
    Auction_created0_42: ctc8,
    Auction_ended0_42: ctc10,
    Auction_getID0_42: ctc1
    });
  const ctc12 = stdlib.T_Null;
  
  
  const [v259] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0]);
  const v272 = stdlib.protect(ctc1, await interact.in(), {
    at: './src/contracts/index.rsh:1:23:application',
    fs: ['at ./src/contracts/index.rsh:54:21:application call to [unknown function] (defined at: ./src/contracts/index.rsh:54:21:function exp)', 'at ./src/contracts/index.rsh:51:41:application call to "runAuction_getID0_42" (defined at: ./src/contracts/index.rsh:54:21:function exp)', 'at ./src/contracts/index.rsh:51:41:application call to [unknown function] (defined at: ./src/contracts/index.rsh:51:41:function exp)'],
    msg: 'in',
    who: 'Auction_getID'
    });
  const v276 = ['Auction_getID0_42', v272];
  
  const txn1 = await (ctc.sendrecv({
    args: [v259, v276],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./src/contracts/index.rsh:54:21:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v328], secs: v330, time: v329, didSend: v175, from: v327 } = txn1;
      
      switch (v328[0]) {
        case 'Auction_created0_42': {
          const v331 = v328[1];
          
          break;
          }
        case 'Auction_ended0_42': {
          const v387 = v328[1];
          
          break;
          }
        case 'Auction_getID0_42': {
          const v443 = v328[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Auction_getID"
            });
          ;
          const v493 = await txn1.getOutput('Auction_getID', 'v259', ctc0, v259);
          
          const v498 = stdlib.safeAdd(v259, stdlib.checkedBigNumberify('./src/contracts/index.rsh:56:44:decimal', stdlib.UInt_max, '1'));
          const v775 = v498;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v328], secs: v330, time: v329, didSend: v175, from: v327 } = txn1;
  switch (v328[0]) {
    case 'Auction_created0_42': {
      const v331 = v328[1];
      return;
      break;
      }
    case 'Auction_ended0_42': {
      const v387 = v328[1];
      return;
      break;
      }
    case 'Auction_getID0_42': {
      const v443 = v328[1];
      undefined /* setApiDetails */;
      ;
      const v493 = await txn1.getOutput('Auction_getID', 'v259', ctc0, v259);
      if (v175) {
        stdlib.protect(ctc12, await interact.out(v443, v493), {
          at: './src/contracts/index.rsh:54:22:application',
          fs: ['at ./src/contracts/index.rsh:54:22:application call to [unknown function] (defined at: ./src/contracts/index.rsh:54:22:function exp)', 'at ./src/contracts/index.rsh:55:31:application call to "notify" (defined at: ./src/contracts/index.rsh:54:47:function exp)', 'at ./src/contracts/index.rsh:54:47:application call to [unknown function] (defined at: ./src/contracts/index.rsh:54:47:function exp)'],
          msg: 'out',
          who: 'Auction_getID'
          });
        }
      else {
        }
      
      const v498 = stdlib.safeAdd(v259, stdlib.checkedBigNumberify('./src/contracts/index.rsh:56:44:decimal', stdlib.UInt_max, '1'));
      const v775 = v498;
      return;
      
      break;
      }
    }
  
  
  };
export async function Auction_created(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Auction_created expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Auction_created expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Auction_created4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Auction_ended(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Auction_ended expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Auction_ended expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Auction_ended4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Auction_getID(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Auction_getID expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Auction_getID expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Auction_getID4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Auction_created((uint64,uint64,uint64,address,byte[20],byte[80],uint64,uint64,uint64))byte[0]`, `Auction_ended((uint64,uint64,uint64))byte[0]`, `Auction_getID()uint64`],
    pure: [],
    sigs: [`Auction_created((uint64,uint64,uint64,address,byte[20],byte[80],uint64,uint64,uint64))byte[0]`, `Auction_ended((uint64,uint64,uint64))byte[0]`, `Auction_getID()uint64`]
    },
  GlobalNumByteSlice: 2,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `ByAHAAEC2KCoggip2avrDwMEJgIAAQAiNQAxGEECRyhkSSJbNQGBCFs1AjYaABdJQQBSIjUEIzUGSSUMQAAySSEEDEAAFSEEEkQoNf+AAQI0/1CBtAGvUEIASCUSRDYaATX/gAEBNP9QgZwBr1BCADKBxoiIvAQSRDYaATX/KTT/UEIAHjYaAhc1BDYaAzYaARdJIwxAATJJIQUMQAD0IQUSRCEGNAESRDQESSISTDQCEhFEKWRJNQMXNf9JNQU1/oAEoo8F0jT+ULA0/iJVSSMMQABgSSQMQAAgJBJEgAgAAAAAAAABAzT/FlCwNP8WNQc0/yMIMgZCAQJINP5XARg1/TT9NfyACAAAAAAAAAGnsCg1B4AE8HKZ1DT8VwAIUDT8VwgIUDT8VxAIULA0/zIGQgDISDT+VwG0Nf00/TX8gAgAAAAAAAABVLAoNQeABNm5BOs0/FcACFA0/FcICFA0/FcQCFA0/FcYIFA0/Fc4FFA0/FdMUFA0/FecCFA0/FekCFA0/FesCFCwNP8yBkIAaiMSRCM0ARJENARJIhJMNAISEUQpZEk1AzX/gASai5F0sDT/MQASRIAE6zuWhzT/ULAiMgZCADNIgaCNBogAsSI0ARJENARJIhJMNAISEUSABF8Nq/qwMQApSwFXACBnSCM1ATIGNQJCADU1/0k1/hYpSwFXAAhnSCEGNQEyBjUCQgAcMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKDQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCQxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 32,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T8","name":"v792","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T8","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T8","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T6","name":"which","type":"uint8"},{"components":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address payable","name":"contractInfo","type":"address"},{"internalType":"uint256","name":"blockCreated","type":"uint256"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"bytes20","name":"title","type":"bytes20"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes16","name":"elem2","type":"bytes16"}],"internalType":"struct T0","name":"description","type":"tuple"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"address payable","name":"tokenContract","type":"address"},{"internalType":"uint256","name":"tokenID","type":"uint256"}],"internalType":"struct T1","name":"elem0","type":"tuple"}],"internalType":"struct T4","name":"_Auction_created0_42","type":"tuple"},{"components":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"blockEnded","type":"uint256"},{"internalType":"uint256","name":"lastBid","type":"uint256"}],"internalType":"struct T2","name":"elem0","type":"tuple"}],"internalType":"struct T5","name":"_Auction_ended0_42","type":"tuple"},{"internalType":"bool","name":"_Auction_getID0_42","type":"bool"}],"internalType":"struct T6","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T7","name":"_a","type":"tuple"}],"name":"_reach_e3","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"}],"name":"_reach_oe_v259","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v340","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v423","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"},{"indexed":false,"internalType":"address payable","name":"v1","type":"address"},{"indexed":false,"internalType":"uint256","name":"v2","type":"uint256"},{"indexed":false,"internalType":"address payable","name":"v3","type":"address"},{"indexed":false,"internalType":"bytes20","name":"v4","type":"bytes20"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes16","name":"elem2","type":"bytes16"}],"indexed":false,"internalType":"struct T0","name":"v5","type":"tuple"},{"indexed":false,"internalType":"uint256","name":"v6","type":"uint256"},{"indexed":false,"internalType":"address payable","name":"v7","type":"address"},{"indexed":false,"internalType":"uint256","name":"v8","type":"uint256"}],"name":"create","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"v2","type":"uint256"}],"name":"end","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address payable","name":"v0","type":"address"}],"name":"passAddress","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address payable","name":"contractInfo","type":"address"},{"internalType":"uint256","name":"blockCreated","type":"uint256"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"bytes20","name":"title","type":"bytes20"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes16","name":"elem2","type":"bytes16"}],"internalType":"struct T0","name":"description","type":"tuple"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"address payable","name":"tokenContract","type":"address"},{"internalType":"uint256","name":"tokenID","type":"uint256"}],"internalType":"struct T1","name":"v777","type":"tuple"}],"name":"Auction_created","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"blockEnded","type":"uint256"},{"internalType":"uint256","name":"lastBid","type":"uint256"}],"internalType":"struct T2","name":"v782","type":"tuple"}],"name":"Auction_ended","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Auction_getID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T8","name":"v794","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T6","name":"which","type":"uint8"},{"components":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address payable","name":"contractInfo","type":"address"},{"internalType":"uint256","name":"blockCreated","type":"uint256"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"bytes20","name":"title","type":"bytes20"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes16","name":"elem2","type":"bytes16"}],"internalType":"struct T0","name":"description","type":"tuple"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"address payable","name":"tokenContract","type":"address"},{"internalType":"uint256","name":"tokenID","type":"uint256"}],"internalType":"struct T1","name":"elem0","type":"tuple"}],"internalType":"struct T4","name":"_Auction_created0_42","type":"tuple"},{"components":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"blockEnded","type":"uint256"},{"internalType":"uint256","name":"lastBid","type":"uint256"}],"internalType":"struct T2","name":"elem0","type":"tuple"}],"internalType":"struct T5","name":"_Auction_ended0_42","type":"tuple"},{"internalType":"bool","name":"_Auction_getID0_42","type":"bool"}],"internalType":"struct T6","name":"elem1","type":"tuple"}],"internalType":"struct T7","name":"v798","type":"tuple"}],"name":"_reachp_3","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x60806200164890813803601f1980601f83011683019360018060401b039284861084871117620002d05780859260409788528339602094859181010312620002e6578451906200004f82620002eb565b518152436003558451608081019080821085831117620002d0576060918752600091818380935282888201528289820152015260049160ff835416620002b9577f87b51d26f290dc1fb530aed45f92ac77d813efb7cccb67b06c40d875955dde87878051338152835189820152a1518015908115620002ac575b50156200029557346200027e578551620000e381620002eb565b3390526001948582554386558651923382850152818452878401848110878211176200026b57885283519586116200025857600254908782811c921680156200024d575b838310146200023a5750601f8111620001ee575b508093601f861160011462000186575050918394918493946200017a575b50501b916000199060031b1c1916176002555b516113409081620003088239f35b01519250388062000159565b600283528183209493928692918316915b88838310620001d35750505010620001b9575b505050811b016002556200016c565b015160001960f88460031b161c19169055388080620001aa565b85870151885590960195948501948793509081019062000197565b60028352818320601f870160051c8101918388106200022f575b601f0160051c019087905b828110620002235750506200013b565b84815501879062000213565b909150819062000208565b634e487b7160e01b845260229052602483fd5b91607f169162000127565b634e487b7160e01b835260419052602482fd5b634e487b7160e01b845260418252602484fd5b855163100960cb60e01b8152600981840152602490fd5b855163100960cb60e01b8152600881840152602490fd5b90506001541438620000c9565b865163100960cb60e01b8152600781850152602490fd5b634e487b7160e01b600052604160045260246000fd5b600080fd5b602081019081106001600160401b03821117620002d05760405256fe6040608081526004908136101561001d575b5050361561001b57005b005b600090813560e01c8063118acdf01461069c5780631e93b0f11461067e5780632a69d37f14610636578063453a05d51461059a578063573b8510146102df57806383230757146102c1578063ab53f2c6146102565763e4de3c39146100825750610011565b61022036600319011261025257610097610965565b81516100a281610800565b8435815261020036602319011261023b5782519460808601906001600160401b0382118783101761023f57508352602435600381101561022b57855261016036604319011261023b578251946100f786610831565b83519561010387610867565b6044358752606435966001600160a01b03808916890361022f57602098898301526084358783015260a435818116810361023757606083015260c4356001600160601b03198116810361023757608083015260603660e319011261022f57865161016c81610883565b60e4358152610104358a820152610124356001600160801b031981168103610233578882015260a08301526101443560c083015261016435908116810361022f5760e0820152610184356101008201528152818701526060366101a319011261022b5783516101da81610831565b84516101e581610883565b6101a43581526101c435888201526101e43586820152815284820152610204358015158103610227576060820152858201526102219190610abb565b51908152f35b8580fd5b8480fd5b8780fd5b8980fd5b8880fd5b8380fd5b634e487b7160e01b865260419052602485fd5b5080fd5b5034610252578160031936011261025257815461027161089e565b91805193849283526020828185015284518093850152815b8381106102aa57505060608094508284010152601f80199101168101030190f35b808601820151878201606001528694508101610289565b50346102525781600319360112610252576020906001549051908152f35b5060209283600319360112610596576102f6610965565b5081519061030382610831565b8035825260ff81541661057f577fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee81596838051338152845188820152a1600191828554036105685761035161089e565b8681805181010312610227578685519161036a83610831565b01516001600160a01b039290838116810361022f57825251801590811561055d575b5015610546573461052f57338282511603610518577fd5c60b6613e142bc2797d461a5a06c51743f26aa089eb10362f1768d1910f76c91879151168551908152a182516103d881610800565b84815243868201528351906103ec82610831565b858252518091528185554383558351908682015285815261040c81610800565b8051916001600160401b03831161023f57506104296002546107c6565b601f81116104d1575b508590601f8311600114610470579282939183928794610465575b50501b916000199060031b1c19161760025551908152f35b01519250388061044d565b60028652868620919083601f198116885b8a888383106104ba57505050106104a1575b505050811b01600255610221565b015160001960f88460031b161c19169055388080610493565b868601518855909601959485019487935001610481565b60028652868620601f840160051c81019188851061050e575b601f0160051c019084905b828110610503575050610432565b8781550184906104f5565b90915081906104ea565b845163100960cb60e01b8152600e81850152602490fd5b845163100960cb60e01b8152600d81850152602490fd5b845163100960cb60e01b8152600c81850152602490fd5b90508454143861038c565b835163100960cb60e01b8152600b81840152602490fd5b602490600a84519163100960cb60e01b8352820152fd5b8280fd5b508260603660031901126105965760209261062b83926105b8610965565b9283918551906105c782610883565b358152602435888201526044358682015285516105e381610800565b86516105ee81610831565b6105f661098a565b8152815288810191610606610a13565b8352815152600182515251868251015261061e610a54565b9182525187820152610abb565b015115159051908152f35b5081600319360112610252576060602092610675610652610965565b809261065c610a54565b878101906002825152511515868251015261061e610a54565b01519051908152f35b50346102525781600319360112610252576020906003549051908152f35b50906101603660031901126107c3576106b3610965565b908251936106c085610867565b358452602435936001600160a01b038086168603610596576020958683015260443585830152606435818116810361023b5760608301526084356001600160601b03198116810361023b57608083015260603660a319011261059657845161072781610883565b60a435815260c4358782015260e4356001600160801b03198116810361022b578682015260a08301526101043560c08301526101243590811681036105965792809282879560e061062b95015261014435610100820152865161078981610800565b6107916109a9565b81528681019161079f610a13565b8352815152828251525186825101526107b6610a54565b9182525185820152610abb565b80fd5b90600182811c921680156107f6575b60208310146107e057565b634e487b7160e01b600052602260045260246000fd5b91607f16916107d5565b604081019081106001600160401b0382111761081b57604052565b634e487b7160e01b600052604160045260246000fd5b602081019081106001600160401b0382111761081b57604052565b608081019081106001600160401b0382111761081b57604052565b61012081019081106001600160401b0382111761081b57604052565b606081019081106001600160401b0382111761081b57604052565b6040519060006002546108b0816107c6565b80855260019180831690811561094657506001146108ee575b5050829003601f01601f191682016001600160401b0381118382101761081b57604052565b600260009081526020935091837f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace5b838510610932575050505083010138806108c9565b80548886018301529301928490820161091d565b919250506020925060ff191682850152151560051b83010138806108c9565b604051906109728261084c565b60006060838281528260208201528260408201520152565b6040519061099782610883565b60006040838281528260208201520152565b604051906109b682610831565b6040518261012082016001600160401b0381118382101761081b5760405260008083528060208401528060408401528060608401528060808401526109f961098a565b60a08401528060c08401528060e084015261010083015252565b60405190610a208261084c565b6000606083828152610a306109a9565b6020820152604051610a4181610831565b610a4961098a565b815260408201520152565b60405190610a6182610800565b81600081526020610a70610a13565b910152565b80518252602080820151908301526040908101516001600160801b031916910152565b516003811015610aa55790565b634e487b7160e01b600052602160045260246000fd5b91906040908151610acb81610800565b610ad36109a9565b81526020928382018151610ae681610831565b610aee61098a565b8152815260049360ff85541661131c57825133815288518782015286890180519081519660039788811015611307579084939291888c96015284830151519586928351956060968782015286600160a01b6001900396878a8801511660808401528c87015160a084015287828801511660c08401528c600160601b60019003199a8b60808a01511660e086015260a0890151610100998a91828801610b9291610a75565b60c001519d6101609e8f8801528b60e08201511661018088015201516101a086015281830151519081516101c08701528101516101e08601520151610200840152015115156102208201526102407feec6299c37698559f83de01d620c1bd3716a8f1b7cd95cf28e44bfe0b0cb19c791a16000988c8a54036112f0578d9e9f610c1f9e9a9b9c9d9e61089e565b9a8b8051810103126112ec578f8d519b610c388d610831565b01518b525180159081156112e0575b50156112c957610c578251610a98565b8d8110156112b657610eab5750518d0151825234610e945791610d1c8d94928a867f7c4e9a6377e029a4bd2e2c36cafcba7d9e30818d06755bf6629327246cf5c4619a9998967f3853f6a6c5a307b784c1498b7434681bd6889e0b8f7976b975c4bad6718b54e98f839051858152a101525151938b855197858888015116928288015187828a0151169260808a0151169360a08a0151958860c08c01519a60e08d0151169b01519b82519d8e528d01528b0152890152608088015260a0870190610a75565b840152610120830152610140820152a1825190610d3882610800565b82825286820190838252518252439052825190610d5482610831565b82825251809152848255600192438455519086820152858152610d7681610800565b8051946001600160401b038611610e815750610d936002546107c6565b601f8111610e3a575b508591601f8611600114610dd4579495508592919083610dc9575b50501b92600019911b1c191617600255565b015193503880610db7565b6002815286812093969394938691601f198316915b89838310610e205750505010610e06575b50505050811b01600255565b01519060f884600019921b161c1916905538808080610dfa565b858701518955909701969485019488935090810190610de9565b60028352868320601f870160051c810191888810610e77575b601f0160051c019084905b828110610e6c575050610d9c565b848155018490610e5e565b9091508190610e53565b634e487b7160e01b835260419052602482fd5b895163100960cb60e01b81526012818e0152602490fd5b959d9c9b9a96509897965092505050610ec48651610a98565b95878710156112a35760019687036110985792809495969798999a93510151825234611081579085847f8ae1d12745070499deb90f74dbda066d3ebb9066dc64fa2d22e24615fabfb34c94937f45006809db8d3c1a61c1d6e30a47b2aaa121ea21557005eb3ac154d2af71ae738d8351858152a101525151805190848b8201519101519085519283528b83015284820152a1805191610f6283610800565b83835287830190848252518352439052805191610f7e83610831565b83835251809252858355438455519086820152858152610f9d81610800565b8051946001600160401b038611610e815750610fba6002546107c6565b601f811161103a575b508591601f8611600114610fef579495508592919083610dc95750501b92600019911b1c191617600255565b6002815286812093969394938691601f198316915b898383106110205750505010610e065750505050811b01600255565b858701518955909701969485019488935090810190611004565b60028352868320601f870160051c810191888810611077575b601f0160051c019084905b82811061106c575050610fc3565b84815501849061105e565b9091508190611053565b835163100960cb60e01b81526013818b0152602490fd5b6110a491925051610a98565b98868a1015611290576002809a146110c3575b50505050505050505050565b34611279577ff8d832844526b5930fd64420e1c751cc36d7e3179d9b78dc447050eae33d81b68985518551908152a1835191015280519161110383610800565b83835287830190848252518581019081811161126657811061022b57835243905280519161113083610831565b8383525180925285835543845551908682015285815261114f81610800565b8051946001600160401b038611610e81575061116b87546107c6565b601f8111611220575b508591601f86116001146111b95794955085929190836111ae575b50501b92600019911b1c19161790555b388080808080808080806110b7565b01519350388061118f565b87815286812093969394938691601f198316915b8983831061120657505050106111ec575b50505050811b01905561119f565b01519060f884600019921b161c19169055388080806111de565b8587015189559097019694850194889350908101906111cd565b878352868320601f870160051c81019188881061125c575b601f0160051c019084905b828110611251575050611174565b848155018490611243565b9091508190611238565b634e487b7160e01b865260118952602486fd5b825163100960cb60e01b81526014818a0152602490fd5b634e487b7160e01b855260218852602485fd5b634e487b7160e01b865260218952602486fd5b634e487b7160e01b8c5260218f5260248cfd5b60248e60118e519163100960cb60e01b8352820152fd5b90506001541438610c47565b8b80fd5b8a5163100960cb60e01b81526010818f0152602490fd5b60218a634e487b7160e01b6000525260246000fd5b825163100960cb60e01b8152600f81870152602490fdfea164736f6c6343000810000a`,
  BytecodeLen: 5704,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './src/contracts/index.rsh:47:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './src/contracts/index.rsh:86:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './src/contracts/index.rsh:51:41:after expr stmt semicolon',
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
  "Auction_created": Auction_created,
  "Auction_ended": Auction_ended,
  "Auction_getID": Auction_getID
  };
export const _APIs = {
  Auction: {
    created: Auction_created,
    ended: Auction_ended,
    getID: Auction_getID
    }
  };
