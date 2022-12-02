// Automatically generated with Reach 0.1.12 (4ca32459)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (4ca32459)';
export const _backendVersion = 24;

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
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '50'));
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '15'));
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '80'));
  return {
    create: [ctc0, ctc1, ctc0, ctc2, ctc3, ctc4, ctc5],
    end: [ctc0, ctc0, ctc0]
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0],
      4: []
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
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Contract;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '50'));
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '15'));
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '80'));
  const ctc6 = stdlib.T_Struct([['id', ctc0], ['contractInfo', ctc1], ['blockCreated', ctc0], ['owner', ctc2], ['link', ctc3], ['title', ctc4], ['description', ctc5]]);
  const ctc7 = stdlib.T_Tuple([ctc6]);
  const ctc8 = stdlib.T_Struct([['id', ctc0], ['blockEnded', ctc0], ['lastBid', ctc0]]);
  const ctc9 = stdlib.T_Tuple([ctc8]);
  const ctc10 = stdlib.T_Data({
    Auction_created0_36: ctc7,
    Auction_ended0_36: ctc9
    });
  const ctc11 = stdlib.T_Null;
  
  
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./test_index.rsh:42:15:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./test_index.rsh:42:15:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v201, time: v200, didSend: v22, from: v199 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v201, time: v200, didSend: v22, from: v199 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v199],
    evt_cnt: 0,
    funcNum: 1,
    lct: v200,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./test_index.rsh:44:15:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v204, time: v203, didSend: v27, from: v202 } = txn2;
      
      ;
      const v206 = true;
      const v207 = v203;
      
      if (await (async () => {
        
        return v206;})()) {
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
    tys: [ctc2],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v204, time: v203, didSend: v27, from: v202 } = txn2;
  ;
  const v205 = stdlib.addressEq(v199, v202);
  stdlib.assert(v205, {
    at: './test_index.rsh:44:15:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Admin'
    });
  let v206 = true;
  let v207 = v203;
  
  let txn3 = txn2;
  while (await (async () => {
    
    return v206;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc10],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v262], secs: v264, time: v263, didSend: v137, from: v261 } = txn4;
    switch (v262[0]) {
      case 'Auction_created0_36': {
        const v265 = v262[1];
        undefined /* setApiDetails */;
        ;
        const v272 = v265[stdlib.checkedBigNumberify('./test_index.rsh:49:21:spread', stdlib.UInt_max, '0')];
        const v273 = null;
        await txn4.getOutput('Auction_created', 'v273', ctc11, v273);
        const v287 = v272.id;
        const v288 = v272.contractInfo;
        const v289 = v272.blockCreated;
        const v290 = v272.owner;
        const v291 = v272.link;
        const v292 = v272.title;
        const v293 = v272.description;
        null;
        const cv206 = true;
        const cv207 = v263;
        
        v206 = cv206;
        v207 = cv207;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'Auction_ended0_36': {
        const v309 = v262[1];
        undefined /* setApiDetails */;
        ;
        const v339 = v309[stdlib.checkedBigNumberify('./test_index.rsh:64:21:spread', stdlib.UInt_max, '0')];
        const v340 = null;
        await txn4.getOutput('Auction_ended', 'v340', ctc11, v340);
        const v350 = v339.id;
        const v351 = v339.blockEnded;
        const v352 = v339.lastBid;
        null;
        const cv206 = true;
        const cv207 = v263;
        
        v206 = cv206;
        v207 = cv207;
        
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
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '50'));
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '15'));
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '80'));
  const ctc6 = stdlib.T_Struct([['id', ctc0], ['contractInfo', ctc1], ['blockCreated', ctc0], ['owner', ctc2], ['link', ctc3], ['title', ctc4], ['description', ctc5]]);
  const ctc7 = stdlib.T_Tuple([ctc6]);
  const ctc8 = stdlib.T_Struct([['id', ctc0], ['blockEnded', ctc0], ['lastBid', ctc0]]);
  const ctc9 = stdlib.T_Tuple([ctc8]);
  const ctc10 = stdlib.T_Data({
    Auction_created0_36: ctc7,
    Auction_ended0_36: ctc9
    });
  const ctc11 = stdlib.T_Null;
  
  
  const [] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), []);
  const v219 = stdlib.protect(ctc7, await interact.in(), {
    at: './test_index.rsh:1:23:application',
    fs: ['at ./test_index.rsh:49:21:application call to [unknown function] (defined at: ./test_index.rsh:49:21:function exp)', 'at ./test_index.rsh:46:41:application call to "runAuction_created0_36" (defined at: ./test_index.rsh:49:21:function exp)', 'at ./test_index.rsh:46:41:application call to [unknown function] (defined at: ./test_index.rsh:46:41:function exp)'],
    msg: 'in',
    who: 'Auction_created'
    });
  const v240 = ['Auction_created0_36', v219];
  
  const txn1 = await (ctc.sendrecv({
    args: [v240],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./test_index.rsh:49:21:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v262], secs: v264, time: v263, didSend: v137, from: v261 } = txn1;
      
      switch (v262[0]) {
        case 'Auction_created0_36': {
          const v265 = v262[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Auction_created"
            });
          ;
          const v272 = v265[stdlib.checkedBigNumberify('./test_index.rsh:49:21:spread', stdlib.UInt_max, '0')];
          const v273 = null;
          const v274 = await txn1.getOutput('Auction_created', 'v273', ctc11, v273);
          
          const v287 = v272.id;
          const v288 = v272.contractInfo;
          const v289 = v272.blockCreated;
          const v290 = v272.owner;
          const v291 = v272.link;
          const v292 = v272.title;
          const v293 = v272.description;
          null;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Auction_ended0_36': {
          const v309 = v262[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v262], secs: v264, time: v263, didSend: v137, from: v261 } = txn1;
  switch (v262[0]) {
    case 'Auction_created0_36': {
      const v265 = v262[1];
      undefined /* setApiDetails */;
      ;
      const v272 = v265[stdlib.checkedBigNumberify('./test_index.rsh:49:21:spread', stdlib.UInt_max, '0')];
      const v273 = null;
      const v274 = await txn1.getOutput('Auction_created', 'v273', ctc11, v273);
      if (v137) {
        stdlib.protect(ctc11, await interact.out(v265, v274), {
          at: './test_index.rsh:49:22:application',
          fs: ['at ./test_index.rsh:49:22:application call to [unknown function] (defined at: ./test_index.rsh:49:22:function exp)', 'at ./test_index.rsh:50:31:application call to "notify" (defined at: ./test_index.rsh:49:54:function exp)', 'at ./test_index.rsh:49:54:application call to [unknown function] (defined at: ./test_index.rsh:49:54:function exp)'],
          msg: 'out',
          who: 'Auction_created'
          });
        }
      else {
        }
      
      const v287 = v272.id;
      const v288 = v272.contractInfo;
      const v289 = v272.blockCreated;
      const v290 = v272.owner;
      const v291 = v272.link;
      const v292 = v272.title;
      const v293 = v272.description;
      null;
      return;
      
      break;
      }
    case 'Auction_ended0_36': {
      const v309 = v262[1];
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
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '50'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '15'));
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '80'));
  const ctc8 = stdlib.T_Struct([['id', ctc0], ['contractInfo', ctc3], ['blockCreated', ctc0], ['owner', ctc4], ['link', ctc5], ['title', ctc6], ['description', ctc7]]);
  const ctc9 = stdlib.T_Tuple([ctc8]);
  const ctc10 = stdlib.T_Data({
    Auction_created0_36: ctc9,
    Auction_ended0_36: ctc2
    });
  const ctc11 = stdlib.T_Null;
  
  
  const [] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), []);
  const v244 = stdlib.protect(ctc2, await interact.in(), {
    at: './test_index.rsh:1:23:application',
    fs: ['at ./test_index.rsh:64:21:application call to [unknown function] (defined at: ./test_index.rsh:64:21:function exp)', 'at ./test_index.rsh:46:41:application call to "runAuction_ended0_36" (defined at: ./test_index.rsh:64:21:function exp)', 'at ./test_index.rsh:46:41:application call to [unknown function] (defined at: ./test_index.rsh:46:41:function exp)'],
    msg: 'in',
    who: 'Auction_ended'
    });
  const v257 = ['Auction_ended0_36', v244];
  
  const txn1 = await (ctc.sendrecv({
    args: [v257],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./test_index.rsh:64:21:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v262], secs: v264, time: v263, didSend: v137, from: v261 } = txn1;
      
      switch (v262[0]) {
        case 'Auction_created0_36': {
          const v265 = v262[1];
          
          break;
          }
        case 'Auction_ended0_36': {
          const v309 = v262[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Auction_ended"
            });
          ;
          const v339 = v309[stdlib.checkedBigNumberify('./test_index.rsh:64:21:spread', stdlib.UInt_max, '0')];
          const v340 = null;
          const v341 = await txn1.getOutput('Auction_ended', 'v340', ctc11, v340);
          
          const v350 = v339.id;
          const v351 = v339.blockEnded;
          const v352 = v339.lastBid;
          null;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v262], secs: v264, time: v263, didSend: v137, from: v261 } = txn1;
  switch (v262[0]) {
    case 'Auction_created0_36': {
      const v265 = v262[1];
      return;
      break;
      }
    case 'Auction_ended0_36': {
      const v309 = v262[1];
      undefined /* setApiDetails */;
      ;
      const v339 = v309[stdlib.checkedBigNumberify('./test_index.rsh:64:21:spread', stdlib.UInt_max, '0')];
      const v340 = null;
      const v341 = await txn1.getOutput('Auction_ended', 'v340', ctc11, v340);
      if (v137) {
        stdlib.protect(ctc11, await interact.out(v309, v341), {
          at: './test_index.rsh:64:22:application',
          fs: ['at ./test_index.rsh:64:22:application call to [unknown function] (defined at: ./test_index.rsh:64:22:function exp)', 'at ./test_index.rsh:65:31:application call to "notify" (defined at: ./test_index.rsh:64:52:function exp)', 'at ./test_index.rsh:64:52:application call to [unknown function] (defined at: ./test_index.rsh:64:52:function exp)'],
          msg: 'out',
          who: 'Auction_ended'
          });
        }
      else {
        }
      
      const v350 = v339.id;
      const v351 = v339.blockEnded;
      const v352 = v339.lastBid;
      null;
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
const _ALGO = {
  ABI: {
    impure: [`Auction_created((uint64,uint64,uint64,address,byte[50],byte[15],byte[80]))byte[0]`, `Auction_ended((uint64,uint64,uint64))byte[0]`],
    pure: [],
    sigs: [`Auction_created((uint64,uint64,uint64,address,byte[50],byte[15],byte[80]))byte[0]`, `Auction_ended((uint64,uint64,uint64))byte[0]`]
    },
  appApproval: `ByAFAAHYoKiCCAMEJgIAAQAiNQAxGEEB2ChkSSJbNQGBCFs1AjYaABdJQQA2IjUEIzUGSSQMQAAWJBJENhoBNf+AAQE0/1CBsQGvUEIAMIGnmqybAhJENhoBNf8pNP9QQgAcNhoCFzUENhoDNhoBF0kjDEAA4kklDEAAsiUSRCEENAESRDQESSISTDQCEhFESTUFNf+ABGwX55w0/1CwNP8iVUAAUDT/VwHJNf40/jX9gAgAAAAAAAABEbAoNQeABNstl9c0/VcACFA0/VcICFA0/VcQCFA0/VcYIFA0/Vc4MlA0/VdqD1A0/Vd5UFCwIzIGQgCVNP9XARg1/jT+Nf2ACAAAAAAAAAFUsCg1B4AE8HKZ1DT9VwAIUDT9VwgIUDT9VxAIULAjMgZCAF0jEkQjNAESRDQESSISTDQCEhFEKWQ1A4AEmouRdLA0AzEAEkQjMgZCADNIgaCNBogAryI0ARJENARJIhJMNAISEUSABF8Nq/qwMQApSwFXACBnSCM1ATIGNQJCADI1/0k1/kEACyEENQEyBjUCQgAfQgAAMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKDQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRIECMTUSRCIxNhJEIjE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
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
                    "internalType": "enum _enum_T11",
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
                            "components": [
                              {
                                "internalType": "bytes32",
                                "name": "elem0",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes18",
                                "name": "elem1",
                                "type": "bytes18"
                              }
                            ],
                            "internalType": "struct T5",
                            "name": "link",
                            "type": "tuple"
                          },
                          {
                            "internalType": "bytes15",
                            "name": "title",
                            "type": "bytes15"
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
                          }
                        ],
                        "internalType": "struct T7",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T8",
                    "name": "_Auction_created0_36",
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
                    "name": "_Auction_ended0_36",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T11",
                "name": "v262",
                "type": "tuple"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
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
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v273",
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
    "name": "_reach_oe_v340",
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
        "components": [
          {
            "internalType": "bytes32",
            "name": "elem0",
            "type": "bytes32"
          },
          {
            "internalType": "bytes18",
            "name": "elem1",
            "type": "bytes18"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "v4",
        "type": "tuple"
      },
      {
        "indexed": false,
        "internalType": "bytes15",
        "name": "v5",
        "type": "bytes15"
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
        "name": "v6",
        "type": "tuple"
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
            "components": [
              {
                "internalType": "bytes32",
                "name": "elem0",
                "type": "bytes32"
              },
              {
                "internalType": "bytes18",
                "name": "elem1",
                "type": "bytes18"
              }
            ],
            "internalType": "struct T5",
            "name": "link",
            "type": "tuple"
          },
          {
            "internalType": "bytes15",
            "name": "title",
            "type": "bytes15"
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
          }
        ],
        "internalType": "struct T7",
        "name": "_a0",
        "type": "tuple"
      }
    ],
    "name": "Auction_created",
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
    "name": "Auction_ended",
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
                    "internalType": "enum _enum_T11",
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
                            "components": [
                              {
                                "internalType": "bytes32",
                                "name": "elem0",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes18",
                                "name": "elem1",
                                "type": "bytes18"
                              }
                            ],
                            "internalType": "struct T5",
                            "name": "link",
                            "type": "tuple"
                          },
                          {
                            "internalType": "bytes15",
                            "name": "title",
                            "type": "bytes15"
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
                          }
                        ],
                        "internalType": "struct T7",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T8",
                    "name": "_Auction_created0_36",
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
                    "name": "_Auction_ended0_36",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T11",
                "name": "v262",
                "type": "tuple"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T13",
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
  Bytecode: `0x60806040526040516200126b3803806200126b8339810160408190526200002691620001a4565b600080554360035560408051338152825160208083019190915283015115158183015290517faf3102e4a96b239a2811210526ca19adcde1af3e2876a2c9a5886a5a887a2dcb9181900360600190a16200008334156007620000d4565b6040805160208082018352338083526001600081905543905583519182015290910160405160208183030381529060405260029080519060200190620000cb929190620000fe565b5050506200024c565b81620000fa5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200010c906200020f565b90600052602060002090601f0160209004810192826200013057600085556200017b565b82601f106200014b57805160ff19168380011785556200017b565b828001600101855582156200017b579182015b828111156200017b5782518255916020019190600101906200015e565b50620001899291506200018d565b5090565b5b808211156200018957600081556001016200018e565b600060408284031215620001b757600080fd5b604080519081016001600160401b0381118282101715620001e857634e487b7160e01b600052604160045260246000fd5b60405282518152602083015180151581146200020357600080fd5b60208201529392505050565b600181811c908216806200022457607f821691505b602082108114156200024657634e487b7160e01b600052602260045260246000fd5b50919050565b61100f806200025c6000396000f3fe60806040526004361061006e5760003560e01c8063832307571161004b57806383230757146100d15780639c5b8e11146100e6578063ab53f2c6146100f9578063c0023b341461011c57005b80631e93b0f1146100775780632c10a1591461009b578063453a05d5146100ae57005b3661007557005b005b34801561008357600080fd5b506003545b6040519081526020015b60405180910390f35b6100756100a936600461097e565b61012f565b6100c16100bc366004610a9a565b61015f565b6040519015158152602001610092565b3480156100dd57600080fd5b50600154610088565b6100756100f4366004610abd565b610170565b34801561010557600080fd5b5061010e61019c565b604051610092929190610ad0565b6100c161012a366004610c7a565b610239565b604080518082019091526000808252602082015261015b61015536849003840184610ca5565b82610244565b5050565b600061016a826103a8565b92915050565b604080518082019091526000808252602082015261015b61019636849003840184610cdd565b826103f2565b6000606060005460028080546101b190610daa565b80601f01602080910402602001604051908101604052809291908181526020018280546101dd90610daa565b801561022a5780601f106101ff5761010080835404028352916020019161022a565b820191906000526020600020905b81548152906001019060200180831161020d57829003601f168201915b50505050509050915091509091565b600061016a826106bc565b610254600160005414600a610700565b815161026f90158061026857508251600154145b600b610700565b60008080556002805461028190610daa565b80601f01602080910402602001604051908101604052809291908181526020018280546102ad90610daa565b80156102fa5780601f106102cf576101008083540402835291602001916102fa565b820191906000526020600020905b8154815290600101906020018083116102dd57829003601f168201915b50505050508060200190518101906103129190610ddf565b60408051338152855160208083019190915286015115158183015290519192507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1919081900360600190a161036934156008610700565b8051610381906001600160a01b031633146009610700565b610389610784565b602080820180516001905251439101526103a281610725565b50505050565b60006103b26107bc565b602081810180515160019052515160409081015185905280518082019091526000808252918101919091526103e782826103f2565b602001519392505050565b610402600460005414600e610700565b815161041d90158061041657508251600154145b600f610700565b60008080556002805461042f90610daa565b80601f016020809104026020016040519081016040528092919081815260200182805461045b90610daa565b80156104a85780601f1061047d576101008083540402835291602001916104a8565b820191906000526020600020905b81548152906001019060200180831161048b57829003601f168201915b50505050508060200190518101906104c09190610e23565b90506104ca6107d6565b7fa26451826a940b9c0255b7ad86a513d173da7a9689ae30aa48ae3babc0a18f3533856040516104fb929190610e40565b60405180910390a1600060208501515151600181111561051d5761051d610e0d565b14156105f757602080850151510151815261053a3415600c610700565b604051600081527f260b2a12453298761d0bfcb0172046978bd8f91b3c39d02c0daed5f0663e006f9060200160405180910390a160008352805151805160208201516040808401516060850151608086015160a087015160c09097015193517f5bb374428d947add314bc1cc3e2448537d3c7bb6095106920ce93785d5da4e04976105c89796959091610f4f565b60405180910390a16105d8610784565b602080820180516001905251439101526105f181610725565b506103a2565b600160208501515151600181111561061157610611610e0d565b14156103a2576020808501515160400151908201526106323415600d610700565b604051600081527f3853f6a6c5a307b784c1498b7434681bd6889e0b8f7976b975c4bad6718b54e99060200160405180910390a160006020848101919091528181015151805181830151604092830151835192835293820152908101919091527f8ae1d12745070499deb90f74dbda066d3ebb9066dc64fa2d22e24615fabfb34c906060016105c8565b60006106c66107bc565b602081810180515160009081905290515182015185905260408051808201909152818152918201526106f882826103f2565b519392505050565b8161015b5760405163100960cb60e01b81526004810182905260240160405180910390fd5b6020810151511561076b5760046000908155436001556040805160208082018490528251808303820181529183019092528051610766926002920190610815565b505050565b6000808055600181905561078190600290610899565b50565b60405180604001604052806000151581526020016107b76040518060400160405280600015158152602001600081525090565b905290565b6040518060400160405280600081526020016107b76108d3565b60405180604001604052806107e96108e6565b81526020016107b760408051608081018252600060208201818152928201819052606082015290815290565b82805461082190610daa565b90600052602060002090601f0160209004810192826108435760008555610889565b82601f1061085c57805160ff1916838001178555610889565b82800160010185558215610889579182015b8281111561088957825182559160200191906001019061086e565b5061089592915061094e565b5090565b5080546108a590610daa565b6000825580601f106108b5575050565b601f016020900490600052602060002090810190610781919061094e565b60405180602001604052806107b7610963565b6040805161010081018252600060208083018281528385018390526060808501849052608085018490528551808701875284815280840185905260a086015260c08501849052855190810186528381529182018390529381019190915260e082015290815290565b5b80821115610895576000815560010161094f565b604080516060810190915280600081526020016107e96108e6565b60006040828403121561099057600080fd5b50919050565b6040516060810167ffffffffffffffff811182821017156109c757634e487b7160e01b600052604160045260246000fd5b60405290565b60405160e0810167ffffffffffffffff811182821017156109c757634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff811182821017156109c757634e487b7160e01b600052604160045260246000fd5b6040516020810167ffffffffffffffff811182821017156109c757634e487b7160e01b600052604160045260246000fd5b600060608284031215610a7257600080fd5b610a7a610996565b905081358152602082013560208201526040820135604082015292915050565b600060608284031215610aac57600080fd5b610ab68383610a60565b9392505050565b60006101e0828403121561099057600080fd5b82815260006020604081840152835180604085015260005b81811015610b0457858101830151858201606001528201610ae8565b81811115610b16576000606083870101525b50601f01601f191692909201606001949350505050565b6001600160a01b038116811461078157600080fd5b80356001600160881b031981168114610b5a57600080fd5b919050565b600060608284031215610b7157600080fd5b610b79610996565b9050813581526020820135602082015260408201356fffffffffffffffffffffffffffffffff1981168114610bad57600080fd5b604082015292915050565b6000818303610140811215610bcc57600080fd5b610bd46109cd565b9150823582526020830135610be881610b2d565b6020830152604083810135908301526060830135610c0581610b2d565b60608301526040607f1982011215610c1c57600080fd5b50610c256109fe565b6080830135815260a08301356001600160701b031981168114610c4757600080fd5b60208201526080820152610c5d60c08301610b42565b60a0820152610c6f8360e08401610b5f565b60c082015292915050565b60006101408284031215610c8d57600080fd5b610ab68383610bb8565b801515811461078157600080fd5b600060408284031215610cb757600080fd5b610cbf6109fe565b823581526020830135610cd181610c97565b60208201529392505050565b60008183036101e0811215610cf157600080fd5b610cf96109fe565b833581526101c0601f1983011215610d1057600080fd5b610d18610a2f565b610d20610996565b602086013560028110610d3257600080fd5b8152610140603f1985011215610d4757600080fd5b610d4f610a2f565b610d5c8860408901610bb8565b81526020820152606061017f1985011215610d7657600080fd5b610d7e610a2f565b9350610d8e876101808801610a60565b8452604081019390935291825260208101919091529392505050565b600181811c90821680610dbe57607f821691505b6020821081141561099057634e487b7160e01b600052602260045260246000fd5b600060208284031215610df157600080fd5b610df9610a2f565b8251610e0481610b2d565b81529392505050565b634e487b7160e01b600052602160045260246000fd5b600060208284031215610e3557600080fd5b8151610ab681610c97565b6001600160a01b0383811682528251602080840191909152830151518051610200840192919060028110610e8457634e487b7160e01b600052602160045260246000fd5b8060408601525060208101515180516060860152826020820151166080860152604081015160a08601528260608201511660c086015260808101519250610ee260e0860184805182526020908101516001600160701b031916910152565b60a08101516001600160881b03191661012086015260c0015180516101408601526020808201516101608701526040918201516001600160801b031916610180870152918101515180516101a0870152918201516101c086015201516101e0909301929092529392505050565b8781526001600160a01b03878116602083015260408201879052851660608201526101408101610f966080830186805182526020908101516001600160701b031916910152565b6001600160881b0319841660c0830152825160e0830152602083015161010083015260408301516001600160801b0319166101208301529897505050505050505056fea2646970667358221220a7c4e3b7f6f02f939fcb056eae8f1095291bda1168c2a3a962b7c06c4de738f664736f6c634300080c0033`,
  BytecodeLen: 4715,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './test_index.rsh:43:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './test_index.rsh:75:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './test_index.rsh:46:41:after expr stmt semicolon',
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
  "Auction_ended": Auction_ended
  };
export const _APIs = {
  Auction: {
    created: Auction_created,
    ended: Auction_ended
    }
  };
