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
  
  return {
    infos: {
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
    fs: ['at ./src/contracts/auction.rsh:191:36:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:191:36:function exp)', 'at ./src/contracts/auction.rsh:185:66:application call to "runAuctioneer_acceptSale0_444" (defined at: ./src/contracts/auction.rsh:189:29:function exp)', 'at ./src/contracts/auction.rsh:185:66:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:185:66:function exp)'],
    msg: 'in',
    who: 'Auctioneer_acceptSale'
    });
  const v1273 = stdlib.addressEq(v1269, v701);
  stdlib.assert(v1273, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/auction.rsh:192:46:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/auction.rsh:191:36:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:191:36:function exp)', 'at ./src/contracts/auction.rsh:191:36:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:191:36:function exp)', 'at ./src/contracts/auction.rsh:185:66:application call to "runAuctioneer_acceptSale0_444" (defined at: ./src/contracts/auction.rsh:189:29:function exp)', 'at ./src/contracts/auction.rsh:185:66:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:185:66:function exp)'],
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
    pay: [stdlib.checkedBigNumberify('./src/contracts/auction.rsh:194:39:decimal', stdlib.UInt_max, '0'), []],
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
          
          const v3081 = v1259;
          const v3082 = v1260;
          const v3083 = stdlib.le(v1293, v1250);
          const v3084 = v3083 ? false : false;
          if (v3084) {
            sim_r.isHalt = false;
            }
          else {
            const v3085 = v1259[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:213:41:application', stdlib.UInt_max, '0')];
            const v3086 = v3085[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:213:41:application', stdlib.UInt_max, '0')];
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
          at: './src/contracts/auction.rsh:190:33:application',
          fs: ['at ./src/contracts/auction.rsh:190:33:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:190:33:function exp)', 'at ./src/contracts/auction.rsh:196:47:application call to "notify" (defined at: ./src/contracts/auction.rsh:195:42:function exp)', 'at ./src/contracts/auction.rsh:195:42:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:195:42:function exp)'],
          msg: 'out',
          who: 'Auctioneer_acceptSale'
          });
        }
      else {
        }
      
      const v3081 = v1259;
      const v3082 = v1260;
      const v3083 = stdlib.le(v1293, v1250);
      const v3084 = v3083 ? false : false;
      if (v3084) {
        return;
        }
      else {
        const v3085 = v1259[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:213:41:application', stdlib.UInt_max, '0')];
        const v3086 = v3085[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:213:41:application', stdlib.UInt_max, '0')];
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
    fs: ['at ./src/contracts/auction.rsh:202:36:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:202:36:function exp)', 'at ./src/contracts/auction.rsh:185:66:application call to "runAuctioneer_rejectSale0_444" (defined at: ./src/contracts/auction.rsh:200:29:function exp)', 'at ./src/contracts/auction.rsh:185:66:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:185:66:function exp)'],
    msg: 'in',
    who: 'Auctioneer_rejectSale'
    });
  const v1283 = stdlib.addressEq(v1279, v701);
  stdlib.assert(v1283, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/auction.rsh:203:46:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/auction.rsh:202:36:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:202:36:function exp)', 'at ./src/contracts/auction.rsh:202:36:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:202:36:function exp)', 'at ./src/contracts/auction.rsh:185:66:application call to "runAuctioneer_rejectSale0_444" (defined at: ./src/contracts/auction.rsh:200:29:function exp)', 'at ./src/contracts/auction.rsh:185:66:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:185:66:function exp)'],
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
    pay: [stdlib.checkedBigNumberify('./src/contracts/auction.rsh:205:39:decimal', stdlib.UInt_max, '0'), []],
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
          
          const v3114 = v1259;
          const v3115 = v1260;
          const v3116 = stdlib.le(v1293, v1250);
          const v3117 = v3116 ? false : false;
          if (v3117) {
            sim_r.isHalt = false;
            }
          else {
            const v3120 = v1259[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:223:41:application', stdlib.UInt_max, '0')];
            const v3121 = v3120[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:223:41:application', stdlib.UInt_max, '0')];
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
          at: './src/contracts/auction.rsh:201:33:application',
          fs: ['at ./src/contracts/auction.rsh:201:33:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:201:33:function exp)', 'at ./src/contracts/auction.rsh:207:47:application call to "notify" (defined at: ./src/contracts/auction.rsh:206:42:function exp)', 'at ./src/contracts/auction.rsh:206:42:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:206:42:function exp)'],
          msg: 'out',
          who: 'Auctioneer_rejectSale'
          });
        }
      else {
        }
      
      const v3114 = v1259;
      const v3115 = v1260;
      const v3116 = stdlib.le(v1293, v1250);
      const v3117 = v3116 ? false : false;
      if (v3117) {
        return;
        }
      else {
        const v3120 = v1259[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:223:41:application', stdlib.UInt_max, '0')];
        const v3121 = v3120[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:223:41:application', stdlib.UInt_max, '0')];
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
    fs: ['at ./src/contracts/auction.rsh:154:36:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:154:36:function exp)', 'at ./src/contracts/auction.rsh:108:31:application call to "runAuctioneer_stopAuction0_123" (defined at: ./src/contracts/auction.rsh:152:29:function exp)', 'at ./src/contracts/auction.rsh:108:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:108:31:function exp)'],
    msg: 'in',
    who: 'Auctioneer_stopAuction'
    });
  const v798 = stdlib.addressEq(v794, v701);
  stdlib.assert(v798, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/auction.rsh:155:46:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/auction.rsh:154:36:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:154:36:function exp)', 'at ./src/contracts/auction.rsh:154:36:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:154:36:function exp)', 'at ./src/contracts/auction.rsh:108:31:application call to "runAuctioneer_stopAuction0_123" (defined at: ./src/contracts/auction.rsh:152:29:function exp)', 'at ./src/contracts/auction.rsh:108:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:108:31:function exp)'],
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
    pay: [stdlib.checkedBigNumberify('./src/contracts/auction.rsh:157:39:decimal', stdlib.UInt_max, '0'), []],
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
          
          const v3122 = v850;
          const v3123 = v772;
          const v3124 = v773;
          const v3125 = false;
          const v3126 = v775;
          const v3128 = v782;
          const v3129 = v783;
          const v3130 = stdlib.le(v834, v769);
          const v3131 = v3130 ? false : false;
          if (v3131) {
            sim_r.isHalt = false;
            }
          else {
            const v3132 = await (async () => {
              sim_r.txns.push({
                kind: 'remote',
                obj: v704,
                remote: ({
                  accs: [],
                  apps: [],
                  bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:170:37:application', stdlib.UInt_max, '0'),
                  fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:170:37:application', stdlib.UInt_max, '0'),
                  toks: []
                  })
                })
              return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
            const v3133 = await txn1.getOutput('internal', 'v3132', ctc13, v3132);
            const v3134 = v3133[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:170:37:application', stdlib.UInt_max, '0')];
            const v3135 = stdlib.add(v783, v3134);
            null;
            const v3137 = stdlib.gt(v775, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:182:25:decimal', stdlib.UInt_max, '0'));
            if (v3137) {
              const v3138 = stdlib.safeAdd(v834, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
              const v3166 = v782;
              const v3167 = v3135;
              const v3168 = stdlib.le(v834, v3138);
              if (v3168) {
                sim_r.isHalt = false;
                }
              else {
                const v3170 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:213:41:application', stdlib.UInt_max, '0')];
                const v3171 = v3170[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:213:41:application', stdlib.UInt_max, '0')];
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
              const v3161 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:33:application', stdlib.UInt_max, '0')];
              const v3162 = v3161[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:33:application', stdlib.UInt_max, '0')];
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
          at: './src/contracts/auction.rsh:153:33:application',
          fs: ['at ./src/contracts/auction.rsh:153:33:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:153:33:function exp)', 'at ./src/contracts/auction.rsh:165:47:application call to "notify" (defined at: ./src/contracts/auction.rsh:158:42:function exp)', 'at ./src/contracts/auction.rsh:158:42:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:158:42:function exp)'],
          msg: 'out',
          who: 'Auctioneer_stopAuction'
          });
        }
      else {
        }
      
      const v3122 = v850;
      const v3123 = v772;
      const v3124 = v773;
      const v3125 = false;
      const v3126 = v775;
      const v3128 = v782;
      const v3129 = v783;
      const v3130 = stdlib.le(v834, v769);
      const v3131 = v3130 ? false : false;
      if (v3131) {
        return;
        }
      else {
        const v3132 = undefined /* Remote */;
        const v3133 = await txn1.getOutput('internal', 'v3132', ctc13, v3132);
        const v3134 = v3133[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:170:37:application', stdlib.UInt_max, '0')];
        const v3135 = stdlib.add(v783, v3134);
        const v3136 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3134);
        stdlib.assert(v3136, {
          at: './src/contracts/auction.rsh:170:37:application',
          fs: [],
          msg: 'remote bill check',
          who: 'Auctioneer_stopAuction'
          });
        null;
        const v3137 = stdlib.gt(v775, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:182:25:decimal', stdlib.UInt_max, '0'));
        if (v3137) {
          const v3138 = stdlib.safeAdd(v834, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
          const v3166 = v782;
          const v3167 = v3135;
          const v3168 = stdlib.le(v834, v3138);
          if (v3168) {
            return;
            }
          else {
            const v3170 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:213:41:application', stdlib.UInt_max, '0')];
            const v3171 = v3170[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:213:41:application', stdlib.UInt_max, '0')];
            ;
            ;
            null;
            return;
            }}
        else {
          const v3161 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:33:application', stdlib.UInt_max, '0')];
          const v3162 = v3161[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:33:application', stdlib.UInt_max, '0')];
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
    fs: ['at ./src/contracts/auction.rsh:125:49:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:125:49:function exp)', 'at ./src/contracts/auction.rsh:108:31:application call to "runBidder_bid0_123" (defined at: ./src/contracts/auction.rsh:125:30:function exp)', 'at ./src/contracts/auction.rsh:108:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:108:31:function exp)'],
    msg: 'in',
    who: 'Bidder_bid'
    });
  const v807 = v806[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v809 = stdlib.gt(v807, v775);
  stdlib.assert(v809, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/auction.rsh:126:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/auction.rsh:125:49:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:125:49:function exp)', 'at ./src/contracts/auction.rsh:108:31:application call to "runBidder_bid0_123" (defined at: ./src/contracts/auction.rsh:125:30:function exp)', 'at ./src/contracts/auction.rsh:108:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:108:31:function exp)'],
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
          const v973 = v967[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:125:30:spread', stdlib.UInt_max, '0')];
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
                  bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:132:91:application', stdlib.UInt_max, '0'),
                  fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:132:91:application', stdlib.UInt_max, '0'),
                  toks: []
                  })
                })
              return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
            const v1031 = await txn1.getOutput('internal', 'v1030', ctc13, v1030);
            const v1033 = v1031[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:132:91:application', stdlib.UInt_max, '0')];
            const v1038 = stdlib.add(v978, v1033);
            null;
            const v1041 = [v832, v775];
            const v1042 = await txn1.getOutput('Bidder_bid', 'v1041', ctc14, v1041);
            
            const v3538 = v771;
            const v3539 = v832;
            const v3540 = false;
            const v3541 = v774;
            const v3542 = v973;
            const v3544 = v782;
            const v3545 = v1038;
            const v3546 = stdlib.le(v834, v769);
            const v3547 = v3546 ? v774 : false;
            if (v3547) {
              sim_r.isHalt = false;
              }
            else {
              const v3548 = await (async () => {
                sim_r.txns.push({
                  kind: 'remote',
                  obj: v704,
                  remote: ({
                    accs: [],
                    apps: [],
                    bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:170:37:application', stdlib.UInt_max, '0'),
                    fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:170:37:application', stdlib.UInt_max, '0'),
                    toks: []
                    })
                  })
                return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
              const v3549 = await txn1.getOutput('internal', 'v3548', ctc13, v3548);
              const v3550 = v3549[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:170:37:application', stdlib.UInt_max, '0')];
              const v3551 = stdlib.add(v1038, v3550);
              null;
              const v3553 = stdlib.gt(v973, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:182:25:decimal', stdlib.UInt_max, '0'));
              if (v3553) {
                const v3554 = stdlib.safeAdd(v834, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
                const v3582 = v782;
                const v3583 = v3551;
                const v3584 = stdlib.le(v834, v3554);
                if (v3584) {
                  sim_r.isHalt = false;
                  }
                else {
                  const v3586 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:213:41:application', stdlib.UInt_max, '0')];
                  const v3587 = v3586[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:213:41:application', stdlib.UInt_max, '0')];
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
                const v3577 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:33:application', stdlib.UInt_max, '0')];
                const v3578 = v3577[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:33:application', stdlib.UInt_max, '0')];
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
                  bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:132:91:application', stdlib.UInt_max, '0'),
                  fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:132:91:application', stdlib.UInt_max, '0'),
                  toks: []
                  })
                })
              return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
            const v1007 = await txn1.getOutput('internal', 'v1006', ctc13, v1006);
            const v1009 = v1007[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:132:91:application', stdlib.UInt_max, '0')];
            const v1014 = stdlib.add(v1002, v1009);
            null;
            const v1017 = [v832, v775];
            const v1018 = await txn1.getOutput('Bidder_bid', 'v1017', ctc14, v1017);
            
            const v3590 = v771;
            const v3591 = v832;
            const v3592 = false;
            const v3593 = v774;
            const v3594 = v973;
            const v3596 = v782;
            const v3597 = v1014;
            const v3598 = stdlib.le(v834, v769);
            const v3599 = v3598 ? v774 : false;
            if (v3599) {
              sim_r.isHalt = false;
              }
            else {
              const v3600 = await (async () => {
                sim_r.txns.push({
                  kind: 'remote',
                  obj: v704,
                  remote: ({
                    accs: [],
                    apps: [],
                    bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:170:37:application', stdlib.UInt_max, '0'),
                    fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:170:37:application', stdlib.UInt_max, '0'),
                    toks: []
                    })
                  })
                return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
              const v3601 = await txn1.getOutput('internal', 'v3600', ctc13, v3600);
              const v3602 = v3601[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:170:37:application', stdlib.UInt_max, '0')];
              const v3603 = stdlib.add(v1014, v3602);
              null;
              const v3605 = stdlib.gt(v973, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:182:25:decimal', stdlib.UInt_max, '0'));
              if (v3605) {
                const v3606 = stdlib.safeAdd(v834, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
                const v3634 = v782;
                const v3635 = v3603;
                const v3636 = stdlib.le(v834, v3606);
                if (v3636) {
                  sim_r.isHalt = false;
                  }
                else {
                  const v3638 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:213:41:application', stdlib.UInt_max, '0')];
                  const v3639 = v3638[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:213:41:application', stdlib.UInt_max, '0')];
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
                const v3629 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:33:application', stdlib.UInt_max, '0')];
                const v3630 = v3629[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:33:application', stdlib.UInt_max, '0')];
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
      const v973 = v967[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:125:30:spread', stdlib.UInt_max, '0')];
      const v974 = stdlib.gt(v973, v775);
      stdlib.assert(v974, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/auction.rsh:126:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/auction.rsh:125:49:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:125:49:function exp)', 'at ./src/contracts/auction.rsh:108:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:125:49:function exp)', 'at ./src/contracts/auction.rsh:108:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:108:31:function exp)'],
        msg: 'Your bid is too low, please try again',
        who: 'Bidder_bid'
        });
      const v978 = stdlib.add(v783, v973);
      ;
      if (v773) {
        const v1030 = undefined /* Remote */;
        const v1031 = await txn1.getOutput('internal', 'v1030', ctc13, v1030);
        const v1033 = v1031[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:132:91:application', stdlib.UInt_max, '0')];
        const v1038 = stdlib.add(v978, v1033);
        const v1039 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1033);
        stdlib.assert(v1039, {
          at: './src/contracts/auction.rsh:132:91:application',
          fs: ['at ./src/contracts/auction.rsh:129:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:129:50:function exp)'],
          msg: 'remote bill check',
          who: 'Bidder_bid'
          });
        null;
        const v1041 = [v832, v775];
        const v1042 = await txn1.getOutput('Bidder_bid', 'v1041', ctc14, v1041);
        if (v317) {
          stdlib.protect(ctc12, await interact.out(v967, v1042), {
            at: './src/contracts/auction.rsh:125:31:application',
            fs: ['at ./src/contracts/auction.rsh:125:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:125:31:function exp)', 'at ./src/contracts/auction.rsh:134:55:application call to "notify" (defined at: ./src/contracts/auction.rsh:129:50:function exp)', 'at ./src/contracts/auction.rsh:129:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:129:50:function exp)'],
            msg: 'out',
            who: 'Bidder_bid'
            });
          }
        else {
          }
        
        const v3538 = v771;
        const v3539 = v832;
        const v3540 = false;
        const v3541 = v774;
        const v3542 = v973;
        const v3544 = v782;
        const v3545 = v1038;
        const v3546 = stdlib.le(v834, v769);
        const v3547 = v3546 ? v774 : false;
        if (v3547) {
          return;
          }
        else {
          const v3548 = undefined /* Remote */;
          const v3549 = await txn1.getOutput('internal', 'v3548', ctc13, v3548);
          const v3550 = v3549[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:170:37:application', stdlib.UInt_max, '0')];
          const v3551 = stdlib.add(v1038, v3550);
          const v3552 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3550);
          stdlib.assert(v3552, {
            at: './src/contracts/auction.rsh:170:37:application',
            fs: [],
            msg: 'remote bill check',
            who: 'Bidder_bid'
            });
          null;
          const v3553 = stdlib.gt(v973, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:182:25:decimal', stdlib.UInt_max, '0'));
          if (v3553) {
            const v3554 = stdlib.safeAdd(v834, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
            const v3582 = v782;
            const v3583 = v3551;
            const v3584 = stdlib.le(v834, v3554);
            if (v3584) {
              return;
              }
            else {
              const v3586 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:213:41:application', stdlib.UInt_max, '0')];
              const v3587 = v3586[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:213:41:application', stdlib.UInt_max, '0')];
              ;
              ;
              null;
              return;
              }}
          else {
            const v3577 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:33:application', stdlib.UInt_max, '0')];
            const v3578 = v3577[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:33:application', stdlib.UInt_max, '0')];
            ;
            ;
            return;
            }}}
      else {
        const v1002 = stdlib.sub(v978, v775);
        ;
        const v1006 = undefined /* Remote */;
        const v1007 = await txn1.getOutput('internal', 'v1006', ctc13, v1006);
        const v1009 = v1007[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:132:91:application', stdlib.UInt_max, '0')];
        const v1014 = stdlib.add(v1002, v1009);
        const v1015 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1009);
        stdlib.assert(v1015, {
          at: './src/contracts/auction.rsh:132:91:application',
          fs: ['at ./src/contracts/auction.rsh:129:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:129:50:function exp)'],
          msg: 'remote bill check',
          who: 'Bidder_bid'
          });
        null;
        const v1017 = [v832, v775];
        const v1018 = await txn1.getOutput('Bidder_bid', 'v1017', ctc14, v1017);
        if (v317) {
          stdlib.protect(ctc12, await interact.out(v967, v1018), {
            at: './src/contracts/auction.rsh:125:31:application',
            fs: ['at ./src/contracts/auction.rsh:125:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:125:31:function exp)', 'at ./src/contracts/auction.rsh:134:55:application call to "notify" (defined at: ./src/contracts/auction.rsh:129:50:function exp)', 'at ./src/contracts/auction.rsh:129:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:129:50:function exp)'],
            msg: 'out',
            who: 'Bidder_bid'
            });
          }
        else {
          }
        
        const v3590 = v771;
        const v3591 = v832;
        const v3592 = false;
        const v3593 = v774;
        const v3594 = v973;
        const v3596 = v782;
        const v3597 = v1014;
        const v3598 = stdlib.le(v834, v769);
        const v3599 = v3598 ? v774 : false;
        if (v3599) {
          return;
          }
        else {
          const v3600 = undefined /* Remote */;
          const v3601 = await txn1.getOutput('internal', 'v3600', ctc13, v3600);
          const v3602 = v3601[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:170:37:application', stdlib.UInt_max, '0')];
          const v3603 = stdlib.add(v1014, v3602);
          const v3604 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3602);
          stdlib.assert(v3604, {
            at: './src/contracts/auction.rsh:170:37:application',
            fs: [],
            msg: 'remote bill check',
            who: 'Bidder_bid'
            });
          null;
          const v3605 = stdlib.gt(v973, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:182:25:decimal', stdlib.UInt_max, '0'));
          if (v3605) {
            const v3606 = stdlib.safeAdd(v834, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
            const v3634 = v782;
            const v3635 = v3603;
            const v3636 = stdlib.le(v834, v3606);
            if (v3636) {
              return;
              }
            else {
              const v3638 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:213:41:application', stdlib.UInt_max, '0')];
              const v3639 = v3638[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:213:41:application', stdlib.UInt_max, '0')];
              ;
              ;
              null;
              return;
              }}
          else {
            const v3629 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:33:application', stdlib.UInt_max, '0')];
            const v3630 = v3629[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:33:application', stdlib.UInt_max, '0')];
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
    fs: ['at ./src/contracts/auction.rsh:139:48:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:139:48:function exp)', 'at ./src/contracts/auction.rsh:108:31:application call to "runBidder_optIn0_123" (defined at: ./src/contracts/auction.rsh:139:30:function exp)', 'at ./src/contracts/auction.rsh:108:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:108:31:function exp)'],
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
          const v1184 = stdlib.ge(v1109, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:143:83:application', stdlib.UInt_max, '900000'));
          if (v1184) {
            const v1188 = stdlib.sub(v1109, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:143:83:application', stdlib.UInt_max, '900000'));
            sim_r.txns.push({
              kind: 'from',
              to: v741,
              tok: undefined /* Nothing */
              });
            const v1190 = stdlib.ge(v1188, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:144:84:application', stdlib.UInt_max, '100000'));
            if (v1190) {
              const v1194 = stdlib.sub(v1188, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:144:84:application', stdlib.UInt_max, '100000'));
              sim_r.txns.push({
                kind: 'from',
                to: v701,
                tok: undefined /* Nothing */
                });
              const v1195 = true;
              const v1196 = await txn1.getOutput('Bidder_optIn', 'v1195', ctc7, v1195);
              
              const v4006 = v771;
              const v4007 = v772;
              const v4008 = v773;
              const v4009 = v774;
              const v4010 = v775;
              const v4012 = v782;
              const v4013 = v1194;
              const v4014 = stdlib.le(v834, v769);
              const v4015 = v4014 ? v774 : false;
              if (v4015) {
                sim_r.isHalt = false;
                }
              else {
                const v4016 = await (async () => {
                  sim_r.txns.push({
                    kind: 'remote',
                    obj: v704,
                    remote: ({
                      accs: [],
                      apps: [],
                      bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:170:37:application', stdlib.UInt_max, '0'),
                      fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:170:37:application', stdlib.UInt_max, '0'),
                      toks: []
                      })
                    })
                  return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
                const v4017 = await txn1.getOutput('internal', 'v4016', ctc13, v4016);
                const v4018 = v4017[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:170:37:application', stdlib.UInt_max, '0')];
                const v4019 = stdlib.add(v1194, v4018);
                null;
                const v4021 = stdlib.gt(v775, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:182:25:decimal', stdlib.UInt_max, '0'));
                if (v4021) {
                  const v4022 = stdlib.safeAdd(v834, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
                  const v4050 = v782;
                  const v4051 = v4019;
                  const v4052 = stdlib.le(v834, v4022);
                  if (v4052) {
                    sim_r.isHalt = false;
                    }
                  else {
                    const v4054 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:213:41:application', stdlib.UInt_max, '0')];
                    const v4055 = v4054[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:213:41:application', stdlib.UInt_max, '0')];
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
                  const v4045 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:33:application', stdlib.UInt_max, '0')];
                  const v4046 = v4045[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:33:application', stdlib.UInt_max, '0')];
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
              
              const v4058 = v771;
              const v4059 = v772;
              const v4060 = v773;
              const v4061 = v774;
              const v4062 = v775;
              const v4064 = v782;
              const v4065 = v1188;
              const v4066 = stdlib.le(v834, v769);
              const v4067 = v4066 ? v774 : false;
              if (v4067) {
                sim_r.isHalt = false;
                }
              else {
                const v4068 = await (async () => {
                  sim_r.txns.push({
                    kind: 'remote',
                    obj: v704,
                    remote: ({
                      accs: [],
                      apps: [],
                      bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:170:37:application', stdlib.UInt_max, '0'),
                      fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:170:37:application', stdlib.UInt_max, '0'),
                      toks: []
                      })
                    })
                  return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
                const v4069 = await txn1.getOutput('internal', 'v4068', ctc13, v4068);
                const v4070 = v4069[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:170:37:application', stdlib.UInt_max, '0')];
                const v4071 = stdlib.add(v1188, v4070);
                null;
                const v4073 = stdlib.gt(v775, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:182:25:decimal', stdlib.UInt_max, '0'));
                if (v4073) {
                  const v4074 = stdlib.safeAdd(v834, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
                  const v4102 = v782;
                  const v4103 = v4071;
                  const v4104 = stdlib.le(v834, v4074);
                  if (v4104) {
                    sim_r.isHalt = false;
                    }
                  else {
                    const v4106 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:213:41:application', stdlib.UInt_max, '0')];
                    const v4107 = v4106[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:213:41:application', stdlib.UInt_max, '0')];
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
                  const v4097 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:33:application', stdlib.UInt_max, '0')];
                  const v4098 = v4097[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:33:application', stdlib.UInt_max, '0')];
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
            const v1210 = stdlib.ge(v1109, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:144:84:application', stdlib.UInt_max, '100000'));
            if (v1210) {
              const v1214 = stdlib.sub(v1109, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:144:84:application', stdlib.UInt_max, '100000'));
              sim_r.txns.push({
                kind: 'from',
                to: v701,
                tok: undefined /* Nothing */
                });
              const v1215 = true;
              const v1216 = await txn1.getOutput('Bidder_optIn', 'v1215', ctc7, v1215);
              
              const v4110 = v771;
              const v4111 = v772;
              const v4112 = v773;
              const v4113 = v774;
              const v4114 = v775;
              const v4116 = v782;
              const v4117 = v1214;
              const v4118 = stdlib.le(v834, v769);
              const v4119 = v4118 ? v774 : false;
              if (v4119) {
                sim_r.isHalt = false;
                }
              else {
                const v4120 = await (async () => {
                  sim_r.txns.push({
                    kind: 'remote',
                    obj: v704,
                    remote: ({
                      accs: [],
                      apps: [],
                      bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:170:37:application', stdlib.UInt_max, '0'),
                      fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:170:37:application', stdlib.UInt_max, '0'),
                      toks: []
                      })
                    })
                  return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
                const v4121 = await txn1.getOutput('internal', 'v4120', ctc13, v4120);
                const v4122 = v4121[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:170:37:application', stdlib.UInt_max, '0')];
                const v4123 = stdlib.add(v1214, v4122);
                null;
                const v4125 = stdlib.gt(v775, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:182:25:decimal', stdlib.UInt_max, '0'));
                if (v4125) {
                  const v4126 = stdlib.safeAdd(v834, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
                  const v4154 = v782;
                  const v4155 = v4123;
                  const v4156 = stdlib.le(v834, v4126);
                  if (v4156) {
                    sim_r.isHalt = false;
                    }
                  else {
                    const v4158 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:213:41:application', stdlib.UInt_max, '0')];
                    const v4159 = v4158[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:213:41:application', stdlib.UInt_max, '0')];
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
                  const v4149 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:33:application', stdlib.UInt_max, '0')];
                  const v4150 = v4149[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:33:application', stdlib.UInt_max, '0')];
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
              
              const v4162 = v771;
              const v4163 = v772;
              const v4164 = v773;
              const v4165 = v774;
              const v4166 = v775;
              const v4168 = v782;
              const v4169 = v1109;
              const v4170 = stdlib.le(v834, v769);
              const v4171 = v4170 ? v774 : false;
              if (v4171) {
                sim_r.isHalt = false;
                }
              else {
                const v4172 = await (async () => {
                  sim_r.txns.push({
                    kind: 'remote',
                    obj: v704,
                    remote: ({
                      accs: [],
                      apps: [],
                      bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:170:37:application', stdlib.UInt_max, '0'),
                      fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:170:37:application', stdlib.UInt_max, '0'),
                      toks: []
                      })
                    })
                  return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
                const v4173 = await txn1.getOutput('internal', 'v4172', ctc13, v4172);
                const v4174 = v4173[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:170:37:application', stdlib.UInt_max, '0')];
                const v4175 = stdlib.add(v1109, v4174);
                null;
                const v4177 = stdlib.gt(v775, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:182:25:decimal', stdlib.UInt_max, '0'));
                if (v4177) {
                  const v4178 = stdlib.safeAdd(v834, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
                  const v4206 = v782;
                  const v4207 = v4175;
                  const v4208 = stdlib.le(v834, v4178);
                  if (v4208) {
                    sim_r.isHalt = false;
                    }
                  else {
                    const v4210 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:213:41:application', stdlib.UInt_max, '0')];
                    const v4211 = v4210[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:213:41:application', stdlib.UInt_max, '0')];
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
                  const v4201 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:33:application', stdlib.UInt_max, '0')];
                  const v4202 = v4201[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:33:application', stdlib.UInt_max, '0')];
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
      const v1184 = stdlib.ge(v1109, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:143:83:application', stdlib.UInt_max, '900000'));
      if (v1184) {
        const v1188 = stdlib.sub(v1109, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:143:83:application', stdlib.UInt_max, '900000'));
        ;
        const v1190 = stdlib.ge(v1188, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:144:84:application', stdlib.UInt_max, '100000'));
        if (v1190) {
          const v1194 = stdlib.sub(v1188, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:144:84:application', stdlib.UInt_max, '100000'));
          ;
          const v1195 = true;
          const v1196 = await txn1.getOutput('Bidder_optIn', 'v1195', ctc7, v1195);
          if (v317) {
            stdlib.protect(ctc12, await interact.out(v1098, v1196), {
              at: './src/contracts/auction.rsh:139:31:application',
              fs: ['at ./src/contracts/auction.rsh:139:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:139:31:function exp)', 'at ./src/contracts/auction.rsh:147:55:application call to "notify" (defined at: ./src/contracts/auction.rsh:142:50:function exp)', 'at ./src/contracts/auction.rsh:142:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:142:50:function exp)'],
              msg: 'out',
              who: 'Bidder_optIn'
              });
            }
          else {
            }
          
          const v4006 = v771;
          const v4007 = v772;
          const v4008 = v773;
          const v4009 = v774;
          const v4010 = v775;
          const v4012 = v782;
          const v4013 = v1194;
          const v4014 = stdlib.le(v834, v769);
          const v4015 = v4014 ? v774 : false;
          if (v4015) {
            return;
            }
          else {
            const v4016 = undefined /* Remote */;
            const v4017 = await txn1.getOutput('internal', 'v4016', ctc13, v4016);
            const v4018 = v4017[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:170:37:application', stdlib.UInt_max, '0')];
            const v4019 = stdlib.add(v1194, v4018);
            const v4020 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4018);
            stdlib.assert(v4020, {
              at: './src/contracts/auction.rsh:170:37:application',
              fs: [],
              msg: 'remote bill check',
              who: 'Bidder_optIn'
              });
            null;
            const v4021 = stdlib.gt(v775, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:182:25:decimal', stdlib.UInt_max, '0'));
            if (v4021) {
              const v4022 = stdlib.safeAdd(v834, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
              const v4050 = v782;
              const v4051 = v4019;
              const v4052 = stdlib.le(v834, v4022);
              if (v4052) {
                return;
                }
              else {
                const v4054 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:213:41:application', stdlib.UInt_max, '0')];
                const v4055 = v4054[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:213:41:application', stdlib.UInt_max, '0')];
                ;
                ;
                null;
                return;
                }}
            else {
              const v4045 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:33:application', stdlib.UInt_max, '0')];
              const v4046 = v4045[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:33:application', stdlib.UInt_max, '0')];
              ;
              ;
              return;
              }}}
        else {
          const v1202 = true;
          const v1203 = await txn1.getOutput('Bidder_optIn', 'v1202', ctc7, v1202);
          if (v317) {
            stdlib.protect(ctc12, await interact.out(v1098, v1203), {
              at: './src/contracts/auction.rsh:139:31:application',
              fs: ['at ./src/contracts/auction.rsh:139:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:139:31:function exp)', 'at ./src/contracts/auction.rsh:147:55:application call to "notify" (defined at: ./src/contracts/auction.rsh:142:50:function exp)', 'at ./src/contracts/auction.rsh:142:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:142:50:function exp)'],
              msg: 'out',
              who: 'Bidder_optIn'
              });
            }
          else {
            }
          
          const v4058 = v771;
          const v4059 = v772;
          const v4060 = v773;
          const v4061 = v774;
          const v4062 = v775;
          const v4064 = v782;
          const v4065 = v1188;
          const v4066 = stdlib.le(v834, v769);
          const v4067 = v4066 ? v774 : false;
          if (v4067) {
            return;
            }
          else {
            const v4068 = undefined /* Remote */;
            const v4069 = await txn1.getOutput('internal', 'v4068', ctc13, v4068);
            const v4070 = v4069[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:170:37:application', stdlib.UInt_max, '0')];
            const v4071 = stdlib.add(v1188, v4070);
            const v4072 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4070);
            stdlib.assert(v4072, {
              at: './src/contracts/auction.rsh:170:37:application',
              fs: [],
              msg: 'remote bill check',
              who: 'Bidder_optIn'
              });
            null;
            const v4073 = stdlib.gt(v775, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:182:25:decimal', stdlib.UInt_max, '0'));
            if (v4073) {
              const v4074 = stdlib.safeAdd(v834, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
              const v4102 = v782;
              const v4103 = v4071;
              const v4104 = stdlib.le(v834, v4074);
              if (v4104) {
                return;
                }
              else {
                const v4106 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:213:41:application', stdlib.UInt_max, '0')];
                const v4107 = v4106[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:213:41:application', stdlib.UInt_max, '0')];
                ;
                ;
                null;
                return;
                }}
            else {
              const v4097 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:33:application', stdlib.UInt_max, '0')];
              const v4098 = v4097[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:33:application', stdlib.UInt_max, '0')];
              ;
              ;
              return;
              }}}}
      else {
        const v1210 = stdlib.ge(v1109, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:144:84:application', stdlib.UInt_max, '100000'));
        if (v1210) {
          const v1214 = stdlib.sub(v1109, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:144:84:application', stdlib.UInt_max, '100000'));
          ;
          const v1215 = true;
          const v1216 = await txn1.getOutput('Bidder_optIn', 'v1215', ctc7, v1215);
          if (v317) {
            stdlib.protect(ctc12, await interact.out(v1098, v1216), {
              at: './src/contracts/auction.rsh:139:31:application',
              fs: ['at ./src/contracts/auction.rsh:139:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:139:31:function exp)', 'at ./src/contracts/auction.rsh:147:55:application call to "notify" (defined at: ./src/contracts/auction.rsh:142:50:function exp)', 'at ./src/contracts/auction.rsh:142:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:142:50:function exp)'],
              msg: 'out',
              who: 'Bidder_optIn'
              });
            }
          else {
            }
          
          const v4110 = v771;
          const v4111 = v772;
          const v4112 = v773;
          const v4113 = v774;
          const v4114 = v775;
          const v4116 = v782;
          const v4117 = v1214;
          const v4118 = stdlib.le(v834, v769);
          const v4119 = v4118 ? v774 : false;
          if (v4119) {
            return;
            }
          else {
            const v4120 = undefined /* Remote */;
            const v4121 = await txn1.getOutput('internal', 'v4120', ctc13, v4120);
            const v4122 = v4121[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:170:37:application', stdlib.UInt_max, '0')];
            const v4123 = stdlib.add(v1214, v4122);
            const v4124 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4122);
            stdlib.assert(v4124, {
              at: './src/contracts/auction.rsh:170:37:application',
              fs: [],
              msg: 'remote bill check',
              who: 'Bidder_optIn'
              });
            null;
            const v4125 = stdlib.gt(v775, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:182:25:decimal', stdlib.UInt_max, '0'));
            if (v4125) {
              const v4126 = stdlib.safeAdd(v834, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
              const v4154 = v782;
              const v4155 = v4123;
              const v4156 = stdlib.le(v834, v4126);
              if (v4156) {
                return;
                }
              else {
                const v4158 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:213:41:application', stdlib.UInt_max, '0')];
                const v4159 = v4158[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:213:41:application', stdlib.UInt_max, '0')];
                ;
                ;
                null;
                return;
                }}
            else {
              const v4149 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:33:application', stdlib.UInt_max, '0')];
              const v4150 = v4149[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:33:application', stdlib.UInt_max, '0')];
              ;
              ;
              return;
              }}}
        else {
          const v1222 = true;
          const v1223 = await txn1.getOutput('Bidder_optIn', 'v1222', ctc7, v1222);
          if (v317) {
            stdlib.protect(ctc12, await interact.out(v1098, v1223), {
              at: './src/contracts/auction.rsh:139:31:application',
              fs: ['at ./src/contracts/auction.rsh:139:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:139:31:function exp)', 'at ./src/contracts/auction.rsh:147:55:application call to "notify" (defined at: ./src/contracts/auction.rsh:142:50:function exp)', 'at ./src/contracts/auction.rsh:142:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:142:50:function exp)'],
              msg: 'out',
              who: 'Bidder_optIn'
              });
            }
          else {
            }
          
          const v4162 = v771;
          const v4163 = v772;
          const v4164 = v773;
          const v4165 = v774;
          const v4166 = v775;
          const v4168 = v782;
          const v4169 = v1109;
          const v4170 = stdlib.le(v834, v769);
          const v4171 = v4170 ? v774 : false;
          if (v4171) {
            return;
            }
          else {
            const v4172 = undefined /* Remote */;
            const v4173 = await txn1.getOutput('internal', 'v4172', ctc13, v4172);
            const v4174 = v4173[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:170:37:application', stdlib.UInt_max, '0')];
            const v4175 = stdlib.add(v1109, v4174);
            const v4176 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4174);
            stdlib.assert(v4176, {
              at: './src/contracts/auction.rsh:170:37:application',
              fs: [],
              msg: 'remote bill check',
              who: 'Bidder_optIn'
              });
            null;
            const v4177 = stdlib.gt(v775, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:182:25:decimal', stdlib.UInt_max, '0'));
            if (v4177) {
              const v4178 = stdlib.safeAdd(v834, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
              const v4206 = v782;
              const v4207 = v4175;
              const v4208 = stdlib.le(v834, v4178);
              if (v4208) {
                return;
                }
              else {
                const v4210 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:213:41:application', stdlib.UInt_max, '0')];
                const v4211 = v4210[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:213:41:application', stdlib.UInt_max, '0')];
                ;
                ;
                null;
                return;
                }}
            else {
              const v4201 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:33:application', stdlib.UInt_max, '0')];
              const v4202 = v4201[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:33:application', stdlib.UInt_max, '0')];
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
    lct: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:71:16:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5, ctc7, ctc0],
    pay: [stdlib.checkedBigNumberify('./src/contracts/auction.rsh:71:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v702, v703, v704], secs: v706, time: v705, didSend: v44, from: v701 } = txn1;
      
      const v707 = v679[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:71:16:dot', stdlib.UInt_max, '0')];
      const v708 = stdlib.Array_set(v707, '0', stdlib.checkedBigNumberify('./src/contracts/auction.rsh:71:16:dot', stdlib.UInt_max, '0'));
      const v709 = stdlib.Array_set(v679, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:71:16:dot', stdlib.UInt_max, '0'), v708);
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
  const v707 = v679[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:71:16:dot', stdlib.UInt_max, '0')];
  const v708 = stdlib.Array_set(v707, '0', stdlib.checkedBigNumberify('./src/contracts/auction.rsh:71:16:dot', stdlib.UInt_max, '0'));
  const v709 = stdlib.Array_set(v679, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:71:16:dot', stdlib.UInt_max, '0'), v708);
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v701, v702, v703, v704, v709],
    evt_cnt: 0,
    funcNum: 1,
    lct: v705,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./src/contracts/auction.rsh:73:16:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:11:13:decimal', stdlib.UInt_max, '1'), v702]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v713, time: v712, didSend: v51, from: v711 } = txn2;
      
      ;
      const v714 = v709[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:73:16:dot', stdlib.UInt_max, '0')];
      const v715 = v714[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:73:16:dot', stdlib.UInt_max, '0')];
      const v716 = stdlib.add(v715, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:11:13:decimal', stdlib.UInt_max, '1'));
      const v718 = stdlib.Array_set(v714, '0', v716);
      const v719 = stdlib.Array_set(v709, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:73:16:dot', stdlib.UInt_max, '0'), v718);
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
            bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:85:48:application', stdlib.UInt_max, '0'),
            fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:85:48:application', stdlib.UInt_max, '0'),
            toks: []
            })
          })
        return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc1.defaultValue /* simReturnVal */];})();
      const v725 = await txn2.getOutput('internal', 'v724', ctc8, v724);
      const v727 = v725[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:85:48:application', stdlib.UInt_max, '0')];
      const v728 = v725[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:85:48:application', stdlib.UInt_max, '1')];
      const v737 = await (async () => {
        sim_r.txns.push({
          kind: 'remote',
          obj: v704,
          remote: ({
            accs: [],
            apps: [],
            bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:86:68:application', stdlib.UInt_max, '0'),
            fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:86:68:application', stdlib.UInt_max, '0'),
            toks: []
            })
          })
        return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc3.defaultValue /* simReturnVal */];})();
      const v738 = await txn2.getOutput('internal', 'v737', ctc9, v737);
      const v740 = v738[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:86:68:application', stdlib.UInt_max, '0')];
      const v741 = v738[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:86:68:application', stdlib.UInt_max, '1')];
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
            bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:101:39:application', stdlib.UInt_max, '0'),
            fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:101:39:application', stdlib.UInt_max, '0'),
            toks: []
            })
          })
        return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc10.defaultValue /* simReturnVal */];})();
      const v757 = await txn2.getOutput('internal', 'v756', ctc11, v756);
      const v759 = v757[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:101:39:application', stdlib.UInt_max, '0')];
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
      const v775 = stdlib.checkedBigNumberify('./src/contracts/auction.rsh:111:25:decimal', stdlib.UInt_max, '0');
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
              bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:170:37:application', stdlib.UInt_max, '0'),
              fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
              pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:170:37:application', stdlib.UInt_max, '0'),
              toks: []
              })
            })
          return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc10.defaultValue /* simReturnVal */];})();
        const v1236 = await txn3.getOutput('internal', 'v1235', ctc11, v1235);
        const v1238 = v1236[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:170:37:application', stdlib.UInt_max, '0')];
        const v1243 = stdlib.add(v783, v1238);
        null;
        const v1248 = stdlib.gt(v775, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:182:25:decimal', stdlib.UInt_max, '0'));
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
              const v1339 = v1259[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:213:41:application', stdlib.UInt_max, '0')];
              const v1340 = v1339[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:213:41:application', stdlib.UInt_max, '0')];
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
              const v1361 = v1259[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:223:41:application', stdlib.UInt_max, '0')];
              const v1362 = v1361[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:223:41:application', stdlib.UInt_max, '0')];
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
          const v1383 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:33:application', stdlib.UInt_max, '0')];
          const v1384 = v1383[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:33:application', stdlib.UInt_max, '0')];
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
  const v714 = v709[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:73:16:dot', stdlib.UInt_max, '0')];
  const v715 = v714[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:73:16:dot', stdlib.UInt_max, '0')];
  const v716 = stdlib.add(v715, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:11:13:decimal', stdlib.UInt_max, '1'));
  const v718 = stdlib.Array_set(v714, '0', v716);
  const v719 = stdlib.Array_set(v709, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:73:16:dot', stdlib.UInt_max, '0'), v718);
  ;
  const v720 = stdlib.addressEq(v701, v711);
  stdlib.assert(v720, {
    at: './src/contracts/auction.rsh:73:16:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Seller'
    });
  const v723 = [];
  const v724 = undefined /* Remote */;
  const v725 = await txn2.getOutput('internal', 'v724', ctc8, v724);
  const v727 = v725[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:85:48:application', stdlib.UInt_max, '0')];
  const v728 = v725[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:85:48:application', stdlib.UInt_max, '1')];
  const v733 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v727);
  stdlib.assert(v733, {
    at: './src/contracts/auction.rsh:85:48:application',
    fs: [],
    msg: 'remote bill check',
    who: 'Seller'
    });
  const v737 = undefined /* Remote */;
  const v738 = await txn2.getOutput('internal', 'v737', ctc9, v737);
  const v740 = v738[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:86:68:application', stdlib.UInt_max, '0')];
  const v741 = v738[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:86:68:application', stdlib.UInt_max, '1')];
  const v745 = stdlib.add(v727, v740);
  const v746 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v740);
  stdlib.assert(v746, {
    at: './src/contracts/auction.rsh:86:68:application',
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
  const v759 = v757[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:101:39:application', stdlib.UInt_max, '0')];
  const v764 = stdlib.add(v745, v759);
  const v765 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v759);
  stdlib.assert(v765, {
    at: './src/contracts/auction.rsh:101:39:application',
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
  let v775 = stdlib.checkedBigNumberify('./src/contracts/auction.rsh:111:25:decimal', stdlib.UInt_max, '0');
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
        const v973 = v967[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:125:30:spread', stdlib.UInt_max, '0')];
        const v974 = stdlib.gt(v973, v775);
        stdlib.assert(v974, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/auction.rsh:126:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/auction.rsh:125:49:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:125:49:function exp)', 'at ./src/contracts/auction.rsh:108:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:125:49:function exp)', 'at ./src/contracts/auction.rsh:108:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:108:31:function exp)'],
          msg: 'Your bid is too low, please try again',
          who: 'Seller'
          });
        const v978 = stdlib.add(v783, v973);
        ;
        if (v773) {
          const v1030 = undefined /* Remote */;
          const v1031 = await txn4.getOutput('internal', 'v1030', ctc11, v1030);
          const v1033 = v1031[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:132:91:application', stdlib.UInt_max, '0')];
          const v1038 = stdlib.add(v978, v1033);
          const v1039 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1033);
          stdlib.assert(v1039, {
            at: './src/contracts/auction.rsh:132:91:application',
            fs: ['at ./src/contracts/auction.rsh:129:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:129:50:function exp)'],
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
          const v1009 = v1007[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:132:91:application', stdlib.UInt_max, '0')];
          const v1014 = stdlib.add(v1002, v1009);
          const v1015 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1009);
          stdlib.assert(v1015, {
            at: './src/contracts/auction.rsh:132:91:application',
            fs: ['at ./src/contracts/auction.rsh:129:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:129:50:function exp)'],
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
        const v1184 = stdlib.ge(v1109, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:143:83:application', stdlib.UInt_max, '900000'));
        if (v1184) {
          const v1188 = stdlib.sub(v1109, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:143:83:application', stdlib.UInt_max, '900000'));
          ;
          const v1190 = stdlib.ge(v1188, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:144:84:application', stdlib.UInt_max, '100000'));
          if (v1190) {
            const v1194 = stdlib.sub(v1188, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:144:84:application', stdlib.UInt_max, '100000'));
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
          const v1210 = stdlib.ge(v1109, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:144:84:application', stdlib.UInt_max, '100000'));
          if (v1210) {
            const v1214 = stdlib.sub(v1109, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:144:84:application', stdlib.UInt_max, '100000'));
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
  const v1238 = v1236[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:170:37:application', stdlib.UInt_max, '0')];
  const v1243 = stdlib.add(v783, v1238);
  const v1244 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1238);
  stdlib.assert(v1244, {
    at: './src/contracts/auction.rsh:170:37:application',
    fs: [],
    msg: 'remote bill check',
    who: 'Seller'
    });
  null;
  const v1248 = stdlib.gt(v775, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:182:25:decimal', stdlib.UInt_max, '0'));
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
      const v1339 = v1259[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:213:41:application', stdlib.UInt_max, '0')];
      const v1340 = v1339[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:213:41:application', stdlib.UInt_max, '0')];
      ;
      ;
      null;
      return;
      }
    else {
      const v1361 = v1259[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:223:41:application', stdlib.UInt_max, '0')];
      const v1362 = v1361[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:223:41:application', stdlib.UInt_max, '0')];
      ;
      ;
      null;
      return;
      }}
  else {
    const v1383 = v782[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:33:application', stdlib.UInt_max, '0')];
    const v1384 = v1383[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:33:application', stdlib.UInt_max, '0')];
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
    pure: [],
    sigs: [`Auctioneer_acceptSale()byte`, `Auctioneer_rejectSale()byte`, `Auctioneer_stopAuction()(uint64,uint64,uint64)`, `Bidder_bid(uint64)(address,uint64)`, `Bidder_optIn()byte`]
    },
  GlobalNumByteSlice: 3,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `ByAPAAEGBAigjQYFIKD3NpaHyKoBs7bPiAjSuNG7DqCbvIEBAsCEPSYGAQEBAAAFYXBwSUQE4gx+EgTq9O6VIjUAMRhBCqsqZEkiWzUBSSEEWzUCgRBbNQg2GgAXSUEAdyI1BCM1BkkhCQxAAD5JIQoMQAAjSSELDEAADiELEkQqNf8pNP9QQgQ7IQoSRCo1/yg0/1BCBC0hCRJEKjX/gAECNP9QIQSvUEIASkkhDAxAABAhDBJENhoBNf8oNP9QQgAzgaCL6kwSRCo1/yk0/1AhBK9QQgAeNhoCFzUENhoDNhoBF0klDEAEgEkhBgxAA9IhBhJEIQQ0ARJENARJIhJMNAISEUQpZChkUEk1A0lKSkpKSkpKSVcAIDX/IQdbNf6BKFs1/UgqNfyBMFs1+1c4IDX6gVhbNfmBYFs1+FdoFDX3gXxbNfZXhBg19VecIDX0V7wBFzXzV70BFzXygb4BWzXxV8YRNfCB1wFbNe9JNQU17oAEAKxyzTTuULA07iJVSSMMQALmSSENDEABPSENEkQ07yEOCDXtIQ6ICXM07SEID0EAnjTtIQgJNeyxIrIBIQiyCCOyEDT6sgezNOwhBQ9BAEmxIrIBIQWyCCOyEDT/sgezgAkAAAAAAAAEqwGwKDUHNP80/jT9NPw0+zT6NPk0+DT3NPY09TT0NPM08jTxMgY08DTsIQUJQgYCgAkAAAAAAAAEsgGwKDUHNP80/jT9NPw0+zT6NPk0+DT3NPY09TT0NPM08jTxMgY08DTsQgXMNO0hBQ9BAEmxIrIBIQWyCCOyEDT/sgezgAkAAAAAAAAEvwGwKDUHNP80/jT9NPw0+zT6NPk0+DT3NPY09TT0NPM08jTxMgY08DTtIQUJQgV7gAkAAAAAAAAExgGwKDUHNP80/jT9NPw0+zT6NPk0+DT3NPY09TT0NPM08jTxMgY08DTtQgVFSDTuVwEINe007RdJNew08Q1ENO807Ag16zTsiAgoNPNBALYrNP0WUAM16TIKeDXoMgpgNOgJFjXnsSKyASSyEDT9shgnBLIaNPsWshoxAEmyHLIaszIKYDToCTTnFwkWtwA+VwQAUDXqgAgAAAAAAAAEBjTqULA06kk16SJbNegiNOgSRCcFNPsWUDTsFlAxAFA091CwgAgAAAAAAAAEETEANPEWUFCwMQA08RZQNQc0/zT+NP00/DT7NPo0+TT4NPc09jT1MQAiNPI07DIGNPA06zToCEIEbLEisgE08bIII7IQNPSyB7MrNP0WUAM16TIKeDXoMgpgNOgJFjXnsSKyASSyEDT9shgnBLIaNPsWshoxAEmyHLIaszIKYDToCTTnFwkWtwA+VwQAUDXqgAgAAAAAAAAD7jTqULA06kk16SJbNegiNOgSRCcFNPsWUDTsFlAxAFA091CwgAgAAAAAAAAD+TEANPEWUFCwMQA08RZQNQc0/zT+NP00/DT7NPo0+TT4NPc09jT1MQAiNPI07DIGNPA06zTxCTToCEIDo0iABLijSos0+xZQNPEWULA0+xYyBhZQNPEWUDXtgAgAAAAAAAADUjTtULA07TUHNP80/jT9NPw0+zT6NPk0+DT3NPY07TT0NPMiNPEyBjTwNO9CA05IJDQBEkQ0BEkiEkw0AhIRRClkKGRQSTUDSUpKSlcAIDX/IQdbNf5XKBQ1/Vc8IDX8gVxbNfuBZFs1+ldsETX5gX1bNfhJNQU194AErnvUBjT3ULA09yJVQAAmgAkAAAAAAAAFFgGwKDUHNP80/jT9NPw0+zT6IyIyBjT5NPhCBDmACQAAAAAAAAU0ALApNQc0/zT+NP00/DT7NPoiIjIGNPk0+EIEE0kjDEAB8SMSRLEisgEkshA0CLIYsyM0ARJENARJIhJMNAISEUQpZChkUEk1A0lKSVcAIDX/IQdbNf5XKJQ1/YG8AVs1/FfEETX7gASai5F0sDT7VwARNfojNP6IBWI0/zEAEkQqNfkrNPwWUAM19zIKeDX2MgpgNPYJFjX1sSKyASSyEDT8shiABG3tvYCyGrMyCmA09gk09RcJFrcAPlcEAFA1+IAIAAAAAAAAAtQ0+FCwNPhJNfciWzX2NPchBFs19SI09hJEKzT8FlADNfMyCng18jIKYDTyCRY18bEisgEkshA0/LIYgARsreRvshqzMgpgNPIJNPEXCRa3AD5XBABQNfSACAAAAAAAAALhNPRQsDT0STXzIls18iI08hJEMRg18TT9V4AUNfArNPwWUAM17jIKeDXtMgpgNO0JFjXssSKyASSyEDT8shiABLlwy6SyGjT1FjTxFlAyBhZQNP9QNPBQNP1XCFBQNP1XeAhQNP4WULIaszIKYDTtCTTsFwkWtwA+VwQAUDXvgAgAAAAAAAAC9DTvULA070k17iJbNe0iNO0SRIAEjw81BjT1FlA0/1CwNP80/jT8NPk09TTzVwggMgY08TTwMgY0/SJbCIEYrzT/IyMiMgY0+zT6SSJbIwgWXABcADT2NPIINO0IQgCwSIHAmgyIA6mxIrIBJLIQIrIYgAYHMQAyCRKyHoABB7Ifs7Q9NQgiNAESRDQESSISTDQCEhFESTUFSUkiWzX/VwiUNf6BnAFbNf2ABO0piOM0/xZQNP5QNP0WULCBEa9JNfxJVwARIQSvXABcADX7IQWIAz2xIrIBIrISJbIQMgqyFDT/shGzMQA0/xZQNP5QNP0WUDT7UClLAVcAf2coSwFXf1ZnSCM1ATIGNQJCAqg1/zX+Nf01/DX7Nfo1+TX4Nfc19jX1NfQ18zXyNfE18DXvNe40/TT3DjT7EEEAVzTuNO8WUDTwFlA08VA08hZQNPNQNPQWUDT1FlA09lA09xZQNPhQNPlQNPoWUQcIUChQNPwWUDT+UDT/FlApSwFXAH9nKEsBV39gZ0ghBDUBMgY1AkICIis08BZQAzXsMgp4NesyCmA06wkWNeqxIrIBJLIQNPCyGIAEovDaAbIaNPiyGrMyCmA06wk06hcJFrcAPlcEAFA17YAIAAAAAAAABNM07VCwNO1JNewiWzXrNP806wg16iI06xJEgAR4fnW+NPIWUDT8FlA07lA09RZQNPQWUDT2ULA0/CINQQAaNO407zT2NPk0/DT9gTIIIyM0/TT+NOpCAEOxIrIBNP5XABEiW7ISJbIQNO6yFDTvshGzsSKyATTqsggjshA0+bIHs7EisgEishIlshAyCbIVMgqyFDTvshGzQgEQNf81/jX9Nfw1+zX6Nfk1+DX3NfY19TT9NPoONPwQQQA0NPU09hZQNPdQNPhQNPkWUDT6FlA0/lA0/xZQKUsBVwB/ZyhLAVd/BmdIJDUBMgY1AkIA5zT7QQBbsSKyATT+VwARIluyEiWyEDT4shQ09rIRs7EisgE0/7III7IQNPWyB7OABO6mmcQ091A0+RZQNPVQNPhQNPYWULCxIrIBIrISJbIQMgmyFTIKshQ09rIRs0IAW7EisgE0/lcAESJbshIlshA09bIUNPayEbOxIrIBNP+yCCOyEDT4sgezgASlT5rNNPdQNPkWUDT1UDT4UDT2FlCwsSKyASKyEiWyEDIJshUyCrIUNPayEbNCAAAxGSEGEkSxIrIBJLIQNAiyGCEGshmzsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFjQIFlBQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkSBAzE1EkQiMTYSRCIxNxJEIjUBIjUCIjUIQv+nNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBAlEkQ4EU8CEkQ4EhJEiQ==`,
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
  warnings: [`Step 1 calls a remote object at /app/src/contracts/auction.rsh:101:39:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 1 calls a remote object at /app/src/contracts/auction.rsh:85:48:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 1 calls a remote object at /app/src/contracts/auction.rsh:86:68:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 2 calls a remote object at /app/src/contracts/auction.rsh:170:37:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 5 calls a remote object at /app/src/contracts/auction.rsh:132:91:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`]
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"components":[{"internalType":"uint256","name":"_deadline","type":"uint256"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes16","name":"elem2","type":"bytes16"}],"internalType":"struct T8","name":"_description","type":"tuple"},{"internalType":"address payable","name":"_owner","type":"address"},{"internalType":"uint256","name":"_price","type":"uint256"},{"internalType":"bytes20","name":"_title","type":"bytes20"}],"internalType":"struct T9","name":"elem2","type":"tuple"},{"internalType":"address payable","name":"elem3","type":"address"}],"internalType":"struct T10","name":"v4236","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"components":[{"internalType":"uint256","name":"_deadline","type":"uint256"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes16","name":"elem2","type":"bytes16"}],"internalType":"struct T8","name":"_description","type":"tuple"},{"internalType":"address payable","name":"_owner","type":"address"},{"internalType":"uint256","name":"_price","type":"uint256"},{"internalType":"bytes20","name":"_title","type":"bytes20"}],"internalType":"struct T9","name":"elem2","type":"tuple"},{"internalType":"address payable","name":"elem3","type":"address"}],"indexed":false,"internalType":"struct T10","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T5","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_Auctioneer_acceptSale0_444","type":"bool"},{"internalType":"bool","name":"_Auctioneer_rejectSale0_444","type":"bool"}],"internalType":"struct T3","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e4","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T6","name":"which","type":"uint8"},{"internalType":"bool","name":"_Auctioneer_stopAuction0_123","type":"bool"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T5","name":"_Bidder_bid0_123","type":"tuple"},{"internalType":"bool","name":"_Bidder_optIn0_123","type":"bool"}],"internalType":"struct T6","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T7","name":"_a","type":"tuple"}],"name":"_reach_e5","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"indexed":false,"internalType":"struct T17","name":"v0","type":"tuple"}],"name":"_reach_oe_v1006","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"indexed":false,"internalType":"struct T1","name":"v0","type":"tuple"}],"name":"_reach_oe_v1017","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"indexed":false,"internalType":"struct T17","name":"v0","type":"tuple"}],"name":"_reach_oe_v1030","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"indexed":false,"internalType":"struct T1","name":"v0","type":"tuple"}],"name":"_reach_oe_v1041","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1195","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1202","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1215","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1222","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"indexed":false,"internalType":"struct T17","name":"v0","type":"tuple"}],"name":"_reach_oe_v1235","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1302","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1332","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"indexed":false,"internalType":"struct T14","name":"v0","type":"tuple"}],"name":"_reach_oe_v724","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"}],"indexed":false,"internalType":"struct T15","name":"v0","type":"tuple"}],"name":"_reach_oe_v737","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"indexed":false,"internalType":"struct T17","name":"v0","type":"tuple"}],"name":"_reach_oe_v756","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"blockEnded","type":"uint256"},{"internalType":"uint256","name":"lastBid","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v0","type":"tuple"}],"name":"_reach_oe_v850","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes20","name":"v0","type":"bytes20"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"},{"indexed":false,"internalType":"address payable","name":"v2","type":"address"},{"indexed":false,"internalType":"address payable","name":"v3","type":"address"},{"indexed":false,"internalType":"address payable","name":"v4","type":"address"}],"name":"accepted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"},{"indexed":false,"internalType":"address payable","name":"v2","type":"address"},{"indexed":false,"internalType":"bytes20","name":"v3","type":"bytes20"}],"name":"bidSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"},{"indexed":false,"internalType":"address payable","name":"v1","type":"address"}],"name":"created","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"},{"indexed":false,"internalType":"address payable","name":"v2","type":"address"},{"indexed":false,"internalType":"address payable","name":"v3","type":"address"},{"indexed":false,"internalType":"uint256","name":"v4","type":"uint256"},{"indexed":false,"internalType":"bytes20","name":"v5","type":"bytes20"}],"name":"down","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"}],"name":"endSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes20","name":"v0","type":"bytes20"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"},{"indexed":false,"internalType":"address payable","name":"v2","type":"address"},{"indexed":false,"internalType":"address payable","name":"v3","type":"address"},{"indexed":false,"internalType":"address payable","name":"v4","type":"address"}],"name":"rejected","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"Auctioneer_acceptSale","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Auctioneer_rejectSale","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Auctioneer_stopAuction","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"blockEnded","type":"uint256"},{"internalType":"uint256","name":"lastBid","type":"uint256"}],"internalType":"struct T0","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v4226","type":"uint256"}],"name":"Bidder_bid","outputs":[{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T1","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Bidder_optIn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T5","name":"v4238","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_Auctioneer_acceptSale0_444","type":"bool"},{"internalType":"bool","name":"_Auctioneer_rejectSale0_444","type":"bool"}],"internalType":"struct T3","name":"elem1","type":"tuple"}],"internalType":"struct T4","name":"v4253","type":"tuple"}],"name":"_reachp_4","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T6","name":"which","type":"uint8"},{"internalType":"bool","name":"_Auctioneer_stopAuction0_123","type":"bool"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T5","name":"_Bidder_bid0_123","type":"tuple"},{"internalType":"bool","name":"_Bidder_optIn0_123","type":"bool"}],"internalType":"struct T6","name":"elem1","type":"tuple"}],"internalType":"struct T7","name":"v4265","type":"tuple"}],"name":"_reachp_5","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x601f196001600160401b036080620044fd38819003601f8101851683018481118482101762000555578392829160405283398101036101408112620006405760405191608083018381108582111762000555576040528051835262000067602082016200067d565b602084015260e0603f1983011262000640576060604051926200008a8462000645565b60408301518452605f1901126200064057604051620000a98162000661565b606082015181526080820151602082015260a08201516001600160801b031981168103620006405760408201526020830152620000e960c082016200067d565b604083015260e08101516060830152610100810151906001600160601b0319821682036200064057826101209260806200012b9501526040850152016200067d565b60608201524360035560405160c081018181108482111762000555576040526000815260006020820152600060408201526200016662000692565b606082015260405190604082019082821085831117620005555760009260a0926040528381528360208201526080820152015260405190620001a88262000661565b620001b262000692565b825260208201620001c2620006c2565b8152620001ce620006c2565b604084015260ff6004541662000627577faf21c54356e0cb238c07cd6d2a0ba48aa0a87eb5fccc9285719045c4cfe7472b6101606040513381528451602082015260018060a01b036020860151166040820152620002356040860151606083019062000709565b60608501516001600160a01b0316610140820152a1815180159081156200061a575b50156200060157600083515260006020845101526000604084510152825181515251805160406020820151910151151560405191620002968362000661565b6000835260208301526040820152620002ae620006c2565b9160005b60018110620005b15750508152604083015234620005985760405190620002d98262000645565b60008252600060208301526040820192604051620002f78162000645565b600081526200030562000692565b60208201526000604082015260006060820152600060808201528452604060608401916000835260808501936200033b620006c2565b855233865260018060a01b036020820151166020870152828101518752606060018060a01b0391015116835201518252620003a16001948560005543865560405194336020870152602060018060a01b0391015116604086015251606085019062000709565b516001600160a01b03166101408301525160008361016084015b8183106200056b57505050506101a081526101c08101818110848211176200055557604052805192831162000555576002548281811c911680156200054a575b60208210146200053457601f8111620004c7575b50602090601f84116001146200045e578394509083929160009462000452575b50501b916000199060031b1c1916176002555b604051613d649081620007998239f35b0151925038806200042f565b919383169160026000528360206000209360005b87828210620004ad5750501062000493575b505050811b0160025562000442565b015160001960f88460031b161c1916905538808062000484565b848601518755909501946020948501948793500162000472565b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f850160051c8101916020861062000529575b601f0160051c019083905b8281106200051c5750506200040f565b600081550183906200050c565b909150819062000501565b634e487b7160e01b600052602260045260246000fd5b90607f1690620003fb565b634e487b7160e01b600052604160045260246000fd5b606060209160408651805183528481015185840152015115156040820152019301910190918490620003bb565b60405163100960cb60e01b815260096004820152602490fd5b620005bd818362000770565b51620005ca828662000770565b52620005d7818562000770565b506000198114620005eb57600101620002b2565b634e487b7160e01b600052601160045260246000fd5b60405163100960cb60e01b815260086004820152602490fd5b9050600154143862000257565b60405163100960cb60e01b815260076004820152602490fd5b600080fd5b60a081019081106001600160401b038211176200055557604052565b606081019081106001600160401b038211176200055557604052565b51906001600160a01b03821682036200064057565b60405190606082016001600160401b03811183821017620005555760405260006040838281528260208201520152565b6040519060208083016001600160401b0381118482101762000555576040528260005b828110620006f257505050565b8290620006fe62000692565b8184015201620006e5565b8051825260208082015180518285015290810151604080850191909152908101516001600160801b031916606080850191909152908201516001600160a01b03166080808501919091529082015160a084015201516001600160601b03191660c090910152565b906001811015620007825760051b0190565b634e487b7160e01b600052603260045260246000fdfe60806040526004361015610018575b361561001657005b005b60003560e01c80631e93b0f1146100f45780632d2ae6eb146100eb57806334d3e29e146100e25780634a96cc0b146100d9578063573b8510146100d05780636f49e231146100c757806383230757146100be578063980e632f146100b5578063ab53f2c6146100ac578063b6279224146100a35763d2526fd90361000e5761009e610c23565b61000e565b5061009e610ba7565b5061009e610af9565b5061009e610a6c565b5061009e610a4d565b5061009e610a00565b5061009e610295565b5061009e61023b565b5061009e6101ac565b5061009e610143565b5034610113576000366003190112610113576020600354604051908152f35b600080fd5b6040809180518452602081015160208501520151910152565b6060810192916101419190610118565b565b50600036600319011261011357610158610ec4565b50606080610164610f1a565b61019b81610170611007565b6020810190600082515251151560208251015261018b611007565b9060008252516020820152611c6c565b01516101aa6040518092610118565bf35b506080366003190112610113576101c1610f1a565b604051906101ce82610cc0565b6004358252606036602319011261011357604051916101ec83610ce8565b6024359260028410156101135761022b93815260443561020b816110b6565b602082015260643561021c816110b6565b604082015260208201526112b3565b60405160008152602090f35b0390f35b50600036600319011261011357602060a0610254610f1a565b61028981610260611007565b85810190600282515251151560608251015261027a611007565b90600082525186820152611c6c565b01511515604051908152f35b506020366003190112610113576102aa610f1a565b5061022b6102b736613953565b6102bf6139d8565b6102da6102d56102d160045460ff1690565b1590565b61152c565b60408051338152835160208201527fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee815969190a161031a60016000541461154c565b610349610337610328610dae565b60208082518301019101613a96565b925180159081156109f4575b5061156c565b610353341561158c565b61037161036c6103666020850151610b6e565b33613c38565b6115ac565b61038d3360018060a01b036103868551610b6e565b16146115cc565b6103a461039d6020840151610b6e565b3090612c82565b610160820152476101408201526103c3600160ff196004541617600455565b7f37e25dadaab02074283de1c0238dbfd7d190671e8bc6adb07dd01aab30786a7b6104c4600080604051632cfbfba760e01b60208201526004815261040781610cc0565b61041c6104176060890151610b6e565b610b6e565b82602083519301915af1610438610431611c07565b8092612ac3565b5061044860ff1960045416600455565b6104766104613061045c6020890151610b6e565b612c82565b610160860151808203610180880152146115ec565b61049a47610140860151900391602086019283515260208082518301019101612c73565b60208251015251806040850152604051918291829190916020806040830194805184520151910152565b0390a16104d66040820151511561160c565b6104e73061045c6020850151610b6e565b6101c0820152476101a0820152610506600160ff196004541617600455565b7f178760804b1b57c8eb91fd27698daea1235a9d4ca3d13de9a84c8191e57574ed61060c60008060405160208101637541dda360e11b81526004825261054b82610cc0565b8261055c61041760608b0151610b6e565b9251925af161057361056c611c07565b8092612af3565b5061058360ff1960045416600455565b6105ac6105973061045c6020890151610b6e565b6101c08601518082036101e08801521461162c565b6105dd6105d3476101a0870151900392606087019384515260208082518301019101613b8b565b6020835101611294565b516080840181905260408051825181526020928301516001600160a01b03169281019290925290918291820190565b0390a161061e6080820151511561164c565b61062b3060a08301611294565b60206040820151015160c08201515261065761064a60a0830151610b6e565b602060c084015101611294565b43604060c0830151015261067b61066e8351610b6e565b606060c084015101611294565b60408201516080015161069f906001600160601b031916608060c0840151016112a3565b60206040830151015160a060c0830151015260606040830151015160c08083015101526106df6106d26020840151610b6e565b60e060c084015101611294565b6106f03061045c6020850151610b6e565b6102208201527f9bb4687c8a4b59f7f3a7fcc5949200288693d6646cc8d7614d4a0378755e6c946107ef476102008401908152610735600160ff196004541617600455565b61079560008060c08701516040519061077182610763602082019363063eabe760e11b855260248301613b9f565b03601f198101845283610d8b565b8261078261041760608d0151610b6e565b9251925af161078f611c07565b90612b23565b506107a560ff1960045416600455565b6107ce6107b93061045c6020890151610b6e565b6102208601518082036102408801521461166c565b479051900360e0840190815152518061010085015260405191829182611c54565b0390a1610802610100820151511561168c565b7fb758eeaad548e48420d76d670d08a2b8b63cf903c04cf64fbe368cbb7830eb676020604083015101516108368451610b6e565b9061084660405192839283611bee565b0390a16000610120820151526000602061012083015101526000604061012083015101526109ce6080610877611b54565b9361088b6108858251610b6e565b86611294565b6108a461089b6020830151610b6e565b60208701611294565b6108bd6108b46060830151610b6e565b60408701611294565b6108d36108ca8551151590565b15156060870152565b6040840151602090810151868401528285015101516108ff906001600160a01b03165b60a08701611294565b4360c086015261091e61091560a0860151610b6e565b60e08701611294565b604081015182015161093e906001600160601b03191661010087016112a3565b61094d60408201515143613579565b61012086015261012084015161014086015261097661096c8251610b6e565b6101608701611294565b600161018086015260016101a086015260006101c0860152436101e086015201518051906109c9600183510192604060208201519101511515906109b8610e57565b948552602085015215156040840152565b613cba565b6102008301526101006040820151516080830151510191015151016102208201526130f5565b90506001541438610343565b5060003660031901126101135760206040610a19610f1a565b61028981610a25610f59565b8581019060018251525115158582510152610a3e610f59565b906000825251868201526112b3565b5034610113576000366003190112610113576020600154604051908152f35b5060a036600319011261011357610a81610f1a565b60405190610a8e82610cc0565b600435825260803660231901126101135760405191610aac83610d03565b6024359260038410156101135761022b938152604435610acb816110b6565b6020820152610ad936613973565b6040820152608435610aea816110b6565b60608201526020820152611c6c565b503461011357600080600319360112610b6b578054610b16610dae565b906040519283918252602090604082840152835191826040850152815b838110610b5457505060608094508284010152601f80199101168101030190f35b808601820151878201606001528694508101610b33565b80fd5b6001600160a01b031690565b6001600160a01b03169052565b81516001600160a01b031681526020918201519181019190915260400190565b50602036600319011261011357610bbc610f01565b506102376080610bca610f1a565b610c1581604051610bda81610cc0565b604051610be681610d1e565b6000815281526020810190610bf9610fb6565b825260043581515260018251525160408251015261018b611007565b015160405191829182610b87565b50600036600319011261011357602080610c3b610f1a565b61028981610c47610f59565b8481019060008251525115158582510152610c60610f59565b906000825251858201526112b3565b90600182811c92168015610c9f575b6020831014610c8957565b634e487b7160e01b600052602260045260246000fd5b91607f1691610c7e565b50634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b03821117610cdb57604052565b610ce3610ca9565b604052565b606081019081106001600160401b03821117610cdb57604052565b608081019081106001600160401b03821117610cdb57604052565b602081019081106001600160401b03821117610cdb57604052565b60c081019081106001600160401b03821117610cdb57604052565b61010081019081106001600160401b03821117610cdb57604052565b60a081019081106001600160401b03821117610cdb57604052565b601f909101601f19168101906001600160401b03821190821017610cdb57604052565b6040519060008260025491610dc283610c6f565b808352600193808516908115610e365750600114610de8575b5061014192500383610d8b565b60026000908152600080516020613d1883398151915294602093509091905b818310610e1e575050610141935082010138610ddb565b85548884018501529485019487945091830191610e07565b905061014194506020925060ff191682840152151560051b82010138610ddb565b6040519061014182610ce8565b6040519061022082016001600160401b03811183821017610cdb57604052565b6040519061024082016001600160401b03811183821017610cdb57604052565b6040519061026082016001600160401b03811183821017610cdb57604052565b60405190606082016001600160401b03811183821017610ef4575b60405260006040838281528260208201520152565b610efc610ca9565b610edf565b60405190610f0e82610cc0565b60006020838281520152565b60405190610f2782610d39565b600060a083828152826020820152826040820152610f43610ec4565b6060820152610f50610f01565b60808201520152565b60405190610f6682610cc0565b81600081526020610f75610ec4565b910152565b50634e487b7160e01b600052602160045260246000fd5b60021115610f9b57565b610141610f7a565b60405190610fb082610d1e565b60008252565b60405190608082016001600160401b03811183821017610ffa575b6040526000606083828152826020820152604051610fee81610d1e565b83815260408201520152565b611002610ca9565b610fd1565b6040519061101482610cc0565b81600081526020610f75610fb6565b60031115610f9b57565b9092916040602060809260a085019660018060a01b03168552805182860152015180516002811015611073575b8285015260208101511515606085015201511515910152565b61107b610f7a565b61105a565b51906001600160a01b038216820361011357565b6001600160601b03191690565b51906001600160601b03198216820361011357565b8015150361011357565b5190610141826110b6565b9080601f83011215610113576040918251926110e684610d1e565b836060938484019381851161011357915b8483106111075750505050505090565b8583830312610113578351869161111d82610ce8565b84518252602091828601518382015286860151611139816110b6565b878201528152019201916110f7565b6101408183031261011357610120906111c26040519361116785610d54565b61117083611080565b855261117e60208401611080565b602086015261118f604084016110a1565b60408601526111a060608401611080565b60608601526080830151608086015260a083015160a086015260c083016110cb565b60c0840152015160e082015290565b5160028110156111de5790565b6111e6610f7a565b90565b604051906111f682610d1e565b8160005b60208110611206575050565b602090611211610ec4565b81840152016111fa565b6040519061016082016001600160401b03811183821017611287575b604052816101406000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e08201528261010082015261127d6111e9565b6101208201520152565b61128f610ca9565b611237565b6001600160a01b039091169052565b6001600160601b03199091169052565b9061132d906112cf6112ca6102d160045460ff1690565b6116ac565b6040907f109eb76f82f8872ff024177afedebf0c35323f0a478a1f78956f6ddd62aa157682518061130187338361102d565b0390a16113126006600054146116cc565b61131a610dae565b6020938185808094518301019101611148565b9461134381518015908115611520575b506116ec565b0161134e81516111d1565b61135781610f91565b6114535750926113f460e0926113ad8561014197611375341561172c565b8351600181527f9a3fcf982b6d6d32d21d497377405ce2b7450771cd527d0cb91c7bad8d959ddf9080602081015b0390a10160019052565b6113e06113b861121b565b956113cc6113c68651610b6e565b88611294565b6113d881860151610b6e565b908701611294565b6113ec81840151611094565b9085016112a3565b61140d6114046060830151610b6e565b60608501611294565b6080810151608084015260a081015160a084015261142e60c0840160019052565b6000828401524361010084015260c081015161012084015201516101408201526136e2565b611462600191959295516111d1565b61146b81610f91565b14611477575b50505050565b6114c782600060e0946115179761148e341561170c565b8151600081527f193e01e8b4d5e54c5fa9b167bc086486a0f5eec2c611b31ad1302c7f755f0f0390602090a101526113e06113b861121b565b6114d76114046060830151610b6e565b6080810151608084015260a081015160a0840152600060c08401526000828401524361010084015260c081015161012084015201516101408201526136e2565b38808080611471565b9050600154143861133d565b1561153357565b60405163100960cb60e01b8152600a6004820152602490fd5b1561155357565b60405163100960cb60e01b8152600b6004820152602490fd5b1561157357565b60405163100960cb60e01b8152600c6004820152602490fd5b1561159357565b60405163100960cb60e01b8152600d6004820152602490fd5b156115b357565b60405163100960cb60e01b8152600e6004820152602490fd5b156115d357565b60405163100960cb60e01b8152600f6004820152602490fd5b156115f357565b60405163100960cb60e01b815260106004820152602490fd5b1561161357565b60405163100960cb60e01b815260126004820152602490fd5b1561163357565b60405163100960cb60e01b815260136004820152602490fd5b1561165357565b60405163100960cb60e01b815260156004820152602490fd5b1561167357565b60405163100960cb60e01b815260166004820152602490fd5b1561169357565b60405163100960cb60e01b815260186004820152602490fd5b156116b357565b60405163100960cb60e01b815260196004820152602490fd5b156116d357565b60405163100960cb60e01b8152601a6004820152602490fd5b156116f357565b60405163100960cb60e01b8152601b6004820152602490fd5b1561171357565b60405163100960cb60e01b8152601d6004820152602490fd5b1561173357565b60405163100960cb60e01b8152601c6004820152602490fd5b1561175357565b60405163100960cb60e01b8152601e6004820152602490fd5b1561177357565b60405163100960cb60e01b8152601f6004820152602490fd5b1561179357565b60405163100960cb60e01b815260206004820152602490fd5b156117b357565b60405163100960cb60e01b8152602a6004820152602490fd5b156117d357565b60405163100960cb60e01b815260226004820152602490fd5b156117f357565b60405163100960cb60e01b815260236004820152602490fd5b1561181357565b60405163100960cb60e01b815260276004820152602490fd5b1561183357565b60405163100960cb60e01b815260296004820152602490fd5b1561185357565b602460405163100960cb60e01b8152816004820152fd5b1561187157565b60405163100960cb60e01b815260266004820152602490fd5b1561189157565b60405163100960cb60e01b815260216004820152602490fd5b156118b157565b60405163100960cb60e01b8152602b6004820152602490fd5b156118d157565b60405163100960cb60e01b8152602d6004820152602490fd5b6118f2610e64565b906118fb610ec4565b8252611905610fa3565b6020830152600080604084015261191a610f01565b6060840152611927610f01565b6080840152611934610f01565b60a0840152611941610f01565b60c084015261194e610f01565b60e084015261195b610f01565b61010084015280610120840152806101408401528061016084015280610180840152806101a0840152806101c0840152806101e0840152610200830152565b9092916060602060a09260c0850196600180861b031685528051828601520151805160038110156119ea575b60408501526020810151151582850152604081015151608085015201511515910152565b6119f2610f7a565b6119c6565b919082606091031261011357604051611a0f81610ce8565b604080829480518452602081015160208501520151910152565b906102a08282031261011357610280611a40610e64565b92611a4a81611080565b8452611a5860208201611080565b6020850152611a6960408201611080565b6040850152611a7a606082016110c0565b606085015260808101516080850152611a9560a08201611080565b60a085015260c081015160c0850152611ab060e08201611080565b60e0850152610100611ac38183016110a1565b908501526101208082015190850152610140611ae1848284016119f7565b908501526101a0611af3818301611080565b610160860152611b3a6101c094611b0b8685016110c0565b6101808801526101e092611b208486016110c0565b9088015261020095868501519088015261022084016110cb565b9085015201519082015290565b5160038110156111de5790565b611b5c610e84565b9060008083528060208401528060408401528060608401528060808401528060a08401528060c08401528060e08401528061010084015280610120840152611ba2610ec4565b6101408401528061016084015280610180840152806101a0840152806101c0840152806101e0840152611bd36111e9565b610200840152610220830152565b506040513d6000823e3d90fd5b9081526001600160a01b03909116602082015260400190565b3d15611c4f573d906001600160401b038211611c42575b60405191611c36601f8201601f191660200184610d8b565b82523d6000602084013e565b611c4a610ca9565b611c1e565b606090565b91909160208060408301948051845201511515910152565b611c746118ea565b90611c8c611c876102d160045460ff1690565b61174c565b7fc08304f8842fdf9fe5c32b7c33d0b2bb36997def29e0c6d0fa626741dcab601060405180611cbc84338361199a565b0390a1611ccd60086000541461176c565b6020611ce8611cda610dae565b828082518301019101611a29565b91611cfe81518015908115612ab7575b5061178c565b01611d098151611b47565b611d1281611023565b611eed575061014192611d25341561188a565b60808201928351906101c0927f772252bb3a260bb19eae21a8a9243292763a37c5bcfc38c9f961eb102482f43484860193845190611d756040519283928360209093929193604081019481520152565b0390a185518251524360208351015282516040835101527f180fdae243c5c64ffc1df0ddb1cd8197b0dd0568e7da94515314735a659889e1611dbe835160405191829182610131565b0390a160608251910152611dd0611b54565b94611de4611dde8651610b6e565b87611294565b611dfd611df46020870151610b6e565b60208801611294565b611e16611e0d6040870151610b6e565b60408801611294565b611e2f611e266060870151151590565b15156060880152565b516080860152611e456108f660a0860151610b6e565b60c084015160c0860152611e5f61091560e0860151610b6e565b611e79610100611e7181870151611094565b9087016112a3565b610120808501519086015251610140850152611ea5610160611e9d81860151610b6e565b908601611294565b611ebf610180611eb781860151151590565b151590860152565b60006101a085015251908301526101e0438184015281015190610200918284015201516102208201526130f5565b6001611efc8294939451611b47565b611f0581611023565b03612584576040611f2691510151806020840152516101c0840151106117cc565b611f4561020083015160208301519081510160408401525134146117ec565b6101808201511561226d57610141927f3d044ba7063717d67e0d87fe0d4039e754ffb4da56fe38ec15b68118e61494ab612062611f8861039d6020870151610b6e565b610180850190815261204247916101608701928352611faf600160ff196004541617600455565b6120106000808a608081015182611ffd6104176040805195611ff687611fe860208201986311b693e360e11b8a52339060248401611bee565b03601f198101895288610d8b565b0151610b6e565b9251925af161200a611c07565b90612b83565b5061202060ff1960045416600455565b6120313061045c60208b0151610b6e565b90518082036101a08901521461184c565b479051900360c0850190815152518060e086015260405191829182611c54565b0390a161207460e0830151511561186a565b600080516020613d3883398151915260808401516020840151516120d061209f610100880151611094565b60408051948552602085019390935233928401929092526001600160601b0319909116606083015281906080820190565b0390a1608061010083016120e5338251611294565b6101c08501516020825101527f98a32cc97347160f667ac80c598d5e35201f18aebdda2dfb0fcf3435a0b11ed3612123825160405191829182610b87565b0390a151910152612132611b54565b916121466121408251610b6e565b84611294565b61215f6121566020830151610b6e565b60208501611294565b61217861216f6040830151610b6e565b60408501611294565b6121916121886060830151151590565b15156060850152565b608081015160808401526121b46121ab60a0830151610b6e565b60a08501611294565b60c081015160c08401526121d76121ce60e0830151610b6e565b60e08501611294565b6121f26121e8610100830151611094565b61010085016112a3565b61012080820151908401526101408082015190840152612216336101608501611294565b600061018084015261223961222f6101a0830151151590565b15156101a0850152565b6020820151516101c08401526101e0904382850152015161020083015260e0604082015191015151016102208201526130f5565b610141926000808080612287610417610160890151610b6e565b6101c08801519082821561257b575bf11561256e575b7f6414845e2cb4fa724a4bb9e2be1730379da3fd3e492502b2ec255faea70dd41d6123966122d161039d6020870151610b6e565b6101e0850190815261237647916101c087019283526122f8600160ff196004541617600455565b6123446000808a6080810151826123316104176040805195611ff687611fe860208201986311b693e360e11b8a52339060248401611bee565b9251925af161233e611c07565b90612b53565b5061235460ff1960045416600455565b6123653061045c60208b0151610b6e565b90518082036102008901521461180c565b479051900360608501908151525180608086015260405191829182611c54565b0390a16123a86080830151511561182c565b600080516020613d3883398151915260808401516020840151516123d361209f610100880151611094565b0390a1608060a083016123e7338251611294565b6101c08501516020825101527f9cb08e63905b9796748c6de3a2d3150f0ae4b1eff4e7295d4bc76a087a8183e6612425825160405191829182610b87565b0390a1519101526080612436611b54565b9261244a6124448251610b6e565b85611294565b61246361245a6020830151610b6e565b60208601611294565b61247c6124736040830151610b6e565b60408601611294565b61249561248c6060830151151590565b15156060860152565b81810151828501526124b66124ad60a0830151610b6e565b60a08601611294565b60c081015160c08501526124d96124d060e0830151610b6e565b60e08601611294565b6124f46124ea610100830151611094565b61010086016112a3565b61012080820151908501526101408082015190850152612518336101608601611294565b60006101808501526125326101a0611eb781840151151590565b6020830151516101c0850152436101e08501526101e08101516102008501526101c06040840151910151900391015151016102208201526130f5565b612576611be1565b61229d565b506108fc612296565b61259360029193929351611b47565b61259c81611023565b146125a657505050565b620f42409061020090828282015101936125ca6101209485830196875234146117ac565b8451620dbba095908681106128a35750620dbb9f1990510193610140809201948552600080808060a08701996126036104178c51610b6e565b82f115612896575b8451620186a09081116127b25760a061014198600080808061266f966126346104178c51610b6e565b82f1156127a5575b604051600181527f4c641ffd9e5bc0e9ae3cd2532d6905a65ba9128ff91febf13fb2ab9ce67a203e9080602081016113a3565b6126f56126ec61267d611b54565b9761269161268b8751610b6e565b8a611294565b6126aa6126a16020880151610b6e565b60208b01611294565b6126c36126ba6040880151610b6e565b60408b01611294565b6126dc6126d36060880151151590565b151560608b0152565b608086015160808a015251610b6e565b60a08801611294565b60c083015160c087015261271861270f60e0850151610b6e565b60e08801611294565b61273261010061272a81860151611094565b9088016112a3565b80830151908601528082015190850152612754610160611e9d81840151610b6e565b612766610180611eb781840151151590565b6127786101a0611eb781840151151590565b6101c080820151908501526101e09043828601520151908301526201869f199051016102208201526130f5565b6127ad611be1565b61263c565b506127f060a0610141987fa076ccd6f4d4afacdd75e994f763766477ff0ec01af31be3caeee7ea5183539c604051806113a381906001602083019252565b6127fe6126ec61267d611b54565b60c083015160c087015261281861270f60e0850151610b6e565b61282a61010061272a81860151611094565b8083015190860152808201519085015261284c610160611e9d81840151610b6e565b61285e610180611eb781840151151590565b6128706101a0611eb781840151151590565b6101c080820151908501526101e0904382860152015190830152516102208201526130f5565b61289e611be1565b61260b565b94955093620186a0915081116129c85760a061014196600080808061290a966128cf6104178a51610b6e565b82f1156129bb575b604051600181527fa85ce6c9c4d5b00c6ef4162e483a5f5b4734f2c5fe254051f0aa1ddc266ec8509080602081016113a3565b612912611b54565b936129206108858351610b6e565b61293061089b6020840151610b6e565b6129406108b46040840151610b6e565b6129506108ca6060840151151590565b6080820151608086015261296a6108f660a0840151610b6e565b60c082015160c086015261298461091560e0840151610b6e565b612996610100611e7181850151611094565b80820151908501526101408082015190850152612754610160611e9d81840151610b6e565b6129c3611be1565b6128d7565b50612a0660a0610141967f5a89e46585295308eb489e3285fd79d6cbfdbb275c28e9e8e50a607b2395a75d604051806113a381906001602083019252565b612a0e611b54565b93612a1c6108858351610b6e565b612a2c61089b6020840151610b6e565b612a3c6108b46040840151610b6e565b612a4c6108ca6060840151151590565b60808201516080860152612a666108f660a0840151610b6e565b60c082015160c0860152612a8061091560e0840151610b6e565b612a92610100611e7181850151611094565b8082015190850152610140808201519085015261284c610160611e9d81840151610b6e565b90506001541438611cf8565b15612acb5790565b805115612ada57805190602001fd5b60405163100960cb60e01b815260116004820152602490fd5b15612afb5790565b805115612b0a57805190602001fd5b60405163100960cb60e01b815260146004820152602490fd5b15612b2b5790565b805115612b3a57805190602001fd5b60405163100960cb60e01b815260176004820152602490fd5b15612b5b5790565b805115612b6a57805190602001fd5b60405163100960cb60e01b815260286004820152602490fd5b15612b8b5790565b805115612b9a57805190602001fd5b60405163100960cb60e01b815260256004820152602490fd5b15612bbb5790565b805115612bca57805190602001fd5b60405163100960cb60e01b815260066004820152602490fd5b15612beb5790565b805115612bfa57805190602001fd5b60405163100960cb60e01b8152602c6004820152602490fd5b15612c1b5790565b805115612c2a57805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b15612c4b5790565b805115612c5a57805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b90816020910312610113575190565b600080916111e693826040519160208301926370a0823160e01b845260018060a01b03809216602482015260248152612cba81610ce8565b5193165af1612cd1612cca611c07565b8092612bb3565b5060208082518301019101612c73565b60405190612cee82610d39565b600060a083612cfb610f01565b8152612d05610f01565b60208201528260408201528260608201528260808201520152565b906001811015612d315760051b0190565b634e487b7160e01b600052603260045260246000fd5b818110612d52575050565b60008155600101612d47565b50634e487b7160e01b600052601160045260246000fd5b612d80600254610c6f565b80612d885750565b601f8111600114612d9b57506000600255565b6002600052612de090601f0160051c600080516020613d18833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf612d47565b6000602081208160025555565b612df5610e64565b9060008083528060208401528060408401528060608401528060808401528060a08401528060c08401528060e08401528061010084015280610120840152612e3b610ec4565b6101408401528061016084015280610180840152806101a0840152806101c0840152612e656111e9565b6101e0840152610200830152565b6000915b60018310612e8457505050565b600190606083519182518152602092838101518483015260408091015115159082015201920192019190612e77565b9190916102806102a0820193612eca838251610b7a565b612edc60208201516020850190610b7a565b612eee60408201516040850190610b7a565b60608181015115159084015260808101516080840152612f1660a082015160a0850190610b7a565b60c081015160c0840152612f3260e082015160e0850190610b7a565b610100818101516001600160601b031916908401526101208082015190840152612f656101408083015190850190610118565b61016081015190612f7c6101a09283860190610b7a565b612fc661018082015192612f976101c0948588019015159052565b82015192612fac6101e0948588019015159052565b820151926102009384870152820151610220860190612e73565b0151910152565b90601f8211612fda575050565b6101419160026000526020600020906020601f840160051c83019310613008575b601f0160051c0190612d47565b9091508190612ffb565b80519091906001600160401b0381116130e8575b61303a81613035600254610c6f565b612fcd565b602080601f8311600114613076575081929360009261306b575b50508160011b916000199060031b1c191617600255565b015190503880613054565b6002600052601f19831694909190600080516020613d18833981519152926000905b8782106130d05750508360019596106130b7575b505050811b01600255565b015160001960f88460031b161c191690553880806130ac565b80600185968294968601518155019501930190613098565b6130f0610ca9565b613026565b6130fd612ce1565b6101e08281018051610120808601805190959193926000911061355157506101a086015115155b1561325557505091613250916102206101419561324295613143612ded565b94613151611dde8451610b6e565b613161611df46020850151610b6e565b613171611e0d6040850151610b6e565b613181611e266060850151151590565b6080830151608087015261319b6126ec60a0850151610b6e565b60c083015160c08701526131b561270f60e0850151610b6e565b6131c761010061272a81860151611094565b519085015261014080820151908501526131e9610160611e9d81840151610b6e565b6131fb610180611eb781840151151590565b60016101a08501526101c0808201519085015261020092838201519085015201519082015261322a6008600055565b61323343600155565b60405192839160208301612eb3565b03601f198101835282610d8b565b613012565b92509250602084019361326b61039d8651610b6e565b6080840190815247946060850195865261328d600160ff196004541617600455565b6101409561330e87850151936132e060008088604098826132cd6104178c805195611ff687611fe86020820198634c344d9d60e01b8a5260248301610131565b9251925af16132da611c07565b90612be3565b506132f060ff1960045416600455565b6132fe3061045c8c51610b6e565b905180820360a08a0152146118aa565b479051900385515261336e85517fb296a23815642cccb180d3d63b9e3011b9aa54a0192401ac4b6d15cf614a9e436133526020890192808452865191829182611c54565b0390a183610220860151915191825101970196875251156118ca565b6080830151916101c08401908151937fc3acd7ee24f4f9cf4606c64c38b8640466129f78b44ac84b4e810f68345d08b46133a88751610b6e565b956133b660e0890151610b6e565b9261341760c08a015198610100998a8c01966133d28851611094565b895195865260208601969096526001600160a01b039283166040860152909116606084015260808301526001600160601b031990921660a082015290819060c0820190565b0390a18251156134c75761342961121b565b99865161343590610b6e565b61343f908c611294565b5161344990610b6e565b6134569060208c01611294565b5161346090611094565b61346b918a016112a3565b61016084015161347a90610b6e565b6134879060608a01611294565b516080880152805161349890613556565b60a0880152600160c0880152600160e088015251908601526102000151908401525190820152610141906136e2565b505050505060009485945084939184935061016061041791611ff66134ef6135139551610b6e565b6134f98351610b6e565b6102008401515151916001600160a01b039091169061358d565b905190828215613548575bf11561353b575b600080556135336000600155565b610141612d75565b613543611be1565b613525565b506108fc61351e565b613124565b90603282019182811161356c575b821061011357565b613574612d5e565b613564565b919082019182811161356c57821061011357565b60405163a9059cbb60e01b602082019081526001600160a01b03938416602483015260448083019590955293815261360993600093849392849190608081016001600160401b03811182821017613610575b6040525193165af16135f96135f2611c07565b8092612c13565b506020808251830101910161361d565b1561011357565b613618610ca9565b6135df565b9081602091031261011357516111e6816110b6565b6040519061363f82610d54565b8160e06000918281528260208201528260408201528260608201528260808201528260a082015261366e6111e9565b60c08201520152565b91909161012060e061014083019460018060a01b0380825116855280602083015116602086015260018060601b0319604083015116604086015260608201511660608501526080810151608085015260a081015160a0850152612fc660c082015160c0860190612e73565b61010081015160a08201805190916000911061394e575060e082015115155b156137b057613250613242916101406101419461371c613632565b9261372a6124448351610b6e565b61373a61245a6020840151610b6e565b61375361374a6040840151611094565b604086016112a3565b61376c6137636060840151610b6e565b60608601611294565b608082015160808501525160a084015261012081015160c0840152015160e08201526137986006600055565b6137a143600155565b60405192839160208301613677565b5060c0810151156138de578060207f12efbaf7d721b41313ea6075bffc8bcdaf87de4d387fbe499734cc9c29fe5c3792016138b76137ee8251610b6e565b61381a60608501916138008351610b6e565b6101208701515151916001600160a01b039091169061358d565b600080808061382c6104178951610b6e565b610140890151908282156138d5575bf1156138c8575b61384f6040850151611094565b9261387361386c61386560808801519751610b6e565b9351610b6e565b9151610b6e565b91604051958695866001600160601b0319909116815260208101919091526001600160a01b0391821660408201529181166060830152909116608082015260a00190565b0390a1600080556135336000600155565b6138d0611be1565b613842565b506108fc61383b565b8060207fdd5bfdf918cd86e0bb3c19331b121dcfa52fec6eee8c528aa1267c110694568792016139356139118251610b6e565b61391b8451610b6e565b6101208501515151916001600160a01b039091169061358d565b6138b760608301600080808061382c6104178651610b6e565b613701565b6020906003190112610113576040519061396c82610d1e565b6004358252565b6020906063190112610113576040519061398c82610d1e565b6064358252565b604051906139a082610d54565b8160e06000918281528260208201528260408201528260608201528260808201526139c9610ec4565b60a08201528260c08201520152565b6139e0610ea4565b9060008083526139ee610f01565b60208401526139fb610f01565b6040840152613a08610f01565b6060840152613a15610f01565b60808401528060a0840152613a28613993565b60c0840152613a35610f01565b60e0840152613a42610f01565b610100840152613a50610ec4565b610120840152806101408401528061016084015280610180840152806101a0840152806101c0840152806101e08401528061020084015280610220840152610240830152565b90818103906101a08212610113576040805193613ab285610d70565b613abb81611080565b8552613ac960208201611080565b602086015260e0603f19850112610113576060825194613ae886610d70565b828401518652605f19011261011357815193613b0385610ce8565b606082015185526080820151602086015260a0820151926001600160801b03198416840361011357856101409482613b839801526020830152613b4860c08401611080565b8183015260e08301516060830152613b6361010084016110a1565b6080830152860152613b786101208201611080565b6060860152016110cb565b608082015290565b90816020910312610113576111e690611080565b815181526020808301516001600160a01b039081168284015260408085015181850152606080860151909216918401919091526080808501516001600160601b0319169084015260a0808501518051918501919091529182015160c084015201516001600160801b03191660e0808301919091526101408201939261014192916101209160c08101516101008501520151910190610b7a565b6040516323b872dd60e01b602082019081526001600160a01b039283166024830152306044830152600160648084019190915282526111e693600093849391929184919060a081016001600160401b03811182821017613cad575b6040525193165af16135f9613ca6611c07565b8092612c43565b613cb5610ca9565b613c93565b9190613cc46111e9565b9260005b60018110613cd65750508252565b80613ce360019284612d20565b51613cee8288612d20565b52613cf98187612d20565b506000198114613d0a575b01613cc8565b613d12612d5e565b613d0456fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace10e5d75f4df634f7c0e19fee3620d2d34905e2dcd059beed6673032e56c98b8ba164736f6c6343000810000a`,
  BytecodeLen: 17661,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './src/contracts/auction.rsh:72:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './src/contracts/auction.rsh:238:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './src/contracts/auction.rsh:238:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './src/contracts/auction.rsh:185:66:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './src/contracts/auction.rsh:238:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './src/contracts/auction.rsh:108:31:after expr stmt semicolon',
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
