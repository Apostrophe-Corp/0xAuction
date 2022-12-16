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
    fs: ['at ./src/contracts/auction.rsh:197:36:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:197:36:function exp)', 'at ./src/contracts/auction.rsh:191:66:application call to "runAuctioneer_acceptSale0_444" (defined at: ./src/contracts/auction.rsh:195:29:function exp)', 'at ./src/contracts/auction.rsh:191:66:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:191:66:function exp)'],
    msg: 'in',
    who: 'Auctioneer_acceptSale'
    });
  const v1273 = stdlib.addressEq(v1269, v701);
  stdlib.assert(v1273, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/auction.rsh:198:46:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/auction.rsh:197:36:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:197:36:function exp)', 'at ./src/contracts/auction.rsh:197:36:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:197:36:function exp)', 'at ./src/contracts/auction.rsh:191:66:application call to "runAuctioneer_acceptSale0_444" (defined at: ./src/contracts/auction.rsh:195:29:function exp)', 'at ./src/contracts/auction.rsh:191:66:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:191:66:function exp)'],
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
    pay: [stdlib.checkedBigNumberify('./src/contracts/auction.rsh:200:39:decimal', stdlib.UInt_max, '0'), []],
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
            const v3109 = v1259[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:219:41:application', stdlib.UInt_max, '0')];
            const v3110 = v3109[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:219:41:application', stdlib.UInt_max, '0')];
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
          at: './src/contracts/auction.rsh:196:33:application',
          fs: ['at ./src/contracts/auction.rsh:196:33:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:196:33:function exp)', 'at ./src/contracts/auction.rsh:202:47:application call to "notify" (defined at: ./src/contracts/auction.rsh:201:42:function exp)', 'at ./src/contracts/auction.rsh:201:42:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:201:42:function exp)'],
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
        const v3109 = v1259[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:219:41:application', stdlib.UInt_max, '0')];
        const v3110 = v3109[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:219:41:application', stdlib.UInt_max, '0')];
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
    fs: ['at ./src/contracts/auction.rsh:208:36:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:208:36:function exp)', 'at ./src/contracts/auction.rsh:191:66:application call to "runAuctioneer_rejectSale0_444" (defined at: ./src/contracts/auction.rsh:206:29:function exp)', 'at ./src/contracts/auction.rsh:191:66:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:191:66:function exp)'],
    msg: 'in',
    who: 'Auctioneer_rejectSale'
    });
  const v1283 = stdlib.addressEq(v1279, v701);
  stdlib.assert(v1283, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/auction.rsh:209:46:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/auction.rsh:208:36:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:208:36:function exp)', 'at ./src/contracts/auction.rsh:208:36:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:208:36:function exp)', 'at ./src/contracts/auction.rsh:191:66:application call to "runAuctioneer_rejectSale0_444" (defined at: ./src/contracts/auction.rsh:206:29:function exp)', 'at ./src/contracts/auction.rsh:191:66:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:191:66:function exp)'],
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
    pay: [stdlib.checkedBigNumberify('./src/contracts/auction.rsh:211:39:decimal', stdlib.UInt_max, '0'), []],
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
            const v3144 = v1259[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:229:41:application', stdlib.UInt_max, '0')];
            const v3145 = v3144[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:229:41:application', stdlib.UInt_max, '0')];
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
          at: './src/contracts/auction.rsh:207:33:application',
          fs: ['at ./src/contracts/auction.rsh:207:33:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:207:33:function exp)', 'at ./src/contracts/auction.rsh:213:47:application call to "notify" (defined at: ./src/contracts/auction.rsh:212:42:function exp)', 'at ./src/contracts/auction.rsh:212:42:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:212:42:function exp)'],
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
        const v3144 = v1259[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:229:41:application', stdlib.UInt_max, '0')];
        const v3145 = v3144[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:229:41:application', stdlib.UInt_max, '0')];
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
    fs: ['at ./src/contracts/auction.rsh:159:36:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:159:36:function exp)', 'at ./src/contracts/auction.rsh:113:31:application call to "runAuctioneer_stopAuction0_123" (defined at: ./src/contracts/auction.rsh:157:29:function exp)', 'at ./src/contracts/auction.rsh:113:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:113:31:function exp)'],
    msg: 'in',
    who: 'Auctioneer_stopAuction'
    });
  const v798 = stdlib.addressEq(v794, v701);
  stdlib.assert(v798, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/auction.rsh:160:46:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/auction.rsh:159:36:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:159:36:function exp)', 'at ./src/contracts/auction.rsh:159:36:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:159:36:function exp)', 'at ./src/contracts/auction.rsh:113:31:application call to "runAuctioneer_stopAuction0_123" (defined at: ./src/contracts/auction.rsh:157:29:function exp)', 'at ./src/contracts/auction.rsh:113:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:113:31:function exp)'],
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
    pay: [stdlib.checkedBigNumberify('./src/contracts/auction.rsh:162:39:decimal', stdlib.UInt_max, '0'), []],
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
                  bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:176:37:application', stdlib.UInt_max, '0'),
                  fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:176:37:application', stdlib.UInt_max, '0'),
                  toks: []
                  })
                })
              return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
            const v3157 = await txn1.getOutput('internal', 'v3156', ctc13, v3156);
            const v3158 = v3157[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:176:37:application', stdlib.UInt_max, '0')];
            const v3159 = stdlib.add(v783, v3158);
            null;
            const v3161 = stdlib.gt(v775, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:188:25:decimal', stdlib.UInt_max, '0'));
            if (v3161) {
              const v3162 = stdlib.safeAdd(v834, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
              const v3190 = v782;
              const v3191 = v3159;
              const v3192 = stdlib.le(v834, v3162);
              if (v3192) {
                sim_r.isHalt = false;
                }
              else {
                const v3194 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:219:41:application', stdlib.UInt_max, '0')];
                const v3195 = v3194[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:219:41:application', stdlib.UInt_max, '0')];
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
              const v3185 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:240:33:application', stdlib.UInt_max, '0')];
              const v3186 = v3185[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:240:33:application', stdlib.UInt_max, '0')];
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
          at: './src/contracts/auction.rsh:158:33:application',
          fs: ['at ./src/contracts/auction.rsh:158:33:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:158:33:function exp)', 'at ./src/contracts/auction.rsh:170:47:application call to "notify" (defined at: ./src/contracts/auction.rsh:163:42:function exp)', 'at ./src/contracts/auction.rsh:163:42:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:163:42:function exp)'],
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
        const v3158 = v3157[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:176:37:application', stdlib.UInt_max, '0')];
        const v3159 = stdlib.add(v783, v3158);
        const v3160 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3158);
        stdlib.assert(v3160, {
          at: './src/contracts/auction.rsh:176:37:application',
          fs: [],
          msg: 'remote bill check',
          who: 'Auctioneer_stopAuction'
          });
        null;
        const v3161 = stdlib.gt(v775, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:188:25:decimal', stdlib.UInt_max, '0'));
        if (v3161) {
          const v3162 = stdlib.safeAdd(v834, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
          const v3190 = v782;
          const v3191 = v3159;
          const v3192 = stdlib.le(v834, v3162);
          if (v3192) {
            return;
            }
          else {
            const v3194 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:219:41:application', stdlib.UInt_max, '0')];
            const v3195 = v3194[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:219:41:application', stdlib.UInt_max, '0')];
            ;
            ;
            null;
            return;
            }}
        else {
          const v3185 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:240:33:application', stdlib.UInt_max, '0')];
          const v3186 = v3185[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:240:33:application', stdlib.UInt_max, '0')];
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
    fs: ['at ./src/contracts/auction.rsh:130:49:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:130:49:function exp)', 'at ./src/contracts/auction.rsh:113:31:application call to "runBidder_bid0_123" (defined at: ./src/contracts/auction.rsh:130:30:function exp)', 'at ./src/contracts/auction.rsh:113:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:113:31:function exp)'],
    msg: 'in',
    who: 'Bidder_bid'
    });
  const v807 = v806[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v809 = stdlib.gt(v807, v775);
  stdlib.assert(v809, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/auction.rsh:131:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/auction.rsh:130:49:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:130:49:function exp)', 'at ./src/contracts/auction.rsh:113:31:application call to "runBidder_bid0_123" (defined at: ./src/contracts/auction.rsh:130:30:function exp)', 'at ./src/contracts/auction.rsh:113:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:113:31:function exp)'],
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
          const v973 = v967[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:130:30:spread', stdlib.UInt_max, '0')];
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
                  bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:137:91:application', stdlib.UInt_max, '0'),
                  fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:137:91:application', stdlib.UInt_max, '0'),
                  toks: []
                  })
                })
              return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
            const v1031 = await txn1.getOutput('internal', 'v1030', ctc13, v1030);
            const v1033 = v1031[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:137:91:application', stdlib.UInt_max, '0')];
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
                    bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:176:37:application', stdlib.UInt_max, '0'),
                    fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:176:37:application', stdlib.UInt_max, '0'),
                    toks: []
                    })
                  })
                return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
              const v3573 = await txn1.getOutput('internal', 'v3572', ctc13, v3572);
              const v3574 = v3573[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:176:37:application', stdlib.UInt_max, '0')];
              const v3575 = stdlib.add(v1038, v3574);
              null;
              const v3577 = stdlib.gt(v973, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:188:25:decimal', stdlib.UInt_max, '0'));
              if (v3577) {
                const v3578 = stdlib.safeAdd(v834, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
                const v3606 = v782;
                const v3607 = v3575;
                const v3608 = stdlib.le(v834, v3578);
                if (v3608) {
                  sim_r.isHalt = false;
                  }
                else {
                  const v3610 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:219:41:application', stdlib.UInt_max, '0')];
                  const v3611 = v3610[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:219:41:application', stdlib.UInt_max, '0')];
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
                const v3601 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:240:33:application', stdlib.UInt_max, '0')];
                const v3602 = v3601[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:240:33:application', stdlib.UInt_max, '0')];
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
                  bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:137:91:application', stdlib.UInt_max, '0'),
                  fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:137:91:application', stdlib.UInt_max, '0'),
                  toks: []
                  })
                })
              return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
            const v1007 = await txn1.getOutput('internal', 'v1006', ctc13, v1006);
            const v1009 = v1007[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:137:91:application', stdlib.UInt_max, '0')];
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
                    bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:176:37:application', stdlib.UInt_max, '0'),
                    fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:176:37:application', stdlib.UInt_max, '0'),
                    toks: []
                    })
                  })
                return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
              const v3625 = await txn1.getOutput('internal', 'v3624', ctc13, v3624);
              const v3626 = v3625[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:176:37:application', stdlib.UInt_max, '0')];
              const v3627 = stdlib.add(v1014, v3626);
              null;
              const v3629 = stdlib.gt(v973, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:188:25:decimal', stdlib.UInt_max, '0'));
              if (v3629) {
                const v3630 = stdlib.safeAdd(v834, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
                const v3658 = v782;
                const v3659 = v3627;
                const v3660 = stdlib.le(v834, v3630);
                if (v3660) {
                  sim_r.isHalt = false;
                  }
                else {
                  const v3662 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:219:41:application', stdlib.UInt_max, '0')];
                  const v3663 = v3662[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:219:41:application', stdlib.UInt_max, '0')];
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
                const v3653 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:240:33:application', stdlib.UInt_max, '0')];
                const v3654 = v3653[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:240:33:application', stdlib.UInt_max, '0')];
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
      const v973 = v967[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:130:30:spread', stdlib.UInt_max, '0')];
      const v974 = stdlib.gt(v973, v775);
      stdlib.assert(v974, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/auction.rsh:131:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/auction.rsh:130:49:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:130:49:function exp)', 'at ./src/contracts/auction.rsh:113:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:130:49:function exp)', 'at ./src/contracts/auction.rsh:113:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:113:31:function exp)'],
        msg: 'Your bid is too low, please try again',
        who: 'Bidder_bid'
        });
      const v978 = stdlib.add(v783, v973);
      ;
      if (v773) {
        const v1030 = undefined /* Remote */;
        const v1031 = await txn1.getOutput('internal', 'v1030', ctc13, v1030);
        const v1033 = v1031[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:137:91:application', stdlib.UInt_max, '0')];
        const v1038 = stdlib.add(v978, v1033);
        const v1039 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1033);
        stdlib.assert(v1039, {
          at: './src/contracts/auction.rsh:137:91:application',
          fs: ['at ./src/contracts/auction.rsh:134:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:134:50:function exp)'],
          msg: 'remote bill check',
          who: 'Bidder_bid'
          });
        null;
        const v1041 = [v832, v775];
        const v1042 = await txn1.getOutput('Bidder_bid', 'v1041', ctc14, v1041);
        if (v317) {
          stdlib.protect(ctc12, await interact.out(v967, v1042), {
            at: './src/contracts/auction.rsh:130:31:application',
            fs: ['at ./src/contracts/auction.rsh:130:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:130:31:function exp)', 'at ./src/contracts/auction.rsh:139:55:application call to "notify" (defined at: ./src/contracts/auction.rsh:134:50:function exp)', 'at ./src/contracts/auction.rsh:134:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:134:50:function exp)'],
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
          const v3574 = v3573[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:176:37:application', stdlib.UInt_max, '0')];
          const v3575 = stdlib.add(v1038, v3574);
          const v3576 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3574);
          stdlib.assert(v3576, {
            at: './src/contracts/auction.rsh:176:37:application',
            fs: [],
            msg: 'remote bill check',
            who: 'Bidder_bid'
            });
          null;
          const v3577 = stdlib.gt(v973, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:188:25:decimal', stdlib.UInt_max, '0'));
          if (v3577) {
            const v3578 = stdlib.safeAdd(v834, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
            const v3606 = v782;
            const v3607 = v3575;
            const v3608 = stdlib.le(v834, v3578);
            if (v3608) {
              return;
              }
            else {
              const v3610 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:219:41:application', stdlib.UInt_max, '0')];
              const v3611 = v3610[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:219:41:application', stdlib.UInt_max, '0')];
              ;
              ;
              null;
              return;
              }}
          else {
            const v3601 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:240:33:application', stdlib.UInt_max, '0')];
            const v3602 = v3601[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:240:33:application', stdlib.UInt_max, '0')];
            ;
            ;
            return;
            }}}
      else {
        const v1002 = stdlib.sub(v978, v775);
        ;
        const v1006 = undefined /* Remote */;
        const v1007 = await txn1.getOutput('internal', 'v1006', ctc13, v1006);
        const v1009 = v1007[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:137:91:application', stdlib.UInt_max, '0')];
        const v1014 = stdlib.add(v1002, v1009);
        const v1015 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1009);
        stdlib.assert(v1015, {
          at: './src/contracts/auction.rsh:137:91:application',
          fs: ['at ./src/contracts/auction.rsh:134:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:134:50:function exp)'],
          msg: 'remote bill check',
          who: 'Bidder_bid'
          });
        null;
        const v1017 = [v832, v775];
        const v1018 = await txn1.getOutput('Bidder_bid', 'v1017', ctc14, v1017);
        if (v317) {
          stdlib.protect(ctc12, await interact.out(v967, v1018), {
            at: './src/contracts/auction.rsh:130:31:application',
            fs: ['at ./src/contracts/auction.rsh:130:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:130:31:function exp)', 'at ./src/contracts/auction.rsh:139:55:application call to "notify" (defined at: ./src/contracts/auction.rsh:134:50:function exp)', 'at ./src/contracts/auction.rsh:134:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:134:50:function exp)'],
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
          const v3626 = v3625[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:176:37:application', stdlib.UInt_max, '0')];
          const v3627 = stdlib.add(v1014, v3626);
          const v3628 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3626);
          stdlib.assert(v3628, {
            at: './src/contracts/auction.rsh:176:37:application',
            fs: [],
            msg: 'remote bill check',
            who: 'Bidder_bid'
            });
          null;
          const v3629 = stdlib.gt(v973, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:188:25:decimal', stdlib.UInt_max, '0'));
          if (v3629) {
            const v3630 = stdlib.safeAdd(v834, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
            const v3658 = v782;
            const v3659 = v3627;
            const v3660 = stdlib.le(v834, v3630);
            if (v3660) {
              return;
              }
            else {
              const v3662 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:219:41:application', stdlib.UInt_max, '0')];
              const v3663 = v3662[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:219:41:application', stdlib.UInt_max, '0')];
              ;
              ;
              null;
              return;
              }}
          else {
            const v3653 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:240:33:application', stdlib.UInt_max, '0')];
            const v3654 = v3653[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:240:33:application', stdlib.UInt_max, '0')];
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
    fs: ['at ./src/contracts/auction.rsh:144:48:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:144:48:function exp)', 'at ./src/contracts/auction.rsh:113:31:application call to "runBidder_optIn0_123" (defined at: ./src/contracts/auction.rsh:144:30:function exp)', 'at ./src/contracts/auction.rsh:113:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:113:31:function exp)'],
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
          const v1184 = stdlib.ge(v1109, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:148:83:application', stdlib.UInt_max, '900000'));
          if (v1184) {
            const v1188 = stdlib.sub(v1109, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:148:83:application', stdlib.UInt_max, '900000'));
            sim_r.txns.push({
              kind: 'from',
              to: v741,
              tok: undefined /* Nothing */
              });
            const v1190 = stdlib.ge(v1188, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:149:84:application', stdlib.UInt_max, '100000'));
            if (v1190) {
              const v1194 = stdlib.sub(v1188, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:149:84:application', stdlib.UInt_max, '100000'));
              sim_r.txns.push({
                kind: 'from',
                to: v701,
                tok: undefined /* Nothing */
                });
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
                      bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:176:37:application', stdlib.UInt_max, '0'),
                      fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:176:37:application', stdlib.UInt_max, '0'),
                      toks: []
                      })
                    })
                  return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
                const v4041 = await txn1.getOutput('internal', 'v4040', ctc13, v4040);
                const v4042 = v4041[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:176:37:application', stdlib.UInt_max, '0')];
                const v4043 = stdlib.add(v1194, v4042);
                null;
                const v4045 = stdlib.gt(v775, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:188:25:decimal', stdlib.UInt_max, '0'));
                if (v4045) {
                  const v4046 = stdlib.safeAdd(v834, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
                  const v4074 = v782;
                  const v4075 = v4043;
                  const v4076 = stdlib.le(v834, v4046);
                  if (v4076) {
                    sim_r.isHalt = false;
                    }
                  else {
                    const v4078 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:219:41:application', stdlib.UInt_max, '0')];
                    const v4079 = v4078[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:219:41:application', stdlib.UInt_max, '0')];
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
                  const v4069 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:240:33:application', stdlib.UInt_max, '0')];
                  const v4070 = v4069[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:240:33:application', stdlib.UInt_max, '0')];
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
                      bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:176:37:application', stdlib.UInt_max, '0'),
                      fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:176:37:application', stdlib.UInt_max, '0'),
                      toks: []
                      })
                    })
                  return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
                const v4093 = await txn1.getOutput('internal', 'v4092', ctc13, v4092);
                const v4094 = v4093[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:176:37:application', stdlib.UInt_max, '0')];
                const v4095 = stdlib.add(v1188, v4094);
                null;
                const v4097 = stdlib.gt(v775, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:188:25:decimal', stdlib.UInt_max, '0'));
                if (v4097) {
                  const v4098 = stdlib.safeAdd(v834, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
                  const v4126 = v782;
                  const v4127 = v4095;
                  const v4128 = stdlib.le(v834, v4098);
                  if (v4128) {
                    sim_r.isHalt = false;
                    }
                  else {
                    const v4130 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:219:41:application', stdlib.UInt_max, '0')];
                    const v4131 = v4130[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:219:41:application', stdlib.UInt_max, '0')];
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
                  const v4121 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:240:33:application', stdlib.UInt_max, '0')];
                  const v4122 = v4121[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:240:33:application', stdlib.UInt_max, '0')];
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
            const v1210 = stdlib.ge(v1109, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:149:84:application', stdlib.UInt_max, '100000'));
            if (v1210) {
              const v1214 = stdlib.sub(v1109, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:149:84:application', stdlib.UInt_max, '100000'));
              sim_r.txns.push({
                kind: 'from',
                to: v701,
                tok: undefined /* Nothing */
                });
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
                      bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:176:37:application', stdlib.UInt_max, '0'),
                      fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:176:37:application', stdlib.UInt_max, '0'),
                      toks: []
                      })
                    })
                  return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
                const v4145 = await txn1.getOutput('internal', 'v4144', ctc13, v4144);
                const v4146 = v4145[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:176:37:application', stdlib.UInt_max, '0')];
                const v4147 = stdlib.add(v1214, v4146);
                null;
                const v4149 = stdlib.gt(v775, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:188:25:decimal', stdlib.UInt_max, '0'));
                if (v4149) {
                  const v4150 = stdlib.safeAdd(v834, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
                  const v4178 = v782;
                  const v4179 = v4147;
                  const v4180 = stdlib.le(v834, v4150);
                  if (v4180) {
                    sim_r.isHalt = false;
                    }
                  else {
                    const v4182 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:219:41:application', stdlib.UInt_max, '0')];
                    const v4183 = v4182[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:219:41:application', stdlib.UInt_max, '0')];
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
                  const v4173 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:240:33:application', stdlib.UInt_max, '0')];
                  const v4174 = v4173[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:240:33:application', stdlib.UInt_max, '0')];
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
                      bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:176:37:application', stdlib.UInt_max, '0'),
                      fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:176:37:application', stdlib.UInt_max, '0'),
                      toks: []
                      })
                    })
                  return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
                const v4197 = await txn1.getOutput('internal', 'v4196', ctc13, v4196);
                const v4198 = v4197[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:176:37:application', stdlib.UInt_max, '0')];
                const v4199 = stdlib.add(v1109, v4198);
                null;
                const v4201 = stdlib.gt(v775, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:188:25:decimal', stdlib.UInt_max, '0'));
                if (v4201) {
                  const v4202 = stdlib.safeAdd(v834, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
                  const v4230 = v782;
                  const v4231 = v4199;
                  const v4232 = stdlib.le(v834, v4202);
                  if (v4232) {
                    sim_r.isHalt = false;
                    }
                  else {
                    const v4234 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:219:41:application', stdlib.UInt_max, '0')];
                    const v4235 = v4234[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:219:41:application', stdlib.UInt_max, '0')];
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
                  const v4225 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:240:33:application', stdlib.UInt_max, '0')];
                  const v4226 = v4225[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:240:33:application', stdlib.UInt_max, '0')];
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
      const v1184 = stdlib.ge(v1109, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:148:83:application', stdlib.UInt_max, '900000'));
      if (v1184) {
        const v1188 = stdlib.sub(v1109, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:148:83:application', stdlib.UInt_max, '900000'));
        ;
        const v1190 = stdlib.ge(v1188, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:149:84:application', stdlib.UInt_max, '100000'));
        if (v1190) {
          const v1194 = stdlib.sub(v1188, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:149:84:application', stdlib.UInt_max, '100000'));
          ;
          const v1195 = true;
          const v1196 = await txn1.getOutput('Bidder_optIn', 'v1195', ctc7, v1195);
          if (v317) {
            stdlib.protect(ctc12, await interact.out(v1098, v1196), {
              at: './src/contracts/auction.rsh:144:31:application',
              fs: ['at ./src/contracts/auction.rsh:144:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:144:31:function exp)', 'at ./src/contracts/auction.rsh:152:55:application call to "notify" (defined at: ./src/contracts/auction.rsh:147:50:function exp)', 'at ./src/contracts/auction.rsh:147:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:147:50:function exp)'],
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
            const v4042 = v4041[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:176:37:application', stdlib.UInt_max, '0')];
            const v4043 = stdlib.add(v1194, v4042);
            const v4044 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4042);
            stdlib.assert(v4044, {
              at: './src/contracts/auction.rsh:176:37:application',
              fs: [],
              msg: 'remote bill check',
              who: 'Bidder_optIn'
              });
            null;
            const v4045 = stdlib.gt(v775, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:188:25:decimal', stdlib.UInt_max, '0'));
            if (v4045) {
              const v4046 = stdlib.safeAdd(v834, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
              const v4074 = v782;
              const v4075 = v4043;
              const v4076 = stdlib.le(v834, v4046);
              if (v4076) {
                return;
                }
              else {
                const v4078 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:219:41:application', stdlib.UInt_max, '0')];
                const v4079 = v4078[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:219:41:application', stdlib.UInt_max, '0')];
                ;
                ;
                null;
                return;
                }}
            else {
              const v4069 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:240:33:application', stdlib.UInt_max, '0')];
              const v4070 = v4069[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:240:33:application', stdlib.UInt_max, '0')];
              ;
              ;
              return;
              }}}
        else {
          const v1202 = true;
          const v1203 = await txn1.getOutput('Bidder_optIn', 'v1202', ctc7, v1202);
          if (v317) {
            stdlib.protect(ctc12, await interact.out(v1098, v1203), {
              at: './src/contracts/auction.rsh:144:31:application',
              fs: ['at ./src/contracts/auction.rsh:144:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:144:31:function exp)', 'at ./src/contracts/auction.rsh:152:55:application call to "notify" (defined at: ./src/contracts/auction.rsh:147:50:function exp)', 'at ./src/contracts/auction.rsh:147:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:147:50:function exp)'],
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
            const v4094 = v4093[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:176:37:application', stdlib.UInt_max, '0')];
            const v4095 = stdlib.add(v1188, v4094);
            const v4096 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4094);
            stdlib.assert(v4096, {
              at: './src/contracts/auction.rsh:176:37:application',
              fs: [],
              msg: 'remote bill check',
              who: 'Bidder_optIn'
              });
            null;
            const v4097 = stdlib.gt(v775, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:188:25:decimal', stdlib.UInt_max, '0'));
            if (v4097) {
              const v4098 = stdlib.safeAdd(v834, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
              const v4126 = v782;
              const v4127 = v4095;
              const v4128 = stdlib.le(v834, v4098);
              if (v4128) {
                return;
                }
              else {
                const v4130 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:219:41:application', stdlib.UInt_max, '0')];
                const v4131 = v4130[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:219:41:application', stdlib.UInt_max, '0')];
                ;
                ;
                null;
                return;
                }}
            else {
              const v4121 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:240:33:application', stdlib.UInt_max, '0')];
              const v4122 = v4121[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:240:33:application', stdlib.UInt_max, '0')];
              ;
              ;
              return;
              }}}}
      else {
        const v1210 = stdlib.ge(v1109, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:149:84:application', stdlib.UInt_max, '100000'));
        if (v1210) {
          const v1214 = stdlib.sub(v1109, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:149:84:application', stdlib.UInt_max, '100000'));
          ;
          const v1215 = true;
          const v1216 = await txn1.getOutput('Bidder_optIn', 'v1215', ctc7, v1215);
          if (v317) {
            stdlib.protect(ctc12, await interact.out(v1098, v1216), {
              at: './src/contracts/auction.rsh:144:31:application',
              fs: ['at ./src/contracts/auction.rsh:144:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:144:31:function exp)', 'at ./src/contracts/auction.rsh:152:55:application call to "notify" (defined at: ./src/contracts/auction.rsh:147:50:function exp)', 'at ./src/contracts/auction.rsh:147:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:147:50:function exp)'],
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
            const v4146 = v4145[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:176:37:application', stdlib.UInt_max, '0')];
            const v4147 = stdlib.add(v1214, v4146);
            const v4148 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4146);
            stdlib.assert(v4148, {
              at: './src/contracts/auction.rsh:176:37:application',
              fs: [],
              msg: 'remote bill check',
              who: 'Bidder_optIn'
              });
            null;
            const v4149 = stdlib.gt(v775, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:188:25:decimal', stdlib.UInt_max, '0'));
            if (v4149) {
              const v4150 = stdlib.safeAdd(v834, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
              const v4178 = v782;
              const v4179 = v4147;
              const v4180 = stdlib.le(v834, v4150);
              if (v4180) {
                return;
                }
              else {
                const v4182 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:219:41:application', stdlib.UInt_max, '0')];
                const v4183 = v4182[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:219:41:application', stdlib.UInt_max, '0')];
                ;
                ;
                null;
                return;
                }}
            else {
              const v4173 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:240:33:application', stdlib.UInt_max, '0')];
              const v4174 = v4173[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:240:33:application', stdlib.UInt_max, '0')];
              ;
              ;
              return;
              }}}
        else {
          const v1222 = true;
          const v1223 = await txn1.getOutput('Bidder_optIn', 'v1222', ctc7, v1222);
          if (v317) {
            stdlib.protect(ctc12, await interact.out(v1098, v1223), {
              at: './src/contracts/auction.rsh:144:31:application',
              fs: ['at ./src/contracts/auction.rsh:144:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:144:31:function exp)', 'at ./src/contracts/auction.rsh:152:55:application call to "notify" (defined at: ./src/contracts/auction.rsh:147:50:function exp)', 'at ./src/contracts/auction.rsh:147:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:147:50:function exp)'],
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
            const v4198 = v4197[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:176:37:application', stdlib.UInt_max, '0')];
            const v4199 = stdlib.add(v1109, v4198);
            const v4200 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4198);
            stdlib.assert(v4200, {
              at: './src/contracts/auction.rsh:176:37:application',
              fs: [],
              msg: 'remote bill check',
              who: 'Bidder_optIn'
              });
            null;
            const v4201 = stdlib.gt(v775, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:188:25:decimal', stdlib.UInt_max, '0'));
            if (v4201) {
              const v4202 = stdlib.safeAdd(v834, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
              const v4230 = v782;
              const v4231 = v4199;
              const v4232 = stdlib.le(v834, v4202);
              if (v4232) {
                return;
                }
              else {
                const v4234 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:219:41:application', stdlib.UInt_max, '0')];
                const v4235 = v4234[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:219:41:application', stdlib.UInt_max, '0')];
                ;
                ;
                null;
                return;
                }}
            else {
              const v4225 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:240:33:application', stdlib.UInt_max, '0')];
              const v4226 = v4225[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:240:33:application', stdlib.UInt_max, '0')];
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
    lct: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:75:16:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5, ctc7, ctc0],
    pay: [stdlib.checkedBigNumberify('./src/contracts/auction.rsh:75:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v702, v703, v704], secs: v706, time: v705, didSend: v44, from: v701 } = txn1;
      
      const v707 = v679[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:75:16:dot', stdlib.UInt_max, '0')];
      const v708 = stdlib.Array_set(v707, '0', stdlib.checkedBigNumberify('./src/contracts/auction.rsh:75:16:dot', stdlib.UInt_max, '0'));
      const v709 = stdlib.Array_set(v679, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:75:16:dot', stdlib.UInt_max, '0'), v708);
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
  const v707 = v679[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:75:16:dot', stdlib.UInt_max, '0')];
  const v708 = stdlib.Array_set(v707, '0', stdlib.checkedBigNumberify('./src/contracts/auction.rsh:75:16:dot', stdlib.UInt_max, '0'));
  const v709 = stdlib.Array_set(v679, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:75:16:dot', stdlib.UInt_max, '0'), v708);
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v701, v702, v703, v704, v709],
    evt_cnt: 0,
    funcNum: 1,
    lct: v705,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./src/contracts/auction.rsh:77:16:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:11:13:decimal', stdlib.UInt_max, '1'), v702]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v713, time: v712, didSend: v51, from: v711 } = txn2;
      
      ;
      const v714 = v709[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:77:16:dot', stdlib.UInt_max, '0')];
      const v715 = v714[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:77:16:dot', stdlib.UInt_max, '0')];
      const v716 = stdlib.add(v715, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:11:13:decimal', stdlib.UInt_max, '1'));
      const v718 = stdlib.Array_set(v714, '0', v716);
      const v719 = stdlib.Array_set(v709, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:77:16:dot', stdlib.UInt_max, '0'), v718);
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
            bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:89:48:application', stdlib.UInt_max, '0'),
            fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:89:48:application', stdlib.UInt_max, '0'),
            toks: []
            })
          })
        return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc1.defaultValue /* simReturnVal */];})();
      const v725 = await txn2.getOutput('internal', 'v724', ctc8, v724);
      const v727 = v725[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:89:48:application', stdlib.UInt_max, '0')];
      const v728 = v725[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:89:48:application', stdlib.UInt_max, '1')];
      const v737 = await (async () => {
        sim_r.txns.push({
          kind: 'remote',
          obj: v704,
          remote: ({
            accs: [],
            apps: [],
            bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:90:68:application', stdlib.UInt_max, '0'),
            fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:90:68:application', stdlib.UInt_max, '0'),
            toks: []
            })
          })
        return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc3.defaultValue /* simReturnVal */];})();
      const v738 = await txn2.getOutput('internal', 'v737', ctc9, v737);
      const v740 = v738[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:90:68:application', stdlib.UInt_max, '0')];
      const v741 = v738[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:90:68:application', stdlib.UInt_max, '1')];
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
            bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:106:39:application', stdlib.UInt_max, '0'),
            fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:106:39:application', stdlib.UInt_max, '0'),
            toks: []
            })
          })
        return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc10.defaultValue /* simReturnVal */];})();
      const v757 = await txn2.getOutput('internal', 'v756', ctc11, v756);
      const v759 = v757[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:106:39:application', stdlib.UInt_max, '0')];
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
      const v775 = stdlib.checkedBigNumberify('./src/contracts/auction.rsh:116:25:decimal', stdlib.UInt_max, '0');
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
              bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:176:37:application', stdlib.UInt_max, '0'),
              fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
              pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:176:37:application', stdlib.UInt_max, '0'),
              toks: []
              })
            })
          return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc10.defaultValue /* simReturnVal */];})();
        const v1236 = await txn3.getOutput('internal', 'v1235', ctc11, v1235);
        const v1238 = v1236[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:176:37:application', stdlib.UInt_max, '0')];
        const v1243 = stdlib.add(v783, v1238);
        null;
        const v1248 = stdlib.gt(v775, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:188:25:decimal', stdlib.UInt_max, '0'));
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
              const v1339 = v1259[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:219:41:application', stdlib.UInt_max, '0')];
              const v1340 = v1339[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:219:41:application', stdlib.UInt_max, '0')];
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
              const v1361 = v1259[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:229:41:application', stdlib.UInt_max, '0')];
              const v1362 = v1361[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:229:41:application', stdlib.UInt_max, '0')];
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
          const v1383 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:240:33:application', stdlib.UInt_max, '0')];
          const v1384 = v1383[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:240:33:application', stdlib.UInt_max, '0')];
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
  const v714 = v709[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:77:16:dot', stdlib.UInt_max, '0')];
  const v715 = v714[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:77:16:dot', stdlib.UInt_max, '0')];
  const v716 = stdlib.add(v715, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:11:13:decimal', stdlib.UInt_max, '1'));
  const v718 = stdlib.Array_set(v714, '0', v716);
  const v719 = stdlib.Array_set(v709, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:77:16:dot', stdlib.UInt_max, '0'), v718);
  ;
  const v720 = stdlib.addressEq(v701, v711);
  stdlib.assert(v720, {
    at: './src/contracts/auction.rsh:77:16:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Seller'
    });
  const v723 = [];
  const v724 = undefined /* Remote */;
  const v725 = await txn2.getOutput('internal', 'v724', ctc8, v724);
  const v727 = v725[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:89:48:application', stdlib.UInt_max, '0')];
  const v728 = v725[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:89:48:application', stdlib.UInt_max, '1')];
  const v733 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v727);
  stdlib.assert(v733, {
    at: './src/contracts/auction.rsh:89:48:application',
    fs: [],
    msg: 'remote bill check',
    who: 'Seller'
    });
  const v737 = undefined /* Remote */;
  const v738 = await txn2.getOutput('internal', 'v737', ctc9, v737);
  const v740 = v738[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:90:68:application', stdlib.UInt_max, '0')];
  const v741 = v738[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:90:68:application', stdlib.UInt_max, '1')];
  const v745 = stdlib.add(v727, v740);
  const v746 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v740);
  stdlib.assert(v746, {
    at: './src/contracts/auction.rsh:90:68:application',
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
  const v759 = v757[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:106:39:application', stdlib.UInt_max, '0')];
  const v764 = stdlib.add(v745, v759);
  const v765 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v759);
  stdlib.assert(v765, {
    at: './src/contracts/auction.rsh:106:39:application',
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
  let v775 = stdlib.checkedBigNumberify('./src/contracts/auction.rsh:116:25:decimal', stdlib.UInt_max, '0');
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
        const v973 = v967[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:130:30:spread', stdlib.UInt_max, '0')];
        const v974 = stdlib.gt(v973, v775);
        stdlib.assert(v974, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/auction.rsh:131:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/auction.rsh:130:49:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:130:49:function exp)', 'at ./src/contracts/auction.rsh:113:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:130:49:function exp)', 'at ./src/contracts/auction.rsh:113:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:113:31:function exp)'],
          msg: 'Your bid is too low, please try again',
          who: 'Seller'
          });
        const v978 = stdlib.add(v783, v973);
        ;
        if (v773) {
          const v1030 = undefined /* Remote */;
          const v1031 = await txn4.getOutput('internal', 'v1030', ctc11, v1030);
          const v1033 = v1031[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:137:91:application', stdlib.UInt_max, '0')];
          const v1038 = stdlib.add(v978, v1033);
          const v1039 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1033);
          stdlib.assert(v1039, {
            at: './src/contracts/auction.rsh:137:91:application',
            fs: ['at ./src/contracts/auction.rsh:134:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:134:50:function exp)'],
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
          const v1009 = v1007[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:137:91:application', stdlib.UInt_max, '0')];
          const v1014 = stdlib.add(v1002, v1009);
          const v1015 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1009);
          stdlib.assert(v1015, {
            at: './src/contracts/auction.rsh:137:91:application',
            fs: ['at ./src/contracts/auction.rsh:134:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:134:50:function exp)'],
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
        const v1184 = stdlib.ge(v1109, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:148:83:application', stdlib.UInt_max, '900000'));
        if (v1184) {
          const v1188 = stdlib.sub(v1109, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:148:83:application', stdlib.UInt_max, '900000'));
          ;
          const v1190 = stdlib.ge(v1188, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:149:84:application', stdlib.UInt_max, '100000'));
          if (v1190) {
            const v1194 = stdlib.sub(v1188, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:149:84:application', stdlib.UInt_max, '100000'));
            ;
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
          const v1210 = stdlib.ge(v1109, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:149:84:application', stdlib.UInt_max, '100000'));
          if (v1210) {
            const v1214 = stdlib.sub(v1109, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:149:84:application', stdlib.UInt_max, '100000'));
            ;
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
  const v1238 = v1236[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:176:37:application', stdlib.UInt_max, '0')];
  const v1243 = stdlib.add(v783, v1238);
  const v1244 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1238);
  stdlib.assert(v1244, {
    at: './src/contracts/auction.rsh:176:37:application',
    fs: [],
    msg: 'remote bill check',
    who: 'Seller'
    });
  null;
  const v1248 = stdlib.gt(v775, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:188:25:decimal', stdlib.UInt_max, '0'));
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
      const v1339 = v1259[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:219:41:application', stdlib.UInt_max, '0')];
      const v1340 = v1339[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:219:41:application', stdlib.UInt_max, '0')];
      ;
      ;
      null;
      return;
      }
    else {
      const v1361 = v1259[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:229:41:application', stdlib.UInt_max, '0')];
      const v1362 = v1361[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:229:41:application', stdlib.UInt_max, '0')];
      ;
      ;
      null;
      return;
      }}
  else {
    const v1383 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:240:33:application', stdlib.UInt_max, '0')];
    const v1384 = v1383[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:240:33:application', stdlib.UInt_max, '0')];
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
    impure: [`Auctioneer_acceptSale()byte`, `Auctioneer_rejectSale()byte`, `Auctioneer_stopAuction()(uint64,uint64,uint64)`, `Bidder_bid(uint64)(address,uint64)`, `Bidder_optIn()byte`],
    pure: [`live()byte`],
    sigs: [`Auctioneer_acceptSale()byte`, `Auctioneer_rejectSale()byte`, `Auctioneer_stopAuction()(uint64,uint64,uint64)`, `Bidder_bid(uint64)(address,uint64)`, `Bidder_optIn()byte`, `live()byte`]
    },
  GlobalNumByteSlice: 3,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `ByAQAAEGCASgjQYFIKD3NrO2z4gI0rjRuw6K1euJD6CbvIEBlofIqgECwIQ9JgYBAQEAAAVhcHBJRATiDH4SBOr07pUiNQAxGEEK0SpkSSJbNQFJJVs1AoEQWzUINhoAF0lBAJoiNQQjNQZJIQkMQABISSEKDEAAM0khCwxAAB4hCxJENAFJJQxAAAklEkQoNQdCCoAkEkQpNQdCCnchChJEKjX/KTT/UEIEQCEJEkQqNf8oNP9QQgQySSEMDEAAKkkhDQxAABMhDRJEKjX/gAECNP9QJa9QQgBDIQwSRDYaATX/KDT/UEIAM4Ggi+pMEkQqNf8pNP9QJa9QQgAfNhoCFzUENhoDNhoBF0khBAxABH9JIQYMQAPRIQYSRCU0ARJENARJIhJMNAISEUQpZChkUEk1A0lKSkpKSkpKSVcAIDX/IQdbNf6BKFs1/UgqNfyBMFs1+1c4IDX6gVhbNfmBYFs1+FdoFDX3gXxbNfZXhBg19VecIDX0V7wBFzXzV70BFzXygb4BWzXxV8YRNfCB1wFbNe9JNQU17oAEAKxyzTTuULA07iJVSSMMQALmSSEODEABPSEOEkQ07yEPCDXtIQ+ICXc07SEID0EAnjTtIQgJNeyxIrIBIQiyCCOyEDT6sgezNOwhBQ9BAEmxIrIBIQWyCCOyEDT/sgezgAkAAAAAAAAEqwGwKDUHNP80/jT9NPw0+zT6NPk0+DT3NPY09TT0NPM08jTxMgY08DTsIQUJQgYBgAkAAAAAAAAEsgGwKDUHNP80/jT9NPw0+zT6NPk0+DT3NPY09TT0NPM08jTxMgY08DTsQgXLNO0hBQ9BAEmxIrIBIQWyCCOyEDT/sgezgAkAAAAAAAAEvwGwKDUHNP80/jT9NPw0+zT6NPk0+DT3NPY09TT0NPM08jTxMgY08DTtIQUJQgV6gAkAAAAAAAAExgGwKDUHNP80/jT9NPw0+zT6NPk0+DT3NPY09TT0NPM08jTxMgY08DTtQgVESDTuVwEINe007RdJNew08Q1ENO807Ag16zTsiAgsNPNBALYrNP0WUAM16TIKeDXoMgpgNOgJFjXnsSKyASSyEDT9shgnBLIaNPsWshoxAEmyHLIaszIKYDToCTTnFwkWtwA+VwQAUDXqgAgAAAAAAAAEBjTqULA06kk16SJbNegiNOgSRCcFNPsWUDTsFlAxAFA091CwgAgAAAAAAAAEETEANPEWUFCwMQA08RZQNQc0/zT+NP00/DT7NPo0+TT4NPc09jT1MQAiNPI07DIGNPA06zToCEIEa7EisgE08bIII7IQNPSyB7MrNP0WUAM16TIKeDXoMgpgNOgJFjXnsSKyASSyEDT9shgnBLIaNPsWshoxAEmyHLIaszIKYDToCTTnFwkWtwA+VwQAUDXqgAgAAAAAAAAD7jTqULA06kk16SJbNegiNOgSRCcFNPsWUDTsFlAxAFA091CwgAgAAAAAAAAD+TEANPEWUFCwMQA08RZQNQc0/zT+NP00/DT7NPo0+TT4NPc09jT1MQAiNPI07DIGNPA06zTxCTToCEIDokiABLijSos0+xZQNPEWULA0+xYyBhZQNPEWUDXtgAgAAAAAAAADUjTtULA07TUHNP80/jT9NPw0+zT6NPk0+DT3NPY07TT0NPMiNPEyBjTwNO9CA01IJDQBEkQ0BEkiEkw0AhIRRClkKGRQSTUDSUpKSlcAIDX/IQdbNf5XKBQ1/Vc8IDX8gVxbNfuBZFs1+ldsETX5gX1bNfhJNQU194AErnvUBjT3ULA09yJVQAAmgAkAAAAAAAAFFgGwKDUHNP80/jT9NPw0+zT6IyIyBjT5NPhCBDmACQAAAAAAAAU0ALApNQc0/zT+NP00/DT7NPoiIjIGNPk0+EIEE0kjDEAB8CMSRLEisgEkshA0CLIYsyM0ARJENARJIhJMNAISEUQpZChkUEk1A0lKSVcAIDX/IQdbNf5XKJQ1/YG8AVs1/FfEETX7gASai5F0sDT7VwARNfojNP6IBWY0/zEAEkQqNfkrNPwWUAM19zIKeDX2MgpgNPYJFjX1sSKyASSyEDT8shiABG3tvYCyGrMyCmA09gk09RcJFrcAPlcEAFA1+IAIAAAAAAAAAtQ0+FCwNPhJNfciWzX2NPclWzX1IjT2EkQrNPwWUAM18zIKeDXyMgpgNPIJFjXxsSKyASSyEDT8shiABGyt5G+yGrMyCmA08gk08RcJFrcAPlcEAFA19IAIAAAAAAAAAuE09FCwNPRJNfMiWzXyIjTyEkQxGDXxNP1XgBQ18Cs0/BZQAzXuMgp4Ne0yCmA07QkWNeyxIrIBJLIQNPyyGIAEuXDLpLIaNPUWNPEWUDIGFlA0/1A08FA0/VcIUFA0/Vd4CFA0/hZQshqzMgpgNO0JNOwXCRa3AD5XBABQNe+ACAAAAAAAAAL0NO9QsDTvSTXuIls17SI07RJEgASPDzUGNPUWUDT/ULA0/zT+NPw0+TT1NPNXCCAyBjTxNPAyBjT9IlsIgRivNP8jIyIyBjT7NPpJIlsjCBZcAFwANPY08gg07QhCALBIgcCaDIgDrrEisgEkshAishiABgcxADIJErIegAEHsh+ztD01CCI0ARJENARJIhJMNAISEURJNQVJSSJbNf9XCJQ1/oGcAVs1/YAE7SmI4zT/FlA0/lA0/RZQsIERr0k1/ElXABElr1wAXAA1+yEFiANDsSKyASKyEiEEshAyCrIUNP+yEbMxADT/FlA0/lA0/RZQNPtQKUsBVwB/ZyhLAVd/VmdIIzUBMgY1AkICrTX/Nf41/TX8Nfs1+jX5Nfg19zX2NfU19DXzNfI18TXwNe817jT9NPcONPsQQQBWNO407xZQNPAWUDTxUDTyFlA081A09BZQNPUWUDT2UDT3FlA0+FA0+VA0+hZRBwhQKFA0/BZQNP5QNP8WUClLAVcAf2coSwFXf2BnSCU1ATIGNQJCAigrNPAWUAM17DIKeDXrMgpgNOsJFjXqsSKyASSyEDTwshiABKLw2gGyGjT4shqzMgpgNOsJNOoXCRa3AD5XBABQNe2ACAAAAAAAAATTNO1QsDTtSTXsIls16zT/NOsINeoiNOsSRIAEeH51vjTyFlA0/BZQNO5QNPUWUDT0FlA09lCwNPwiDUEAGjTuNO809jT5NPw0/YEyCCMjNP00/jTqQgBFsSKyATT+VwARIluyEiEEshA07rIUNO+yEbOxIrIBNOqyCCOyEDT5sgezsSKyASKyEiEEshAyCbIVMgqyFDTvshGzQgEUNf81/jX9Nfw1+zX6Nfk1+DX3NfY19TT9NPoONPwQQQA0NPU09hZQNPdQNPhQNPkWUDT6FlA0/lA0/xZQKUsBVwB/ZyhLAVd/BmdIJDUBMgY1AkIA6zT7QQBdsSKyATT+VwARIluyEiEEshA0+LIUNPayEbOxIrIBNP+yCCOyEDT1sgezgATuppnENPdQNPkWUDT1UDT4UDT2FlCwsSKyASKyEiEEshAyCbIVMgqyFDT2shGzQgBdsSKyATT+VwARIluyEiEEshA09bIUNPayEbOxIrIBNP+yCCOyEDT4sgezgASlT5rNNPdQNPkWUDT1UDT4UDT2FlCwsSKyASKyEiEEshAyCbIVMgqyFDT2shGzQgAAMRkhBhJEsSKyASSyEDQIshghBrIZs7EisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhY0CBZQUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEgQMxNRJEIjE2EkQiMTcSRCI1ASI1AiI1CEL/pzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiTQASUpJIwg1ADgUMgoSRDgQIQQSRDgRTwISRDgSEkSJ`,
  appClear: `Bw==`,
  companionInfo: {
    publish1: 1
    },
  extraPages: 1,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 223,
  unsupported: [],
  version: 11,
  warnings: [`Step 1 calls a remote object at /app/src/contracts/auction.rsh:106:39:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 1 calls a remote object at /app/src/contracts/auction.rsh:89:48:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 1 calls a remote object at /app/src/contracts/auction.rsh:90:68:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 2 calls a remote object at /app/src/contracts/auction.rsh:176:37:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 5 calls a remote object at /app/src/contracts/auction.rsh:137:91:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`]
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"components":[{"internalType":"uint256","name":"_deadline","type":"uint256"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes16","name":"elem2","type":"bytes16"}],"internalType":"struct T12","name":"_description","type":"tuple"},{"internalType":"address payable","name":"_owner","type":"address"},{"internalType":"uint256","name":"_price","type":"uint256"},{"internalType":"bytes20","name":"_title","type":"bytes20"}],"internalType":"struct T13","name":"elem2","type":"tuple"},{"internalType":"address payable","name":"elem3","type":"address"}],"internalType":"struct T14","name":"v4264","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"components":[{"internalType":"uint256","name":"_deadline","type":"uint256"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes16","name":"elem2","type":"bytes16"}],"internalType":"struct T12","name":"_description","type":"tuple"},{"internalType":"address payable","name":"_owner","type":"address"},{"internalType":"uint256","name":"_price","type":"uint256"},{"internalType":"bytes20","name":"_title","type":"bytes20"}],"internalType":"struct T13","name":"elem2","type":"tuple"},{"internalType":"address payable","name":"elem3","type":"address"}],"indexed":false,"internalType":"struct T14","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T5","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_Auctioneer_acceptSale0_444","type":"bool"},{"internalType":"bool","name":"_Auctioneer_rejectSale0_444","type":"bool"}],"internalType":"struct T3","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e4","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T6","name":"which","type":"uint8"},{"internalType":"bool","name":"_Auctioneer_stopAuction0_123","type":"bool"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T5","name":"_Bidder_bid0_123","type":"tuple"},{"internalType":"bool","name":"_Bidder_optIn0_123","type":"bool"}],"internalType":"struct T6","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T7","name":"_a","type":"tuple"}],"name":"_reach_e5","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"indexed":false,"internalType":"struct T19","name":"v0","type":"tuple"}],"name":"_reach_oe_v1006","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"indexed":false,"internalType":"struct T1","name":"v0","type":"tuple"}],"name":"_reach_oe_v1017","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"indexed":false,"internalType":"struct T19","name":"v0","type":"tuple"}],"name":"_reach_oe_v1030","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"indexed":false,"internalType":"struct T1","name":"v0","type":"tuple"}],"name":"_reach_oe_v1041","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1195","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1202","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1215","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1222","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"indexed":false,"internalType":"struct T19","name":"v0","type":"tuple"}],"name":"_reach_oe_v1235","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1302","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1332","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"indexed":false,"internalType":"struct T16","name":"v0","type":"tuple"}],"name":"_reach_oe_v724","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"}],"indexed":false,"internalType":"struct T17","name":"v0","type":"tuple"}],"name":"_reach_oe_v737","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"indexed":false,"internalType":"struct T19","name":"v0","type":"tuple"}],"name":"_reach_oe_v756","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"blockEnded","type":"uint256"},{"internalType":"uint256","name":"lastBid","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v0","type":"tuple"}],"name":"_reach_oe_v850","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes20","name":"v0","type":"bytes20"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"},{"indexed":false,"internalType":"address payable","name":"v2","type":"address"},{"indexed":false,"internalType":"address payable","name":"v3","type":"address"},{"indexed":false,"internalType":"address payable","name":"v4","type":"address"}],"name":"accepted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"},{"indexed":false,"internalType":"address payable","name":"v2","type":"address"},{"indexed":false,"internalType":"bytes20","name":"v3","type":"bytes20"}],"name":"bidSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"},{"indexed":false,"internalType":"address payable","name":"v1","type":"address"}],"name":"created","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"},{"indexed":false,"internalType":"address payable","name":"v2","type":"address"},{"indexed":false,"internalType":"address payable","name":"v3","type":"address"},{"indexed":false,"internalType":"uint256","name":"v4","type":"uint256"},{"indexed":false,"internalType":"bytes20","name":"v5","type":"bytes20"}],"name":"down","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"}],"name":"endSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes20","name":"v0","type":"bytes20"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"},{"indexed":false,"internalType":"address payable","name":"v2","type":"address"},{"indexed":false,"internalType":"address payable","name":"v3","type":"address"},{"indexed":false,"internalType":"address payable","name":"v4","type":"address"}],"name":"rejected","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"Auctioneer_acceptSale","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Auctioneer_rejectSale","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Auctioneer_stopAuction","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"blockEnded","type":"uint256"},{"internalType":"uint256","name":"lastBid","type":"uint256"}],"internalType":"struct T0","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v4254","type":"uint256"}],"name":"Bidder_bid","outputs":[{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T1","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Bidder_optIn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T5","name":"v4266","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_Auctioneer_acceptSale0_444","type":"bool"},{"internalType":"bool","name":"_Auctioneer_rejectSale0_444","type":"bool"}],"internalType":"struct T3","name":"elem1","type":"tuple"}],"internalType":"struct T4","name":"v4281","type":"tuple"}],"name":"_reachp_4","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T6","name":"which","type":"uint8"},{"internalType":"bool","name":"_Auctioneer_stopAuction0_123","type":"bool"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T5","name":"_Bidder_bid0_123","type":"tuple"},{"internalType":"bool","name":"_Bidder_optIn0_123","type":"bool"}],"internalType":"struct T6","name":"elem1","type":"tuple"}],"internalType":"struct T7","name":"v4293","type":"tuple"}],"name":"_reachp_5","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"live","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x601f196001600160401b0360806200462538819003601f810185168301848111848210176200055b57839282916040528339810103610140811262000646576040519160808301838110858211176200055b5760405280518352620000676020820162000683565b602084015260e0603f1983011262000646576060604051926200008a846200064b565b60408301518452605f1901126200064657604051620000a98162000667565b606082015181526080820151602082015260a08201516001600160801b031981168103620006465760408201526020830152620000e960c0820162000683565b604083015260e08101516060830152610100810151906001600160601b0319821682036200064657826101209260806200012b95015260408501520162000683565b60608201524360035560405160e08101818110848211176200055b576040526000815260006020820152600060408201526200016662000698565b6060820152604051906040820190828210858311176200055b5760009260c09260405283815283602082015260808201528260a0820152015260405190620001ae8262000667565b620001b862000698565b825260208201620001c8620006c8565b8152620001d4620006c8565b604084015260ff600454166200062d577faf21c54356e0cb238c07cd6d2a0ba48aa0a87eb5fccc9285719045c4cfe7472b6101606040513381528451602082015260018060a01b0360208601511660408201526200023b604086015160608301906200070f565b60608501516001600160a01b0316610140820152a18151801590811562000620575b501562000607576000835152600060208451015260006040845101528251815152518051604060208201519101511515604051916200029c8362000667565b6000835260208301526040820152620002b4620006c8565b9160005b60018110620005b757505081526040830152346200059e5760405190620002df826200064b565b60008252600060208301526040820192604051620002fd816200064b565b600081526200030b62000698565b602082015260006040820152600060608201526000608082015284526040606084019160008352608085019362000341620006c8565b855233865260018060a01b036020820151166020870152828101518752606060018060a01b0391015116835201518252620003a76001948560005543865560405194336020870152602060018060a01b039101511660408601525160608501906200070f565b516001600160a01b03166101408301525160008361016084015b8183106200057157505050506101a081526101c08101818110848211176200055b5760405280519283116200055b576002548281811c9116801562000550575b60208210146200053a57601f8111620004cd575b50602090601f841160011462000464578394509083929160009462000458575b50501b916000199060031b1c1916176002555b604051613e8690816200079f8239f35b01519250388062000435565b919383169160026000528360206000209360005b87828210620004b35750501062000499575b505050811b0160025562000448565b015160001960f88460031b161c191690553880806200048a565b848601518755909501946020948501948793500162000478565b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f850160051c810191602086106200052f575b601f0160051c019083905b8281106200052257505062000415565b6000815501839062000512565b909150819062000507565b634e487b7160e01b600052602260045260246000fd5b90607f169062000401565b634e487b7160e01b600052604160045260246000fd5b606060209160408651805183528481015185840152015115156040820152019301910190918490620003c1565b60405163100960cb60e01b8152600b6004820152602490fd5b620005c3818362000776565b51620005d0828662000776565b52620005dd818562000776565b506000198114620005f157600101620002b8565b634e487b7160e01b600052601160045260246000fd5b60405163100960cb60e01b8152600a6004820152602490fd5b905060015414386200025d565b60405163100960cb60e01b815260096004820152602490fd5b600080fd5b60a081019081106001600160401b038211176200055b57604052565b606081019081106001600160401b038211176200055b57604052565b51906001600160a01b03821682036200064657565b60405190606082016001600160401b038111838210176200055b5760405260006040838281528260208201520152565b6040519060208083016001600160401b038111848210176200055b576040528260005b828110620006f857505050565b82906200070462000698565b8184015201620006eb565b8051825260208082015180518285015290810151604080850191909152908101516001600160801b031916606080850191909152908201516001600160a01b03166080808501919091529082015160a084015201516001600160601b03191660c090910152565b906001811015620007885760051b0190565b634e487b7160e01b600052603260045260246000fdfe60806040526004361015610018575b361561001657005b005b60003560e01c80631e93b0f1146101085780632d2ae6eb146100ff57806334d3e29e146100f65780634a96cc0b146100ed578063573b8510146100e45780636f49e231146100db57806383230757146100d2578063957aa58c146100c9578063980e632f146100c0578063ab53f2c6146100b7578063b6279224146100ae5763d2526fd90361000e576100a9610cde565b61000e565b506100a9610c62565b506100a9610bb4565b506100a9610b27565b506100a9610a80565b506100a9610a61565b506100a9610a14565b506100a96102a9565b506100a961024f565b506100a96101c0565b506100a9610157565b5034610127576000366003190112610127576020600354604051908152f35b600080fd5b6040809180518452602081015160208501520151910152565b606081019291610155919061012c565b565b5060003660031901126101275761016c610f64565b50606080610178610fba565b6101af816101846110cb565b6020810190600082515251151560208251015261019f6110cb565b9060008252516020820152611d70565b01516101be604051809261012c565bf35b506080366003190112610127576101d5610fba565b604051906101e282610d7b565b60043582526060366023190112610127576040519161020083610da3565b6024359260028410156101275761023f93815260443561021f8161117a565b60208201526064356102308161117a565b60408201526020820152611377565b60405160008152602090f35b0390f35b50600036600319011261012757602060a0610268610fba565b61029d816102746110cb565b85810190600282515251151560608251015261028e6110cb565b90600082525186820152611d70565b01511515604051908152f35b506020366003190112610127576102be610fba565b5061023f6102cb36613a75565b6102d3613afa565b6102ee6102e96102e560045460ff1690565b1590565b6115f0565b60408051338152835160208201527fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee815969190a161032e600160005414611610565b61035d61034b61033c610e4e565b60208082518301019101613bb8565b92518015908115610a08575b50611630565b6103673415611650565b61038561038061037a6020850151610c29565b33613d5a565b611670565b6103a13360018060a01b0361039a8551610c29565b1614611690565b6103b86103b16020840151610c29565b3090612d86565b610160820152476101408201526103d7600160ff196004541617600455565b7f37e25dadaab02074283de1c0238dbfd7d190671e8bc6adb07dd01aab30786a7b6104d8600080604051632cfbfba760e01b60208201526004815261041b81610d7b565b61043061042b6060890151610c29565b610c29565b82602083519301915af161044c610445611d0b565b8092612bc7565b5061045c60ff1960045416600455565b61048a610475306104706020890151610c29565b612d86565b610160860151808203610180880152146116b0565b6104ae47610140860151900391602086019283515260208082518301019101612d77565b60208251015251806040850152604051918291829190916020806040830194805184520151910152565b0390a16104ea604082015151156116d0565b6104fb306104706020850151610c29565b6101c0820152476101a082015261051a600160ff196004541617600455565b7f178760804b1b57c8eb91fd27698daea1235a9d4ca3d13de9a84c8191e57574ed61062060008060405160208101637541dda360e11b81526004825261055f82610d7b565b8261057061042b60608b0151610c29565b9251925af1610587610580611d0b565b8092612bf7565b5061059760ff1960045416600455565b6105c06105ab306104706020890151610c29565b6101c08601518082036101e0880152146116f0565b6105f16105e7476101a0870151900392606087019384515260208082518301019101613cad565b6020835101611358565b516080840181905260408051825181526020928301516001600160a01b03169281019290925290918291820190565b0390a161063260808201515115611710565b61063f3060a08301611358565b60206040820151015160c08201515261066b61065e60a0830151610c29565b602060c084015101611358565b43604060c0830151015261068f6106828351610c29565b606060c084015101611358565b6040820151608001516106b3906001600160601b031916608060c084015101611367565b60206040830151015160a060c0830151015260606040830151015160c08083015101526106f36106e66020840151610c29565b60e060c084015101611358565b610704306104706020850151610c29565b6102208201527f9bb4687c8a4b59f7f3a7fcc5949200288693d6646cc8d7614d4a0378755e6c94610803476102008401908152610749600160ff196004541617600455565b6107a960008060c08701516040519061078582610777602082019363063eabe760e11b855260248301613cc1565b03601f198101845283610e2b565b8261079661042b60608d0151610c29565b9251925af16107a3611d0b565b90612c27565b506107b960ff1960045416600455565b6107e26107cd306104706020890151610c29565b61022086015180820361024088015214611730565b479051900360e0840190815152518061010085015260405191829182611d58565b0390a16108166101008201515115611750565b7fb758eeaad548e48420d76d670d08a2b8b63cf903c04cf64fbe368cbb7830eb6760206040830151015161084a8451610c29565b9061085a60405192839283611cf2565b0390a16000610120820151526000602061012083015101526000604061012083015101526109e2608061088b611c58565b9361089f6108998251610c29565b86611358565b6108b86108af6020830151610c29565b60208701611358565b6108d16108c86060830151610c29565b60408701611358565b6108e76108de8551151590565b15156060870152565b604084015160209081015186840152828501510151610913906001600160a01b03165b60a08701611358565b4360c086015261093261092960a0860151610c29565b60e08701611358565b6040810151820151610952906001600160601b0319166101008701611367565b6109616040820151514361369b565b61012086015261012084015161014086015261098a6109808251610c29565b6101608701611358565b600161018086015260016101a086015260006101c0860152436101e086015201518051906109dd600183510192604060208201519101511515906109cc610ef7565b948552602085015215156040840152565b613ddc565b610200830152610100604082015151608083015151019101515101610220820152613217565b90506001541438610357565b5060003660031901126101275760206040610a2d610fba565b61029d81610a3961101d565b8581019060018251525115158582510152610a5261101d565b90600082525186820152611377565b5034610127576000366003190112610127576020600154604051908152f35b50346101275760003660031901126101275761024b610ae360c0610aa2610fba565b6000546008811015610af5576006610aba9114611790565b610ad4610ac5610e4e565b6020808251830101910161120c565b506000828201525b0151151590565b60405190151581529081906020820190565b6008610b019114611770565b610b1b610b0c610e4e565b60208082518301019101611b2d565b50600182820152610adc565b5060a036600319011261012757610b3c610fba565b60405190610b4982610d7b565b600435825260803660231901126101275760405191610b6783610dbe565b6024359260038410156101275761023f938152604435610b868161117a565b6020820152610b9436613a95565b6040820152608435610ba58161117a565b60608201526020820152611d70565b503461012757600080600319360112610c26578054610bd1610e4e565b906040519283918252602090604082840152835191826040850152815b838110610c0f57505060608094508284010152601f80199101168101030190f35b808601820151878201606001528694508101610bee565b80fd5b6001600160a01b031690565b6001600160a01b03169052565b81516001600160a01b031681526020918201519181019190915260400190565b50602036600319011261012757610c77610fa1565b5061024b6080610c85610fba565b610cd081604051610c9581610d7b565b604051610ca181610dd9565b6000815281526020810190610cb461107a565b825260043581515260018251525160408251015261019f6110cb565b015160405191829182610c42565b50600036600319011261012757602080610cf6610fba565b61029d81610d0261101d565b8481019060008251525115158582510152610d1b61101d565b90600082525185820152611377565b90600182811c92168015610d5a575b6020831014610d4457565b634e487b7160e01b600052602260045260246000fd5b91607f1691610d39565b50634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b03821117610d9657604052565b610d9e610d64565b604052565b606081019081106001600160401b03821117610d9657604052565b608081019081106001600160401b03821117610d9657604052565b602081019081106001600160401b03821117610d9657604052565b61010081019081106001600160401b03821117610d9657604052565b60a081019081106001600160401b03821117610d9657604052565b601f909101601f19168101906001600160401b03821190821017610d9657604052565b6040519060008260025491610e6283610d2a565b808352600193808516908115610ed65750600114610e88575b5061015592500383610e2b565b60026000908152600080516020613e3a83398151915294602093509091905b818310610ebe575050610155935082010138610e7b565b85548884018501529485019487945091830191610ea7565b905061015594506020925060ff191682840152151560051b82010138610e7b565b6040519061015582610da3565b6040519061022082016001600160401b03811183821017610d9657604052565b6040519061024082016001600160401b03811183821017610d9657604052565b6040519061026082016001600160401b03811183821017610d9657604052565b60405190606082016001600160401b03811183821017610f94575b60405260006040838281528260208201520152565b610f9c610d64565b610f7f565b60405190610fae82610d7b565b60006020838281520152565b6040519060e082016001600160401b03811183821017611010575b604052600060c083828152826020820152826040820152610ff4610f64565b6060820152611001610fa1565b60808201528260a08201520152565b611018610d64565b610fd5565b6040519061102a82610d7b565b81600081526020611039610f64565b910152565b50634e487b7160e01b600052602160045260246000fd5b6002111561105f57565b61015561103e565b6040519061107482610dd9565b60008252565b60405190608082016001600160401b038111838210176110be575b60405260006060838281528260208201526040516110b281610dd9565b83815260408201520152565b6110c6610d64565b611095565b604051906110d882610d7b565b8160008152602061103961107a565b6003111561105f57565b9092916040602060809260a085019660018060a01b03168552805182860152015180516002811015611137575b8285015260208101511515606085015201511515910152565b61113f61103e565b61111e565b51906001600160a01b038216820361012757565b6001600160601b03191690565b51906001600160601b03198216820361012757565b8015150361012757565b51906101558261117a565b9080601f83011215610127576040918251926111aa84610dd9565b836060938484019381851161012757915b8483106111cb5750505050505090565b858383031261012757835186916111e182610da3565b845182526020918286015183820152868601516111fd8161117a565b878201528152019201916111bb565b6101408183031261012757610120906112866040519361122b85610df4565b61123483611144565b855261124260208401611144565b602086015261125360408401611165565b604086015261126460608401611144565b60608601526080830151608086015260a083015160a086015260c0830161118f565b60c0840152015160e082015290565b5160028110156112a25790565b6112aa61103e565b90565b604051906112ba82610dd9565b8160005b602081106112ca575050565b6020906112d5610f64565b81840152016112be565b6040519061016082016001600160401b0381118382101761134b575b604052816101406000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e0820152826101008201526113416112ad565b6101208201520152565b611353610d64565b6112fb565b6001600160a01b039091169052565b6001600160601b03199091169052565b906113f19061139361138e6102e560045460ff1690565b6117b0565b6040907f109eb76f82f8872ff024177afedebf0c35323f0a478a1f78956f6ddd62aa15768251806113c58733836110f1565b0390a16113d66006600054146117d0565b6113de610e4e565b602093818580809451830101910161120c565b94611407815180159081156115e4575b506117f0565b016114128151611295565b61141b81611055565b6115175750926114b860e09261147185610155976114393415611830565b8351600181527f9a3fcf982b6d6d32d21d497377405ce2b7450771cd527d0cb91c7bad8d959ddf9080602081015b0390a10160019052565b6114a461147c6112df565b9561149061148a8651610c29565b88611358565b61149c81860151610c29565b908701611358565b6114b081840151611158565b908501611367565b6114d16114c86060830151610c29565b60608501611358565b6080810151608084015260a081015160a08401526114f260c0840160019052565b6000828401524361010084015260c08101516101208401520151610140820152613804565b61152660019195929551611295565b61152f81611055565b1461153b575b50505050565b61158b82600060e0946115db976115523415611810565b8151600081527f193e01e8b4d5e54c5fa9b167bc086486a0f5eec2c611b31ad1302c7f755f0f0390602090a101526114a461147c6112df565b61159b6114c86060830151610c29565b6080810151608084015260a081015160a0840152600060c08401526000828401524361010084015260c08101516101208401520151610140820152613804565b38808080611535565b90506001541438611401565b156115f757565b60405163100960cb60e01b8152600c6004820152602490fd5b1561161757565b60405163100960cb60e01b8152600d6004820152602490fd5b1561163757565b60405163100960cb60e01b8152600e6004820152602490fd5b1561165757565b60405163100960cb60e01b8152600f6004820152602490fd5b1561167757565b60405163100960cb60e01b815260106004820152602490fd5b1561169757565b60405163100960cb60e01b815260116004820152602490fd5b156116b757565b60405163100960cb60e01b815260126004820152602490fd5b156116d757565b60405163100960cb60e01b815260146004820152602490fd5b156116f757565b60405163100960cb60e01b815260156004820152602490fd5b1561171757565b60405163100960cb60e01b815260176004820152602490fd5b1561173757565b60405163100960cb60e01b815260186004820152602490fd5b1561175757565b60405163100960cb60e01b8152601a6004820152602490fd5b1561177757565b60405163100960cb60e01b815260086004820152602490fd5b1561179757565b60405163100960cb60e01b815260076004820152602490fd5b156117b757565b60405163100960cb60e01b8152601b6004820152602490fd5b156117d757565b60405163100960cb60e01b8152601c6004820152602490fd5b156117f757565b60405163100960cb60e01b8152601d6004820152602490fd5b1561181757565b60405163100960cb60e01b8152601f6004820152602490fd5b1561183757565b60405163100960cb60e01b8152601e6004820152602490fd5b1561185757565b60405163100960cb60e01b815260206004820152602490fd5b1561187757565b60405163100960cb60e01b815260216004820152602490fd5b1561189757565b60405163100960cb60e01b815260226004820152602490fd5b156118b757565b60405163100960cb60e01b8152602c6004820152602490fd5b156118d757565b602460405163100960cb60e01b8152816004820152fd5b156118f557565b60405163100960cb60e01b815260256004820152602490fd5b1561191557565b60405163100960cb60e01b815260296004820152602490fd5b1561193557565b60405163100960cb60e01b8152602b6004820152602490fd5b1561195557565b60405163100960cb60e01b815260266004820152602490fd5b1561197557565b60405163100960cb60e01b815260286004820152602490fd5b1561199557565b60405163100960cb60e01b815260236004820152602490fd5b156119b557565b60405163100960cb60e01b8152602d6004820152602490fd5b156119d557565b60405163100960cb60e01b8152602f6004820152602490fd5b6119f6610f04565b906119ff610f64565b8252611a09611067565b60208301526000806040840152611a1e610fa1565b6060840152611a2b610fa1565b6080840152611a38610fa1565b60a0840152611a45610fa1565b60c0840152611a52610fa1565b60e0840152611a5f610fa1565b61010084015280610120840152806101408401528061016084015280610180840152806101a0840152806101c0840152806101e0840152610200830152565b9092916060602060a09260c0850196600180861b03168552805182860152015180516003811015611aee575b60408501526020810151151582850152604081015151608085015201511515910152565b611af661103e565b611aca565b919082606091031261012757604051611b1381610da3565b604080829480518452602081015160208501520151910152565b906102a08282031261012757610280611b44610f04565b92611b4e81611144565b8452611b5c60208201611144565b6020850152611b6d60408201611144565b6040850152611b7e60608201611184565b606085015260808101516080850152611b9960a08201611144565b60a085015260c081015160c0850152611bb460e08201611144565b60e0850152610100611bc7818301611165565b908501526101208082015190850152610140611be584828401611afb565b908501526101a0611bf7818301611144565b610160860152611c3e6101c094611c0f868501611184565b6101808801526101e092611c24848601611184565b90880152610200958685015190880152610220840161118f565b9085015201519082015290565b5160038110156112a25790565b611c60610f24565b9060008083528060208401528060408401528060608401528060808401528060a08401528060c08401528060e08401528061010084015280610120840152611ca6610f64565b6101408401528061016084015280610180840152806101a0840152806101c0840152806101e0840152611cd76112ad565b610200840152610220830152565b506040513d6000823e3d90fd5b9081526001600160a01b03909116602082015260400190565b3d15611d53573d906001600160401b038211611d46575b60405191611d3a601f8201601f191660200184610e2b565b82523d6000602084013e565b611d4e610d64565b611d22565b606090565b91909160208060408301948051845201511515910152565b611d786119ee565b90611d90611d8b6102e560045460ff1690565b611850565b7fc08304f8842fdf9fe5c32b7c33d0b2bb36997def29e0c6d0fa626741dcab601060405180611dc0843383611a9e565b0390a1611dd1600860005414611870565b6020611dec611dde610e4e565b828082518301019101611b2d565b91611e0281518015908115612bbb575b50611890565b01611e0d8151611c4b565b611e16816110e7565b611ff1575061015592611e29341561198e565b60808201928351906101c0927f772252bb3a260bb19eae21a8a9243292763a37c5bcfc38c9f961eb102482f43484860193845190611e796040519283928360209093929193604081019481520152565b0390a185518251524360208351015282516040835101527f180fdae243c5c64ffc1df0ddb1cd8197b0dd0568e7da94515314735a659889e1611ec2835160405191829182610145565b0390a160608251910152611ed4611c58565b94611ee8611ee28651610c29565b87611358565b611f01611ef86020870151610c29565b60208801611358565b611f1a611f116040870151610c29565b60408801611358565b611f33611f2a6060870151151590565b15156060880152565b516080860152611f4961090a60a0860151610c29565b60c084015160c0860152611f6361092960e0860151610c29565b611f7d610100611f7581870151611158565b908701611367565b610120808501519086015251610140850152611fa9610160611fa181860151610c29565b908601611358565b611fc3610180611fbb81860151151590565b151590860152565b60006101a085015251908301526101e043818401528101519061020091828401520151610220820152613217565b60016120008294939451611c4b565b612009816110e7565b0361268857604061202a91510151806020840152516101c0840151106118d0565b61204961020083015160208301519081510160408401525134146118ee565b6101808201511561237157610155927f3d044ba7063717d67e0d87fe0d4039e754ffb4da56fe38ec15b68118e61494ab61216661208c6103b16020870151610c29565b6101808501908152612146479161016087019283526120b3600160ff196004541617600455565b6121146000808a60808101518261210161042b60408051956120fa876120ec60208201986311b693e360e11b8a52339060248401611cf2565b03601f198101895288610e2b565b0151610c29565b9251925af161210e611d0b565b90612c87565b5061212460ff1960045416600455565b6121353061047060208b0151610c29565b90518082036101a08901521461194e565b479051900360c0850190815152518060e086015260405191829182611d58565b0390a161217860e0830151511561196e565b600080516020613e5a83398151915260808401516020840151516121d46121a3610100880151611158565b60408051948552602085019390935233928401929092526001600160601b0319909116606083015281906080820190565b0390a1608061010083016121e9338251611358565b6101c08501516020825101527f98a32cc97347160f667ac80c598d5e35201f18aebdda2dfb0fcf3435a0b11ed3612227825160405191829182610c42565b0390a151910152612236611c58565b9161224a6122448251610c29565b84611358565b61226361225a6020830151610c29565b60208501611358565b61227c6122736040830151610c29565b60408501611358565b61229561228c6060830151151590565b15156060850152565b608081015160808401526122b86122af60a0830151610c29565b60a08501611358565b60c081015160c08401526122db6122d260e0830151610c29565b60e08501611358565b6122f66122ec610100830151611158565b6101008501611367565b6101208082015190840152610140808201519084015261231a336101608501611358565b600061018084015261233d6123336101a0830151151590565b15156101a0850152565b6020820151516101c08401526101e0904382850152015161020083015260e060408201519101515101610220820152613217565b61015592600080808061238b61042b610160890151610c29565b6101c08801519082821561267f575bf115612672575b7f6414845e2cb4fa724a4bb9e2be1730379da3fd3e492502b2ec255faea70dd41d61249a6123d56103b16020870151610c29565b6101e0850190815261247a47916101c087019283526123fc600160ff196004541617600455565b6124486000808a60808101518261243561042b60408051956120fa876120ec60208201986311b693e360e11b8a52339060248401611cf2565b9251925af1612442611d0b565b90612c57565b5061245860ff1960045416600455565b6124693061047060208b0151610c29565b90518082036102008901521461190e565b479051900360608501908151525180608086015260405191829182611d58565b0390a16124ac6080830151511561192e565b600080516020613e5a83398151915260808401516020840151516124d76121a3610100880151611158565b0390a1608060a083016124eb338251611358565b6101c08501516020825101527f9cb08e63905b9796748c6de3a2d3150f0ae4b1eff4e7295d4bc76a087a8183e6612529825160405191829182610c42565b0390a151910152608061253a611c58565b9261254e6125488251610c29565b85611358565b61256761255e6020830151610c29565b60208601611358565b6125806125776040830151610c29565b60408601611358565b6125996125906060830151151590565b15156060860152565b81810151828501526125ba6125b160a0830151610c29565b60a08601611358565b60c081015160c08501526125dd6125d460e0830151610c29565b60e08601611358565b6125f86125ee610100830151611158565b6101008601611367565b6101208082015190850152610140808201519085015261261c336101608601611358565b60006101808501526126366101a0611fbb81840151151590565b6020830151516101c0850152436101e08501526101e08101516102008501526101c0604084015191015190039101515101610220820152613217565b61267a611ce5565b6123a1565b506108fc61239a565b61269760029193929351611c4b565b6126a0816110e7565b146126aa57505050565b620f42409061020090828282015101936126ce6101209485830196875234146118b0565b8451620dbba095908681106129a75750620dbb9f1990510193610140809201948552600080808060a087019961270761042b8c51610c29565b82f11561299a575b8451620186a09081116128b65760a06101559860008080806127739661273861042b8c51610c29565b82f1156128a9575b604051600181527f4c641ffd9e5bc0e9ae3cd2532d6905a65ba9128ff91febf13fb2ab9ce67a203e908060208101611467565b6127f96127f0612781611c58565b9761279561278f8751610c29565b8a611358565b6127ae6127a56020880151610c29565b60208b01611358565b6127c76127be6040880151610c29565b60408b01611358565b6127e06127d76060880151151590565b151560608b0152565b608086015160808a015251610c29565b60a08801611358565b60c083015160c087015261281c61281360e0850151610c29565b60e08801611358565b61283661010061282e81860151611158565b908801611367565b80830151908601528082015190850152612858610160611fa181840151610c29565b61286a610180611fbb81840151151590565b61287c6101a0611fbb81840151151590565b6101c080820151908501526101e09043828601520151908301526201869f19905101610220820152613217565b6128b1611ce5565b612740565b506128f460a0610155987fa076ccd6f4d4afacdd75e994f763766477ff0ec01af31be3caeee7ea5183539c6040518061146781906001602083019252565b6129026127f0612781611c58565b60c083015160c087015261291c61281360e0850151610c29565b61292e61010061282e81860151611158565b80830151908601528082015190850152612950610160611fa181840151610c29565b612962610180611fbb81840151151590565b6129746101a0611fbb81840151151590565b6101c080820151908501526101e090438286015201519083015251610220820152613217565b6129a2611ce5565b61270f565b94955093620186a091508111612acc5760a0610155966000808080612a0e966129d361042b8a51610c29565b82f115612abf575b604051600181527fa85ce6c9c4d5b00c6ef4162e483a5f5b4734f2c5fe254051f0aa1ddc266ec850908060208101611467565b612a16611c58565b93612a246108998351610c29565b612a346108af6020840151610c29565b612a446108c86040840151610c29565b612a546108de6060840151151590565b60808201516080860152612a6e61090a60a0840151610c29565b60c082015160c0860152612a8861092960e0840151610c29565b612a9a610100611f7581850151611158565b80820151908501526101408082015190850152612858610160611fa181840151610c29565b612ac7611ce5565b6129db565b50612b0a60a0610155967f5a89e46585295308eb489e3285fd79d6cbfdbb275c28e9e8e50a607b2395a75d6040518061146781906001602083019252565b612b12611c58565b93612b206108998351610c29565b612b306108af6020840151610c29565b612b406108c86040840151610c29565b612b506108de6060840151151590565b60808201516080860152612b6a61090a60a0840151610c29565b60c082015160c0860152612b8461092960e0840151610c29565b612b96610100611f7581850151611158565b80820151908501526101408082015190850152612950610160611fa181840151610c29565b90506001541438611dfc565b15612bcf5790565b805115612bde57805190602001fd5b60405163100960cb60e01b815260136004820152602490fd5b15612bff5790565b805115612c0e57805190602001fd5b60405163100960cb60e01b815260166004820152602490fd5b15612c2f5790565b805115612c3e57805190602001fd5b60405163100960cb60e01b815260196004820152602490fd5b15612c5f5790565b805115612c6e57805190602001fd5b60405163100960cb60e01b8152602a6004820152602490fd5b15612c8f5790565b805115612c9e57805190602001fd5b60405163100960cb60e01b815260276004820152602490fd5b15612cbf5790565b805115612cce57805190602001fd5b60405163100960cb60e01b815260066004820152602490fd5b15612cef5790565b805115612cfe57805190602001fd5b60405163100960cb60e01b8152602e6004820152602490fd5b15612d1f5790565b805115612d2e57805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b15612d4f5790565b805115612d5e57805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b90816020910312610127575190565b600080916112aa93826040519160208301926370a0823160e01b845260018060a01b03809216602482015260248152612dbe81610da3565b5193165af1612dd5612dce611d0b565b8092612cb7565b5060208082518301019101612d77565b6040519060c082016001600160401b03811183821017612e35575b604052600060a083612e10610fa1565b8152612e1a610fa1565b60208201528260408201528260608201528260808201520152565b612e3d610d64565b612e00565b906001811015612e535760051b0190565b634e487b7160e01b600052603260045260246000fd5b818110612e74575050565b60008155600101612e69565b50634e487b7160e01b600052601160045260246000fd5b612ea2600254610d2a565b80612eaa5750565b601f8111600114612ebd57506000600255565b6002600052612f0290601f0160051c600080516020613e3a833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf612e69565b6000602081208160025555565b612f17610f04565b9060008083528060208401528060408401528060608401528060808401528060a08401528060c08401528060e08401528061010084015280610120840152612f5d610f64565b6101408401528061016084015280610180840152806101a0840152806101c0840152612f876112ad565b6101e0840152610200830152565b6000915b60018310612fa657505050565b600190606083519182518152602092838101518483015260408091015115159082015201920192019190612f99565b9190916102806102a0820193612fec838251610c35565b612ffe60208201516020850190610c35565b61301060408201516040850190610c35565b6060818101511515908401526080810151608084015261303860a082015160a0850190610c35565b60c081015160c084015261305460e082015160e0850190610c35565b610100818101516001600160601b031916908401526101208082015190840152613087610140808301519085019061012c565b6101608101519061309e6101a09283860190610c35565b6130e8610180820151926130b96101c0948588019015159052565b820151926130ce6101e0948588019015159052565b820151926102009384870152820151610220860190612f95565b0151910152565b90601f82116130fc575050565b6101559160026000526020600020906020601f840160051c8301931061312a575b601f0160051c0190612e69565b909150819061311d565b80519091906001600160401b03811161320a575b61315c81613157600254610d2a565b6130ef565b602080601f8311600114613198575081929360009261318d575b50508160011b916000199060031b1c191617600255565b015190503880613176565b6002600052601f19831694909190600080516020613e3a833981519152926000905b8782106131f25750508360019596106131d9575b505050811b01600255565b015160001960f88460031b161c191690553880806131ce565b806001859682949686015181550195019301906131ba565b613212610d64565b613148565b61321f612de5565b6101e08281018051610120808601805190959193926000911061367357506101a086015115155b1561337757505091613372916102206101559561336495613265612f0f565b94613273611ee28451610c29565b613283611ef86020850151610c29565b613293611f116040850151610c29565b6132a3611f2a6060850151151590565b608083015160808701526132bd6127f060a0850151610c29565b60c083015160c08701526132d761281360e0850151610c29565b6132e961010061282e81860151611158565b5190850152610140808201519085015261330b610160611fa181840151610c29565b61331d610180611fbb81840151151590565b60016101a08501526101c0808201519085015261020092838201519085015201519082015261334c6008600055565b61335543600155565b60405192839160208301612fd5565b03601f198101835282610e2b565b613134565b92509250602084019361338d6103b18651610c29565b608084019081524794606085019586526133af600160ff196004541617600455565b61014095613430878501519361340260008088604098826133ef61042b8c8051956120fa876120ec6020820198634c344d9d60e01b8a5260248301610145565b9251925af16133fc611d0b565b90612ce7565b5061341260ff1960045416600455565b613420306104708c51610c29565b905180820360a08a0152146119ae565b479051900385515261349085517fb296a23815642cccb180d3d63b9e3011b9aa54a0192401ac4b6d15cf614a9e436134746020890192808452865191829182611d58565b0390a183610220860151915191825101970196875251156119ce565b6080830151916101c08401908151937fc3acd7ee24f4f9cf4606c64c38b8640466129f78b44ac84b4e810f68345d08b46134ca8751610c29565b956134d860e0890151610c29565b9261353960c08a015198610100998a8c01966134f48851611158565b895195865260208601969096526001600160a01b039283166040860152909116606084015260808301526001600160601b031990921660a082015290819060c0820190565b0390a18251156135e95761354b6112df565b99865161355790610c29565b613561908c611358565b5161356b90610c29565b6135789060208c01611358565b5161358290611158565b61358d918a01611367565b61016084015161359c90610c29565b6135a99060608a01611358565b51608088015280516135ba90613678565b60a0880152600160c0880152600160e08801525190860152610200015190840152519082015261015590613804565b505050505060009485945084939184935061016061042b916120fa6136116136359551610c29565b61361b8351610c29565b6102008401515151916001600160a01b03909116906136af565b90519082821561366a575bf11561365d575b600080556136556000600155565b610155612e97565b613665611ce5565b613647565b506108fc613640565b613246565b90603282019182811161368e575b821061012757565b613696612e80565b613686565b919082019182811161368e57821061012757565b60405163a9059cbb60e01b602082019081526001600160a01b03938416602483015260448083019590955293815261372b93600093849392849190608081016001600160401b03811182821017613732575b6040525193165af161371b613714611d0b565b8092612d17565b506020808251830101910161373f565b1561012757565b61373a610d64565b613701565b9081602091031261012757516112aa8161117a565b6040519061376182610df4565b8160e06000918281528260208201528260408201528260608201528260808201528260a08201526137906112ad565b60c08201520152565b91909161012060e061014083019460018060a01b0380825116855280602083015116602086015260018060601b0319604083015116604086015260608201511660608501526080810151608085015260a081015160a08501526130e860c082015160c0860190612f95565b61010081015160a082018051909160009110613a70575060e082015115155b156138d257613372613364916101406101559461383e613754565b9261384c6125488351610c29565b61385c61255e6020840151610c29565b61387561386c6040840151611158565b60408601611367565b61388e6138856060840151610c29565b60608601611358565b608082015160808501525160a084015261012081015160c0840152015160e08201526138ba6006600055565b6138c343600155565b60405192839160208301613799565b5060c081015115613a00578060207f12efbaf7d721b41313ea6075bffc8bcdaf87de4d387fbe499734cc9c29fe5c3792016139d96139108251610c29565b61393c60608501916139228351610c29565b6101208701515151916001600160a01b03909116906136af565b600080808061394e61042b8951610c29565b610140890151908282156139f7575bf1156139ea575b6139716040850151611158565b9261399561398e61398760808801519751610c29565b9351610c29565b9151610c29565b91604051958695866001600160601b0319909116815260208101919091526001600160a01b0391821660408201529181166060830152909116608082015260a00190565b0390a1600080556136556000600155565b6139f2611ce5565b613964565b506108fc61395d565b8060207fdd5bfdf918cd86e0bb3c19331b121dcfa52fec6eee8c528aa1267c11069456879201613a57613a338251610c29565b613a3d8451610c29565b6101208501515151916001600160a01b03909116906136af565b6139d960608301600080808061394e61042b8651610c29565b613823565b60209060031901126101275760405190613a8e82610dd9565b6004358252565b60209060631901126101275760405190613aae82610dd9565b6064358252565b60405190613ac282610df4565b8160e0600091828152826020820152826040820152826060820152826080820152613aeb610f64565b60a08201528260c08201520152565b613b02610f44565b906000808352613b10610fa1565b6020840152613b1d610fa1565b6040840152613b2a610fa1565b6060840152613b37610fa1565b60808401528060a0840152613b4a613ab5565b60c0840152613b57610fa1565b60e0840152613b64610fa1565b610100840152613b72610f64565b610120840152806101408401528061016084015280610180840152806101a0840152806101c0840152806101e08401528061020084015280610220840152610240830152565b90818103906101a08212610127576040805193613bd485610e10565b613bdd81611144565b8552613beb60208201611144565b602086015260e0603f19850112610127576060825194613c0a86610e10565b828401518652605f19011261012757815193613c2585610da3565b606082015185526080820151602086015260a0820151926001600160801b03198416840361012757856101409482613ca59801526020830152613c6a60c08401611144565b8183015260e08301516060830152613c856101008401611165565b6080830152860152613c9a6101208201611144565b60608601520161118f565b608082015290565b90816020910312610127576112aa90611144565b815181526020808301516001600160a01b039081168284015260408085015181850152606080860151909216918401919091526080808501516001600160601b0319169084015260a0808501518051918501919091529182015160c084015201516001600160801b03191660e0808301919091526101408201939261015592916101209160c08101516101008501520151910190610c35565b6040516323b872dd60e01b602082019081526001600160a01b039283166024830152306044830152600160648084019190915282526112aa93600093849391929184919060a081016001600160401b03811182821017613dcf575b6040525193165af161371b613dc8611d0b565b8092612d47565b613dd7610d64565b613db5565b9190613de66112ad565b9260005b60018110613df85750508252565b80613e0560019284612e42565b51613e108288612e42565b52613e1b8187612e42565b506000198114613e2c575b01613dea565b613e34612e80565b613e2656fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace10e5d75f4df634f7c0e19fee3620d2d34905e2dcd059beed6673032e56c98b8ba164736f6c6343000810000a`,
  BytecodeLen: 17957,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './src/contracts/auction.rsh:76:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './src/contracts/auction.rsh:244:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './src/contracts/auction.rsh:244:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './src/contracts/auction.rsh:191:66:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './src/contracts/auction.rsh:244:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './src/contracts/auction.rsh:113:31:after expr stmt semicolon',
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
