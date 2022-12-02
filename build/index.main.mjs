// Automatically generated with Reach 0.1.12 (0b231964)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (0b231964)';
export const _backendVersion = 25;

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
    lct: stdlib.checkedBigNumberify('./index.rsh:43:15:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:43:15:decimal', stdlib.UInt_max, '0'), []],
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
    pay: [stdlib.checkedBigNumberify('./index.rsh:45:15:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v285, time: v284, didSend: v27, from: v283 } = txn2;
      
      ;
      const v287 = await ctc.getContractInfo();
      
      const v289 = stdlib.checkedBigNumberify('./index.rsh:47:42:decimal', stdlib.UInt_max, '0');
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
    at: './index.rsh:45:15:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Admin'
    });
  const v287 = await ctc.getContractInfo();
  stdlib.protect(ctc0, await interact.deployed(v287), {
    at: './index.rsh:46:32:application',
    fs: ['at ./index.rsh:46:32:application call to [unknown function] (defined at: ./index.rsh:46:32:function exp)', 'at ./index.rsh:46:32:application call to "liftedInteract" (defined at: ./index.rsh:46:32:application)'],
    msg: 'deployed',
    who: 'Admin'
    });
  
  let v289 = stdlib.checkedBigNumberify('./index.rsh:47:42:decimal', stdlib.UInt_max, '0');
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
        const v377 = v368[stdlib.checkedBigNumberify('./index.rsh:54:21:spread', stdlib.UInt_max, '0')];
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
        const v463 = v429[stdlib.checkedBigNumberify('./index.rsh:70:21:spread', stdlib.UInt_max, '0')];
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
        const v611 = stdlib.safeAdd(v289, stdlib.checkedBigNumberify('./index.rsh:52:44:decimal', stdlib.UInt_max, '1'));
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
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:54:21:application call to [unknown function] (defined at: ./index.rsh:54:21:function exp)', 'at ./index.rsh:47:41:application call to "runAuctions_created0_43" (defined at: ./index.rsh:54:21:function exp)', 'at ./index.rsh:47:41:application call to [unknown function] (defined at: ./index.rsh:47:41:function exp)'],
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
    pay: [stdlib.checkedBigNumberify('./index.rsh:54:21:decimal', stdlib.UInt_max, '0'), []],
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
          const v377 = v368[stdlib.checkedBigNumberify('./index.rsh:54:21:spread', stdlib.UInt_max, '0')];
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
      const v377 = v368[stdlib.checkedBigNumberify('./index.rsh:54:21:spread', stdlib.UInt_max, '0')];
      const v378 = null;
      const v379 = await txn1.getOutput('Auctions_created', 'v378', ctc12, v378);
      if (v199) {
        stdlib.protect(ctc12, await interact.out(v368, v379), {
          at: './index.rsh:54:22:application',
          fs: ['at ./index.rsh:54:22:application call to [unknown function] (defined at: ./index.rsh:54:22:function exp)', 'at ./index.rsh:55:28:application call to "ret" (defined at: ./index.rsh:54:51:function exp)', 'at ./index.rsh:54:51:application call to [unknown function] (defined at: ./index.rsh:54:51:function exp)'],
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
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:70:21:application call to [unknown function] (defined at: ./index.rsh:70:21:function exp)', 'at ./index.rsh:47:41:application call to "runAuctions_ended0_43" (defined at: ./index.rsh:70:21:function exp)', 'at ./index.rsh:47:41:application call to [unknown function] (defined at: ./index.rsh:47:41:function exp)'],
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
    pay: [stdlib.checkedBigNumberify('./index.rsh:70:21:decimal', stdlib.UInt_max, '0'), []],
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
          const v463 = v429[stdlib.checkedBigNumberify('./index.rsh:70:21:spread', stdlib.UInt_max, '0')];
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
      const v463 = v429[stdlib.checkedBigNumberify('./index.rsh:70:21:spread', stdlib.UInt_max, '0')];
      const v464 = null;
      const v465 = await txn1.getOutput('Auctions_ended', 'v464', ctc12, v464);
      if (v199) {
        stdlib.protect(ctc12, await interact.out(v429, v465), {
          at: './index.rsh:70:22:application',
          fs: ['at ./index.rsh:70:22:application call to [unknown function] (defined at: ./index.rsh:70:22:function exp)', 'at ./index.rsh:71:28:application call to "ret" (defined at: ./index.rsh:70:49:function exp)', 'at ./index.rsh:70:49:application call to [unknown function] (defined at: ./index.rsh:70:49:function exp)'],
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
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:81:21:application call to [unknown function] (defined at: ./index.rsh:81:21:function exp)', 'at ./index.rsh:47:41:application call to "runAuctions_getAdminAddress0_43" (defined at: ./index.rsh:81:21:function exp)', 'at ./index.rsh:47:41:application call to [unknown function] (defined at: ./index.rsh:47:41:function exp)'],
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
    pay: [stdlib.checkedBigNumberify('./index.rsh:81:21:decimal', stdlib.UInt_max, '0'), []],
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
          at: './index.rsh:81:22:application',
          fs: ['at ./index.rsh:81:22:application call to [unknown function] (defined at: ./index.rsh:81:22:function exp)', 'at ./index.rsh:82:28:application call to "ret" (defined at: ./index.rsh:81:54:function exp)', 'at ./index.rsh:81:54:application call to [unknown function] (defined at: ./index.rsh:81:54:function exp)'],
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
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:50:21:application call to [unknown function] (defined at: ./index.rsh:50:21:function exp)', 'at ./index.rsh:47:41:application call to "runAuctions_getID0_43" (defined at: ./index.rsh:50:21:function exp)', 'at ./index.rsh:47:41:application call to [unknown function] (defined at: ./index.rsh:47:41:function exp)'],
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
    pay: [stdlib.checkedBigNumberify('./index.rsh:50:21:decimal', stdlib.UInt_max, '0'), []],
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
          
          const v611 = stdlib.safeAdd(v289, stdlib.checkedBigNumberify('./index.rsh:52:44:decimal', stdlib.UInt_max, '1'));
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
          at: './index.rsh:50:22:application',
          fs: ['at ./index.rsh:50:22:application call to [unknown function] (defined at: ./index.rsh:50:22:function exp)', 'at ./index.rsh:51:28:application call to "ret" (defined at: ./index.rsh:50:44:function exp)', 'at ./index.rsh:50:44:application call to [unknown function] (defined at: ./index.rsh:50:44:function exp)'],
          msg: 'out',
          who: 'Auctions_getID'
          });
        }
      else {
        }
      
      const v611 = stdlib.safeAdd(v289, stdlib.checkedBigNumberify('./index.rsh:52:44:decimal', stdlib.UInt_max, '1'));
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
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T12",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "components": [
                          {
                            "internalType": "uint256",
                            "name": "id",
                            "type": "uint256"
                          },
                          {
                            "internalType": "address payable",
                            "name": "contractInfo",
                            "type": "address"
                          },
                          {
                            "internalType": "uint256",
                            "name": "blockCreated",
                            "type": "uint256"
                          },
                          {
                            "internalType": "address payable",
                            "name": "owner",
                            "type": "address"
                          },
                          {
                            "internalType": "bytes20",
                            "name": "title",
                            "type": "bytes20"
                          },
                          {
                            "components": [
                              {
                                "internalType": "bytes32",
                                "name": "elem0",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem1",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes16",
                                "name": "elem2",
                                "type": "bytes16"
                              }
                            ],
                            "internalType": "struct T6",
                            "name": "description",
                            "type": "tuple"
                          },
                          {
                            "internalType": "uint256",
                            "name": "price",
                            "type": "uint256"
                          },
                          {
                            "internalType": "address payable",
                            "name": "tokenId",
                            "type": "address"
                          }
                        ],
                        "internalType": "struct T7",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T8",
                    "name": "_Auctions_created0_43",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "components": [
                          {
                            "internalType": "uint256",
                            "name": "id",
                            "type": "uint256"
                          },
                          {
                            "internalType": "uint256",
                            "name": "blockEnded",
                            "type": "uint256"
                          },
                          {
                            "internalType": "uint256",
                            "name": "lastBid",
                            "type": "uint256"
                          }
                        ],
                        "internalType": "struct T9",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T10",
                    "name": "_Auctions_ended0_43",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Auctions_getAdminAddress0_43",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Auctions_getID0_43",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T12",
                "name": "v365",
                "type": "tuple"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v0",
        "type": "address"
      }
    ],
    "name": "_reach_oe_v280",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      }
    ],
    "name": "_reach_oe_v289",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v378",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v464",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v1",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v2",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v3",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bytes20",
        "name": "v4",
        "type": "bytes20"
      },
      {
        "components": [
          {
            "internalType": "bytes32",
            "name": "elem0",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem1",
            "type": "bytes32"
          },
          {
            "internalType": "bytes16",
            "name": "elem2",
            "type": "bytes16"
          }
        ],
        "indexed": false,
        "internalType": "struct T6",
        "name": "v5",
        "type": "tuple"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v6",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v7",
        "type": "address"
      }
    ],
    "name": "create",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v1",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v2",
        "type": "uint256"
      }
    ],
    "name": "end",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "address payable",
            "name": "contractInfo",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "blockCreated",
            "type": "uint256"
          },
          {
            "internalType": "address payable",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "bytes20",
            "name": "title",
            "type": "bytes20"
          },
          {
            "components": [
              {
                "internalType": "bytes32",
                "name": "elem0",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem1",
                "type": "bytes32"
              },
              {
                "internalType": "bytes16",
                "name": "elem2",
                "type": "bytes16"
              }
            ],
            "internalType": "struct T6",
            "name": "description",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "price",
            "type": "uint256"
          },
          {
            "internalType": "address payable",
            "name": "tokenId",
            "type": "address"
          }
        ],
        "internalType": "struct T7",
        "name": "_a0",
        "type": "tuple"
      }
    ],
    "name": "Auctions_created",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "blockEnded",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "lastBid",
            "type": "uint256"
          }
        ],
        "internalType": "struct T9",
        "name": "_a0",
        "type": "tuple"
      }
    ],
    "name": "Auctions_ended",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Auctions_getAdminAddress",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Auctions_getID",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T12",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "components": [
                          {
                            "internalType": "uint256",
                            "name": "id",
                            "type": "uint256"
                          },
                          {
                            "internalType": "address payable",
                            "name": "contractInfo",
                            "type": "address"
                          },
                          {
                            "internalType": "uint256",
                            "name": "blockCreated",
                            "type": "uint256"
                          },
                          {
                            "internalType": "address payable",
                            "name": "owner",
                            "type": "address"
                          },
                          {
                            "internalType": "bytes20",
                            "name": "title",
                            "type": "bytes20"
                          },
                          {
                            "components": [
                              {
                                "internalType": "bytes32",
                                "name": "elem0",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem1",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes16",
                                "name": "elem2",
                                "type": "bytes16"
                              }
                            ],
                            "internalType": "struct T6",
                            "name": "description",
                            "type": "tuple"
                          },
                          {
                            "internalType": "uint256",
                            "name": "price",
                            "type": "uint256"
                          },
                          {
                            "internalType": "address payable",
                            "name": "tokenId",
                            "type": "address"
                          }
                        ],
                        "internalType": "struct T7",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T8",
                    "name": "_Auctions_created0_43",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "components": [
                          {
                            "internalType": "uint256",
                            "name": "id",
                            "type": "uint256"
                          },
                          {
                            "internalType": "uint256",
                            "name": "blockEnded",
                            "type": "uint256"
                          },
                          {
                            "internalType": "uint256",
                            "name": "lastBid",
                            "type": "uint256"
                          }
                        ],
                        "internalType": "struct T9",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T10",
                    "name": "_Auctions_ended0_43",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Auctions_getAdminAddress0_43",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Auctions_getID0_43",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T12",
                "name": "v365",
                "type": "tuple"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001621380380620016218339810160408190526200002691620001a4565b600080554360035560408051338152825160208083019190915283015115158183015290517faf3102e4a96b239a2811210526ca19adcde1af3e2876a2c9a5886a5a887a2dcb9181900360600190a16200008334156007620000d4565b6040805160208082018352338083526001600081905543905583519182015290910160405160208183030381529060405260029080519060200190620000cb929190620000fe565b5050506200024c565b81620000fa5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200010c906200020f565b90600052602060002090601f0160209004810192826200013057600085556200017b565b82601f106200014b57805160ff19168380011785556200017b565b828001600101855582156200017b579182015b828111156200017b5782518255916020019190600101906200015e565b50620001899291506200018d565b5090565b5b808211156200018957600081556001016200018e565b600060408284031215620001b757600080fd5b604080519081016001600160401b0381118282101715620001e857634e487b7160e01b600052604160045260246000fd5b60405282518152602083015180151581146200020357600080fd5b60208201529392505050565b600181811c908216806200022457607f821691505b602082108114156200024657634e487b7160e01b600052602260045260246000fd5b50919050565b6113c5806200025c6000396000f3fe6080604052600436106100845760003560e01c80634c344d9d116100565780634c344d9d146100ef578063548cbaae146101025780638323075714610115578063ab53f2c61461012a578063ea83bb461461014d57005b80630c7d57ce1461008d5780631e93b0f1146100b55780632c10a159146100d45780632cfbfba7146100e757005b3661008b57005b005b6100a061009b366004610e94565b61016d565b60405190151581526020015b60405180910390f35b3480156100c157600080fd5b506003545b6040519081526020016100ac565b61008b6100e2366004610eb8565b61017e565b6100c66101be565b6100a06100fd366004610f0a565b6101cd565b61008b610110366004610f26565b6101d8565b34801561012157600080fd5b506001546100c6565b34801561013657600080fd5b5061013f610214565b6040516100ac929190610f39565b6101556102b1565b6040516001600160a01b0390911681526020016100ac565b6000610178826102bb565b92915050565b6040805160808101825260008082526020820181905291810182905260608101919091526101ba6101b436849003840184610fa6565b8261030b565b5050565b60006101c8610480565b905090565b6000610178826104cc565b6040805160808101825260008082526020820181905291810182905260608101919091526101ba61020e36849003840184611037565b82610523565b60006060600054600280805461022990611106565b80601f016020809104026020016040519081016040528092919081815260200182805461025590611106565b80156102a25780601f10610277576101008083540402835291602001916102a2565b820191906000526020600020905b81548152906001019060200180831161028557829003601f168201915b50505050509050915091509091565b60006101c8610940565b60006102c5610a6c565b602081810180515160009081905290515182015185905260408051608081018252828152928301829052820181905260608201526103038282610523565b519392505050565b61031b600160005414600a61098c565b815161033690158061032f57508251600154145b600b61098c565b60008080556002805461034890611106565b80601f016020809104026020016040519081016040528092919081815260200182805461037490611106565b80156103c15780601f10610396576101008083540402835291602001916103c1565b820191906000526020600020905b8154815290600101906020018083116103a457829003601f168201915b50505050508060200190518101906103d99190611151565b60408051338152855160208083019190915286015115158183015290519192507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1919081900360600190a16104303415600861098c565b8051610448906001600160a01b03163314600961098c565b610450610a8b565b815181516001600160a01b0390911690526020808201805160009052514391015261047a816109b2565b50505050565b600061048a610a6c565b602081810151516003905260408051608081018252600080825292810183905290810182905260608101919091526104c28282610523565b6060015192915050565b60006104d6610a6c565b60208181018051516001905251516040908101518590528051608081018252600080825292810183905290810182905260608101919091526105188282610523565b602001519392505050565b610533600460005414601061098c565b815161054e90158061054757508251600154145b601161098c565b60008080556002805461056090611106565b80601f016020809104026020016040519081016040528092919081815260200182805461058c90611106565b80156105d95780601f106105ae576101008083540402835291602001916105d9565b820191906000526020600020905b8154815290600101906020018083116105bc57829003601f168201915b50505050508060200190518101906105f1919061117f565b90506105fb610ac2565b7f7b1cd81367f0fd47cfe82bda2423a23f697e614b3fab55cf33c5c2e5de5e3979338560405161062c9291906111b9565b60405180910390a1600060208501515151600381111561064e5761064e61113b565b141561074257602080850151510151815261066b3415600c61098c565b604051600081527fd50663b5ae236d5dccb746582de53a032a6a00c9e9fcdaa83c30f457dace712b9060200160405180910390a160008352805151805160208201516040808401516060850151608086015160a087015160c088015160e09098015194517f55648752e16a06369257037ff12234ced55d1627f04500d14c58cb79807cf4d3986106fe98979690916112e3565b60405180910390a161070e610a8b565b825181516001600160a01b039091169052602080840151818301805191909152514391015261073c816109b2565b5061047a565b600160208501515151600381111561075c5761075c61113b565b14156108075760208085015151604001519082015261077d3415600d61098c565b604051600081527fb832beec21eb5a266f1e1ab9c801b329f43cd4927b98857cf6dd4241b03cfb469060200160405180910390a160006020848101919091528181015151805181830151604092830151835192835293820152908101919091527f8ae1d12745070499deb90f74dbda066d3ebb9066dc64fa2d22e24615fabfb34c906060016106fe565b60026020850151515160038111156108215761082161113b565b141561088a576108333415600e61098c565b81516040516001600160a01b0390911681527f84dd5ff23f976b0260b8c1823173e9afa46ba168c18d239bc168da7e5f22fcd29060200160405180910390a181516001600160a01b0316604084015261070e610a8b565b60036020850151515160038111156108a4576108a461113b565b141561047a576108b63415600f61098c565b7f52d76670791a8e1ee3e594d04451ba460c79dcdce52f788492fc88e250c4247e82602001516040516108eb91815260200190565b60405180910390a160208201516060840152610905610a8b565b825181516001600160a01b0390911690526020830151610926906001610a1f565b602080830180519290925290514391015261073c816109b2565b600061094a610a6c565b602081810151516002905260408051608081018252600080825292810183905290810182905260608101919091526109828282610523565b6040015192915050565b816101ba5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b604080518082018252600080825260208083018281528551516001600160a01b0316808552868301515182526004909355436001558451808301939093525182850152835180830385018152606090920190935280519192610a1a9260029290910190610b01565b505050565b600082610a2c8382611369565b91508110156101785760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b60448201526064016109a9565b604051806040016040528060008152602001610a86610b85565b905290565b6040805160608101825260009181019182529081908152602001610a86604051806040016040528060008152602001600081525090565b6040518060400160405280610ad5610b98565b8152602001610a8660408051608081018252600060208201818152928201819052606082015290815290565b828054610b0d90611106565b90600052602060002090601f016020900481019282610b2f5760008555610b75565b82601f10610b4857805160ff1916838001178555610b75565b82800160010185558215610b75579182015b82811115610b75578251825591602001919060010190610b5a565b50610b81929150610bf7565b5090565b6040518060200160405280610a86610c0c565b60408051610120810182526000602080830182815283850183905260608085018490526080850184905260a085018490528551908101865283815291820183905293810182905260c083015260e0820181905261010082015290815290565b5b80821115610b815760008155600101610bf8565b6040805160a081019091528060008152602001610c27610b98565b8152602001610c5360408051608081018252600060208201818152928201819052606082015290815290565b815260006020820181905260409091015290565b6040516060810167ffffffffffffffff81118282101715610c9857634e487b7160e01b600052604160045260246000fd5b60405290565b604051610100810167ffffffffffffffff81118282101715610c9857634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff81118282101715610c9857634e487b7160e01b600052604160045260246000fd5b6040516020810167ffffffffffffffff81118282101715610c9857634e487b7160e01b600052604160045260246000fd5b60405160a0810167ffffffffffffffff81118282101715610c9857634e487b7160e01b600052604160045260246000fd5b6001600160a01b0381168114610d7857600080fd5b50565b8035610d8681610d63565b919050565b80356bffffffffffffffffffffffff1981168114610d8657600080fd5b600060608284031215610dba57600080fd5b610dc2610c67565b9050813581526020820135602082015260408201356fffffffffffffffffffffffffffffffff1981168114610df657600080fd5b604082015292915050565b60006101408284031215610e1457600080fd5b610e1c610c9e565b905081358152610e2e60208301610d7b565b602082015260408201356040820152610e4960608301610d7b565b6060820152610e5a60808301610d8b565b6080820152610e6c8360a08401610da8565b60a082015261010082013560c0820152610e896101208301610d7b565b60e082015292915050565b60006101408284031215610ea757600080fd5b610eb18383610e01565b9392505050565b600060408284031215610eca57600080fd5b50919050565b600060608284031215610ee257600080fd5b610eea610c67565b905081358152602082013560208201526040820135604082015292915050565b600060608284031215610f1c57600080fd5b610eb18383610ed0565b60006102208284031215610eca57600080fd5b82815260006020604081840152835180604085015260005b81811015610f6d57858101830151858201606001528201610f51565b81811115610f7f576000606083870101525b50601f01601f191692909201606001949350505050565b80358015158114610d8657600080fd5b600060408284031215610fb857600080fd5b610fc0610cd0565b82358152610fd060208401610f96565b60208201529392505050565b600060608284031215610fee57600080fd5b6040516020810181811067ffffffffffffffff8211171561101f57634e487b7160e01b600052604160045260246000fd5b60405290508061102f8484610ed0565b905292915050565b600081830361022081121561104b57600080fd5b611053610cd0565b8335815261020080601f198401121561106b57600080fd5b611073610d01565b61107b610d32565b60208701356004811061108d57600080fd5b8152610140603f19860112156110a257600080fd5b6110aa610d01565b94506110b98860408901610e01565b85528460208201526110cf886101808901610fdc565b60408201526110e16101e08801610f96565b60608201526110f1838801610f96565b60808201528152602083015250949350505050565b600181811c9082168061111a57607f821691505b60208210811415610eca57634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052602160045260246000fd5b60006020828403121561116357600080fd5b61116b610d01565b825161117681610d63565b81529392505050565b60006040828403121561119157600080fd5b611199610cd0565b82516111a481610d63565b81526020928301519281019290925250919050565b6001600160a01b03838116825282516020808401919091528301515180516102408401929190600481106111fd57634e487b7160e01b600052602160045260246000fd5b8060408601525060208101515180516060860152826020820151166080860152604081015160a08601528260608201511660c08601526bffffffffffffffffffffffff1960808201511660e086015260a0810151925061127f61010086018480518252602080820151908301526040908101516001600160801b031916910152565b60c081015161016086015260e001516001600160a01b03166101808501526040818101515180516101a087015260208101516101c087015201516101e085015260608101511515610200850152608001511515610220909301929092529392505050565b8881526001600160a01b0388811660208301526040820188905286811660608301526bffffffffffffffffffffffff198616608083015261014082019061134b60a084018780518252602080820151908301526040908101516001600160801b031916910152565b84610100840152808416610120840152509998505050505050505050565b6000821982111561138a57634e487b7160e01b600052601160045260246000fd5b50019056fea2646970667358221220bb3bc60d8488e6c2b1a277528a34230f16f39359c172fad6aa221c795aebd7e564736f6c634300080c0033`,
  BytecodeLen: 5665,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:44:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:85:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:47:41:after expr stmt semicolon',
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
