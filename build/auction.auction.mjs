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
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1],
      5: [ctc0, ctc1, ctc0, ctc2, ctc3]
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
export async function _Bidder_bid5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bidder_bid5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bidder_bid5 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Tuple([ctc3]);
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Data({
    Bidder_bid0_52: ctc4,
    Sellers_stopAuction0_52: ctc5
    });
  const ctc7 = stdlib.T_Tuple([ctc0, ctc3]);
  const ctc8 = stdlib.T_Null;
  
  
  const [v319, v320, v340, v341, v343] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc0, ctc2, ctc3]);
  const v370 = stdlib.protect(ctc4, await interact.in(), {
    at: './auction.rsh:1:23:application',
    fs: ['at ./auction.rsh:39:41:application call to [unknown function] (defined at: ./auction.rsh:39:41:function exp)', 'at ./auction.rsh:30:81:application call to "runBidder_bid0_52" (defined at: ./auction.rsh:39:22:function exp)', 'at ./auction.rsh:30:81:application call to [unknown function] (defined at: ./auction.rsh:30:81:function exp)'],
    msg: 'in',
    who: 'Bidder_bid'
    });
  const v371 = v370[stdlib.checkedBigNumberify('./auction.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v373 = stdlib.gt(v371, v343);
  stdlib.assert(v373, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./auction.rsh:40:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./auction.rsh:39:41:application call to [unknown function] (defined at: ./auction.rsh:39:41:function exp)', 'at ./auction.rsh:30:81:application call to "runBidder_bid0_52" (defined at: ./auction.rsh:39:22:function exp)', 'at ./auction.rsh:30:81:application call to [unknown function] (defined at: ./auction.rsh:30:81:function exp)'],
    msg: 'Your bid is too low, please try again',
    who: 'Bidder_bid'
    });
  const v380 = ['Bidder_bid0_52', v370];
  
  const txn1 = await (ctc.sendrecv({
    args: [v319, v320, v340, v341, v343, v380],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [v371, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v388], secs: v390, time: v389, didSend: v220, from: v387 } = txn1;
      
      switch (v388[0]) {
        case 'Bidder_bid0_52': {
          const v391 = v388[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bidder_bid"
            });
          const v396 = v391[stdlib.checkedBigNumberify('./auction.rsh:39:22:spread', stdlib.UInt_max, '0')];
          sim_r.txns.push({
            amt: v396,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v407 = [v340, v343];
          const v408 = await txn1.getOutput('Bidder_bid', 'v407', ctc7, v407);
          
          if (v341) {
            const v897 = v387;
            const v898 = false;
            const v900 = v396;
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v340,
              tok: undefined /* Nothing */
              });
            const v902 = v387;
            const v903 = false;
            const v905 = v396;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Sellers_stopAuction0_52': {
          const v431 = v388[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc0, ctc2, ctc3, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v388], secs: v390, time: v389, didSend: v220, from: v387 } = txn1;
  switch (v388[0]) {
    case 'Bidder_bid0_52': {
      const v391 = v388[1];
      undefined /* setApiDetails */;
      const v396 = v391[stdlib.checkedBigNumberify('./auction.rsh:39:22:spread', stdlib.UInt_max, '0')];
      const v397 = stdlib.gt(v396, v343);
      stdlib.assert(v397, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./auction.rsh:40:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./auction.rsh:39:41:application call to [unknown function] (defined at: ./auction.rsh:39:41:function exp)', 'at ./auction.rsh:30:81:application call to [unknown function] (defined at: ./auction.rsh:39:41:function exp)', 'at ./auction.rsh:30:81:application call to [unknown function] (defined at: ./auction.rsh:30:81:function exp)'],
        msg: 'Your bid is too low, please try again',
        who: 'Bidder_bid'
        });
      ;
      const v407 = [v340, v343];
      const v408 = await txn1.getOutput('Bidder_bid', 'v407', ctc7, v407);
      if (v220) {
        stdlib.protect(ctc8, await interact.out(v391, v408), {
          at: './auction.rsh:39:23:application',
          fs: ['at ./auction.rsh:39:23:application call to [unknown function] (defined at: ./auction.rsh:39:23:function exp)', 'at ./auction.rsh:44:47:application call to "notify" (defined at: ./auction.rsh:43:42:function exp)', 'at ./auction.rsh:43:42:application call to [unknown function] (defined at: ./auction.rsh:43:42:function exp)'],
          msg: 'out',
          who: 'Bidder_bid'
          });
        }
      else {
        }
      
      if (v341) {
        const v897 = v387;
        const v898 = false;
        const v900 = v396;
        return;
        }
      else {
        ;
        const v902 = v387;
        const v903 = false;
        const v905 = v396;
        return;
        }
      break;
      }
    case 'Sellers_stopAuction0_52': {
      const v431 = v388[1];
      return;
      break;
      }
    }
  
  
  };
export async function Seller(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Seller expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Seller expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Tuple([ctc1]);
  const ctc3 = stdlib.T_Tuple([]);
  const ctc4 = stdlib.T_Data({
    Bidder_bid0_52: ctc2,
    Sellers_stopAuction0_52: ctc3
    });
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Tuple([ctc5, ctc1]);
  const ctc7 = stdlib.T_Null;
  
  
  const v318 = stdlib.protect(ctc0, await interact.startAuction(), {
    at: './auction.rsh:21:63:application',
    fs: ['at ./auction.rsh:20:20:application call to [unknown function] (defined at: ./auction.rsh:20:24:function exp)'],
    msg: 'startAuction',
    who: 'Seller'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v318],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./auction.rsh:23:16:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./auction.rsh:23:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v320], secs: v322, time: v321, didSend: v27, from: v319 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v320
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v320], secs: v322, time: v321, didSend: v27, from: v319 } = txn1;
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v319, v320],
    evt_cnt: 0,
    funcNum: 1,
    lct: v321,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./auction.rsh:26:16:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./auction.rsh:24:21:decimal', stdlib.UInt_max, '1'), v320]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v329, time: v328, didSend: v34, from: v327 } = txn2;
      
      ;
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./auction.rsh:24:21:decimal', stdlib.UInt_max, '1'),
        kind: 'to',
        tok: v320
        });
      const v340 = v319;
      const v341 = true;
      const v342 = true;
      const v343 = stdlib.checkedBigNumberify('./auction.rsh:33:17:decimal', stdlib.UInt_max, '0');
      const v344 = v328;
      
      if (await (async () => {
        
        return v342;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v340,
          tok: v320
          });
        if (v341) {
          sim_r.txns.push({
            kind: 'halt',
            tok: v320
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }
        else {
          sim_r.txns.push({
            kind: 'from',
            to: v319,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v320
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }}
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v329, time: v328, didSend: v34, from: v327 } = txn2;
  ;
  ;
  const v336 = stdlib.addressEq(v319, v327);
  stdlib.assert(v336, {
    at: './auction.rsh:26:16:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Seller'
    });
  let v340 = v319;
  let v341 = true;
  let v342 = true;
  let v343 = stdlib.checkedBigNumberify('./auction.rsh:33:17:decimal', stdlib.UInt_max, '0');
  let v344 = v328;
  
  let txn3 = txn2;
  while (await (async () => {
    
    return v342;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc4],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v388], secs: v390, time: v389, didSend: v220, from: v387 } = txn4;
    switch (v388[0]) {
      case 'Bidder_bid0_52': {
        const v391 = v388[1];
        undefined /* setApiDetails */;
        const v396 = v391[stdlib.checkedBigNumberify('./auction.rsh:39:22:spread', stdlib.UInt_max, '0')];
        const v397 = stdlib.gt(v396, v343);
        stdlib.assert(v397, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./auction.rsh:40:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./auction.rsh:39:41:application call to [unknown function] (defined at: ./auction.rsh:39:41:function exp)', 'at ./auction.rsh:30:81:application call to [unknown function] (defined at: ./auction.rsh:39:41:function exp)', 'at ./auction.rsh:30:81:application call to [unknown function] (defined at: ./auction.rsh:30:81:function exp)'],
          msg: 'Your bid is too low, please try again',
          who: 'Seller'
          });
        ;
        const v407 = [v340, v343];
        await txn4.getOutput('Bidder_bid', 'v407', ctc6, v407);
        if (v341) {
          const cv340 = v387;
          const cv341 = false;
          const cv342 = true;
          const cv343 = v396;
          const cv344 = v389;
          
          v340 = cv340;
          v341 = cv341;
          v342 = cv342;
          v343 = cv343;
          v344 = cv344;
          
          txn3 = txn4;
          continue;}
        else {
          ;
          const cv340 = v387;
          const cv341 = false;
          const cv342 = true;
          const cv343 = v396;
          const cv344 = v389;
          
          v340 = cv340;
          v341 = cv341;
          v342 = cv342;
          v343 = cv343;
          v344 = cv344;
          
          txn3 = txn4;
          continue;}
        break;
        }
      case 'Sellers_stopAuction0_52': {
        const v431 = v388[1];
        undefined /* setApiDetails */;
        ;
        const v464 = null;
        await txn4.getOutput('Sellers_stopAuction', 'v464', ctc7, v464);
        const cv340 = v340;
        const cv341 = v341;
        const cv342 = false;
        const cv343 = v343;
        const cv344 = v389;
        
        v340 = cv340;
        v341 = cv341;
        v342 = cv342;
        v343 = cv343;
        v344 = cv344;
        
        txn3 = txn4;
        continue;
        break;
        }
      }
    
    }
  ;
  if (v341) {
    return;
    }
  else {
    ;
    return;
    }
  
  
  
  };
