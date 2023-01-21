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
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Contract;
  return {
    accepted: [ctc0, ctc1, ctc2, ctc2, ctc3],
    bidSuccess: [ctc1, ctc1, ctc2, ctc0],
    created: [ctc1, ctc2],
    down: [ctc1, ctc1, ctc2, ctc4, ctc1, ctc0],
    endSuccess: [ctc1, ctc1],
    optInSuccess: [ctc1, ctc2],
    rejected: [ctc0, ctc1, ctc2, ctc2, ctc3]
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '80'));
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc5 = stdlib.T_Object({
    deadline: ctc2,
    description: ctc3,
    owner: ctc0,
    price: ctc2,
    title: ctc4
    });
  const ctc6 = stdlib.T_Contract;
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc2, ctc2, ctc7]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Struct([['id', ctc2], ['blockEnded', ctc2], ['lastBid', ctc2]]);
  
  const _live = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v701, v702, v703, v704, v709] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
      const [v701, v702, v749, v772, v775, v1250, v1259, v1260] = svs;
      return (await ((async () => {
        
        
        return false;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'))) {
      const [v701, v702, v704, v723, v728, v741, v747, v748, v749, v769, v771, v772, v773, v774, v775, v782, v783] = svs;
      return (await ((async () => {
        
        
        return true;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      live: {
        decode: _live,
        dom: [],
        rng: ctc7
        }
      },
    views: {
      1: [ctc0, ctc1, ctc5, ctc6, ctc9],
      6: [ctc0, ctc1, ctc4, ctc0, ctc2, ctc2, ctc9, ctc2],
      8: [ctc0, ctc1, ctc6, ctc10, ctc2, ctc0, ctc2, ctc6, ctc4, ctc2, ctc11, ctc0, ctc7, ctc7, ctc2, ctc9, ctc2]
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
export async function _Auctioneer_acceptSale6(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Auctioneer_acceptSale6 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Auctioneer_acceptSale6 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc3, ctc3, ctc4]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Data({
    Auctioneer_acceptSale0_444: ctc7,
    Auctioneer_rejectSale0_444: ctc7
    });
  const ctc9 = stdlib.T_Null;
  
  
  const [v701, v702, v749, v772, v775, v1250, v1259, v1260] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc0, ctc1, ctc2, ctc0, ctc3, ctc3, ctc6, ctc3]);
  const v1269 = ctc.selfAddress();
  const v1271 = stdlib.protect(ctc7, await interact.in(), {
    at: './src/contracts/auction.rsh:1:23:application',
    fs: ['at ./src/contracts/auction.rsh:199:36:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:199:36:function exp)', 'at ./src/contracts/auction.rsh:193:66:application call to "runAuctioneer_acceptSale0_444" (defined at: ./src/contracts/auction.rsh:197:29:function exp)', 'at ./src/contracts/auction.rsh:193:66:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:193:66:function exp)'],
    msg: 'in',
    who: 'Auctioneer_acceptSale'
    });
  const v1273 = stdlib.addressEq(v1269, v701);
  stdlib.assert(v1273, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/auction.rsh:200:46:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/auction.rsh:199:36:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:199:36:function exp)', 'at ./src/contracts/auction.rsh:199:36:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:199:36:function exp)', 'at ./src/contracts/auction.rsh:193:66:application call to "runAuctioneer_acceptSale0_444" (defined at: ./src/contracts/auction.rsh:197:29:function exp)', 'at ./src/contracts/auction.rsh:193:66:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:193:66:function exp)'],
    msg: 'You are not the Seller',
    who: 'Auctioneer_acceptSale'
    });
  const v1277 = ['Auctioneer_acceptSale0_444', v1271];
  
  const txn1 = await (ctc.sendrecv({
    args: [v701, v702, v749, v772, v775, v1250, v1259, v1260, v1277],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./src/contracts/auction.rsh:202:39:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1292], secs: v1294, time: v1293, didSend: v569, from: v1291 } = txn1;
      
      switch (v1292[0]) {
        case 'Auctioneer_acceptSale0_444': {
          const v1295 = v1292[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Auctioneer_acceptSale"
            });
          ;
          const v1302 = true;
          const v1303 = await txn1.getOutput('Auctioneer_acceptSale', 'v1302', ctc4, v1302);
          
          const v3105 = v1259;
          const v3106 = v1260;
          const v3107 = stdlib.le(v1293, v1250);
          const v3108 = v3107 ? false : false;
          if (v3108) {
            sim_r.isHalt = false;
            }
          else {
            const v3109 = v1259[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:221:41:application', stdlib.UInt_max, '0')];
            const v3110 = v3109[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:221:41:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v772,
              tok: v702
              });
            sim_r.txns.push({
              kind: 'from',
              to: v701,
              tok: undefined /* Nothing */
              });
            null;
            sim_r.txns.push({
              kind: 'halt',
              tok: v702
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'Auctioneer_rejectSale0_444': {
          const v1317 = v1292[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc0, ctc3, ctc3, ctc6, ctc3, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v1292], secs: v1294, time: v1293, didSend: v569, from: v1291 } = txn1;
  switch (v1292[0]) {
    case 'Auctioneer_acceptSale0_444': {
      const v1295 = v1292[1];
      undefined /* setApiDetails */;
      ;
      const v1302 = true;
      const v1303 = await txn1.getOutput('Auctioneer_acceptSale', 'v1302', ctc4, v1302);
      if (v569) {
        stdlib.protect(ctc9, await interact.out(v1295, v1303), {
          at: './src/contracts/auction.rsh:198:33:application',
          fs: ['at ./src/contracts/auction.rsh:198:33:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:198:33:function exp)', 'at ./src/contracts/auction.rsh:204:47:application call to "notify" (defined at: ./src/contracts/auction.rsh:203:42:function exp)', 'at ./src/contracts/auction.rsh:203:42:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:203:42:function exp)'],
          msg: 'out',
          who: 'Auctioneer_acceptSale'
          });
        }
      else {
        }
      
      const v3105 = v1259;
      const v3106 = v1260;
      const v3107 = stdlib.le(v1293, v1250);
      const v3108 = v3107 ? false : false;
      if (v3108) {
        return;
        }
      else {
        const v3109 = v1259[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:221:41:application', stdlib.UInt_max, '0')];
        const v3110 = v3109[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:221:41:application', stdlib.UInt_max, '0')];
        ;
        ;
        null;
        return;
        }
      break;
      }
    case 'Auctioneer_rejectSale0_444': {
      const v1317 = v1292[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Auctioneer_rejectSale6(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Auctioneer_rejectSale6 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Auctioneer_rejectSale6 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc3, ctc3, ctc4]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Data({
    Auctioneer_acceptSale0_444: ctc7,
    Auctioneer_rejectSale0_444: ctc7
    });
  const ctc9 = stdlib.T_Null;
  
  
  const [v701, v702, v749, v772, v775, v1250, v1259, v1260] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc0, ctc1, ctc2, ctc0, ctc3, ctc3, ctc6, ctc3]);
  const v1279 = ctc.selfAddress();
  const v1281 = stdlib.protect(ctc7, await interact.in(), {
    at: './src/contracts/auction.rsh:1:23:application',
    fs: ['at ./src/contracts/auction.rsh:210:36:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:210:36:function exp)', 'at ./src/contracts/auction.rsh:193:66:application call to "runAuctioneer_rejectSale0_444" (defined at: ./src/contracts/auction.rsh:208:29:function exp)', 'at ./src/contracts/auction.rsh:193:66:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:193:66:function exp)'],
    msg: 'in',
    who: 'Auctioneer_rejectSale'
    });
  const v1283 = stdlib.addressEq(v1279, v701);
  stdlib.assert(v1283, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/auction.rsh:211:46:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/auction.rsh:210:36:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:210:36:function exp)', 'at ./src/contracts/auction.rsh:210:36:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:210:36:function exp)', 'at ./src/contracts/auction.rsh:193:66:application call to "runAuctioneer_rejectSale0_444" (defined at: ./src/contracts/auction.rsh:208:29:function exp)', 'at ./src/contracts/auction.rsh:193:66:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:193:66:function exp)'],
    msg: 'You are not the Seller',
    who: 'Auctioneer_rejectSale'
    });
  const v1287 = ['Auctioneer_rejectSale0_444', v1281];
  
  const txn1 = await (ctc.sendrecv({
    args: [v701, v702, v749, v772, v775, v1250, v1259, v1260, v1287],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./src/contracts/auction.rsh:213:39:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1292], secs: v1294, time: v1293, didSend: v569, from: v1291 } = txn1;
      
      switch (v1292[0]) {
        case 'Auctioneer_acceptSale0_444': {
          const v1295 = v1292[1];
          
          break;
          }
        case 'Auctioneer_rejectSale0_444': {
          const v1317 = v1292[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Auctioneer_rejectSale"
            });
          ;
          const v1332 = false;
          const v1333 = await txn1.getOutput('Auctioneer_rejectSale', 'v1332', ctc4, v1332);
          
          const v3138 = v1259;
          const v3139 = v1260;
          const v3140 = stdlib.le(v1293, v1250);
          const v3141 = v3140 ? false : false;
          if (v3141) {
            sim_r.isHalt = false;
            }
          else {
            const v3144 = v1259[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:231:41:application', stdlib.UInt_max, '0')];
            const v3145 = v3144[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:231:41:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v701,
              tok: v702
              });
            sim_r.txns.push({
              kind: 'from',
              to: v772,
              tok: undefined /* Nothing */
              });
            null;
            sim_r.txns.push({
              kind: 'halt',
              tok: v702
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
    tys: [ctc0, ctc1, ctc2, ctc0, ctc3, ctc3, ctc6, ctc3, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v1292], secs: v1294, time: v1293, didSend: v569, from: v1291 } = txn1;
  switch (v1292[0]) {
    case 'Auctioneer_acceptSale0_444': {
      const v1295 = v1292[1];
      return;
      break;
      }
    case 'Auctioneer_rejectSale0_444': {
      const v1317 = v1292[1];
      undefined /* setApiDetails */;
      ;
      const v1332 = false;
      const v1333 = await txn1.getOutput('Auctioneer_rejectSale', 'v1332', ctc4, v1332);
      if (v569) {
        stdlib.protect(ctc9, await interact.out(v1317, v1333), {
          at: './src/contracts/auction.rsh:209:33:application',
          fs: ['at ./src/contracts/auction.rsh:209:33:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:209:33:function exp)', 'at ./src/contracts/auction.rsh:215:47:application call to "notify" (defined at: ./src/contracts/auction.rsh:214:42:function exp)', 'at ./src/contracts/auction.rsh:214:42:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:214:42:function exp)'],
          msg: 'out',
          who: 'Auctioneer_rejectSale'
          });
        }
      else {
        }
      
      const v3138 = v1259;
      const v3139 = v1260;
      const v3140 = stdlib.le(v1293, v1250);
      const v3141 = v3140 ? false : false;
      if (v3141) {
        return;
        }
      else {
        const v3144 = v1259[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:231:41:application', stdlib.UInt_max, '0')];
        const v3145 = v3144[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:231:41:application', stdlib.UInt_max, '0')];
        ;
        ;
        null;
        return;
        }
      break;
      }
    }
  
  
  };
export async function _Auctioneer_stopAuction8(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Auctioneer_stopAuction8 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Auctioneer_stopAuction8 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Contract;
  const ctc3 = stdlib.T_Tuple([]);
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc6 = stdlib.T_Struct([['id', ctc4], ['blockEnded', ctc4], ['lastBid', ctc4]]);
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc4, ctc4, ctc7]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc10 = stdlib.T_Tuple([ctc4]);
  const ctc11 = stdlib.T_Data({
    Auctioneer_stopAuction0_123: ctc3,
    Bidder_bid0_123: ctc10,
    Bidder_optIn0_123: ctc3
    });
  const ctc12 = stdlib.T_Null;
  const ctc13 = stdlib.T_Tuple([ctc4, ctc12]);
  
  
  const [v701, v702, v704, v723, v728, v741, v747, v748, v749, v769, v771, v772, v773, v774, v775, v782, v783] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'), [ctc0, ctc1, ctc2, ctc3, ctc4, ctc0, ctc4, ctc2, ctc5, ctc4, ctc6, ctc0, ctc7, ctc7, ctc4, ctc9, ctc4]);
  const v794 = ctc.selfAddress();
  const v796 = stdlib.protect(ctc3, await interact.in(), {
    at: './src/contracts/auction.rsh:1:23:application',
    fs: ['at ./src/contracts/auction.rsh:161:36:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:161:36:function exp)', 'at ./src/contracts/auction.rsh:114:31:application call to "runAuctioneer_stopAuction0_123" (defined at: ./src/contracts/auction.rsh:159:29:function exp)', 'at ./src/contracts/auction.rsh:114:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:114:31:function exp)'],
    msg: 'in',
    who: 'Auctioneer_stopAuction'
    });
  const v798 = stdlib.addressEq(v794, v701);
  stdlib.assert(v798, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/auction.rsh:162:46:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/auction.rsh:161:36:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:161:36:function exp)', 'at ./src/contracts/auction.rsh:161:36:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:161:36:function exp)', 'at ./src/contracts/auction.rsh:114:31:application call to "runAuctioneer_stopAuction0_123" (defined at: ./src/contracts/auction.rsh:159:29:function exp)', 'at ./src/contracts/auction.rsh:114:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:114:31:function exp)'],
    msg: 'You are not the Seller',
    who: 'Auctioneer_stopAuction'
    });
  const v802 = ['Auctioneer_stopAuction0_123', v796];
  
  const txn1 = await (ctc.sendrecv({
    args: [v701, v702, v704, v723, v728, v741, v747, v748, v749, v769, v771, v772, v773, v774, v775, v782, v783, v802],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./src/contracts/auction.rsh:164:39:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v833], secs: v835, time: v834, didSend: v317, from: v832 } = txn1;
      
      switch (v833[0]) {
        case 'Auctioneer_stopAuction0_123': {
          const v836 = v833[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Auctioneer_stopAuction"
            });
          ;
          null;
          const v850 = {
            blockEnded: v834,
            id: v728,
            lastBid: v775
            };
          const v851 = await txn1.getOutput('Auctioneer_stopAuction', 'v850', ctc6, v850);
          
          const v3146 = v850;
          const v3147 = v772;
          const v3148 = v773;
          const v3149 = false;
          const v3150 = v775;
          const v3152 = v782;
          const v3153 = v783;
          const v3154 = stdlib.le(v834, v769);
          const v3155 = v3154 ? false : false;
          if (v3155) {
            sim_r.isHalt = false;
            }
          else {
            const v3156 = await (async () => {
              sim_r.txns.push({
                kind: 'remote',
                obj: v704,
                remote: ({
                  accs: [],
                  apps: [],
                  bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:178:37:application', stdlib.UInt_max, '0'),
                  boxes: [],
                  fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:178:37:application', stdlib.UInt_max, '0'),
                  toks: []
                  })
                })
              return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
            const v3157 = await txn1.getOutput('internal', 'v3156', ctc13, v3156);
            const v3158 = v3157[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:178:37:application', stdlib.UInt_max, '0')];
            const v3159 = stdlib.add(v783, v3158);
            null;
            const v3161 = stdlib.gt(v775, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:190:25:decimal', stdlib.UInt_max, '0'));
            if (v3161) {
              const v3162 = stdlib.safeAdd(v834, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
              const v3190 = v782;
              const v3191 = v3159;
              const v3192 = stdlib.le(v834, v3162);
              if (v3192) {
                sim_r.isHalt = false;
                }
              else {
                const v3194 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:221:41:application', stdlib.UInt_max, '0')];
                const v3195 = v3194[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:221:41:application', stdlib.UInt_max, '0')];
                sim_r.txns.push({
                  kind: 'from',
                  to: v772,
                  tok: v702
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v701,
                  tok: undefined /* Nothing */
                  });
                null;
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v702
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}
            else {
              const v3185 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:242:33:application', stdlib.UInt_max, '0')];
              const v3186 = v3185[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:242:33:application', stdlib.UInt_max, '0')];
              sim_r.txns.push({
                kind: 'from',
                to: v701,
                tok: v702
                });
              sim_r.txns.push({
                kind: 'from',
                to: v772,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v702
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}
          break;
          }
        case 'Bidder_bid0_123': {
          const v967 = v833[1];
          
          break;
          }
        case 'Bidder_optIn0_123': {
          const v1098 = v833[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc3, ctc4, ctc0, ctc4, ctc2, ctc5, ctc4, ctc6, ctc0, ctc7, ctc7, ctc4, ctc9, ctc4, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v833], secs: v835, time: v834, didSend: v317, from: v832 } = txn1;
  switch (v833[0]) {
    case 'Auctioneer_stopAuction0_123': {
      const v836 = v833[1];
      undefined /* setApiDetails */;
      ;
      null;
      const v850 = {
        blockEnded: v834,
        id: v728,
        lastBid: v775
        };
      const v851 = await txn1.getOutput('Auctioneer_stopAuction', 'v850', ctc6, v850);
      if (v317) {
        stdlib.protect(ctc12, await interact.out(v836, v851), {
          at: './src/contracts/auction.rsh:160:33:application',
          fs: ['at ./src/contracts/auction.rsh:160:33:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:160:33:function exp)', 'at ./src/contracts/auction.rsh:172:47:application call to "notify" (defined at: ./src/contracts/auction.rsh:165:42:function exp)', 'at ./src/contracts/auction.rsh:165:42:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:165:42:function exp)'],
          msg: 'out',
          who: 'Auctioneer_stopAuction'
          });
        }
      else {
        }
      
      const v3146 = v850;
      const v3147 = v772;
      const v3148 = v773;
      const v3149 = false;
      const v3150 = v775;
      const v3152 = v782;
      const v3153 = v783;
      const v3154 = stdlib.le(v834, v769);
      const v3155 = v3154 ? false : false;
      if (v3155) {
        return;
        }
      else {
        const v3156 = undefined /* Remote */;
        const v3157 = await txn1.getOutput('internal', 'v3156', ctc13, v3156);
        const v3158 = v3157[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:178:37:application', stdlib.UInt_max, '0')];
        const v3159 = stdlib.add(v783, v3158);
        const v3160 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3158);
        stdlib.assert(v3160, {
          at: './src/contracts/auction.rsh:178:37:application',
          fs: [],
          msg: 'remote bill check',
          who: 'Auctioneer_stopAuction'
          });
        null;
        const v3161 = stdlib.gt(v775, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:190:25:decimal', stdlib.UInt_max, '0'));
        if (v3161) {
          const v3162 = stdlib.safeAdd(v834, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
          const v3190 = v782;
          const v3191 = v3159;
          const v3192 = stdlib.le(v834, v3162);
          if (v3192) {
            return;
            }
          else {
            const v3194 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:221:41:application', stdlib.UInt_max, '0')];
            const v3195 = v3194[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:221:41:application', stdlib.UInt_max, '0')];
            ;
            ;
            null;
            return;
            }}
        else {
          const v3185 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:242:33:application', stdlib.UInt_max, '0')];
          const v3186 = v3185[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:242:33:application', stdlib.UInt_max, '0')];
          ;
          ;
          return;
          }}
      break;
      }
    case 'Bidder_bid0_123': {
      const v967 = v833[1];
      return;
      break;
      }
    case 'Bidder_optIn0_123': {
      const v1098 = v833[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Bidder_bid8(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bidder_bid8 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bidder_bid8 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Contract;
  const ctc3 = stdlib.T_Tuple([]);
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc6 = stdlib.T_Struct([['id', ctc4], ['blockEnded', ctc4], ['lastBid', ctc4]]);
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc4, ctc4, ctc7]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc10 = stdlib.T_Tuple([ctc4]);
  const ctc11 = stdlib.T_Data({
    Auctioneer_stopAuction0_123: ctc3,
    Bidder_bid0_123: ctc10,
    Bidder_optIn0_123: ctc3
    });
  const ctc12 = stdlib.T_Null;
  const ctc13 = stdlib.T_Tuple([ctc4, ctc12]);
  const ctc14 = stdlib.T_Tuple([ctc0, ctc4]);
  
  
  const [v701, v702, v704, v723, v728, v741, v747, v748, v749, v769, v771, v772, v773, v774, v775, v782, v783] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'), [ctc0, ctc1, ctc2, ctc3, ctc4, ctc0, ctc4, ctc2, ctc5, ctc4, ctc6, ctc0, ctc7, ctc7, ctc4, ctc9, ctc4]);
  const v806 = stdlib.protect(ctc10, await interact.in(), {
    at: './src/contracts/auction.rsh:1:23:application',
    fs: ['at ./src/contracts/auction.rsh:131:49:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:131:49:function exp)', 'at ./src/contracts/auction.rsh:114:31:application call to "runBidder_bid0_123" (defined at: ./src/contracts/auction.rsh:131:30:function exp)', 'at ./src/contracts/auction.rsh:114:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:114:31:function exp)'],
    msg: 'in',
    who: 'Bidder_bid'
    });
  const v807 = v806[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v809 = stdlib.gt(v807, v775);
  stdlib.assert(v809, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/auction.rsh:132:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/auction.rsh:131:49:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:131:49:function exp)', 'at ./src/contracts/auction.rsh:114:31:application call to "runBidder_bid0_123" (defined at: ./src/contracts/auction.rsh:131:30:function exp)', 'at ./src/contracts/auction.rsh:114:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:114:31:function exp)'],
    msg: 'Your bid is too low, please try again',
    who: 'Bidder_bid'
    });
  const v816 = ['Bidder_bid0_123', v806];
  
  const txn1 = await (ctc.sendrecv({
    args: [v701, v702, v704, v723, v728, v741, v747, v748, v749, v769, v771, v772, v773, v774, v775, v782, v783, v816],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [v807, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v833], secs: v835, time: v834, didSend: v317, from: v832 } = txn1;
      
      switch (v833[0]) {
        case 'Auctioneer_stopAuction0_123': {
          const v836 = v833[1];
          
          break;
          }
        case 'Bidder_bid0_123': {
          const v967 = v833[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bidder_bid"
            });
          const v973 = v967[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:131:30:spread', stdlib.UInt_max, '0')];
          const v978 = stdlib.add(v783, v973);
          sim_r.txns.push({
            amt: v973,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          if (v773) {
            const v1030 = await (async () => {
              sim_r.txns.push({
                kind: 'remote',
                obj: v704,
                remote: ({
                  accs: [v832],
                  apps: [],
                  bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:138:91:application', stdlib.UInt_max, '0'),
                  boxes: [],
                  fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:138:91:application', stdlib.UInt_max, '0'),
                  toks: []
                  })
                })
              return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
            const v1031 = await txn1.getOutput('internal', 'v1030', ctc13, v1030);
            const v1033 = v1031[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:138:91:application', stdlib.UInt_max, '0')];
            const v1038 = stdlib.add(v978, v1033);
            null;
            const v1041 = [v832, v775];
            const v1042 = await txn1.getOutput('Bidder_bid', 'v1041', ctc14, v1041);
            
            const v3562 = v771;
            const v3563 = v832;
            const v3564 = false;
            const v3565 = v774;
            const v3566 = v973;
            const v3568 = v782;
            const v3569 = v1038;
            const v3570 = stdlib.le(v834, v769);
            const v3571 = v3570 ? v774 : false;
            if (v3571) {
              sim_r.isHalt = false;
              }
            else {
              const v3572 = await (async () => {
                sim_r.txns.push({
                  kind: 'remote',
                  obj: v704,
                  remote: ({
                    accs: [],
                    apps: [],
                    bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:178:37:application', stdlib.UInt_max, '0'),
                    boxes: [],
                    fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:178:37:application', stdlib.UInt_max, '0'),
                    toks: []
                    })
                  })
                return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
              const v3573 = await txn1.getOutput('internal', 'v3572', ctc13, v3572);
              const v3574 = v3573[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:178:37:application', stdlib.UInt_max, '0')];
              const v3575 = stdlib.add(v1038, v3574);
              null;
              const v3577 = stdlib.gt(v973, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:190:25:decimal', stdlib.UInt_max, '0'));
              if (v3577) {
                const v3578 = stdlib.safeAdd(v834, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
                const v3606 = v782;
                const v3607 = v3575;
                const v3608 = stdlib.le(v834, v3578);
                if (v3608) {
                  sim_r.isHalt = false;
                  }
                else {
                  const v3610 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:221:41:application', stdlib.UInt_max, '0')];
                  const v3611 = v3610[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:221:41:application', stdlib.UInt_max, '0')];
                  sim_r.txns.push({
                    kind: 'from',
                    to: v832,
                    tok: v702
                    });
                  sim_r.txns.push({
                    kind: 'from',
                    to: v701,
                    tok: undefined /* Nothing */
                    });
                  null;
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: v702
                    })
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }}
              else {
                const v3601 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:242:33:application', stdlib.UInt_max, '0')];
                const v3602 = v3601[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:242:33:application', stdlib.UInt_max, '0')];
                sim_r.txns.push({
                  kind: 'from',
                  to: v701,
                  tok: v702
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v832,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v702
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}}
          else {
            const v1002 = stdlib.sub(v978, v775);
            sim_r.txns.push({
              kind: 'from',
              to: v772,
              tok: undefined /* Nothing */
              });
            const v1006 = await (async () => {
              sim_r.txns.push({
                kind: 'remote',
                obj: v704,
                remote: ({
                  accs: [v832],
                  apps: [],
                  bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:138:91:application', stdlib.UInt_max, '0'),
                  boxes: [],
                  fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:138:91:application', stdlib.UInt_max, '0'),
                  toks: []
                  })
                })
              return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
            const v1007 = await txn1.getOutput('internal', 'v1006', ctc13, v1006);
            const v1009 = v1007[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:138:91:application', stdlib.UInt_max, '0')];
            const v1014 = stdlib.add(v1002, v1009);
            null;
            const v1017 = [v832, v775];
            const v1018 = await txn1.getOutput('Bidder_bid', 'v1017', ctc14, v1017);
            
            const v3614 = v771;
            const v3615 = v832;
            const v3616 = false;
            const v3617 = v774;
            const v3618 = v973;
            const v3620 = v782;
            const v3621 = v1014;
            const v3622 = stdlib.le(v834, v769);
            const v3623 = v3622 ? v774 : false;
            if (v3623) {
              sim_r.isHalt = false;
              }
            else {
              const v3624 = await (async () => {
                sim_r.txns.push({
                  kind: 'remote',
                  obj: v704,
                  remote: ({
                    accs: [],
                    apps: [],
                    bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:178:37:application', stdlib.UInt_max, '0'),
                    boxes: [],
                    fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:178:37:application', stdlib.UInt_max, '0'),
                    toks: []
                    })
                  })
                return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
              const v3625 = await txn1.getOutput('internal', 'v3624', ctc13, v3624);
              const v3626 = v3625[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:178:37:application', stdlib.UInt_max, '0')];
              const v3627 = stdlib.add(v1014, v3626);
              null;
              const v3629 = stdlib.gt(v973, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:190:25:decimal', stdlib.UInt_max, '0'));
              if (v3629) {
                const v3630 = stdlib.safeAdd(v834, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
                const v3658 = v782;
                const v3659 = v3627;
                const v3660 = stdlib.le(v834, v3630);
                if (v3660) {
                  sim_r.isHalt = false;
                  }
                else {
                  const v3662 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:221:41:application', stdlib.UInt_max, '0')];
                  const v3663 = v3662[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:221:41:application', stdlib.UInt_max, '0')];
                  sim_r.txns.push({
                    kind: 'from',
                    to: v832,
                    tok: v702
                    });
                  sim_r.txns.push({
                    kind: 'from',
                    to: v701,
                    tok: undefined /* Nothing */
                    });
                  null;
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: v702
                    })
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }}
              else {
                const v3653 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:242:33:application', stdlib.UInt_max, '0')];
                const v3654 = v3653[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:242:33:application', stdlib.UInt_max, '0')];
                sim_r.txns.push({
                  kind: 'from',
                  to: v701,
                  tok: v702
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v832,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v702
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}}
          break;
          }
        case 'Bidder_optIn0_123': {
          const v1098 = v833[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc3, ctc4, ctc0, ctc4, ctc2, ctc5, ctc4, ctc6, ctc0, ctc7, ctc7, ctc4, ctc9, ctc4, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v833], secs: v835, time: v834, didSend: v317, from: v832 } = txn1;
  switch (v833[0]) {
    case 'Auctioneer_stopAuction0_123': {
      const v836 = v833[1];
      return;
      break;
      }
    case 'Bidder_bid0_123': {
      const v967 = v833[1];
      undefined /* setApiDetails */;
      const v973 = v967[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:131:30:spread', stdlib.UInt_max, '0')];
      const v974 = stdlib.gt(v973, v775);
      stdlib.assert(v974, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/auction.rsh:132:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/auction.rsh:131:49:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:131:49:function exp)', 'at ./src/contracts/auction.rsh:114:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:131:49:function exp)', 'at ./src/contracts/auction.rsh:114:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:114:31:function exp)'],
        msg: 'Your bid is too low, please try again',
        who: 'Bidder_bid'
        });
      const v978 = stdlib.add(v783, v973);
      ;
      if (v773) {
        const v1030 = undefined /* Remote */;
        const v1031 = await txn1.getOutput('internal', 'v1030', ctc13, v1030);
        const v1033 = v1031[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:138:91:application', stdlib.UInt_max, '0')];
        const v1038 = stdlib.add(v978, v1033);
        const v1039 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1033);
        stdlib.assert(v1039, {
          at: './src/contracts/auction.rsh:138:91:application',
          fs: ['at ./src/contracts/auction.rsh:135:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:135:50:function exp)'],
          msg: 'remote bill check',
          who: 'Bidder_bid'
          });
        null;
        const v1041 = [v832, v775];
        const v1042 = await txn1.getOutput('Bidder_bid', 'v1041', ctc14, v1041);
        if (v317) {
          stdlib.protect(ctc12, await interact.out(v967, v1042), {
            at: './src/contracts/auction.rsh:131:31:application',
            fs: ['at ./src/contracts/auction.rsh:131:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:131:31:function exp)', 'at ./src/contracts/auction.rsh:140:55:application call to "notify" (defined at: ./src/contracts/auction.rsh:135:50:function exp)', 'at ./src/contracts/auction.rsh:135:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:135:50:function exp)'],
            msg: 'out',
            who: 'Bidder_bid'
            });
          }
        else {
          }
        
        const v3562 = v771;
        const v3563 = v832;
        const v3564 = false;
        const v3565 = v774;
        const v3566 = v973;
        const v3568 = v782;
        const v3569 = v1038;
        const v3570 = stdlib.le(v834, v769);
        const v3571 = v3570 ? v774 : false;
        if (v3571) {
          return;
          }
        else {
          const v3572 = undefined /* Remote */;
          const v3573 = await txn1.getOutput('internal', 'v3572', ctc13, v3572);
          const v3574 = v3573[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:178:37:application', stdlib.UInt_max, '0')];
          const v3575 = stdlib.add(v1038, v3574);
          const v3576 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3574);
          stdlib.assert(v3576, {
            at: './src/contracts/auction.rsh:178:37:application',
            fs: [],
            msg: 'remote bill check',
            who: 'Bidder_bid'
            });
          null;
          const v3577 = stdlib.gt(v973, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:190:25:decimal', stdlib.UInt_max, '0'));
          if (v3577) {
            const v3578 = stdlib.safeAdd(v834, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
            const v3606 = v782;
            const v3607 = v3575;
            const v3608 = stdlib.le(v834, v3578);
            if (v3608) {
              return;
              }
            else {
              const v3610 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:221:41:application', stdlib.UInt_max, '0')];
              const v3611 = v3610[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:221:41:application', stdlib.UInt_max, '0')];
              ;
              ;
              null;
              return;
              }}
          else {
            const v3601 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:242:33:application', stdlib.UInt_max, '0')];
            const v3602 = v3601[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:242:33:application', stdlib.UInt_max, '0')];
            ;
            ;
            return;
            }}}
      else {
        const v1002 = stdlib.sub(v978, v775);
        ;
        const v1006 = undefined /* Remote */;
        const v1007 = await txn1.getOutput('internal', 'v1006', ctc13, v1006);
        const v1009 = v1007[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:138:91:application', stdlib.UInt_max, '0')];
        const v1014 = stdlib.add(v1002, v1009);
        const v1015 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1009);
        stdlib.assert(v1015, {
          at: './src/contracts/auction.rsh:138:91:application',
          fs: ['at ./src/contracts/auction.rsh:135:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:135:50:function exp)'],
          msg: 'remote bill check',
          who: 'Bidder_bid'
          });
        null;
        const v1017 = [v832, v775];
        const v1018 = await txn1.getOutput('Bidder_bid', 'v1017', ctc14, v1017);
        if (v317) {
          stdlib.protect(ctc12, await interact.out(v967, v1018), {
            at: './src/contracts/auction.rsh:131:31:application',
            fs: ['at ./src/contracts/auction.rsh:131:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:131:31:function exp)', 'at ./src/contracts/auction.rsh:140:55:application call to "notify" (defined at: ./src/contracts/auction.rsh:135:50:function exp)', 'at ./src/contracts/auction.rsh:135:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:135:50:function exp)'],
            msg: 'out',
            who: 'Bidder_bid'
            });
          }
        else {
          }
        
        const v3614 = v771;
        const v3615 = v832;
        const v3616 = false;
        const v3617 = v774;
        const v3618 = v973;
        const v3620 = v782;
        const v3621 = v1014;
        const v3622 = stdlib.le(v834, v769);
        const v3623 = v3622 ? v774 : false;
        if (v3623) {
          return;
          }
        else {
          const v3624 = undefined /* Remote */;
          const v3625 = await txn1.getOutput('internal', 'v3624', ctc13, v3624);
          const v3626 = v3625[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:178:37:application', stdlib.UInt_max, '0')];
          const v3627 = stdlib.add(v1014, v3626);
          const v3628 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3626);
          stdlib.assert(v3628, {
            at: './src/contracts/auction.rsh:178:37:application',
            fs: [],
            msg: 'remote bill check',
            who: 'Bidder_bid'
            });
          null;
          const v3629 = stdlib.gt(v973, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:190:25:decimal', stdlib.UInt_max, '0'));
          if (v3629) {
            const v3630 = stdlib.safeAdd(v834, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
            const v3658 = v782;
            const v3659 = v3627;
            const v3660 = stdlib.le(v834, v3630);
            if (v3660) {
              return;
              }
            else {
              const v3662 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:221:41:application', stdlib.UInt_max, '0')];
              const v3663 = v3662[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:221:41:application', stdlib.UInt_max, '0')];
              ;
              ;
              null;
              return;
              }}
          else {
            const v3653 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:242:33:application', stdlib.UInt_max, '0')];
            const v3654 = v3653[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:242:33:application', stdlib.UInt_max, '0')];
            ;
            ;
            return;
            }}}
      break;
      }
    case 'Bidder_optIn0_123': {
      const v1098 = v833[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Bidder_optIn8(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bidder_optIn8 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bidder_optIn8 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Contract;
  const ctc3 = stdlib.T_Tuple([]);
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc6 = stdlib.T_Struct([['id', ctc4], ['blockEnded', ctc4], ['lastBid', ctc4]]);
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc4, ctc4, ctc7]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc10 = stdlib.T_Tuple([ctc4]);
  const ctc11 = stdlib.T_Data({
    Auctioneer_stopAuction0_123: ctc3,
    Bidder_bid0_123: ctc10,
    Bidder_optIn0_123: ctc3
    });
  const ctc12 = stdlib.T_Null;
  const ctc13 = stdlib.T_Tuple([ctc4, ctc12]);
  
  
  const [v701, v702, v704, v723, v728, v741, v747, v748, v749, v769, v771, v772, v773, v774, v775, v782, v783] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'), [ctc0, ctc1, ctc2, ctc3, ctc4, ctc0, ctc4, ctc2, ctc5, ctc4, ctc6, ctc0, ctc7, ctc7, ctc4, ctc9, ctc4]);
  const v820 = stdlib.protect(ctc3, await interact.in(), {
    at: './src/contracts/auction.rsh:1:23:application',
    fs: ['at ./src/contracts/auction.rsh:145:48:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:145:48:function exp)', 'at ./src/contracts/auction.rsh:114:31:application call to "runBidder_optIn0_123" (defined at: ./src/contracts/auction.rsh:145:30:function exp)', 'at ./src/contracts/auction.rsh:114:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:114:31:function exp)'],
    msg: 'in',
    who: 'Bidder_optIn'
    });
  const v824 = ['Bidder_optIn0_123', v820];
  
  const txn1 = await (ctc.sendrecv({
    args: [v701, v702, v704, v723, v728, v741, v747, v748, v749, v769, v771, v772, v773, v774, v775, v782, v783, v824],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./src/contracts/auction.rsh:12:18:decimal', stdlib.UInt_max, '1000000'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v833], secs: v835, time: v834, didSend: v317, from: v832 } = txn1;
      
      switch (v833[0]) {
        case 'Auctioneer_stopAuction0_123': {
          const v836 = v833[1];
          
          break;
          }
        case 'Bidder_bid0_123': {
          const v967 = v833[1];
          
          break;
          }
        case 'Bidder_optIn0_123': {
          const v1098 = v833[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bidder_optIn"
            });
          const v1109 = stdlib.add(v783, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:12:18:decimal', stdlib.UInt_max, '1000000'));
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:12:18:decimal', stdlib.UInt_max, '1000000'),
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v1184 = stdlib.ge(v1109, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:149:83:application', stdlib.UInt_max, '900000'));
          if (v1184) {
            const v1188 = stdlib.sub(v1109, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:149:83:application', stdlib.UInt_max, '900000'));
            sim_r.txns.push({
              kind: 'from',
              to: v741,
              tok: undefined /* Nothing */
              });
            const v1190 = stdlib.ge(v1188, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:150:84:application', stdlib.UInt_max, '100000'));
            if (v1190) {
              const v1194 = stdlib.sub(v1188, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:150:84:application', stdlib.UInt_max, '100000'));
              sim_r.txns.push({
                kind: 'from',
                to: v701,
                tok: undefined /* Nothing */
                });
              null;
              const v1195 = true;
              const v1196 = await txn1.getOutput('Bidder_optIn', 'v1195', ctc7, v1195);
              
              const v4030 = v771;
              const v4031 = v772;
              const v4032 = v773;
              const v4033 = v774;
              const v4034 = v775;
              const v4036 = v782;
              const v4037 = v1194;
              const v4038 = stdlib.le(v834, v769);
              const v4039 = v4038 ? v774 : false;
              if (v4039) {
                sim_r.isHalt = false;
                }
              else {
                const v4040 = await (async () => {
                  sim_r.txns.push({
                    kind: 'remote',
                    obj: v704,
                    remote: ({
                      accs: [],
                      apps: [],
                      bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:178:37:application', stdlib.UInt_max, '0'),
                      boxes: [],
                      fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:178:37:application', stdlib.UInt_max, '0'),
                      toks: []
                      })
                    })
                  return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
                const v4041 = await txn1.getOutput('internal', 'v4040', ctc13, v4040);
                const v4042 = v4041[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:178:37:application', stdlib.UInt_max, '0')];
                const v4043 = stdlib.add(v1194, v4042);
                null;
                const v4045 = stdlib.gt(v775, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:190:25:decimal', stdlib.UInt_max, '0'));
                if (v4045) {
                  const v4046 = stdlib.safeAdd(v834, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
                  const v4074 = v782;
                  const v4075 = v4043;
                  const v4076 = stdlib.le(v834, v4046);
                  if (v4076) {
                    sim_r.isHalt = false;
                    }
                  else {
                    const v4078 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:221:41:application', stdlib.UInt_max, '0')];
                    const v4079 = v4078[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:221:41:application', stdlib.UInt_max, '0')];
                    sim_r.txns.push({
                      kind: 'from',
                      to: v772,
                      tok: v702
                      });
                    sim_r.txns.push({
                      kind: 'from',
                      to: v701,
                      tok: undefined /* Nothing */
                      });
                    null;
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: v702
                      })
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }}
                else {
                  const v4069 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:242:33:application', stdlib.UInt_max, '0')];
                  const v4070 = v4069[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:242:33:application', stdlib.UInt_max, '0')];
                  sim_r.txns.push({
                    kind: 'from',
                    to: v701,
                    tok: v702
                    });
                  sim_r.txns.push({
                    kind: 'from',
                    to: v772,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: v702
                    })
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }}}
            else {
              null;
              const v1202 = true;
              const v1203 = await txn1.getOutput('Bidder_optIn', 'v1202', ctc7, v1202);
              
              const v4082 = v771;
              const v4083 = v772;
              const v4084 = v773;
              const v4085 = v774;
              const v4086 = v775;
              const v4088 = v782;
              const v4089 = v1188;
              const v4090 = stdlib.le(v834, v769);
              const v4091 = v4090 ? v774 : false;
              if (v4091) {
                sim_r.isHalt = false;
                }
              else {
                const v4092 = await (async () => {
                  sim_r.txns.push({
                    kind: 'remote',
                    obj: v704,
                    remote: ({
                      accs: [],
                      apps: [],
                      bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:178:37:application', stdlib.UInt_max, '0'),
                      boxes: [],
                      fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:178:37:application', stdlib.UInt_max, '0'),
                      toks: []
                      })
                    })
                  return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
                const v4093 = await txn1.getOutput('internal', 'v4092', ctc13, v4092);
                const v4094 = v4093[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:178:37:application', stdlib.UInt_max, '0')];
                const v4095 = stdlib.add(v1188, v4094);
                null;
                const v4097 = stdlib.gt(v775, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:190:25:decimal', stdlib.UInt_max, '0'));
                if (v4097) {
                  const v4098 = stdlib.safeAdd(v834, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
                  const v4126 = v782;
                  const v4127 = v4095;
                  const v4128 = stdlib.le(v834, v4098);
                  if (v4128) {
                    sim_r.isHalt = false;
                    }
                  else {
                    const v4130 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:221:41:application', stdlib.UInt_max, '0')];
                    const v4131 = v4130[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:221:41:application', stdlib.UInt_max, '0')];
                    sim_r.txns.push({
                      kind: 'from',
                      to: v772,
                      tok: v702
                      });
                    sim_r.txns.push({
                      kind: 'from',
                      to: v701,
                      tok: undefined /* Nothing */
                      });
                    null;
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: v702
                      })
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }}
                else {
                  const v4121 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:242:33:application', stdlib.UInt_max, '0')];
                  const v4122 = v4121[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:242:33:application', stdlib.UInt_max, '0')];
                  sim_r.txns.push({
                    kind: 'from',
                    to: v701,
                    tok: v702
                    });
                  sim_r.txns.push({
                    kind: 'from',
                    to: v772,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: v702
                    })
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }}}}
          else {
            const v1210 = stdlib.ge(v1109, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:150:84:application', stdlib.UInt_max, '100000'));
            if (v1210) {
              const v1214 = stdlib.sub(v1109, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:150:84:application', stdlib.UInt_max, '100000'));
              sim_r.txns.push({
                kind: 'from',
                to: v701,
                tok: undefined /* Nothing */
                });
              null;
              const v1215 = true;
              const v1216 = await txn1.getOutput('Bidder_optIn', 'v1215', ctc7, v1215);
              
              const v4134 = v771;
              const v4135 = v772;
              const v4136 = v773;
              const v4137 = v774;
              const v4138 = v775;
              const v4140 = v782;
              const v4141 = v1214;
              const v4142 = stdlib.le(v834, v769);
              const v4143 = v4142 ? v774 : false;
              if (v4143) {
                sim_r.isHalt = false;
                }
              else {
                const v4144 = await (async () => {
                  sim_r.txns.push({
                    kind: 'remote',
                    obj: v704,
                    remote: ({
                      accs: [],
                      apps: [],
                      bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:178:37:application', stdlib.UInt_max, '0'),
                      boxes: [],
                      fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:178:37:application', stdlib.UInt_max, '0'),
                      toks: []
                      })
                    })
                  return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
                const v4145 = await txn1.getOutput('internal', 'v4144', ctc13, v4144);
                const v4146 = v4145[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:178:37:application', stdlib.UInt_max, '0')];
                const v4147 = stdlib.add(v1214, v4146);
                null;
                const v4149 = stdlib.gt(v775, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:190:25:decimal', stdlib.UInt_max, '0'));
                if (v4149) {
                  const v4150 = stdlib.safeAdd(v834, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
                  const v4178 = v782;
                  const v4179 = v4147;
                  const v4180 = stdlib.le(v834, v4150);
                  if (v4180) {
                    sim_r.isHalt = false;
                    }
                  else {
                    const v4182 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:221:41:application', stdlib.UInt_max, '0')];
                    const v4183 = v4182[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:221:41:application', stdlib.UInt_max, '0')];
                    sim_r.txns.push({
                      kind: 'from',
                      to: v772,
                      tok: v702
                      });
                    sim_r.txns.push({
                      kind: 'from',
                      to: v701,
                      tok: undefined /* Nothing */
                      });
                    null;
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: v702
                      })
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }}
                else {
                  const v4173 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:242:33:application', stdlib.UInt_max, '0')];
                  const v4174 = v4173[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:242:33:application', stdlib.UInt_max, '0')];
                  sim_r.txns.push({
                    kind: 'from',
                    to: v701,
                    tok: v702
                    });
                  sim_r.txns.push({
                    kind: 'from',
                    to: v772,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: v702
                    })
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }}}
            else {
              null;
              const v1222 = true;
              const v1223 = await txn1.getOutput('Bidder_optIn', 'v1222', ctc7, v1222);
              
              const v4186 = v771;
              const v4187 = v772;
              const v4188 = v773;
              const v4189 = v774;
              const v4190 = v775;
              const v4192 = v782;
              const v4193 = v1109;
              const v4194 = stdlib.le(v834, v769);
              const v4195 = v4194 ? v774 : false;
              if (v4195) {
                sim_r.isHalt = false;
                }
              else {
                const v4196 = await (async () => {
                  sim_r.txns.push({
                    kind: 'remote',
                    obj: v704,
                    remote: ({
                      accs: [],
                      apps: [],
                      bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:178:37:application', stdlib.UInt_max, '0'),
                      boxes: [],
                      fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:178:37:application', stdlib.UInt_max, '0'),
                      toks: []
                      })
                    })
                  return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
                const v4197 = await txn1.getOutput('internal', 'v4196', ctc13, v4196);
                const v4198 = v4197[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:178:37:application', stdlib.UInt_max, '0')];
                const v4199 = stdlib.add(v1109, v4198);
                null;
                const v4201 = stdlib.gt(v775, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:190:25:decimal', stdlib.UInt_max, '0'));
                if (v4201) {
                  const v4202 = stdlib.safeAdd(v834, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
                  const v4230 = v782;
                  const v4231 = v4199;
                  const v4232 = stdlib.le(v834, v4202);
                  if (v4232) {
                    sim_r.isHalt = false;
                    }
                  else {
                    const v4234 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:221:41:application', stdlib.UInt_max, '0')];
                    const v4235 = v4234[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:221:41:application', stdlib.UInt_max, '0')];
                    sim_r.txns.push({
                      kind: 'from',
                      to: v772,
                      tok: v702
                      });
                    sim_r.txns.push({
                      kind: 'from',
                      to: v701,
                      tok: undefined /* Nothing */
                      });
                    null;
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: v702
                      })
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }}
                else {
                  const v4225 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:242:33:application', stdlib.UInt_max, '0')];
                  const v4226 = v4225[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:242:33:application', stdlib.UInt_max, '0')];
                  sim_r.txns.push({
                    kind: 'from',
                    to: v701,
                    tok: v702
                    });
                  sim_r.txns.push({
                    kind: 'from',
                    to: v772,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: v702
                    })
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }}}}
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc3, ctc4, ctc0, ctc4, ctc2, ctc5, ctc4, ctc6, ctc0, ctc7, ctc7, ctc4, ctc9, ctc4, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v833], secs: v835, time: v834, didSend: v317, from: v832 } = txn1;
  switch (v833[0]) {
    case 'Auctioneer_stopAuction0_123': {
      const v836 = v833[1];
      return;
      break;
      }
    case 'Bidder_bid0_123': {
      const v967 = v833[1];
      return;
      break;
      }
    case 'Bidder_optIn0_123': {
      const v1098 = v833[1];
      undefined /* setApiDetails */;
      const v1109 = stdlib.add(v783, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:12:18:decimal', stdlib.UInt_max, '1000000'));
      ;
      const v1184 = stdlib.ge(v1109, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:149:83:application', stdlib.UInt_max, '900000'));
      if (v1184) {
        const v1188 = stdlib.sub(v1109, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:149:83:application', stdlib.UInt_max, '900000'));
        ;
        const v1190 = stdlib.ge(v1188, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:150:84:application', stdlib.UInt_max, '100000'));
        if (v1190) {
          const v1194 = stdlib.sub(v1188, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:150:84:application', stdlib.UInt_max, '100000'));
          ;
          null;
          const v1195 = true;
          const v1196 = await txn1.getOutput('Bidder_optIn', 'v1195', ctc7, v1195);
          if (v317) {
            stdlib.protect(ctc12, await interact.out(v1098, v1196), {
              at: './src/contracts/auction.rsh:145:31:application',
              fs: ['at ./src/contracts/auction.rsh:145:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:145:31:function exp)', 'at ./src/contracts/auction.rsh:154:55:application call to "notify" (defined at: ./src/contracts/auction.rsh:148:50:function exp)', 'at ./src/contracts/auction.rsh:148:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:148:50:function exp)'],
              msg: 'out',
              who: 'Bidder_optIn'
              });
            }
          else {
            }
          
          const v4030 = v771;
          const v4031 = v772;
          const v4032 = v773;
          const v4033 = v774;
          const v4034 = v775;
          const v4036 = v782;
          const v4037 = v1194;
          const v4038 = stdlib.le(v834, v769);
          const v4039 = v4038 ? v774 : false;
          if (v4039) {
            return;
            }
          else {
            const v4040 = undefined /* Remote */;
            const v4041 = await txn1.getOutput('internal', 'v4040', ctc13, v4040);
            const v4042 = v4041[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:178:37:application', stdlib.UInt_max, '0')];
            const v4043 = stdlib.add(v1194, v4042);
            const v4044 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4042);
            stdlib.assert(v4044, {
              at: './src/contracts/auction.rsh:178:37:application',
              fs: [],
              msg: 'remote bill check',
              who: 'Bidder_optIn'
              });
            null;
            const v4045 = stdlib.gt(v775, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:190:25:decimal', stdlib.UInt_max, '0'));
            if (v4045) {
              const v4046 = stdlib.safeAdd(v834, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
              const v4074 = v782;
              const v4075 = v4043;
              const v4076 = stdlib.le(v834, v4046);
              if (v4076) {
                return;
                }
              else {
                const v4078 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:221:41:application', stdlib.UInt_max, '0')];
                const v4079 = v4078[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:221:41:application', stdlib.UInt_max, '0')];
                ;
                ;
                null;
                return;
                }}
            else {
              const v4069 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:242:33:application', stdlib.UInt_max, '0')];
              const v4070 = v4069[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:242:33:application', stdlib.UInt_max, '0')];
              ;
              ;
              return;
              }}}
        else {
          null;
          const v1202 = true;
          const v1203 = await txn1.getOutput('Bidder_optIn', 'v1202', ctc7, v1202);
          if (v317) {
            stdlib.protect(ctc12, await interact.out(v1098, v1203), {
              at: './src/contracts/auction.rsh:145:31:application',
              fs: ['at ./src/contracts/auction.rsh:145:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:145:31:function exp)', 'at ./src/contracts/auction.rsh:154:55:application call to "notify" (defined at: ./src/contracts/auction.rsh:148:50:function exp)', 'at ./src/contracts/auction.rsh:148:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:148:50:function exp)'],
              msg: 'out',
              who: 'Bidder_optIn'
              });
            }
          else {
            }
          
          const v4082 = v771;
          const v4083 = v772;
          const v4084 = v773;
          const v4085 = v774;
          const v4086 = v775;
          const v4088 = v782;
          const v4089 = v1188;
          const v4090 = stdlib.le(v834, v769);
          const v4091 = v4090 ? v774 : false;
          if (v4091) {
            return;
            }
          else {
            const v4092 = undefined /* Remote */;
            const v4093 = await txn1.getOutput('internal', 'v4092', ctc13, v4092);
            const v4094 = v4093[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:178:37:application', stdlib.UInt_max, '0')];
            const v4095 = stdlib.add(v1188, v4094);
            const v4096 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4094);
            stdlib.assert(v4096, {
              at: './src/contracts/auction.rsh:178:37:application',
              fs: [],
              msg: 'remote bill check',
              who: 'Bidder_optIn'
              });
            null;
            const v4097 = stdlib.gt(v775, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:190:25:decimal', stdlib.UInt_max, '0'));
            if (v4097) {
              const v4098 = stdlib.safeAdd(v834, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
              const v4126 = v782;
              const v4127 = v4095;
              const v4128 = stdlib.le(v834, v4098);
              if (v4128) {
                return;
                }
              else {
                const v4130 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:221:41:application', stdlib.UInt_max, '0')];
                const v4131 = v4130[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:221:41:application', stdlib.UInt_max, '0')];
                ;
                ;
                null;
                return;
                }}
            else {
              const v4121 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:242:33:application', stdlib.UInt_max, '0')];
              const v4122 = v4121[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:242:33:application', stdlib.UInt_max, '0')];
              ;
              ;
              return;
              }}}}
      else {
        const v1210 = stdlib.ge(v1109, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:150:84:application', stdlib.UInt_max, '100000'));
        if (v1210) {
          const v1214 = stdlib.sub(v1109, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:150:84:application', stdlib.UInt_max, '100000'));
          ;
          null;
          const v1215 = true;
          const v1216 = await txn1.getOutput('Bidder_optIn', 'v1215', ctc7, v1215);
          if (v317) {
            stdlib.protect(ctc12, await interact.out(v1098, v1216), {
              at: './src/contracts/auction.rsh:145:31:application',
              fs: ['at ./src/contracts/auction.rsh:145:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:145:31:function exp)', 'at ./src/contracts/auction.rsh:154:55:application call to "notify" (defined at: ./src/contracts/auction.rsh:148:50:function exp)', 'at ./src/contracts/auction.rsh:148:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:148:50:function exp)'],
              msg: 'out',
              who: 'Bidder_optIn'
              });
            }
          else {
            }
          
          const v4134 = v771;
          const v4135 = v772;
          const v4136 = v773;
          const v4137 = v774;
          const v4138 = v775;
          const v4140 = v782;
          const v4141 = v1214;
          const v4142 = stdlib.le(v834, v769);
          const v4143 = v4142 ? v774 : false;
          if (v4143) {
            return;
            }
          else {
            const v4144 = undefined /* Remote */;
            const v4145 = await txn1.getOutput('internal', 'v4144', ctc13, v4144);
            const v4146 = v4145[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:178:37:application', stdlib.UInt_max, '0')];
            const v4147 = stdlib.add(v1214, v4146);
            const v4148 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4146);
            stdlib.assert(v4148, {
              at: './src/contracts/auction.rsh:178:37:application',
              fs: [],
              msg: 'remote bill check',
              who: 'Bidder_optIn'
              });
            null;
            const v4149 = stdlib.gt(v775, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:190:25:decimal', stdlib.UInt_max, '0'));
            if (v4149) {
              const v4150 = stdlib.safeAdd(v834, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
              const v4178 = v782;
              const v4179 = v4147;
              const v4180 = stdlib.le(v834, v4150);
              if (v4180) {
                return;
                }
              else {
                const v4182 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:221:41:application', stdlib.UInt_max, '0')];
                const v4183 = v4182[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:221:41:application', stdlib.UInt_max, '0')];
                ;
                ;
                null;
                return;
                }}
            else {
              const v4173 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:242:33:application', stdlib.UInt_max, '0')];
              const v4174 = v4173[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:242:33:application', stdlib.UInt_max, '0')];
              ;
              ;
              return;
              }}}
        else {
          null;
          const v1222 = true;
          const v1223 = await txn1.getOutput('Bidder_optIn', 'v1222', ctc7, v1222);
          if (v317) {
            stdlib.protect(ctc12, await interact.out(v1098, v1223), {
              at: './src/contracts/auction.rsh:145:31:application',
              fs: ['at ./src/contracts/auction.rsh:145:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:145:31:function exp)', 'at ./src/contracts/auction.rsh:154:55:application call to "notify" (defined at: ./src/contracts/auction.rsh:148:50:function exp)', 'at ./src/contracts/auction.rsh:148:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:148:50:function exp)'],
              msg: 'out',
              who: 'Bidder_optIn'
              });
            }
          else {
            }
          
          const v4186 = v771;
          const v4187 = v772;
          const v4188 = v773;
          const v4189 = v774;
          const v4190 = v775;
          const v4192 = v782;
          const v4193 = v1109;
          const v4194 = stdlib.le(v834, v769);
          const v4195 = v4194 ? v774 : false;
          if (v4195) {
            return;
            }
          else {
            const v4196 = undefined /* Remote */;
            const v4197 = await txn1.getOutput('internal', 'v4196', ctc13, v4196);
            const v4198 = v4197[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:178:37:application', stdlib.UInt_max, '0')];
            const v4199 = stdlib.add(v1109, v4198);
            const v4200 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4198);
            stdlib.assert(v4200, {
              at: './src/contracts/auction.rsh:178:37:application',
              fs: [],
              msg: 'remote bill check',
              who: 'Bidder_optIn'
              });
            null;
            const v4201 = stdlib.gt(v775, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:190:25:decimal', stdlib.UInt_max, '0'));
            if (v4201) {
              const v4202 = stdlib.safeAdd(v834, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
              const v4230 = v782;
              const v4231 = v4199;
              const v4232 = stdlib.le(v834, v4202);
              if (v4232) {
                return;
                }
              else {
                const v4234 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:221:41:application', stdlib.UInt_max, '0')];
                const v4235 = v4234[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:221:41:application', stdlib.UInt_max, '0')];
                ;
                ;
                null;
                return;
                }}
            else {
              const v4225 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:242:33:application', stdlib.UInt_max, '0')];
              const v4226 = v4225[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:242:33:application', stdlib.UInt_max, '0')];
              ;
              ;
              return;
              }}}}
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
  const ctc0 = stdlib.T_Contract;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '80'));
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Object({
    adminContract: ctc0,
    deadline: ctc1,
    description: ctc2,
    owner: ctc3,
    price: ctc1,
    title: ctc4,
    tokenId: ctc5
    });
  const ctc7 = stdlib.T_Object({
    deadline: ctc1,
    description: ctc2,
    owner: ctc3,
    price: ctc1,
    title: ctc4
    });
  const ctc8 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc9 = stdlib.T_Tuple([ctc1, ctc3]);
  const ctc10 = stdlib.T_Null;
  const ctc11 = stdlib.T_Tuple([ctc1, ctc10]);
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Tuple([ctc1]);
  const ctc14 = stdlib.T_Data({
    Auctioneer_stopAuction0_123: ctc12,
    Bidder_bid0_123: ctc13,
    Bidder_optIn0_123: ctc12
    });
  const ctc15 = stdlib.T_Struct([['id', ctc1], ['blockEnded', ctc1], ['lastBid', ctc1]]);
  const ctc16 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc17 = stdlib.T_Bool;
  const ctc18 = stdlib.T_Data({
    Auctioneer_acceptSale0_444: ctc12,
    Auctioneer_rejectSale0_444: ctc12
    });
  const ctc19 = stdlib.T_Tuple([ctc1, ctc1, ctc17]);
  const ctc20 = stdlib.T_Array(ctc19, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  
  const v678 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v679 = [v678];
  const v683 = stdlib.protect(ctc6, interact.getAuction, 'for Seller\'s interact field getAuction');
  const v684 = v683.adminContract;
  const v685 = v683.deadline;
  const v686 = v683.description;
  const v687 = v683.owner;
  const v688 = v683.price;
  const v689 = v683.title;
  const v690 = v683.tokenId;
  
  const v700 = {
    deadline: v685,
    description: v686,
    owner: v687,
    price: v688,
    title: v689
    };
  
  const txn1 = await (ctc.sendrecv({
    args: [v690, v700, v684],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:76:16:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5, ctc7, ctc0],
    pay: [stdlib.checkedBigNumberify('./src/contracts/auction.rsh:76:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v702, v703, v704], secs: v706, time: v705, didSend: v44, from: v701 } = txn1;
      
      const v707 = v679[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:76:16:dot', stdlib.UInt_max, '0')];
      const v708 = stdlib.Array_set(v707, '0', stdlib.checkedBigNumberify('./src/contracts/auction.rsh:76:16:dot', stdlib.UInt_max, '0'));
      const v709 = stdlib.Array_set(v679, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:76:16:dot', stdlib.UInt_max, '0'), v708);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v702
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc7, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v702, v703, v704], secs: v706, time: v705, didSend: v44, from: v701 } = txn1;
  const v707 = v679[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:76:16:dot', stdlib.UInt_max, '0')];
  const v708 = stdlib.Array_set(v707, '0', stdlib.checkedBigNumberify('./src/contracts/auction.rsh:76:16:dot', stdlib.UInt_max, '0'));
  const v709 = stdlib.Array_set(v679, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:76:16:dot', stdlib.UInt_max, '0'), v708);
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v701, v702, v703, v704, v709],
    evt_cnt: 0,
    funcNum: 1,
    lct: v705,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./src/contracts/auction.rsh:78:16:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:11:13:decimal', stdlib.UInt_max, '1'), v702]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v713, time: v712, didSend: v51, from: v711 } = txn2;
      
      ;
      const v714 = v709[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:78:16:dot', stdlib.UInt_max, '0')];
      const v715 = v714[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:78:16:dot', stdlib.UInt_max, '0')];
      const v716 = stdlib.add(v715, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:11:13:decimal', stdlib.UInt_max, '1'));
      const v718 = stdlib.Array_set(v714, '0', v716);
      const v719 = stdlib.Array_set(v709, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:78:16:dot', stdlib.UInt_max, '0'), v718);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:11:13:decimal', stdlib.UInt_max, '1'),
        kind: 'to',
        tok: v702
        });
      const v723 = [];
      const v724 = await (async () => {
        sim_r.txns.push({
          kind: 'remote',
          obj: v704,
          remote: ({
            accs: [],
            apps: [],
            bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:90:48:application', stdlib.UInt_max, '0'),
            boxes: [],
            fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:90:48:application', stdlib.UInt_max, '0'),
            toks: []
            })
          })
        return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc1.defaultValue /* simReturnVal */];})();
      const v725 = await txn2.getOutput('internal', 'v724', ctc8, v724);
      const v727 = v725[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:90:48:application', stdlib.UInt_max, '0')];
      const v728 = v725[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:90:48:application', stdlib.UInt_max, '1')];
      const v737 = await (async () => {
        sim_r.txns.push({
          kind: 'remote',
          obj: v704,
          remote: ({
            accs: [],
            apps: [],
            bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:91:68:application', stdlib.UInt_max, '0'),
            boxes: [],
            fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:91:68:application', stdlib.UInt_max, '0'),
            toks: []
            })
          })
        return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc3.defaultValue /* simReturnVal */];})();
      const v738 = await txn2.getOutput('internal', 'v737', ctc9, v737);
      const v740 = v738[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:91:68:application', stdlib.UInt_max, '0')];
      const v741 = v738[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:91:68:application', stdlib.UInt_max, '1')];
      const v745 = stdlib.add(v727, v740);
      const v747 = v712;
      const v748 = await ctc.getContractInfo();
      const v749 = v703.title;
      const v750 = v703.description;
      const v751 = v703.price;
      const v755 = {
        blockCreated: v712,
        contractInfo: v748,
        description: v750,
        id: v728,
        owner: v701,
        price: v751,
        title: v749,
        tokenId: v702
        };
      const v756 = await (async () => {
        sim_r.txns.push({
          kind: 'remote',
          obj: v704,
          remote: ({
            accs: [],
            apps: [],
            bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:107:39:application', stdlib.UInt_max, '0'),
            boxes: [],
            fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:107:39:application', stdlib.UInt_max, '0'),
            toks: []
            })
          })
        return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc10.defaultValue /* simReturnVal */];})();
      const v757 = await txn2.getOutput('internal', 'v756', ctc11, v756);
      const v759 = v757[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:107:39:application', stdlib.UInt_max, '0')];
      const v764 = stdlib.add(v745, v759);
      const v768 = v703.deadline;
      const v769 = stdlib.safeAdd(v712, v768);
      null;
      const v770 = {
        blockEnded: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        id: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        lastBid: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v771 = v770;
      const v772 = v701;
      const v773 = true;
      const v774 = true;
      const v775 = stdlib.checkedBigNumberify('./src/contracts/auction.rsh:117:25:decimal', stdlib.UInt_max, '0');
      const v776 = v712;
      const v782 = v719;
      const v783 = v764;
      
      if (await (async () => {
        const v792 = stdlib.le(v776, v769);
        const v793 = v792 ? v774 : false;
        
        return v793;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v1235 = await (async () => {
          sim_r.txns.push({
            kind: 'remote',
            obj: v704,
            remote: ({
              accs: [],
              apps: [],
              bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:178:37:application', stdlib.UInt_max, '0'),
              boxes: [],
              fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
              pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:178:37:application', stdlib.UInt_max, '0'),
              toks: []
              })
            })
          return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc10.defaultValue /* simReturnVal */];})();
        const v1236 = await txn3.getOutput('internal', 'v1235', ctc11, v1235);
        const v1238 = v1236[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:178:37:application', stdlib.UInt_max, '0')];
        const v1243 = stdlib.add(v783, v1238);
        null;
        const v1248 = stdlib.gt(v775, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:190:25:decimal', stdlib.UInt_max, '0'));
        if (v1248) {
          const v1250 = stdlib.safeAdd(v776, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
          const v1251 = true;
          const v1252 = true;
          const v1253 = v776;
          const v1259 = v782;
          const v1260 = v1243;
          
          if (await (async () => {
            const v1267 = stdlib.le(v1253, v1250);
            const v1268 = v1267 ? v1252 : false;
            
            return v1268;})()) {
            sim_r.isHalt = false;
            }
          else {
            if (v1251) {
              const v1339 = v1259[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:221:41:application', stdlib.UInt_max, '0')];
              const v1340 = v1339[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:221:41:application', stdlib.UInt_max, '0')];
              sim_r.txns.push({
                kind: 'from',
                to: v772,
                tok: v702
                });
              sim_r.txns.push({
                kind: 'from',
                to: v701,
                tok: undefined /* Nothing */
                });
              null;
              sim_r.txns.push({
                kind: 'halt',
                tok: v702
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }
            else {
              const v1361 = v1259[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:231:41:application', stdlib.UInt_max, '0')];
              const v1362 = v1361[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:231:41:application', stdlib.UInt_max, '0')];
              sim_r.txns.push({
                kind: 'from',
                to: v701,
                tok: v702
                });
              sim_r.txns.push({
                kind: 'from',
                to: v772,
                tok: undefined /* Nothing */
                });
              null;
              sim_r.txns.push({
                kind: 'halt',
                tok: v702
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}}
        else {
          const v1383 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:242:33:application', stdlib.UInt_max, '0')];
          const v1384 = v1383[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:242:33:application', stdlib.UInt_max, '0')];
          sim_r.txns.push({
            kind: 'from',
            to: v701,
            tok: v702
            });
          sim_r.txns.push({
            kind: 'from',
            to: v772,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v702
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
    tys: [ctc3, ctc5, ctc7, ctc0, ctc20],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v713, time: v712, didSend: v51, from: v711 } = txn2;
  ;
  const v714 = v709[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:78:16:dot', stdlib.UInt_max, '0')];
  const v715 = v714[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:78:16:dot', stdlib.UInt_max, '0')];
  const v716 = stdlib.add(v715, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:11:13:decimal', stdlib.UInt_max, '1'));
  const v718 = stdlib.Array_set(v714, '0', v716);
  const v719 = stdlib.Array_set(v709, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:78:16:dot', stdlib.UInt_max, '0'), v718);
  ;
  const v720 = stdlib.addressEq(v701, v711);
  stdlib.assert(v720, {
    at: './src/contracts/auction.rsh:78:16:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Seller'
    });
  const v723 = [];
  const v724 = undefined /* Remote */;
  const v725 = await txn2.getOutput('internal', 'v724', ctc8, v724);
  const v727 = v725[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:90:48:application', stdlib.UInt_max, '0')];
  const v728 = v725[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:90:48:application', stdlib.UInt_max, '1')];
  const v733 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v727);
  stdlib.assert(v733, {
    at: './src/contracts/auction.rsh:90:48:application',
    fs: [],
    msg: 'remote bill check',
    who: 'Seller'
    });
  const v737 = undefined /* Remote */;
  const v738 = await txn2.getOutput('internal', 'v737', ctc9, v737);
  const v740 = v738[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:91:68:application', stdlib.UInt_max, '0')];
  const v741 = v738[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:91:68:application', stdlib.UInt_max, '1')];
  const v745 = stdlib.add(v727, v740);
  const v746 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v740);
  stdlib.assert(v746, {
    at: './src/contracts/auction.rsh:91:68:application',
    fs: [],
    msg: 'remote bill check',
    who: 'Seller'
    });
  const v747 = v712;
  const v748 = await ctc.getContractInfo();
  const v749 = v703.title;
  const v750 = v703.description;
  const v751 = v703.price;
  const v755 = {
    blockCreated: v712,
    contractInfo: v748,
    description: v750,
    id: v728,
    owner: v701,
    price: v751,
    title: v749,
    tokenId: v702
    };
  const v756 = undefined /* Remote */;
  const v757 = await txn2.getOutput('internal', 'v756', ctc11, v756);
  const v759 = v757[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:107:39:application', stdlib.UInt_max, '0')];
  const v764 = stdlib.add(v745, v759);
  const v765 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v759);
  stdlib.assert(v765, {
    at: './src/contracts/auction.rsh:107:39:application',
    fs: [],
    msg: 'remote bill check',
    who: 'Seller'
    });
  const v768 = v703.deadline;
  const v769 = stdlib.safeAdd(v712, v768);
  null;
  const v770 = {
    blockEnded: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    id: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    lastBid: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  let v771 = v770;
  let v772 = v701;
  let v773 = true;
  let v774 = true;
  let v775 = stdlib.checkedBigNumberify('./src/contracts/auction.rsh:117:25:decimal', stdlib.UInt_max, '0');
  let v776 = v712;
  let v782 = v719;
  let v783 = v764;
  
  let txn3 = txn2;
  while (await (async () => {
    const v792 = stdlib.le(v776, v769);
    const v793 = v792 ? v774 : false;
    
    return v793;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 5,
      out_tys: [ctc14],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v833], secs: v835, time: v834, didSend: v317, from: v832 } = txn4;
    switch (v833[0]) {
      case 'Auctioneer_stopAuction0_123': {
        const v836 = v833[1];
        undefined /* setApiDetails */;
        ;
        null;
        const v850 = {
          blockEnded: v834,
          id: v728,
          lastBid: v775
          };
        await txn4.getOutput('Auctioneer_stopAuction', 'v850', ctc15, v850);
        const cv771 = v850;
        const cv772 = v772;
        const cv773 = v773;
        const cv774 = false;
        const cv775 = v775;
        const cv776 = v834;
        const cv782 = v782;
        const cv783 = v783;
        
        v771 = cv771;
        v772 = cv772;
        v773 = cv773;
        v774 = cv774;
        v775 = cv775;
        v776 = cv776;
        v782 = cv782;
        v783 = cv783;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'Bidder_bid0_123': {
        const v967 = v833[1];
        undefined /* setApiDetails */;
        const v973 = v967[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:131:30:spread', stdlib.UInt_max, '0')];
        const v974 = stdlib.gt(v973, v775);
        stdlib.assert(v974, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/auction.rsh:132:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/auction.rsh:131:49:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:131:49:function exp)', 'at ./src/contracts/auction.rsh:114:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:131:49:function exp)', 'at ./src/contracts/auction.rsh:114:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:114:31:function exp)'],
          msg: 'Your bid is too low, please try again',
          who: 'Seller'
          });
        const v978 = stdlib.add(v783, v973);
        ;
        if (v773) {
          const v1030 = undefined /* Remote */;
          const v1031 = await txn4.getOutput('internal', 'v1030', ctc11, v1030);
          const v1033 = v1031[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:138:91:application', stdlib.UInt_max, '0')];
          const v1038 = stdlib.add(v978, v1033);
          const v1039 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1033);
          stdlib.assert(v1039, {
            at: './src/contracts/auction.rsh:138:91:application',
            fs: ['at ./src/contracts/auction.rsh:135:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:135:50:function exp)'],
            msg: 'remote bill check',
            who: 'Seller'
            });
          null;
          const v1041 = [v832, v775];
          await txn4.getOutput('Bidder_bid', 'v1041', ctc16, v1041);
          const cv771 = v771;
          const cv772 = v832;
          const cv773 = false;
          const cv774 = v774;
          const cv775 = v973;
          const cv776 = v834;
          const cv782 = v782;
          const cv783 = v1038;
          
          v771 = cv771;
          v772 = cv772;
          v773 = cv773;
          v774 = cv774;
          v775 = cv775;
          v776 = cv776;
          v782 = cv782;
          v783 = cv783;
          
          txn3 = txn4;
          continue;}
        else {
          const v1002 = stdlib.sub(v978, v775);
          ;
          const v1006 = undefined /* Remote */;
          const v1007 = await txn4.getOutput('internal', 'v1006', ctc11, v1006);
          const v1009 = v1007[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:138:91:application', stdlib.UInt_max, '0')];
          const v1014 = stdlib.add(v1002, v1009);
          const v1015 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1009);
          stdlib.assert(v1015, {
            at: './src/contracts/auction.rsh:138:91:application',
            fs: ['at ./src/contracts/auction.rsh:135:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:135:50:function exp)'],
            msg: 'remote bill check',
            who: 'Seller'
            });
          null;
          const v1017 = [v832, v775];
          await txn4.getOutput('Bidder_bid', 'v1017', ctc16, v1017);
          const cv771 = v771;
          const cv772 = v832;
          const cv773 = false;
          const cv774 = v774;
          const cv775 = v973;
          const cv776 = v834;
          const cv782 = v782;
          const cv783 = v1014;
          
          v771 = cv771;
          v772 = cv772;
          v773 = cv773;
          v774 = cv774;
          v775 = cv775;
          v776 = cv776;
          v782 = cv782;
          v783 = cv783;
          
          txn3 = txn4;
          continue;}
        break;
        }
      case 'Bidder_optIn0_123': {
        const v1098 = v833[1];
        undefined /* setApiDetails */;
        const v1109 = stdlib.add(v783, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:12:18:decimal', stdlib.UInt_max, '1000000'));
        ;
        const v1184 = stdlib.ge(v1109, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:149:83:application', stdlib.UInt_max, '900000'));
        if (v1184) {
          const v1188 = stdlib.sub(v1109, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:149:83:application', stdlib.UInt_max, '900000'));
          ;
          const v1190 = stdlib.ge(v1188, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:150:84:application', stdlib.UInt_max, '100000'));
          if (v1190) {
            const v1194 = stdlib.sub(v1188, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:150:84:application', stdlib.UInt_max, '100000'));
            ;
            null;
            const v1195 = true;
            await txn4.getOutput('Bidder_optIn', 'v1195', ctc17, v1195);
            const cv771 = v771;
            const cv772 = v772;
            const cv773 = v773;
            const cv774 = v774;
            const cv775 = v775;
            const cv776 = v834;
            const cv782 = v782;
            const cv783 = v1194;
            
            v771 = cv771;
            v772 = cv772;
            v773 = cv773;
            v774 = cv774;
            v775 = cv775;
            v776 = cv776;
            v782 = cv782;
            v783 = cv783;
            
            txn3 = txn4;
            continue;}
          else {
            null;
            const v1202 = true;
            await txn4.getOutput('Bidder_optIn', 'v1202', ctc17, v1202);
            const cv771 = v771;
            const cv772 = v772;
            const cv773 = v773;
            const cv774 = v774;
            const cv775 = v775;
            const cv776 = v834;
            const cv782 = v782;
            const cv783 = v1188;
            
            v771 = cv771;
            v772 = cv772;
            v773 = cv773;
            v774 = cv774;
            v775 = cv775;
            v776 = cv776;
            v782 = cv782;
            v783 = cv783;
            
            txn3 = txn4;
            continue;}}
        else {
          const v1210 = stdlib.ge(v1109, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:150:84:application', stdlib.UInt_max, '100000'));
          if (v1210) {
            const v1214 = stdlib.sub(v1109, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:150:84:application', stdlib.UInt_max, '100000'));
            ;
            null;
            const v1215 = true;
            await txn4.getOutput('Bidder_optIn', 'v1215', ctc17, v1215);
            const cv771 = v771;
            const cv772 = v772;
            const cv773 = v773;
            const cv774 = v774;
            const cv775 = v775;
            const cv776 = v834;
            const cv782 = v782;
            const cv783 = v1214;
            
            v771 = cv771;
            v772 = cv772;
            v773 = cv773;
            v774 = cv774;
            v775 = cv775;
            v776 = cv776;
            v782 = cv782;
            v783 = cv783;
            
            txn3 = txn4;
            continue;}
          else {
            null;
            const v1222 = true;
            await txn4.getOutput('Bidder_optIn', 'v1222', ctc17, v1222);
            const cv771 = v771;
            const cv772 = v772;
            const cv773 = v773;
            const cv774 = v774;
            const cv775 = v775;
            const cv776 = v834;
            const cv782 = v782;
            const cv783 = v1109;
            
            v771 = cv771;
            v772 = cv772;
            v773 = cv773;
            v774 = cv774;
            v775 = cv775;
            v776 = cv776;
            v782 = cv782;
            v783 = cv783;
            
            txn3 = txn4;
            continue;}}
        break;
        }
      }
    
    }
  const v1235 = undefined /* Remote */;
  const v1236 = await txn3.getOutput('internal', 'v1235', ctc11, v1235);
  const v1238 = v1236[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:178:37:application', stdlib.UInt_max, '0')];
  const v1243 = stdlib.add(v783, v1238);
  const v1244 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1238);
  stdlib.assert(v1244, {
    at: './src/contracts/auction.rsh:178:37:application',
    fs: [],
    msg: 'remote bill check',
    who: 'Seller'
    });
  null;
  const v1248 = stdlib.gt(v775, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:190:25:decimal', stdlib.UInt_max, '0'));
  if (v1248) {
    const v1250 = stdlib.safeAdd(v776, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
    let v1251 = true;
    let v1252 = true;
    let v1253 = v776;
    let v1259 = v782;
    let v1260 = v1243;
    
    let txn4 = txn3;
    while (await (async () => {
      const v1267 = stdlib.le(v1253, v1250);
      const v1268 = v1267 ? v1252 : false;
      
      return v1268;})()) {
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc18],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v1292], secs: v1294, time: v1293, didSend: v569, from: v1291 } = txn5;
      switch (v1292[0]) {
        case 'Auctioneer_acceptSale0_444': {
          const v1295 = v1292[1];
          undefined /* setApiDetails */;
          ;
          const v1302 = true;
          await txn5.getOutput('Auctioneer_acceptSale', 'v1302', ctc17, v1302);
          const cv1251 = true;
          const cv1252 = false;
          const cv1253 = v1293;
          const cv1259 = v1259;
          const cv1260 = v1260;
          
          v1251 = cv1251;
          v1252 = cv1252;
          v1253 = cv1253;
          v1259 = cv1259;
          v1260 = cv1260;
          
          txn4 = txn5;
          continue;
          break;
          }
        case 'Auctioneer_rejectSale0_444': {
          const v1317 = v1292[1];
          undefined /* setApiDetails */;
          ;
          const v1332 = false;
          await txn5.getOutput('Auctioneer_rejectSale', 'v1332', ctc17, v1332);
          const cv1251 = false;
          const cv1252 = false;
          const cv1253 = v1293;
          const cv1259 = v1259;
          const cv1260 = v1260;
          
          v1251 = cv1251;
          v1252 = cv1252;
          v1253 = cv1253;
          v1259 = cv1259;
          v1260 = cv1260;
          
          txn4 = txn5;
          continue;
          break;
          }
        }
      
      }
    if (v1251) {
      const v1339 = v1259[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:221:41:application', stdlib.UInt_max, '0')];
      const v1340 = v1339[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:221:41:application', stdlib.UInt_max, '0')];
      ;
      ;
      null;
      return;
      }
    else {
      const v1361 = v1259[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:231:41:application', stdlib.UInt_max, '0')];
      const v1362 = v1361[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:231:41:application', stdlib.UInt_max, '0')];
      ;
      ;
      null;
      return;
      }}
  else {
    const v1383 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:242:33:application', stdlib.UInt_max, '0')];
    const v1384 = v1383[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:242:33:application', stdlib.UInt_max, '0')];
    ;
    ;
    return;
    }
  
  
  
  };
export async function Auctioneer_acceptSale(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Auctioneer_acceptSale expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Auctioneer_acceptSale expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 6) {return _Auctioneer_acceptSale6(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Auctioneer_rejectSale(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Auctioneer_rejectSale expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Auctioneer_rejectSale expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 6) {return _Auctioneer_rejectSale6(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Auctioneer_stopAuction(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Auctioneer_stopAuction expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Auctioneer_stopAuction expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 8) {return _Auctioneer_stopAuction8(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Bidder_bid(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bidder_bid expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bidder_bid expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 8) {return _Bidder_bid8(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Bidder_optIn(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bidder_optIn expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bidder_optIn expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 8) {return _Bidder_optIn8(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Auctioneer_acceptSale()byte`, `Auctioneer_rejectSale()byte`, `Auctioneer_stopAuction()(uint64,uint64,uint64)`, `Bidder_bid(uint64)(address,uint64)`, `Bidder_optIn()byte`, `_reachp_0((uint64,uint64,(uint64,byte[80],address,uint64,byte[20]),uint64))void`, `_reachp_1((uint64))void`, `_reachp_4((uint64,(byte,byte[0])))void`, `_reachp_5((uint64,(byte,byte[8])))void`],
    pure: [`live()byte`],
    sigs: [`Auctioneer_acceptSale()byte`, `Auctioneer_rejectSale()byte`, `Auctioneer_stopAuction()(uint64,uint64,uint64)`, `Bidder_bid(uint64)(address,uint64)`, `Bidder_optIn()byte`, `_reachp_0((uint64,uint64,(uint64,byte[80],address,uint64,byte[20]),uint64))void`, `_reachp_1((uint64))void`, `_reachp_4((uint64,(byte,byte[0])))void`, `_reachp_5((uint64,(byte,byte[8])))void`, `live()byte`]
    },
  GlobalNumByteSlice: 3,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCALAAEGCKCNBqD3NiARwIQ9BAUmBwAFYXBwSUQBAQTEa5ATAQAEB0BfPQTq9O6VMRhBBnIoZEkiWzUBSSVbNQKBEFs1BScEZCpkUIIKBAmahaAEEC8NoAQVUgOWBEljPe0EgRPbMwSpSSOBBNTJFx4E39kjKATndFxSBPE66oo2GgCOCgBLAIcAmgW0ADsGAwX4BeEAAQkpAIEJrzUPJDQBEkSICdg0DyJbNRA0D1cIATUSgAQvm07UNBAWUDQSULA0EIgJIzQSIlWNAgX6Bf1C/8WACQAAAAAAAAAAATUPQv+7IQevNQslNAESRIgJJTQLIls1DDQLVwgJNQ2ABO0TIQA0DBZQNA1QsDQMiAjZNA0iVY0DBbQFtwW6Qv95NhoBFzULJa8qNAsWUFA1C0L/toARAAAAAAAAAAACAAAAAAAAAAA1C0L/niM1D4AIAAAAAAAABRY0DxZRBwhQsDQPFlEHCDUEIyIyBjUNNSA1ITQNNA4ONCAQQQejNB80HhZQNBdQNBRQNBEWUDQOFlA0DFA0CxZQgVqvUCQyBjUCNQEnBEsBVwB/ZypMV39gZyg0ARY0AhZQNAUWUGcxGSISRIgI6TQDQAAKgAQVH3x1NARQsCNDIjUPgAgAAAAAAAAFNDQPFlEHCFCwNA8WUQcINQQiIjIGNQ01IDUhQv9xgAS4o0qLNBsWUDQRFlCwNBsWMgYWUDQRFlA1C4AIAAAAAAAAA1I0C1CwNAs1BDQLIjIGNRA1EjUVNBA0Fg40EhBBBesjNRI0HzQeFlA0HRZQNBxQNBsWUDQaUDQZFlA0GBZQNBdQNBYWUDQVUDQUUDQTFlEHCFA0EhZRBwhQNBEWUDQPUDQOFlAlMgZC/w80DSNbSTUgNBENRDQONCAINQ00IIgHUzQTQQQuKTQdFlADNQgyCng1CSgyCmA0CQkWNQqxIrIBJLIQNB2yGCcFsho0GxayGjEASbIcshqzMgpgNAkJNAoXCRa3AD5XBABQNQyACAAAAAAAAAQGNAxQsDQMSTULIls1DCI0DBJEJwY0GxZQNCAWUDEAUDQXULAxADQRFlA1C4AIAAAAAAAABBE0C1CwNAs1BDEAIjQgMgY0DTQMCDUONRA1ETUTNRRC/uc0DiEICDUMIQiIBps0DCEFD0EEJDQMIQUJNQshBTQaiAZpNAshBA9BBFEhBDQfiAZaKzQbFlAxAFCwIzUMgAgAAAAAAAAEqzQMFlEHCFCwNAwWUQcINQQyBjQLIQQJNQ41EEL+gjQBJQxBBfU0ASQSRIgGuCcENQQxGSISREL9+DEANR80CyJbNQw0CyVbNR40C1cQlDUiNAuBpAFbNR2ABGsfheY0DBZQNB4WUDQiUDQdFlCwNAyIBd0hB69JNQtJVwARJa9cAFwANSEhBIgGlyI0HjIKiAW6NB80HhZQNCJQNB0WUDQhUIEKr1AjMgZC/VkjNAESRElXACA1H0khBls1HklXKJQ1IkmBvAFbNR1XxBE1ITQLFzUMgATVFRkUNAwWULA0DIgFbDQhVwARNSAjNB4xFjQAIwhJNQAJRwM4FDIKEkQ4ECEJEkQ4EU8CEkQ4EhJENB8xABJEKDUcKTQdFlADNQgyCng1CSgyCmA0CQkWNQqxIrIBJLIQNB2yGIAEbe29gLIaszIKYDQJCTQKFwkWtwA+VwQAUDUMgAgAAAAAAAAC1DQMULA0DEk1CyJbNQ00CyVbNRsiNA0SRCk0HRZQAzUIMgp4NQkoMgpgNAkJFjUKsSKyASSyEDQdshiABGyt5G+yGrMyCmA0CQk0ChcJFrcAPlcEAFA1DIAIAAAAAAAAAuE0DFCwNAxJNQsiWzUMNAtXCCA1GiI0DBJEMgY1GTEYNRg0IleAFDUXKTQdFlADNQgyCng1CSgyCmA0CQkWNQqxIrIBJLIQNB2yGIAEdbqs6LIaNBsWNBgWUDIGFlA0H1A0F1A0IlcIUFA0Ild4CFA0HhZQshqzMgpgNAkJNAoXCRa3AD5XBABQNQuACAAAAAAAAAL0NAtQsDQLSTUWIls1CyI0CxJEMgY0IiJbCDUWgASPDzUGNBsWUDQfULCBGK80HyMjIjIGNCE0IEkiWyMIFlwAXAA0DTQMCDQLCDUONQ81EDURNRI1EzUUNRVC++2IA5KBwJoMiARksSKyASSyEIAGCDEAMgkSsh6AAQiyH7O0PTUFNhoBNQtC/VmIA2WxIrIBJLIQNAWyGLM2GgE1C0L9tYgDTjYaATUPQvoDiANDNhoBNQtC+kIiMTQSRIEDMTUSRCIxNhJEIjE3EkQiNQWIAyCB3wGvIiJC+tRC+n1C+wZC+y1C+7lC/Hk0ETQUiAL9KTQdFlADNQgyCng1CSgyCmA0CQkWNQqxIrIBJLIQNB2yGCcFsho0GxayGjEASbIcshqzMgpgNAkJNAoXCRa3AD5XBABQNQyACAAAAAAAAAPuNAxQsDQMSTULIls1DCI0DBJEJwY0GxZQNCAWUDEAUDQXULAxADQRFlA1C4AIAAAAAAAAA/k0C1CwNAs1BDEAIjQgMgY0DTQRCTQMCDUONRA1ETUTNRRC+q80DCEED0EAbCEENB+IAkQrNBsWUDEAULAjNQuACAAAAAAAAAS/NAsWUQcIULA0CxZRBwg1BDIGNAwhBAk1DjUQQvpsKzQbFlAxAFCwIzUMgAgAAAAAAAAEsjQMFlEHCFCwNAwWUQcINQQyBjQLNQ41EEL6Oys0GxZQMQBQsCM1C4AIAAAAAAAABMY0CxZRBwhQsDQLFlEHCDUEMgY0DDUONRBC+gopNB0WUAM1CDIKeDUJKDIKYDQJCRY1CrEisgEkshA0HbIYgAQUiXiusho0FbIaszIKYDQJCTQKFwkWtwA+VwQAUDUSgAgAAAAAAAAE0zQSULA0Ekk1EyJbNRI0DjQSCDUTIjQSEkSABHh+db40GxZQNBEWUDQfUDQYFlA0GRZQNBdQsDQRIg1BABw0EIEyCDUOIyM0EDQPNBM1CzUMNQ01IDUhQvicNA9XABEiWzQeNB+IAQI0EzQUiADzIjQeMgoyCYgA/zEZIQoSRLEisgEkshA0BbIYIQqyGbMhBDQHCDUHiAGaIjIKMgmIAaRC+KY0IUEAOjQMVwARIls0HjQUiACzNAs0H4gApIAE7qaZxDQXUDQRFlA0H1A0FFA0HhZQsCI0HjIKMgmIAJhC/5Y0DFcAESJbNB40H4gAeTQLNBSIAGqABKVPms00F1A0ERZQNB9QNBRQNB4WULAiNB4yCjIJiABeQv9cIrIBI7IQsgeyCLOJIrIBIQmyELIUshGyErOJNAElEkSIAFoqNQRC+glC+fNIiUwJSTUGMgmIAA2JCUlB/+5JNQaIAB2JsUL/tyM1A4mxQv+7SSISTDQCEhFEibGyFUL/qzEWNAAjCEk1AAlHAjgHMgoSRDgQIxJEOAgSRIlJVwAgNR9JIQZbNR5JgShbNR1JSCg1HEmBMFs1G0lXOCA1GkmBWFs1GUmBYFs1GElXaBQ1F0mBfFs1FklXhBg1FUlXnCA1FElXvAEXNRNJV70BFzUSSYG+AVs1EUlXxhE1D4HXAVs1DolJVwAgNR9JIQZbNR5JVygUNRdJVzwgNRRJgVxbNRFJgWRbNQ5JV2wRNQyBfVs1C4k0BjQHSg9B/w9C/xc0Bgg1BomxsglC/tI=`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `25`,
    1000: `557`,
    1001: `557`,
    1002: `558`,
    1003: `558`,
    1004: `559`,
    1005: `559`,
    1006: `559`,
    1007: `560`,
    1008: `561`,
    1009: `561`,
    101: `25`,
    1010: `562`,
    1011: `562`,
    1012: `562`,
    1013: `562`,
    1014: `562`,
    1015: `562`,
    1016: `563`,
    1017: `563`,
    1018: `564`,
    1019: `565`,
    102: `25`,
    1020: `566`,
    1021: `566`,
    1022: `567`,
    1023: `568`,
    1024: `569`,
    1025: `569`,
    1026: `570`,
    1027: `571`,
    1028: `571`,
    1029: `572`,
    103: `25`,
    1030: `573`,
    1031: `574`,
    1032: `576`,
    1033: `576`,
    1034: `577`,
    1035: `577`,
    1036: `577`,
    1037: `578`,
    1038: `578`,
    1039: `579`,
    104: `25`,
    1040: `580`,
    1041: `581`,
    1042: `581`,
    1043: `582`,
    1044: `583`,
    1045: `583`,
    1046: `583`,
    1047: `584`,
    1048: `585`,
    1049: `586`,
    105: `25`,
    1050: `586`,
    1051: `587`,
    1052: `587`,
    1053: `588`,
    1054: `588`,
    1055: `589`,
    1056: `589`,
    1057: `590`,
    1058: `590`,
    1059: `590`,
    106: `25`,
    1060: `591`,
    1061: `593`,
    1062: `593`,
    1063: `594`,
    1064: `594`,
    1065: `595`,
    1066: `595`,
    1067: `595`,
    1068: `597`,
    1069: `597`,
    107: `25`,
    1070: `598`,
    1071: `598`,
    1072: `599`,
    1073: `600`,
    1074: `601`,
    1075: `601`,
    1076: `602`,
    1077: `603`,
    1078: `603`,
    1079: `604`,
    108: `25`,
    1080: `605`,
    1081: `606`,
    1082: `606`,
    1083: `607`,
    1084: `608`,
    1085: `608`,
    1086: `609`,
    1087: `610`,
    1088: `611`,
    1089: `612`,
    109: `25`,
    1090: `612`,
    1091: `613`,
    1092: `613`,
    1093: `613`,
    1094: `616`,
    1095: `617`,
    1096: `617`,
    1097: `618`,
    1098: `619`,
    1099: `621`,
    11: `2`,
    110: `25`,
    1100: `622`,
    1101: `622`,
    1102: `622`,
    1103: `623`,
    1104: `623`,
    1105: `624`,
    1106: `625`,
    1107: `625`,
    1108: `626`,
    1109: `627`,
    111: `25`,
    1110: `627`,
    1111: `628`,
    1112: `629`,
    1113: `629`,
    1114: `629`,
    1115: `630`,
    1116: `630`,
    1117: `631`,
    1118: `632`,
    1119: `632`,
    112: `25`,
    1120: `632`,
    1121: `633`,
    1122: `634`,
    1123: `634`,
    1124: `635`,
    1125: `635`,
    1126: `635`,
    1127: `636`,
    1128: `636`,
    1129: `637`,
    113: `25`,
    1130: `637`,
    1131: `638`,
    1132: `639`,
    1133: `639`,
    1134: `640`,
    1135: `640`,
    1136: `640`,
    1137: `640`,
    1138: `640`,
    1139: `640`,
    114: `25`,
    1140: `641`,
    1141: `641`,
    1142: `642`,
    1143: `643`,
    1144: `644`,
    1145: `646`,
    1146: `646`,
    1147: `647`,
    1148: `647`,
    1149: `647`,
    115: `25`,
    1150: `648`,
    1151: `648`,
    1152: `649`,
    1153: `649`,
    1154: `649`,
    1155: `650`,
    1156: `650`,
    1157: `651`,
    1158: `652`,
    1159: `652`,
    116: `25`,
    1160: `655`,
    1161: `655`,
    1162: `656`,
    1163: `656`,
    1164: `657`,
    1165: `658`,
    1166: `659`,
    1167: `660`,
    1168: `660`,
    1169: `661`,
    117: `25`,
    1170: `662`,
    1171: `662`,
    1172: `663`,
    1173: `663`,
    1174: `664`,
    1175: `664`,
    1176: `665`,
    1177: `666`,
    1178: `667`,
    1179: `667`,
    118: `25`,
    1180: `668`,
    1181: `668`,
    1182: `669`,
    1183: `670`,
    1184: `671`,
    1185: `671`,
    1186: `672`,
    1187: `672`,
    1188: `673`,
    1189: `674`,
    119: `25`,
    1190: `675`,
    1191: `675`,
    1192: `676`,
    1193: `677`,
    1194: `680`,
    1195: `680`,
    1196: `681`,
    1197: `681`,
    1198: `682`,
    1199: `683`,
    12: `2`,
    120: `25`,
    1200: `686`,
    1201: `687`,
    1202: `687`,
    1203: `688`,
    1204: `689`,
    1205: `689`,
    1206: `690`,
    1207: `691`,
    1208: `692`,
    1209: `693`,
    121: `25`,
    1210: `693`,
    1211: `694`,
    1212: `694`,
    1213: `695`,
    1214: `696`,
    1215: `696`,
    1216: `697`,
    1217: `698`,
    1218: `698`,
    1219: `699`,
    122: `25`,
    1220: `700`,
    1221: `700`,
    1222: `701`,
    1223: `702`,
    1224: `703`,
    1225: `703`,
    1226: `704`,
    1227: `705`,
    1228: `706`,
    1229: `706`,
    123: `25`,
    1230: `707`,
    1231: `708`,
    1232: `708`,
    1233: `709`,
    1234: `709`,
    1235: `711`,
    1236: `711`,
    1237: `712`,
    1238: `712`,
    1239: `712`,
    124: `25`,
    1240: `712`,
    1241: `712`,
    1242: `712`,
    1243: `713`,
    1244: `713`,
    1245: `714`,
    1246: `717`,
    1247: `717`,
    1248: `718`,
    1249: `719`,
    125: `25`,
    1250: `719`,
    1251: `720`,
    1252: `721`,
    1253: `721`,
    1254: `722`,
    1255: `723`,
    1256: `724`,
    1257: `725`,
    1258: `725`,
    1259: `725`,
    126: `25`,
    1260: `726`,
    1261: `726`,
    1262: `726`,
    1263: `727`,
    1264: `728`,
    1265: `728`,
    1266: `729`,
    1267: `729`,
    1268: `729`,
    1269: `729`,
    127: `25`,
    1270: `729`,
    1271: `729`,
    1272: `729`,
    1273: `729`,
    1274: `729`,
    1275: `729`,
    1276: `730`,
    1277: `730`,
    1278: `731`,
    1279: `732`,
    128: `26`,
    1280: `733`,
    1281: `733`,
    1282: `734`,
    1283: `735`,
    1284: `735`,
    1285: `736`,
    1286: `737`,
    1287: `738`,
    1288: `738`,
    1289: `739`,
    129: `26`,
    1290: `739`,
    1291: `740`,
    1292: `741`,
    1293: `742`,
    1294: `742`,
    1295: `743`,
    1296: `744`,
    1297: `744`,
    1298: `745`,
    1299: `746`,
    13: `2`,
    130: `26`,
    1300: `749`,
    1301: `750`,
    1302: `750`,
    1303: `751`,
    1304: `752`,
    1305: `753`,
    1306: `754`,
    1307: `754`,
    1308: `755`,
    1309: `755`,
    131: `27`,
    1310: `756`,
    1311: `757`,
    1312: `757`,
    1313: `758`,
    1314: `759`,
    1315: `759`,
    1316: `760`,
    1317: `761`,
    1318: `761`,
    1319: `762`,
    132: `27`,
    1320: `763`,
    1321: `764`,
    1322: `764`,
    1323: `765`,
    1324: `766`,
    1325: `767`,
    1326: `767`,
    1327: `768`,
    1328: `769`,
    1329: `769`,
    133: `27`,
    1330: `770`,
    1331: `770`,
    1332: `771`,
    1333: `771`,
    1334: `772`,
    1335: `772`,
    1336: `772`,
    1337: `772`,
    1338: `772`,
    1339: `772`,
    134: `27`,
    1340: `773`,
    1341: `773`,
    1342: `774`,
    1343: `777`,
    1344: `777`,
    1345: `778`,
    1346: `779`,
    1347: `779`,
    1348: `780`,
    1349: `781`,
    135: `27`,
    1350: `781`,
    1351: `782`,
    1352: `783`,
    1353: `784`,
    1354: `785`,
    1355: `785`,
    1356: `785`,
    1357: `786`,
    1358: `786`,
    1359: `786`,
    136: `27`,
    1360: `787`,
    1361: `788`,
    1362: `788`,
    1363: `789`,
    1364: `789`,
    1365: `789`,
    1366: `789`,
    1367: `789`,
    1368: `789`,
    1369: `789`,
    137: `27`,
    1370: `789`,
    1371: `789`,
    1372: `789`,
    1373: `790`,
    1374: `790`,
    1375: `791`,
    1376: `792`,
    1377: `793`,
    1378: `793`,
    1379: `794`,
    138: `27`,
    1380: `795`,
    1381: `795`,
    1382: `796`,
    1383: `797`,
    1384: `798`,
    1385: `798`,
    1386: `799`,
    1387: `799`,
    1388: `800`,
    1389: `800`,
    139: `27`,
    1390: `800`,
    1391: `801`,
    1392: `801`,
    1393: `802`,
    1394: `803`,
    1395: `803`,
    1396: `804`,
    1397: `805`,
    1398: `808`,
    1399: `808`,
    14: `2`,
    140: `27`,
    1400: `809`,
    1401: `809`,
    1402: `810`,
    1403: `810`,
    1404: `811`,
    1405: `811`,
    1406: `812`,
    1407: `812`,
    1408: `813`,
    1409: `813`,
    141: `27`,
    1410: `813`,
    1411: `814`,
    1412: `814`,
    1413: `815`,
    1414: `816`,
    1415: `816`,
    1416: `817`,
    1417: `818`,
    1418: `819`,
    1419: `820`,
    142: `27`,
    1420: `820`,
    1421: `821`,
    1422: `821`,
    1423: `822`,
    1424: `823`,
    1425: `823`,
    1426: `824`,
    1427: `825`,
    1428: `825`,
    1429: `826`,
    143: `27`,
    1430: `827`,
    1431: `827`,
    1432: `828`,
    1433: `829`,
    1434: `830`,
    1435: `830`,
    1436: `831`,
    1437: `832`,
    1438: `833`,
    1439: `833`,
    144: `27`,
    1440: `834`,
    1441: `835`,
    1442: `835`,
    1443: `836`,
    1444: `836`,
    1445: `837`,
    1446: `837`,
    1447: `838`,
    1448: `838`,
    1449: `838`,
    145: `27`,
    1450: `838`,
    1451: `838`,
    1452: `838`,
    1453: `839`,
    1454: `839`,
    1455: `840`,
    1456: `840`,
    1457: `841`,
    1458: `842`,
    1459: `842`,
    146: `27`,
    1460: `843`,
    1461: `844`,
    1462: `845`,
    1463: `845`,
    1464: `846`,
    1465: `847`,
    1466: `848`,
    1467: `848`,
    1468: `849`,
    1469: `850`,
    147: `27`,
    1470: `850`,
    1471: `851`,
    1472: `852`,
    1473: `852`,
    1474: `853`,
    1475: `853`,
    1476: `853`,
    1477: `854`,
    1478: `855`,
    1479: `855`,
    148: `27`,
    1480: `856`,
    1481: `856`,
    1482: `856`,
    1483: `857`,
    1484: `858`,
    1485: `858`,
    1486: `859`,
    1487: `860`,
    1488: `861`,
    1489: `861`,
    149: `27`,
    1490: `862`,
    1491: `865`,
    1492: `865`,
    1493: `866`,
    1494: `867`,
    1495: `867`,
    1496: `868`,
    1497: `869`,
    1498: `869`,
    1499: `870`,
    15: `2`,
    150: `27`,
    1500: `871`,
    1501: `872`,
    1502: `873`,
    1503: `873`,
    1504: `873`,
    1505: `874`,
    1506: `874`,
    1507: `874`,
    1508: `875`,
    1509: `876`,
    151: `27`,
    1510: `876`,
    1511: `877`,
    1512: `877`,
    1513: `877`,
    1514: `877`,
    1515: `877`,
    1516: `877`,
    1517: `877`,
    1518: `877`,
    1519: `877`,
    152: `27`,
    1520: `877`,
    1521: `878`,
    1522: `878`,
    1523: `879`,
    1524: `880`,
    1525: `881`,
    1526: `881`,
    1527: `882`,
    1528: `883`,
    1529: `883`,
    153: `29`,
    1530: `884`,
    1531: `885`,
    1532: `886`,
    1533: `886`,
    1534: `887`,
    1535: `888`,
    1536: `888`,
    1537: `889`,
    1538: `890`,
    1539: `893`,
    154: `34`,
    1540: `893`,
    1541: `894`,
    1542: `894`,
    1543: `895`,
    1544: `896`,
    1545: `897`,
    1546: `898`,
    1547: `898`,
    1548: `899`,
    1549: `899`,
    155: `34`,
    1550: `899`,
    1551: `899`,
    1552: `899`,
    1553: `899`,
    1554: `900`,
    1555: `900`,
    1556: `901`,
    1557: `902`,
    1558: `903`,
    1559: `903`,
    156: `35`,
    1560: `904`,
    1561: `905`,
    1562: `907`,
    1563: `907`,
    1564: `908`,
    1565: `909`,
    1566: `909`,
    1567: `910`,
    1568: `911`,
    1569: `912`,
    157: `36`,
    1570: `913`,
    1571: `913`,
    1572: `914`,
    1573: `914`,
    1574: `915`,
    1575: `915`,
    1576: `916`,
    1577: `917`,
    1578: `918`,
    1579: `919`,
    158: `36`,
    1580: `920`,
    1581: `921`,
    1582: `922`,
    1583: `922`,
    1584: `923`,
    1585: `923`,
    1586: `924`,
    1587: `924`,
    1588: `925`,
    1589: `925`,
    159: `39`,
    1590: `926`,
    1591: `927`,
    1592: `927`,
    1593: `928`,
    1594: `929`,
    1595: `929`,
    1596: `930`,
    1597: `930`,
    1598: `931`,
    1599: `931`,
    16: `2`,
    160: `40`,
    1600: `932`,
    1601: `932`,
    1602: `933`,
    1603: `933`,
    1604: `934`,
    1605: `934`,
    1606: `935`,
    1607: `935`,
    1608: `936`,
    1609: `936`,
    161: `40`,
    1610: `937`,
    1611: `937`,
    1612: `937`,
    1613: `939`,
    1614: `939`,
    1615: `939`,
    1616: `940`,
    1617: `940`,
    1618: `940`,
    1619: `940`,
    162: `41`,
    1620: `941`,
    1621: `941`,
    1622: `941`,
    1623: `943`,
    1624: `944`,
    1625: `945`,
    1626: `945`,
    1627: `946`,
    1628: `947`,
    1629: `947`,
    163: `42`,
    1630: `949`,
    1631: `949`,
    1632: `949`,
    1633: `949`,
    1634: `949`,
    1635: `949`,
    1636: `949`,
    1637: `949`,
    1638: `950`,
    1639: `950`,
    164: `43`,
    1640: `951`,
    1641: `951`,
    1642: `951`,
    1643: `952`,
    1644: `952`,
    1645: `953`,
    1646: `955`,
    1647: `955`,
    1648: `956`,
    1649: `956`,
    165: `43`,
    1650: `958`,
    1651: `958`,
    1652: `958`,
    1653: `959`,
    1654: `959`,
    1655: `960`,
    1656: `960`,
    1657: `960`,
    1658: `962`,
    1659: `962`,
    166: `43`,
    1660: `962`,
    1661: `965`,
    1662: `966`,
    1663: `967`,
    1664: `967`,
    1665: `968`,
    1666: `969`,
    1667: `969`,
    1668: `970`,
    1669: `970`,
    167: `44`,
    1670: `971`,
    1671: `971`,
    1672: `972`,
    1673: `974`,
    1674: `974`,
    1675: `974`,
    1676: `975`,
    1677: `975`,
    1678: `976`,
    1679: `976`,
    168: `44`,
    1680: `976`,
    1681: `978`,
    1682: `978`,
    1683: `978`,
    1684: `980`,
    1685: `980`,
    1686: `980`,
    1687: `981`,
    1688: `981`,
    1689: `982`,
    169: `45`,
    1690: `982`,
    1691: `982`,
    1692: `984`,
    1693: `984`,
    1694: `984`,
    1695: `986`,
    1696: `986`,
    1697: `986`,
    1698: `987`,
    1699: `987`,
    17: `2`,
    170: `46`,
    1700: `988`,
    1701: `988`,
    1702: `988`,
    1703: `990`,
    1704: `991`,
    1705: `991`,
    1706: `992`,
    1707: `993`,
    1708: `994`,
    1709: `994`,
    171: `47`,
    1710: `995`,
    1711: `995`,
    1712: `996`,
    1713: `997`,
    1714: `998`,
    1715: `999`,
    1716: `999`,
    1717: `1000`,
    1718: `1001`,
    1719: `1002`,
    172: `47`,
    1720: `1003`,
    1721: `1003`,
    1722: `1004`,
    1723: `1005`,
    1724: `1006`,
    1725: `1007`,
    1726: `1007`,
    1727: `1008`,
    1728: `1008`,
    1729: `1008`,
    173: `48`,
    1730: `1009`,
    1731: `1009`,
    1732: `1009`,
    1733: `1010`,
    1734: `1011`,
    1735: `1012`,
    1736: `1013`,
    1737: `1013`,
    1738: `1013`,
    1739: `1015`,
    174: `48`,
    1740: `1015`,
    1741: `1015`,
    1742: `1017`,
    1743: `1017`,
    1744: `1017`,
    1745: `1019`,
    1746: `1019`,
    1747: `1019`,
    1748: `1021`,
    1749: `1021`,
    175: `49`,
    1750: `1021`,
    1751: `1023`,
    1752: `1023`,
    1753: `1023`,
    1754: `1025`,
    1755: `1025`,
    1756: `1027`,
    1757: `1027`,
    1758: `1028`,
    1759: `1028`,
    176: `49`,
    1760: `1028`,
    1761: `1029`,
    1762: `1030`,
    1763: `1030`,
    1764: `1031`,
    1765: `1032`,
    1766: `1033`,
    1767: `1034`,
    1768: `1034`,
    1769: `1035`,
    177: `49`,
    1770: `1035`,
    1771: `1036`,
    1772: `1037`,
    1773: `1037`,
    1774: `1038`,
    1775: `1039`,
    1776: `1039`,
    1777: `1040`,
    1778: `1041`,
    1779: `1041`,
    178: `50`,
    1780: `1042`,
    1781: `1043`,
    1782: `1044`,
    1783: `1044`,
    1784: `1045`,
    1785: `1046`,
    1786: `1047`,
    1787: `1047`,
    1788: `1048`,
    1789: `1049`,
    179: `50`,
    1790: `1049`,
    1791: `1050`,
    1792: `1050`,
    1793: `1052`,
    1794: `1052`,
    1795: `1053`,
    1796: `1053`,
    1797: `1054`,
    1798: `1054`,
    1799: `1055`,
    18: `2`,
    180: `51`,
    1800: `1055`,
    1801: `1056`,
    1802: `1057`,
    1803: `1057`,
    1804: `1058`,
    1805: `1058`,
    1806: `1059`,
    1807: `1060`,
    1808: `1060`,
    1809: `1061`,
    181: `51`,
    1810: `1061`,
    1811: `1062`,
    1812: `1066`,
    1813: `1066`,
    1814: `1067`,
    1815: `1068`,
    1816: `1068`,
    1817: `1069`,
    1818: `1070`,
    1819: `1070`,
    182: `51`,
    1820: `1071`,
    1821: `1072`,
    1822: `1073`,
    1823: `1074`,
    1824: `1074`,
    1825: `1074`,
    1826: `1075`,
    1827: `1075`,
    1828: `1075`,
    1829: `1076`,
    183: `51`,
    1830: `1077`,
    1831: `1077`,
    1832: `1078`,
    1833: `1078`,
    1834: `1078`,
    1835: `1078`,
    1836: `1078`,
    1837: `1078`,
    1838: `1078`,
    1839: `1078`,
    184: `51`,
    1840: `1078`,
    1841: `1078`,
    1842: `1079`,
    1843: `1079`,
    1844: `1080`,
    1845: `1081`,
    1846: `1082`,
    1847: `1082`,
    1848: `1083`,
    1849: `1084`,
    185: `51`,
    1850: `1084`,
    1851: `1085`,
    1852: `1086`,
    1853: `1087`,
    1854: `1087`,
    1855: `1088`,
    1856: `1089`,
    1857: `1089`,
    1858: `1090`,
    1859: `1091`,
    186: `52`,
    1860: `1095`,
    1861: `1095`,
    1862: `1096`,
    1863: `1096`,
    1864: `1097`,
    1865: `1098`,
    1866: `1099`,
    1867: `1099`,
    1868: `1100`,
    1869: `1101`,
    187: `52`,
    1870: `1102`,
    1871: `1102`,
    1872: `1103`,
    1873: `1104`,
    1874: `1104`,
    1875: `1105`,
    1876: `1106`,
    1877: `1108`,
    1878: `1108`,
    1879: `1109`,
    188: `53`,
    1880: `1109`,
    1881: `1110`,
    1882: `1111`,
    1883: `1112`,
    1884: `1112`,
    1885: `1113`,
    1886: `1113`,
    1887: `1113`,
    1888: `1113`,
    1889: `1113`,
    189: `54`,
    1890: `1113`,
    1891: `1113`,
    1892: `1113`,
    1893: `1113`,
    1894: `1113`,
    1895: `1114`,
    1896: `1114`,
    1897: `1115`,
    1898: `1116`,
    1899: `1117`,
    19: `2`,
    190: `55`,
    1900: `1117`,
    1901: `1118`,
    1902: `1118`,
    1903: `1119`,
    1904: `1119`,
    1905: `1120`,
    1906: `1121`,
    1907: `1121`,
    1908: `1122`,
    1909: `1122`,
    191: `55`,
    1910: `1123`,
    1911: `1123`,
    1912: `1124`,
    1913: `1124`,
    1914: `1125`,
    1915: `1126`,
    1916: `1126`,
    1917: `1127`,
    1918: `1128`,
    1919: `1128`,
    192: `56`,
    1920: `1129`,
    1921: `1129`,
    1922: `1130`,
    1923: `1130`,
    1924: `1131`,
    1925: `1131`,
    1926: `1132`,
    1927: `1132`,
    1928: `1133`,
    1929: `1133`,
    193: `57`,
    1930: `1133`,
    1931: `1135`,
    1932: `1135`,
    1933: `1136`,
    1934: `1136`,
    1935: `1137`,
    1936: `1138`,
    1937: `1138`,
    1938: `1138`,
    1939: `1139`,
    194: `59`,
    1940: `1139`,
    1941: `1141`,
    1942: `1141`,
    1943: `1142`,
    1944: `1142`,
    1945: `1142`,
    1946: `1143`,
    1947: `1144`,
    1948: `1144`,
    1949: `1145`,
    195: `59`,
    1950: `1146`,
    1951: `1147`,
    1952: `1147`,
    1953: `1148`,
    1954: `1149`,
    1955: `1151`,
    1956: `1152`,
    1957: `1152`,
    1958: `1153`,
    1959: `1153`,
    196: `60`,
    1960: `1153`,
    1961: `1153`,
    1962: `1153`,
    1963: `1153`,
    1964: `1153`,
    1965: `1153`,
    1966: `1153`,
    1967: `1153`,
    1968: `1154`,
    1969: `1154`,
    197: `60`,
    1970: `1155`,
    1971: `1156`,
    1972: `1156`,
    1973: `1156`,
    1974: `1157`,
    1975: `1158`,
    1976: `1159`,
    1977: `1159`,
    1978: `1160`,
    1979: `1161`,
    198: `60`,
    1980: `1161`,
    1981: `1161`,
    1982: `1162`,
    1983: `1162`,
    1984: `1163`,
    1985: `1163`,
    1986: `1164`,
    1987: `1164`,
    1988: `1165`,
    1989: `1165`,
    199: `61`,
    1990: `1166`,
    1991: `1167`,
    1992: `1167`,
    1993: `1168`,
    1994: `1168`,
    1995: `1169`,
    1996: `1169`,
    1997: `1169`,
    1998: `1171`,
    1999: `1172`,
    2: `2`,
    20: `2`,
    200: `61`,
    2000: `1172`,
    2001: `1173`,
    2002: `1174`,
    2003: `1175`,
    2004: `1175`,
    2005: `1176`,
    2006: `1177`,
    2007: `1179`,
    2008: `1180`,
    2009: `1180`,
    201: `62`,
    2010: `1181`,
    2011: `1181`,
    2012: `1181`,
    2013: `1181`,
    2014: `1181`,
    2015: `1181`,
    2016: `1181`,
    2017: `1181`,
    2018: `1181`,
    2019: `1181`,
    202: `63`,
    2020: `1182`,
    2021: `1182`,
    2022: `1183`,
    2023: `1184`,
    2024: `1184`,
    2025: `1184`,
    2026: `1185`,
    2027: `1186`,
    2028: `1187`,
    2029: `1187`,
    203: `64`,
    2030: `1188`,
    2031: `1189`,
    2032: `1189`,
    2033: `1189`,
    2034: `1190`,
    2035: `1190`,
    2036: `1191`,
    2037: `1191`,
    2038: `1192`,
    2039: `1192`,
    204: `64`,
    2040: `1193`,
    2041: `1193`,
    2042: `1194`,
    2043: `1194`,
    2044: `1195`,
    2045: `1195`,
    2046: `1195`,
    2047: `1197`,
    2048: `1198`,
    2049: `1198`,
    205: `64`,
    2050: `1199`,
    2051: `1200`,
    2052: `1201`,
    2053: `1201`,
    2054: `1202`,
    2055: `1203`,
    2056: `1205`,
    2057: `1206`,
    2058: `1206`,
    2059: `1207`,
    206: `64`,
    2060: `1207`,
    2061: `1207`,
    2062: `1207`,
    2063: `1207`,
    2064: `1207`,
    2065: `1207`,
    2066: `1207`,
    2067: `1207`,
    2068: `1207`,
    2069: `1208`,
    207: `64`,
    2070: `1208`,
    2071: `1209`,
    2072: `1210`,
    2073: `1210`,
    2074: `1210`,
    2075: `1211`,
    2076: `1212`,
    2077: `1213`,
    2078: `1213`,
    2079: `1214`,
    208: `64`,
    2080: `1215`,
    2081: `1215`,
    2082: `1215`,
    2083: `1216`,
    2084: `1216`,
    2085: `1217`,
    2086: `1217`,
    2087: `1218`,
    2088: `1218`,
    2089: `1219`,
    209: `65`,
    2090: `1219`,
    2091: `1220`,
    2092: `1220`,
    2093: `1221`,
    2094: `1221`,
    2095: `1221`,
    2096: `1223`,
    2097: `1224`,
    2098: `1224`,
    2099: `1225`,
    21: `2`,
    210: `65`,
    2100: `1226`,
    2101: `1227`,
    2102: `1228`,
    2103: `1228`,
    2104: `1229`,
    2105: `1229`,
    2106: `1230`,
    2107: `1231`,
    2108: `1231`,
    2109: `1232`,
    211: `65`,
    2110: `1233`,
    2111: `1233`,
    2112: `1234`,
    2113: `1235`,
    2114: `1235`,
    2115: `1236`,
    2116: `1237`,
    2117: `1238`,
    2118: `1238`,
    2119: `1239`,
    212: `70`,
    2120: `1240`,
    2121: `1241`,
    2122: `1241`,
    2123: `1242`,
    2124: `1243`,
    2125: `1243`,
    2126: `1244`,
    2127: `1244`,
    2128: `1246`,
    2129: `1246`,
    213: `70`,
    2130: `1247`,
    2131: `1247`,
    2132: `1247`,
    2133: `1247`,
    2134: `1247`,
    2135: `1247`,
    2136: `1248`,
    2137: `1248`,
    2138: `1249`,
    2139: `1249`,
    214: `70`,
    2140: `1250`,
    2141: `1250`,
    2142: `1251`,
    2143: `1254`,
    2144: `1254`,
    2145: `1255`,
    2146: `1256`,
    2147: `1256`,
    2148: `1257`,
    2149: `1258`,
    215: `70`,
    2150: `1258`,
    2151: `1259`,
    2152: `1260`,
    2153: `1261`,
    2154: `1262`,
    2155: `1262`,
    2156: `1262`,
    2157: `1263`,
    2158: `1263`,
    2159: `1263`,
    216: `70`,
    2160: `1264`,
    2161: `1265`,
    2162: `1265`,
    2163: `1266`,
    2164: `1266`,
    2165: `1266`,
    2166: `1266`,
    2167: `1266`,
    2168: `1266`,
    2169: `1266`,
    217: `70`,
    2170: `1266`,
    2171: `1266`,
    2172: `1266`,
    2173: `1267`,
    2174: `1267`,
    2175: `1268`,
    2176: `1269`,
    2177: `1270`,
    2178: `1270`,
    2179: `1271`,
    218: `70`,
    2180: `1272`,
    2181: `1272`,
    2182: `1273`,
    2183: `1274`,
    2184: `1275`,
    2185: `1275`,
    2186: `1276`,
    2187: `1276`,
    2188: `1277`,
    2189: `1277`,
    219: `70`,
    2190: `1278`,
    2191: `1279`,
    2192: `1279`,
    2193: `1280`,
    2194: `1281`,
    2195: `1281`,
    2196: `1282`,
    2197: `1283`,
    2198: `1286`,
    2199: `1286`,
    22: `2`,
    220: `70`,
    2200: `1286`,
    2201: `1286`,
    2202: `1286`,
    2203: `1286`,
    2204: `1287`,
    2205: `1287`,
    2206: `1288`,
    2207: `1289`,
    2208: `1290`,
    2209: `1290`,
    221: `70`,
    2210: `1291`,
    2211: `1292`,
    2212: `1293`,
    2213: `1293`,
    2214: `1294`,
    2215: `1295`,
    2216: `1295`,
    2217: `1296`,
    2218: `1297`,
    2219: `1298`,
    222: `70`,
    2220: `1298`,
    2221: `1299`,
    2222: `1300`,
    2223: `1301`,
    2224: `1301`,
    2225: `1302`,
    2226: `1303`,
    2227: `1305`,
    2228: `1305`,
    2229: `1306`,
    223: `71`,
    2230: `1307`,
    2231: `1308`,
    2232: `1308`,
    2233: `1308`,
    2234: `1309`,
    2235: `1309`,
    2236: `1310`,
    2237: `1310`,
    2238: `1311`,
    2239: `1312`,
    224: `71`,
    2240: `1312`,
    2241: `1313`,
    2242: `1314`,
    2243: `1315`,
    2244: `1315`,
    2245: `1316`,
    2246: `1316`,
    2247: `1317`,
    2248: `1317`,
    2249: `1318`,
    225: `72`,
    2250: `1318`,
    2251: `1319`,
    2252: `1319`,
    2253: `1320`,
    2254: `1320`,
    2255: `1321`,
    2256: `1321`,
    2257: `1322`,
    2258: `1322`,
    2259: `1323`,
    226: `72`,
    2260: `1323`,
    2261: `1323`,
    2262: `1325`,
    2263: `1325`,
    2264: `1326`,
    2265: `1326`,
    2266: `1326`,
    2267: `1327`,
    2268: `1328`,
    2269: `1330`,
    227: `72`,
    2270: `1330`,
    2271: `1332`,
    2272: `1332`,
    2273: `1333`,
    2274: `1333`,
    2275: `1333`,
    2276: `1334`,
    2277: `1334`,
    2278: `1336`,
    2279: `1336`,
    228: `77`,
    2280: `1337`,
    2281: `1337`,
    2282: `1337`,
    2283: `1339`,
    2284: `1340`,
    2285: `1340`,
    2286: `1341`,
    2287: `1341`,
    2288: `1342`,
    2289: `1342`,
    229: `77`,
    2290: `1343`,
    2291: `1343`,
    2292: `1343`,
    2293: `1346`,
    2294: `1346`,
    2295: `1347`,
    2296: `1347`,
    2297: `1348`,
    2298: `1349`,
    2299: `1352`,
    23: `2`,
    230: `78`,
    2300: `1353`,
    2301: `1354`,
    2302: `1354`,
    2303: `1355`,
    2304: `1356`,
    2305: `1356`,
    2306: `1357`,
    2307: `1357`,
    2308: `1358`,
    2309: `1358`,
    231: `79`,
    2310: `1359`,
    2311: `1359`,
    2312: `1360`,
    2313: `1360`,
    2314: `1361`,
    2315: `1363`,
    2316: `1363`,
    2317: `1365`,
    2318: `1365`,
    2319: `1366`,
    232: `79`,
    2320: `1367`,
    2321: `1367`,
    2322: `1368`,
    2323: `1368`,
    2324: `1368`,
    2325: `1370`,
    2326: `1371`,
    2327: `1371`,
    2328: `1372`,
    2329: `1372`,
    233: `82`,
    2330: `1373`,
    2331: `1373`,
    2332: `1373`,
    2333: `1374`,
    2334: `1374`,
    2335: `1374`,
    2336: `1376`,
    2337: `1376`,
    2338: `1377`,
    2339: `1377`,
    234: `83`,
    2340: `1377`,
    2341: `1378`,
    2342: `1378`,
    2343: `1379`,
    2344: `1379`,
    2345: `1379`,
    2346: `1380`,
    2347: `1381`,
    2348: `1383`,
    2349: `1383`,
    235: `83`,
    2350: `1385`,
    2351: `1385`,
    2352: `1386`,
    2353: `1386`,
    2354: `1386`,
    2355: `1387`,
    2356: `1387`,
    2357: `1389`,
    2358: `1389`,
    2359: `1390`,
    236: `84`,
    2360: `1390`,
    2361: `1390`,
    2362: `1391`,
    2363: `1391`,
    2364: `1391`,
    2365: `1391`,
    2366: `1391`,
    2367: `1391`,
    2368: `1392`,
    2369: `1392`,
    237: `85`,
    2370: `1393`,
    2371: `1394`,
    2372: `1394`,
    2373: `1395`,
    2374: `1396`,
    2375: `1397`,
    2376: `1397`,
    2377: `1398`,
    2378: `1399`,
    2379: `1399`,
    238: `86`,
    2380: `1400`,
    2381: `1401`,
    2382: `1401`,
    2383: `1402`,
    2384: `1403`,
    2385: `1404`,
    2386: `1407`,
    2387: `1408`,
    2388: `1408`,
    2389: `1409`,
    239: `86`,
    2390: `1409`,
    2391: `1410`,
    2392: `1410`,
    2393: `1411`,
    2394: `1411`,
    2395: `1411`,
    2396: `1413`,
    2397: `1413`,
    2398: `1413`,
    2399: `1415`,
    24: `2`,
    240: `86`,
    2400: `1415`,
    2401: `1416`,
    2402: `1416`,
    2403: `1416`,
    2404: `1417`,
    2405: `1418`,
    2406: `1420`,
    2407: `1420`,
    2408: `1422`,
    2409: `1422`,
    241: `87`,
    2410: `1423`,
    2411: `1423`,
    2412: `1423`,
    2413: `1424`,
    2414: `1424`,
    2415: `1426`,
    2416: `1426`,
    2417: `1427`,
    2418: `1427`,
    2419: `1427`,
    242: `87`,
    2420: `1428`,
    2421: `1428`,
    2422: `1428`,
    2423: `1428`,
    2424: `1428`,
    2425: `1428`,
    2426: `1429`,
    2427: `1429`,
    2428: `1430`,
    2429: `1431`,
    243: `88`,
    2430: `1431`,
    2431: `1432`,
    2432: `1433`,
    2433: `1434`,
    2434: `1434`,
    2435: `1435`,
    2436: `1436`,
    2437: `1436`,
    2438: `1437`,
    2439: `1438`,
    244: `89`,
    2440: `1438`,
    2441: `1439`,
    2442: `1440`,
    2443: `1441`,
    2444: `1444`,
    2445: `1445`,
    2446: `1445`,
    2447: `1446`,
    2448: `1446`,
    2449: `1447`,
    245: `90`,
    2450: `1447`,
    2451: `1448`,
    2452: `1448`,
    2453: `1448`,
    2454: `1450`,
    2455: `1450`,
    2456: `1450`,
    2457: `1452`,
    2458: `1453`,
    2459: `1453`,
    246: `90`,
    2460: `1454`,
    2461: `1455`,
    2462: `1455`,
    2463: `1456`,
    2464: `1456`,
    2465: `1457`,
    2466: `1457`,
    2467: `1458`,
    2468: `1459`,
    2469: `1461`,
    247: `91`,
    2470: `1462`,
    2471: `1462`,
    2472: `1463`,
    2473: `1463`,
    2474: `1464`,
    2475: `1464`,
    2476: `1465`,
    2477: `1465`,
    2478: `1466`,
    2479: `1466`,
    248: `91`,
    2480: `1467`,
    2481: `1467`,
    2482: `1468`,
    2483: `1469`,
    2484: `1471`,
    2485: `1471`,
    2486: `1472`,
    2487: `1473`,
    2488: `1474`,
    2489: `1477`,
    249: `92`,
    2490: `1477`,
    2491: `1477`,
    2492: `1478`,
    2493: `1479`,
    2494: `1479`,
    2495: `1480`,
    2496: `1480`,
    2497: `1480`,
    2498: `1483`,
    2499: `1483`,
    25: `2`,
    250: `92`,
    2500: `1483`,
    2501: `1485`,
    2502: `1486`,
    2503: `1488`,
    2504: `1489`,
    2505: `1490`,
    2506: `1491`,
    2507: `1491`,
    2508: `1492`,
    2509: `1492`,
    251: `92`,
    2510: `1493`,
    2511: `1493`,
    2512: `1493`,
    2513: `1494`,
    2514: `1496`,
    2515: `1497`,
    2516: `1498`,
    2517: `1498`,
    2518: `1498`,
    2519: `1499`,
    252: `93`,
    2520: `1500`,
    2521: `1500`,
    2522: `1501`,
    2523: `1501`,
    2524: `1501`,
    2525: `1502`,
    2526: `1504`,
    2527: `1505`,
    2528: `1505`,
    2529: `1505`,
    253: `93`,
    2530: `1507`,
    2531: `1508`,
    2532: `1508`,
    2533: `1509`,
    2534: `1511`,
    2535: `1512`,
    2536: `1512`,
    2537: `1512`,
    2538: `1514`,
    2539: `1515`,
    254: `94`,
    2540: `1516`,
    2541: `1517`,
    2542: `1518`,
    2543: `1518`,
    2544: `1519`,
    2545: `1520`,
    2546: `1521`,
    2547: `1522`,
    2548: `1524`,
    2549: `1525`,
    255: `94`,
    2550: `1525`,
    2551: `1526`,
    2552: `1526`,
    2553: `1526`,
    2554: `1529`,
    2555: `1529`,
    2556: `1530`,
    2557: `1530`,
    2558: `1531`,
    2559: `1532`,
    256: `94`,
    2560: `1533`,
    2561: `1534`,
    2562: `1534`,
    2563: `1535`,
    2564: `1536`,
    2565: `1536`,
    2566: `1537`,
    2567: `1537`,
    2568: `1538`,
    2569: `1538`,
    257: `94`,
    2570: `1539`,
    2571: `1540`,
    2572: `1541`,
    2573: `1541`,
    2574: `1542`,
    2575: `1543`,
    2576: `1544`,
    2577: `1545`,
    2578: `1545`,
    2579: `1546`,
    258: `94`,
    2580: `1547`,
    2581: `1548`,
    2582: `1550`,
    2583: `1551`,
    2584: `1551`,
    2585: `1551`,
    2586: `1552`,
    2587: `1552`,
    2588: `1553`,
    2589: `1554`,
    259: `94`,
    2590: `1554`,
    2591: `1555`,
    2592: `1556`,
    2593: `1556`,
    2594: `1557`,
    2595: `1558`,
    2596: `1558`,
    2597: `1559`,
    2598: `1560`,
    2599: `1560`,
    26: `2`,
    260: `95`,
    2600: `1561`,
    2601: `1562`,
    2602: `1563`,
    2603: `1564`,
    2604: `1564`,
    2605: `1565`,
    2606: `1566`,
    2607: `1566`,
    2608: `1567`,
    2609: `1568`,
    261: `95`,
    2610: `1568`,
    2611: `1569`,
    2612: `1570`,
    2613: `1570`,
    2614: `1570`,
    2615: `1571`,
    2616: `1571`,
    2617: `1572`,
    2618: `1573`,
    2619: `1573`,
    262: `96`,
    2620: `1574`,
    2621: `1575`,
    2622: `1575`,
    2623: `1576`,
    2624: `1577`,
    2625: `1577`,
    2626: `1578`,
    2627: `1579`,
    2628: `1579`,
    2629: `1580`,
    263: `97`,
    2630: `1581`,
    2631: `1581`,
    2632: `1581`,
    2633: `1582`,
    2634: `1582`,
    2635: `1583`,
    2636: `1584`,
    2637: `1584`,
    2638: `1585`,
    2639: `1586`,
    264: `98`,
    2640: `1586`,
    2641: `1587`,
    2642: `1588`,
    2643: `1588`,
    2644: `1588`,
    2645: `1589`,
    2646: `1589`,
    2647: `1590`,
    2648: `1591`,
    2649: `1591`,
    265: `98`,
    2650: `1591`,
    2651: `1592`,
    2652: `1592`,
    2653: `1593`,
    2654: `1594`,
    2655: `1594`,
    2656: `1594`,
    2657: `1595`,
    2658: `1596`,
    2659: `1596`,
    266: `99`,
    2660: `1597`,
    2661: `1598`,
    2662: `1598`,
    2663: `1598`,
    2664: `1599`,
    2665: `1600`,
    2666: `1600`,
    2667: `1601`,
    2668: `1602`,
    2669: `1602`,
    267: `100`,
    2670: `1602`,
    2671: `1603`,
    2672: `1604`,
    2673: `1604`,
    2674: `1605`,
    2675: `1606`,
    2676: `1606`,
    2677: `1606`,
    2678: `1607`,
    2679: `1607`,
    268: `102`,
    2680: `1608`,
    2681: `1608`,
    2682: `1608`,
    2683: `1609`,
    2684: `1610`,
    2685: `1610`,
    2686: `1611`,
    2687: `1613`,
    2688: `1614`,
    2689: `1614`,
    269: `102`,
    2690: `1614`,
    2691: `1615`,
    2692: `1615`,
    2693: `1616`,
    2694: `1617`,
    2695: `1617`,
    2696: `1618`,
    2697: `1619`,
    2698: `1619`,
    2699: `1620`,
    27: `2`,
    270: `103`,
    2700: `1621`,
    2701: `1621`,
    2702: `1621`,
    2703: `1622`,
    2704: `1622`,
    2705: `1623`,
    2706: `1624`,
    2707: `1624`,
    2708: `1624`,
    2709: `1625`,
    271: `103`,
    2710: `1625`,
    2711: `1626`,
    2712: `1627`,
    2713: `1627`,
    2714: `1628`,
    2715: `1629`,
    2716: `1629`,
    2717: `1630`,
    2718: `1631`,
    2719: `1631`,
    272: `103`,
    2720: `1632`,
    2721: `1633`,
    2722: `1633`,
    2723: `1634`,
    2724: `1635`,
    2725: `1635`,
    2726: `1635`,
    2727: `1636`,
    2728: `1636`,
    2729: `1637`,
    273: `104`,
    2730: `1637`,
    2731: `1638`,
    2732: `1639`,
    2733: `1639`,
    2734: `1640`,
    2735: `1642`,
    2736: `1642`,
    2737: `1643`,
    2738: `1643`,
    2739: `1644`,
    274: `104`,
    2740: `1645`,
    2741: `1646`,
    2742: `1646`,
    2743: `1646`,
    2744: `1647`,
    2745: `1647`,
    2746: `1647`,
    2747: `1649`,
    2748: `1649`,
    2749: `1650`,
    275: `105`,
    2750: `1651`,
    2751: `1651`,
    2752: `1652`,
    2753: `1654`,
    2754: `1655`,
    2755: `1655`,
    2756: `1656`,
    276: `106`,
    277: `107`,
    278: `107`,
    279: `107`,
    28: `2`,
    280: `107`,
    281: `107`,
    282: `107`,
    283: `107`,
    284: `107`,
    285: `108`,
    286: `108`,
    287: `108`,
    288: `111`,
    289: `111`,
    29: `2`,
    290: `111`,
    291: `112`,
    292: `113`,
    293: `113`,
    294: `116`,
    295: `117`,
    296: `118`,
    297: `119`,
    298: `119`,
    299: `120`,
    3: `2`,
    30: `2`,
    300: `121`,
    301: `122`,
    302: `123`,
    303: `123`,
    304: `124`,
    305: `124`,
    306: `124`,
    307: `129`,
    308: `129`,
    309: `129`,
    31: `2`,
    310: `129`,
    311: `129`,
    312: `129`,
    313: `129`,
    314: `129`,
    315: `129`,
    316: `129`,
    317: `129`,
    318: `129`,
    319: `129`,
    32: `2`,
    320: `129`,
    321: `129`,
    322: `129`,
    323: `129`,
    324: `129`,
    325: `129`,
    326: `130`,
    327: `130`,
    328: `131`,
    329: `131`,
    33: `2`,
    330: `131`,
    331: `134`,
    332: `135`,
    333: `135`,
    334: `136`,
    335: `136`,
    336: `136`,
    337: `136`,
    338: `136`,
    339: `136`,
    34: `2`,
    340: `136`,
    341: `136`,
    342: `136`,
    343: `136`,
    344: `137`,
    345: `137`,
    346: `138`,
    347: `139`,
    348: `139`,
    349: `139`,
    35: `2`,
    350: `140`,
    351: `141`,
    352: `142`,
    353: `142`,
    354: `143`,
    355: `144`,
    356: `144`,
    357: `144`,
    358: `145`,
    359: `145`,
    36: `2`,
    360: `146`,
    361: `147`,
    362: `148`,
    363: `148`,
    364: `149`,
    365: `149`,
    366: `150`,
    367: `150`,
    368: `151`,
    369: `151`,
    37: `2`,
    370: `154`,
    371: `154`,
    372: `155`,
    373: `155`,
    374: `156`,
    375: `157`,
    376: `157`,
    377: `158`,
    378: `159`,
    379: `159`,
    38: `2`,
    380: `159`,
    381: `161`,
    382: `161`,
    383: `162`,
    384: `162`,
    385: `163`,
    386: `164`,
    387: `165`,
    388: `165`,
    389: `166`,
    39: `2`,
    390: `167`,
    391: `167`,
    392: `168`,
    393: `169`,
    394: `169`,
    395: `170`,
    396: `171`,
    397: `172`,
    398: `172`,
    399: `173`,
    4: `2`,
    40: `2`,
    400: `174`,
    401: `175`,
    402: `175`,
    403: `176`,
    404: `177`,
    405: `177`,
    406: `178`,
    407: `179`,
    408: `180`,
    409: `180`,
    41: `2`,
    410: `181`,
    411: `182`,
    412: `183`,
    413: `184`,
    414: `184`,
    415: `186`,
    416: `186`,
    417: `187`,
    418: `187`,
    419: `188`,
    42: `2`,
    420: `188`,
    421: `189`,
    422: `189`,
    423: `190`,
    424: `190`,
    425: `190`,
    426: `191`,
    427: `192`,
    428: `193`,
    429: `194`,
    43: `2`,
    430: `194`,
    431: `194`,
    432: `195`,
    433: `196`,
    434: `197`,
    435: `197`,
    436: `198`,
    437: `199`,
    438: `199`,
    439: `200`,
    44: `2`,
    440: `201`,
    441: `202`,
    442: `202`,
    443: `203`,
    444: `204`,
    445: `205`,
    446: `206`,
    447: `206`,
    448: `207`,
    449: `208`,
    45: `2`,
    450: `209`,
    451: `211`,
    452: `211`,
    453: `211`,
    454: `213`,
    455: `213`,
    456: `214`,
    457: `214`,
    458: `214`,
    459: `216`,
    46: `2`,
    460: `216`,
    461: `216`,
    462: `216`,
    463: `216`,
    464: `216`,
    465: `217`,
    466: `217`,
    467: `218`,
    468: `219`,
    469: `221`,
    47: `2`,
    470: `222`,
    471: `225`,
    472: `226`,
    473: `226`,
    474: `227`,
    475: `227`,
    476: `227`,
    477: `227`,
    478: `227`,
    479: `227`,
    48: `4`,
    480: `227`,
    481: `227`,
    482: `227`,
    483: `227`,
    484: `228`,
    485: `228`,
    486: `229`,
    487: `230`,
    488: `230`,
    489: `230`,
    49: `4`,
    490: `231`,
    491: `232`,
    492: `233`,
    493: `233`,
    494: `234`,
    495: `235`,
    496: `235`,
    497: `235`,
    498: `236`,
    499: `236`,
    5: `2`,
    50: `5`,
    500: `237`,
    501: `238`,
    502: `239`,
    503: `239`,
    504: `240`,
    505: `240`,
    506: `241`,
    507: `241`,
    508: `242`,
    509: `242`,
    51: `5`,
    510: `243`,
    511: `243`,
    512: `243`,
    513: `246`,
    514: `246`,
    515: `246`,
    516: `246`,
    517: `246`,
    518: `246`,
    519: `247`,
    52: `5`,
    520: `247`,
    521: `248`,
    522: `249`,
    523: `250`,
    524: `250`,
    525: `251`,
    526: `252`,
    527: `253`,
    528: `255`,
    529: `255`,
    53: `6`,
    530: `256`,
    531: `257`,
    532: `257`,
    533: `258`,
    534: `259`,
    535: `260`,
    536: `260`,
    537: `261`,
    538: `262`,
    539: `263`,
    54: `7`,
    540: `263`,
    541: `264`,
    542: `264`,
    543: `264`,
    544: `264`,
    545: `264`,
    546: `264`,
    547: `264`,
    548: `264`,
    549: `264`,
    55: `8`,
    550: `264`,
    551: `265`,
    552: `265`,
    553: `266`,
    554: `267`,
    555: `268`,
    556: `268`,
    557: `269`,
    558: `269`,
    559: `270`,
    56: `9`,
    560: `270`,
    561: `271`,
    562: `272`,
    563: `272`,
    564: `273`,
    565: `273`,
    566: `274`,
    567: `274`,
    568: `275`,
    569: `275`,
    57: `10`,
    570: `278`,
    571: `278`,
    572: `279`,
    573: `279`,
    574: `280`,
    575: `281`,
    576: `281`,
    577: `282`,
    578: `283`,
    579: `283`,
    58: `11`,
    580: `283`,
    581: `284`,
    582: `285`,
    583: `285`,
    584: `287`,
    585: `287`,
    586: `288`,
    587: `288`,
    588: `289`,
    589: `290`,
    59: `11`,
    590: `291`,
    591: `291`,
    592: `292`,
    593: `293`,
    594: `294`,
    595: `294`,
    596: `295`,
    597: `296`,
    598: `296`,
    599: `297`,
    6: `2`,
    60: `12`,
    600: `298`,
    601: `299`,
    602: `299`,
    603: `300`,
    604: `301`,
    605: `301`,
    606: `302`,
    607: `303`,
    608: `304`,
    609: `304`,
    61: `13`,
    610: `305`,
    611: `306`,
    612: `307`,
    613: `307`,
    614: `308`,
    615: `309`,
    616: `309`,
    617: `310`,
    618: `311`,
    619: `312`,
    62: `14`,
    620: `312`,
    621: `313`,
    622: `314`,
    623: `314`,
    624: `315`,
    625: `316`,
    626: `316`,
    627: `317`,
    628: `318`,
    629: `318`,
    63: `15`,
    630: `318`,
    631: `319`,
    632: `320`,
    633: `320`,
    634: `321`,
    635: `322`,
    636: `322`,
    637: `322`,
    638: `323`,
    639: `324`,
    64: `15`,
    640: `324`,
    641: `325`,
    642: `326`,
    643: `327`,
    644: `327`,
    645: `328`,
    646: `329`,
    647: `329`,
    648: `330`,
    649: `331`,
    65: `16`,
    650: `332`,
    651: `333`,
    652: `333`,
    653: `334`,
    654: `334`,
    655: `334`,
    656: `337`,
    657: `337`,
    658: `338`,
    659: `339`,
    66: `16`,
    660: `340`,
    661: `341`,
    662: `341`,
    663: `342`,
    664: `342`,
    665: `343`,
    666: `344`,
    667: `351`,
    668: `351`,
    669: `352`,
    67: `17`,
    670: `352`,
    671: `353`,
    672: `354`,
    673: `354`,
    674: `355`,
    675: `355`,
    676: `356`,
    677: `356`,
    678: `356`,
    679: `359`,
    68: `18`,
    680: `359`,
    681: `360`,
    682: `360`,
    683: `360`,
    684: `361`,
    685: `362`,
    686: `362`,
    687: `363`,
    688: `364`,
    689: `365`,
    69: `18`,
    690: `366`,
    691: `366`,
    692: `367`,
    693: `367`,
    694: `368`,
    695: `369`,
    696: `369`,
    697: `370`,
    698: `371`,
    699: `371`,
    7: `2`,
    70: `19`,
    700: `372`,
    701: `373`,
    702: `373`,
    703: `374`,
    704: `375`,
    705: `376`,
    706: `376`,
    707: `377`,
    708: `378`,
    709: `379`,
    71: `19`,
    710: `379`,
    711: `380`,
    712: `381`,
    713: `381`,
    714: `382`,
    715: `382`,
    716: `384`,
    717: `384`,
    718: `385`,
    719: `385`,
    72: `20`,
    720: `386`,
    721: `386`,
    722: `387`,
    723: `387`,
    724: `388`,
    725: `389`,
    726: `389`,
    727: `390`,
    728: `390`,
    729: `391`,
    73: `21`,
    730: `392`,
    731: `392`,
    732: `393`,
    733: `393`,
    734: `394`,
    735: `398`,
    736: `398`,
    737: `399`,
    738: `400`,
    739: `400`,
    74: `22`,
    740: `401`,
    741: `402`,
    742: `402`,
    743: `403`,
    744: `404`,
    745: `405`,
    746: `406`,
    747: `406`,
    748: `406`,
    749: `407`,
    75: `23`,
    750: `407`,
    751: `407`,
    752: `408`,
    753: `409`,
    754: `409`,
    755: `410`,
    756: `410`,
    757: `410`,
    758: `410`,
    759: `410`,
    76: `25`,
    760: `410`,
    761: `410`,
    762: `410`,
    763: `410`,
    764: `410`,
    765: `411`,
    766: `411`,
    767: `412`,
    768: `413`,
    769: `414`,
    77: `25`,
    770: `414`,
    771: `415`,
    772: `416`,
    773: `416`,
    774: `417`,
    775: `418`,
    776: `419`,
    777: `419`,
    778: `420`,
    779: `421`,
    78: `25`,
    780: `421`,
    781: `422`,
    782: `423`,
    783: `427`,
    784: `427`,
    785: `428`,
    786: `428`,
    787: `429`,
    788: `430`,
    789: `431`,
    79: `25`,
    790: `431`,
    791: `432`,
    792: `433`,
    793: `434`,
    794: `434`,
    795: `435`,
    796: `436`,
    797: `436`,
    798: `437`,
    799: `438`,
    8: `2`,
    80: `25`,
    800: `440`,
    801: `440`,
    802: `441`,
    803: `441`,
    804: `442`,
    805: `443`,
    806: `444`,
    807: `444`,
    808: `445`,
    809: `445`,
    81: `25`,
    810: `445`,
    811: `445`,
    812: `445`,
    813: `445`,
    814: `445`,
    815: `445`,
    816: `445`,
    817: `445`,
    818: `446`,
    819: `446`,
    82: `25`,
    820: `447`,
    821: `448`,
    822: `449`,
    823: `449`,
    824: `450`,
    825: `450`,
    826: `451`,
    827: `451`,
    828: `452`,
    829: `453`,
    83: `25`,
    830: `453`,
    831: `454`,
    832: `454`,
    833: `455`,
    834: `455`,
    835: `456`,
    836: `456`,
    837: `457`,
    838: `458`,
    839: `458`,
    84: `25`,
    840: `459`,
    841: `459`,
    842: `460`,
    843: `460`,
    844: `461`,
    845: `461`,
    846: `462`,
    847: `462`,
    848: `463`,
    849: `463`,
    85: `25`,
    850: `463`,
    851: `466`,
    852: `466`,
    853: `467`,
    854: `467`,
    855: `468`,
    856: `469`,
    857: `469`,
    858: `470`,
    859: `470`,
    86: `25`,
    860: `471`,
    861: `471`,
    862: `471`,
    863: `474`,
    864: `474`,
    865: `475`,
    866: `475`,
    867: `476`,
    868: `477`,
    869: `477`,
    87: `25`,
    870: `477`,
    871: `478`,
    872: `478`,
    873: `479`,
    874: `479`,
    875: `480`,
    876: `481`,
    877: `481`,
    878: `482`,
    879: `482`,
    88: `25`,
    880: `484`,
    881: `484`,
    882: `485`,
    883: `485`,
    884: `485`,
    885: `486`,
    886: `486`,
    887: `487`,
    888: `487`,
    889: `488`,
    89: `25`,
    890: `489`,
    891: `489`,
    892: `489`,
    893: `490`,
    894: `490`,
    895: `492`,
    896: `492`,
    897: `493`,
    898: `493`,
    899: `493`,
    9: `2`,
    90: `25`,
    900: `494`,
    901: `495`,
    902: `495`,
    903: `496`,
    904: `497`,
    905: `498`,
    906: `498`,
    907: `499`,
    908: `500`,
    909: `502`,
    91: `25`,
    910: `503`,
    911: `503`,
    912: `504`,
    913: `504`,
    914: `504`,
    915: `504`,
    916: `504`,
    917: `504`,
    918: `504`,
    919: `504`,
    92: `25`,
    920: `504`,
    921: `504`,
    922: `505`,
    923: `505`,
    924: `506`,
    925: `507`,
    926: `507`,
    927: `507`,
    928: `508`,
    929: `509`,
    93: `25`,
    930: `510`,
    931: `510`,
    932: `511`,
    933: `512`,
    934: `512`,
    935: `512`,
    936: `513`,
    937: `513`,
    938: `514`,
    939: `514`,
    94: `25`,
    940: `515`,
    941: `515`,
    942: `516`,
    943: `516`,
    944: `517`,
    945: `518`,
    946: `518`,
    947: `519`,
    948: `519`,
    949: `520`,
    95: `25`,
    950: `520`,
    951: `520`,
    952: `523`,
    953: `523`,
    954: `524`,
    955: `525`,
    956: `526`,
    957: `526`,
    958: `526`,
    959: `527`,
    96: `25`,
    960: `527`,
    961: `528`,
    962: `529`,
    963: `530`,
    964: `533`,
    965: `533`,
    966: `533`,
    967: `534`,
    968: `534`,
    969: `535`,
    97: `25`,
    970: `535`,
    971: `537`,
    972: `537`,
    973: `538`,
    974: `539`,
    975: `540`,
    976: `542`,
    977: `542`,
    978: `542`,
    979: `545`,
    98: `25`,
    980: `545`,
    981: `546`,
    982: `546`,
    983: `547`,
    984: `547`,
    985: `548`,
    986: `549`,
    987: `550`,
    988: `550`,
    989: `551`,
    99: `25`,
    990: `551`,
    991: `552`,
    992: `553`,
    993: `554`,
    994: `554`,
    995: `555`,
    996: `555`,
    997: `556`,
    998: `556`,
    999: `556`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: {
    _reachp_1: 1
    },
  extraPages: 1,
  stateKeys: 2,
  stateSize: 223,
  unsupported: [],
  version: 13,
  warnings: [`API Bidder_bid may use up to 5 accounts, but the limit is 4. API Bidder_bid starts at /app/src/contracts/auction.rsh:114:31:application.`, `API Bidder_optIn may use up to 6 accounts, but the limit is 4. API Bidder_optIn starts at /app/src/contracts/auction.rsh:114:31:application.`, `Step 1 calls a remote object at /app/src/contracts/auction.rsh:107:39:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 1 calls a remote object at /app/src/contracts/auction.rsh:90:48:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 1 calls a remote object at /app/src/contracts/auction.rsh:91:68:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 5 calls a remote object at /app/src/contracts/auction.rsh:138:91:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 5 may use up to 6 accounts, but the limit is 4. Step 5 starts at /app/src/contracts/auction.rsh:114:31:dot.`, `Step 5 may use up to 9 transaction references, but the limit is 8. Step 5 starts at /app/src/contracts/auction.rsh:114:31:dot.`, `This program calls a remote object at /app/src/contracts/auction.rsh:178:37:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`]
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"components":[{"internalType":"uint256","name":"_deadline","type":"uint256"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes16","name":"elem2","type":"bytes16"}],"internalType":"struct T12","name":"_description","type":"tuple"},{"internalType":"address payable","name":"_owner","type":"address"},{"internalType":"uint256","name":"_price","type":"uint256"},{"internalType":"bytes20","name":"_title","type":"bytes20"}],"internalType":"struct T13","name":"elem2","type":"tuple"},{"internalType":"address payable","name":"elem3","type":"address"}],"internalType":"struct T14","name":"v4266","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"components":[{"internalType":"uint256","name":"_deadline","type":"uint256"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes16","name":"elem2","type":"bytes16"}],"internalType":"struct T12","name":"_description","type":"tuple"},{"internalType":"address payable","name":"_owner","type":"address"},{"internalType":"uint256","name":"_price","type":"uint256"},{"internalType":"bytes20","name":"_title","type":"bytes20"}],"internalType":"struct T13","name":"elem2","type":"tuple"},{"internalType":"address payable","name":"elem3","type":"address"}],"indexed":false,"internalType":"struct T14","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T5","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_Auctioneer_acceptSale0_444","type":"bool"},{"internalType":"bool","name":"_Auctioneer_rejectSale0_444","type":"bool"}],"internalType":"struct T3","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e4","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T6","name":"which","type":"uint8"},{"internalType":"bool","name":"_Auctioneer_stopAuction0_123","type":"bool"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T5","name":"_Bidder_bid0_123","type":"tuple"},{"internalType":"bool","name":"_Bidder_optIn0_123","type":"bool"}],"internalType":"struct T6","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T7","name":"_a","type":"tuple"}],"name":"_reach_e5","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"indexed":false,"internalType":"struct T19","name":"v0","type":"tuple"}],"name":"_reach_oe_v1006","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"indexed":false,"internalType":"struct T1","name":"v0","type":"tuple"}],"name":"_reach_oe_v1017","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"indexed":false,"internalType":"struct T19","name":"v0","type":"tuple"}],"name":"_reach_oe_v1030","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"indexed":false,"internalType":"struct T1","name":"v0","type":"tuple"}],"name":"_reach_oe_v1041","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1195","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1202","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1215","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1222","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"indexed":false,"internalType":"struct T19","name":"v0","type":"tuple"}],"name":"_reach_oe_v1235","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1302","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1332","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"indexed":false,"internalType":"struct T16","name":"v0","type":"tuple"}],"name":"_reach_oe_v724","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"}],"indexed":false,"internalType":"struct T17","name":"v0","type":"tuple"}],"name":"_reach_oe_v737","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"indexed":false,"internalType":"struct T19","name":"v0","type":"tuple"}],"name":"_reach_oe_v756","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"blockEnded","type":"uint256"},{"internalType":"uint256","name":"lastBid","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v0","type":"tuple"}],"name":"_reach_oe_v850","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes20","name":"v0","type":"bytes20"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"},{"indexed":false,"internalType":"address payable","name":"v2","type":"address"},{"indexed":false,"internalType":"address payable","name":"v3","type":"address"},{"indexed":false,"internalType":"address payable","name":"v4","type":"address"}],"name":"accepted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"},{"indexed":false,"internalType":"address payable","name":"v2","type":"address"},{"indexed":false,"internalType":"bytes20","name":"v3","type":"bytes20"}],"name":"bidSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"},{"indexed":false,"internalType":"address payable","name":"v1","type":"address"}],"name":"created","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"},{"indexed":false,"internalType":"address payable","name":"v2","type":"address"},{"indexed":false,"internalType":"address payable","name":"v3","type":"address"},{"indexed":false,"internalType":"uint256","name":"v4","type":"uint256"},{"indexed":false,"internalType":"bytes20","name":"v5","type":"bytes20"}],"name":"down","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"}],"name":"endSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"},{"indexed":false,"internalType":"address payable","name":"v1","type":"address"}],"name":"optInSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes20","name":"v0","type":"bytes20"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"},{"indexed":false,"internalType":"address payable","name":"v2","type":"address"},{"indexed":false,"internalType":"address payable","name":"v3","type":"address"},{"indexed":false,"internalType":"address payable","name":"v4","type":"address"}],"name":"rejected","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"Auctioneer_acceptSale","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Auctioneer_rejectSale","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Auctioneer_stopAuction","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"blockEnded","type":"uint256"},{"internalType":"uint256","name":"lastBid","type":"uint256"}],"internalType":"struct T0","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v4259","type":"uint256"}],"name":"Bidder_bid","outputs":[{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T1","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Bidder_optIn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T5","name":"v4269","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_Auctioneer_acceptSale0_444","type":"bool"},{"internalType":"bool","name":"_Auctioneer_rejectSale0_444","type":"bool"}],"internalType":"struct T3","name":"elem1","type":"tuple"}],"internalType":"struct T4","name":"v4272","type":"tuple"}],"name":"_reachp_4","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T6","name":"which","type":"uint8"},{"internalType":"bool","name":"_Auctioneer_stopAuction0_123","type":"bool"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T5","name":"_Bidder_bid0_123","type":"tuple"},{"internalType":"bool","name":"_Bidder_optIn0_123","type":"bool"}],"internalType":"struct T6","name":"elem1","type":"tuple"}],"internalType":"struct T7","name":"v4275","type":"tuple"}],"name":"_reachp_5","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"live","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x6080620046eb38819003601f8101601f191683016001600160401b0381118482101762000555578392829160405283398101036101408112620006405760405190608082016001600160401b038111838210176200055557604052825182526200006c6020840162000699565b602083019081529260e0603f198301126200064057606060405192620000928462000645565b60408301518452605f1901126200064057604051620000b18162000661565b606082015181526080820151602082015260a08201516001600160801b031981168103620006405760408201526020830152620000f160c0820162000699565b604083015260e081015160608301526101008101516001600160601b031981168103620006405760808301526040830191825262000133906101200162000699565b606083019081524360035560405190919060e081016001600160401b03811182821017620005555760009160c0916040528281528260208201528260408201526200017d620006ae565b606082015260405162000190816200067d565b83815283602082015260808201528260a08201520152604051620001b4816200067d565b620001be620006ae565b81526020810193620001cf620006de565b855260ff6004541662000627577faf21c54356e0cb238c07cd6d2a0ba48aa0a87eb5fccc9285719045c4cfe7472b6101606040513381528351602082015260018060a01b0389511660408201526200022d8651606083019062000725565b86516001600160a01b0316610140820152a15180159081156200061a575b501562000601576000815152600060208251015260006040825101525183515234620005e85760405193620002808562000645565b6000855260006020860152604051620002998162000645565b60008152620002a7620006ae565b6020820152600060408201526000606082015260006080820152604086015260006060860152620002d7620006de565b608086015233855260018060a01b03905116602085015251604084015260018060a01b03905116606083015251805160406020820151910151151560405191620003218362000661565b600083526020830152604082015262000339620006de565b9160005b60018110620005985750508152608082015260016000554360015560806040519160018060a01b03815116602084015260018060a01b036020820151166040840152620003936040820151606085019062000725565b60608101516001600160a01b03166101408401520151600061016083015b600182106200056b576101a08452836101c081016001600160401b03811182821017620005555760405280516001600160401b0381116200055557600254600181811c911680156200054a575b60208210146200053457601f8111620004ca575b50602091601f8211600114620004605791819260009262000454575b50508160011b916000199060031b1c1916176002555b604051613f369081620007b58239f35b0151905082806200042e565b601f19821692600260005260206000209160005b858110620004b15750836001951062000497575b505050811b0160025562000444565b015160001960f88460031b161c1916905582808062000488565b9192602060018192868501518155019401920162000474565b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f830160051c8101916020841062000529575b601f0160051c01905b8181106200051c575062000412565b600081556001016200050d565b909150819062000504565b634e487b7160e01b600052602260045260246000fd5b90607f1690620003fe565b634e487b7160e01b600052604160045260246000fd5b602060606001926040865180518352848101518584015201511515604082015201930191019091620003b1565b620005a481836200078c565b51620005b182866200078c565b52620005be81856200078c565b506000198114620005d2576001016200033d565b634e487b7160e01b600052601160045260246000fd5b60405163100960cb60e01b8152600b6004820152602490fd5b60405163100960cb60e01b8152600a6004820152602490fd5b905060015414386200024b565b60405163100960cb60e01b815260096004820152602490fd5b600080fd5b60a081019081106001600160401b038211176200055557604052565b606081019081106001600160401b038211176200055557604052565b604081019081106001600160401b038211176200055557604052565b51906001600160a01b03821682036200064057565b60405190606082016001600160401b03811183821017620005555760405260006040838281528260208201520152565b6040519060208083016001600160401b0381118482101762000555576040528260005b8281106200070e57505050565b82906200071a620006ae565b818401520162000701565b8051825260208082015180518285015290810151604080850191909152908101516001600160801b031916606080850191909152908201516001600160a01b03166080808501919091529082015160a084015201516001600160601b03191660c090910152565b9060018110156200079e5760051b0190565b634e487b7160e01b600052603260045260246000fdfe60806040526004361015610018575b361561001657005b005b60003560e01c80631e93b0f1146101085780632d2ae6eb146100ff57806334d3e29e146100f65780634a96cc0b146100ed578063573b8510146100e45780636f49e231146100db57806383230757146100d2578063957aa58c146100c9578063980e632f146100c0578063ab53f2c6146100b7578063b6279224146100ae5763d2526fd90361000e576100a9610cde565b61000e565b506100a9610c62565b506100a9610bb4565b506100a9610b27565b506100a9610a80565b506100a9610a61565b506100a9610a14565b506100a96102a9565b506100a961024f565b506100a96101c0565b506100a9610157565b5034610127576000366003190112610127576020600354604051908152f35b600080fd5b6040809180518452602081015160208501520151910152565b606081019291610155919061012c565b565b5060003660031901126101275761016c610f64565b50606080610178610fba565b6101af816101846121fc565b6020810190600082515251151560208251015261019f6121fc565b906000825251602082015261254a565b01516101be604051809261012c565bf35b506080366003190112610127576101d5610fba565b604051906101e282610d7b565b60043582526060366023190112610127576040519161020083610da3565b6024359260028410156101275761023f93815260443561021f8161109d565b60208201526064356102308161109d565b604082015260208201526112ed565b60405160008152602090f35b0390f35b50600036600319011261012757602060a0610268610fba565b61029d816102746121fc565b85810190600282515251151560608251015261028e6121fc565b9060008252518682015261254a565b01511515604051908152f35b506020366003190112610127576102be610fba565b5061023f6102cb36613b05565b6102d3613b8a565b6102e1600160005414611564565b61035d6102fe6102ef610e4e565b60208082518301019101613c48565b9261031a61031561031160045460ff1690565b1590565b611584565b60408051338152825160208201527fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee815969190a1518015908115610a08575b506115a4565b61036734156115c4565b61038561038061037a6020850151610c29565b33613dea565b6115e4565b6103a13360018060a01b0361039a8551610c29565b1614611604565b6103b86103b16020840151610c29565b3090613433565b610160820152476101408201526103d7600160ff196004541617600455565b7f37e25dadaab02074283de1c0238dbfd7d190671e8bc6adb07dd01aab30786a7b6104d8600080604051632cfbfba760e01b60208201526004815261041b81610d7b565b61043061042b6060890151610c29565b610c29565b82602083519301915af161044c610445611f86565b8092611fe8565b5061045c60ff1960045416600455565b61048a610475306104706020890151610c29565b613433565b61016086015180820361018088015214611624565b6104ae47610140860151900391602086019283515260208082518301019101613424565b60208251015251806040850152604051918291829190916020806040830194805184520151910152565b0390a16104ea60408201515115611644565b6104fb306104706020850151610c29565b6101c0820152476101a082015261051a600160ff196004541617600455565b7f178760804b1b57c8eb91fd27698daea1235a9d4ca3d13de9a84c8191e57574ed61062060008060405160208101637541dda360e11b81526004825261055f82610d7b565b8261057061042b60608b0151610c29565b9251925af1610587610580611f86565b8092612018565b5061059760ff1960045416600455565b6105c06105ab306104706020890151610c29565b6101c08601518082036101e088015214611664565b6105f16105e7476101a0870151900392606087019384515260208082518301019101613d3d565b60208351016112ce565b516080840181905260408051825181526020928301516001600160a01b03169281019290925290918291820190565b0390a161063260808201515115611684565b61063f3060a083016112ce565b60206040820151015160c08201515261066b61065e60a0830151610c29565b602060c0840151016112ce565b43604060c0830151015261068f6106828351610c29565b606060c0840151016112ce565b6040820151608001516106b3906001600160601b031916608060c0840151016112dd565b60206040830151015160a060c0830151015260606040830151015160c08083015101526106f36106e66020840151610c29565b60e060c0840151016112ce565b610704306104706020850151610c29565b6102208201527f9bb4687c8a4b59f7f3a7fcc5949200288693d6646cc8d7614d4a0378755e6c94610803476102008401908152610749600160ff196004541617600455565b6107a960008060c08701516040519061078582610777602082019363063eabe760e11b855260248301613d51565b03601f198101845283610e2b565b8261079661042b60608d0151610c29565b9251925af16107a3611f86565b90612048565b506107b960ff1960045416600455565b6107e26107cd306104706020890151610c29565b610220860151808203610240880152146116a4565b479051900360e0840190815152518061010085015260405191829182612532565b0390a161081661010082015151156116c4565b7fb758eeaad548e48420d76d670d08a2b8b63cf903c04cf64fbe368cbb7830eb6760206040830151015161084a8451610c29565b9061085a6040519283928361248c565b0390a16000610120820151526000602061012083015101526000604061012083015101526109e2608061088b6124a5565b9361089f6108998251610c29565b866112ce565b6108b86108af6020830151610c29565b602087016112ce565b6108d16108c86060830151610c29565b604087016112ce565b6108e76108de8551151590565b15156060870152565b604084015160209081015186840152828501510151610913906001600160a01b03165b60a087016112ce565b4360c086015261093261092960a0860151610c29565b60e087016112ce565b6040810151820151610952906001600160601b03191661010087016112dd565b61096160408201515143613af1565b61012086015261012084015161014086015261098a6109808251610c29565b61016087016112ce565b600161018086015260016101a086015260006101c0860152436101e086015201518051906109dd600183510192604060208201519101511515906109cc610ef7565b948552602085015215156040840152565b613e6c565b610200830152610100604082015151608083015151019101515101610220820152613688565b90506001541438610357565b5060003660031901126101275760206040610a2d610fba565b61029d81610a3961101d565b8581019060018251525115158582510152610a5261101d565b906000825251868201526112ed565b5034610127576000366003190112610127576020600154604051908152f35b50346101275760003660031901126101275761024b610ae360c0610aa2610fba565b6000546008811015610af5576006610aba9114611704565b610ad4610ac5610e4e565b6020808251830101910161112f565b506000828201525b0151151590565b60405190151581529081906020820190565b6008610b0191146116e4565b610b1b610b0c610e4e565b60208082518301019101612304565b50600182820152610adc565b5060a036600319011261012757610b3c610fba565b60405190610b4982610d7b565b600435825260803660231901126101275760405191610b6783610dbe565b6024359260038410156101275761023f938152604435610b868161109d565b6020820152610b9436613b25565b6040820152608435610ba58161109d565b6060820152602082015261254a565b503461012757600080600319360112610c26578054610bd1610e4e565b906040519283918252602090604082840152835191826040850152815b838110610c0f57505060608094508284010152601f80199101168101030190f35b808601820151878201606001528694508101610bee565b80fd5b6001600160a01b031690565b6001600160a01b03169052565b81516001600160a01b031681526020918201519181019190915260400190565b50602036600319011261012757610c77610fa1565b5061024b6080610c85610fba565b610cd081604051610c9581610d7b565b604051610ca181610dd9565b6000815281526020810190610cb46121ab565b825260043581515260018251525160408251015261019f6121fc565b015160405191829182610c42565b50600036600319011261012757602080610cf6610fba565b61029d81610d0261101d565b8481019060008251525115158582510152610d1b61101d565b906000825251858201526112ed565b90600182811c92168015610d5a575b6020831014610d4457565b634e487b7160e01b600052602260045260246000fd5b91607f1691610d39565b50634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b03821117610d9657604052565b610d9e610d64565b604052565b606081019081106001600160401b03821117610d9657604052565b608081019081106001600160401b03821117610d9657604052565b602081019081106001600160401b03821117610d9657604052565b61010081019081106001600160401b03821117610d9657604052565b60a081019081106001600160401b03821117610d9657604052565b601f909101601f19168101906001600160401b03821190821017610d9657604052565b6040519060008260025491610e6283610d2a565b808352600193808516908115610ed65750600114610e88575b5061015592500383610e2b565b60026000908152600080516020613eca83398151915294602093509091905b818310610ebe575050610155935082010138610e7b565b85548884018501529485019487945091830191610ea7565b905061015594506020925060ff191682840152151560051b82010138610e7b565b6040519061015582610da3565b6040519061022082016001600160401b03811183821017610d9657604052565b6040519061024082016001600160401b03811183821017610d9657604052565b6040519061026082016001600160401b03811183821017610d9657604052565b60405190606082016001600160401b03811183821017610f94575b60405260006040838281528260208201520152565b610f9c610d64565b610f7f565b60405190610fae82610d7b565b60006020838281520152565b6040519060e082016001600160401b03811183821017611010575b604052600060c083828152826020820152826040820152610ff4610f64565b6060820152611001610fa1565b60808201528260a08201520152565b611018610d64565b610fd5565b6040519061102a82610d7b565b81600081526020611039610f64565b910152565b50634e487b7160e01b600052602160045260246000fd5b6002111561105f57565b61015561103e565b51906001600160a01b038216820361012757565b6001600160601b03191690565b51906001600160601b03198216820361012757565b8015150361012757565b51906101558261109d565b9080601f83011215610127576040918251926110cd84610dd9565b836060938484019381851161012757915b8483106110ee5750505050505090565b8583830312610127578351869161110482610da3565b845182526020918286015183820152868601516111208161109d565b878201528152019201916110de565b6101408183031261012757610120906111a96040519361114e85610df4565b61115783611067565b855261116560208401611067565b602086015261117660408401611088565b604086015261118760608401611067565b60608601526080830151608086015260a083015160a086015260c083016110b2565b60c0840152015160e082015290565b9092916040602060809260a085019660018060a01b031685528051828601520151805160028110156111fe575b8285015260208101511515606085015201511515910152565b61120661103e565b6111e5565b5160028110156112185790565b61122061103e565b90565b6040519061123082610dd9565b8160005b60208110611240575050565b60209061124b610f64565b8184015201611234565b6040519061016082016001600160401b038111838210176112c1575b604052816101406000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e0820152826101008201526112b7611223565b6101208201520152565b6112c9610d64565b611271565b6001600160a01b039091169052565b6001600160601b03199091169052565b6112fb600660005414611724565b611303610e4e565b9061131860209283808251830101910161112f565b9261133061132b61031160045460ff1690565b611744565b826040927f109eb76f82f8872ff024177afedebf0c35323f0a478a1f78956f6ddd62aa15768451806113638433836111b8565b0390a161137b81518015908115611558575b50611764565b01611386815161120b565b61138f81611055565b61148b57509261142c60e0926113e585610155976113ad34156117a4565b8351600181527f9a3fcf982b6d6d32d21d497377405ce2b7450771cd527d0cb91c7bad8d959ddf9080602081015b0390a10160019052565b6114186113f0611255565b956114046113fe8651610c29565b886112ce565b61141081860151610c29565b9087016112ce565b6114248184015161107b565b9085016112dd565b61144561143c6060830151610c29565b606085016112ce565b6080810151608084015260a081015160a084015261146660c0840160019052565b6000828401524361010084015260c08101516101208401520151610140820152611c5b565b61149a6001919592955161120b565b6114a381611055565b146114af575b50505050565b6114ff82600060e09461154f976114c63415611784565b8151600081527f193e01e8b4d5e54c5fa9b167bc086486a0f5eec2c611b31ad1302c7f755f0f0390602090a101526114186113f0611255565b61150f61143c6060830151610c29565b6080810151608084015260a081015160a0840152600060c08401526000828401524361010084015260c08101516101208401520151610140820152611c5b565b388080806114a9565b90506001541438611375565b1561156b57565b60405163100960cb60e01b8152600c6004820152602490fd5b1561158b57565b60405163100960cb60e01b8152600d6004820152602490fd5b156115ab57565b60405163100960cb60e01b8152600e6004820152602490fd5b156115cb57565b60405163100960cb60e01b8152600f6004820152602490fd5b156115eb57565b60405163100960cb60e01b815260106004820152602490fd5b1561160b57565b60405163100960cb60e01b815260116004820152602490fd5b1561162b57565b60405163100960cb60e01b815260126004820152602490fd5b1561164b57565b60405163100960cb60e01b815260146004820152602490fd5b1561166b57565b60405163100960cb60e01b815260156004820152602490fd5b1561168b57565b60405163100960cb60e01b815260176004820152602490fd5b156116ab57565b60405163100960cb60e01b815260186004820152602490fd5b156116cb57565b60405163100960cb60e01b8152601a6004820152602490fd5b156116eb57565b60405163100960cb60e01b815260086004820152602490fd5b1561170b57565b60405163100960cb60e01b815260076004820152602490fd5b1561172b57565b60405163100960cb60e01b8152601b6004820152602490fd5b1561174b57565b60405163100960cb60e01b8152601c6004820152602490fd5b1561176b57565b60405163100960cb60e01b8152601d6004820152602490fd5b1561178b57565b60405163100960cb60e01b8152601f6004820152602490fd5b156117ab57565b60405163100960cb60e01b8152601e6004820152602490fd5b156117cb57565b60405163100960cb60e01b815260206004820152602490fd5b156117eb57565b60405163100960cb60e01b815260216004820152602490fd5b1561180b57565b60405163100960cb60e01b815260226004820152602490fd5b1561182b57565b60405163100960cb60e01b8152602c6004820152602490fd5b1561184b57565b602460405163100960cb60e01b8152816004820152fd5b1561186957565b60405163100960cb60e01b815260256004820152602490fd5b1561188957565b60405163100960cb60e01b815260296004820152602490fd5b156118a957565b60405163100960cb60e01b8152602b6004820152602490fd5b156118c957565b60405163100960cb60e01b815260266004820152602490fd5b156118e957565b60405163100960cb60e01b815260286004820152602490fd5b1561190957565b60405163100960cb60e01b815260236004820152602490fd5b1561192957565b60405163100960cb60e01b8152602d6004820152602490fd5b1561194957565b60405163100960cb60e01b8152602f6004820152602490fd5b9060018110156119735760051b0190565b634e487b7160e01b600052603260045260246000fd5b506040513d6000823e3d90fd5b8181106119a1575050565b60008155600101611996565b50634e487b7160e01b600052601160045260246000fd5b6119cf600254610d2a565b806119d75750565b601f81116001146119ea57506000600255565b6002600052611a2f90601f0160051c600080516020613eca833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf611996565b6000602081208160025555565b60405190611a4982610df4565b8160e06000918281528260208201528260408201528260608201528260808201528260a0820152611a78611223565b60c08201520152565b6000915b60018310611a9257505050565b600190606083519182518152602092838101518483015260408091015115159082015201920192019190611a85565b91909161012060e061014083019460018060a01b0380825116855280602083015116602086015260018060601b0319604083015116604086015260608201511660608501526080810151608085015260a081015160a0850152611b2c60c082015160c0860190611a81565b0151910152565b90601f8211611b40575050565b6101559160026000526020600020906020601f840160051c83019310611b6e575b601f0160051c0190611996565b9091508190611b61565b80519091906001600160401b038111611c4e575b611ba081611b9b600254610d2a565b611b33565b602080601f8311600114611bdc5750819293600092611bd1575b50508160011b916000199060031b1c191617600255565b015190503880611bba565b6002600052601f19831694909190600080516020613eca833981519152926000905b878210611c36575050836001959610611c1d575b505050811b01600255565b015160001960f88460031b161c19169055388080611c12565b80600185968294968601518155019501930190611bfe565b611c56610d64565b611b8c565b61010081015160a082018051909160009110611ef1575060e082015115155b15611d4b57611d46611d389161014061015594611c95611a3c565b92611ca9611ca38351610c29565b856112ce565b611cc2611cb96020840151610c29565b602086016112ce565b611cdb611cd2604084015161107b565b604086016112dd565b611cf4611ceb6060840151610c29565b606086016112ce565b608082015160808501525160a084015261012081015160c0840152015160e0820152611d206006600055565b611d2943600155565b60405192839160208301611ac1565b03601f198101835282610e2b565b611b78565b5060c081015115611e81578060207f12efbaf7d721b41313ea6075bffc8bcdaf87de4d387fbe499734cc9c29fe5c379201611e52611d898251610c29565b611db56060850191611d9b8351610c29565b6101208701515151916001600160a01b0390911690611ef6565b6000808080611dc761042b8951610c29565b61014089015190828215611e78575bf115611e6b575b611dea604085015161107b565b92611e0e611e07611e0060808801519751610c29565b9351610c29565b9151610c29565b91604051958695866001600160601b0319909116815260208101919091526001600160a01b0391821660408201529181166060830152909116608082015260a00190565b0390a160008055611e636000600155565b6101556119c4565b611e73611989565b611ddd565b506108fc611dd6565b8060207fdd5bfdf918cd86e0bb3c19331b121dcfa52fec6eee8c528aa1267c11069456879201611ed8611eb48251610c29565b611ebe8451610c29565b6101208501515151916001600160a01b0390911690611ef6565b611e52606083016000808080611dc761042b8651610c29565b611c7a565b60405163a9059cbb60e01b602082019081526001600160a01b039384166024830152604480830195909552938152611f7293600093849392849190608081016001600160401b03811182821017611f79575b6040525193165af1611f62611f5b611f86565b8092612078565b5060208082518301019101611fd3565b1561012757565b611f81610d64565b611f48565b3d15611fce573d906001600160401b038211611fc1575b60405191611fb5601f8201601f191660200184610e2b565b82523d6000602084013e565b611fc9610d64565b611f9d565b606090565b9081602091031261012757516112208161109d565b15611ff05790565b805115611fff57805190602001fd5b60405163100960cb60e01b815260136004820152602490fd5b156120205790565b80511561202f57805190602001fd5b60405163100960cb60e01b815260166004820152602490fd5b156120505790565b80511561205f57805190602001fd5b60405163100960cb60e01b815260196004820152602490fd5b156120805790565b80511561208f57805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b156120b05790565b8051156120bf57805190602001fd5b60405163100960cb60e01b8152602a6004820152602490fd5b156120e05790565b8051156120ef57805190602001fd5b60405163100960cb60e01b815260276004820152602490fd5b156121105790565b80511561211f57805190602001fd5b60405163100960cb60e01b815260066004820152602490fd5b156121405790565b80511561214f57805190602001fd5b60405163100960cb60e01b8152602e6004820152602490fd5b156121705790565b80511561217f57805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b604051906121a582610dd9565b60008252565b60405190608082016001600160401b038111838210176121ef575b60405260006060838281528260208201526040516121e381610dd9565b83815260408201520152565b6121f7610d64565b6121c6565b6040519061220982610d7b565b816000815260206110396121ab565b6003111561105f57565b61222a610f04565b90612233610f64565b825261223d612198565b60208301526000806040840152612252610fa1565b606084015261225f610fa1565b608084015261226c610fa1565b60a0840152612279610fa1565b60c0840152612286610fa1565b60e0840152612293610fa1565b61010084015280610120840152806101408401528061016084015280610180840152806101a0840152806101c0840152806101e0840152610200830152565b9190826060910312610127576040516122ea81610da3565b604080829480518452602081015160208501520151910152565b906102a0828203126101275761028061231b610f04565b9261232581611067565b845261233360208201611067565b602085015261234460408201611067565b6040850152612355606082016110a7565b60608501526080810151608085015261237060a08201611067565b60a085015260c081015160c085015261238b60e08201611067565b60e085015261010061239e818301611088565b9085015261012080820151908501526101406123bc848284016122d2565b908501526101a06123ce818301611067565b6101608601526124156101c0946123e68685016110a7565b6101808801526101e0926123fb8486016110a7565b9088015261020095868501519088015261022084016110b2565b9085015201519082015290565b9092916060602060a09260c0850196600180861b03168552805182860152015180516003811015612472575b60408501526020810151151582850152604081015151608085015201511515910152565b61247a61103e565b61244e565b5160038110156112185790565b9081526001600160a01b03909116602082015260400190565b6124ad610f24565b9060008083528060208401528060408401528060608401528060808401528060a08401528060c08401528060e084015280610100840152806101208401526124f3610f64565b6101408401528061016084015280610180840152806101a0840152806101c0840152806101e0840152612524611223565b610200840152610220830152565b91909160208060408301948051845201511515910152565b612552612222565b906125616008600054146117c4565b602061257c61256e610e4e565b828082518301019101612304565b9161259461258f61031160045460ff1690565b6117e4565b7fc08304f8842fdf9fe5c32b7c33d0b2bb36997def29e0c6d0fa626741dcab6010604051806125c4843383612422565b0390a16125dc81518015908115613418575b50611804565b016125e7815161247f565b6125f081612218565b6127cb5750610155926126033415611902565b60808201928351906101c0927f772252bb3a260bb19eae21a8a9243292763a37c5bcfc38c9f961eb102482f434848601938451906126536040519283928360209093929193604081019481520152565b0390a185518251524360208351015282516040835101527f180fdae243c5c64ffc1df0ddb1cd8197b0dd0568e7da94515314735a659889e161269c835160405191829182610145565b0390a1606082519101526126ae6124a5565b946126c26126bc8651610c29565b876112ce565b6126db6126d26020870151610c29565b602088016112ce565b6126f46126eb6040870151610c29565b604088016112ce565b61270d6127046060870151151590565b15156060880152565b51608086015261272361090a60a0860151610c29565b60c084015160c086015261273d61092960e0860151610c29565b61275761010061274f8187015161107b565b9087016112dd565b61012080850151908601525161014085015261278361016061277b81860151610c29565b9086016112ce565b61279d61018061279581860151151590565b151590860152565b60006101a085015251908301526101e043818401528101519061020091828401520151610220820152613688565b60016127da829493945161247f565b6127e381612218565b03612e5357604061280491510151806020840152516101c084015110611844565b6128236102008301516020830151908151016040840152513414611862565b61018082015115612b4b57610155927f3d044ba7063717d67e0d87fe0d4039e754ffb4da56fe38ec15b68118e61494ab6129406128666103b16020870151610c29565b61018085019081526129204791610160870192835261288d600160ff196004541617600455565b6128ee6000808a6080810151826128db61042b60408051956128d4876128c660208201986311b693e360e11b8a5233906024840161248c565b03601f198101895288610e2b565b0151610c29565b9251925af16128e8611f86565b906120d8565b506128fe60ff1960045416600455565b61290f3061047060208b0151610c29565b90518082036101a0890152146118c2565b479051900360c0850190815152518060e086015260405191829182612532565b0390a161295260e083015151156118e2565b600080516020613f0a83398151915260808401516020840151516129ae61297d61010088015161107b565b60408051948552602085019390935233928401929092526001600160601b0319909116606083015281906080820190565b0390a1608061010083016129c33382516112ce565b6101c08501516020825101527f98a32cc97347160f667ac80c598d5e35201f18aebdda2dfb0fcf3435a0b11ed3612a01825160405191829182610c42565b0390a151910152612a106124a5565b91612a24612a1e8251610c29565b846112ce565b612a3d612a346020830151610c29565b602085016112ce565b612a56612a4d6040830151610c29565b604085016112ce565b612a6f612a666060830151151590565b15156060850152565b60808101516080840152612a92612a8960a0830151610c29565b60a085016112ce565b60c081015160c0840152612ab5612aac60e0830151610c29565b60e085016112ce565b612ad0612ac661010083015161107b565b61010085016112dd565b61012080820151908401526101408082015190840152612af43361016085016112ce565b6000610180840152612b17612b0d6101a0830151151590565b15156101a0850152565b6020820151516101c08401526101e0904382850152015161020083015260e060408201519101515101610220820152613688565b610155926000808080612b6561042b610160890151610c29565b6101c088015190828215612e4a575bf115612e3d575b7f6414845e2cb4fa724a4bb9e2be1730379da3fd3e492502b2ec255faea70dd41d612c74612baf6103b16020870151610c29565b6101e08501908152612c5447916101c08701928352612bd6600160ff196004541617600455565b612c226000808a608081015182612c0f61042b60408051956128d4876128c660208201986311b693e360e11b8a5233906024840161248c565b9251925af1612c1c611f86565b906120a8565b50612c3260ff1960045416600455565b612c433061047060208b0151610c29565b905180820361020089015214611882565b479051900360608501908151525180608086015260405191829182612532565b0390a1612c86608083015151156118a2565b600080516020613f0a8339815191526080840151602084015151612cb161297d61010088015161107b565b0390a1608060a08301612cc53382516112ce565b6101c08501516020825101527f9cb08e63905b9796748c6de3a2d3150f0ae4b1eff4e7295d4bc76a087a8183e6612d03825160405191829182610c42565b0390a1519101526080612d146124a5565b92612d22611ca38251610c29565b612d32611cb96020830151610c29565b612d4b612d426040830151610c29565b604086016112ce565b612d64612d5b6060830151151590565b15156060860152565b8181015182850152612d85612d7c60a0830151610c29565b60a086016112ce565b60c081015160c0850152612da8612d9f60e0830151610c29565b60e086016112ce565b612dc3612db961010083015161107b565b61010086016112dd565b61012080820151908501526101408082015190850152612de73361016086016112ce565b6000610180850152612e016101a061279581840151151590565b6020830151516101c0850152436101e08501526101e08101516102008501526101c0604084015191015190039101515101610220820152613688565b612e45611989565b612b7b565b506108fc612b74565b612e63600291949392945161247f565b612e6c81612218565b14612e7657505050565b620f4240906102009082828201510194612e9a610120948583019788523414611824565b8551620dbba096908781106131ba5750620dbb9f1990510193610140809201948552600080808060a087019a612ed361042b8d51610c29565b82f1156131ad575b8451620186a09081116130a857612fe2610155986000808080612feb96612f0561042b8c51610c29565b82f11561309b575b612f6f60a0608088019a600080516020613eea833981519152612f398d5160405191829133908361248c565b0390a1604051600181527f4c641ffd9e5bc0e9ae3cd2532d6905a65ba9128ff91febf13fb2ab9ce67a203e9080602081016113db565b612f776124a5565b98612f8b612f858851610c29565b8b6112ce565b612fa4612f9b6020890151610c29565b60208c016112ce565b612fbd612fb46040890151610c29565b60408c016112ce565b612fd6612fcd6060890151151590565b151560608c0152565b5160808a015251610c29565b60a088016112ce565b60c083015160c087015261300e61300560e0850151610c29565b60e088016112ce565b6130286101006130208186015161107b565b9088016112dd565b8083015190860152808201519085015261304a61016061277b81840151610c29565b61305c61018061279581840151151590565b61306e6101a061279581840151151590565b6101c080820151908501526101e09043828601520151908301526201869f19905101610220820152613688565b6130a3611989565b612f0d565b50613115612fe261015598612f6f60a0608088019a600080516020613eea8339815191526130df8d5160405191829133908361248c565b0390a1604051600181527fa076ccd6f4d4afacdd75e994f763766477ff0ec01af31be3caeee7ea5183539c9080602081016113db565b60c083015160c087015261312f61300560e0850151610c29565b6131416101006130208186015161107b565b8083015190860152808201519085015261316361016061277b81840151610c29565b61317561018061279581840151151590565b6131876101a061279581840151151590565b6101c080820151908501526101e090438286015201519083015251610220820152613688565b6131b5611989565b612edb565b620186a09750909491508611613304576000808080610155996131e061042b8851610c29565b82f1156132f7575b61324a60a06080840196600080516020613eea833981519152613214895160405191829133908361248c565b0390a1604051600181527fa85ce6c9c4d5b00c6ef4162e483a5f5b4734f2c5fe254051f0aa1ddc266ec8509080602081016113db565b6132526124a5565b946132606126bc8451610c29565b6132706126d26020850151610c29565b6132806126eb6040850151610c29565b6132906127046060850151151590565b5160808601526132a661090a60a0840151610c29565b60c082015160c08601526132c061092960e0840151610c29565b6132d261010061274f8185015161107b565b8082015190850152610140808201519085015261304a61016061277b81840151610c29565b6132ff611989565b6131e8565b610155955061336b60a06080840196600080516020613eea833981519152613335895160405191829133908361248c565b0390a1604051600181527f5a89e46585295308eb489e3285fd79d6cbfdbb275c28e9e8e50a607b2395a75d9080602081016113db565b6133736124a5565b946133816126bc8451610c29565b6133916126d26020850151610c29565b6133a16126eb6040850151610c29565b6133b16127046060850151151590565b5160808601526133c761090a60a0840151610c29565b60c082015160c08601526133e161092960e0840151610c29565b6133f361010061274f8185015161107b565b8082015190850152610140808201519085015261316361016061277b81840151610c29565b905060015414386125d6565b90816020910312610127575190565b6000809161122093826040519160208301926370a0823160e01b845260018060a01b0380921660248201526024815261346b81610da3565b5193165af161348261347b611f86565b8092612108565b5060208082518301019101613424565b6040519060c082016001600160401b038111838210176134e2575b604052600060a0836134bd610fa1565b81526134c7610fa1565b60208201528260408201528260608201528260808201520152565b6134ea610d64565b6134ad565b6134f7610f04565b9060008083528060208401528060408401528060608401528060808401528060a08401528060c08401528060e0840152806101008401528061012084015261353d610f64565b6101408401528061016084015280610180840152806101a0840152806101c0840152613567611223565b6101e0840152610200830152565b9190916102806102a082019361358c838251610c35565b61359e60208201516020850190610c35565b6135b060408201516040850190610c35565b606081810151151590840152608081015160808401526135d860a082015160a0850190610c35565b60c081015160c08401526135f460e082015160e0850190610c35565b610100818101516001600160601b031916908401526101208082015190840152613627610140808301519085019061012c565b6101608101519061363e6101a09283860190610c35565b611b2c610180820151926136596101c0948588019015159052565b8201519261366e6101e0948588019015159052565b820151926102009384870152820151610220860190611a81565b613690613492565b6101e082810180516101208086018051909591939260009110613ac957506101a086015115155b156137d557505091611d469161022061015595611d38956136d66134ef565b946136e46126bc8451610c29565b6136f46126d26020850151610c29565b6137046126eb6040850151610c29565b6137146127046060850151151590565b6080830151608087015261372e612fe260a0850151610c29565b60c083015160c087015261374861300560e0850151610c29565b61375a6101006130208186015161107b565b5190850152610140808201519085015261377c61016061277b81840151610c29565b61378e61018061279581840151151590565b60016101a08501526101c080820151908501526102009283820151908501520151908201526137bd6008600055565b6137c643600155565b60405192839160208301613575565b9250925060208401936137eb6103b18651610c29565b6080840190815247946060850195865261380d600160ff196004541617600455565b6101409561388e8785015193613860600080886040988261384d61042b8c8051956128d4876128c66020820198634c344d9d60e01b8a5260248301610145565b9251925af161385a611f86565b90612138565b5061387060ff1960045416600455565b61387e306104708c51610c29565b905180820360a08a015214611922565b47905190038551526138ee85517fb296a23815642cccb180d3d63b9e3011b9aa54a0192401ac4b6d15cf614a9e436138d26020890192808452865191829182612532565b0390a18361022086015191519182510197019687525115611942565b6080830151916101c08401908151937fc3acd7ee24f4f9cf4606c64c38b8640466129f78b44ac84b4e810f68345d08b46139288751610c29565b9561393660e0890151610c29565b9261399760c08a015198610100998a8c0196613952885161107b565b895195865260208601969096526001600160a01b039283166040860152909116606084015260808301526001600160601b031990921660a082015290819060c0820190565b0390a1825115613a47576139a9611255565b9986516139b590610c29565b6139bf908c6112ce565b516139c990610c29565b6139d69060208c016112ce565b516139e09061107b565b6139eb918a016112dd565b6101608401516139fa90610c29565b613a079060608a016112ce565b5160808801528051613a1890613ace565b60a0880152600160c0880152600160e08801525190860152610200015190840152519082015261015590611c5b565b505050505060009485945084939184935061016061042b916128d4613a6f613a939551610c29565b613a798351610c29565b6102008401515151916001600160a01b0390911690611ef6565b905190828215613ac0575bf115613ab3575b60008055611e636000600155565b613abb611989565b613aa5565b506108fc613a9e565b6136b7565b906032820191828111613ae4575b821061012757565b613aec6119ad565b613adc565b9190820191828111613ae457821061012757565b60209060031901126101275760405190613b1e82610dd9565b6004358252565b60209060631901126101275760405190613b3e82610dd9565b6064358252565b60405190613b5282610df4565b8160e0600091828152826020820152826040820152826060820152826080820152613b7b610f64565b60a08201528260c08201520152565b613b92610f44565b906000808352613ba0610fa1565b6020840152613bad610fa1565b6040840152613bba610fa1565b6060840152613bc7610fa1565b60808401528060a0840152613bda613b45565b60c0840152613be7610fa1565b60e0840152613bf4610fa1565b610100840152613c02610f64565b610120840152806101408401528061016084015280610180840152806101a0840152806101c0840152806101e08401528061020084015280610220840152610240830152565b90818103906101a08212610127576040805193613c6485610e10565b613c6d81611067565b8552613c7b60208201611067565b602086015260e0603f19850112610127576060825194613c9a86610e10565b828401518652605f19011261012757815193613cb585610da3565b606082015185526080820151602086015260a0820151926001600160801b03198416840361012757856101409482613d359801526020830152613cfa60c08401611067565b8183015260e08301516060830152613d156101008401611088565b6080830152860152613d2a6101208201611067565b6060860152016110b2565b608082015290565b908160209103126101275761122090611067565b815181526020808301516001600160a01b039081168284015260408085015181850152606080860151909216918401919091526080808501516001600160601b0319169084015260a0808501518051918501919091529182015160c084015201516001600160801b03191660e0808301919091526101408201939261015592916101209160c08101516101008501520151910190610c35565b6040516323b872dd60e01b602082019081526001600160a01b0392831660248301523060448301526001606480840191909152825261122093600093849391929184919060a081016001600160401b03811182821017613e5f575b6040525193165af1611f62613e58611f86565b8092612168565b613e67610d64565b613e45565b9190613e76611223565b9260005b60018110613e885750508252565b80613e9560019284611962565b51613ea08288611962565b52613eab8187611962565b506000198114613ebc575b01613e7a565b613ec46119ad565b613eb656fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace4115afd72fb2573b80edceb720510a70225fa83510b4ecf26f2bd729aafb3e4510e5d75f4df634f7c0e19fee3620d2d34905e2dcd059beed6673032e56c98b8ba164736f6c6343000811000a`,
  BytecodeLen: 18155,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './src/contracts/auction.rsh:77:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './src/contracts/auction.rsh:246:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './src/contracts/auction.rsh:246:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './src/contracts/auction.rsh:193:66:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './src/contracts/auction.rsh:246:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './src/contracts/auction.rsh:114:31:after expr stmt semicolon',
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
  "Auctioneer_acceptSale": Auctioneer_acceptSale,
  "Auctioneer_rejectSale": Auctioneer_rejectSale,
  "Auctioneer_stopAuction": Auctioneer_stopAuction,
  "Bidder_bid": Bidder_bid,
  "Bidder_optIn": Bidder_optIn,
  "Seller": Seller
  };
export const _APIs = {
  Auctioneer: {
    acceptSale: Auctioneer_acceptSale,
    rejectSale: Auctioneer_rejectSale,
    stopAuction: Auctioneer_stopAuction
    },
  Bidder: {
    bid: Bidder_bid,
    optIn: Bidder_optIn
    }
  };
