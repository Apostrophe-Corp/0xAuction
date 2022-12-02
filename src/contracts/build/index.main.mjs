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
    create: [ctc0, ctc1, ctc0, ctc2, ctc3, ctc4, ctc0, ctc5],
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
  const ctc7 = stdlib.T_Struct([['id', ctc1], ['contractInfo', ctc2], ['blockCreated', ctc1], ['owner', ctc3], ['title', ctc4], ['description', ctc5], ['price', ctc1], ['tokenId', ctc6]]);
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
    lct: stdlib.checkedBigNumberify('./src/contracts/index.rsh:45:15:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./src/contracts/index.rsh:45:15:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v247, time: v246, didSend: v22, from: v245 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v247, time: v246, didSend: v22, from: v245 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v245],
    evt_cnt: 0,
    funcNum: 1,
    lct: v246,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./src/contracts/index.rsh:47:15:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v250, time: v249, didSend: v27, from: v248 } = txn2;
      
      ;
      const v252 = await ctc.getContractInfo();
      
      null;
      const v254 = stdlib.checkedBigNumberify('./src/contracts/index.rsh:50:42:decimal', stdlib.UInt_max, '0');
      const v255 = v249;
      
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
  const {data: [], secs: v250, time: v249, didSend: v27, from: v248 } = txn2;
  ;
  const v251 = stdlib.addressEq(v245, v248);
  stdlib.assert(v251, {
    at: './src/contracts/index.rsh:47:15:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Admin'
    });
  const v252 = await ctc.getContractInfo();
  stdlib.protect(ctc0, await interact.deployed(v252), {
    at: './src/contracts/index.rsh:48:32:application',
    fs: ['at ./src/contracts/index.rsh:48:32:application call to [unknown function] (defined at: ./src/contracts/index.rsh:48:32:function exp)', 'at ./src/contracts/index.rsh:48:32:application call to "liftedInteract" (defined at: ./src/contracts/index.rsh:48:32:application)'],
    msg: 'deployed',
    who: 'Admin'
    });
  
  null;
  let v254 = stdlib.checkedBigNumberify('./src/contracts/index.rsh:50:42:decimal', stdlib.UInt_max, '0');
  let v255 = v249;
  
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
    const {data: [v321], secs: v323, time: v322, didSend: v172, from: v320 } = txn4;
    switch (v321[0]) {
      case 'Auction_created0_42': {
        const v324 = v321[1];
        undefined /* setApiDetails */;
        ;
        const v332 = v324[stdlib.checkedBigNumberify('./src/contracts/index.rsh:57:21:spread', stdlib.UInt_max, '0')];
        const v333 = null;
        await txn4.getOutput('Auction_created', 'v333', ctc0, v333);
        const v348 = v332.id;
        const v349 = v332.contractInfo;
        const v350 = v332.blockCreated;
        const v351 = v332.owner;
        const v352 = v332.title;
        const v353 = v332.description;
        const v354 = v332.price;
        const v355 = v332.tokenId;
        null;
        const cv254 = v254;
        const cv255 = v322;
        
        v254 = cv254;
        v255 = cv255;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'Auction_ended0_42': {
        const v378 = v321[1];
        undefined /* setApiDetails */;
        ;
        const v411 = v378[stdlib.checkedBigNumberify('./src/contracts/index.rsh:73:21:spread', stdlib.UInt_max, '0')];
        const v412 = null;
        await txn4.getOutput('Auction_ended', 'v412', ctc0, v412);
        const v422 = v411.id;
        const v423 = v411.blockEnded;
        const v424 = v411.lastBid;
        null;
        const cv254 = v254;
        const cv255 = v322;
        
        v254 = cv254;
        v255 = cv255;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'Auction_getID0_42': {
        const v432 = v321[1];
        undefined /* setApiDetails */;
        ;
        await txn4.getOutput('Auction_getID', 'v254', ctc1, v254);
        const v485 = stdlib.safeAdd(v254, stdlib.checkedBigNumberify('./src/contracts/index.rsh:55:44:decimal', stdlib.UInt_max, '1'));
        const cv254 = v485;
        const cv255 = v322;
        
        v254 = cv254;
        v255 = cv255;
        
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
  const ctc6 = stdlib.T_Struct([['id', ctc0], ['contractInfo', ctc1], ['blockCreated', ctc0], ['owner', ctc2], ['title', ctc3], ['description', ctc4], ['price', ctc0], ['tokenId', ctc5]]);
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
  
  
  const [v254] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0]);
  const v275 = stdlib.protect(ctc7, await interact.in(), {
    at: './src/contracts/index.rsh:1:23:application',
    fs: ['at ./src/contracts/index.rsh:57:21:application call to [unknown function] (defined at: ./src/contracts/index.rsh:57:21:function exp)', 'at ./src/contracts/index.rsh:50:41:application call to "runAuction_created0_42" (defined at: ./src/contracts/index.rsh:57:21:function exp)', 'at ./src/contracts/index.rsh:50:41:application call to [unknown function] (defined at: ./src/contracts/index.rsh:50:41:function exp)'],
    msg: 'in',
    who: 'Auction_created'
    });
  const v298 = ['Auction_created0_42', v275];
  
  const txn1 = await (ctc.sendrecv({
    args: [v254, v298],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./src/contracts/index.rsh:57:21:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v321], secs: v323, time: v322, didSend: v172, from: v320 } = txn1;
      
      switch (v321[0]) {
        case 'Auction_created0_42': {
          const v324 = v321[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Auction_created"
            });
          ;
          const v332 = v324[stdlib.checkedBigNumberify('./src/contracts/index.rsh:57:21:spread', stdlib.UInt_max, '0')];
          const v333 = null;
          const v334 = await txn1.getOutput('Auction_created', 'v333', ctc12, v333);
          
          const v348 = v332.id;
          const v349 = v332.contractInfo;
          const v350 = v332.blockCreated;
          const v351 = v332.owner;
          const v352 = v332.title;
          const v353 = v332.description;
          const v354 = v332.price;
          const v355 = v332.tokenId;
          null;
          const v746 = v254;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Auction_ended0_42': {
          const v378 = v321[1];
          
          break;
          }
        case 'Auction_getID0_42': {
          const v432 = v321[1];
          
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
  const {data: [v321], secs: v323, time: v322, didSend: v172, from: v320 } = txn1;
  switch (v321[0]) {
    case 'Auction_created0_42': {
      const v324 = v321[1];
      undefined /* setApiDetails */;
      ;
      const v332 = v324[stdlib.checkedBigNumberify('./src/contracts/index.rsh:57:21:spread', stdlib.UInt_max, '0')];
      const v333 = null;
      const v334 = await txn1.getOutput('Auction_created', 'v333', ctc12, v333);
      if (v172) {
        stdlib.protect(ctc12, await interact.out(v324, v334), {
          at: './src/contracts/index.rsh:57:22:application',
          fs: ['at ./src/contracts/index.rsh:57:22:application call to [unknown function] (defined at: ./src/contracts/index.rsh:57:22:function exp)', 'at ./src/contracts/index.rsh:58:31:application call to "notify" (defined at: ./src/contracts/index.rsh:57:54:function exp)', 'at ./src/contracts/index.rsh:57:54:application call to [unknown function] (defined at: ./src/contracts/index.rsh:57:54:function exp)'],
          msg: 'out',
          who: 'Auction_created'
          });
        }
      else {
        }
      
      const v348 = v332.id;
      const v349 = v332.contractInfo;
      const v350 = v332.blockCreated;
      const v351 = v332.owner;
      const v352 = v332.title;
      const v353 = v332.description;
      const v354 = v332.price;
      const v355 = v332.tokenId;
      null;
      const v746 = v254;
      return;
      
      break;
      }
    case 'Auction_ended0_42': {
      const v378 = v321[1];
      return;
      break;
      }
    case 'Auction_getID0_42': {
      const v432 = v321[1];
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
  const ctc8 = stdlib.T_Struct([['id', ctc0], ['contractInfo', ctc3], ['blockCreated', ctc0], ['owner', ctc4], ['title', ctc5], ['description', ctc6], ['price', ctc0], ['tokenId', ctc7]]);
  const ctc9 = stdlib.T_Tuple([ctc8]);
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Data({
    Auction_created0_42: ctc9,
    Auction_ended0_42: ctc2,
    Auction_getID0_42: ctc10
    });
  const ctc12 = stdlib.T_Null;
  
  
  const [v254] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0]);
  const v302 = stdlib.protect(ctc2, await interact.in(), {
    at: './src/contracts/index.rsh:1:23:application',
    fs: ['at ./src/contracts/index.rsh:73:21:application call to [unknown function] (defined at: ./src/contracts/index.rsh:73:21:function exp)', 'at ./src/contracts/index.rsh:50:41:application call to "runAuction_ended0_42" (defined at: ./src/contracts/index.rsh:73:21:function exp)', 'at ./src/contracts/index.rsh:50:41:application call to [unknown function] (defined at: ./src/contracts/index.rsh:50:41:function exp)'],
    msg: 'in',
    who: 'Auction_ended'
    });
  const v315 = ['Auction_ended0_42', v302];
  
  const txn1 = await (ctc.sendrecv({
    args: [v254, v315],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./src/contracts/index.rsh:73:21:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v321], secs: v323, time: v322, didSend: v172, from: v320 } = txn1;
      
      switch (v321[0]) {
        case 'Auction_created0_42': {
          const v324 = v321[1];
          
          break;
          }
        case 'Auction_ended0_42': {
          const v378 = v321[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Auction_ended"
            });
          ;
          const v411 = v378[stdlib.checkedBigNumberify('./src/contracts/index.rsh:73:21:spread', stdlib.UInt_max, '0')];
          const v412 = null;
          const v413 = await txn1.getOutput('Auction_ended', 'v412', ctc12, v412);
          
          const v422 = v411.id;
          const v423 = v411.blockEnded;
          const v424 = v411.lastBid;
          null;
          const v754 = v254;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Auction_getID0_42': {
          const v432 = v321[1];
          
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
  const {data: [v321], secs: v323, time: v322, didSend: v172, from: v320 } = txn1;
  switch (v321[0]) {
    case 'Auction_created0_42': {
      const v324 = v321[1];
      return;
      break;
      }
    case 'Auction_ended0_42': {
      const v378 = v321[1];
      undefined /* setApiDetails */;
      ;
      const v411 = v378[stdlib.checkedBigNumberify('./src/contracts/index.rsh:73:21:spread', stdlib.UInt_max, '0')];
      const v412 = null;
      const v413 = await txn1.getOutput('Auction_ended', 'v412', ctc12, v412);
      if (v172) {
        stdlib.protect(ctc12, await interact.out(v378, v413), {
          at: './src/contracts/index.rsh:73:22:application',
          fs: ['at ./src/contracts/index.rsh:73:22:application call to [unknown function] (defined at: ./src/contracts/index.rsh:73:22:function exp)', 'at ./src/contracts/index.rsh:74:31:application call to "notify" (defined at: ./src/contracts/index.rsh:73:52:function exp)', 'at ./src/contracts/index.rsh:73:52:application call to [unknown function] (defined at: ./src/contracts/index.rsh:73:52:function exp)'],
          msg: 'out',
          who: 'Auction_ended'
          });
        }
      else {
        }
      
      const v422 = v411.id;
      const v423 = v411.blockEnded;
      const v424 = v411.lastBid;
      null;
      const v754 = v254;
      return;
      
      break;
      }
    case 'Auction_getID0_42': {
      const v432 = v321[1];
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
  const ctc7 = stdlib.T_Struct([['id', ctc0], ['contractInfo', ctc2], ['blockCreated', ctc0], ['owner', ctc3], ['title', ctc4], ['description', ctc5], ['price', ctc0], ['tokenId', ctc6]]);
  const ctc8 = stdlib.T_Tuple([ctc7]);
  const ctc9 = stdlib.T_Struct([['id', ctc0], ['blockEnded', ctc0], ['lastBid', ctc0]]);
  const ctc10 = stdlib.T_Tuple([ctc9]);
  const ctc11 = stdlib.T_Data({
    Auction_created0_42: ctc8,
    Auction_ended0_42: ctc10,
    Auction_getID0_42: ctc1
    });
  const ctc12 = stdlib.T_Null;
  
  
  const [v254] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0]);
  const v267 = stdlib.protect(ctc1, await interact.in(), {
    at: './src/contracts/index.rsh:1:23:application',
    fs: ['at ./src/contracts/index.rsh:53:21:application call to [unknown function] (defined at: ./src/contracts/index.rsh:53:21:function exp)', 'at ./src/contracts/index.rsh:50:41:application call to "runAuction_getID0_42" (defined at: ./src/contracts/index.rsh:53:21:function exp)', 'at ./src/contracts/index.rsh:50:41:application call to [unknown function] (defined at: ./src/contracts/index.rsh:50:41:function exp)'],
    msg: 'in',
    who: 'Auction_getID'
    });
  const v271 = ['Auction_getID0_42', v267];
  
  const txn1 = await (ctc.sendrecv({
    args: [v254, v271],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./src/contracts/index.rsh:53:21:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v321], secs: v323, time: v322, didSend: v172, from: v320 } = txn1;
      
      switch (v321[0]) {
        case 'Auction_created0_42': {
          const v324 = v321[1];
          
          break;
          }
        case 'Auction_ended0_42': {
          const v378 = v321[1];
          
          break;
          }
        case 'Auction_getID0_42': {
          const v432 = v321[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Auction_getID"
            });
          ;
          const v480 = await txn1.getOutput('Auction_getID', 'v254', ctc0, v254);
          
          const v485 = stdlib.safeAdd(v254, stdlib.checkedBigNumberify('./src/contracts/index.rsh:55:44:decimal', stdlib.UInt_max, '1'));
          const v762 = v485;
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
  const {data: [v321], secs: v323, time: v322, didSend: v172, from: v320 } = txn1;
  switch (v321[0]) {
    case 'Auction_created0_42': {
      const v324 = v321[1];
      return;
      break;
      }
    case 'Auction_ended0_42': {
      const v378 = v321[1];
      return;
      break;
      }
    case 'Auction_getID0_42': {
      const v432 = v321[1];
      undefined /* setApiDetails */;
      ;
      const v480 = await txn1.getOutput('Auction_getID', 'v254', ctc0, v254);
      if (v172) {
        stdlib.protect(ctc12, await interact.out(v432, v480), {
          at: './src/contracts/index.rsh:53:22:application',
          fs: ['at ./src/contracts/index.rsh:53:22:application call to [unknown function] (defined at: ./src/contracts/index.rsh:53:22:function exp)', 'at ./src/contracts/index.rsh:54:31:application call to "notify" (defined at: ./src/contracts/index.rsh:53:47:function exp)', 'at ./src/contracts/index.rsh:53:47:application call to [unknown function] (defined at: ./src/contracts/index.rsh:53:47:function exp)'],
          msg: 'out',
          who: 'Auction_getID'
          });
        }
      else {
        }
      
      const v485 = stdlib.safeAdd(v254, stdlib.checkedBigNumberify('./src/contracts/index.rsh:55:44:decimal', stdlib.UInt_max, '1'));
      const v762 = v485;
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
    impure: [`Auction_created((uint64,uint64,uint64,address,byte[20],byte[80],uint64,uint64))byte[0]`, `Auction_ended((uint64,uint64,uint64))byte[0]`, `Auction_getID()uint64`],
    pure: [],
    sigs: [`Auction_created((uint64,uint64,uint64,address,byte[20],byte[80],uint64,uint64))byte[0]`, `Auction_ended((uint64,uint64,uint64))byte[0]`, `Auction_getID()uint64`]
    },
  GlobalNumByteSlice: 2,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `ByAHAAEC+7bMrwup2avrDwMEJgIAAQAiNQAxGEECQShkSSJbNQGBCFs1AjYaABdJQQBSIjUEIzUGSSUMQAArSSEEDEAAFSEEEkQoNf+AAQI0/1CBrAGvUEIASCUSRDYaATX/KTT/UEIAOYHYoKiCCBJENhoBNf+AAQE0/1CBlAGvUEIAHjYaAhc1BDYaAzYaARdJIwxAASxJIQUMQADuIQUSRCEGNAESRDQESSISTDQCEhFEKWRJNQMXNf9JNQU1/oAELQ5rfzT+ULA0/iJVSSMMQABgSSQMQAAgJBJEgAgAAAAAAAAA/jT/FlCwNP8WNQc0/yMIMgZCAPxINP5XARg1/TT9NfyACAAAAAAAAAGcsCg1B4AE8HKZ1DT8VwAIUDT8VwgIUDT8VxAIULA0/zIGQgDCSDT+VwGsNf00/TX8gAgAAAAAAAABTbAoNQeABFqNnV80/FcACFA0/FcICFA0/FcQCFA0/FcYIFA0/Fc4FFA0/FdMUFA0/FecCFA0/FekCFCwNP8yBkIAaiMSRCM0ARJENARJIhJMNAISEUQpZEk1AzX/gASai5F0sDT/MQASRIAE6zuWhzT/ULAiMgZCADNIgaCNBogAsSI0ARJENARJIhJMNAISEUSABF8Nq/qwMQApSwFXACBnSCM1ATIGNQJCADU1/0k1/hYpSwFXAAhnSCEGNQEyBjUCQgAcMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKDQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCQxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
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
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T8","name":"v779","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T8","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T8","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T6","name":"which","type":"uint8"},{"components":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address payable","name":"contractInfo","type":"address"},{"internalType":"uint256","name":"blockCreated","type":"uint256"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"bytes20","name":"title","type":"bytes20"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes16","name":"elem2","type":"bytes16"}],"internalType":"struct T0","name":"description","type":"tuple"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"address payable","name":"tokenId","type":"address"}],"internalType":"struct T1","name":"elem0","type":"tuple"}],"internalType":"struct T4","name":"_Auction_created0_42","type":"tuple"},{"components":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"blockEnded","type":"uint256"},{"internalType":"uint256","name":"lastBid","type":"uint256"}],"internalType":"struct T2","name":"elem0","type":"tuple"}],"internalType":"struct T5","name":"_Auction_ended0_42","type":"tuple"},{"internalType":"bool","name":"_Auction_getID0_42","type":"bool"}],"internalType":"struct T6","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T7","name":"_a","type":"tuple"}],"name":"_reach_e3","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"}],"name":"_reach_oe_v254","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v333","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v412","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"},{"indexed":false,"internalType":"address payable","name":"v1","type":"address"},{"indexed":false,"internalType":"uint256","name":"v2","type":"uint256"},{"indexed":false,"internalType":"address payable","name":"v3","type":"address"},{"indexed":false,"internalType":"bytes20","name":"v4","type":"bytes20"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes16","name":"elem2","type":"bytes16"}],"indexed":false,"internalType":"struct T0","name":"v5","type":"tuple"},{"indexed":false,"internalType":"uint256","name":"v6","type":"uint256"},{"indexed":false,"internalType":"address payable","name":"v7","type":"address"}],"name":"create","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"v2","type":"uint256"}],"name":"end","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address payable","name":"v0","type":"address"}],"name":"passAddress","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address payable","name":"contractInfo","type":"address"},{"internalType":"uint256","name":"blockCreated","type":"uint256"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"bytes20","name":"title","type":"bytes20"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes16","name":"elem2","type":"bytes16"}],"internalType":"struct T0","name":"description","type":"tuple"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"address payable","name":"tokenId","type":"address"}],"internalType":"struct T1","name":"v764","type":"tuple"}],"name":"Auction_created","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"blockEnded","type":"uint256"},{"internalType":"uint256","name":"lastBid","type":"uint256"}],"internalType":"struct T2","name":"v769","type":"tuple"}],"name":"Auction_ended","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Auction_getID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T8","name":"v781","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T6","name":"which","type":"uint8"},{"components":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address payable","name":"contractInfo","type":"address"},{"internalType":"uint256","name":"blockCreated","type":"uint256"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"bytes20","name":"title","type":"bytes20"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes16","name":"elem2","type":"bytes16"}],"internalType":"struct T0","name":"description","type":"tuple"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"address payable","name":"tokenId","type":"address"}],"internalType":"struct T1","name":"elem0","type":"tuple"}],"internalType":"struct T4","name":"_Auction_created0_42","type":"tuple"},{"components":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"blockEnded","type":"uint256"},{"internalType":"uint256","name":"lastBid","type":"uint256"}],"internalType":"struct T2","name":"elem0","type":"tuple"}],"internalType":"struct T5","name":"_Auction_ended0_42","type":"tuple"},{"internalType":"bool","name":"_Auction_getID0_42","type":"bool"}],"internalType":"struct T6","name":"elem1","type":"tuple"}],"internalType":"struct T7","name":"v785","type":"tuple"}],"name":"_reachp_3","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x60806200161790813803601f1980601f83011683019360018060401b039284861084871117620002d05780859260409788528339602094859181010312620002e6578451906200004f82620002eb565b518152436003558451608081019080821085831117620002d0576060918752600091818380935282888201528289820152015260049160ff835416620002b9577f87b51d26f290dc1fb530aed45f92ac77d813efb7cccb67b06c40d875955dde87878051338152835189820152a1518015908115620002ac575b50156200029557346200027e578551620000e381620002eb565b3390526001948582554386558651923382850152818452878401848110878211176200026b57885283519586116200025857600254908782811c921680156200024d575b838310146200023a5750601f8111620001ee575b508093601f861160011462000186575050918394918493946200017a575b50501b916000199060031b1c1916176002555b5161130f9081620003088239f35b01519250388062000159565b600283528183209493928692918316915b88838310620001d35750505010620001b9575b505050811b016002556200016c565b015160001960f88460031b161c19169055388080620001aa565b85870151885590960195948501948793509081019062000197565b60028352818320601f870160051c8101918388106200022f575b601f0160051c019087905b828110620002235750506200013b565b84815501879062000213565b909150819062000208565b634e487b7160e01b845260229052602483fd5b91607f169162000127565b634e487b7160e01b835260419052602482fd5b634e487b7160e01b845260418252602484fd5b855163100960cb60e01b8152600981840152602490fd5b855163100960cb60e01b8152600881840152602490fd5b90506001541438620000c9565b865163100960cb60e01b8152600781850152602490fd5b634e487b7160e01b600052604160045260246000fd5b600080fd5b602081019081106001600160401b03821117620002d05760405256fe608060408181526004918236101561001f575b505050361561001d57005b005b600090813560e01c9081631e93b0f114610791575080632a69d37f14610748578063453a05d5146106b75780634797fe5514610518578063573b8510146102445780638323075714610225578063ab53f2c6146101b55763f67c47be03610012576101403660031901126101b25761009561094c565b908251936100a28561084e565b358452602435936001600160a01b0380861686036101a657602095868301526044358583015260643581811681036101ae5760608301526084356001600160601b0319811681036101ae57608083015260603660a31901126101a65784516101098161086a565b60a435815260c4358782015260e4356001600160801b0319811681036101aa578682015260a08301526101043560c08301526101243590811681036101a65792809282879560e061019b9501528651610161816107e7565b610169610990565b8152868101916101776109f3565b83528151528282515251868251015261018e610a34565b9182525185820152610a9b565b015115159051908152f35b8280fd5b8480fd5b8380fd5b80fd5b50903461022157816003193601126102215781546101d1610885565b91805193849283526020828185015284518093850152815b83811061020a57505060608094508284010152601f80199101168101030190f35b8086018201518782016060015286945081016101e9565b5080fd5b5090346102215781600319360112610221576020906001549051908152f35b5090602092836003193601126101a65761025c61094c565b5081519061026982610818565b8035825260ff815416610501577fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee81596838051338152845188820152a1600191828554036104ea576102b7610885565b86818051810103126104e657868551916102d083610818565b01516001600160a01b03929083811681036104e25782525180159081156104d7575b50156104c057346104a957338282511603610492577fd5c60b6613e142bc2797d461a5a06c51743f26aa089eb10362f1768d1910f76c91879151168551908152a1825161033e816107e7565b848152438682015283519061035282610818565b8582525180915281855543835583519086820152858152610372816107e7565b8051916001600160401b03831161047f575061038f6002546107ad565b601f8111610438575b508590601f83116001146103d75792829391839287946103cc575b50501b916000199060031b1c1916176002555b51908152f35b0151925038806103b3565b60028652868620919083601f198116885b8a888383106104215750505010610408575b505050811b016002556103c6565b015160001960f88460031b161c191690553880806103fa565b8686015188559096019594850194879350016103e8565b60028652868620601f840160051c810191888510610475575b601f0160051c019084905b82811061046a575050610398565b87815501849061045c565b9091508190610451565b634e487b7160e01b865260419052602485fd5b845163100960cb60e01b8152600e81850152602490fd5b845163100960cb60e01b8152600d81850152602490fd5b845163100960cb60e01b8152600c81850152602490fd5b9050845414386102f2565b8780fd5b8580fd5b835163100960cb60e01b8152600b81840152602490fd5b602490600a84519163100960cb60e01b8352820152fd5b50906102003660031901126102215761052f61094c565b815161053a816107e7565b843581526101e03660231901126101ae5782519460808601906001600160401b0382118783101761047f5750835260243560038110156101aa5785526101403660431901126101ae5782519461058f86610818565b83519561059b8761084e565b6044358752606435966001600160a01b0380891689036104e257602098898301526084358783015260a43581811681036106b357606083015260c4356001600160601b0319811681036106b357608083015260603660e31901126104e25786516106048161086a565b60e4358152610104358a820152610124356001600160801b0319811681036106af578882015260a08301526101443560c08301526101643590811681036104e25760e08201528152818701526060366101831901126101aa57835161066881610818565b84516106738161086a565b6101843581526101a435888201526101c435868201528152848201526101e43580151581036104e6576060820152858201526103c69190610a9b565b8980fd5b8880fd5b509160603660031901126101a65760209261019b83926106d561094c565b9283918551906106e48261086a565b35815260243588820152604435868201528551610700816107e7565b865161070b81610818565b610713610971565b81528152888101916107236109f3565b8352815152600182515251868251015261073b610a34565b9182525187820152610a9b565b50908160031936011261022157606060209261078861076561094c565b809261076f610a34565b878101906002825152511515868251015261073b610a34565b01519051908152f35b9050346102215781600319360112610221576020906003548152f35b90600182811c921680156107dd575b60208310146107c757565b634e487b7160e01b600052602260045260246000fd5b91607f16916107bc565b604081019081106001600160401b0382111761080257604052565b634e487b7160e01b600052604160045260246000fd5b602081019081106001600160401b0382111761080257604052565b608081019081106001600160401b0382111761080257604052565b61010081019081106001600160401b0382111761080257604052565b606081019081106001600160401b0382111761080257604052565b604051906000600254610897816107ad565b80855260019180831690811561092d57506001146108d5575b5050829003601f01601f191682016001600160401b0381118382101761080257604052565b600260009081526020935091837f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace5b838510610919575050505083010138806108b0565b805488860183015293019284908201610904565b919250506020925060ff191682850152151560051b83010138806108b0565b6040519061095982610833565b60006060838281528260208201528260408201520152565b6040519061097e8261086a565b60006040838281528260208201520152565b6040519061099d82610818565b6040518261010082016001600160401b038111838210176108025760405260008083528060208401528060408401528060608401528060808401526109e0610971565b60a08401528060c084015260e083015252565b60405190610a0082610833565b6000606083828152610a10610990565b6020820152604051610a2181610818565b610a29610971565b815260408201520152565b60405190610a41826107e7565b81600081526020610a506109f3565b910152565b80518252602080820151908301526040908101516001600160801b031916910152565b516003811015610a855790565b634e487b7160e01b600052602160045260246000fd5b9190604090815190610aac826107e7565b610ab4610990565b82526020928383018151610ac781610818565b610acf610971565b8152815260049360ff8554166112eb5782519033825288518783015286890190815190815196600397888110156112d657908594939291888c9701528583015151938451956060968782015286600160a01b6001900395868a8901511660808401528b88015160a084015286828901511660c08401528b600160601b60019003199a8b60808b01511660e08601528860a08b01519a6101009b8c8801610b7491610a55565b60c081015161016088015260e001511661018086015281830151519081516101a08701528101516101c086015201516101e0840152015115156102008201526102207f9429f391631913a3079dcb3efd9503f9318b7eec1dacfee4c620450b8a0b493891a16000978b8954036112bf578c9d9e610bf59d999a9b9c9d610885565b998a8051810103126112bb578e8c519a610c0e8c610818565b01518a525180159081156112af575b501561129857610c2d8251610a78565b8c81101561128457610e795750518c0151825234610e625792610cf08c9361014096938a867f55648752e16a06369257037ff12234ced55d1627f04500d14c58cb79807cf4d39a987fa551169b77c89048cc2e20b8ed671f1570cc848b4f6f2d55defefc077d7d8db88f839051858152a10152515193845196828787015116918d808801519085838a0151169360808a0151169460a08a01519660e060c08c01519b0151169a82519c8d528c01528a0152880152608087015260a0860190610a55565b830152610120820152a1825190610d06826107e7565b82825286820190838252518252439052825190610d2282610818565b82825251809152848255600192438455519086820152858152610d44816107e7565b8051946001600160401b038611610e4f5750610d616002546107ad565b601f8111610e08575b508591601f8611600114610da2579495508592919083610d97575b50501b92600019911b1c191617600255565b015193503880610d85565b6002815286812093969394938691601f198316915b89838310610dee5750505010610dd4575b50505050811b01600255565b01519060f884600019921b161c1916905538808080610dc8565b858701518955909701969485019488935090810190610db7565b60028352868320601f870160051c810191888810610e45575b601f0160051c019084905b828110610e3a575050610d6a565b848155018490610e2c565b9091508190610e21565b634e487b7160e01b835260419052602482fd5b885163100960cb60e01b81526012818d0152602490fd5b945097969550915050610e92869a999897939a51610a78565b95878710156112715760019687036110665792809495969798999a9351015182523461104f579085847f8ae1d12745070499deb90f74dbda066d3ebb9066dc64fa2d22e24615fabfb34c94937f8f6e1419db0e1d89442e5bd6ebc9b3ca4e38faadcf6f74c7c865c253e81ac5c98d8351858152a101525151805190848b8201519101519085519283528b83015284820152a1805191610f30836107e7565b83835287830190848252518352439052805191610f4c83610818565b83835251809252858355438455519086820152858152610f6b816107e7565b8051946001600160401b038611610e4f5750610f886002546107ad565b601f8111611008575b508591601f8611600114610fbd579495508592919083610d975750501b92600019911b1c191617600255565b6002815286812093969394938691601f198316915b89838310610fee5750505010610dd45750505050811b01600255565b858701518955909701969485019488935090810190610fd2565b60028352868320601f870160051c810191888810611045575b601f0160051c019084905b82811061103a575050610f91565b84815501849061102c565b9091508190611021565b835163100960cb60e01b81526013818b0152602490fd5b61107291925051610a78565b98868a101561125e576002809a14611091575b50505050505050505050565b34611247577ff4014d44deda9617bf5906037e35196ae0f1e65059371aa1f4041c16608c8a9a8985518551908152a183519101528051916110d1836107e7565b8383528783019084825251858101908181116112345781106101aa5783524390528051916110fe83610818565b8383525180925285835543845551908682015285815261111d816107e7565b8051946001600160401b038611610e4f575061113987546107ad565b601f81116111ee575b508591601f861160011461118757949550859291908361117c575b50501b92600019911b1c19161790555b38808080808080808080611085565b01519350388061115d565b87815286812093969394938691601f198316915b898383106111d457505050106111ba575b50505050811b01905561116d565b01519060f884600019921b161c19169055388080806111ac565b85870151895590970196948501948893509081019061119b565b878352868320601f870160051c81019188881061122a575b601f0160051c019084905b82811061121f575050611142565b848155018490611211565b9091508190611206565b634e487b7160e01b865260118952602486fd5b825163100960cb60e01b81526014818a0152602490fd5b634e487b7160e01b855260218852602485fd5b634e487b7160e01b865260218952602486fd5b50634e487b7160e01b8a5260218d5260248afd5b8a5163100960cb60e01b81526011818f0152602490fd5b90506001541438610c1d565b8a80fd5b895163100960cb60e01b81526010818e0152602490fd5b60218a634e487b7160e01b6000525260246000fd5b825163100960cb60e01b8152600f81870152602490fdfea164736f6c6343000810000a`,
  BytecodeLen: 5655,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './src/contracts/index.rsh:46:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './src/contracts/index.rsh:84:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './src/contracts/index.rsh:50:41:after expr stmt semicolon',
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