export async function _Sellers_stopAuction5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Sellers_stopAuction5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Sellers_stopAuction5 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Tuple([]);
  const ctc5 = stdlib.T_Tuple([ctc3]);
  const ctc6 = stdlib.T_Data({
    Bidder_bid0_52: ctc5,
    Sellers_stopAuction0_52: ctc4
    });
  const ctc7 = stdlib.T_Null;
  
  
  const [v319, v320, v340, v341, v343] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc0, ctc2, ctc3]);
  const v358 = ctc.selfAddress();
  const v360 = stdlib.protect(ctc4, await interact.in(), {
    at: './auction.rsh:1:23:application',
    fs: ['at ./auction.rsh:54:45:application call to [unknown function] (defined at: ./auction.rsh:54:45:function exp)', 'at ./auction.rsh:30:81:application call to "runSellers_stopAuction0_52" (defined at: ./auction.rsh:54:21:function exp)', 'at ./auction.rsh:30:81:application call to [unknown function] (defined at: ./auction.rsh:30:81:function exp)'],
    msg: 'in',
    who: 'Sellers_stopAuction'
    });
  const v362 = stdlib.addressEq(v358, v319);
  stdlib.assert(v362, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./auction.rsh:55:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./auction.rsh:54:45:application call to [unknown function] (defined at: ./auction.rsh:54:45:function exp)', 'at ./auction.rsh:54:45:application call to [unknown function] (defined at: ./auction.rsh:54:45:function exp)', 'at ./auction.rsh:30:81:application call to "runSellers_stopAuction0_52" (defined at: ./auction.rsh:54:21:function exp)', 'at ./auction.rsh:30:81:application call to [unknown function] (defined at: ./auction.rsh:30:81:function exp)'],
    msg: 'You are not the Seller',
    who: 'Sellers_stopAuction'
    });
  const v366 = ['Sellers_stopAuction0_52', v360];
  
  const txn1 = await (ctc.sendrecv({
    args: [v319, v320, v340, v341, v343, v366],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./auction.rsh:57:20:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v388], secs: v390, time: v389, didSend: v220, from: v387 } = txn1;
      
      switch (v388[0]) {
        case 'Bidder_bid0_52': {
          const v391 = v388[1];
          
          break;
          }
        case 'Sellers_stopAuction0_52': {
          const v431 = v388[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Sellers_stopAuction"
            });
          ;
          const v464 = null;
          const v465 = await txn1.getOutput('Sellers_stopAuction', 'v464', ctc7, v464);
          
          sim_r.txns.push({
            kind: 'from',
            to: v340,
            tok: v320
            });
          if (v341) {
            sim_r.txns.push({
              kind: 'halt',
              tok: v320
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v319,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v320
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc0, ctc2, ctc3, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v388], secs: v390, time: v389, didSend: v220, from: v387 } = txn1;
  switch (v388[0]) {
    case 'Bidder_bid0_52': {
      const v391 = v388[1];
      return;
      break;
      }
    case 'Sellers_stopAuction0_52': {
      const v431 = v388[1];
      undefined /* setApiDetails */;
      ;
      const v464 = null;
      const v465 = await txn1.getOutput('Sellers_stopAuction', 'v464', ctc7, v464);
      if (v220) {
        stdlib.protect(ctc7, await interact.out(v431, v465), {
          at: './auction.rsh:54:22:application',
          fs: ['at ./auction.rsh:54:22:application call to [unknown function] (defined at: ./auction.rsh:54:22:function exp)', 'at ./auction.rsh:59:31:application call to "notify" (defined at: ./auction.rsh:58:20:function exp)', 'at ./auction.rsh:58:20:application call to [unknown function] (defined at: ./auction.rsh:58:20:function exp)'],
          msg: 'out',
          who: 'Sellers_stopAuction'
          });
        }
      else {
        }
      
      ;
      if (v341) {
        return;
        }
      else {
        ;
        return;
        }
      break;
      }
    }
  
  
  };
export async function Bidder_bid(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bidder_bid expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bidder_bid expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 5) {return _Bidder_bid5(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Sellers_stopAuction(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Sellers_stopAuction expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Sellers_stopAuction expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 5) {return _Sellers_stopAuction5(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Bidder_bid(uint64)(address,uint64)`, `Sellers_stopAuction()byte[0]`],
    pure: [],
    sigs: [`Bidder_bid(uint64)(address,uint64)`, `Sellers_stopAuction()byte[0]`]
    },
  appApproval: `ByAJAAEEBQin5ovsDQMgoI0GJgIBAAAiNQAxGEECrylkSSJbNQEhBFs1AjYaABdJQQA1IjUEIzUGSSEFDEAAFCEFEkQpNf+AAQE0/1AhBK9QQgAygaCbvIEBEkQ2GgE1/yg0/1BCAB42GgIXNQQ2GgM2GgEXSSMMQAEYSSEGDEAAzSEGEkQlNAESRDQESSISTDQCEhFEKGRJNQNJSklXACA1/yEHWzX+VyggNf1XSAEXNfyBSVs1+0k1BTX6gASR8aeaNPpQsDT6IlVAAGM0+lcBCDX5NPkXSTX4NPsNRDT4iAIIgAgAAAAAAAABlzT9NPsWUFCwNP00+xZQNQc0/EEADzT/NP4xACIjNPgyBkIA2LEisgE0+7III7IQNP2yB7M0/zT+MQAiIzT4MgZCALmACAAAAAAAAAHQsCk1BzT/NP40/TT8IjT7MgZCAJsjEkQjNAESRDQESSISTDQCEhFEKGRJNQNJVwAgNf8hB1s1/oAEmouRdLAjNP6IAYU0/zEAEkQ0/zT+NP8jIyIyBkIAV0ghCIgBUyI0ARJENARJIhJMNAISEURJNQUXNf+ABILEYf40/xZQsCEIiAEtsSKyASKyEiSyEDIKshQ0/7IRszEANP8WUChLAVcAKGdIIzUBMgY1AkIAsDX/Nf41/TX8Nfs1+jX5NP1BACY0+TT6FlA0+1A0/BZRBwhQNP4WUChLAVcAUWdIJTUBMgY1AkIAd7EisgEjshIkshA0+7IUNPqyEbM0/EEAGrEisgEishIkshAyCbIVMgqyFDT6shGzQgAqsSKyATT+sggjshA0+bIHs7EisgEishIkshAyCbIVMgqyFDT6shGzQgAAMRklEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEgQIxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rjQASUojCDUAOAcyChJEOBAjEkQ4CBJEiTQASUpJIwg1ADgUMgoSRDgQJBJEOBFPAhJEOBISRIk=`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 81,
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
            "components": [
              {
                "internalType": "address payable",
                "name": "v320",
                "type": "address"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
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
            "components": [
              {
                "internalType": "address payable",
                "name": "v320",
                "type": "address"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
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
        "internalType": "struct T6",
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
                    "internalType": "enum _enum_T10",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T8",
                    "name": "_Bidder_bid0_52",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Sellers_stopAuction0_52",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T10",
                "name": "v388",
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
        "components": [
          {
            "internalType": "address payable",
            "name": "elem0",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v407",
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
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "Bidder_bid",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address payable",
            "name": "elem0",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          }
        ],
        "internalType": "struct T11",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Sellers_stopAuction",
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
        "internalType": "struct T6",
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
                    "internalType": "enum _enum_T10",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T8",
                    "name": "_Bidder_bid0_52",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Sellers_stopAuction0_52",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T10",
                "name": "v388",
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
  Bytecode: `0x608060405260405162001476380380620014768339810160408190526200002691620001d2565b6000805543600355604080513381528251602080830191909152830151516001600160a01b03168183015290517f0d6fab7154ce0a94b131216395b92f2e84190b0a295f5e2d18b75b3f1a456c479181900360600190a16200008b3415600762000102565b604080518082018252600060208083018281523380855286830151516001600160a01b0390811683526001948590554390945585519283015251909116928101929092529060600160405160208183030381529060405260029080519060200190620000f99291906200012c565b505050620002cd565b81620001285760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200013a9062000290565b90600052602060002090601f0160209004810192826200015e5760008555620001a9565b82601f106200017957805160ff1916838001178555620001a9565b82800160010185558215620001a9579182015b82811115620001a95782518255916020019190600101906200018c565b50620001b7929150620001bb565b5090565b5b80821115620001b75760008155600101620001bc565b6000818303604080821215620001e757600080fd5b80518082016001600160401b0380821183831017156200021757634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156200023157600080fd5b8351945060208501915084821081831117156200025e57634e487b7160e01b600052604160045260246000fd5b509091526020840151906001600160a01b03821682146200027e57600080fd5b90825260208101919091529392505050565b600181811c90821680620002a557607f821691505b60208210811415620002c757634e487b7160e01b600052602260045260246000fd5b50919050565b61119980620002dd6000396000f3fe60806040526004361061006e5760003560e01c80639afd0bea1161004b5780639afd0bea146100c3578063ab53f2c6146100d6578063ad8bdb15146100f9578063b62792241461011157005b80631e93b0f1146100775780632c10a1591461009b57806383230757146100ae57005b3661007557005b005b34801561008357600080fd5b506003545b6040519081526020015b60405180910390f35b6100756100a9366004610d65565b610148565b3480156100ba57600080fd5b50600154610088565b6100756100d1366004610d7d565b61016c565b3480156100e257600080fd5b506100eb61018c565b604051610092929190610dbb565b610101610229565b6040519015158152602001610092565b61012461011f366004610df5565b610238565b6040805182516001600160a01b031681526020928301519281019290925201610092565b610150610b8a565b61016861016236849003840184610eb5565b8261025b565b5050565b610174610b8a565b61016861018636849003840184610eed565b82610417565b6000606060005460028080546101a190610f92565b80601f01602080910402602001604051908101604052809291908181526020018280546101cd90610f92565b801561021a5780601f106101ef5761010080835404028352916020019161021a565b820191906000526020600020905b8154815290600101906020018083116101fd57829003601f168201915b50505050509050915091509091565b600061023361076e565b905090565b60408051808201909152600080825260208201526102558261079e565b92915050565b61026b600160005414600b6107e7565b815161028690158061027f57508251600154145b600c6107e7565b60008080556002805461029890610f92565b80601f01602080910402602001604051908101604052809291908181526020018280546102c490610f92565b80156103115780601f106102e657610100808354040283529160200191610311565b820191906000526020600020905b8154815290600101906020018083116102f457829003601f168201915b50505050508060200190518101906103299190610fe3565b60408051338152855160208083019190915286015115158183015290519192507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1919081900360600190a1610380341560086107e7565b61039a610393338360200151600161080d565b60096107e7565b80516103b2906001600160a01b03163314600a6107e7565b6103ba610bb5565b815181516001600160a01b0391821690526020808401518351908316908201528351818401805191909316905281516001910181905281516040015280516000606090910152514360809091015261041181610825565b50505050565b61042760056000541460106107e7565b815161044290158061043b57508251600154145b60116107e7565b60008080556002805461045490610f92565b80601f016020809104026020016040519081016040528092919081815260200182805461048090610f92565b80156104cd5780601f106104a2576101008083540402835291602001916104cd565b820191906000526020600020905b8154815290600101906020018083116104b057829003601f168201915b50505050508060200190518101906104e59190611014565b90506104ef610c08565b7f39ae3ba5ee3db2e9c76c06676722712e4f649f643eb75593d77bfa217c7b420033856040516105209291906110c3565b60405180910390a16000602085015151516001811115610542576105426110ad565b141561069857602080850151510151808252608083015190516105679110600d6107e7565b805151610577903414600e6107e7565b604082810151602083810180516001600160a01b0393841690526080860151815183015251835181519093168352810151908201527f344f5a141af49659d20ee290f85b36a032c712a4dde5d6b15539e0077b1a2783910160405180910390a16020810151835260608201511561064e576105f0610bb5565b825181516001600160a01b039182169052602080850151835192169181019190915280820180513390528051600092019190915280516001604090910152825151815160600152514360809091015261064881610825565b50610411565b81604001516001600160a01b03166108fc83608001519081150290604051600060405180830381858888f1935050505015801561068f573d6000803e3d6000fd5b506105f0610bb5565b60016020850151515160018111156106b2576106b26110ad565b1415610411576106c43415600f6107e7565b604051600081527fb832beec21eb5a266f1e1ab9c801b329f43cd4927b98857cf6dd4241b03cfb469060200160405180910390a160006020840152610707610bb5565b825181516001600160a01b039182169052602080850151835190831690820152604080860151828501805191909416905260608087015184519015159301929092528251600091015260808086015183519092019190915290514391015261064881610825565b6000610778610c3c565b6020810151516001905261078a610b8a565b6107948282610417565b6020015192915050565b60408051808201909152600080825260208201526107ba610c3c565b602081810180515160009052515101518390526107d5610b8a565b6107df8282610417565b519392505050565b816101685760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b600061081b83853085610990565b90505b9392505050565b806020015160400151156108f4576040805160a0808201835260008083526020808401828152848601838152606080870185815260808089018781528b51516001600160a01b03908116808c528d51890151821688528d89018051518316885280518a0151151586525186015183526005909955436001558b518089019990995295518616888c01529351909416918601919091525115159184019190915251828401528451808303909301835260c0909101909352805191926108ef9260029290910190610c56565b505050565b6109108160000151602001518260200151600001516001610a6a565b80602001516020015115610937576000808055600181905561093490600290610cda565b50565b8051516020820151606001516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610979573d6000803e3d6000fd5b506000808055600181905561093490600290610cda565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b1790529151600092839283929189169183916109f79161112a565b60006040518083038185875af1925050503d8060008114610a34576040519150601f19603f3d011682016040523d82523d6000602084013e610a39565b606091505b5091509150610a4a82826001610a7e565b5080806020019051810190610a5f9190611146565b979650505050505050565b610a75838383610ab9565b6108ef57600080fd5b60608315610a8d57508161081e565b825115610a9d5782518084602001fd5b60405163100960cb60e01b815260048101839052602401610804565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391610b189161112a565b60006040518083038185875af1925050503d8060008114610b55576040519150601f19603f3d011682016040523d82523d6000602084013e610b5a565b606091505b5091509150610b6b82826002610a7e565b5080806020019051810190610b809190611146565b9695505050505050565b60408051608081018252600091810182815260608201929092529081905b8152600060209091015290565b604080516080810182526000918101828152606082019290925290819081526040805160a0810182526000808252602082810182905292820181905260608201819052608082015291015290565b905290565b6040805160608101825260009181019182529081908152602001610c03604080518082019091526000808252602082015290565b604051806040016040528060008152602001610c03610d14565b828054610c6290610f92565b90600052602060002090601f016020900481019282610c845760008555610cca565b82601f10610c9d57805160ff1916838001178555610cca565b82800160010185558215610cca579182015b82811115610cca578251825591602001919060010190610caf565b50610cd6929150610d27565b5090565b508054610ce690610f92565b6000825580601f10610cf6575050565b601f0160209004906000526020600020908101906109349190610d27565b6040518060200160405280610c03610d3c565b5b80821115610cd65760008155600101610d28565b60408051606081019091528060008152602001610ba86040518060200160405280600081525090565b600060408284031215610d7757600080fd5b50919050565b600060808284031215610d7757600080fd5b60005b83811015610daa578181015183820152602001610d92565b838111156104115750506000910152565b8281526040602082015260008251806040840152610de0816060850160208701610d8f565b601f01601f1916919091016060019392505050565b600060208284031215610e0757600080fd5b5035919050565b6040805190810167ffffffffffffffff81118282101715610e3f57634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff81118282101715610e3f57634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff81118282101715610e3f57634e487b7160e01b600052604160045260246000fd5b801515811461093457600080fd5b600060408284031215610ec757600080fd5b610ecf610e0e565b823581526020830135610ee181610ea7565b60208201529392505050565b60008183036080811215610f0057600080fd5b610f08610e0e565b833581526060601f1983011215610f1e57600080fd5b610f26610e45565b610f2e610e76565b602086013560028110610f4057600080fd5b81526020603f1985011215610f5457600080fd5b610f5c610e45565b60408701358152602082015260608601359350610f7884610ea7565b604081019390935291825260208101919091529392505050565b600181811c90821680610fa657607f821691505b60208210811415610d7757634e487b7160e01b600052602260045260246000fd5b80516001600160a01b0381168114610fde57600080fd5b919050565b600060408284031215610ff557600080fd5b610ffd610e0e565b61100683610fc7565b8152610ee160208401610fc7565b600060a0828403121561102657600080fd5b60405160a0810181811067ffffffffffffffff8211171561105757634e487b7160e01b600052604160045260246000fd5b60405261106383610fc7565b815261107160208401610fc7565b602082015261108260408401610fc7565b6040820152606083015161109581610ea7565b60608201526080928301519281019290925250919050565b634e487b7160e01b600052602160045260246000fd5b6001600160a01b0383168152815160208083019190915282015151805160a0830191906002811061110457634e487b7160e01b600052602160045260246000fd5b806040850152506020810151516060840152604081015115156080840152509392505050565b6000825161113c818460208701610d8f565b9190910192915050565b60006020828403121561115857600080fd5b815161081e81610ea756fea26469706673582212207daae4099bdbf99483faed940ceca08153080cba380d17814bb1de68c5f67ee764736f6c634300080c0033`,
  BytecodeLen: 5238,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './auction.rsh:25:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './auction.rsh:66:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './auction.rsh:66:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './auction.rsh:30:81:after expr stmt semicolon',
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
  "Bidder_bid": Bidder_bid,
  "Seller": Seller,
  "Sellers_stopAuction": Sellers_stopAuction
  };
export const _APIs = {
  Bidder: {
    bid: Bidder_bid
    },
  Sellers: {
    stopAuction: Sellers_stopAuction
    }
  };
