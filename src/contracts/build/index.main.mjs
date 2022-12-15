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
    end: [ctc0, ctc0, ctc0]
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
      4: [ctc0, ctc1]
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
    Auctions_created0_43: ctc8,
    Auctions_ended0_43: ctc10,
    Auctions_getAdminAddress0_43: ctc11,
    Auctions_getID0_43: ctc11
    });
  
  
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./src/contracts/index.rsh:43:15:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./src/contracts/index.rsh:43:15:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v282, time: v281, didSend: v22, from: v280 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v282, time: v281, didSend: v22, from: v280 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v280],
    evt_cnt: 0,
    funcNum: 1,
    lct: v281,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./src/contracts/index.rsh:45:15:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v285, time: v284, didSend: v27, from: v283 } = txn2;
      
      ;
      const v287 = await ctc.getContractInfo();
      
      const v289 = stdlib.checkedBigNumberify('./src/contracts/index.rsh:47:42:decimal', stdlib.UInt_max, '0');
      const v290 = v284;
      
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
  const {data: [], secs: v285, time: v284, didSend: v27, from: v283 } = txn2;
  ;
  const v286 = stdlib.addressEq(v280, v283);
  stdlib.assert(v286, {
    at: './src/contracts/index.rsh:45:15:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Admin'
    });
  const v287 = await ctc.getContractInfo();
  stdlib.protect(ctc0, await interact.deployed(v287), {
    at: './src/contracts/index.rsh:46:32:application',
    fs: ['at ./src/contracts/index.rsh:46:32:application call to [unknown function] (defined at: ./src/contracts/index.rsh:46:32:function exp)', 'at ./src/contracts/index.rsh:46:32:application call to "liftedInteract" (defined at: ./src/contracts/index.rsh:46:32:application)'],
    msg: 'deployed',
    who: 'Admin'
    });
  
  let v289 = stdlib.checkedBigNumberify('./src/contracts/index.rsh:47:42:decimal', stdlib.UInt_max, '0');
  let v290 = v284;
  
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
    const {data: [v365], secs: v367, time: v366, didSend: v199, from: v364 } = txn4;
    switch (v365[0]) {
      case 'Auctions_created0_43': {
        const v368 = v365[1];
        undefined /* setApiDetails */;
        ;
        const v377 = v368[stdlib.checkedBigNumberify('./src/contracts/index.rsh:54:21:spread', stdlib.UInt_max, '0')];
        const v378 = null;
        await txn4.getOutput('Auctions_created', 'v378', ctc0, v378);
        const v393 = v377.id;
        const v394 = v377.contractInfo;
        const v395 = v377.blockCreated;
        const v396 = v377.owner;
        const v397 = v377.title;
        const v398 = v377.description;
        const v399 = v377.price;
        const v400 = v377.tokenId;
        null;
        const cv289 = v289;
        const cv290 = v366;
        
        v289 = cv289;
        v290 = cv290;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'Auctions_ended0_43': {
        const v429 = v365[1];
        undefined /* setApiDetails */;
        ;
        const v463 = v429[stdlib.checkedBigNumberify('./src/contracts/index.rsh:70:21:spread', stdlib.UInt_max, '0')];
        const v464 = null;
        await txn4.getOutput('Auctions_ended', 'v464', ctc0, v464);
        const v474 = v463.id;
        const v475 = v463.blockEnded;
        const v476 = v463.lastBid;
        null;
        const cv289 = v289;
        const cv290 = v366;
        
        v289 = cv289;
        v290 = cv290;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'Auctions_getAdminAddress0_43': {
        const v490 = v365[1];
        undefined /* setApiDetails */;
        ;
        await txn4.getOutput('Auctions_getAdminAddress', 'v280', ctc3, v280);
        const cv289 = v289;
        const cv290 = v366;
        
        v289 = cv289;
        v290 = cv290;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'Auctions_getID0_43': {
        const v551 = v365[1];
        undefined /* setApiDetails */;
        ;
        await txn4.getOutput('Auctions_getID', 'v289', ctc1, v289);
        const v611 = stdlib.safeAdd(v289, stdlib.checkedBigNumberify('./src/contracts/index.rsh:52:44:decimal', stdlib.UInt_max, '1'));
        const cv289 = v611;
        const cv290 = v366;
        
        v289 = cv289;
        v290 = cv290;
        
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
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Contract;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '80'));
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Struct([['id', ctc1], ['contractInfo', ctc2], ['blockCreated', ctc1], ['owner', ctc0], ['title', ctc3], ['description', ctc4], ['price', ctc1], ['tokenId', ctc5]]);
  const ctc7 = stdlib.T_Tuple([ctc6]);
  const ctc8 = stdlib.T_Struct([['id', ctc1], ['blockEnded', ctc1], ['lastBid', ctc1]]);
  const ctc9 = stdlib.T_Tuple([ctc8]);
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Data({
    Auctions_created0_43: ctc7,
    Auctions_ended0_43: ctc9,
    Auctions_getAdminAddress0_43: ctc10,
    Auctions_getID0_43: ctc10
    });
  const ctc12 = stdlib.T_Null;
  
  
  const [v280, v289] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1]);
  const v310 = stdlib.protect(ctc7, await interact.in(), {
    at: './src/contracts/index.rsh:1:23:application',
    fs: ['at ./src/contracts/index.rsh:54:21:application call to [unknown function] (defined at: ./src/contracts/index.rsh:54:21:function exp)', 'at ./src/contracts/index.rsh:47:41:application call to "runAuctions_created0_43" (defined at: ./src/contracts/index.rsh:54:21:function exp)', 'at ./src/contracts/index.rsh:47:41:application call to [unknown function] (defined at: ./src/contracts/index.rsh:47:41:function exp)'],
    msg: 'in',
    who: 'Auctions_created'
    });
  const v333 = ['Auctions_created0_43', v310];
  
  const txn1 = await (ctc.sendrecv({
    args: [v280, v289, v333],
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
      
      
      const {data: [v365], secs: v367, time: v366, didSend: v199, from: v364 } = txn1;
      
      switch (v365[0]) {
        case 'Auctions_created0_43': {
          const v368 = v365[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Auctions_created"
            });
          ;
          const v377 = v368[stdlib.checkedBigNumberify('./src/contracts/index.rsh:54:21:spread', stdlib.UInt_max, '0')];
          const v378 = null;
          const v379 = await txn1.getOutput('Auctions_created', 'v378', ctc12, v378);
          
          const v393 = v377.id;
          const v394 = v377.contractInfo;
          const v395 = v377.blockCreated;
          const v396 = v377.owner;
          const v397 = v377.title;
          const v398 = v377.description;
          const v399 = v377.price;
          const v400 = v377.tokenId;
          null;
          const v1040 = v289;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Auctions_ended0_43': {
          const v429 = v365[1];
          
          break;
          }
        case 'Auctions_getAdminAddress0_43': {
          const v490 = v365[1];
          
          break;
          }
        case 'Auctions_getID0_43': {
          const v551 = v365[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v365], secs: v367, time: v366, didSend: v199, from: v364 } = txn1;
  switch (v365[0]) {
    case 'Auctions_created0_43': {
      const v368 = v365[1];
      undefined /* setApiDetails */;
      ;
      const v377 = v368[stdlib.checkedBigNumberify('./src/contracts/index.rsh:54:21:spread', stdlib.UInt_max, '0')];
      const v378 = null;
      const v379 = await txn1.getOutput('Auctions_created', 'v378', ctc12, v378);
      if (v199) {
        stdlib.protect(ctc12, await interact.out(v368, v379), {
          at: './src/contracts/index.rsh:54:22:application',
          fs: ['at ./src/contracts/index.rsh:54:22:application call to [unknown function] (defined at: ./src/contracts/index.rsh:54:22:function exp)', 'at ./src/contracts/index.rsh:55:28:application call to "ret" (defined at: ./src/contracts/index.rsh:54:51:function exp)', 'at ./src/contracts/index.rsh:54:51:application call to [unknown function] (defined at: ./src/contracts/index.rsh:54:51:function exp)'],
          msg: 'out',
          who: 'Auctions_created'
          });
        }
      else {
        }
      
      const v393 = v377.id;
      const v394 = v377.contractInfo;
      const v395 = v377.blockCreated;
      const v396 = v377.owner;
      const v397 = v377.title;
      const v398 = v377.description;
      const v399 = v377.price;
      const v400 = v377.tokenId;
      null;
      const v1040 = v289;
      return;
      
      break;
      }
    case 'Auctions_ended0_43': {
      const v429 = v365[1];
      return;
      break;
      }
    case 'Auctions_getAdminAddress0_43': {
      const v490 = v365[1];
      return;
      break;
      }
    case 'Auctions_getID0_43': {
      const v551 = v365[1];
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
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Struct([['id', ctc1], ['blockEnded', ctc1], ['lastBid', ctc1]]);
  const ctc3 = stdlib.T_Tuple([ctc2]);
  const ctc4 = stdlib.T_Contract;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '80'));
  const ctc7 = stdlib.T_Token;
  const ctc8 = stdlib.T_Struct([['id', ctc1], ['contractInfo', ctc4], ['blockCreated', ctc1], ['owner', ctc0], ['title', ctc5], ['description', ctc6], ['price', ctc1], ['tokenId', ctc7]]);
  const ctc9 = stdlib.T_Tuple([ctc8]);
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Data({
    Auctions_created0_43: ctc9,
    Auctions_ended0_43: ctc3,
    Auctions_getAdminAddress0_43: ctc10,
    Auctions_getID0_43: ctc10
    });
  const ctc12 = stdlib.T_Null;
  
  
  const [v280, v289] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1]);
  const v337 = stdlib.protect(ctc3, await interact.in(), {
    at: './src/contracts/index.rsh:1:23:application',
    fs: ['at ./src/contracts/index.rsh:70:21:application call to [unknown function] (defined at: ./src/contracts/index.rsh:70:21:function exp)', 'at ./src/contracts/index.rsh:47:41:application call to "runAuctions_ended0_43" (defined at: ./src/contracts/index.rsh:70:21:function exp)', 'at ./src/contracts/index.rsh:47:41:application call to [unknown function] (defined at: ./src/contracts/index.rsh:47:41:function exp)'],
    msg: 'in',
    who: 'Auctions_ended'
    });
  const v350 = ['Auctions_ended0_43', v337];
  
  const txn1 = await (ctc.sendrecv({
    args: [v280, v289, v350],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./src/contracts/index.rsh:70:21:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v365], secs: v367, time: v366, didSend: v199, from: v364 } = txn1;
      
      switch (v365[0]) {
        case 'Auctions_created0_43': {
          const v368 = v365[1];
          
          break;
          }
        case 'Auctions_ended0_43': {
          const v429 = v365[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Auctions_ended"
            });
          ;
          const v463 = v429[stdlib.checkedBigNumberify('./src/contracts/index.rsh:70:21:spread', stdlib.UInt_max, '0')];
          const v464 = null;
          const v465 = await txn1.getOutput('Auctions_ended', 'v464', ctc12, v464);
          
          const v474 = v463.id;
          const v475 = v463.blockEnded;
          const v476 = v463.lastBid;
          null;
          const v1050 = v289;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Auctions_getAdminAddress0_43': {
          const v490 = v365[1];
          
          break;
          }
        case 'Auctions_getID0_43': {
          const v551 = v365[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v365], secs: v367, time: v366, didSend: v199, from: v364 } = txn1;
  switch (v365[0]) {
    case 'Auctions_created0_43': {
      const v368 = v365[1];
      return;
      break;
      }
    case 'Auctions_ended0_43': {
      const v429 = v365[1];
      undefined /* setApiDetails */;
      ;
      const v463 = v429[stdlib.checkedBigNumberify('./src/contracts/index.rsh:70:21:spread', stdlib.UInt_max, '0')];
      const v464 = null;
      const v465 = await txn1.getOutput('Auctions_ended', 'v464', ctc12, v464);
      if (v199) {
        stdlib.protect(ctc12, await interact.out(v429, v465), {
          at: './src/contracts/index.rsh:70:22:application',
          fs: ['at ./src/contracts/index.rsh:70:22:application call to [unknown function] (defined at: ./src/contracts/index.rsh:70:22:function exp)', 'at ./src/contracts/index.rsh:71:28:application call to "ret" (defined at: ./src/contracts/index.rsh:70:49:function exp)', 'at ./src/contracts/index.rsh:70:49:application call to [unknown function] (defined at: ./src/contracts/index.rsh:70:49:function exp)'],
          msg: 'out',
          who: 'Auctions_ended'
          });
        }
      else {
        }
      
      const v474 = v463.id;
      const v475 = v463.blockEnded;
      const v476 = v463.lastBid;
      null;
      const v1050 = v289;
      return;
      
      break;
      }
    case 'Auctions_getAdminAddress0_43': {
      const v490 = v365[1];
      return;
      break;
      }
    case 'Auctions_getID0_43': {
      const v551 = v365[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Auctions_getAdminAddress4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Auctions_getAdminAddress4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Auctions_getAdminAddress4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Tuple([]);
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '80'));
  const ctc6 = stdlib.T_Token;
  const ctc7 = stdlib.T_Struct([['id', ctc1], ['contractInfo', ctc3], ['blockCreated', ctc1], ['owner', ctc0], ['title', ctc4], ['description', ctc5], ['price', ctc1], ['tokenId', ctc6]]);
  const ctc8 = stdlib.T_Tuple([ctc7]);
  const ctc9 = stdlib.T_Struct([['id', ctc1], ['blockEnded', ctc1], ['lastBid', ctc1]]);
  const ctc10 = stdlib.T_Tuple([ctc9]);
  const ctc11 = stdlib.T_Data({
    Auctions_created0_43: ctc8,
    Auctions_ended0_43: ctc10,
    Auctions_getAdminAddress0_43: ctc2,
    Auctions_getID0_43: ctc2
    });
  const ctc12 = stdlib.T_Null;
  
  
  const [v280, v289] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1]);
  const v354 = stdlib.protect(ctc2, await interact.in(), {
    at: './src/contracts/index.rsh:1:23:application',
    fs: ['at ./src/contracts/index.rsh:81:21:application call to [unknown function] (defined at: ./src/contracts/index.rsh:81:21:function exp)', 'at ./src/contracts/index.rsh:47:41:application call to "runAuctions_getAdminAddress0_43" (defined at: ./src/contracts/index.rsh:81:21:function exp)', 'at ./src/contracts/index.rsh:47:41:application call to [unknown function] (defined at: ./src/contracts/index.rsh:47:41:function exp)'],
    msg: 'in',
    who: 'Auctions_getAdminAddress'
    });
  const v358 = ['Auctions_getAdminAddress0_43', v354];
  
  const txn1 = await (ctc.sendrecv({
    args: [v280, v289, v358],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./src/contracts/index.rsh:81:21:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v365], secs: v367, time: v366, didSend: v199, from: v364 } = txn1;
      
      switch (v365[0]) {
        case 'Auctions_created0_43': {
          const v368 = v365[1];
          
          break;
          }
        case 'Auctions_ended0_43': {
          const v429 = v365[1];
          
          break;
          }
        case 'Auctions_getAdminAddress0_43': {
          const v490 = v365[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Auctions_getAdminAddress"
            });
          ;
          const v539 = await txn1.getOutput('Auctions_getAdminAddress', 'v280', ctc0, v280);
          
          const v1060 = v289;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Auctions_getID0_43': {
          const v551 = v365[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v365], secs: v367, time: v366, didSend: v199, from: v364 } = txn1;
  switch (v365[0]) {
    case 'Auctions_created0_43': {
      const v368 = v365[1];
      return;
      break;
      }
    case 'Auctions_ended0_43': {
      const v429 = v365[1];
      return;
      break;
      }
    case 'Auctions_getAdminAddress0_43': {
      const v490 = v365[1];
      undefined /* setApiDetails */;
      ;
      const v539 = await txn1.getOutput('Auctions_getAdminAddress', 'v280', ctc0, v280);
      if (v199) {
        stdlib.protect(ctc12, await interact.out(v490, v539), {
          at: './src/contracts/index.rsh:81:22:application',
          fs: ['at ./src/contracts/index.rsh:81:22:application call to [unknown function] (defined at: ./src/contracts/index.rsh:81:22:function exp)', 'at ./src/contracts/index.rsh:82:28:application call to "ret" (defined at: ./src/contracts/index.rsh:81:54:function exp)', 'at ./src/contracts/index.rsh:81:54:application call to [unknown function] (defined at: ./src/contracts/index.rsh:81:54:function exp)'],
          msg: 'out',
          who: 'Auctions_getAdminAddress'
          });
        }
      else {
        }
      
      const v1060 = v289;
      return;
      
      break;
      }
    case 'Auctions_getID0_43': {
      const v551 = v365[1];
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
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Tuple([]);
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '80'));
  const ctc6 = stdlib.T_Token;
  const ctc7 = stdlib.T_Struct([['id', ctc1], ['contractInfo', ctc3], ['blockCreated', ctc1], ['owner', ctc0], ['title', ctc4], ['description', ctc5], ['price', ctc1], ['tokenId', ctc6]]);
  const ctc8 = stdlib.T_Tuple([ctc7]);
  const ctc9 = stdlib.T_Struct([['id', ctc1], ['blockEnded', ctc1], ['lastBid', ctc1]]);
  const ctc10 = stdlib.T_Tuple([ctc9]);
  const ctc11 = stdlib.T_Data({
    Auctions_created0_43: ctc8,
    Auctions_ended0_43: ctc10,
    Auctions_getAdminAddress0_43: ctc2,
    Auctions_getID0_43: ctc2
    });
  const ctc12 = stdlib.T_Null;
  
  
  const [v280, v289] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1]);
  const v302 = stdlib.protect(ctc2, await interact.in(), {
    at: './src/contracts/index.rsh:1:23:application',
    fs: ['at ./src/contracts/index.rsh:50:21:application call to [unknown function] (defined at: ./src/contracts/index.rsh:50:21:function exp)', 'at ./src/contracts/index.rsh:47:41:application call to "runAuctions_getID0_43" (defined at: ./src/contracts/index.rsh:50:21:function exp)', 'at ./src/contracts/index.rsh:47:41:application call to [unknown function] (defined at: ./src/contracts/index.rsh:47:41:function exp)'],
    msg: 'in',
    who: 'Auctions_getID'
    });
  const v306 = ['Auctions_getID0_43', v302];
  
  const txn1 = await (ctc.sendrecv({
    args: [v280, v289, v306],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./src/contracts/index.rsh:50:21:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v365], secs: v367, time: v366, didSend: v199, from: v364 } = txn1;
      
      switch (v365[0]) {
        case 'Auctions_created0_43': {
          const v368 = v365[1];
          
          break;
          }
        case 'Auctions_ended0_43': {
          const v429 = v365[1];
          
          break;
          }
        case 'Auctions_getAdminAddress0_43': {
          const v490 = v365[1];
          
          break;
          }
        case 'Auctions_getID0_43': {
          const v551 = v365[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Auctions_getID"
            });
          ;
          const v606 = await txn1.getOutput('Auctions_getID', 'v289', ctc1, v289);
          
          const v611 = stdlib.safeAdd(v289, stdlib.checkedBigNumberify('./src/contracts/index.rsh:52:44:decimal', stdlib.UInt_max, '1'));
          const v1070 = v611;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v365], secs: v367, time: v366, didSend: v199, from: v364 } = txn1;
  switch (v365[0]) {
    case 'Auctions_created0_43': {
      const v368 = v365[1];
      return;
      break;
      }
    case 'Auctions_ended0_43': {
      const v429 = v365[1];
      return;
      break;
      }
    case 'Auctions_getAdminAddress0_43': {
      const v490 = v365[1];
      return;
      break;
      }
    case 'Auctions_getID0_43': {
      const v551 = v365[1];
      undefined /* setApiDetails */;
      ;
      const v606 = await txn1.getOutput('Auctions_getID', 'v289', ctc1, v289);
      if (v199) {
        stdlib.protect(ctc12, await interact.out(v551, v606), {
          at: './src/contracts/index.rsh:50:22:application',
          fs: ['at ./src/contracts/index.rsh:50:22:application call to [unknown function] (defined at: ./src/contracts/index.rsh:50:22:function exp)', 'at ./src/contracts/index.rsh:51:28:application call to "ret" (defined at: ./src/contracts/index.rsh:50:44:function exp)', 'at ./src/contracts/index.rsh:50:44:application call to [unknown function] (defined at: ./src/contracts/index.rsh:50:44:function exp)'],
          msg: 'out',
          who: 'Auctions_getID'
          });
        }
      else {
        }
      
      const v611 = stdlib.safeAdd(v289, stdlib.checkedBigNumberify('./src/contracts/index.rsh:52:44:decimal', stdlib.UInt_max, '1'));
      const v1070 = v611;
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
export async function Auctions_getAdminAddress(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Auctions_getAdminAddress expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Auctions_getAdminAddress expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Auctions_getAdminAddress4(ctcTop, interact);}
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
const _ALGO = {
  ABI: {
    impure: [`Auctions_created((uint64,uint64,uint64,address,byte[20],byte[80],uint64,uint64))byte[0]`, `Auctions_ended((uint64,uint64,uint64))byte[0]`, `Auctions_getAdminAddress()address`, `Auctions_getID()uint64`],
    pure: [],
    sigs: [`Auctions_created((uint64,uint64,uint64,address,byte[20],byte[80],uint64,uint64))byte[0]`, `Auctions_ended((uint64,uint64,uint64))byte[0]`, `Auctions_getAdminAddress()address`, `Auctions_getID()uint64`]
    },
  GlobalNumByteSlice: 2,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `ByAJAAEDgbTDlwqkl8PLC4D7tu8GrAEEAiYCAAEAIjUAMRhBAocoZEkiWzUBgQhbNQI2GgAXSUEAbCI1BCM1BkklDEAALUkhBAxAABAhBBJENhoBNf8pNP9QQgBlJRJENhoBNf+AAQE0/1CBlAGvUEIAT0khBQxAABQhBRJEKDX/gAEDNP9QIQavUEIANIHvyLflBhJEKDX/gAECNP9QIQavUEIAHDYaAhc1BDYaAzYaARdJIwxAAVNJJAxAAR4kEkQhBzQBEkQ0BEkiEkw0AhIRRClkSTUDSVcAIDX/gSBbNf5JNQU1/YAELQ5rfzT9ULA0/SJVSSEIDEAAREkkDEAAIiQSRIAIAAAAAAAAASE0/hZQsDT+FjUHNP80/iMIMgZCARpIgAgAAAAAAAABGDT/ULA0/zUHNP80/jIGQgD+SSMMQAA8SDT9VwEYNfw0/DX7gAgAAAAAAAAB0LAoNQeABPBymdQ0+1cACFA0+1cICFA0+1cQCFCwNP80/jIGQgC8SDT9VwGsNfw0/DX7gAgAAAAAAAABerAoNQeABFqNnV80+1cACFA0+1cICFA0+1cQCFA0+1cYIFA0+1c4FFA0+1dMUFA0+1ecCFA0+1ekCFCwNP80/jIGQgBiIxJEIzQBEkQ0BEkiEkw0AhIRRClkSTUDNf+ABJqLkXSwNP8xABJENP8iMgZCADNIgaCNBogAtyI0ARJENARJIhJMNAISEUSABF8Nq/qwMQApSwFXACBnSCM1ATIGNQJCADo1/zX+STX9NP4WUClLAVcAKGdIIQc1ATIGNQJCABwxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQoNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEIQgxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rjQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 40,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T8","name":"v1091","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T8","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T8","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T6","name":"which","type":"uint8"},{"components":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address payable","name":"contractInfo","type":"address"},{"internalType":"uint256","name":"blockCreated","type":"uint256"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"bytes20","name":"title","type":"bytes20"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes16","name":"elem2","type":"bytes16"}],"internalType":"struct T0","name":"description","type":"tuple"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"address payable","name":"tokenId","type":"address"}],"internalType":"struct T1","name":"elem0","type":"tuple"}],"internalType":"struct T4","name":"_Auctions_created0_43","type":"tuple"},{"components":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"blockEnded","type":"uint256"},{"internalType":"uint256","name":"lastBid","type":"uint256"}],"internalType":"struct T2","name":"elem0","type":"tuple"}],"internalType":"struct T5","name":"_Auctions_ended0_43","type":"tuple"},{"internalType":"bool","name":"_Auctions_getAdminAddress0_43","type":"bool"},{"internalType":"bool","name":"_Auctions_getID0_43","type":"bool"}],"internalType":"struct T6","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T7","name":"_a","type":"tuple"}],"name":"_reach_e3","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address payable","name":"v0","type":"address"}],"name":"_reach_oe_v280","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"}],"name":"_reach_oe_v289","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v378","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v464","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"},{"indexed":false,"internalType":"address payable","name":"v1","type":"address"},{"indexed":false,"internalType":"uint256","name":"v2","type":"uint256"},{"indexed":false,"internalType":"address payable","name":"v3","type":"address"},{"indexed":false,"internalType":"bytes20","name":"v4","type":"bytes20"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes16","name":"elem2","type":"bytes16"}],"indexed":false,"internalType":"struct T0","name":"v5","type":"tuple"},{"indexed":false,"internalType":"uint256","name":"v6","type":"uint256"},{"indexed":false,"internalType":"address payable","name":"v7","type":"address"}],"name":"create","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"v2","type":"uint256"}],"name":"end","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address payable","name":"contractInfo","type":"address"},{"internalType":"uint256","name":"blockCreated","type":"uint256"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"bytes20","name":"title","type":"bytes20"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes16","name":"elem2","type":"bytes16"}],"internalType":"struct T0","name":"description","type":"tuple"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"address payable","name":"tokenId","type":"address"}],"internalType":"struct T1","name":"v1072","type":"tuple"}],"name":"Auctions_created","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"blockEnded","type":"uint256"},{"internalType":"uint256","name":"lastBid","type":"uint256"}],"internalType":"struct T2","name":"v1077","type":"tuple"}],"name":"Auctions_ended","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Auctions_getAdminAddress","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Auctions_getID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T8","name":"v1093","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T6","name":"which","type":"uint8"},{"components":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address payable","name":"contractInfo","type":"address"},{"internalType":"uint256","name":"blockCreated","type":"uint256"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"bytes20","name":"title","type":"bytes20"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes16","name":"elem2","type":"bytes16"}],"internalType":"struct T0","name":"description","type":"tuple"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"address payable","name":"tokenId","type":"address"}],"internalType":"struct T1","name":"elem0","type":"tuple"}],"internalType":"struct T4","name":"_Auctions_created0_43","type":"tuple"},{"components":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"blockEnded","type":"uint256"},{"internalType":"uint256","name":"lastBid","type":"uint256"}],"internalType":"struct T2","name":"elem0","type":"tuple"}],"internalType":"struct T5","name":"_Auctions_ended0_43","type":"tuple"},{"internalType":"bool","name":"_Auctions_getAdminAddress0_43","type":"bool"},{"internalType":"bool","name":"_Auctions_getID0_43","type":"bool"}],"internalType":"struct T6","name":"elem1","type":"tuple"}],"internalType":"struct T7","name":"v1097","type":"tuple"}],"name":"_reachp_3","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x608062001a0090813803601f1980601f83011683019360018060401b039284861084871117620002d65780859260409788528339602094859181010312620002ec578451906200004f82620002f1565b51815243600355845160a081019080821085831117620002d6576080918752600091818380935282888201528289820152826060820152015260049160ff835416620002bf577f87b51d26f290dc1fb530aed45f92ac77d813efb7cccb67b06c40d875955dde87878051338152835189820152a1518015908115620002b2575b50156200029b573462000284578551620000e981620002f1565b3390526001948582554386558651923382850152818452878401848110878211176200027157885283519586116200025e57600254908782811c9216801562000253575b83831014620002405750601f8111620001f4575b508093601f86116001146200018c5750509183949184939462000180575b50501b916000199060031b1c1916176002555b516116f290816200030e8239f35b0151925038806200015f565b600283528183209493928692918316915b88838310620001d95750505010620001bf575b505050811b0160025562000172565b015160001960f88460031b161c19169055388080620001b0565b8587015188559096019594850194879350908101906200019d565b60028352818320601f870160051c81019183881062000235575b601f0160051c019087905b8281106200022957505062000141565b84815501879062000219565b90915081906200020e565b634e487b7160e01b845260229052602483fd5b91607f16916200012d565b634e487b7160e01b835260419052602482fd5b634e487b7160e01b845260418252602484fd5b855163100960cb60e01b8152600981840152602490fd5b855163100960cb60e01b8152600881840152602490fd5b90506001541438620000cf565b865163100960cb60e01b8152600781850152602490fd5b634e487b7160e01b600052604160045260246000fd5b600080fd5b602081019081106001600160401b03821117620002d65760405256fe6040608081526004908136101561001d575b5050361561001b57005b005b600091823560e01c908163017140331461065f5781630c7d57ce146105375781631e93b0f1146105185781632cfbfba7146104cf5781634c344d9d14610433578163573b851014610175575080638323075714610157578063ab53f2c6146100ec5763ea83bb460361001157816003193601126100e8576020916100d36100a26109ca565b80926100ac610abe565b8681019060028251525115156060825101526100c6610abe565b9182525186820152610b3e565b6060015190516001600160a01b039091168152f35b5080fd5b50346100e857816003193601126100e857815461010761091f565b91805193849283526020828185015284518093850152815b83811061014057505060608094508284010152601f80199101168101030190f35b80860182015187820160600152869450810161011f565b50346100e857816003193601126100e8576020906001549051908152f35b83836020928360031936011261042f5761018d6109ca565b5081519061019a8261088f565b8035825260ff815416610418577fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee81596838051338152845188820152a160019182855403610401576101e861091f565b9086828051810103126103fd5761020b878651936102058561088f565b01610b02565b82525180159081156103f2575b50156103db57346103c45780516001600160a01b03919033908316036103ad57816102416109f5565b9151168152868101868152438683015285519261025d8461085e565b87845288840192888452511680935251815282865543845584519187830152518482015283815261028d816108e1565b8051916001600160401b03831161039a57506102aa600254610824565b601f8111610353575b508590601f83116001146102f25792829391839287946102e7575b50501b916000199060031b1c1916176002555b51908152f35b0151925087806102ce565b60028652868620919083601f198116885b8a8883831061033c5750505010610323575b505050811b016002556102e1565b015160001960f88460031b161c19169055858080610315565b868601518855909601959485019487935001610303565b60028652868620601f840160051c810191888510610390575b601f0160051c019084905b8281106103855750506102b3565b878155018490610377565b909150819061036c565b634e487b7160e01b865260419052602485fd5b845163100960cb60e01b8152600e81850152602490fd5b835163100960cb60e01b8152600d81840152602490fd5b835163100960cb60e01b8152600c81840152602490fd5b905083541487610218565b8580fd5b835163100960cb60e01b8152600b81840152602490fd5b602490600a84519163100960cb60e01b8352820152fd5b8280fd5b9050606036600319011261042f576020926104c483926104516109ca565b928391855190610460826108e1565b3581526024358882015260443586820152855161047c8161085e565b86516104878161088f565b61048f6109f5565b815281528881019161049f610a77565b835281515260018251525186825101526104b7610abe565b9182525187820152610b3e565b015115159051908152f35b5050816003193601126100e857608060209261050f6104ec6109ca565b80926104f6610abe565b87810190600382515251151586825101526104b7610abe565b01519051908152f35b5050346100e857816003193601126100e8576020906003549051908152f35b828461014036600319011261065c5761054e6109ca565b9082519361055b856108c5565b358452602435936001600160a01b03808616860361042f57602095868301526044358583015260643581811681036106585760608301526084356001600160601b03198116810361065857608083015260603660a319011261042f5784516105c2816108e1565b60a435815260c4358782015260e4356001600160801b031981168103610654578682015260a08301526101043560c083015261012435908116810361042f5792809282879560e06104c4950152865161061a8161085e565b610622610a14565b815286810191610630610a77565b835281515282825152518682510152610647610abe565b9182525185820152610b3e565b8480fd5b8380fd5b80fd5b83836102203660031901126100e8576106766109ca565b81516106818161085e565b843581526102003660231901126106585782519460a086016001600160401b0381118782101761081157845260243590811015610654578552610140366043190112610658578251946106d38661088f565b8351956106df876108c5565b6044358752606435966001600160a01b03808916890361080557602098898301526084358783015260a435818116810361080d57606083015260c4356001600160601b03198116810361080d57608083015260603660e3190112610805578651610748816108e1565b60e4358152610104358a820152610124356001600160801b031981168103610809578882015260a08301526101443560c08301526101643590811681036108055760e08201528152818701526060366101831901126106545783516107ac8161088f565b84516107b7816108e1565b6101843581526101a435888201526101c435868201528152848201526101e43580151581036103fd5760608201526102043580151581036103fd576080820152858201526102e19190610b3e565b8780fd5b8980fd5b8880fd5b634e487b7160e01b865260418252602486fd5b90600182811c92168015610854575b602083101461083e57565b634e487b7160e01b600052602260045260246000fd5b91607f1691610833565b604081019081106001600160401b0382111761087957604052565b634e487b7160e01b600052604160045260246000fd5b602081019081106001600160401b0382111761087957604052565b60a081019081106001600160401b0382111761087957604052565b61010081019081106001600160401b0382111761087957604052565b606081019081106001600160401b0382111761087957604052565b601f909101601f19168101906001600160401b0382119082101761087957604052565b604051906000826002549161093383610824565b8083526001938085169081156109a9575060011461095b575b50610959925003836108fc565b565b600260009081526000805160206116c683398151915294602093509091905b81831061099157505061095993508201013861094c565b8554888401850152948501948794509183019161097a565b905061095994506020925060ff191682840152151560051b8201013861094c565b604051906109d7826108aa565b60006080838281528260208201528260408201528260608201520152565b60405190610a02826108e1565b60006040838281528260208201520152565b60405190610a218261088f565b6040518261010082016001600160401b03811183821017610879576040526000808352806020840152806040840152806060840152806080840152610a646109f5565b60a08401528060c084015260e083015252565b60405190610a84826108aa565b6000608083828152610a94610a14565b6020820152604051610aa58161088f565b610aad6109f5565b815260408201528260608201520152565b60405190610acb8261085e565b81600081526020610ada610a77565b910152565b80518252602080820151908301526040908101516001600160801b031916910152565b51906001600160a01b0382168203610b1657565b600080fd5b516004811015610b285790565b634e487b7160e01b600052602160045260246000fd5b919060405190610b4d8261085e565b610b55610a14565b8252604051610b638161088f565b610b6b6109f5565b8152602083015260ff600454166116ac576040513381528451602082015260208501518051916004831015610b28576080610240927f17a4c29c62dd78dffa98b85524bfad67eb9ffd7fc604ed4a3dd4757902c08b499460408401526020810151518051606085015260018060a01b0360208201511683850152604081015160a085015260018060a01b0360608201511660c085015260018060601b0319838201511660e0850152610c2660a0820151610100860190610adf565b60c081015161016085015260e001516001600160a01b03166101808401526040818101515180516101a086015260208101516101c086015201516101e08401526060810151151561020084015201511515610220820152a1600460005403611693576040519360006002549086610c9c83610824565b8082529160018416801561167557600114611627575b610cbe925003876108fc565b604086805181010312610b16576040805196610cd98861085e565b610ce560208201610b02565b8852015160208701528151801590811561161b575b501561160257610d0d6020830151610b1b565b6004811015610b2857610faa57506020809101510151825234610f91577f55648752e16a06369257037ff12234ced55d1627f04500d14c58cb79807cf4d39160006020610140937fd50663b5ae236d5dccb746582de53a032a6a00c9e9fcdaa83c30f457dace712b82604051858152a10152515180519060018060a01b0360208201511690610df4604082015160018060a01b0360608401511660018060601b03196080850151169060a08501519260c08601519560e060018060a01b039101511696604051988952602089015260408801526060870152608086015260a0850190610adf565b610100830152610120820152a16020610e0b6109f5565b83516001600160a01b031681529201516020830190815243604080850191909152519290610e388461085e565b6000845260208401916000835260018060a01b0390511680945251815260046000554360015560405192602084015251604083015260408252610e7a826108e1565b81516001600160401b03811161087957610e95600254610824565b601f8111610f3e575b50602092601f8211600114610edb5792819293600092610ed0575b50508160011b916000199060031b1c191617600255565b015190503880610eb9565b601f19821693600260005260206000209160005b868110610f265750836001959610610f0d575b505050811b01600255565b015160001960f88460031b161c19169055388080610f02565b91926020600181928685015181550194019201610eef565b60026000526000805160206116c6833981519152601f830160051c81019160208410610f87575b601f0160051c01905b818110610f7b5750610e9e565b60008155600101610f6e565b9091508190610f65565b60405163100960cb60e01b815260126004820152602490fd5b610fba6020839594950151610b1b565b6004811015610b28576001036111d857506020604091015101516020820152346111bf576020606091600060407f8ae1d12745070499deb90f74dbda066d3ebb9066dc64fa2d22e24615fabfb34c957fb832beec21eb5a266f1e1ab9c801b329f43cd4927b98857cf6dd4241b03cfb46858351858152a10152015151805190604060208201519101519060405192835260208301526040820152a1602061105f6109f5565b83516001600160a01b03168152920151602083019081524360408085019190915251929061108c8461085e565b6000845260208401916000835260018060a01b03905116809452518152600460005543600155604051926020840152516040830152604082526110ce826108e1565b81516001600160401b038111610879576110e9600254610824565b601f811161116c575b50602092601f82116001146111235792819293600092610ed05750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b8681106111545750836001959610610f0d57505050811b01600255565b91926020600181928685015181550194019201611137565b60026000526000805160206116c6833981519152601f830160051c810191602084106111b5575b601f0160051c01905b8181106111a957506110f2565b6000815560010161119c565b9091508190611193565b60405163100960cb60e01b815260136004820152602490fd5b9291506111e86020820151610b1b565b6004811015610b28576002036113c957509050346113b0577f84dd5ff23f976b0260b8c1823173e9afa46ba168c18d239bc168da7e5f22fcd2602060018060a01b03855116604051908152a182516001600160a01b03166060919091015260206112506109f5565b83516001600160a01b03168152920151602083019081524360408085019190915251929061127d8461085e565b6000845260208401916000835260018060a01b03905116809452518152600460005543600155604051926020840152516040830152604082526112bf826108e1565b81516001600160401b038111610879576112da600254610824565b601f811161135d575b50602092601f82116001146113145792819293600092610ed05750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b8681106113455750836001959610610f0d57505050811b01600255565b91926020600181928685015181550194019201611328565b60026000526000805160206116c6833981519152601f830160051c810191602084106113a6575b601f0160051c01905b81811061139a57506112e3565b6000815560010161138d565b9091508190611384565b60405163100960cb60e01b815260146004820152602490fd5b60206113d6910151610b1b565b6004811015610b28576003146113ed575b50509050565b346115e9577f52d76670791a8e1ee3e594d04451ba460c79dcdce52f788492fc88e250c4247e602080860151604051908152a16080602085015191015260206114346109f5565b84516001600160a01b031681529301516001810193908481116115d3578410610b165760208101938452436040820152604051936114718561085e565b6000855260208501916000835260018060a01b03905116809552518152600460005543600155604051936020850152516040840152604083526114b3836108e1565b8251906001600160401b038211610879576114cd90610824565b601f8111611580575b50602092601f821160011461151a579281929360009261150f575b50508160011b916000199060031b1c1916176002555b8038806113e7565b0151905038806114f1565b601f19821693600260005260206000209160005b868110611568575083600195961061154f575b505050811b01600255611507565b015160001960f88460031b161c19169055388080611541565b9192602060018192868501518155019401920161152e565b60026000526000805160206116c6833981519152601f830160051c810191602084106115c9575b601f0160051c01905b8181106115bd57506114d6565b600081556001016115b0565b90915081906115a7565b634e487b7160e01b600052601160045260246000fd5b60405163100960cb60e01b815260156004820152602490fd5b60405163100960cb60e01b815260116004820152602490fd5b90506001541438610cfa565b506002600090815290916000805160206116c68339815191525b818310611659575050906020610cbe92820101610cb2565b6020919350806001915483858d01015201910190918892611641565b50506020610cbe9260ff19851682840152151560051b820101610cb2565b60405163100960cb60e01b815260106004820152602490fd5b60405163100960cb60e01b8152600f6004820152602490fdfe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000810000a`,
  BytecodeLen: 6656,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './src/contracts/index.rsh:44:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './src/contracts/index.rsh:85:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './src/contracts/index.rsh:47:41:after expr stmt semicolon',
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
  "Auctions_getAdminAddress": Auctions_getAdminAddress,
  "Auctions_getID": Auctions_getID
  };
export const _APIs = {
  Auctions: {
    created: Auctions_created,
    ended: Auctions_ended,
    getAdminAddress: Auctions_getAdminAddress,
    getID: Auctions_getID
    }
  };
