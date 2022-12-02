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
  const ctc8 = stdlib.T_Struct([['id', ctc0], ['lastBid', ctc0], ['blockEnded', ctc0]]);
  const ctc9 = stdlib.T_Tuple([ctc8]);
  const ctc10 = stdlib.T_Data({
    Bidder_created0_36: ctc7,
    Bidder_ended0_36: ctc9
    });
  const ctc11 = stdlib.T_Null;
  
  
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:42:8:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:42:8:decimal', stdlib.UInt_max, '0'), []],
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
    pay: [stdlib.checkedBigNumberify('./index.rsh:44:8:decimal', stdlib.UInt_max, '0'), []],
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
    at: './index.rsh:44:8:dot',
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
      case 'Bidder_created0_36': {
        const v265 = v262[1];
        undefined /* setApiDetails */;
        ;
        const v272 = v265[stdlib.checkedBigNumberify('./index.rsh:49:7:spread', stdlib.UInt_max, '0')];
        const v273 = null;
        await txn4.getOutput('Bidder_created', 'v273', ctc11, v273);
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
      case 'Bidder_ended0_36': {
        const v309 = v262[1];
        undefined /* setApiDetails */;
        ;
        const v339 = v309[stdlib.checkedBigNumberify('./index.rsh:64:7:spread', stdlib.UInt_max, '0')];
        const v340 = null;
        await txn4.getOutput('Bidder_ended', 'v340', ctc11, v340);
        const v350 = v339.id;
        const v351 = v339.lastBid;
        const v352 = v339.blockEnded;
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
export async function _Bidder_created4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bidder_created4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bidder_created4 expects to receive an interact object as its second argument.`));}
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
  const ctc8 = stdlib.T_Struct([['id', ctc0], ['lastBid', ctc0], ['blockEnded', ctc0]]);
  const ctc9 = stdlib.T_Tuple([ctc8]);
  const ctc10 = stdlib.T_Data({
    Bidder_created0_36: ctc7,
    Bidder_ended0_36: ctc9
    });
  const ctc11 = stdlib.T_Null;
  
  
  const [] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), []);
  const v219 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:49:7:application call to [unknown function] (defined at: ./index.rsh:49:7:function exp)', 'at ./index.rsh:46:34:application call to "runBidder_created0_36" (defined at: ./index.rsh:49:7:function exp)', 'at ./index.rsh:46:34:application call to [unknown function] (defined at: ./index.rsh:46:34:function exp)'],
    msg: 'in',
    who: 'Bidder_created'
    });
  const v240 = ['Bidder_created0_36', v219];
  
  const txn1 = await (ctc.sendrecv({
    args: [v240],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:49:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v262], secs: v264, time: v263, didSend: v137, from: v261 } = txn1;
      
      switch (v262[0]) {
        case 'Bidder_created0_36': {
          const v265 = v262[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bidder_created"
            });
          ;
          const v272 = v265[stdlib.checkedBigNumberify('./index.rsh:49:7:spread', stdlib.UInt_max, '0')];
          const v273 = null;
          const v274 = await txn1.getOutput('Bidder_created', 'v273', ctc11, v273);
          
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
        case 'Bidder_ended0_36': {
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
    case 'Bidder_created0_36': {
      const v265 = v262[1];
      undefined /* setApiDetails */;
      ;
      const v272 = v265[stdlib.checkedBigNumberify('./index.rsh:49:7:spread', stdlib.UInt_max, '0')];
      const v273 = null;
      const v274 = await txn1.getOutput('Bidder_created', 'v273', ctc11, v273);
      if (v137) {
        stdlib.protect(ctc11, await interact.out(v265, v274), {
          at: './index.rsh:49:8:application',
          fs: ['at ./index.rsh:49:8:application call to [unknown function] (defined at: ./index.rsh:49:8:function exp)', 'at ./index.rsh:50:10:application call to "notify" (defined at: ./index.rsh:49:40:function exp)', 'at ./index.rsh:49:40:application call to [unknown function] (defined at: ./index.rsh:49:40:function exp)'],
          msg: 'out',
          who: 'Bidder_created'
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
    case 'Bidder_ended0_36': {
      const v309 = v262[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Bidder_ended4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bidder_ended4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bidder_ended4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Struct([['id', ctc0], ['lastBid', ctc0], ['blockEnded', ctc0]]);
  const ctc2 = stdlib.T_Tuple([ctc1]);
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '50'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '15'));
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '80'));
  const ctc8 = stdlib.T_Struct([['id', ctc0], ['contractInfo', ctc3], ['blockCreated', ctc0], ['owner', ctc4], ['link', ctc5], ['title', ctc6], ['description', ctc7]]);
  const ctc9 = stdlib.T_Tuple([ctc8]);
  const ctc10 = stdlib.T_Data({
    Bidder_created0_36: ctc9,
    Bidder_ended0_36: ctc2
    });
  const ctc11 = stdlib.T_Null;
  
  
  const [] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), []);
  const v244 = stdlib.protect(ctc2, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:64:7:application call to [unknown function] (defined at: ./index.rsh:64:7:function exp)', 'at ./index.rsh:46:34:application call to "runBidder_ended0_36" (defined at: ./index.rsh:64:7:function exp)', 'at ./index.rsh:46:34:application call to [unknown function] (defined at: ./index.rsh:46:34:function exp)'],
    msg: 'in',
    who: 'Bidder_ended'
    });
  const v257 = ['Bidder_ended0_36', v244];
  
  const txn1 = await (ctc.sendrecv({
    args: [v257],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:64:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v262], secs: v264, time: v263, didSend: v137, from: v261 } = txn1;
      
      switch (v262[0]) {
        case 'Bidder_created0_36': {
          const v265 = v262[1];
          
          break;
          }
        case 'Bidder_ended0_36': {
          const v309 = v262[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bidder_ended"
            });
          ;
          const v339 = v309[stdlib.checkedBigNumberify('./index.rsh:64:7:spread', stdlib.UInt_max, '0')];
          const v340 = null;
          const v341 = await txn1.getOutput('Bidder_ended', 'v340', ctc11, v340);
          
          const v350 = v339.id;
          const v351 = v339.lastBid;
          const v352 = v339.blockEnded;
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
    case 'Bidder_created0_36': {
      const v265 = v262[1];
      return;
      break;
      }
    case 'Bidder_ended0_36': {
      const v309 = v262[1];
      undefined /* setApiDetails */;
      ;
      const v339 = v309[stdlib.checkedBigNumberify('./index.rsh:64:7:spread', stdlib.UInt_max, '0')];
      const v340 = null;
      const v341 = await txn1.getOutput('Bidder_ended', 'v340', ctc11, v340);
      if (v137) {
        stdlib.protect(ctc11, await interact.out(v309, v341), {
          at: './index.rsh:64:8:application',
          fs: ['at ./index.rsh:64:8:application call to [unknown function] (defined at: ./index.rsh:64:8:function exp)', 'at ./index.rsh:65:10:application call to "notify" (defined at: ./index.rsh:64:38:function exp)', 'at ./index.rsh:64:38:application call to [unknown function] (defined at: ./index.rsh:64:38:function exp)'],
          msg: 'out',
          who: 'Bidder_ended'
          });
        }
      else {
        }
      
      const v350 = v339.id;
      const v351 = v339.lastBid;
      const v352 = v339.blockEnded;
      null;
      return;
      
      break;
      }
    }
  
  
  };
export async function Bidder_created(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bidder_created expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bidder_created expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Bidder_created4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Bidder_ended(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bidder_ended expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bidder_ended expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Bidder_ended4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Bidder_created((uint64,uint64,uint64,address,byte[50],byte[15],byte[80]))byte[0]`, `Bidder_ended((uint64,uint64,uint64))byte[0]`],
    pure: [],
    sigs: [`Bidder_created((uint64,uint64,uint64,address,byte[50],byte[15],byte[80]))byte[0]`, `Bidder_ended((uint64,uint64,uint64))byte[0]`]
    },
  appApproval: `ByAFAAGun+7MBwMEJgIAAQAiNQAxGEEB2ChkSSJbNQGBCFs1AjYaABdJQQA2IjUEIzUGSSQMQAAWJBJENhoBNf+AAQE0/1CBsQGvUEIAMIH0psSDAhJENhoBNf8pNP9QQgAcNhoCFzUENhoDNhoBF0kjDEAA4kklDEAAsiUSRCEENAESRDQESSISTDQCEhFESTUFNf+ABGwX55w0/1CwNP8iVUAAUDT/VwHJNf40/jX9gAgAAAAAAAABEbAoNQeABNstl9c0/VcACFA0/VcICFA0/VcQCFA0/VcYIFA0/Vc4MlA0/VdqD1A0/Vd5UFCwIzIGQgCVNP9XARg1/jT+Nf2ACAAAAAAAAAFUsCg1B4AE8HKZ1DT9VwAIUDT9VwgIUDT9VxAIULAjMgZCAF0jEkQjNAESRDQESSISTDQCEhFEKWQ1A4AEmouRdLA0AzEAEkQjMgZCADNIgaCNBogAryI0ARJENARJIhJMNAISEUSABF8Nq/qwMQApSwFXACBnSCM1ATIGNQJCADI1/0k1/kEACyEENQEyBjUCQgAfQgAAMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKDQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRIECMTUSRCIxNhJEIjE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
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
                    "name": "_Bidder_created0_36",
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
                            "name": "lastBid",
                            "type": "uint256"
                          },
                          {
                            "internalType": "uint256",
                            "name": "blockEnded",
                            "type": "uint256"
                          }
                        ],
                        "internalType": "struct T9",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T10",
                    "name": "_Bidder_ended0_36",
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
    "name": "Bidder_created",
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
            "name": "lastBid",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "blockEnded",
            "type": "uint256"
          }
        ],
        "internalType": "struct T9",
        "name": "_a0",
        "type": "tuple"
      }
    ],
    "name": "Bidder_ended",
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
                    "name": "_Bidder_created0_36",
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
                            "name": "lastBid",
                            "type": "uint256"
                          },
                          {
                            "internalType": "uint256",
                            "name": "blockEnded",
                            "type": "uint256"
                          }
                        ],
                        "internalType": "struct T9",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T10",
                    "name": "_Bidder_ended0_36",
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
  Bytecode: `0x608060405234801561001057600080fd5b50610205806100206000396000f3fe6080604052600436106100355760003560e01c80631e93b0f11461003e5780638323075714610062578063ab53f2c61461007757005b3661003c57005b005b34801561004a57600080fd5b506003545b6040519081526020015b60405180910390f35b34801561006e57600080fd5b5060015461004f565b34801561008357600080fd5b5061008c61009a565b604051610059929190610137565b6000606060005460028080546100af90610194565b80601f01602080910402602001604051908101604052809291908181526020018280546100db90610194565b80156101285780601f106100fd57610100808354040283529160200191610128565b820191906000526020600020905b81548152906001019060200180831161010b57829003601f168201915b50505050509050915091509091565b82815260006020604081840152835180604085015260005b8181101561016b5785810183015185820160600152820161014f565b8181111561017d576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c908216806101a857607f821691505b602082108114156101c957634e487b7160e01b600052602260045260246000fd5b5091905056fea26469706673582212208ce98bf32bdb113dd65deb9875a315a84d821b8d4372c20223dd8cf66a0eb41b64736f6c634300080c0033`,
  BytecodeLen: 549,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:43:10:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:77:2:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:46:34:after expr stmt semicolon',
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
  "Bidder_created": Bidder_created,
  "Bidder_ended": Bidder_ended
  };
export const _APIs = {
  Bidder: {
    created: Bidder_created,
    ended: Bidder_ended
    }
  };
