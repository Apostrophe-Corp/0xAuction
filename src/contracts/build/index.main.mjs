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
  const ctc12 = stdlib.T_Tuple([ctc1, ctc3]);
  const ctc13 = stdlib.T_Data({
    Auctions_created0_44: ctc8,
    Auctions_ended0_44: ctc10,
    Auctions_getAdminAddress0_44: ctc11,
    Auctions_getID0_44: ctc11,
    Auctions_updateHighestBidder0_44: ctc12
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
      
      
      const {data: [], secs: v332, time: v331, didSend: v22, from: v330 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v332, time: v331, didSend: v22, from: v330 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v330],
    evt_cnt: 0,
    funcNum: 1,
    lct: v331,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./src/contracts/index.rsh:47:15:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v335, time: v334, didSend: v27, from: v333 } = txn2;
      
      ;
      const v337 = await ctc.getContractInfo();
      
      const v339 = stdlib.checkedBigNumberify('./src/contracts/index.rsh:49:42:decimal', stdlib.UInt_max, '0');
      const v340 = v334;
      
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
  const {data: [], secs: v335, time: v334, didSend: v27, from: v333 } = txn2;
  ;
  const v336 = stdlib.addressEq(v330, v333);
  stdlib.assert(v336, {
    at: './src/contracts/index.rsh:47:15:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Admin'
    });
  const v337 = await ctc.getContractInfo();
  stdlib.protect(ctc0, await interact.deployed(v337), {
    at: './src/contracts/index.rsh:48:32:application',
    fs: ['at ./src/contracts/index.rsh:48:32:application call to [unknown function] (defined at: ./src/contracts/index.rsh:48:32:function exp)', 'at ./src/contracts/index.rsh:48:32:application call to "liftedInteract" (defined at: ./src/contracts/index.rsh:48:32:application)'],
    msg: 'deployed',
    who: 'Admin'
    });
  
  let v339 = stdlib.checkedBigNumberify('./src/contracts/index.rsh:49:42:decimal', stdlib.UInt_max, '0');
  let v340 = v334;
  
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
    const {data: [v430], secs: v432, time: v431, didSend: v236, from: v429 } = txn4;
    switch (v430[0]) {
      case 'Auctions_created0_44': {
        const v433 = v430[1];
        undefined /* setApiDetails */;
        ;
        const v443 = v433[stdlib.checkedBigNumberify('./src/contracts/index.rsh:56:21:spread', stdlib.UInt_max, '0')];
        const v444 = null;
        await txn4.getOutput('Auctions_created', 'v444', ctc0, v444);
        const v459 = v443.id;
        const v460 = v443.contractInfo;
        const v461 = v443.blockCreated;
        const v462 = v443.owner;
        const v463 = v443.title;
        const v464 = v443.description;
        const v465 = v443.price;
        const v466 = v443.tokenId;
        null;
        const cv339 = v339;
        const cv340 = v431;
        
        v339 = cv339;
        v340 = cv340;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'Auctions_ended0_44': {
        const v506 = v430[1];
        undefined /* setApiDetails */;
        ;
        const v541 = v506[stdlib.checkedBigNumberify('./src/contracts/index.rsh:72:21:spread', stdlib.UInt_max, '0')];
        const v542 = v541.id;
        const v543 = v541.blockEnded;
        const v544 = v541.lastBid;
        null;
        const v545 = null;
        await txn4.getOutput('Auctions_ended', 'v545', ctc0, v545);
        const cv339 = v339;
        const cv340 = v431;
        
        v339 = cv339;
        v340 = cv340;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'Auctions_getAdminAddress0_44': {
        const v579 = v430[1];
        undefined /* setApiDetails */;
        ;
        await txn4.getOutput('Auctions_getAdminAddress', 'v330', ctc3, v330);
        const cv339 = v339;
        const cv340 = v431;
        
        v339 = cv339;
        v340 = cv340;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'Auctions_getID0_44': {
        const v652 = v430[1];
        undefined /* setApiDetails */;
        ;
        await txn4.getOutput('Auctions_getID', 'v339', ctc1, v339);
        const v713 = stdlib.safeAdd(v339, stdlib.checkedBigNumberify('./src/contracts/index.rsh:54:44:decimal', stdlib.UInt_max, '1'));
        const cv339 = v713;
        const cv340 = v431;
        
        v339 = cv339;
        v340 = cv340;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'Auctions_updateHighestBidder0_44': {
        const v725 = v430[1];
        undefined /* setApiDetails */;
        ;
        const v788 = v725[stdlib.checkedBigNumberify('./src/contracts/index.rsh:87:21:spread', stdlib.UInt_max, '0')];
        const v789 = v725[stdlib.checkedBigNumberify('./src/contracts/index.rsh:87:21:spread', stdlib.UInt_max, '1')];
        null;
        const v790 = null;
        await txn4.getOutput('Auctions_updateHighestBidder', 'v790', ctc0, v790);
        const cv339 = v339;
        const cv340 = v431;
        
        v339 = cv339;
        v340 = cv340;
        
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
  const ctc11 = stdlib.T_Tuple([ctc1, ctc0]);
  const ctc12 = stdlib.T_Data({
    Auctions_created0_44: ctc7,
    Auctions_ended0_44: ctc9,
    Auctions_getAdminAddress0_44: ctc10,
    Auctions_getID0_44: ctc10,
    Auctions_updateHighestBidder0_44: ctc11
    });
  const ctc13 = stdlib.T_Null;
  
  
  const [v330, v339] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1]);
  const v360 = stdlib.protect(ctc7, await interact.in(), {
    at: './src/contracts/index.rsh:1:23:application',
    fs: ['at ./src/contracts/index.rsh:56:21:application call to [unknown function] (defined at: ./src/contracts/index.rsh:56:21:function exp)', 'at ./src/contracts/index.rsh:49:41:application call to "runAuctions_created0_44" (defined at: ./src/contracts/index.rsh:56:21:function exp)', 'at ./src/contracts/index.rsh:49:41:application call to [unknown function] (defined at: ./src/contracts/index.rsh:49:41:function exp)'],
    msg: 'in',
    who: 'Auctions_created'
    });
  const v383 = ['Auctions_created0_44', v360];
  
  const txn1 = await (ctc.sendrecv({
    args: [v330, v339, v383],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc12],
    pay: [stdlib.checkedBigNumberify('./src/contracts/index.rsh:56:21:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v430], secs: v432, time: v431, didSend: v236, from: v429 } = txn1;
      
      switch (v430[0]) {
        case 'Auctions_created0_44': {
          const v433 = v430[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Auctions_created"
            });
          ;
          const v443 = v433[stdlib.checkedBigNumberify('./src/contracts/index.rsh:56:21:spread', stdlib.UInt_max, '0')];
          const v444 = null;
          const v445 = await txn1.getOutput('Auctions_created', 'v444', ctc13, v444);
          
          const v459 = v443.id;
          const v460 = v443.contractInfo;
          const v461 = v443.blockCreated;
          const v462 = v443.owner;
          const v463 = v443.title;
          const v464 = v443.description;
          const v465 = v443.price;
          const v466 = v443.tokenId;
          null;
          const v1438 = v339;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Auctions_ended0_44': {
          const v506 = v430[1];
          
          break;
          }
        case 'Auctions_getAdminAddress0_44': {
          const v579 = v430[1];
          
          break;
          }
        case 'Auctions_getID0_44': {
          const v652 = v430[1];
          
          break;
          }
        case 'Auctions_updateHighestBidder0_44': {
          const v725 = v430[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [v430], secs: v432, time: v431, didSend: v236, from: v429 } = txn1;
  switch (v430[0]) {
    case 'Auctions_created0_44': {
      const v433 = v430[1];
      undefined /* setApiDetails */;
      ;
      const v443 = v433[stdlib.checkedBigNumberify('./src/contracts/index.rsh:56:21:spread', stdlib.UInt_max, '0')];
      const v444 = null;
      const v445 = await txn1.getOutput('Auctions_created', 'v444', ctc13, v444);
      if (v236) {
        stdlib.protect(ctc13, await interact.out(v433, v445), {
          at: './src/contracts/index.rsh:56:22:application',
          fs: ['at ./src/contracts/index.rsh:56:22:application call to [unknown function] (defined at: ./src/contracts/index.rsh:56:22:function exp)', 'at ./src/contracts/index.rsh:57:28:application call to "ret" (defined at: ./src/contracts/index.rsh:56:51:function exp)', 'at ./src/contracts/index.rsh:56:51:application call to [unknown function] (defined at: ./src/contracts/index.rsh:56:51:function exp)'],
          msg: 'out',
          who: 'Auctions_created'
          });
        }
      else {
        }
      
      const v459 = v443.id;
      const v460 = v443.contractInfo;
      const v461 = v443.blockCreated;
      const v462 = v443.owner;
      const v463 = v443.title;
      const v464 = v443.description;
      const v465 = v443.price;
      const v466 = v443.tokenId;
      null;
      const v1438 = v339;
      return;
      
      break;
      }
    case 'Auctions_ended0_44': {
      const v506 = v430[1];
      return;
      break;
      }
    case 'Auctions_getAdminAddress0_44': {
      const v579 = v430[1];
      return;
      break;
      }
    case 'Auctions_getID0_44': {
      const v652 = v430[1];
      return;
      break;
      }
    case 'Auctions_updateHighestBidder0_44': {
      const v725 = v430[1];
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
  const ctc11 = stdlib.T_Tuple([ctc1, ctc0]);
  const ctc12 = stdlib.T_Data({
    Auctions_created0_44: ctc9,
    Auctions_ended0_44: ctc3,
    Auctions_getAdminAddress0_44: ctc10,
    Auctions_getID0_44: ctc10,
    Auctions_updateHighestBidder0_44: ctc11
    });
  const ctc13 = stdlib.T_Null;
  
  
  const [v330, v339] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1]);
  const v387 = stdlib.protect(ctc3, await interact.in(), {
    at: './src/contracts/index.rsh:1:23:application',
    fs: ['at ./src/contracts/index.rsh:72:21:application call to [unknown function] (defined at: ./src/contracts/index.rsh:72:21:function exp)', 'at ./src/contracts/index.rsh:49:41:application call to "runAuctions_ended0_44" (defined at: ./src/contracts/index.rsh:72:21:function exp)', 'at ./src/contracts/index.rsh:49:41:application call to [unknown function] (defined at: ./src/contracts/index.rsh:49:41:function exp)'],
    msg: 'in',
    who: 'Auctions_ended'
    });
  const v400 = ['Auctions_ended0_44', v387];
  
  const txn1 = await (ctc.sendrecv({
    args: [v330, v339, v400],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc12],
    pay: [stdlib.checkedBigNumberify('./src/contracts/index.rsh:72:21:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v430], secs: v432, time: v431, didSend: v236, from: v429 } = txn1;
      
      switch (v430[0]) {
        case 'Auctions_created0_44': {
          const v433 = v430[1];
          
          break;
          }
        case 'Auctions_ended0_44': {
          const v506 = v430[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Auctions_ended"
            });
          ;
          const v541 = v506[stdlib.checkedBigNumberify('./src/contracts/index.rsh:72:21:spread', stdlib.UInt_max, '0')];
          const v542 = v541.id;
          const v543 = v541.blockEnded;
          const v544 = v541.lastBid;
          null;
          const v545 = null;
          const v546 = await txn1.getOutput('Auctions_ended', 'v545', ctc13, v545);
          
          const v1450 = v339;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Auctions_getAdminAddress0_44': {
          const v579 = v430[1];
          
          break;
          }
        case 'Auctions_getID0_44': {
          const v652 = v430[1];
          
          break;
          }
        case 'Auctions_updateHighestBidder0_44': {
          const v725 = v430[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [v430], secs: v432, time: v431, didSend: v236, from: v429 } = txn1;
  switch (v430[0]) {
    case 'Auctions_created0_44': {
      const v433 = v430[1];
      return;
      break;
      }
    case 'Auctions_ended0_44': {
      const v506 = v430[1];
      undefined /* setApiDetails */;
      ;
      const v541 = v506[stdlib.checkedBigNumberify('./src/contracts/index.rsh:72:21:spread', stdlib.UInt_max, '0')];
      const v542 = v541.id;
      const v543 = v541.blockEnded;
      const v544 = v541.lastBid;
      null;
      const v545 = null;
      const v546 = await txn1.getOutput('Auctions_ended', 'v545', ctc13, v545);
      if (v236) {
        stdlib.protect(ctc13, await interact.out(v506, v546), {
          at: './src/contracts/index.rsh:72:22:application',
          fs: ['at ./src/contracts/index.rsh:72:22:application call to [unknown function] (defined at: ./src/contracts/index.rsh:72:22:function exp)', 'at ./src/contracts/index.rsh:80:28:application call to "ret" (defined at: ./src/contracts/index.rsh:72:49:function exp)', 'at ./src/contracts/index.rsh:72:49:application call to [unknown function] (defined at: ./src/contracts/index.rsh:72:49:function exp)'],
          msg: 'out',
          who: 'Auctions_ended'
          });
        }
      else {
        }
      
      const v1450 = v339;
      return;
      
      break;
      }
    case 'Auctions_getAdminAddress0_44': {
      const v579 = v430[1];
      return;
      break;
      }
    case 'Auctions_getID0_44': {
      const v652 = v430[1];
      return;
      break;
      }
    case 'Auctions_updateHighestBidder0_44': {
      const v725 = v430[1];
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
  const ctc11 = stdlib.T_Tuple([ctc1, ctc0]);
  const ctc12 = stdlib.T_Data({
    Auctions_created0_44: ctc8,
    Auctions_ended0_44: ctc10,
    Auctions_getAdminAddress0_44: ctc2,
    Auctions_getID0_44: ctc2,
    Auctions_updateHighestBidder0_44: ctc11
    });
  const ctc13 = stdlib.T_Null;
  
  
  const [v330, v339] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1]);
  const v404 = stdlib.protect(ctc2, await interact.in(), {
    at: './src/contracts/index.rsh:1:23:application',
    fs: ['at ./src/contracts/index.rsh:83:21:application call to [unknown function] (defined at: ./src/contracts/index.rsh:83:21:function exp)', 'at ./src/contracts/index.rsh:49:41:application call to "runAuctions_getAdminAddress0_44" (defined at: ./src/contracts/index.rsh:83:21:function exp)', 'at ./src/contracts/index.rsh:49:41:application call to [unknown function] (defined at: ./src/contracts/index.rsh:49:41:function exp)'],
    msg: 'in',
    who: 'Auctions_getAdminAddress'
    });
  const v408 = ['Auctions_getAdminAddress0_44', v404];
  
  const txn1 = await (ctc.sendrecv({
    args: [v330, v339, v408],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc12],
    pay: [stdlib.checkedBigNumberify('./src/contracts/index.rsh:83:21:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v430], secs: v432, time: v431, didSend: v236, from: v429 } = txn1;
      
      switch (v430[0]) {
        case 'Auctions_created0_44': {
          const v433 = v430[1];
          
          break;
          }
        case 'Auctions_ended0_44': {
          const v506 = v430[1];
          
          break;
          }
        case 'Auctions_getAdminAddress0_44': {
          const v579 = v430[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Auctions_getAdminAddress"
            });
          ;
          const v629 = await txn1.getOutput('Auctions_getAdminAddress', 'v330', ctc0, v330);
          
          const v1462 = v339;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Auctions_getID0_44': {
          const v652 = v430[1];
          
          break;
          }
        case 'Auctions_updateHighestBidder0_44': {
          const v725 = v430[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [v430], secs: v432, time: v431, didSend: v236, from: v429 } = txn1;
  switch (v430[0]) {
    case 'Auctions_created0_44': {
      const v433 = v430[1];
      return;
      break;
      }
    case 'Auctions_ended0_44': {
      const v506 = v430[1];
      return;
      break;
      }
    case 'Auctions_getAdminAddress0_44': {
      const v579 = v430[1];
      undefined /* setApiDetails */;
      ;
      const v629 = await txn1.getOutput('Auctions_getAdminAddress', 'v330', ctc0, v330);
      if (v236) {
        stdlib.protect(ctc13, await interact.out(v579, v629), {
          at: './src/contracts/index.rsh:83:22:application',
          fs: ['at ./src/contracts/index.rsh:83:22:application call to [unknown function] (defined at: ./src/contracts/index.rsh:83:22:function exp)', 'at ./src/contracts/index.rsh:84:28:application call to "ret" (defined at: ./src/contracts/index.rsh:83:54:function exp)', 'at ./src/contracts/index.rsh:83:54:application call to [unknown function] (defined at: ./src/contracts/index.rsh:83:54:function exp)'],
          msg: 'out',
          who: 'Auctions_getAdminAddress'
          });
        }
      else {
        }
      
      const v1462 = v339;
      return;
      
      break;
      }
    case 'Auctions_getID0_44': {
      const v652 = v430[1];
      return;
      break;
      }
    case 'Auctions_updateHighestBidder0_44': {
      const v725 = v430[1];
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
  const ctc11 = stdlib.T_Tuple([ctc1, ctc0]);
  const ctc12 = stdlib.T_Data({
    Auctions_created0_44: ctc8,
    Auctions_ended0_44: ctc10,
    Auctions_getAdminAddress0_44: ctc2,
    Auctions_getID0_44: ctc2,
    Auctions_updateHighestBidder0_44: ctc11
    });
  const ctc13 = stdlib.T_Null;
  
  
  const [v330, v339] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1]);
  const v352 = stdlib.protect(ctc2, await interact.in(), {
    at: './src/contracts/index.rsh:1:23:application',
    fs: ['at ./src/contracts/index.rsh:52:21:application call to [unknown function] (defined at: ./src/contracts/index.rsh:52:21:function exp)', 'at ./src/contracts/index.rsh:49:41:application call to "runAuctions_getID0_44" (defined at: ./src/contracts/index.rsh:52:21:function exp)', 'at ./src/contracts/index.rsh:49:41:application call to [unknown function] (defined at: ./src/contracts/index.rsh:49:41:function exp)'],
    msg: 'in',
    who: 'Auctions_getID'
    });
  const v356 = ['Auctions_getID0_44', v352];
  
  const txn1 = await (ctc.sendrecv({
    args: [v330, v339, v356],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc12],
    pay: [stdlib.checkedBigNumberify('./src/contracts/index.rsh:52:21:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v430], secs: v432, time: v431, didSend: v236, from: v429 } = txn1;
      
      switch (v430[0]) {
        case 'Auctions_created0_44': {
          const v433 = v430[1];
          
          break;
          }
        case 'Auctions_ended0_44': {
          const v506 = v430[1];
          
          break;
          }
        case 'Auctions_getAdminAddress0_44': {
          const v579 = v430[1];
          
          break;
          }
        case 'Auctions_getID0_44': {
          const v652 = v430[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Auctions_getID"
            });
          ;
          const v708 = await txn1.getOutput('Auctions_getID', 'v339', ctc1, v339);
          
          const v713 = stdlib.safeAdd(v339, stdlib.checkedBigNumberify('./src/contracts/index.rsh:54:44:decimal', stdlib.UInt_max, '1'));
          const v1474 = v713;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Auctions_updateHighestBidder0_44': {
          const v725 = v430[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [v430], secs: v432, time: v431, didSend: v236, from: v429 } = txn1;
  switch (v430[0]) {
    case 'Auctions_created0_44': {
      const v433 = v430[1];
      return;
      break;
      }
    case 'Auctions_ended0_44': {
      const v506 = v430[1];
      return;
      break;
      }
    case 'Auctions_getAdminAddress0_44': {
      const v579 = v430[1];
      return;
      break;
      }
    case 'Auctions_getID0_44': {
      const v652 = v430[1];
      undefined /* setApiDetails */;
      ;
      const v708 = await txn1.getOutput('Auctions_getID', 'v339', ctc1, v339);
      if (v236) {
        stdlib.protect(ctc13, await interact.out(v652, v708), {
          at: './src/contracts/index.rsh:52:22:application',
          fs: ['at ./src/contracts/index.rsh:52:22:application call to [unknown function] (defined at: ./src/contracts/index.rsh:52:22:function exp)', 'at ./src/contracts/index.rsh:53:28:application call to "ret" (defined at: ./src/contracts/index.rsh:52:44:function exp)', 'at ./src/contracts/index.rsh:52:44:application call to [unknown function] (defined at: ./src/contracts/index.rsh:52:44:function exp)'],
          msg: 'out',
          who: 'Auctions_getID'
          });
        }
      else {
        }
      
      const v713 = stdlib.safeAdd(v339, stdlib.checkedBigNumberify('./src/contracts/index.rsh:54:44:decimal', stdlib.UInt_max, '1'));
      const v1474 = v713;
      return;
      
      break;
      }
    case 'Auctions_updateHighestBidder0_44': {
      const v725 = v430[1];
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
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Tuple([ctc1, ctc0]);
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '80'));
  const ctc6 = stdlib.T_Token;
  const ctc7 = stdlib.T_Struct([['id', ctc1], ['contractInfo', ctc3], ['blockCreated', ctc1], ['owner', ctc0], ['title', ctc4], ['description', ctc5], ['price', ctc1], ['tokenId', ctc6]]);
  const ctc8 = stdlib.T_Tuple([ctc7]);
  const ctc9 = stdlib.T_Struct([['id', ctc1], ['blockEnded', ctc1], ['lastBid', ctc1]]);
  const ctc10 = stdlib.T_Tuple([ctc9]);
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Data({
    Auctions_created0_44: ctc8,
    Auctions_ended0_44: ctc10,
    Auctions_getAdminAddress0_44: ctc11,
    Auctions_getID0_44: ctc11,
    Auctions_updateHighestBidder0_44: ctc2
    });
  const ctc13 = stdlib.T_Null;
  
  
  const [v330, v339] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1]);
  const v412 = stdlib.protect(ctc2, await interact.in(), {
    at: './src/contracts/index.rsh:1:23:application',
    fs: ['at ./src/contracts/index.rsh:87:21:application call to [unknown function] (defined at: ./src/contracts/index.rsh:87:21:function exp)', 'at ./src/contracts/index.rsh:49:41:application call to "runAuctions_updateHighestBidder0_44" (defined at: ./src/contracts/index.rsh:87:21:function exp)', 'at ./src/contracts/index.rsh:49:41:application call to [unknown function] (defined at: ./src/contracts/index.rsh:49:41:function exp)'],
    msg: 'in',
    who: 'Auctions_updateHighestBidder'
    });
  const v422 = ['Auctions_updateHighestBidder0_44', v412];
  
  const txn1 = await (ctc.sendrecv({
    args: [v330, v339, v422],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc12],
    pay: [stdlib.checkedBigNumberify('./src/contracts/index.rsh:87:21:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v430], secs: v432, time: v431, didSend: v236, from: v429 } = txn1;
      
      switch (v430[0]) {
        case 'Auctions_created0_44': {
          const v433 = v430[1];
          
          break;
          }
        case 'Auctions_ended0_44': {
          const v506 = v430[1];
          
          break;
          }
        case 'Auctions_getAdminAddress0_44': {
          const v579 = v430[1];
          
          break;
          }
        case 'Auctions_getID0_44': {
          const v652 = v430[1];
          
          break;
          }
        case 'Auctions_updateHighestBidder0_44': {
          const v725 = v430[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Auctions_updateHighestBidder"
            });
          ;
          const v788 = v725[stdlib.checkedBigNumberify('./src/contracts/index.rsh:87:21:spread', stdlib.UInt_max, '0')];
          const v789 = v725[stdlib.checkedBigNumberify('./src/contracts/index.rsh:87:21:spread', stdlib.UInt_max, '1')];
          null;
          const v790 = null;
          const v791 = await txn1.getOutput('Auctions_updateHighestBidder', 'v790', ctc13, v790);
          
          const v1486 = v339;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [v430], secs: v432, time: v431, didSend: v236, from: v429 } = txn1;
  switch (v430[0]) {
    case 'Auctions_created0_44': {
      const v433 = v430[1];
      return;
      break;
      }
    case 'Auctions_ended0_44': {
      const v506 = v430[1];
      return;
      break;
      }
    case 'Auctions_getAdminAddress0_44': {
      const v579 = v430[1];
      return;
      break;
      }
    case 'Auctions_getID0_44': {
      const v652 = v430[1];
      return;
      break;
      }
    case 'Auctions_updateHighestBidder0_44': {
      const v725 = v430[1];
      undefined /* setApiDetails */;
      ;
      const v788 = v725[stdlib.checkedBigNumberify('./src/contracts/index.rsh:87:21:spread', stdlib.UInt_max, '0')];
      const v789 = v725[stdlib.checkedBigNumberify('./src/contracts/index.rsh:87:21:spread', stdlib.UInt_max, '1')];
      null;
      const v790 = null;
      const v791 = await txn1.getOutput('Auctions_updateHighestBidder', 'v790', ctc13, v790);
      if (v236) {
        stdlib.protect(ctc13, await interact.out(v725, v791), {
          at: './src/contracts/index.rsh:87:22:application',
          fs: ['at ./src/contracts/index.rsh:87:22:application call to [unknown function] (defined at: ./src/contracts/index.rsh:87:22:function exp)', 'at ./src/contracts/index.rsh:89:28:application call to "ret" (defined at: ./src/contracts/index.rsh:87:71:function exp)', 'at ./src/contracts/index.rsh:87:71:application call to [unknown function] (defined at: ./src/contracts/index.rsh:87:71:function exp)'],
          msg: 'out',
          who: 'Auctions_updateHighestBidder'
          });
        }
      else {
        }
      
      const v1486 = v339;
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
    impure: [`Auctions_created((uint64,uint64,uint64,address,byte[20],byte[80],uint64,uint64))byte[0]`, `Auctions_ended((uint64,uint64,uint64))byte[0]`, `Auctions_getAdminAddress()address`, `Auctions_getID()uint64`, `Auctions_updateHighestBidder(uint64,address)byte[0]`],
    pure: [],
    sigs: [`Auctions_created((uint64,uint64,uint64,address,byte[20],byte[80],uint64,uint64))byte[0]`, `Auctions_ended((uint64,uint64,uint64))byte[0]`, `Auctions_getAdminAddress()address`, `Auctions_getID()uint64`, `Auctions_updateHighestBidder(uint64,address)byte[0]`]
    },
  GlobalNumByteSlice: 2,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `ByAKAAEEA4G0w5cKpJfDywuS/LGQDoD7tu8GrAECJgIAAQAiNQAxGEEC4ShkSSJbNQGBCFs1AjYaABdJQQCQIjUEIzUGSSEEDEAAUEkhBQxAADJJIQYMQAAbIQYSRDYaATYaAlA1/4ABBDT/UIGEAa9QQgB2IQUSRDYaATX/KTT/UEIAZiEEEkQ2GgE1/4ABATT/UIGUAa9QQgBPSSEHDEAAFCEHEkQoNf+AAQM0/1AhCK9QQgA0ge/It+UGEkQoNf+AAQI0/1AhCK9QQgAcNhoCFzUENhoDNhoBF0kjDEABikklDEABVSUSRCQ0ARJENARJIhJMNAISEUQpZEk1A0lXACA1/4EgWzX+STUFNf2ABC0Oa380/VCwNP0iVUkhCQxAAHxJJQxAAFpJJAxAADQkEkQ0/VcBKDX8gAReFiWhNPxXAAhQNPxXCCBQsIAIAAAAAAAAAxawKDUHNP80/jIGQgE6SIAIAAAAAAAAAVM0/hZQsDT+FjUHNP80/iMIMgZCARpIgAgAAAAAAAABSjT/ULA0/zUHNP80/jIGQgD+SSMMQAA8SDT9VwEYNfw0/DX7gATwcpnUNPtXAAhQNPtXCAhQNPtXEAhQsIAIAAAAAAAAAiGwKDUHNP80/jIGQgC8SDT9VwGsNfw0/DX7gAgAAAAAAAABvLAoNQeABFqNnV80+1cACFA0+1cICFA0+1cQCFA0+1cYIFA0+1c4FFA0+1dMUFA0+1ecCFA0+1ekCFCwNP80/jIGQgBiIxJEIzQBEkQ0BEkiEkw0AhIRRClkSTUDNf+ABJqLkXSwNP8xABJENP8iMgZCADNIgaCNBogAtiI0ARJENARJIhJMNAISEUSABF8Nq/qwMQApSwFXACBnSCM1ATIGNQJCADk1/zX+STX9NP4WUClLAVcAKGdIJDUBMgY1AkIAHDEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCg0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQhCTE1EkQiMTYSRCIxNxJEIjUBIjUCQv+uNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
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
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T9","name":"v1513","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T9","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T9","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T7","name":"which","type":"uint8"},{"components":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address payable","name":"contractInfo","type":"address"},{"internalType":"uint256","name":"blockCreated","type":"uint256"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"bytes20","name":"title","type":"bytes20"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes16","name":"elem2","type":"bytes16"}],"internalType":"struct T0","name":"description","type":"tuple"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"address payable","name":"tokenId","type":"address"}],"internalType":"struct T1","name":"elem0","type":"tuple"}],"internalType":"struct T5","name":"_Auctions_created0_44","type":"tuple"},{"components":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"blockEnded","type":"uint256"},{"internalType":"uint256","name":"lastBid","type":"uint256"}],"internalType":"struct T2","name":"elem0","type":"tuple"}],"internalType":"struct T6","name":"_Auctions_ended0_44","type":"tuple"},{"internalType":"bool","name":"_Auctions_getAdminAddress0_44","type":"bool"},{"internalType":"bool","name":"_Auctions_getID0_44","type":"bool"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"}],"internalType":"struct T4","name":"_Auctions_updateHighestBidder0_44","type":"tuple"}],"internalType":"struct T7","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T8","name":"_a","type":"tuple"}],"name":"_reach_e3","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address payable","name":"v0","type":"address"}],"name":"_reach_oe_v330","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"}],"name":"_reach_oe_v339","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v444","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v545","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v790","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"},{"indexed":false,"internalType":"address payable","name":"v1","type":"address"},{"indexed":false,"internalType":"uint256","name":"v2","type":"uint256"},{"indexed":false,"internalType":"address payable","name":"v3","type":"address"},{"indexed":false,"internalType":"bytes20","name":"v4","type":"bytes20"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes16","name":"elem2","type":"bytes16"}],"indexed":false,"internalType":"struct T0","name":"v5","type":"tuple"},{"indexed":false,"internalType":"uint256","name":"v6","type":"uint256"},{"indexed":false,"internalType":"address payable","name":"v7","type":"address"}],"name":"create","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"v2","type":"uint256"}],"name":"end","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"},{"indexed":false,"internalType":"address payable","name":"v1","type":"address"}],"name":"updateHighestBidder","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address payable","name":"contractInfo","type":"address"},{"internalType":"uint256","name":"blockCreated","type":"uint256"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"bytes20","name":"title","type":"bytes20"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes16","name":"elem2","type":"bytes16"}],"internalType":"struct T0","name":"description","type":"tuple"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"address payable","name":"tokenId","type":"address"}],"internalType":"struct T1","name":"v1488","type":"tuple"}],"name":"Auctions_created","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"blockEnded","type":"uint256"},{"internalType":"uint256","name":"lastBid","type":"uint256"}],"internalType":"struct T2","name":"v1493","type":"tuple"}],"name":"Auctions_ended","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Auctions_getAdminAddress","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Auctions_getID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v1506","type":"uint256"},{"internalType":"address payable","name":"v1507","type":"address"}],"name":"Auctions_updateHighestBidder","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T9","name":"v1515","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T7","name":"which","type":"uint8"},{"components":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address payable","name":"contractInfo","type":"address"},{"internalType":"uint256","name":"blockCreated","type":"uint256"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"bytes20","name":"title","type":"bytes20"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes16","name":"elem2","type":"bytes16"}],"internalType":"struct T0","name":"description","type":"tuple"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"address payable","name":"tokenId","type":"address"}],"internalType":"struct T1","name":"elem0","type":"tuple"}],"internalType":"struct T5","name":"_Auctions_created0_44","type":"tuple"},{"components":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"blockEnded","type":"uint256"},{"internalType":"uint256","name":"lastBid","type":"uint256"}],"internalType":"struct T2","name":"elem0","type":"tuple"}],"internalType":"struct T6","name":"_Auctions_ended0_44","type":"tuple"},{"internalType":"bool","name":"_Auctions_getAdminAddress0_44","type":"bool"},{"internalType":"bool","name":"_Auctions_getID0_44","type":"bool"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"}],"internalType":"struct T4","name":"_Auctions_updateHighestBidder0_44","type":"tuple"}],"internalType":"struct T7","name":"elem1","type":"tuple"}],"internalType":"struct T8","name":"v1519","type":"tuple"}],"name":"_reachp_3","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x608062001cd090813803601f1980601f83011683019360018060401b039284861084871117620002dc5780859260409788528339602094859181010312620002f2578451906200004f82620002f7565b51815243600355845160c081019080821085831117620002dc5760a0918752600091818380935282888201528289820152826060820152826080820152015260049160ff835416620002c5577f87b51d26f290dc1fb530aed45f92ac77d813efb7cccb67b06c40d875955dde87878051338152835189820152a1518015908115620002b8575b5015620002a157346200028a578551620000ef81620002f7565b3390526001948582554386558651923382850152818452878401848110878211176200027757885283519586116200026457600254908782811c9216801562000259575b83831014620002465750601f8111620001fa575b508093601f8611600114620001925750509183949184939462000186575b50501b916000199060031b1c1916176002555b516119bc9081620003148239f35b01519250388062000165565b600283528183209493928692918316915b88838310620001df5750505010620001c5575b505050811b0160025562000178565b015160001960f88460031b161c19169055388080620001b6565b858701518855909601959485019487935090810190620001a3565b60028352818320601f870160051c8101918388106200023b575b601f0160051c019087905b8281106200022f57505062000147565b8481550187906200021f565b909150819062000214565b634e487b7160e01b845260229052602483fd5b91607f169162000133565b634e487b7160e01b835260419052602482fd5b634e487b7160e01b845260418252602484fd5b855163100960cb60e01b8152600981840152602490fd5b855163100960cb60e01b8152600881840152602490fd5b90506001541438620000d5565b865163100960cb60e01b8152600781850152602490fd5b634e487b7160e01b600052604160045260246000fd5b600080fd5b602081019081106001600160401b03821117620002dc5760405256fe6040608081526004908136101561001d575b5050361561001b57005b005b600091823560e01c9081630c7d57ce146107ef5781631e93b0f1146107d0578163236d27c6146107345781632cfbfba7146106eb5781634c344d9d1461064f578163573b85101461039a5781636a923c2714610180575080638323075714610162578063ab53f2c6146100f75763ea83bb460361001157816003193601126100f3576020916100de6100ad610a99565b80926100b7610bb3565b8681019060028251525115156060825101526100d1610bb3565b9182525186820152610c33565b6060015190516001600160a01b039091168152f35b5080fd5b50346100f357816003193601126100f35781546101126109e4565b91805193849283526020828185015284518093850152815b83811061014b57505060608094508284010152601f80199101168101030190f35b80860182015187820160600152869450810161012a565b50346100f357816003193601126100f3576020906001549051908152f35b828461026036600319011261039757610197610a99565b918051926101a484610946565b8435845261024036602319011261037c5781519460c08601906001600160401b0382118783101761038457508252602435600581101561038057855261014036604319011261037c578151936101f985610977565b825195610205876109ad565b60443587526001600160a01b03966064359690888816880361037857602097888201526084358682015260a435898116810361037057606082015260c4356001600160601b03198116810361037057608082015260603660e3190112610378578551610270816109c9565b60e43581526101043589820152610124356001600160801b031981168103610374578782015260a08201526101443560c08201526101643589811681036103705760e082015281528187015260603661018319011261036c5783516102d481610977565b84516102df816109c9565b6101843581526101a435888201526101c435868201528152848201526101e4358015158103610368576060820152610204358015158103610368576080820152836102231936011261036c57835161033681610946565b61022435815261024435978816880361036857869761036295969782015260a082015286820152610c33565b51908152f35b8580fd5b8480fd5b8780fd5b8880fd5b8680fd5b8280fd5b8380fd5b634e487b7160e01b855260419052602484fd5b80fd5b83836020928360031936011261037c576103b2610a99565b508151906103bf82610977565b8035825260ff815416610638577fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee81596838051338152845188820152a1600191828554036106215761040d6109e4565b908682805181010312610368576104308786519361042a85610977565b01610bf7565b8252518015908115610616575b50156105ff57346105e85780516001600160a01b03919033908316036105d15781610466610acb565b9151168152868101868152438683015285519261048284610946565b8784528884019288845251168093525181528286554384558451918783015251848201528381526104b2816109c9565b8051916001600160401b0383116105be57506104cf60025461090c565b601f8111610577575b508590601f831160011461051657928293918392879461050b575b50501b916000199060031b1c19161760025551908152f35b0151925087806104f3565b60028652868620919083601f198116885b8a888383106105605750505010610547575b505050811b01600255610362565b015160001960f88460031b161c19169055858080610539565b868601518855909601959485019487935001610527565b60028652868620601f840160051c8101918885106105b4575b601f0160051c019084905b8281106105a95750506104d8565b87815501849061059b565b9091508190610590565b634e487b7160e01b865260419052602485fd5b845163100960cb60e01b8152600e81850152602490fd5b835163100960cb60e01b8152600d81840152602490fd5b835163100960cb60e01b8152600c81840152602490fd5b90508354148761043d565b835163100960cb60e01b8152600b81840152602490fd5b602490600a84519163100960cb60e01b8352820152fd5b9050606036600319011261037c576020926106e0839261066d610a99565b92839185519061067c826109c9565b3581526024358882015260443586820152855161069881610946565b86516106a381610977565b6106ab610acb565b81528152888101916106bb610b4d565b835281515260018251525186825101526106d3610bb3565b9182525187820152610c33565b015115159051908152f35b5050816003193601126100f357608060209261072b610708610a99565b8092610712610bb3565b87810190600382515251151586825101526106d3610bb3565b01519051908152f35b90508160031936011261037c576001600160a01b039260243584811691908290036103975760a092916106e091610769610a99565b93849287519161077883610946565b6020998a84019282358552835289519261079184610946565b8a5161079c81610946565b868152868d82015284528b8401946107b2610b4d565b86525184515251168a835101528251525186825101526106d3610bb3565b5050346100f357816003193601126100f3576020906003549051908152f35b828461014036600319011261039757610806610a99565b90825193610813856109ad565b358452602435936001600160a01b03808616860361037c57602095868301526044358583015260643581811681036103805760608301526084356001600160601b03198116810361038057608083015260603660a319011261037c57845161087a816109c9565b60a435815260c4358782015260e4356001600160801b03198116810361036c578682015260a08301526101043560c083015261012435908116810361037c5792809282879560e06106e095015286516108d281610946565b6108da610aea565b8152868101916108e8610b4d565b8352815152828251525186825101526108ff610bb3565b9182525185820152610c33565b90600182811c9216801561093c575b602083101461092657565b634e487b7160e01b600052602260045260246000fd5b91607f169161091b565b604081019081106001600160401b0382111761096157604052565b634e487b7160e01b600052604160045260246000fd5b602081019081106001600160401b0382111761096157604052565b60c081019081106001600160401b0382111761096157604052565b61010081019081106001600160401b0382111761096157604052565b606081019081106001600160401b0382111761096157604052565b6040519060006002546109f68161090c565b808552600191808316908115610a7a5750600114610a34575b5050829003601f01601f191682016001600160401b0381118382101761096157604052565b600260009081526020935091836000805160206119908339815191525b838510610a6657505050508301013880610a0f565b805488860183015293019284908201610a51565b919250506020925060ff191682850152151560051b8301013880610a0f565b60405190610aa682610992565b8160a06000918281528260208201528260408201528260608201528260808201520152565b60405190610ad8826109c9565b60006040838281528260208201520152565b60405190610af782610977565b6040518261010082016001600160401b03811183821017610961576040526000808352806020840152806040840152806060840152806080840152610b3a610acb565b60a08401528060c084015260e083015252565b60405190610b5a82610992565b8160008152610b67610aea565b6020820152604051610b7881610977565b610b80610acb565b81526040820152600060608201526000608082015260a060405191610ba483610946565b60008352600060208401520152565b60405190610bc082610946565b81600081526020610bcf610b4d565b910152565b80518252602080820151908301526040908101516001600160801b031916910152565b51906001600160a01b0382168203610c0b57565b600080fd5b516005811015610c1d5790565b634e487b7160e01b600052602160045260246000fd5b9060405190610c41826109c9565b610c49610aea565b8252604051610c5781610977565b610c5f610acb565b81526020830152604051610c7281610946565b6000815260006020820152604083015260ff60045416611976576040513381528351602082015260208401518051916005831015610c1d5760a0610280927ff77ac43251a50c8300f643181b1a2c90d0230923d0f2ae952348cb4f0b9e25c694604084015260208101515180516060850152600180841b036020820151166080850152604081015183850152600180841b0360608201511660c085015260018060601b031960808201511660e0850152610d3483820151610100860190610bd4565b60c081015161016085015260e001516000196001841b01166101808401526040818101515180516101a08601526020808201516101c08701529101516101e08501526060820151151561020085015260808201511515610220850152910151805161024084015201516001600160a01b0316610260820152a160046000540361195d57610dbf6109e4565b92604084805181010312610c0b576040805194610ddb86610946565b610de760208201610bf7565b86520151602085015280518015908115611951575b501561193857610e0f6020820151610c10565b6005811015610c1d576110af576020809101510151825234611096577f55648752e16a06369257037ff12234ced55d1627f04500d14c58cb79807cf4d39160006020610140937feb40975044960841610c5f8efa825ed9cdfe98c6067d09661d1376235aee425782604051858152a10152515180519060018060a01b0360208201511690610ef5604082015160018060a01b0360608401511660018060601b03196080850151169060a08501519260c08601519560e060018060a01b039101511696604051988952602089015260408801526060870152608086015260a0850190610bd4565b610100830152610120820152a16020610f0c610acb565b82516001600160a01b0316815291015160208201908152436040808401919091525190610f3882610946565b6000825260208201926000845260018060a01b03905116809252518252600460005560019143835560405191602083015251604082015260408152610f7c816109c9565b8051906001600160401b03821161096157610f9860025461090c565b601f8111611040575b50602090601f8311600114610fdd57928293918392600094610fd2575b50501b916000199060031b1c191617600255565b015192503880610fbe565b90601f1983169160026000528360206000209360005b878282106110275750501061100e575b505050811b01600255565b015160001960f88460031b161c19169055388080611003565b8486015187559095019460209485019487935001610ff3565b6002600052600080516020611990833981519152601f840160051c8101916020851061108c575b601f0160051c019084905b828110611080575050610fa1565b60008155018490611072565b9091508190611067565b60405163100960cb60e01b815260126004820152602490fd5b6110c26020829695969493940151610c10565b6005811015610c1d576001036112e9576020604091015101516020820152346112d0576000917f8ae1d12745070499deb90f74dbda066d3ebb9066dc64fa2d22e24615fabfb34c60606020604094015151805190856020820151910151908651928352602083015285820152a17f6ac37dc15dffd3d7cb809ccaeb66cbab8f739901e2bf8aa8e15b72d8e106a7d560208351858152a101526020611164610acb565b83516001600160a01b03168152920151602083019081524360408085019190915251929061119184610946565b6000845260208401916000835260018060a01b03905116809452518152600460005543600155604051926020840152516040830152604082526111d3826109c9565b81516001600160401b038111610961576111ee60025461090c565b601f811161127d575b50602092601f82116001146112345792819293600092611229575b50508160011b916000199060031b1c191617600255565b015190503880611212565b601f19821693600260005260206000209160005b868110611265575083600195961061100e57505050811b01600255565b91926020600181928685015181550194019201611248565b6002600052600080516020611990833981519152601f830160051c810191602084106112c6575b601f0160051c01905b8181106112ba57506111f7565b600081556001016112ad565b90915081906112a4565b60405163100960cb60e01b815260136004820152602490fd5b6112f66020820151610c10565b6005811015610c1d576002036114d6575050346114bd577fbf0289713b8d708399b7d9869dc239b0b6722990d8511e26783de2461e4a46b5602060018060a01b03855116604051908152a182516001600160a01b031660609190910152602061135d610acb565b83516001600160a01b03168152920151602083019081524360408085019190915251929061138a84610946565b6000845260208401916000835260018060a01b03905116809452518152600460005543600155604051926020840152516040830152604082526113cc826109c9565b81516001600160401b038111610961576113e760025461090c565b601f811161146a575b50602092601f821160011461142157928192936000926112295750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b868110611452575083600195961061100e57505050811b01600255565b91926020600181928685015181550194019201611435565b6002600052600080516020611990833981519152601f830160051c810191602084106114b3575b601f0160051c01905b8181106114a757506113f0565b6000815560010161149a565b9091508190611491565b60405163100960cb60e01b815260146004820152602490fd5b6114e36020820151610c10565b6005811015610c1d576003036116db575050346116c2577ff6cc138586a17c06fd54ee6afad7861828fd0d20cf0b387e347a67c90ce5b183602080850151604051908152a160806020840151910152602061153c610acb565b83516001600160a01b031681529201516001810192908381116116ac578310610c0b57602081019283524360408201526040519261157984610946565b6000845260208401916000835260018060a01b03905116809452518152600460005543600155604051926020840152516040830152604082526115bb826109c9565b81516001600160401b038111610961576115d660025461090c565b601f8111611659575b50602092601f821160011461161057928192936000926112295750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b868110611641575083600195961061100e57505050811b01600255565b91926020600181928685015181550194019201611624565b6002600052600080516020611990833981519152601f830160051c810191602084106116a2575b601f0160051c01905b81811061169657506115df565b60008155600101611689565b9091508190611680565b634e487b7160e01b600052601160045260246000fd5b60405163100960cb60e01b815260156004820152602490fd5b6116e86020820151610c10565b6005811015610c1d57600414611700575b5050509050565b6020015160a0015160408201523461191f576000917fe01ee6bd3c9de453f0a87c76609e73f19fb4edb39f5be4e8f6cdb7091bd6186360408060a09401518051906020600180881b039101511682519182526020820152a17f8b7c04b80da66f78012eb5ea464906a9d795c02c8240d02a6cee08ace14eb4a06020604051858152a10152602061178e610acb565b83516001600160a01b0316815292015160208301908152436040808501919091525192906117bb84610946565b6000845260208401916000835260018060a01b03905116809452518152600460005543600155604051926020840152516040830152604082526117fd826109c9565b81516001600160401b0381116109615761181860025461090c565b601f81116118cc575b50602092601f8211600114611866579281929360009261185b575b50508160011b916000199060031b1c1916176002555b803880806116f9565b01519050388061183c565b601f19821693600260005260206000209160005b8681106118b4575083600195961061189b575b505050811b01600255611852565b015160001960f88460031b161c1916905538808061188d565b9192602060018192868501518155019401920161187a565b6002600052600080516020611990833981519152601f830160051c81019160208410611915575b601f0160051c01905b8181106119095750611821565b600081556001016118fc565b90915081906118f3565b60405163100960cb60e01b815260166004820152602490fd5b60405163100960cb60e01b815260116004820152602490fd5b90506001541438610dfc565b60405163100960cb60e01b815260106004820152602490fd5b60405163100960cb60e01b8152600f6004820152602490fdfe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000810000a`,
  BytecodeLen: 7376,
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
    at: './src/contracts/index.rsh:92:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './src/contracts/index.rsh:49:41:after expr stmt semicolon',
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
  "Auctions_getID": Auctions_getID,
  "Auctions_updateHighestBidder": Auctions_updateHighestBidder
  };
export const _APIs = {
  Auctions: {
    created: Auctions_created,
    ended: Auctions_ended,
    getAdminAddress: Auctions_getAdminAddress,
    getID: Auctions_getID,
    updateHighestBidder: Auctions_updateHighestBidder
    }
  };
