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
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '80'));
  const ctc5 = stdlib.T_Token;
  return {
    create: [ctc0, ctc1, ctc0, ctc2, ctc3, ctc4, ctc0, ctc5],
    end: [ctc0, ctc0, ctc0],
    endSuccess: [ctc0],
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
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '80'));
  const ctc6 = stdlib.T_Token;
  const ctc7 = stdlib.T_Struct([['id', ctc1], ['contractInfo', ctc2], ['blockCreated', ctc1], ['owner', ctc3], ['title', ctc4], ['description', ctc5], ['price', ctc1], ['tokenId', ctc6]]);
  const ctc8 = stdlib.T_Tuple([ctc7]);
  const ctc9 = stdlib.T_Tuple([ctc1]);
  const ctc10 = stdlib.T_Struct([['id', ctc1], ['blockEnded', ctc1], ['lastBid', ctc1]]);
  const ctc11 = stdlib.T_Tuple([ctc10]);
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Tuple([ctc1, ctc3]);
  const ctc14 = stdlib.T_Data({
    Auctions_created0_44: ctc8,
    Auctions_endSuccess0_44: ctc9,
    Auctions_ended0_44: ctc11,
    Auctions_getID0_44: ctc12,
    Auctions_updateHighestBidder0_44: ctc13
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
      
      
      const {data: [], secs: v340, time: v339, didSend: v22, from: v338 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v340, time: v339, didSend: v22, from: v338 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v338],
    evt_cnt: 0,
    funcNum: 1,
    lct: v339,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./src/contracts/index.rsh:48:15:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v343, time: v342, didSend: v27, from: v341 } = txn2;
      
      ;
      const v345 = await ctc.getContractInfo();
      
      const v347 = stdlib.checkedBigNumberify('./src/contracts/index.rsh:50:42:decimal', stdlib.UInt_max, '0');
      const v348 = v342;
      
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
  const {data: [], secs: v343, time: v342, didSend: v27, from: v341 } = txn2;
  ;
  const v344 = stdlib.addressEq(v338, v341);
  stdlib.assert(v344, {
    at: './src/contracts/index.rsh:48:15:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Admin'
    });
  const v345 = await ctc.getContractInfo();
  stdlib.protect(ctc0, await interact.deployed(v345), {
    at: './src/contracts/index.rsh:49:32:application',
    fs: ['at ./src/contracts/index.rsh:49:32:application call to [unknown function] (defined at: ./src/contracts/index.rsh:49:32:function exp)', 'at ./src/contracts/index.rsh:49:32:application call to "liftedInteract" (defined at: ./src/contracts/index.rsh:49:32:application)'],
    msg: 'deployed',
    who: 'Admin'
    });
  
  let v347 = stdlib.checkedBigNumberify('./src/contracts/index.rsh:50:42:decimal', stdlib.UInt_max, '0');
  let v348 = v342;
  
  let txn3 = txn2;
  while (await (async () => {
    
    return true;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc14],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v441], secs: v443, time: v442, didSend: v241, from: v440 } = txn4;
    switch (v441[0]) {
      case 'Auctions_created0_44': {
        const v444 = v441[1];
        undefined /* setApiDetails */;
        ;
        const v454 = v444[stdlib.checkedBigNumberify('./src/contracts/index.rsh:57:21:spread', stdlib.UInt_max, '0')];
        const v455 = null;
        await txn4.getOutput('Auctions_created', 'v455', ctc0, v455);
        const v470 = v454.id;
        const v471 = v454.contractInfo;
        const v472 = v454.blockCreated;
        const v473 = v454.owner;
        const v474 = v454.title;
        const v475 = v454.description;
        const v476 = v454.price;
        const v477 = v454.tokenId;
        null;
        const cv347 = v347;
        const cv348 = v442;
        
        v347 = cv347;
        v348 = cv348;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'Auctions_endSuccess0_44': {
        const v520 = v441[1];
        undefined /* setApiDetails */;
        ;
        const v555 = v520[stdlib.checkedBigNumberify('./src/contracts/index.rsh:89:21:spread', stdlib.UInt_max, '0')];
        null;
        const v556 = null;
        await txn4.getOutput('Auctions_endSuccess', 'v556', ctc0, v556);
        const cv347 = v347;
        const cv348 = v442;
        
        v347 = cv347;
        v348 = cv348;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'Auctions_ended0_44': {
        const v596 = v441[1];
        undefined /* setApiDetails */;
        ;
        const v640 = v596[stdlib.checkedBigNumberify('./src/contracts/index.rsh:73:21:spread', stdlib.UInt_max, '0')];
        const v641 = v640.id;
        const v642 = v640.blockEnded;
        const v643 = v640.lastBid;
        null;
        const v644 = null;
        await txn4.getOutput('Auctions_ended', 'v644', ctc0, v644);
        const cv347 = v347;
        const cv348 = v442;
        
        v347 = cv347;
        v348 = cv348;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'Auctions_getID0_44': {
        const v672 = v441[1];
        undefined /* setApiDetails */;
        ;
        await txn4.getOutput('Auctions_getID', 'v347', ctc1, v347);
        const v736 = stdlib.safeAdd(v347, stdlib.checkedBigNumberify('./src/contracts/index.rsh:55:44:decimal', stdlib.UInt_max, '1'));
        const cv347 = v736;
        const cv348 = v442;
        
        v347 = cv347;
        v348 = cv348;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'Auctions_updateHighestBidder0_44': {
        const v748 = v441[1];
        undefined /* setApiDetails */;
        ;
        const v814 = v748[stdlib.checkedBigNumberify('./src/contracts/index.rsh:84:21:spread', stdlib.UInt_max, '0')];
        const v815 = v748[stdlib.checkedBigNumberify('./src/contracts/index.rsh:84:21:spread', stdlib.UInt_max, '1')];
        null;
        const v816 = null;
        await txn4.getOutput('Auctions_updateHighestBidder', 'v816', ctc0, v816);
        const cv347 = v347;
        const cv348 = v442;
        
        v347 = cv347;
        v348 = cv348;
        
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
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '80'));
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Struct([['id', ctc0], ['contractInfo', ctc1], ['blockCreated', ctc0], ['owner', ctc2], ['title', ctc3], ['description', ctc4], ['price', ctc0], ['tokenId', ctc5]]);
  const ctc7 = stdlib.T_Tuple([ctc6]);
  const ctc8 = stdlib.T_Tuple([ctc0]);
  const ctc9 = stdlib.T_Struct([['id', ctc0], ['blockEnded', ctc0], ['lastBid', ctc0]]);
  const ctc10 = stdlib.T_Tuple([ctc9]);
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Tuple([ctc0, ctc2]);
  const ctc13 = stdlib.T_Data({
    Auctions_created0_44: ctc7,
    Auctions_endSuccess0_44: ctc8,
    Auctions_ended0_44: ctc10,
    Auctions_getID0_44: ctc11,
    Auctions_updateHighestBidder0_44: ctc12
    });
  const ctc14 = stdlib.T_Null;
  
  
  const [v347] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0]);
  const v368 = stdlib.protect(ctc7, await interact.in(), {
    at: './src/contracts/index.rsh:1:23:application',
    fs: ['at ./src/contracts/index.rsh:57:21:application call to [unknown function] (defined at: ./src/contracts/index.rsh:57:21:function exp)', 'at ./src/contracts/index.rsh:50:41:application call to "runAuctions_created0_44" (defined at: ./src/contracts/index.rsh:57:21:function exp)', 'at ./src/contracts/index.rsh:50:41:application call to [unknown function] (defined at: ./src/contracts/index.rsh:50:41:function exp)'],
    msg: 'in',
    who: 'Auctions_created'
    });
  const v391 = ['Auctions_created0_44', v368];
  
  const txn1 = await (ctc.sendrecv({
    args: [v347, v391],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./src/contracts/index.rsh:57:21:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v441], secs: v443, time: v442, didSend: v241, from: v440 } = txn1;
      
      switch (v441[0]) {
        case 'Auctions_created0_44': {
          const v444 = v441[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Auctions_created"
            });
          ;
          const v454 = v444[stdlib.checkedBigNumberify('./src/contracts/index.rsh:57:21:spread', stdlib.UInt_max, '0')];
          const v455 = null;
          const v456 = await txn1.getOutput('Auctions_created', 'v455', ctc14, v455);
          
          const v470 = v454.id;
          const v471 = v454.contractInfo;
          const v472 = v454.blockCreated;
          const v473 = v454.owner;
          const v474 = v454.title;
          const v475 = v454.description;
          const v476 = v454.price;
          const v477 = v454.tokenId;
          null;
          const v1464 = v347;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Auctions_endSuccess0_44': {
          const v520 = v441[1];
          
          break;
          }
        case 'Auctions_ended0_44': {
          const v596 = v441[1];
          
          break;
          }
        case 'Auctions_getID0_44': {
          const v672 = v441[1];
          
          break;
          }
        case 'Auctions_updateHighestBidder0_44': {
          const v748 = v441[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v441], secs: v443, time: v442, didSend: v241, from: v440 } = txn1;
  switch (v441[0]) {
    case 'Auctions_created0_44': {
      const v444 = v441[1];
      undefined /* setApiDetails */;
      ;
      const v454 = v444[stdlib.checkedBigNumberify('./src/contracts/index.rsh:57:21:spread', stdlib.UInt_max, '0')];
      const v455 = null;
      const v456 = await txn1.getOutput('Auctions_created', 'v455', ctc14, v455);
      if (v241) {
        stdlib.protect(ctc14, await interact.out(v444, v456), {
          at: './src/contracts/index.rsh:57:22:application',
          fs: ['at ./src/contracts/index.rsh:57:22:application call to [unknown function] (defined at: ./src/contracts/index.rsh:57:22:function exp)', 'at ./src/contracts/index.rsh:58:28:application call to "ret" (defined at: ./src/contracts/index.rsh:57:51:function exp)', 'at ./src/contracts/index.rsh:57:51:application call to [unknown function] (defined at: ./src/contracts/index.rsh:57:51:function exp)'],
          msg: 'out',
          who: 'Auctions_created'
          });
        }
      else {
        }
      
      const v470 = v454.id;
      const v471 = v454.contractInfo;
      const v472 = v454.blockCreated;
      const v473 = v454.owner;
      const v474 = v454.title;
      const v475 = v454.description;
      const v476 = v454.price;
      const v477 = v454.tokenId;
      null;
      const v1464 = v347;
      return;
      
      break;
      }
    case 'Auctions_endSuccess0_44': {
      const v520 = v441[1];
      return;
      break;
      }
    case 'Auctions_ended0_44': {
      const v596 = v441[1];
      return;
      break;
      }
    case 'Auctions_getID0_44': {
      const v672 = v441[1];
      return;
      break;
      }
    case 'Auctions_updateHighestBidder0_44': {
      const v748 = v441[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Auctions_endSuccess4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Auctions_endSuccess4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Auctions_endSuccess4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Tuple([ctc0]);
  const ctc2 = stdlib.T_Contract;
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '80'));
  const ctc6 = stdlib.T_Token;
  const ctc7 = stdlib.T_Struct([['id', ctc0], ['contractInfo', ctc2], ['blockCreated', ctc0], ['owner', ctc3], ['title', ctc4], ['description', ctc5], ['price', ctc0], ['tokenId', ctc6]]);
  const ctc8 = stdlib.T_Tuple([ctc7]);
  const ctc9 = stdlib.T_Struct([['id', ctc0], ['blockEnded', ctc0], ['lastBid', ctc0]]);
  const ctc10 = stdlib.T_Tuple([ctc9]);
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Tuple([ctc0, ctc3]);
  const ctc13 = stdlib.T_Data({
    Auctions_created0_44: ctc8,
    Auctions_endSuccess0_44: ctc1,
    Auctions_ended0_44: ctc10,
    Auctions_getID0_44: ctc11,
    Auctions_updateHighestBidder0_44: ctc12
    });
  const ctc14 = stdlib.T_Null;
  
  
  const [v347] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0]);
  const v426 = stdlib.protect(ctc1, await interact.in(), {
    at: './src/contracts/index.rsh:1:23:application',
    fs: ['at ./src/contracts/index.rsh:89:21:application call to [unknown function] (defined at: ./src/contracts/index.rsh:89:21:function exp)', 'at ./src/contracts/index.rsh:50:41:application call to "runAuctions_endSuccess0_44" (defined at: ./src/contracts/index.rsh:89:21:function exp)', 'at ./src/contracts/index.rsh:50:41:application call to [unknown function] (defined at: ./src/contracts/index.rsh:50:41:function exp)'],
    msg: 'in',
    who: 'Auctions_endSuccess'
    });
  const v433 = ['Auctions_endSuccess0_44', v426];
  
  const txn1 = await (ctc.sendrecv({
    args: [v347, v433],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./src/contracts/index.rsh:89:21:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v441], secs: v443, time: v442, didSend: v241, from: v440 } = txn1;
      
      switch (v441[0]) {
        case 'Auctions_created0_44': {
          const v444 = v441[1];
          
          break;
          }
        case 'Auctions_endSuccess0_44': {
          const v520 = v441[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Auctions_endSuccess"
            });
          ;
          const v555 = v520[stdlib.checkedBigNumberify('./src/contracts/index.rsh:89:21:spread', stdlib.UInt_max, '0')];
          null;
          const v556 = null;
          const v557 = await txn1.getOutput('Auctions_endSuccess', 'v556', ctc14, v556);
          
          const v1476 = v347;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Auctions_ended0_44': {
          const v596 = v441[1];
          
          break;
          }
        case 'Auctions_getID0_44': {
          const v672 = v441[1];
          
          break;
          }
        case 'Auctions_updateHighestBidder0_44': {
          const v748 = v441[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v441], secs: v443, time: v442, didSend: v241, from: v440 } = txn1;
  switch (v441[0]) {
    case 'Auctions_created0_44': {
      const v444 = v441[1];
      return;
      break;
      }
    case 'Auctions_endSuccess0_44': {
      const v520 = v441[1];
      undefined /* setApiDetails */;
      ;
      const v555 = v520[stdlib.checkedBigNumberify('./src/contracts/index.rsh:89:21:spread', stdlib.UInt_max, '0')];
      null;
      const v556 = null;
      const v557 = await txn1.getOutput('Auctions_endSuccess', 'v556', ctc14, v556);
      if (v241) {
        stdlib.protect(ctc14, await interact.out(v520, v557), {
          at: './src/contracts/index.rsh:89:22:application',
          fs: ['at ./src/contracts/index.rsh:89:22:application call to [unknown function] (defined at: ./src/contracts/index.rsh:89:22:function exp)', 'at ./src/contracts/index.rsh:91:28:application call to "ret" (defined at: ./src/contracts/index.rsh:89:53:function exp)', 'at ./src/contracts/index.rsh:89:53:application call to [unknown function] (defined at: ./src/contracts/index.rsh:89:53:function exp)'],
          msg: 'out',
          who: 'Auctions_endSuccess'
          });
        }
      else {
        }
      
      const v1476 = v347;
      return;
      
      break;
      }
    case 'Auctions_ended0_44': {
      const v596 = v441[1];
      return;
      break;
      }
    case 'Auctions_getID0_44': {
      const v672 = v441[1];
      return;
      break;
      }
    case 'Auctions_updateHighestBidder0_44': {
      const v748 = v441[1];
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
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '80'));
  const ctc7 = stdlib.T_Token;
  const ctc8 = stdlib.T_Struct([['id', ctc0], ['contractInfo', ctc3], ['blockCreated', ctc0], ['owner', ctc4], ['title', ctc5], ['description', ctc6], ['price', ctc0], ['tokenId', ctc7]]);
  const ctc9 = stdlib.T_Tuple([ctc8]);
  const ctc10 = stdlib.T_Tuple([ctc0]);
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Tuple([ctc0, ctc4]);
  const ctc13 = stdlib.T_Data({
    Auctions_created0_44: ctc9,
    Auctions_endSuccess0_44: ctc10,
    Auctions_ended0_44: ctc2,
    Auctions_getID0_44: ctc11,
    Auctions_updateHighestBidder0_44: ctc12
    });
  const ctc14 = stdlib.T_Null;
  
  
  const [v347] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0]);
  const v395 = stdlib.protect(ctc2, await interact.in(), {
    at: './src/contracts/index.rsh:1:23:application',
    fs: ['at ./src/contracts/index.rsh:73:21:application call to [unknown function] (defined at: ./src/contracts/index.rsh:73:21:function exp)', 'at ./src/contracts/index.rsh:50:41:application call to "runAuctions_ended0_44" (defined at: ./src/contracts/index.rsh:73:21:function exp)', 'at ./src/contracts/index.rsh:50:41:application call to [unknown function] (defined at: ./src/contracts/index.rsh:50:41:function exp)'],
    msg: 'in',
    who: 'Auctions_ended'
    });
  const v408 = ['Auctions_ended0_44', v395];
  
  const txn1 = await (ctc.sendrecv({
    args: [v347, v408],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./src/contracts/index.rsh:73:21:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v441], secs: v443, time: v442, didSend: v241, from: v440 } = txn1;
      
      switch (v441[0]) {
        case 'Auctions_created0_44': {
          const v444 = v441[1];
          
          break;
          }
        case 'Auctions_endSuccess0_44': {
          const v520 = v441[1];
          
          break;
          }
        case 'Auctions_ended0_44': {
          const v596 = v441[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Auctions_ended"
            });
          ;
          const v640 = v596[stdlib.checkedBigNumberify('./src/contracts/index.rsh:73:21:spread', stdlib.UInt_max, '0')];
          const v641 = v640.id;
          const v642 = v640.blockEnded;
          const v643 = v640.lastBid;
          null;
          const v644 = null;
          const v645 = await txn1.getOutput('Auctions_ended', 'v644', ctc14, v644);
          
          const v1488 = v347;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Auctions_getID0_44': {
          const v672 = v441[1];
          
          break;
          }
        case 'Auctions_updateHighestBidder0_44': {
          const v748 = v441[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v441], secs: v443, time: v442, didSend: v241, from: v440 } = txn1;
  switch (v441[0]) {
    case 'Auctions_created0_44': {
      const v444 = v441[1];
      return;
      break;
      }
    case 'Auctions_endSuccess0_44': {
      const v520 = v441[1];
      return;
      break;
      }
    case 'Auctions_ended0_44': {
      const v596 = v441[1];
      undefined /* setApiDetails */;
      ;
      const v640 = v596[stdlib.checkedBigNumberify('./src/contracts/index.rsh:73:21:spread', stdlib.UInt_max, '0')];
      const v641 = v640.id;
      const v642 = v640.blockEnded;
      const v643 = v640.lastBid;
      null;
      const v644 = null;
      const v645 = await txn1.getOutput('Auctions_ended', 'v644', ctc14, v644);
      if (v241) {
        stdlib.protect(ctc14, await interact.out(v596, v645), {
          at: './src/contracts/index.rsh:73:22:application',
          fs: ['at ./src/contracts/index.rsh:73:22:application call to [unknown function] (defined at: ./src/contracts/index.rsh:73:22:function exp)', 'at ./src/contracts/index.rsh:81:28:application call to "ret" (defined at: ./src/contracts/index.rsh:73:49:function exp)', 'at ./src/contracts/index.rsh:73:49:application call to [unknown function] (defined at: ./src/contracts/index.rsh:73:49:function exp)'],
          msg: 'out',
          who: 'Auctions_ended'
          });
        }
      else {
        }
      
      const v1488 = v347;
      return;
      
      break;
      }
    case 'Auctions_getID0_44': {
      const v672 = v441[1];
      return;
      break;
      }
    case 'Auctions_updateHighestBidder0_44': {
      const v748 = v441[1];
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
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '80'));
  const ctc6 = stdlib.T_Token;
  const ctc7 = stdlib.T_Struct([['id', ctc0], ['contractInfo', ctc2], ['blockCreated', ctc0], ['owner', ctc3], ['title', ctc4], ['description', ctc5], ['price', ctc0], ['tokenId', ctc6]]);
  const ctc8 = stdlib.T_Tuple([ctc7]);
  const ctc9 = stdlib.T_Tuple([ctc0]);
  const ctc10 = stdlib.T_Struct([['id', ctc0], ['blockEnded', ctc0], ['lastBid', ctc0]]);
  const ctc11 = stdlib.T_Tuple([ctc10]);
  const ctc12 = stdlib.T_Tuple([ctc0, ctc3]);
  const ctc13 = stdlib.T_Data({
    Auctions_created0_44: ctc8,
    Auctions_endSuccess0_44: ctc9,
    Auctions_ended0_44: ctc11,
    Auctions_getID0_44: ctc1,
    Auctions_updateHighestBidder0_44: ctc12
    });
  const ctc14 = stdlib.T_Null;
  
  
  const [v347] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0]);
  const v360 = stdlib.protect(ctc1, await interact.in(), {
    at: './src/contracts/index.rsh:1:23:application',
    fs: ['at ./src/contracts/index.rsh:53:21:application call to [unknown function] (defined at: ./src/contracts/index.rsh:53:21:function exp)', 'at ./src/contracts/index.rsh:50:41:application call to "runAuctions_getID0_44" (defined at: ./src/contracts/index.rsh:53:21:function exp)', 'at ./src/contracts/index.rsh:50:41:application call to [unknown function] (defined at: ./src/contracts/index.rsh:50:41:function exp)'],
    msg: 'in',
    who: 'Auctions_getID'
    });
  const v364 = ['Auctions_getID0_44', v360];
  
  const txn1 = await (ctc.sendrecv({
    args: [v347, v364],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./src/contracts/index.rsh:53:21:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v441], secs: v443, time: v442, didSend: v241, from: v440 } = txn1;
      
      switch (v441[0]) {
        case 'Auctions_created0_44': {
          const v444 = v441[1];
          
          break;
          }
        case 'Auctions_endSuccess0_44': {
          const v520 = v441[1];
          
          break;
          }
        case 'Auctions_ended0_44': {
          const v596 = v441[1];
          
          break;
          }
        case 'Auctions_getID0_44': {
          const v672 = v441[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Auctions_getID"
            });
          ;
          const v731 = await txn1.getOutput('Auctions_getID', 'v347', ctc0, v347);
          
          const v736 = stdlib.safeAdd(v347, stdlib.checkedBigNumberify('./src/contracts/index.rsh:55:44:decimal', stdlib.UInt_max, '1'));
          const v1500 = v736;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Auctions_updateHighestBidder0_44': {
          const v748 = v441[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v441], secs: v443, time: v442, didSend: v241, from: v440 } = txn1;
  switch (v441[0]) {
    case 'Auctions_created0_44': {
      const v444 = v441[1];
      return;
      break;
      }
    case 'Auctions_endSuccess0_44': {
      const v520 = v441[1];
      return;
      break;
      }
    case 'Auctions_ended0_44': {
      const v596 = v441[1];
      return;
      break;
      }
    case 'Auctions_getID0_44': {
      const v672 = v441[1];
      undefined /* setApiDetails */;
      ;
      const v731 = await txn1.getOutput('Auctions_getID', 'v347', ctc0, v347);
      if (v241) {
        stdlib.protect(ctc14, await interact.out(v672, v731), {
          at: './src/contracts/index.rsh:53:22:application',
          fs: ['at ./src/contracts/index.rsh:53:22:application call to [unknown function] (defined at: ./src/contracts/index.rsh:53:22:function exp)', 'at ./src/contracts/index.rsh:54:28:application call to "ret" (defined at: ./src/contracts/index.rsh:53:44:function exp)', 'at ./src/contracts/index.rsh:53:44:application call to [unknown function] (defined at: ./src/contracts/index.rsh:53:44:function exp)'],
          msg: 'out',
          who: 'Auctions_getID'
          });
        }
      else {
        }
      
      const v736 = stdlib.safeAdd(v347, stdlib.checkedBigNumberify('./src/contracts/index.rsh:55:44:decimal', stdlib.UInt_max, '1'));
      const v1500 = v736;
      return;
      
      break;
      }
    case 'Auctions_updateHighestBidder0_44': {
      const v748 = v441[1];
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
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '80'));
  const ctc6 = stdlib.T_Token;
  const ctc7 = stdlib.T_Struct([['id', ctc0], ['contractInfo', ctc3], ['blockCreated', ctc0], ['owner', ctc1], ['title', ctc4], ['description', ctc5], ['price', ctc0], ['tokenId', ctc6]]);
  const ctc8 = stdlib.T_Tuple([ctc7]);
  const ctc9 = stdlib.T_Tuple([ctc0]);
  const ctc10 = stdlib.T_Struct([['id', ctc0], ['blockEnded', ctc0], ['lastBid', ctc0]]);
  const ctc11 = stdlib.T_Tuple([ctc10]);
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Data({
    Auctions_created0_44: ctc8,
    Auctions_endSuccess0_44: ctc9,
    Auctions_ended0_44: ctc11,
    Auctions_getID0_44: ctc12,
    Auctions_updateHighestBidder0_44: ctc2
    });
  const ctc14 = stdlib.T_Null;
  
  
  const [v347] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0]);
  const v412 = stdlib.protect(ctc2, await interact.in(), {
    at: './src/contracts/index.rsh:1:23:application',
    fs: ['at ./src/contracts/index.rsh:84:21:application call to [unknown function] (defined at: ./src/contracts/index.rsh:84:21:function exp)', 'at ./src/contracts/index.rsh:50:41:application call to "runAuctions_updateHighestBidder0_44" (defined at: ./src/contracts/index.rsh:84:21:function exp)', 'at ./src/contracts/index.rsh:50:41:application call to [unknown function] (defined at: ./src/contracts/index.rsh:50:41:function exp)'],
    msg: 'in',
    who: 'Auctions_updateHighestBidder'
    });
  const v422 = ['Auctions_updateHighestBidder0_44', v412];
  
  const txn1 = await (ctc.sendrecv({
    args: [v347, v422],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./src/contracts/index.rsh:84:21:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v441], secs: v443, time: v442, didSend: v241, from: v440 } = txn1;
      
      switch (v441[0]) {
        case 'Auctions_created0_44': {
          const v444 = v441[1];
          
          break;
          }
        case 'Auctions_endSuccess0_44': {
          const v520 = v441[1];
          
          break;
          }
        case 'Auctions_ended0_44': {
          const v596 = v441[1];
          
          break;
          }
        case 'Auctions_getID0_44': {
          const v672 = v441[1];
          
          break;
          }
        case 'Auctions_updateHighestBidder0_44': {
          const v748 = v441[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Auctions_updateHighestBidder"
            });
          ;
          const v814 = v748[stdlib.checkedBigNumberify('./src/contracts/index.rsh:84:21:spread', stdlib.UInt_max, '0')];
          const v815 = v748[stdlib.checkedBigNumberify('./src/contracts/index.rsh:84:21:spread', stdlib.UInt_max, '1')];
          null;
          const v816 = null;
          const v817 = await txn1.getOutput('Auctions_updateHighestBidder', 'v816', ctc14, v816);
          
          const v1512 = v347;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v441], secs: v443, time: v442, didSend: v241, from: v440 } = txn1;
  switch (v441[0]) {
    case 'Auctions_created0_44': {
      const v444 = v441[1];
      return;
      break;
      }
    case 'Auctions_endSuccess0_44': {
      const v520 = v441[1];
      return;
      break;
      }
    case 'Auctions_ended0_44': {
      const v596 = v441[1];
      return;
      break;
      }
    case 'Auctions_getID0_44': {
      const v672 = v441[1];
      return;
      break;
      }
    case 'Auctions_updateHighestBidder0_44': {
      const v748 = v441[1];
      undefined /* setApiDetails */;
      ;
      const v814 = v748[stdlib.checkedBigNumberify('./src/contracts/index.rsh:84:21:spread', stdlib.UInt_max, '0')];
      const v815 = v748[stdlib.checkedBigNumberify('./src/contracts/index.rsh:84:21:spread', stdlib.UInt_max, '1')];
      null;
      const v816 = null;
      const v817 = await txn1.getOutput('Auctions_updateHighestBidder', 'v816', ctc14, v816);
      if (v241) {
        stdlib.protect(ctc14, await interact.out(v748, v817), {
          at: './src/contracts/index.rsh:84:22:application',
          fs: ['at ./src/contracts/index.rsh:84:22:application call to [unknown function] (defined at: ./src/contracts/index.rsh:84:22:function exp)', 'at ./src/contracts/index.rsh:86:28:application call to "ret" (defined at: ./src/contracts/index.rsh:84:71:function exp)', 'at ./src/contracts/index.rsh:84:71:application call to [unknown function] (defined at: ./src/contracts/index.rsh:84:71:function exp)'],
          msg: 'out',
          who: 'Auctions_updateHighestBidder'
          });
        }
      else {
        }
      
      const v1512 = v347;
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
export async function Auctions_endSuccess(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Auctions_endSuccess expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Auctions_endSuccess expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Auctions_endSuccess4(ctcTop, interact);}
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
    impure: [`Auctions_created((uint64,uint64,uint64,address,byte[32],byte[80],uint64,uint64))void`, `Auctions_endSuccess(uint64)void`, `Auctions_ended((uint64,uint64,uint64))void`, `Auctions_getID()uint64`, `Auctions_updateHighestBidder(uint64,address)void`, `_reachp_0((uint64))void`, `_reachp_1((uint64))void`, `_reachp_3((uint64,(byte,byte[184])))void`],
    pure: [],
    sigs: [`Auctions_created((uint64,uint64,uint64,address,byte[32],byte[80],uint64,uint64))void`, `Auctions_endSuccess(uint64)void`, `Auctions_ended((uint64,uint64,uint64))void`, `Auctions_getID()uint64`, `Auctions_updateHighestBidder(uint64,address)void`, `_reachp_0((uint64))void`, `_reachp_1((uint64))void`, `_reachp_3((uint64,(byte,byte[184])))void`]
    },
  GlobalNumByteSlice: 2,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCAGAAEIBLABECYCAAEAMRhBA6soZEkiWzUBJFs1AilkgggEB0BfPQQUiXiuBEnVULIEbe29gAS3LnjCBMGUrZkEzURxggTf2SMoNhoAjggBRQBkAEsAfAABAzUDVANJADYaATULJK8pNAtQUDULJTQBEkQiWzUPNAsiWzUMNAtXCLk1DYAEIrkS5jQMFlA0DVCwNAyIA7k0DSJVjQUDVANXA1oDXQM+Qv+1NhoBFzULJK+AAQE0CxZQIQSvUFA1C0L/qzYaATULJK+AAQI0C1CBoAGvUFA1C0L/k4DBAQAAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1C0L+yjYaARc2GgI1CzUMJK+AAQQ0DBY0C1BQgZABr1BQNQtC/qg0DVcBuDUVKDULgAgAAAAAAAABxzQLULA0CzUENBUiWzUUNBUkWzUTNBUhBVs1EjQVVxggNRE0FVc4IDUQNBVXWFA1DTQVgagBWzUMNBUhBFs1C4AE3hwFODQUFlA0ExZQNBIWUDQRUDQQUDQNUDQMFlA0CxZQsDIGNQ40DxaBGK9QJTIGNQI1ASlMVwAgZyg0ARY0AhZQZzEZIhJEiAH0NANAAAqABBUffHU0BFCwI0M0DSNbNQuABDycLPg0CxZQsCg1C4AIAAAAAAAAAiw0C1CwNAs1BDIGNQ5C/500DVcBGEk1ECJbNQ00ECRbNQw0ECEFWzULgATwcpnUNA0WUDQMFlA0CxZQsCg1C4AIAAAAAAAAAoQ0C1CwNAs1BDIGNQ5C/1WACAAAAAAAAAFbNA8WULA0DxY1BDQPIwgyBjUONQ9C/zQ0CyJbNQ00C1cIIDUMgAReFiWhNA0WUDQMULAoNQuACAAAAAAAAAMwNAtQsDQLNQQyBjUOQv79MQA1DTQLFzUMgASCxGH+NAwWULA0DIgA8zQNIzIGQv7mIzQBEkRXACA1DTQLFzUMgATVFRkUNAwWULA0DIgAzDQNMQASRCIyBjUONQ9C/q2IALWBoI0GNAYINQY2GgE1C0L/nIgAoTYaATULQv+yiACWNhoBNQtC/LAiMTQSRIECMTUSRCIxNhJEIjE3EkSIAHYyAyIiQv5uMRkiEkRC/oY0DVcBKDULQv8eIrIBI7IQsgeyCLOJQv3IQv52Qv6gQv7lSIlMCUk1BjIJiABTiQlJQf/uSTUGMRY0ACMISTUACUcCOAcyChJEOBAjEkQ4CBJEiTEZgQUSRIgAGSIyCjIJiAAhQv4aIzUDiUkiEkw0AhIRRIk0BjQHSg9B/6ZC/66xQv+FsbIJQv9/`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `25`,
    1000: `434`,
    1001: `434`,
    1002: `434`,
    1003: `435`,
    1004: `435`,
    1005: `436`,
    1006: `436`,
    1007: `436`,
    1008: `438`,
    1009: `439`,
    101: `25`,
    1010: `439`,
    1011: `440`,
    1012: `441`,
    1013: `441`,
    1014: `442`,
    1015: `442`,
    1016: `443`,
    1017: `443`,
    1018: `444`,
    1019: `445`,
    102: `27`,
    1020: `447`,
    1021: `447`,
    1022: `447`,
    1023: `449`,
    1024: `449`,
    1025: `449`,
    1026: `451`,
    1027: `451`,
    1028: `451`,
    1029: `453`,
    103: `28`,
    1030: `453`,
    1031: `453`,
    1032: `455`,
    1033: `456`,
    1034: `458`,
    1035: `459`,
    1036: `460`,
    1037: `461`,
    1038: `461`,
    1039: `462`,
    104: `29`,
    1040: `462`,
    1041: `463`,
    1042: `463`,
    1043: `463`,
    1044: `464`,
    1045: `466`,
    1046: `467`,
    1047: `468`,
    1048: `468`,
    1049: `468`,
    105: `30`,
    1050: `469`,
    1051: `470`,
    1052: `470`,
    1053: `473`,
    1054: `473`,
    1055: `474`,
    1056: `474`,
    1057: `475`,
    1058: `476`,
    1059: `477`,
    106: `30`,
    1060: `478`,
    1061: `478`,
    1062: `479`,
    1063: `480`,
    1064: `480`,
    1065: `481`,
    1066: `481`,
    1067: `482`,
    1068: `482`,
    1069: `483`,
    107: `31`,
    1070: `484`,
    1071: `485`,
    1072: `485`,
    1073: `486`,
    1074: `487`,
    1075: `488`,
    1076: `489`,
    1077: `489`,
    1078: `490`,
    1079: `491`,
    108: `32`,
    1080: `492`,
    1081: `494`,
    1082: `494`,
    1083: `495`,
    1084: `495`,
    1085: `496`,
    1086: `497`,
    1087: `499`,
    1088: `499`,
    1089: `499`,
    109: `33`,
    1090: `501`,
    1091: `502`,
    1092: `502`,
    1093: `503`,
    1094: `503`,
    1095: `504`,
    1096: `504`,
    1097: `504`,
    1098: `505`,
    1099: `505`,
    11: `2`,
    110: `33`,
    1100: `505`,
    1101: `507`,
    1102: `508`,
    1103: `508`,
    1104: `509`,
    1105: `511`,
    1106: `512`,
    1107: `513`,
    1108: `514`,
    1109: `515`,
    111: `35`,
    1110: `515`,
    1111: `516`,
    1112: `517`,
    1113: `518`,
    1114: `519`,
    1115: `521`,
    1116: `521`,
    1117: `522`,
    1118: `522`,
    1119: `523`,
    112: `36`,
    1120: `524`,
    1121: `525`,
    1122: `525`,
    1123: `525`,
    1124: `526`,
    1125: `526`,
    1126: `526`,
    1127: `528`,
    1128: `529`,
    1129: `529`,
    113: `36`,
    1130: `529`,
    1131: `531`,
    1132: `532`,
    1133: `532`,
    1134: `533`,
    114: `37`,
    115: `38`,
    116: `40`,
    117: `41`,
    118: `42`,
    119: `42`,
    12: `2`,
    120: `43`,
    121: `43`,
    122: `44`,
    123: `45`,
    124: `46`,
    125: `46`,
    126: `47`,
    127: `47`,
    128: `48`,
    129: `48`,
    13: `2`,
    130: `48`,
    131: `49`,
    132: `49`,
    133: `50`,
    134: `50`,
    135: `50`,
    136: `50`,
    137: `50`,
    138: `50`,
    139: `51`,
    14: `2`,
    140: `51`,
    141: `52`,
    142: `53`,
    143: `54`,
    144: `54`,
    145: `55`,
    146: `56`,
    147: `58`,
    148: `58`,
    149: `59`,
    15: `4`,
    150: `59`,
    151: `59`,
    152: `60`,
    153: `60`,
    154: `61`,
    155: `62`,
    156: `63`,
    157: `63`,
    158: `63`,
    159: `63`,
    16: `4`,
    160: `63`,
    161: `63`,
    162: `63`,
    163: `63`,
    164: `63`,
    165: `63`,
    166: `63`,
    167: `63`,
    168: `64`,
    169: `64`,
    17: `5`,
    170: `64`,
    171: `66`,
    172: `66`,
    173: `66`,
    174: `67`,
    175: `68`,
    176: `68`,
    177: `70`,
    178: `71`,
    179: `72`,
    18: `5`,
    180: `72`,
    181: `72`,
    182: `73`,
    183: `73`,
    184: `74`,
    185: `75`,
    186: `76`,
    187: `76`,
    188: `77`,
    189: `78`,
    19: `5`,
    190: `79`,
    191: `80`,
    192: `80`,
    193: `81`,
    194: `81`,
    195: `81`,
    196: `83`,
    197: `83`,
    198: `83`,
    199: `84`,
    2: `2`,
    20: `6`,
    200: `84`,
    201: `86`,
    202: `87`,
    203: `88`,
    204: `88`,
    205: `88`,
    206: `89`,
    207: `89`,
    208: `90`,
    209: `91`,
    21: `7`,
    210: `91`,
    211: `91`,
    212: `92`,
    213: `93`,
    214: `94`,
    215: `95`,
    216: `95`,
    217: `96`,
    218: `96`,
    219: `96`,
    22: `8`,
    220: `99`,
    221: `99`,
    222: `99`,
    223: `99`,
    224: `99`,
    225: `99`,
    226: `99`,
    227: `99`,
    228: `99`,
    229: `99`,
    23: `9`,
    230: `99`,
    231: `99`,
    232: `99`,
    233: `99`,
    234: `99`,
    235: `99`,
    236: `99`,
    237: `99`,
    238: `99`,
    239: `99`,
    24: `10`,
    240: `99`,
    241: `99`,
    242: `99`,
    243: `99`,
    244: `99`,
    245: `99`,
    246: `99`,
    247: `99`,
    248: `99`,
    249: `99`,
    25: `11`,
    250: `99`,
    251: `99`,
    252: `99`,
    253: `99`,
    254: `99`,
    255: `99`,
    256: `99`,
    257: `99`,
    258: `99`,
    259: `99`,
    26: `11`,
    260: `99`,
    261: `99`,
    262: `99`,
    263: `99`,
    264: `99`,
    265: `99`,
    266: `99`,
    267: `99`,
    268: `99`,
    269: `99`,
    27: `12`,
    270: `99`,
    271: `99`,
    272: `99`,
    273: `99`,
    274: `99`,
    275: `99`,
    276: `99`,
    277: `99`,
    278: `99`,
    279: `99`,
    28: `13`,
    280: `99`,
    281: `99`,
    282: `99`,
    283: `99`,
    284: `99`,
    285: `99`,
    286: `99`,
    287: `99`,
    288: `99`,
    289: `99`,
    29: `14`,
    290: `99`,
    291: `99`,
    292: `99`,
    293: `99`,
    294: `99`,
    295: `99`,
    296: `99`,
    297: `99`,
    298: `99`,
    299: `99`,
    3: `2`,
    30: `14`,
    300: `99`,
    301: `99`,
    302: `99`,
    303: `99`,
    304: `99`,
    305: `99`,
    306: `99`,
    307: `99`,
    308: `99`,
    309: `99`,
    31: `15`,
    310: `99`,
    311: `99`,
    312: `99`,
    313: `99`,
    314: `99`,
    315: `99`,
    316: `99`,
    317: `99`,
    318: `99`,
    319: `99`,
    32: `16`,
    320: `99`,
    321: `99`,
    322: `99`,
    323: `99`,
    324: `99`,
    325: `99`,
    326: `99`,
    327: `99`,
    328: `99`,
    329: `99`,
    33: `18`,
    330: `99`,
    331: `99`,
    332: `99`,
    333: `99`,
    334: `99`,
    335: `99`,
    336: `99`,
    337: `99`,
    338: `99`,
    339: `99`,
    34: `18`,
    340: `99`,
    341: `99`,
    342: `99`,
    343: `99`,
    344: `99`,
    345: `99`,
    346: `99`,
    347: `99`,
    348: `99`,
    349: `99`,
    35: `18`,
    350: `99`,
    351: `99`,
    352: `99`,
    353: `99`,
    354: `99`,
    355: `99`,
    356: `99`,
    357: `99`,
    358: `99`,
    359: `99`,
    36: `18`,
    360: `99`,
    361: `99`,
    362: `99`,
    363: `99`,
    364: `99`,
    365: `99`,
    366: `99`,
    367: `99`,
    368: `99`,
    369: `99`,
    37: `18`,
    370: `99`,
    371: `99`,
    372: `99`,
    373: `99`,
    374: `99`,
    375: `99`,
    376: `99`,
    377: `99`,
    378: `99`,
    379: `99`,
    38: `18`,
    380: `99`,
    381: `99`,
    382: `99`,
    383: `99`,
    384: `99`,
    385: `99`,
    386: `99`,
    387: `99`,
    388: `99`,
    389: `99`,
    39: `18`,
    390: `99`,
    391: `99`,
    392: `99`,
    393: `99`,
    394: `99`,
    395: `99`,
    396: `99`,
    397: `99`,
    398: `99`,
    399: `99`,
    4: `2`,
    40: `18`,
    400: `99`,
    401: `99`,
    402: `99`,
    403: `99`,
    404: `99`,
    405: `99`,
    406: `99`,
    407: `99`,
    408: `99`,
    409: `99`,
    41: `18`,
    410: `99`,
    411: `99`,
    412: `99`,
    413: `99`,
    414: `99`,
    415: `99`,
    416: `100`,
    417: `100`,
    418: `101`,
    419: `101`,
    42: `18`,
    420: `101`,
    421: `103`,
    422: `103`,
    423: `103`,
    424: `104`,
    425: `105`,
    426: `105`,
    427: `105`,
    428: `106`,
    429: `106`,
    43: `18`,
    430: `107`,
    431: `107`,
    432: `109`,
    433: `110`,
    434: `111`,
    435: `111`,
    436: `111`,
    437: `112`,
    438: `112`,
    439: `113`,
    44: `18`,
    440: `114`,
    441: `114`,
    442: `115`,
    443: `116`,
    444: `117`,
    445: `117`,
    446: `117`,
    447: `118`,
    448: `119`,
    449: `120`,
    45: `18`,
    450: `121`,
    451: `121`,
    452: `122`,
    453: `122`,
    454: `122`,
    455: `124`,
    456: `124`,
    457: `125`,
    458: `125`,
    459: `125`,
    46: `18`,
    460: `126`,
    461: `126`,
    462: `127`,
    463: `128`,
    464: `128`,
    465: `129`,
    466: `129`,
    467: `129`,
    468: `129`,
    469: `129`,
    47: `18`,
    470: `129`,
    471: `129`,
    472: `129`,
    473: `129`,
    474: `129`,
    475: `130`,
    476: `130`,
    477: `131`,
    478: `132`,
    479: `133`,
    48: `18`,
    480: `133`,
    481: `134`,
    482: `134`,
    483: `135`,
    484: `135`,
    485: `136`,
    486: `137`,
    487: `138`,
    488: `138`,
    489: `139`,
    49: `18`,
    490: `139`,
    491: `140`,
    492: `141`,
    493: `142`,
    494: `142`,
    495: `143`,
    496: `143`,
    497: `144`,
    498: `144`,
    499: `145`,
    5: `2`,
    50: `18`,
    500: `146`,
    501: `146`,
    502: `147`,
    503: `147`,
    504: `148`,
    505: `148`,
    506: `148`,
    507: `149`,
    508: `149`,
    509: `150`,
    51: `18`,
    510: `150`,
    511: `151`,
    512: `151`,
    513: `151`,
    514: `152`,
    515: `152`,
    516: `153`,
    517: `153`,
    518: `154`,
    519: `154`,
    52: `18`,
    520: `154`,
    521: `155`,
    522: `155`,
    523: `156`,
    524: `156`,
    525: `157`,
    526: `157`,
    527: `157`,
    528: `158`,
    529: `159`,
    53: `18`,
    530: `159`,
    531: `160`,
    532: `160`,
    533: `161`,
    534: `161`,
    535: `162`,
    536: `163`,
    537: `163`,
    538: `164`,
    539: `164`,
    54: `18`,
    540: `164`,
    541: `164`,
    542: `164`,
    543: `164`,
    544: `165`,
    545: `165`,
    546: `166`,
    547: `167`,
    548: `168`,
    549: `168`,
    55: `18`,
    550: `169`,
    551: `170`,
    552: `171`,
    553: `171`,
    554: `172`,
    555: `173`,
    556: `174`,
    557: `174`,
    558: `175`,
    559: `176`,
    56: `18`,
    560: `176`,
    561: `177`,
    562: `178`,
    563: `178`,
    564: `179`,
    565: `180`,
    566: `180`,
    567: `181`,
    568: `182`,
    569: `183`,
    57: `18`,
    570: `183`,
    571: `184`,
    572: `185`,
    573: `186`,
    574: `188`,
    575: `188`,
    576: `189`,
    577: `189`,
    578: `192`,
    579: `192`,
    58: `18`,
    580: `193`,
    581: `194`,
    582: `194`,
    583: `195`,
    584: `196`,
    585: `197`,
    586: `198`,
    587: `198`,
    588: `200`,
    589: `200`,
    59: `18`,
    590: `201`,
    591: `201`,
    592: `202`,
    593: `203`,
    594: `204`,
    595: `204`,
    596: `204`,
    597: `205`,
    598: `206`,
    599: `207`,
    6: `2`,
    60: `18`,
    600: `207`,
    601: `208`,
    602: `209`,
    603: `209`,
    604: `210`,
    605: `211`,
    606: `212`,
    607: `213`,
    608: `213`,
    609: `214`,
    61: `18`,
    610: `215`,
    611: `216`,
    612: `218`,
    613: `218`,
    614: `218`,
    615: `220`,
    616: `220`,
    617: `221`,
    618: `221`,
    619: `221`,
    62: `18`,
    620: `223`,
    621: `223`,
    622: `223`,
    623: `223`,
    624: `223`,
    625: `223`,
    626: `224`,
    627: `224`,
    628: `225`,
    629: `226`,
    63: `18`,
    630: `228`,
    631: `229`,
    632: `231`,
    633: `231`,
    634: `232`,
    635: `233`,
    636: `234`,
    637: `234`,
    638: `235`,
    639: `235`,
    64: `18`,
    640: `235`,
    641: `235`,
    642: `235`,
    643: `235`,
    644: `236`,
    645: `236`,
    646: `237`,
    647: `238`,
    648: `239`,
    649: `241`,
    65: `18`,
    650: `242`,
    651: `242`,
    652: `243`,
    653: `243`,
    654: `243`,
    655: `243`,
    656: `243`,
    657: `243`,
    658: `243`,
    659: `243`,
    66: `18`,
    660: `243`,
    661: `243`,
    662: `244`,
    663: `244`,
    664: `245`,
    665: `246`,
    666: `247`,
    667: `247`,
    668: `248`,
    669: `248`,
    67: `18`,
    670: `249`,
    671: `249`,
    672: `250`,
    673: `250`,
    674: `251`,
    675: `251`,
    676: `251`,
    677: `253`,
    678: `253`,
    679: `254`,
    68: `18`,
    680: `254`,
    681: `254`,
    682: `255`,
    683: `256`,
    684: `256`,
    685: `257`,
    686: `258`,
    687: `259`,
    688: `259`,
    689: `260`,
    69: `18`,
    690: `260`,
    691: `261`,
    692: `262`,
    693: `263`,
    694: `263`,
    695: `264`,
    696: `264`,
    697: `265`,
    698: `265`,
    699: `266`,
    7: `2`,
    70: `18`,
    700: `267`,
    701: `267`,
    702: `268`,
    703: `268`,
    704: `268`,
    705: `268`,
    706: `268`,
    707: `268`,
    708: `269`,
    709: `269`,
    71: `18`,
    710: `270`,
    711: `271`,
    712: `272`,
    713: `272`,
    714: `273`,
    715: `274`,
    716: `275`,
    717: `275`,
    718: `276`,
    719: `277`,
    72: `18`,
    720: `278`,
    721: `280`,
    722: `281`,
    723: `281`,
    724: `282`,
    725: `282`,
    726: `282`,
    727: `282`,
    728: `282`,
    729: `282`,
    73: `18`,
    730: `282`,
    731: `282`,
    732: `282`,
    733: `282`,
    734: `283`,
    735: `283`,
    736: `284`,
    737: `285`,
    738: `286`,
    739: `286`,
    74: `18`,
    740: `287`,
    741: `287`,
    742: `288`,
    743: `288`,
    744: `289`,
    745: `289`,
    746: `290`,
    747: `290`,
    748: `290`,
    749: `292`,
    75: `19`,
    750: `292`,
    751: `292`,
    752: `292`,
    753: `292`,
    754: `292`,
    755: `292`,
    756: `292`,
    757: `292`,
    758: `292`,
    759: `293`,
    76: `19`,
    760: `293`,
    761: `294`,
    762: `295`,
    763: `296`,
    764: `297`,
    765: `297`,
    766: `298`,
    767: `299`,
    768: `299`,
    769: `300`,
    77: `19`,
    770: `300`,
    771: `301`,
    772: `302`,
    773: `303`,
    774: `303`,
    775: `304`,
    776: `304`,
    777: `305`,
    778: `305`,
    779: `306`,
    78: `20`,
    780: `306`,
    781: `306`,
    782: `308`,
    783: `308`,
    784: `309`,
    785: `310`,
    786: `311`,
    787: `311`,
    788: `312`,
    789: `312`,
    79: `20`,
    790: `313`,
    791: `313`,
    792: `313`,
    793: `314`,
    794: `314`,
    795: `315`,
    796: `315`,
    797: `315`,
    798: `315`,
    799: `315`,
    8: `2`,
    80: `20`,
    800: `315`,
    801: `316`,
    802: `316`,
    803: `317`,
    804: `318`,
    805: `319`,
    806: `319`,
    807: `320`,
    808: `321`,
    809: `323`,
    81: `20`,
    810: `324`,
    811: `324`,
    812: `325`,
    813: `325`,
    814: `325`,
    815: `325`,
    816: `325`,
    817: `325`,
    818: `325`,
    819: `325`,
    82: `20`,
    820: `325`,
    821: `325`,
    822: `326`,
    823: `326`,
    824: `327`,
    825: `328`,
    826: `329`,
    827: `329`,
    828: `330`,
    829: `330`,
    83: `20`,
    830: `331`,
    831: `331`,
    832: `332`,
    833: `332`,
    834: `333`,
    835: `333`,
    836: `333`,
    837: `335`,
    838: `335`,
    839: `336`,
    84: `20`,
    840: `336`,
    841: `337`,
    842: `337`,
    843: `338`,
    844: `339`,
    845: `339`,
    846: `340`,
    847: `340`,
    848: `340`,
    849: `340`,
    85: `20`,
    850: `340`,
    851: `340`,
    852: `341`,
    853: `341`,
    854: `342`,
    855: `343`,
    856: `344`,
    857: `346`,
    858: `346`,
    859: `347`,
    86: `20`,
    860: `347`,
    861: `347`,
    862: `349`,
    863: `349`,
    864: `350`,
    865: `351`,
    866: `351`,
    867: `352`,
    868: `352`,
    869: `352`,
    87: `20`,
    870: `354`,
    871: `355`,
    872: `355`,
    873: `356`,
    874: `357`,
    875: `359`,
    876: `359`,
    877: `359`,
    878: `360`,
    879: `360`,
    88: `20`,
    880: `361`,
    881: `361`,
    882: `362`,
    883: `363`,
    884: `363`,
    885: `364`,
    886: `364`,
    887: `364`,
    888: `364`,
    889: `364`,
    89: `20`,
    890: `364`,
    891: `365`,
    892: `365`,
    893: `366`,
    894: `367`,
    895: `368`,
    896: `370`,
    897: `370`,
    898: `371`,
    899: `371`,
    9: `2`,
    90: `20`,
    900: `371`,
    901: `372`,
    902: `372`,
    903: `373`,
    904: `373`,
    905: `374`,
    906: `375`,
    907: `378`,
    908: `379`,
    909: `379`,
    91: `20`,
    910: `380`,
    911: `380`,
    912: `381`,
    913: `381`,
    914: `382`,
    915: `382`,
    916: `382`,
    917: `384`,
    918: `384`,
    919: `384`,
    92: `20`,
    920: `385`,
    921: `385`,
    922: `385`,
    923: `385`,
    924: `387`,
    925: `387`,
    926: `388`,
    927: `389`,
    928: `389`,
    929: `390`,
    93: `20`,
    930: `390`,
    931: `390`,
    932: `391`,
    933: `391`,
    934: `392`,
    935: `392`,
    936: `392`,
    937: `394`,
    938: `394`,
    939: `394`,
    94: `20`,
    940: `395`,
    941: `395`,
    942: `395`,
    943: `396`,
    944: `396`,
    945: `397`,
    946: `397`,
    947: `397`,
    948: `399`,
    949: `399`,
    95: `20`,
    950: `399`,
    951: `400`,
    952: `400`,
    953: `400`,
    954: `401`,
    955: `401`,
    956: `402`,
    957: `402`,
    958: `402`,
    959: `404`,
    96: `22`,
    960: `405`,
    961: `405`,
    962: `406`,
    963: `407`,
    964: `408`,
    965: `408`,
    966: `409`,
    967: `409`,
    968: `410`,
    969: `411`,
    97: `24`,
    970: `412`,
    971: `413`,
    972: `413`,
    973: `414`,
    974: `415`,
    975: `416`,
    976: `417`,
    977: `417`,
    978: `418`,
    979: `419`,
    98: `24`,
    980: `420`,
    981: `420`,
    982: `420`,
    983: `421`,
    984: `421`,
    985: `422`,
    986: `423`,
    987: `424`,
    988: `424`,
    989: `424`,
    99: `24`,
    990: `426`,
    991: `426`,
    992: `427`,
    993: `428`,
    994: `429`,
    995: `431`,
    996: `431`,
    997: `431`,
    998: `433`,
    999: `433`
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
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T3","name":"v1546","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T3","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T3","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T8","name":"which","type":"uint8"},{"components":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address payable","name":"contractInfo","type":"address"},{"internalType":"uint256","name":"blockCreated","type":"uint256"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"bytes32","name":"title","type":"bytes32"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes16","name":"elem2","type":"bytes16"}],"internalType":"struct T0","name":"description","type":"tuple"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"address payable","name":"tokenId","type":"address"}],"internalType":"struct T1","name":"elem0","type":"tuple"}],"internalType":"struct T2","name":"_Auctions_created0_44","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T3","name":"_Auctions_endSuccess0_44","type":"tuple"},{"components":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"blockEnded","type":"uint256"},{"internalType":"uint256","name":"lastBid","type":"uint256"}],"internalType":"struct T4","name":"elem0","type":"tuple"}],"internalType":"struct T5","name":"_Auctions_ended0_44","type":"tuple"},{"internalType":"bool","name":"_Auctions_getID0_44","type":"bool"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"}],"internalType":"struct T7","name":"_Auctions_updateHighestBidder0_44","type":"tuple"}],"internalType":"struct T8","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T9","name":"_a","type":"tuple"}],"name":"_reach_e3","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"}],"name":"_reach_oe_v347","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v455","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v556","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v644","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v816","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"},{"indexed":false,"internalType":"address payable","name":"v1","type":"address"},{"indexed":false,"internalType":"uint256","name":"v2","type":"uint256"},{"indexed":false,"internalType":"address payable","name":"v3","type":"address"},{"indexed":false,"internalType":"bytes32","name":"v4","type":"bytes32"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes16","name":"elem2","type":"bytes16"}],"indexed":false,"internalType":"struct T0","name":"v5","type":"tuple"},{"indexed":false,"internalType":"uint256","name":"v6","type":"uint256"},{"indexed":false,"internalType":"address payable","name":"v7","type":"address"}],"name":"create","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"v2","type":"uint256"}],"name":"end","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"}],"name":"endSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"},{"indexed":false,"internalType":"address payable","name":"v1","type":"address"}],"name":"updateHighestBidder","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address payable","name":"contractInfo","type":"address"},{"internalType":"uint256","name":"blockCreated","type":"uint256"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"bytes32","name":"title","type":"bytes32"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes16","name":"elem2","type":"bytes16"}],"internalType":"struct T0","name":"description","type":"tuple"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"address payable","name":"tokenId","type":"address"}],"internalType":"struct T1","name":"v1519","type":"tuple"}],"name":"Auctions_created","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v1525","type":"uint256"}],"name":"Auctions_endSuccess","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"blockEnded","type":"uint256"},{"internalType":"uint256","name":"lastBid","type":"uint256"}],"internalType":"struct T4","name":"v1531","type":"tuple"}],"name":"Auctions_ended","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Auctions_getID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v1542","type":"uint256"},{"internalType":"address payable","name":"v1543","type":"address"}],"name":"Auctions_updateHighestBidder","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T3","name":"v1549","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T8","name":"which","type":"uint8"},{"components":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address payable","name":"contractInfo","type":"address"},{"internalType":"uint256","name":"blockCreated","type":"uint256"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"bytes32","name":"title","type":"bytes32"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes16","name":"elem2","type":"bytes16"}],"internalType":"struct T0","name":"description","type":"tuple"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"address payable","name":"tokenId","type":"address"}],"internalType":"struct T1","name":"elem0","type":"tuple"}],"internalType":"struct T2","name":"_Auctions_created0_44","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T3","name":"_Auctions_endSuccess0_44","type":"tuple"},{"components":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"blockEnded","type":"uint256"},{"internalType":"uint256","name":"lastBid","type":"uint256"}],"internalType":"struct T4","name":"elem0","type":"tuple"}],"internalType":"struct T5","name":"_Auctions_ended0_44","type":"tuple"},{"internalType":"bool","name":"_Auctions_getID0_44","type":"bool"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"}],"internalType":"struct T7","name":"_Auctions_updateHighestBidder0_44","type":"tuple"}],"internalType":"struct T8","name":"elem1","type":"tuple"}],"internalType":"struct T9","name":"v1552","type":"tuple"}],"name":"_reachp_3","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x608062001c1190813803601f1980601f83011683019360018060401b039284861084871117620002dc5780859260409788528339602094859181010312620002f2578451906200004f82620002f7565b51815243600355845160c081019080821085831117620002dc5760a0918752600091818380935282888201528289820152826060820152826080820152015260049160ff835416620002c5577f87b51d26f290dc1fb530aed45f92ac77d813efb7cccb67b06c40d875955dde87878051338152835189820152a1518015908115620002b8575b5015620002a157346200028a578551620000ef81620002f7565b3390526001948582554386558651923382850152818452878401848110878211176200027757885283519586116200026457600254908782811c9216801562000259575b83831014620002465750601f8111620001fa575b508093601f8611600114620001925750509183949184939462000186575b50501b916000199060031b1c1916176002555b516118fd9081620003148239f35b01519250388062000165565b600283528183209493928692918316915b88838310620001df5750505010620001c5575b505050811b0160025562000178565b015160001960f88460031b161c19169055388080620001b6565b858701518855909601959485019487935090810190620001a3565b60028352818320601f870160051c8101918388106200023b575b601f0160051c019087905b8281106200022f57505062000147565b8481550187906200021f565b909150819062000214565b634e487b7160e01b845260229052602483fd5b91607f169162000133565b634e487b7160e01b835260419052602482fd5b634e487b7160e01b845260418252602484fd5b855163100960cb60e01b8152600981840152602490fd5b855163100960cb60e01b8152600881840152602490fd5b90506001541438620000d5565b865163100960cb60e01b8152600781850152602490fd5b634e487b7160e01b600052604160045260246000fd5b600080fd5b602081019081106001600160401b03821117620002dc5760405256fe608060408181526004918236101561001f575b505050361561001d57005b005b600090813560e01c9081631e93b0f1146108c957508063236d27c61461082d5780632cfbfba7146107e457806340e71039146107835780634c344d9d146106f1578063573b8510146104525780637143ef8d14610249578063832307571461022a578063ab53f2c6146101ba5763ffc4717f03610012576101403660031901126101b7576100ab610a72565b908251936100b885610986565b358452602435936001600160a01b0380861686036101ab57602095868301526044358583015260643581811681036101b35760608301526084356080830152606060a3193601126101ab57845161010e816109a2565b60a435815260c4358782015260e4356001600160801b0319811681036101af578682015260a08301526101043560c08301526101243590811681036101ab5792809282879560e06101a095015286516101668161091f565b61016e610ac3565b81528681019161017c610b26565b835281515282825152518682510152610193610b9a565b9182525185820152610c01565b015115159051908152f35b8280fd5b8480fd5b8380fd5b80fd5b50903461022657816003193601126102265781546101d66109bd565b91805193849283526020828185015284518093850152815b83811061020f57505060608094508284010152601f80199101168101030190f35b8086018201518782016060015286945081016101ee565b5080fd5b5090346102265781600319360112610226576020906001549051908152f35b506102603660031901126101b75761025f610a72565b9180519261026c8461091f565b843584526102403660231901126101ab5781519460c08601906001600160401b0382118783101761043f5750825260243560058110156101b35785526101403660431901126101ab578151936102c185610950565b8251956102cd87610986565b60443587526001600160a01b03966064359690888816880361043b57602097888201526084358682015260a435898116810361043357606082015260c4356080820152606060e31936011261043b578551610327816109a2565b60e43581526101043589820152610124356001600160801b031981168103610437578782015260a08201526101443560c08201526101643589811681036104335760e082015281528682015285610183193601126101af57835161038a81610950565b610184358152818501526060366101a31901126101af5783516103ac81610950565b84516103b7816109a2565b6101a43581526101c435888201526101e435868201528152606082015261020435801515810361042f57608082015283610223193601126101af5783516103fd8161091f565b61022435815261024435978816880361042f57869761042995969782015260a082015286820152610c01565b51908152f35b8580fd5b8780fd5b8880fd5b8680fd5b634e487b7160e01b855260419052602484fd5b5090602092836003193601126101ab5761046a610a72565b5081519061047782610950565b80358252600191828554036106da5761048e6109bd565b90868280518101031261042f57868551926104a884610950565b01516001600160a01b039190828116810361043357835260ff8454166106c3577fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee8159686805133815283518b820152a15180159081156106b8575b50156106a1573461068a5733915116036106735782516105208161091f565b848152438682015283519061053482610950565b85825251809152818555438355835190868201528581526105548161091f565b8051916001600160401b03831161066057506105716002546108e5565b601f8111610619575b508590601f83116001146105b85792829391839287946105ad575b50501b916000199060031b1c19161760025551908152f35b015192503880610595565b60028652868620919083601f198116885b8a8883831061060257505050106105e9575b505050811b01600255610429565b015160001960f88460031b161c191690553880806105db565b8686015188559096019594850194879350016105c9565b60028652868620601f840160051c810191888510610656575b601f0160051c019084905b82811061064b57505061057a565b87815501849061063d565b9091508190610632565b634e487b7160e01b865260419052602485fd5b602490600e84519163100960cb60e01b8352820152fd5b845163100960cb60e01b8152600d81850152602490fd5b845163100960cb60e01b8152600c81850152602490fd5b905084541438610501565b855163100960cb60e01b8152600b81860152602490fd5b835163100960cb60e01b8152600a81840152602490fd5b509160603660031901126101ab576020926101a0606092610710610a72565b92839186519061071f826109a2565b3581526024358882015260443587820152865161073b8161091f565b875161074681610950565b61074e610aa4565b815281528881019161075e610b26565b83528151526002825152518682510152610776610b9a565b9182525187820152610c01565b509160203660031901126101ab576020926101a083926107a1610a72565b92839185516107af8161091f565b86516107ba81610950565b8381528152888101916107cb610b26565b8352358151526001825152518682510152610776610b9a565b509081600319360112610226576080602092610824610801610a72565b809261080b610b9a565b8781019060038251525115158682510152610776610b9a565b01519051908152f35b5091816003193601126101ab576001600160a01b039260243584811691908290036101b75760a092916101a091610862610a72565b9384928751916108718361091f565b6020998a84019282358552835289519261088a8461091f565b8a516108958161091f565b868152868d82015284528b8401946108ab610b26565b86525184515251168a83510152825152518682510152610776610b9a565b9050346102265781600319360112610226576020906003548152f35b90600182811c92168015610915575b60208310146108ff57565b634e487b7160e01b600052602260045260246000fd5b91607f16916108f4565b604081019081106001600160401b0382111761093a57604052565b634e487b7160e01b600052604160045260246000fd5b602081019081106001600160401b0382111761093a57604052565b60c081019081106001600160401b0382111761093a57604052565b61010081019081106001600160401b0382111761093a57604052565b606081019081106001600160401b0382111761093a57604052565b6040519060006002546109cf816108e5565b808552600191808316908115610a535750600114610a0d575b5050829003601f01601f191682016001600160401b0381118382101761093a57604052565b600260009081526020935091836000805160206118d18339815191525b838510610a3f575050505083010138806109e8565b805488860183015293019284908201610a2a565b919250506020925060ff191682850152151560051b83010138806109e8565b60405190610a7f8261096b565b8160a06000918281528260208201528260408201528260608201528260808201520152565b60405190610ab1826109a2565b60006040838281528260208201520152565b60405190610ad082610950565b6040518261010082016001600160401b0381118382101761093a576040526000808352806020840152806040840152806060840152806080840152610b13610aa4565b60a08401528060c084015260e083015252565b60405190610b338261096b565b8160008152610b40610ac3565b6020820152604051610b5181610950565b600081526040820152604051610b6681610950565b610b6e610aa4565b815260608201526000608082015260a060405191610b8b8361091f565b60008352600060208401520152565b60405190610ba78261091f565b81600081526020610bb6610b26565b910152565b80518252602080820151908301526040908101516001600160801b031916910152565b516005811015610beb5790565b634e487b7160e01b600052602160045260246000fd5b6040519091608082016001600160401b0381118382101761093a57604052610c27610ac3565b8252604051610c3581610950565b600081526020830152604051610c4a81610950565b610c52610aa4565b81526040830152604051610c658161091f565b600081526000602082015260608301526004600054036118b757610c876109bd565b9260208480518101031261160c57602060405194610ca486610950565b0151845260ff6004541661189e576040513381528151602082015260208201518051916005831015610beb5760a0610280927fa8838136ef04469e2265dd08626f469c7507f2208e7756e3bcf1e632632483da94604084015260208101515180516060850152600180841b036020820151166080850152604081015183850152600180841b0360608201511660c0850152608081015160e0850152610d5183820151610100860190610bbb565b60c081015161016085015260e001516000196001841b0116610180840152604081810151516101a085015260608201515180516101c08601526020808201516101e087015291015161020085015260808201511515610220850152910151805161024084015201516001600160a01b0316610260820152a180518015908115611892575b501561187957610de86020820151610bde565b6005811015610beb5761105b576020809101510151825234611042577fda13ef4cacfc3717e672093d7c616893190e35acda7e5bfed6c9c3fb3780e8e79160006020610140937f0508272cd8ae0cc2f33dd508ad59877ceab76d044a7ed4dc03ae282ee695bc0682604051858152a10152515180519060018060a01b0360208201511690610ec5604082015160018060a01b0360608401511660808401519060a08501519260c08601519560e060018060a01b039101511696604051988952602089015260408801526060870152608086015260a0850190610bbb565b610100830152610120820152a160405190610edf8261091f565b6000825260208201906000825251825243905260405190610eff82610950565b6000825251809152600460005560019043825560405190602082015260208152610f288161091f565b8051906001600160401b03821161093a57610f446002546108e5565b601f8111610fec575b50602090601f8311600114610f8957928293918392600094610f7e575b50501b916000199060031b1c191617600255565b015192503880610f6a565b90601f1983169160026000528360206000209360005b87828210610fd357505010610fba575b505050811b01600255565b015160001960f88460031b161c19169055388080610faf565b8486015187559095019460209485019487935001610f9f565b60026000526000805160206118d1833981519152601f840160051c81019160208510611038575b601f0160051c019084905b82811061102c575050610f4d565b6000815501849061101e565b9091508190611013565b60405163100960cb60e01b815260126004820152602490fd5b61106e6020829695969493940151610bde565b6005811015610beb5760010361125957602060409101510151602082015234611240576000917f3700630a2036f610abd8cab13b91d2db61f14720974a86093b2fcf94eeccaede6020806040940151518451908152a17f4fdf1a463dfdd85eb33b9a39785d2a3e584212e83fe7ee6fd2e6755da1ce0b0960208351858152a10152604051916110fc8361091f565b600083526020830190600082525183524390526040519161111c83610950565b6000835251809252600460005543600155604051916020830152602082526111438261091f565b81516001600160401b03811161093a5761115e6002546108e5565b601f81116111ed575b50602092601f82116001146111a45792819293600092611199575b50508160011b916000199060031b1c191617600255565b015190503880611182565b601f19821693600260005260206000209160005b8681106111d55750836001959610610fba57505050811b01600255565b919260206001819286850151815501940192016111b8565b60026000526000805160206118d1833981519152601f830160051c81019160208410611236575b601f0160051c01905b81811061122a5750611167565b6000815560010161121d565b9091508190611214565b60405163100960cb60e01b815260136004820152602490fd5b6112666020820151610bde565b6005811015610beb5760020361145e576020015160600151604082015234611445576000917f8ae1d12745070499deb90f74dbda066d3ebb9066dc64fa2d22e24615fabfb34c606060408194015151805190604060208201519101519060405192835260208301526040820152a17fb48edb7d26e80923bdfc3f95747d7ebdf984e4dbaf11288e2d62c04605981fa96020604051858152a101526040519161130d8361091f565b600083526020830190600082525183524390526040519161132d83610950565b6000835251809252600460005543600155604051916020830152602082526113548261091f565b81516001600160401b03811161093a5761136f6002546108e5565b601f81116113f2575b50602092601f82116001146113a957928192936000926111995750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b8681106113da5750836001959610610fba57505050811b01600255565b919260206001819286850151815501940192016113bd565b60026000526000805160206118d1833981519152601f830160051c8101916020841061143b575b601f0160051c01905b81811061142f5750611378565b60008155600101611422565b9091508190611419565b60405163100960cb60e01b815260146004820152602490fd5b61146b6020820151610bde565b6005811015610beb5760030361164057505034611627577feb397a342234218189989984f1cfddb48e215e923a4adbd4bc538c1951f1263660208451604051908152a160808351910152604051916114c28361091f565b6000835260208301906000825251600181019081811161161157811061160c578352439052604051916114f483610950565b60008352518092526004600055436001556040519160208301526020825261151b8261091f565b81516001600160401b03811161093a576115366002546108e5565b601f81116115b9575b50602092601f821160011461157057928192936000926111995750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b8681106115a15750836001959610610fba57505050811b01600255565b91926020600181928685015181550194019201611584565b60026000526000805160206118d1833981519152601f830160051c81019160208410611602575b601f0160051c01905b8181106115f6575061153f565b600081556001016115e9565b90915081906115e0565b600080fd5b634e487b7160e01b600052601160045260246000fd5b60405163100960cb60e01b815260156004820152602490fd5b61164d6020820151610bde565b6005811015610beb57600414611665575b5050509050565b6020015160a00151606082015234611860576000917fe01ee6bd3c9de453f0a87c76609e73f19fb4edb39f5be4e8f6cdb7091bd618636040606060a09401518051906020600180881b039101511682519182526020820152a17fdd8447275264ae3a58907cee9408ea54287c3227e6725b86b7de310454d21f406020604051858152a10152604051916116f78361091f565b600083526020830190600082525183524390526040519161171783610950565b60008352518092526004600055436001556040519160208301526020825261173e8261091f565b81516001600160401b03811161093a576117596002546108e5565b601f811161180d575b50602092601f82116001146117a7579281929360009261179c575b50508160011b916000199060031b1c1916176002555b8038808061165e565b01519050388061177d565b601f19821693600260005260206000209160005b8681106117f557508360019596106117dc575b505050811b01600255611793565b015160001960f88460031b161c191690553880806117ce565b919260206001819286850151815501940192016117bb565b60026000526000805160206118d1833981519152601f830160051c81019160208410611856575b601f0160051c01905b81811061184a5750611762565b6000815560010161183d565b9091508190611834565b60405163100960cb60e01b815260166004820152602490fd5b60405163100960cb60e01b815260116004820152602490fd5b90506001541438610dd5565b60405163100960cb60e01b815260106004820152602490fd5b60405163100960cb60e01b8152600f6004820152602490fdfe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000811000a`,
  BytecodeLen: 7185,
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
    at: './src/contracts/index.rsh:94:9:after expr stmt',
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
  "Auctions_created": Auctions_created,
  "Auctions_endSuccess": Auctions_endSuccess,
  "Auctions_ended": Auctions_ended,
  "Auctions_getID": Auctions_getID,
  "Auctions_updateHighestBidder": Auctions_updateHighestBidder
  };
export const _APIs = {
  Auctions: {
    created: Auctions_created,
    endSuccess: Auctions_endSuccess,
    ended: Auctions_ended,
    getID: Auctions_getID,
    updateHighestBidder: Auctions_updateHighestBidder
    }
  };
