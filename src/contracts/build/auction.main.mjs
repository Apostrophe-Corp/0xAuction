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
    bidSuccess: [ctc1, ctc1, ctc2],
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
    Auctioneer_acceptSale0_443: ctc7,
    Auctioneer_rejectSale0_443: ctc7
    });
  const ctc9 = stdlib.T_Null;
  
  
  const [v700, v701, v748, v771, v774, v1243, v1252, v1253] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc0, ctc1, ctc2, ctc0, ctc3, ctc3, ctc6, ctc3]);
  const v1262 = ctc.selfAddress();
  const v1264 = stdlib.protect(ctc7, await interact.in(), {
    at: './src/contracts/auction.rsh:1:23:application',
    fs: ['at ./src/contracts/auction.rsh:191:36:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:191:36:function exp)', 'at ./src/contracts/auction.rsh:185:66:application call to "runAuctioneer_acceptSale0_443" (defined at: ./src/contracts/auction.rsh:189:29:function exp)', 'at ./src/contracts/auction.rsh:185:66:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:185:66:function exp)'],
    msg: 'in',
    who: 'Auctioneer_acceptSale'
    });
  const v1266 = stdlib.addressEq(v1262, v700);
  stdlib.assert(v1266, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/auction.rsh:192:46:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/auction.rsh:191:36:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:191:36:function exp)', 'at ./src/contracts/auction.rsh:191:36:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:191:36:function exp)', 'at ./src/contracts/auction.rsh:185:66:application call to "runAuctioneer_acceptSale0_443" (defined at: ./src/contracts/auction.rsh:189:29:function exp)', 'at ./src/contracts/auction.rsh:185:66:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:185:66:function exp)'],
    msg: 'You are not the Seller',
    who: 'Auctioneer_acceptSale'
    });
  const v1270 = ['Auctioneer_acceptSale0_443', v1264];
  
  const txn1 = await (ctc.sendrecv({
    args: [v700, v701, v748, v771, v774, v1243, v1252, v1253, v1270],
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
      
      
      const {data: [v1285], secs: v1287, time: v1286, didSend: v568, from: v1284 } = txn1;
      
      switch (v1285[0]) {
        case 'Auctioneer_acceptSale0_443': {
          const v1288 = v1285[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Auctioneer_acceptSale"
            });
          ;
          const v1295 = true;
          const v1296 = await txn1.getOutput('Auctioneer_acceptSale', 'v1295', ctc4, v1295);
          
          const v3074 = v1252;
          const v3075 = v1253;
          const v3076 = stdlib.le(v1286, v1243);
          const v3077 = v3076 ? false : false;
          if (v3077) {
            sim_r.isHalt = false;
            }
          else {
            const v3078 = v1252[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:213:41:application', stdlib.UInt_max, '0')];
            const v3079 = v3078[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:213:41:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v771,
              tok: v701
              });
            sim_r.txns.push({
              kind: 'from',
              to: v700,
              tok: undefined /* Nothing */
              });
            null;
            sim_r.txns.push({
              kind: 'halt',
              tok: v701
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'Auctioneer_rejectSale0_443': {
          const v1310 = v1285[1];
          
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
  const {data: [v1285], secs: v1287, time: v1286, didSend: v568, from: v1284 } = txn1;
  switch (v1285[0]) {
    case 'Auctioneer_acceptSale0_443': {
      const v1288 = v1285[1];
      undefined /* setApiDetails */;
      ;
      const v1295 = true;
      const v1296 = await txn1.getOutput('Auctioneer_acceptSale', 'v1295', ctc4, v1295);
      if (v568) {
        stdlib.protect(ctc9, await interact.out(v1288, v1296), {
          at: './src/contracts/auction.rsh:190:33:application',
          fs: ['at ./src/contracts/auction.rsh:190:33:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:190:33:function exp)', 'at ./src/contracts/auction.rsh:196:47:application call to "notify" (defined at: ./src/contracts/auction.rsh:195:42:function exp)', 'at ./src/contracts/auction.rsh:195:42:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:195:42:function exp)'],
          msg: 'out',
          who: 'Auctioneer_acceptSale'
          });
        }
      else {
        }
      
      const v3074 = v1252;
      const v3075 = v1253;
      const v3076 = stdlib.le(v1286, v1243);
      const v3077 = v3076 ? false : false;
      if (v3077) {
        return;
        }
      else {
        const v3078 = v1252[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:213:41:application', stdlib.UInt_max, '0')];
        const v3079 = v3078[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:213:41:application', stdlib.UInt_max, '0')];
        ;
        ;
        null;
        return;
        }
      break;
      }
    case 'Auctioneer_rejectSale0_443': {
      const v1310 = v1285[1];
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
    Auctioneer_acceptSale0_443: ctc7,
    Auctioneer_rejectSale0_443: ctc7
    });
  const ctc9 = stdlib.T_Null;
  
  
  const [v700, v701, v748, v771, v774, v1243, v1252, v1253] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc0, ctc1, ctc2, ctc0, ctc3, ctc3, ctc6, ctc3]);
  const v1272 = ctc.selfAddress();
  const v1274 = stdlib.protect(ctc7, await interact.in(), {
    at: './src/contracts/auction.rsh:1:23:application',
    fs: ['at ./src/contracts/auction.rsh:202:36:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:202:36:function exp)', 'at ./src/contracts/auction.rsh:185:66:application call to "runAuctioneer_rejectSale0_443" (defined at: ./src/contracts/auction.rsh:200:29:function exp)', 'at ./src/contracts/auction.rsh:185:66:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:185:66:function exp)'],
    msg: 'in',
    who: 'Auctioneer_rejectSale'
    });
  const v1276 = stdlib.addressEq(v1272, v700);
  stdlib.assert(v1276, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/auction.rsh:203:46:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/auction.rsh:202:36:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:202:36:function exp)', 'at ./src/contracts/auction.rsh:202:36:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:202:36:function exp)', 'at ./src/contracts/auction.rsh:185:66:application call to "runAuctioneer_rejectSale0_443" (defined at: ./src/contracts/auction.rsh:200:29:function exp)', 'at ./src/contracts/auction.rsh:185:66:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:185:66:function exp)'],
    msg: 'You are not the Seller',
    who: 'Auctioneer_rejectSale'
    });
  const v1280 = ['Auctioneer_rejectSale0_443', v1274];
  
  const txn1 = await (ctc.sendrecv({
    args: [v700, v701, v748, v771, v774, v1243, v1252, v1253, v1280],
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
      
      
      const {data: [v1285], secs: v1287, time: v1286, didSend: v568, from: v1284 } = txn1;
      
      switch (v1285[0]) {
        case 'Auctioneer_acceptSale0_443': {
          const v1288 = v1285[1];
          
          break;
          }
        case 'Auctioneer_rejectSale0_443': {
          const v1310 = v1285[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Auctioneer_rejectSale"
            });
          ;
          const v1325 = false;
          const v1326 = await txn1.getOutput('Auctioneer_rejectSale', 'v1325', ctc4, v1325);
          
          const v3107 = v1252;
          const v3108 = v1253;
          const v3109 = stdlib.le(v1286, v1243);
          const v3110 = v3109 ? false : false;
          if (v3110) {
            sim_r.isHalt = false;
            }
          else {
            const v3113 = v1252[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:223:41:application', stdlib.UInt_max, '0')];
            const v3114 = v3113[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:223:41:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v700,
              tok: v701
              });
            sim_r.txns.push({
              kind: 'from',
              to: v771,
              tok: undefined /* Nothing */
              });
            null;
            sim_r.txns.push({
              kind: 'halt',
              tok: v701
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
  const {data: [v1285], secs: v1287, time: v1286, didSend: v568, from: v1284 } = txn1;
  switch (v1285[0]) {
    case 'Auctioneer_acceptSale0_443': {
      const v1288 = v1285[1];
      return;
      break;
      }
    case 'Auctioneer_rejectSale0_443': {
      const v1310 = v1285[1];
      undefined /* setApiDetails */;
      ;
      const v1325 = false;
      const v1326 = await txn1.getOutput('Auctioneer_rejectSale', 'v1325', ctc4, v1325);
      if (v568) {
        stdlib.protect(ctc9, await interact.out(v1310, v1326), {
          at: './src/contracts/auction.rsh:201:33:application',
          fs: ['at ./src/contracts/auction.rsh:201:33:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:201:33:function exp)', 'at ./src/contracts/auction.rsh:207:47:application call to "notify" (defined at: ./src/contracts/auction.rsh:206:42:function exp)', 'at ./src/contracts/auction.rsh:206:42:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:206:42:function exp)'],
          msg: 'out',
          who: 'Auctioneer_rejectSale'
          });
        }
      else {
        }
      
      const v3107 = v1252;
      const v3108 = v1253;
      const v3109 = stdlib.le(v1286, v1243);
      const v3110 = v3109 ? false : false;
      if (v3110) {
        return;
        }
      else {
        const v3113 = v1252[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:223:41:application', stdlib.UInt_max, '0')];
        const v3114 = v3113[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:223:41:application', stdlib.UInt_max, '0')];
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
  
  
  const [v700, v701, v703, v722, v727, v740, v746, v747, v748, v768, v770, v771, v772, v773, v774, v781, v782] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'), [ctc0, ctc1, ctc2, ctc3, ctc4, ctc0, ctc4, ctc2, ctc5, ctc4, ctc6, ctc0, ctc7, ctc7, ctc4, ctc9, ctc4]);
  const v793 = ctc.selfAddress();
  const v795 = stdlib.protect(ctc3, await interact.in(), {
    at: './src/contracts/auction.rsh:1:23:application',
    fs: ['at ./src/contracts/auction.rsh:154:36:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:154:36:function exp)', 'at ./src/contracts/auction.rsh:108:31:application call to "runAuctioneer_stopAuction0_123" (defined at: ./src/contracts/auction.rsh:152:29:function exp)', 'at ./src/contracts/auction.rsh:108:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:108:31:function exp)'],
    msg: 'in',
    who: 'Auctioneer_stopAuction'
    });
  const v797 = stdlib.addressEq(v793, v700);
  stdlib.assert(v797, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/auction.rsh:155:46:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/auction.rsh:154:36:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:154:36:function exp)', 'at ./src/contracts/auction.rsh:154:36:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:154:36:function exp)', 'at ./src/contracts/auction.rsh:108:31:application call to "runAuctioneer_stopAuction0_123" (defined at: ./src/contracts/auction.rsh:152:29:function exp)', 'at ./src/contracts/auction.rsh:108:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:108:31:function exp)'],
    msg: 'You are not the Seller',
    who: 'Auctioneer_stopAuction'
    });
  const v801 = ['Auctioneer_stopAuction0_123', v795];
  
  const txn1 = await (ctc.sendrecv({
    args: [v700, v701, v703, v722, v727, v740, v746, v747, v748, v768, v770, v771, v772, v773, v774, v781, v782, v801],
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
      
      
      const {data: [v832], secs: v834, time: v833, didSend: v317, from: v831 } = txn1;
      
      switch (v832[0]) {
        case 'Auctioneer_stopAuction0_123': {
          const v835 = v832[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Auctioneer_stopAuction"
            });
          ;
          null;
          const v849 = {
            blockEnded: v833,
            id: v727,
            lastBid: v774
            };
          const v850 = await txn1.getOutput('Auctioneer_stopAuction', 'v849', ctc6, v849);
          
          const v3115 = v849;
          const v3116 = v771;
          const v3117 = v772;
          const v3118 = false;
          const v3119 = v774;
          const v3121 = v781;
          const v3122 = v782;
          const v3123 = stdlib.le(v833, v768);
          const v3124 = v3123 ? false : false;
          if (v3124) {
            sim_r.isHalt = false;
            }
          else {
            const v3125 = await (async () => {
              sim_r.txns.push({
                kind: 'remote',
                obj: v703,
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
            const v3126 = await txn1.getOutput('internal', 'v3125', ctc13, v3125);
            const v3127 = v3126[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:170:37:application', stdlib.UInt_max, '0')];
            const v3128 = stdlib.add(v782, v3127);
            null;
            const v3130 = stdlib.gt(v774, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:182:25:decimal', stdlib.UInt_max, '0'));
            if (v3130) {
              const v3131 = stdlib.safeAdd(v833, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
              const v3159 = v781;
              const v3160 = v3128;
              const v3161 = stdlib.le(v833, v3131);
              if (v3161) {
                sim_r.isHalt = false;
                }
              else {
                const v3163 = v781[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:213:41:application', stdlib.UInt_max, '0')];
                const v3164 = v3163[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:213:41:application', stdlib.UInt_max, '0')];
                sim_r.txns.push({
                  kind: 'from',
                  to: v771,
                  tok: v701
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v700,
                  tok: undefined /* Nothing */
                  });
                null;
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v701
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}
            else {
              const v3154 = v781[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:33:application', stdlib.UInt_max, '0')];
              const v3155 = v3154[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:33:application', stdlib.UInt_max, '0')];
              sim_r.txns.push({
                kind: 'from',
                to: v700,
                tok: v701
                });
              sim_r.txns.push({
                kind: 'from',
                to: v771,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v701
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
          const v964 = v832[1];
          
          break;
          }
        case 'Bidder_optIn0_123': {
          const v1093 = v832[1];
          
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
  const {data: [v832], secs: v834, time: v833, didSend: v317, from: v831 } = txn1;
  switch (v832[0]) {
    case 'Auctioneer_stopAuction0_123': {
      const v835 = v832[1];
      undefined /* setApiDetails */;
      ;
      null;
      const v849 = {
        blockEnded: v833,
        id: v727,
        lastBid: v774
        };
      const v850 = await txn1.getOutput('Auctioneer_stopAuction', 'v849', ctc6, v849);
      if (v317) {
        stdlib.protect(ctc12, await interact.out(v835, v850), {
          at: './src/contracts/auction.rsh:153:33:application',
          fs: ['at ./src/contracts/auction.rsh:153:33:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:153:33:function exp)', 'at ./src/contracts/auction.rsh:165:47:application call to "notify" (defined at: ./src/contracts/auction.rsh:158:42:function exp)', 'at ./src/contracts/auction.rsh:158:42:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:158:42:function exp)'],
          msg: 'out',
          who: 'Auctioneer_stopAuction'
          });
        }
      else {
        }
      
      const v3115 = v849;
      const v3116 = v771;
      const v3117 = v772;
      const v3118 = false;
      const v3119 = v774;
      const v3121 = v781;
      const v3122 = v782;
      const v3123 = stdlib.le(v833, v768);
      const v3124 = v3123 ? false : false;
      if (v3124) {
        return;
        }
      else {
        const v3125 = undefined /* Remote */;
        const v3126 = await txn1.getOutput('internal', 'v3125', ctc13, v3125);
        const v3127 = v3126[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:170:37:application', stdlib.UInt_max, '0')];
        const v3128 = stdlib.add(v782, v3127);
        const v3129 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3127);
        stdlib.assert(v3129, {
          at: './src/contracts/auction.rsh:170:37:application',
          fs: [],
          msg: 'remote bill check',
          who: 'Auctioneer_stopAuction'
          });
        null;
        const v3130 = stdlib.gt(v774, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:182:25:decimal', stdlib.UInt_max, '0'));
        if (v3130) {
          const v3131 = stdlib.safeAdd(v833, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
          const v3159 = v781;
          const v3160 = v3128;
          const v3161 = stdlib.le(v833, v3131);
          if (v3161) {
            return;
            }
          else {
            const v3163 = v781[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:213:41:application', stdlib.UInt_max, '0')];
            const v3164 = v3163[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:213:41:application', stdlib.UInt_max, '0')];
            ;
            ;
            null;
            return;
            }}
        else {
          const v3154 = v781[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:33:application', stdlib.UInt_max, '0')];
          const v3155 = v3154[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:33:application', stdlib.UInt_max, '0')];
          ;
          ;
          return;
          }}
      break;
      }
    case 'Bidder_bid0_123': {
      const v964 = v832[1];
      return;
      break;
      }
    case 'Bidder_optIn0_123': {
      const v1093 = v832[1];
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
  
  
  const [v700, v701, v703, v722, v727, v740, v746, v747, v748, v768, v770, v771, v772, v773, v774, v781, v782] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'), [ctc0, ctc1, ctc2, ctc3, ctc4, ctc0, ctc4, ctc2, ctc5, ctc4, ctc6, ctc0, ctc7, ctc7, ctc4, ctc9, ctc4]);
  const v805 = stdlib.protect(ctc10, await interact.in(), {
    at: './src/contracts/auction.rsh:1:23:application',
    fs: ['at ./src/contracts/auction.rsh:125:49:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:125:49:function exp)', 'at ./src/contracts/auction.rsh:108:31:application call to "runBidder_bid0_123" (defined at: ./src/contracts/auction.rsh:125:30:function exp)', 'at ./src/contracts/auction.rsh:108:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:108:31:function exp)'],
    msg: 'in',
    who: 'Bidder_bid'
    });
  const v806 = v805[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v808 = stdlib.gt(v806, v774);
  stdlib.assert(v808, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/auction.rsh:126:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/auction.rsh:125:49:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:125:49:function exp)', 'at ./src/contracts/auction.rsh:108:31:application call to "runBidder_bid0_123" (defined at: ./src/contracts/auction.rsh:125:30:function exp)', 'at ./src/contracts/auction.rsh:108:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:108:31:function exp)'],
    msg: 'Your bid is too low, please try again',
    who: 'Bidder_bid'
    });
  const v815 = ['Bidder_bid0_123', v805];
  
  const txn1 = await (ctc.sendrecv({
    args: [v700, v701, v703, v722, v727, v740, v746, v747, v748, v768, v770, v771, v772, v773, v774, v781, v782, v815],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [v806, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v832], secs: v834, time: v833, didSend: v317, from: v831 } = txn1;
      
      switch (v832[0]) {
        case 'Auctioneer_stopAuction0_123': {
          const v835 = v832[1];
          
          break;
          }
        case 'Bidder_bid0_123': {
          const v964 = v832[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bidder_bid"
            });
          const v970 = v964[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:125:30:spread', stdlib.UInt_max, '0')];
          const v975 = stdlib.add(v782, v970);
          sim_r.txns.push({
            amt: v970,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          if (v772) {
            const v1026 = await (async () => {
              sim_r.txns.push({
                kind: 'remote',
                obj: v703,
                remote: ({
                  accs: [v831],
                  apps: [],
                  bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:132:91:application', stdlib.UInt_max, '0'),
                  fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:132:91:application', stdlib.UInt_max, '0'),
                  toks: []
                  })
                })
              return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
            const v1027 = await txn1.getOutput('internal', 'v1026', ctc13, v1026);
            const v1029 = v1027[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:132:91:application', stdlib.UInt_max, '0')];
            const v1034 = stdlib.add(v975, v1029);
            null;
            const v1036 = [v831, v774];
            const v1037 = await txn1.getOutput('Bidder_bid', 'v1036', ctc14, v1036);
            
            const v3531 = v770;
            const v3532 = v831;
            const v3533 = false;
            const v3534 = v773;
            const v3535 = v970;
            const v3537 = v781;
            const v3538 = v1034;
            const v3539 = stdlib.le(v833, v768);
            const v3540 = v3539 ? v773 : false;
            if (v3540) {
              sim_r.isHalt = false;
              }
            else {
              const v3541 = await (async () => {
                sim_r.txns.push({
                  kind: 'remote',
                  obj: v703,
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
              const v3542 = await txn1.getOutput('internal', 'v3541', ctc13, v3541);
              const v3543 = v3542[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:170:37:application', stdlib.UInt_max, '0')];
              const v3544 = stdlib.add(v1034, v3543);
              null;
              const v3546 = stdlib.gt(v970, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:182:25:decimal', stdlib.UInt_max, '0'));
              if (v3546) {
                const v3547 = stdlib.safeAdd(v833, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
                const v3575 = v781;
                const v3576 = v3544;
                const v3577 = stdlib.le(v833, v3547);
                if (v3577) {
                  sim_r.isHalt = false;
                  }
                else {
                  const v3579 = v781[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:213:41:application', stdlib.UInt_max, '0')];
                  const v3580 = v3579[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:213:41:application', stdlib.UInt_max, '0')];
                  sim_r.txns.push({
                    kind: 'from',
                    to: v831,
                    tok: v701
                    });
                  sim_r.txns.push({
                    kind: 'from',
                    to: v700,
                    tok: undefined /* Nothing */
                    });
                  null;
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: v701
                    })
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }}
              else {
                const v3570 = v781[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:33:application', stdlib.UInt_max, '0')];
                const v3571 = v3570[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:33:application', stdlib.UInt_max, '0')];
                sim_r.txns.push({
                  kind: 'from',
                  to: v700,
                  tok: v701
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v831,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v701
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}}
          else {
            const v999 = stdlib.sub(v975, v774);
            sim_r.txns.push({
              kind: 'from',
              to: v771,
              tok: undefined /* Nothing */
              });
            const v1003 = await (async () => {
              sim_r.txns.push({
                kind: 'remote',
                obj: v703,
                remote: ({
                  accs: [v831],
                  apps: [],
                  bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:132:91:application', stdlib.UInt_max, '0'),
                  fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:132:91:application', stdlib.UInt_max, '0'),
                  toks: []
                  })
                })
              return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
            const v1004 = await txn1.getOutput('internal', 'v1003', ctc13, v1003);
            const v1006 = v1004[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:132:91:application', stdlib.UInt_max, '0')];
            const v1011 = stdlib.add(v999, v1006);
            null;
            const v1013 = [v831, v774];
            const v1014 = await txn1.getOutput('Bidder_bid', 'v1013', ctc14, v1013);
            
            const v3583 = v770;
            const v3584 = v831;
            const v3585 = false;
            const v3586 = v773;
            const v3587 = v970;
            const v3589 = v781;
            const v3590 = v1011;
            const v3591 = stdlib.le(v833, v768);
            const v3592 = v3591 ? v773 : false;
            if (v3592) {
              sim_r.isHalt = false;
              }
            else {
              const v3593 = await (async () => {
                sim_r.txns.push({
                  kind: 'remote',
                  obj: v703,
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
              const v3594 = await txn1.getOutput('internal', 'v3593', ctc13, v3593);
              const v3595 = v3594[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:170:37:application', stdlib.UInt_max, '0')];
              const v3596 = stdlib.add(v1011, v3595);
              null;
              const v3598 = stdlib.gt(v970, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:182:25:decimal', stdlib.UInt_max, '0'));
              if (v3598) {
                const v3599 = stdlib.safeAdd(v833, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
                const v3627 = v781;
                const v3628 = v3596;
                const v3629 = stdlib.le(v833, v3599);
                if (v3629) {
                  sim_r.isHalt = false;
                  }
                else {
                  const v3631 = v781[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:213:41:application', stdlib.UInt_max, '0')];
                  const v3632 = v3631[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:213:41:application', stdlib.UInt_max, '0')];
                  sim_r.txns.push({
                    kind: 'from',
                    to: v831,
                    tok: v701
                    });
                  sim_r.txns.push({
                    kind: 'from',
                    to: v700,
                    tok: undefined /* Nothing */
                    });
                  null;
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: v701
                    })
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }}
              else {
                const v3622 = v781[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:33:application', stdlib.UInt_max, '0')];
                const v3623 = v3622[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:33:application', stdlib.UInt_max, '0')];
                sim_r.txns.push({
                  kind: 'from',
                  to: v700,
                  tok: v701
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v831,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v701
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
          const v1093 = v832[1];
          
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
  const {data: [v832], secs: v834, time: v833, didSend: v317, from: v831 } = txn1;
  switch (v832[0]) {
    case 'Auctioneer_stopAuction0_123': {
      const v835 = v832[1];
      return;
      break;
      }
    case 'Bidder_bid0_123': {
      const v964 = v832[1];
      undefined /* setApiDetails */;
      const v970 = v964[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:125:30:spread', stdlib.UInt_max, '0')];
      const v971 = stdlib.gt(v970, v774);
      stdlib.assert(v971, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/auction.rsh:126:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/auction.rsh:125:49:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:125:49:function exp)', 'at ./src/contracts/auction.rsh:108:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:125:49:function exp)', 'at ./src/contracts/auction.rsh:108:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:108:31:function exp)'],
        msg: 'Your bid is too low, please try again',
        who: 'Bidder_bid'
        });
      const v975 = stdlib.add(v782, v970);
      ;
      if (v772) {
        const v1026 = undefined /* Remote */;
        const v1027 = await txn1.getOutput('internal', 'v1026', ctc13, v1026);
        const v1029 = v1027[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:132:91:application', stdlib.UInt_max, '0')];
        const v1034 = stdlib.add(v975, v1029);
        const v1035 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1029);
        stdlib.assert(v1035, {
          at: './src/contracts/auction.rsh:132:91:application',
          fs: ['at ./src/contracts/auction.rsh:129:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:129:50:function exp)'],
          msg: 'remote bill check',
          who: 'Bidder_bid'
          });
        null;
        const v1036 = [v831, v774];
        const v1037 = await txn1.getOutput('Bidder_bid', 'v1036', ctc14, v1036);
        if (v317) {
          stdlib.protect(ctc12, await interact.out(v964, v1037), {
            at: './src/contracts/auction.rsh:125:31:application',
            fs: ['at ./src/contracts/auction.rsh:125:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:125:31:function exp)', 'at ./src/contracts/auction.rsh:134:55:application call to "notify" (defined at: ./src/contracts/auction.rsh:129:50:function exp)', 'at ./src/contracts/auction.rsh:129:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:129:50:function exp)'],
            msg: 'out',
            who: 'Bidder_bid'
            });
          }
        else {
          }
        
        const v3531 = v770;
        const v3532 = v831;
        const v3533 = false;
        const v3534 = v773;
        const v3535 = v970;
        const v3537 = v781;
        const v3538 = v1034;
        const v3539 = stdlib.le(v833, v768);
        const v3540 = v3539 ? v773 : false;
        if (v3540) {
          return;
          }
        else {
          const v3541 = undefined /* Remote */;
          const v3542 = await txn1.getOutput('internal', 'v3541', ctc13, v3541);
          const v3543 = v3542[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:170:37:application', stdlib.UInt_max, '0')];
          const v3544 = stdlib.add(v1034, v3543);
          const v3545 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3543);
          stdlib.assert(v3545, {
            at: './src/contracts/auction.rsh:170:37:application',
            fs: [],
            msg: 'remote bill check',
            who: 'Bidder_bid'
            });
          null;
          const v3546 = stdlib.gt(v970, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:182:25:decimal', stdlib.UInt_max, '0'));
          if (v3546) {
            const v3547 = stdlib.safeAdd(v833, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
            const v3575 = v781;
            const v3576 = v3544;
            const v3577 = stdlib.le(v833, v3547);
            if (v3577) {
              return;
              }
            else {
              const v3579 = v781[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:213:41:application', stdlib.UInt_max, '0')];
              const v3580 = v3579[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:213:41:application', stdlib.UInt_max, '0')];
              ;
              ;
              null;
              return;
              }}
          else {
            const v3570 = v781[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:33:application', stdlib.UInt_max, '0')];
            const v3571 = v3570[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:33:application', stdlib.UInt_max, '0')];
            ;
            ;
            return;
            }}}
      else {
        const v999 = stdlib.sub(v975, v774);
        ;
        const v1003 = undefined /* Remote */;
        const v1004 = await txn1.getOutput('internal', 'v1003', ctc13, v1003);
        const v1006 = v1004[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:132:91:application', stdlib.UInt_max, '0')];
        const v1011 = stdlib.add(v999, v1006);
        const v1012 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1006);
        stdlib.assert(v1012, {
          at: './src/contracts/auction.rsh:132:91:application',
          fs: ['at ./src/contracts/auction.rsh:129:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:129:50:function exp)'],
          msg: 'remote bill check',
          who: 'Bidder_bid'
          });
        null;
        const v1013 = [v831, v774];
        const v1014 = await txn1.getOutput('Bidder_bid', 'v1013', ctc14, v1013);
        if (v317) {
          stdlib.protect(ctc12, await interact.out(v964, v1014), {
            at: './src/contracts/auction.rsh:125:31:application',
            fs: ['at ./src/contracts/auction.rsh:125:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:125:31:function exp)', 'at ./src/contracts/auction.rsh:134:55:application call to "notify" (defined at: ./src/contracts/auction.rsh:129:50:function exp)', 'at ./src/contracts/auction.rsh:129:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:129:50:function exp)'],
            msg: 'out',
            who: 'Bidder_bid'
            });
          }
        else {
          }
        
        const v3583 = v770;
        const v3584 = v831;
        const v3585 = false;
        const v3586 = v773;
        const v3587 = v970;
        const v3589 = v781;
        const v3590 = v1011;
        const v3591 = stdlib.le(v833, v768);
        const v3592 = v3591 ? v773 : false;
        if (v3592) {
          return;
          }
        else {
          const v3593 = undefined /* Remote */;
          const v3594 = await txn1.getOutput('internal', 'v3593', ctc13, v3593);
          const v3595 = v3594[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:170:37:application', stdlib.UInt_max, '0')];
          const v3596 = stdlib.add(v1011, v3595);
          const v3597 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3595);
          stdlib.assert(v3597, {
            at: './src/contracts/auction.rsh:170:37:application',
            fs: [],
            msg: 'remote bill check',
            who: 'Bidder_bid'
            });
          null;
          const v3598 = stdlib.gt(v970, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:182:25:decimal', stdlib.UInt_max, '0'));
          if (v3598) {
            const v3599 = stdlib.safeAdd(v833, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
            const v3627 = v781;
            const v3628 = v3596;
            const v3629 = stdlib.le(v833, v3599);
            if (v3629) {
              return;
              }
            else {
              const v3631 = v781[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:213:41:application', stdlib.UInt_max, '0')];
              const v3632 = v3631[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:213:41:application', stdlib.UInt_max, '0')];
              ;
              ;
              null;
              return;
              }}
          else {
            const v3622 = v781[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:33:application', stdlib.UInt_max, '0')];
            const v3623 = v3622[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:33:application', stdlib.UInt_max, '0')];
            ;
            ;
            return;
            }}}
      break;
      }
    case 'Bidder_optIn0_123': {
      const v1093 = v832[1];
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
  
  
  const [v700, v701, v703, v722, v727, v740, v746, v747, v748, v768, v770, v771, v772, v773, v774, v781, v782] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'), [ctc0, ctc1, ctc2, ctc3, ctc4, ctc0, ctc4, ctc2, ctc5, ctc4, ctc6, ctc0, ctc7, ctc7, ctc4, ctc9, ctc4]);
  const v819 = stdlib.protect(ctc3, await interact.in(), {
    at: './src/contracts/auction.rsh:1:23:application',
    fs: ['at ./src/contracts/auction.rsh:139:48:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:139:48:function exp)', 'at ./src/contracts/auction.rsh:108:31:application call to "runBidder_optIn0_123" (defined at: ./src/contracts/auction.rsh:139:30:function exp)', 'at ./src/contracts/auction.rsh:108:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:108:31:function exp)'],
    msg: 'in',
    who: 'Bidder_optIn'
    });
  const v823 = ['Bidder_optIn0_123', v819];
  
  const txn1 = await (ctc.sendrecv({
    args: [v700, v701, v703, v722, v727, v740, v746, v747, v748, v768, v770, v771, v772, v773, v774, v781, v782, v823],
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
      
      
      const {data: [v832], secs: v834, time: v833, didSend: v317, from: v831 } = txn1;
      
      switch (v832[0]) {
        case 'Auctioneer_stopAuction0_123': {
          const v835 = v832[1];
          
          break;
          }
        case 'Bidder_bid0_123': {
          const v964 = v832[1];
          
          break;
          }
        case 'Bidder_optIn0_123': {
          const v1093 = v832[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bidder_optIn"
            });
          const v1104 = stdlib.add(v782, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:12:18:decimal', stdlib.UInt_max, '1000000'));
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:12:18:decimal', stdlib.UInt_max, '1000000'),
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v1177 = stdlib.ge(v1104, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:143:83:application', stdlib.UInt_max, '900000'));
          if (v1177) {
            const v1181 = stdlib.sub(v1104, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:143:83:application', stdlib.UInt_max, '900000'));
            sim_r.txns.push({
              kind: 'from',
              to: v740,
              tok: undefined /* Nothing */
              });
            const v1183 = stdlib.ge(v1181, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:144:84:application', stdlib.UInt_max, '100000'));
            if (v1183) {
              const v1187 = stdlib.sub(v1181, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:144:84:application', stdlib.UInt_max, '100000'));
              sim_r.txns.push({
                kind: 'from',
                to: v700,
                tok: undefined /* Nothing */
                });
              const v1188 = true;
              const v1189 = await txn1.getOutput('Bidder_optIn', 'v1188', ctc7, v1188);
              
              const v3999 = v770;
              const v4000 = v771;
              const v4001 = v772;
              const v4002 = v773;
              const v4003 = v774;
              const v4005 = v781;
              const v4006 = v1187;
              const v4007 = stdlib.le(v833, v768);
              const v4008 = v4007 ? v773 : false;
              if (v4008) {
                sim_r.isHalt = false;
                }
              else {
                const v4009 = await (async () => {
                  sim_r.txns.push({
                    kind: 'remote',
                    obj: v703,
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
                const v4010 = await txn1.getOutput('internal', 'v4009', ctc13, v4009);
                const v4011 = v4010[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:170:37:application', stdlib.UInt_max, '0')];
                const v4012 = stdlib.add(v1187, v4011);
                null;
                const v4014 = stdlib.gt(v774, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:182:25:decimal', stdlib.UInt_max, '0'));
                if (v4014) {
                  const v4015 = stdlib.safeAdd(v833, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
                  const v4043 = v781;
                  const v4044 = v4012;
                  const v4045 = stdlib.le(v833, v4015);
                  if (v4045) {
                    sim_r.isHalt = false;
                    }
                  else {
                    const v4047 = v781[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:213:41:application', stdlib.UInt_max, '0')];
                    const v4048 = v4047[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:213:41:application', stdlib.UInt_max, '0')];
                    sim_r.txns.push({
                      kind: 'from',
                      to: v771,
                      tok: v701
                      });
                    sim_r.txns.push({
                      kind: 'from',
                      to: v700,
                      tok: undefined /* Nothing */
                      });
                    null;
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: v701
                      })
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }}
                else {
                  const v4038 = v781[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:33:application', stdlib.UInt_max, '0')];
                  const v4039 = v4038[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:33:application', stdlib.UInt_max, '0')];
                  sim_r.txns.push({
                    kind: 'from',
                    to: v700,
                    tok: v701
                    });
                  sim_r.txns.push({
                    kind: 'from',
                    to: v771,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: v701
                    })
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }}}
            else {
              const v1195 = true;
              const v1196 = await txn1.getOutput('Bidder_optIn', 'v1195', ctc7, v1195);
              
              const v4051 = v770;
              const v4052 = v771;
              const v4053 = v772;
              const v4054 = v773;
              const v4055 = v774;
              const v4057 = v781;
              const v4058 = v1181;
              const v4059 = stdlib.le(v833, v768);
              const v4060 = v4059 ? v773 : false;
              if (v4060) {
                sim_r.isHalt = false;
                }
              else {
                const v4061 = await (async () => {
                  sim_r.txns.push({
                    kind: 'remote',
                    obj: v703,
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
                const v4062 = await txn1.getOutput('internal', 'v4061', ctc13, v4061);
                const v4063 = v4062[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:170:37:application', stdlib.UInt_max, '0')];
                const v4064 = stdlib.add(v1181, v4063);
                null;
                const v4066 = stdlib.gt(v774, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:182:25:decimal', stdlib.UInt_max, '0'));
                if (v4066) {
                  const v4067 = stdlib.safeAdd(v833, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
                  const v4095 = v781;
                  const v4096 = v4064;
                  const v4097 = stdlib.le(v833, v4067);
                  if (v4097) {
                    sim_r.isHalt = false;
                    }
                  else {
                    const v4099 = v781[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:213:41:application', stdlib.UInt_max, '0')];
                    const v4100 = v4099[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:213:41:application', stdlib.UInt_max, '0')];
                    sim_r.txns.push({
                      kind: 'from',
                      to: v771,
                      tok: v701
                      });
                    sim_r.txns.push({
                      kind: 'from',
                      to: v700,
                      tok: undefined /* Nothing */
                      });
                    null;
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: v701
                      })
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }}
                else {
                  const v4090 = v781[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:33:application', stdlib.UInt_max, '0')];
                  const v4091 = v4090[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:33:application', stdlib.UInt_max, '0')];
                  sim_r.txns.push({
                    kind: 'from',
                    to: v700,
                    tok: v701
                    });
                  sim_r.txns.push({
                    kind: 'from',
                    to: v771,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: v701
                    })
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }}}}
          else {
            const v1203 = stdlib.ge(v1104, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:144:84:application', stdlib.UInt_max, '100000'));
            if (v1203) {
              const v1207 = stdlib.sub(v1104, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:144:84:application', stdlib.UInt_max, '100000'));
              sim_r.txns.push({
                kind: 'from',
                to: v700,
                tok: undefined /* Nothing */
                });
              const v1208 = true;
              const v1209 = await txn1.getOutput('Bidder_optIn', 'v1208', ctc7, v1208);
              
              const v4103 = v770;
              const v4104 = v771;
              const v4105 = v772;
              const v4106 = v773;
              const v4107 = v774;
              const v4109 = v781;
              const v4110 = v1207;
              const v4111 = stdlib.le(v833, v768);
              const v4112 = v4111 ? v773 : false;
              if (v4112) {
                sim_r.isHalt = false;
                }
              else {
                const v4113 = await (async () => {
                  sim_r.txns.push({
                    kind: 'remote',
                    obj: v703,
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
                const v4114 = await txn1.getOutput('internal', 'v4113', ctc13, v4113);
                const v4115 = v4114[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:170:37:application', stdlib.UInt_max, '0')];
                const v4116 = stdlib.add(v1207, v4115);
                null;
                const v4118 = stdlib.gt(v774, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:182:25:decimal', stdlib.UInt_max, '0'));
                if (v4118) {
                  const v4119 = stdlib.safeAdd(v833, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
                  const v4147 = v781;
                  const v4148 = v4116;
                  const v4149 = stdlib.le(v833, v4119);
                  if (v4149) {
                    sim_r.isHalt = false;
                    }
                  else {
                    const v4151 = v781[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:213:41:application', stdlib.UInt_max, '0')];
                    const v4152 = v4151[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:213:41:application', stdlib.UInt_max, '0')];
                    sim_r.txns.push({
                      kind: 'from',
                      to: v771,
                      tok: v701
                      });
                    sim_r.txns.push({
                      kind: 'from',
                      to: v700,
                      tok: undefined /* Nothing */
                      });
                    null;
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: v701
                      })
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }}
                else {
                  const v4142 = v781[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:33:application', stdlib.UInt_max, '0')];
                  const v4143 = v4142[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:33:application', stdlib.UInt_max, '0')];
                  sim_r.txns.push({
                    kind: 'from',
                    to: v700,
                    tok: v701
                    });
                  sim_r.txns.push({
                    kind: 'from',
                    to: v771,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: v701
                    })
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }}}
            else {
              const v1215 = true;
              const v1216 = await txn1.getOutput('Bidder_optIn', 'v1215', ctc7, v1215);
              
              const v4155 = v770;
              const v4156 = v771;
              const v4157 = v772;
              const v4158 = v773;
              const v4159 = v774;
              const v4161 = v781;
              const v4162 = v1104;
              const v4163 = stdlib.le(v833, v768);
              const v4164 = v4163 ? v773 : false;
              if (v4164) {
                sim_r.isHalt = false;
                }
              else {
                const v4165 = await (async () => {
                  sim_r.txns.push({
                    kind: 'remote',
                    obj: v703,
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
                const v4166 = await txn1.getOutput('internal', 'v4165', ctc13, v4165);
                const v4167 = v4166[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:170:37:application', stdlib.UInt_max, '0')];
                const v4168 = stdlib.add(v1104, v4167);
                null;
                const v4170 = stdlib.gt(v774, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:182:25:decimal', stdlib.UInt_max, '0'));
                if (v4170) {
                  const v4171 = stdlib.safeAdd(v833, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
                  const v4199 = v781;
                  const v4200 = v4168;
                  const v4201 = stdlib.le(v833, v4171);
                  if (v4201) {
                    sim_r.isHalt = false;
                    }
                  else {
                    const v4203 = v781[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:213:41:application', stdlib.UInt_max, '0')];
                    const v4204 = v4203[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:213:41:application', stdlib.UInt_max, '0')];
                    sim_r.txns.push({
                      kind: 'from',
                      to: v771,
                      tok: v701
                      });
                    sim_r.txns.push({
                      kind: 'from',
                      to: v700,
                      tok: undefined /* Nothing */
                      });
                    null;
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: v701
                      })
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }}
                else {
                  const v4194 = v781[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:33:application', stdlib.UInt_max, '0')];
                  const v4195 = v4194[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:33:application', stdlib.UInt_max, '0')];
                  sim_r.txns.push({
                    kind: 'from',
                    to: v700,
                    tok: v701
                    });
                  sim_r.txns.push({
                    kind: 'from',
                    to: v771,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: v701
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
  const {data: [v832], secs: v834, time: v833, didSend: v317, from: v831 } = txn1;
  switch (v832[0]) {
    case 'Auctioneer_stopAuction0_123': {
      const v835 = v832[1];
      return;
      break;
      }
    case 'Bidder_bid0_123': {
      const v964 = v832[1];
      return;
      break;
      }
    case 'Bidder_optIn0_123': {
      const v1093 = v832[1];
      undefined /* setApiDetails */;
      const v1104 = stdlib.add(v782, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:12:18:decimal', stdlib.UInt_max, '1000000'));
      ;
      const v1177 = stdlib.ge(v1104, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:143:83:application', stdlib.UInt_max, '900000'));
      if (v1177) {
        const v1181 = stdlib.sub(v1104, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:143:83:application', stdlib.UInt_max, '900000'));
        ;
        const v1183 = stdlib.ge(v1181, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:144:84:application', stdlib.UInt_max, '100000'));
        if (v1183) {
          const v1187 = stdlib.sub(v1181, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:144:84:application', stdlib.UInt_max, '100000'));
          ;
          const v1188 = true;
          const v1189 = await txn1.getOutput('Bidder_optIn', 'v1188', ctc7, v1188);
          if (v317) {
            stdlib.protect(ctc12, await interact.out(v1093, v1189), {
              at: './src/contracts/auction.rsh:139:31:application',
              fs: ['at ./src/contracts/auction.rsh:139:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:139:31:function exp)', 'at ./src/contracts/auction.rsh:147:55:application call to "notify" (defined at: ./src/contracts/auction.rsh:142:50:function exp)', 'at ./src/contracts/auction.rsh:142:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:142:50:function exp)'],
              msg: 'out',
              who: 'Bidder_optIn'
              });
            }
          else {
            }
          
          const v3999 = v770;
          const v4000 = v771;
          const v4001 = v772;
          const v4002 = v773;
          const v4003 = v774;
          const v4005 = v781;
          const v4006 = v1187;
          const v4007 = stdlib.le(v833, v768);
          const v4008 = v4007 ? v773 : false;
          if (v4008) {
            return;
            }
          else {
            const v4009 = undefined /* Remote */;
            const v4010 = await txn1.getOutput('internal', 'v4009', ctc13, v4009);
            const v4011 = v4010[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:170:37:application', stdlib.UInt_max, '0')];
            const v4012 = stdlib.add(v1187, v4011);
            const v4013 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4011);
            stdlib.assert(v4013, {
              at: './src/contracts/auction.rsh:170:37:application',
              fs: [],
              msg: 'remote bill check',
              who: 'Bidder_optIn'
              });
            null;
            const v4014 = stdlib.gt(v774, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:182:25:decimal', stdlib.UInt_max, '0'));
            if (v4014) {
              const v4015 = stdlib.safeAdd(v833, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
              const v4043 = v781;
              const v4044 = v4012;
              const v4045 = stdlib.le(v833, v4015);
              if (v4045) {
                return;
                }
              else {
                const v4047 = v781[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:213:41:application', stdlib.UInt_max, '0')];
                const v4048 = v4047[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:213:41:application', stdlib.UInt_max, '0')];
                ;
                ;
                null;
                return;
                }}
            else {
              const v4038 = v781[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:33:application', stdlib.UInt_max, '0')];
              const v4039 = v4038[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:33:application', stdlib.UInt_max, '0')];
              ;
              ;
              return;
              }}}
        else {
          const v1195 = true;
          const v1196 = await txn1.getOutput('Bidder_optIn', 'v1195', ctc7, v1195);
          if (v317) {
            stdlib.protect(ctc12, await interact.out(v1093, v1196), {
              at: './src/contracts/auction.rsh:139:31:application',
              fs: ['at ./src/contracts/auction.rsh:139:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:139:31:function exp)', 'at ./src/contracts/auction.rsh:147:55:application call to "notify" (defined at: ./src/contracts/auction.rsh:142:50:function exp)', 'at ./src/contracts/auction.rsh:142:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:142:50:function exp)'],
              msg: 'out',
              who: 'Bidder_optIn'
              });
            }
          else {
            }
          
          const v4051 = v770;
          const v4052 = v771;
          const v4053 = v772;
          const v4054 = v773;
          const v4055 = v774;
          const v4057 = v781;
          const v4058 = v1181;
          const v4059 = stdlib.le(v833, v768);
          const v4060 = v4059 ? v773 : false;
          if (v4060) {
            return;
            }
          else {
            const v4061 = undefined /* Remote */;
            const v4062 = await txn1.getOutput('internal', 'v4061', ctc13, v4061);
            const v4063 = v4062[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:170:37:application', stdlib.UInt_max, '0')];
            const v4064 = stdlib.add(v1181, v4063);
            const v4065 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4063);
            stdlib.assert(v4065, {
              at: './src/contracts/auction.rsh:170:37:application',
              fs: [],
              msg: 'remote bill check',
              who: 'Bidder_optIn'
              });
            null;
            const v4066 = stdlib.gt(v774, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:182:25:decimal', stdlib.UInt_max, '0'));
            if (v4066) {
              const v4067 = stdlib.safeAdd(v833, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
              const v4095 = v781;
              const v4096 = v4064;
              const v4097 = stdlib.le(v833, v4067);
              if (v4097) {
                return;
                }
              else {
                const v4099 = v781[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:213:41:application', stdlib.UInt_max, '0')];
                const v4100 = v4099[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:213:41:application', stdlib.UInt_max, '0')];
                ;
                ;
                null;
                return;
                }}
            else {
              const v4090 = v781[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:33:application', stdlib.UInt_max, '0')];
              const v4091 = v4090[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:33:application', stdlib.UInt_max, '0')];
              ;
              ;
              return;
              }}}}
      else {
        const v1203 = stdlib.ge(v1104, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:144:84:application', stdlib.UInt_max, '100000'));
        if (v1203) {
          const v1207 = stdlib.sub(v1104, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:144:84:application', stdlib.UInt_max, '100000'));
          ;
          const v1208 = true;
          const v1209 = await txn1.getOutput('Bidder_optIn', 'v1208', ctc7, v1208);
          if (v317) {
            stdlib.protect(ctc12, await interact.out(v1093, v1209), {
              at: './src/contracts/auction.rsh:139:31:application',
              fs: ['at ./src/contracts/auction.rsh:139:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:139:31:function exp)', 'at ./src/contracts/auction.rsh:147:55:application call to "notify" (defined at: ./src/contracts/auction.rsh:142:50:function exp)', 'at ./src/contracts/auction.rsh:142:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:142:50:function exp)'],
              msg: 'out',
              who: 'Bidder_optIn'
              });
            }
          else {
            }
          
          const v4103 = v770;
          const v4104 = v771;
          const v4105 = v772;
          const v4106 = v773;
          const v4107 = v774;
          const v4109 = v781;
          const v4110 = v1207;
          const v4111 = stdlib.le(v833, v768);
          const v4112 = v4111 ? v773 : false;
          if (v4112) {
            return;
            }
          else {
            const v4113 = undefined /* Remote */;
            const v4114 = await txn1.getOutput('internal', 'v4113', ctc13, v4113);
            const v4115 = v4114[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:170:37:application', stdlib.UInt_max, '0')];
            const v4116 = stdlib.add(v1207, v4115);
            const v4117 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4115);
            stdlib.assert(v4117, {
              at: './src/contracts/auction.rsh:170:37:application',
              fs: [],
              msg: 'remote bill check',
              who: 'Bidder_optIn'
              });
            null;
            const v4118 = stdlib.gt(v774, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:182:25:decimal', stdlib.UInt_max, '0'));
            if (v4118) {
              const v4119 = stdlib.safeAdd(v833, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
              const v4147 = v781;
              const v4148 = v4116;
              const v4149 = stdlib.le(v833, v4119);
              if (v4149) {
                return;
                }
              else {
                const v4151 = v781[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:213:41:application', stdlib.UInt_max, '0')];
                const v4152 = v4151[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:213:41:application', stdlib.UInt_max, '0')];
                ;
                ;
                null;
                return;
                }}
            else {
              const v4142 = v781[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:33:application', stdlib.UInt_max, '0')];
              const v4143 = v4142[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:33:application', stdlib.UInt_max, '0')];
              ;
              ;
              return;
              }}}
        else {
          const v1215 = true;
          const v1216 = await txn1.getOutput('Bidder_optIn', 'v1215', ctc7, v1215);
          if (v317) {
            stdlib.protect(ctc12, await interact.out(v1093, v1216), {
              at: './src/contracts/auction.rsh:139:31:application',
              fs: ['at ./src/contracts/auction.rsh:139:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:139:31:function exp)', 'at ./src/contracts/auction.rsh:147:55:application call to "notify" (defined at: ./src/contracts/auction.rsh:142:50:function exp)', 'at ./src/contracts/auction.rsh:142:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:142:50:function exp)'],
              msg: 'out',
              who: 'Bidder_optIn'
              });
            }
          else {
            }
          
          const v4155 = v770;
          const v4156 = v771;
          const v4157 = v772;
          const v4158 = v773;
          const v4159 = v774;
          const v4161 = v781;
          const v4162 = v1104;
          const v4163 = stdlib.le(v833, v768);
          const v4164 = v4163 ? v773 : false;
          if (v4164) {
            return;
            }
          else {
            const v4165 = undefined /* Remote */;
            const v4166 = await txn1.getOutput('internal', 'v4165', ctc13, v4165);
            const v4167 = v4166[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:170:37:application', stdlib.UInt_max, '0')];
            const v4168 = stdlib.add(v1104, v4167);
            const v4169 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4167);
            stdlib.assert(v4169, {
              at: './src/contracts/auction.rsh:170:37:application',
              fs: [],
              msg: 'remote bill check',
              who: 'Bidder_optIn'
              });
            null;
            const v4170 = stdlib.gt(v774, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:182:25:decimal', stdlib.UInt_max, '0'));
            if (v4170) {
              const v4171 = stdlib.safeAdd(v833, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
              const v4199 = v781;
              const v4200 = v4168;
              const v4201 = stdlib.le(v833, v4171);
              if (v4201) {
                return;
                }
              else {
                const v4203 = v781[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:213:41:application', stdlib.UInt_max, '0')];
                const v4204 = v4203[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:213:41:application', stdlib.UInt_max, '0')];
                ;
                ;
                null;
                return;
                }}
            else {
              const v4194 = v781[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:33:application', stdlib.UInt_max, '0')];
              const v4195 = v4194[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:33:application', stdlib.UInt_max, '0')];
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
    Auctioneer_acceptSale0_443: ctc12,
    Auctioneer_rejectSale0_443: ctc12
    });
  const ctc19 = stdlib.T_Tuple([ctc1, ctc1, ctc17]);
  const ctc20 = stdlib.T_Array(ctc19, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  
  const v677 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v678 = [v677];
  const v682 = stdlib.protect(ctc6, interact.getAuction, 'for Seller\'s interact field getAuction');
  const v683 = v682.adminContract;
  const v684 = v682.deadline;
  const v685 = v682.description;
  const v686 = v682.owner;
  const v687 = v682.price;
  const v688 = v682.title;
  const v689 = v682.tokenId;
  
  const v699 = {
    deadline: v684,
    description: v685,
    owner: v686,
    price: v687,
    title: v688
    };
  
  const txn1 = await (ctc.sendrecv({
    args: [v689, v699, v683],
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
      
      
      const {data: [v701, v702, v703], secs: v705, time: v704, didSend: v44, from: v700 } = txn1;
      
      const v706 = v678[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:71:16:dot', stdlib.UInt_max, '0')];
      const v707 = stdlib.Array_set(v706, '0', stdlib.checkedBigNumberify('./src/contracts/auction.rsh:71:16:dot', stdlib.UInt_max, '0'));
      const v708 = stdlib.Array_set(v678, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:71:16:dot', stdlib.UInt_max, '0'), v707);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v701
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
  const {data: [v701, v702, v703], secs: v705, time: v704, didSend: v44, from: v700 } = txn1;
  const v706 = v678[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:71:16:dot', stdlib.UInt_max, '0')];
  const v707 = stdlib.Array_set(v706, '0', stdlib.checkedBigNumberify('./src/contracts/auction.rsh:71:16:dot', stdlib.UInt_max, '0'));
  const v708 = stdlib.Array_set(v678, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:71:16:dot', stdlib.UInt_max, '0'), v707);
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v700, v701, v702, v703, v708],
    evt_cnt: 0,
    funcNum: 1,
    lct: v704,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./src/contracts/auction.rsh:73:16:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:11:13:decimal', stdlib.UInt_max, '1'), v701]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v712, time: v711, didSend: v51, from: v710 } = txn2;
      
      ;
      const v713 = v708[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:73:16:dot', stdlib.UInt_max, '0')];
      const v714 = v713[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:73:16:dot', stdlib.UInt_max, '0')];
      const v715 = stdlib.add(v714, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:11:13:decimal', stdlib.UInt_max, '1'));
      const v717 = stdlib.Array_set(v713, '0', v715);
      const v718 = stdlib.Array_set(v708, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:73:16:dot', stdlib.UInt_max, '0'), v717);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:11:13:decimal', stdlib.UInt_max, '1'),
        kind: 'to',
        tok: v701
        });
      const v722 = [];
      const v723 = await (async () => {
        sim_r.txns.push({
          kind: 'remote',
          obj: v703,
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
      const v724 = await txn2.getOutput('internal', 'v723', ctc8, v723);
      const v726 = v724[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:85:48:application', stdlib.UInt_max, '0')];
      const v727 = v724[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:85:48:application', stdlib.UInt_max, '1')];
      const v736 = await (async () => {
        sim_r.txns.push({
          kind: 'remote',
          obj: v703,
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
      const v737 = await txn2.getOutput('internal', 'v736', ctc9, v736);
      const v739 = v737[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:86:68:application', stdlib.UInt_max, '0')];
      const v740 = v737[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:86:68:application', stdlib.UInt_max, '1')];
      const v744 = stdlib.add(v726, v739);
      const v746 = v711;
      const v747 = await ctc.getContractInfo();
      const v748 = v702.title;
      const v749 = v702.description;
      const v750 = v702.price;
      const v754 = {
        blockCreated: v711,
        contractInfo: v747,
        description: v749,
        id: v727,
        owner: v700,
        price: v750,
        title: v748,
        tokenId: v701
        };
      const v755 = await (async () => {
        sim_r.txns.push({
          kind: 'remote',
          obj: v703,
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
      const v756 = await txn2.getOutput('internal', 'v755', ctc11, v755);
      const v758 = v756[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:101:39:application', stdlib.UInt_max, '0')];
      const v763 = stdlib.add(v744, v758);
      const v767 = v702.deadline;
      const v768 = stdlib.safeAdd(v711, v767);
      null;
      const v769 = {
        blockEnded: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        id: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        lastBid: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v770 = v769;
      const v771 = v700;
      const v772 = true;
      const v773 = true;
      const v774 = stdlib.checkedBigNumberify('./src/contracts/auction.rsh:111:25:decimal', stdlib.UInt_max, '0');
      const v775 = v711;
      const v781 = v718;
      const v782 = v763;
      
      if (await (async () => {
        const v791 = stdlib.le(v775, v768);
        const v792 = v791 ? v773 : false;
        
        return v792;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v1228 = await (async () => {
          sim_r.txns.push({
            kind: 'remote',
            obj: v703,
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
        const v1229 = await txn3.getOutput('internal', 'v1228', ctc11, v1228);
        const v1231 = v1229[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:170:37:application', stdlib.UInt_max, '0')];
        const v1236 = stdlib.add(v782, v1231);
        null;
        const v1241 = stdlib.gt(v774, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:182:25:decimal', stdlib.UInt_max, '0'));
        if (v1241) {
          const v1243 = stdlib.safeAdd(v775, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
          const v1244 = true;
          const v1245 = true;
          const v1246 = v775;
          const v1252 = v781;
          const v1253 = v1236;
          
          if (await (async () => {
            const v1260 = stdlib.le(v1246, v1243);
            const v1261 = v1260 ? v1245 : false;
            
            return v1261;})()) {
            sim_r.isHalt = false;
            }
          else {
            if (v1244) {
              const v1332 = v1252[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:213:41:application', stdlib.UInt_max, '0')];
              const v1333 = v1332[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:213:41:application', stdlib.UInt_max, '0')];
              sim_r.txns.push({
                kind: 'from',
                to: v771,
                tok: v701
                });
              sim_r.txns.push({
                kind: 'from',
                to: v700,
                tok: undefined /* Nothing */
                });
              null;
              sim_r.txns.push({
                kind: 'halt',
                tok: v701
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }
            else {
              const v1354 = v1252[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:223:41:application', stdlib.UInt_max, '0')];
              const v1355 = v1354[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:223:41:application', stdlib.UInt_max, '0')];
              sim_r.txns.push({
                kind: 'from',
                to: v700,
                tok: v701
                });
              sim_r.txns.push({
                kind: 'from',
                to: v771,
                tok: undefined /* Nothing */
                });
              null;
              sim_r.txns.push({
                kind: 'halt',
                tok: v701
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}}
        else {
          const v1376 = v781[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:33:application', stdlib.UInt_max, '0')];
          const v1377 = v1376[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:33:application', stdlib.UInt_max, '0')];
          sim_r.txns.push({
            kind: 'from',
            to: v700,
            tok: v701
            });
          sim_r.txns.push({
            kind: 'from',
            to: v771,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v701
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
  const {data: [], secs: v712, time: v711, didSend: v51, from: v710 } = txn2;
  ;
  const v713 = v708[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:73:16:dot', stdlib.UInt_max, '0')];
  const v714 = v713[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:73:16:dot', stdlib.UInt_max, '0')];
  const v715 = stdlib.add(v714, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:11:13:decimal', stdlib.UInt_max, '1'));
  const v717 = stdlib.Array_set(v713, '0', v715);
  const v718 = stdlib.Array_set(v708, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:73:16:dot', stdlib.UInt_max, '0'), v717);
  ;
  const v719 = stdlib.addressEq(v700, v710);
  stdlib.assert(v719, {
    at: './src/contracts/auction.rsh:73:16:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Seller'
    });
  const v722 = [];
  const v723 = undefined /* Remote */;
  const v724 = await txn2.getOutput('internal', 'v723', ctc8, v723);
  const v726 = v724[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:85:48:application', stdlib.UInt_max, '0')];
  const v727 = v724[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:85:48:application', stdlib.UInt_max, '1')];
  const v732 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v726);
  stdlib.assert(v732, {
    at: './src/contracts/auction.rsh:85:48:application',
    fs: [],
    msg: 'remote bill check',
    who: 'Seller'
    });
  const v736 = undefined /* Remote */;
  const v737 = await txn2.getOutput('internal', 'v736', ctc9, v736);
  const v739 = v737[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:86:68:application', stdlib.UInt_max, '0')];
  const v740 = v737[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:86:68:application', stdlib.UInt_max, '1')];
  const v744 = stdlib.add(v726, v739);
  const v745 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v739);
  stdlib.assert(v745, {
    at: './src/contracts/auction.rsh:86:68:application',
    fs: [],
    msg: 'remote bill check',
    who: 'Seller'
    });
  const v746 = v711;
  const v747 = await ctc.getContractInfo();
  const v748 = v702.title;
  const v749 = v702.description;
  const v750 = v702.price;
  const v754 = {
    blockCreated: v711,
    contractInfo: v747,
    description: v749,
    id: v727,
    owner: v700,
    price: v750,
    title: v748,
    tokenId: v701
    };
  const v755 = undefined /* Remote */;
  const v756 = await txn2.getOutput('internal', 'v755', ctc11, v755);
  const v758 = v756[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:101:39:application', stdlib.UInt_max, '0')];
  const v763 = stdlib.add(v744, v758);
  const v764 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v758);
  stdlib.assert(v764, {
    at: './src/contracts/auction.rsh:101:39:application',
    fs: [],
    msg: 'remote bill check',
    who: 'Seller'
    });
  const v767 = v702.deadline;
  const v768 = stdlib.safeAdd(v711, v767);
  null;
  const v769 = {
    blockEnded: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    id: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    lastBid: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  let v770 = v769;
  let v771 = v700;
  let v772 = true;
  let v773 = true;
  let v774 = stdlib.checkedBigNumberify('./src/contracts/auction.rsh:111:25:decimal', stdlib.UInt_max, '0');
  let v775 = v711;
  let v781 = v718;
  let v782 = v763;
  
  let txn3 = txn2;
  while (await (async () => {
    const v791 = stdlib.le(v775, v768);
    const v792 = v791 ? v773 : false;
    
    return v792;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 5,
      out_tys: [ctc14],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v832], secs: v834, time: v833, didSend: v317, from: v831 } = txn4;
    switch (v832[0]) {
      case 'Auctioneer_stopAuction0_123': {
        const v835 = v832[1];
        undefined /* setApiDetails */;
        ;
        null;
        const v849 = {
          blockEnded: v833,
          id: v727,
          lastBid: v774
          };
        await txn4.getOutput('Auctioneer_stopAuction', 'v849', ctc15, v849);
        const cv770 = v849;
        const cv771 = v771;
        const cv772 = v772;
        const cv773 = false;
        const cv774 = v774;
        const cv775 = v833;
        const cv781 = v781;
        const cv782 = v782;
        
        v770 = cv770;
        v771 = cv771;
        v772 = cv772;
        v773 = cv773;
        v774 = cv774;
        v775 = cv775;
        v781 = cv781;
        v782 = cv782;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'Bidder_bid0_123': {
        const v964 = v832[1];
        undefined /* setApiDetails */;
        const v970 = v964[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:125:30:spread', stdlib.UInt_max, '0')];
        const v971 = stdlib.gt(v970, v774);
        stdlib.assert(v971, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/auction.rsh:126:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/auction.rsh:125:49:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:125:49:function exp)', 'at ./src/contracts/auction.rsh:108:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:125:49:function exp)', 'at ./src/contracts/auction.rsh:108:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:108:31:function exp)'],
          msg: 'Your bid is too low, please try again',
          who: 'Seller'
          });
        const v975 = stdlib.add(v782, v970);
        ;
        if (v772) {
          const v1026 = undefined /* Remote */;
          const v1027 = await txn4.getOutput('internal', 'v1026', ctc11, v1026);
          const v1029 = v1027[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:132:91:application', stdlib.UInt_max, '0')];
          const v1034 = stdlib.add(v975, v1029);
          const v1035 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1029);
          stdlib.assert(v1035, {
            at: './src/contracts/auction.rsh:132:91:application',
            fs: ['at ./src/contracts/auction.rsh:129:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:129:50:function exp)'],
            msg: 'remote bill check',
            who: 'Seller'
            });
          null;
          const v1036 = [v831, v774];
          await txn4.getOutput('Bidder_bid', 'v1036', ctc16, v1036);
          const cv770 = v770;
          const cv771 = v831;
          const cv772 = false;
          const cv773 = v773;
          const cv774 = v970;
          const cv775 = v833;
          const cv781 = v781;
          const cv782 = v1034;
          
          v770 = cv770;
          v771 = cv771;
          v772 = cv772;
          v773 = cv773;
          v774 = cv774;
          v775 = cv775;
          v781 = cv781;
          v782 = cv782;
          
          txn3 = txn4;
          continue;}
        else {
          const v999 = stdlib.sub(v975, v774);
          ;
          const v1003 = undefined /* Remote */;
          const v1004 = await txn4.getOutput('internal', 'v1003', ctc11, v1003);
          const v1006 = v1004[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:132:91:application', stdlib.UInt_max, '0')];
          const v1011 = stdlib.add(v999, v1006);
          const v1012 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1006);
          stdlib.assert(v1012, {
            at: './src/contracts/auction.rsh:132:91:application',
            fs: ['at ./src/contracts/auction.rsh:129:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:129:50:function exp)'],
            msg: 'remote bill check',
            who: 'Seller'
            });
          null;
          const v1013 = [v831, v774];
          await txn4.getOutput('Bidder_bid', 'v1013', ctc16, v1013);
          const cv770 = v770;
          const cv771 = v831;
          const cv772 = false;
          const cv773 = v773;
          const cv774 = v970;
          const cv775 = v833;
          const cv781 = v781;
          const cv782 = v1011;
          
          v770 = cv770;
          v771 = cv771;
          v772 = cv772;
          v773 = cv773;
          v774 = cv774;
          v775 = cv775;
          v781 = cv781;
          v782 = cv782;
          
          txn3 = txn4;
          continue;}
        break;
        }
      case 'Bidder_optIn0_123': {
        const v1093 = v832[1];
        undefined /* setApiDetails */;
        const v1104 = stdlib.add(v782, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:12:18:decimal', stdlib.UInt_max, '1000000'));
        ;
        const v1177 = stdlib.ge(v1104, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:143:83:application', stdlib.UInt_max, '900000'));
        if (v1177) {
          const v1181 = stdlib.sub(v1104, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:143:83:application', stdlib.UInt_max, '900000'));
          ;
          const v1183 = stdlib.ge(v1181, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:144:84:application', stdlib.UInt_max, '100000'));
          if (v1183) {
            const v1187 = stdlib.sub(v1181, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:144:84:application', stdlib.UInt_max, '100000'));
            ;
            const v1188 = true;
            await txn4.getOutput('Bidder_optIn', 'v1188', ctc17, v1188);
            const cv770 = v770;
            const cv771 = v771;
            const cv772 = v772;
            const cv773 = v773;
            const cv774 = v774;
            const cv775 = v833;
            const cv781 = v781;
            const cv782 = v1187;
            
            v770 = cv770;
            v771 = cv771;
            v772 = cv772;
            v773 = cv773;
            v774 = cv774;
            v775 = cv775;
            v781 = cv781;
            v782 = cv782;
            
            txn3 = txn4;
            continue;}
          else {
            const v1195 = true;
            await txn4.getOutput('Bidder_optIn', 'v1195', ctc17, v1195);
            const cv770 = v770;
            const cv771 = v771;
            const cv772 = v772;
            const cv773 = v773;
            const cv774 = v774;
            const cv775 = v833;
            const cv781 = v781;
            const cv782 = v1181;
            
            v770 = cv770;
            v771 = cv771;
            v772 = cv772;
            v773 = cv773;
            v774 = cv774;
            v775 = cv775;
            v781 = cv781;
            v782 = cv782;
            
            txn3 = txn4;
            continue;}}
        else {
          const v1203 = stdlib.ge(v1104, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:144:84:application', stdlib.UInt_max, '100000'));
          if (v1203) {
            const v1207 = stdlib.sub(v1104, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:144:84:application', stdlib.UInt_max, '100000'));
            ;
            const v1208 = true;
            await txn4.getOutput('Bidder_optIn', 'v1208', ctc17, v1208);
            const cv770 = v770;
            const cv771 = v771;
            const cv772 = v772;
            const cv773 = v773;
            const cv774 = v774;
            const cv775 = v833;
            const cv781 = v781;
            const cv782 = v1207;
            
            v770 = cv770;
            v771 = cv771;
            v772 = cv772;
            v773 = cv773;
            v774 = cv774;
            v775 = cv775;
            v781 = cv781;
            v782 = cv782;
            
            txn3 = txn4;
            continue;}
          else {
            const v1215 = true;
            await txn4.getOutput('Bidder_optIn', 'v1215', ctc17, v1215);
            const cv770 = v770;
            const cv771 = v771;
            const cv772 = v772;
            const cv773 = v773;
            const cv774 = v774;
            const cv775 = v833;
            const cv781 = v781;
            const cv782 = v1104;
            
            v770 = cv770;
            v771 = cv771;
            v772 = cv772;
            v773 = cv773;
            v774 = cv774;
            v775 = cv775;
            v781 = cv781;
            v782 = cv782;
            
            txn3 = txn4;
            continue;}}
        break;
        }
      }
    
    }
  const v1228 = undefined /* Remote */;
  const v1229 = await txn3.getOutput('internal', 'v1228', ctc11, v1228);
  const v1231 = v1229[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:170:37:application', stdlib.UInt_max, '0')];
  const v1236 = stdlib.add(v782, v1231);
  const v1237 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1231);
  stdlib.assert(v1237, {
    at: './src/contracts/auction.rsh:170:37:application',
    fs: [],
    msg: 'remote bill check',
    who: 'Seller'
    });
  null;
  const v1241 = stdlib.gt(v774, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:182:25:decimal', stdlib.UInt_max, '0'));
  if (v1241) {
    const v1243 = stdlib.safeAdd(v775, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
    let v1244 = true;
    let v1245 = true;
    let v1246 = v775;
    let v1252 = v781;
    let v1253 = v1236;
    
    let txn4 = txn3;
    while (await (async () => {
      const v1260 = stdlib.le(v1246, v1243);
      const v1261 = v1260 ? v1245 : false;
      
      return v1261;})()) {
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc18],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v1285], secs: v1287, time: v1286, didSend: v568, from: v1284 } = txn5;
      switch (v1285[0]) {
        case 'Auctioneer_acceptSale0_443': {
          const v1288 = v1285[1];
          undefined /* setApiDetails */;
          ;
          const v1295 = true;
          await txn5.getOutput('Auctioneer_acceptSale', 'v1295', ctc17, v1295);
          const cv1244 = true;
          const cv1245 = false;
          const cv1246 = v1286;
          const cv1252 = v1252;
          const cv1253 = v1253;
          
          v1244 = cv1244;
          v1245 = cv1245;
          v1246 = cv1246;
          v1252 = cv1252;
          v1253 = cv1253;
          
          txn4 = txn5;
          continue;
          break;
          }
        case 'Auctioneer_rejectSale0_443': {
          const v1310 = v1285[1];
          undefined /* setApiDetails */;
          ;
          const v1325 = false;
          await txn5.getOutput('Auctioneer_rejectSale', 'v1325', ctc17, v1325);
          const cv1244 = false;
          const cv1245 = false;
          const cv1246 = v1286;
          const cv1252 = v1252;
          const cv1253 = v1253;
          
          v1244 = cv1244;
          v1245 = cv1245;
          v1246 = cv1246;
          v1252 = cv1252;
          v1253 = cv1253;
          
          txn4 = txn5;
          continue;
          break;
          }
        }
      
      }
    if (v1244) {
      const v1332 = v1252[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:213:41:application', stdlib.UInt_max, '0')];
      const v1333 = v1332[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:213:41:application', stdlib.UInt_max, '0')];
      ;
      ;
      null;
      return;
      }
    else {
      const v1354 = v1252[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:223:41:application', stdlib.UInt_max, '0')];
      const v1355 = v1354[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:223:41:application', stdlib.UInt_max, '0')];
      ;
      ;
      null;
      return;
      }}
  else {
    const v1376 = v781[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:33:application', stdlib.UInt_max, '0')];
    const v1377 = v1376[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:33:application', stdlib.UInt_max, '0')];
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
  appApproval: `ByAPAAEGBAigjQYFIKD3NpaHyKoBs7bPiAjSuNG7DqCbvIEBAsCEPSYGAQEBAAAFYXBwSUQE4gx+EgR5hHzvIjUAMRhBCqUqZEkiWzUBSSEEWzUCgRBbNQg2GgAXSUEAdyI1BCM1BkkhCQxAAD5JIQoMQAAjSSELDEAADiELEkQqNf8pNP9QQgQ1IQoSRCo1/yg0/1BCBCchCRJEKjX/gAECNP9QIQSvUEIASkkhDAxAABAhDBJENhoBNf8oNP9QQgAzgaCL6kwSRCo1/yk0/1AhBK9QQgAeNhoCFzUENhoDNhoBF0klDEAEekkhBgxAA8whBhJEIQQ0ARJENARJIhJMNAISEUQpZChkUEk1A0lKSkpKSkpKSVcAIDX/IQdbNf6BKFs1/UgqNfyBMFs1+1c4IDX6gVhbNfmBYFs1+FdoFDX3gXxbNfZXhBg19VecIDX0V7wBFzXzV70BFzXygb4BWzXxV8YRNfCB1wFbNe9JNQU17oAEAKxyzTTuULA07iJVSSMMQALgSSENDEABPSENEkQ07yEOCDXtIQ6ICW007SEID0EAnjTtIQgJNeyxIrIBIQiyCCOyEDT6sgezNOwhBQ9BAEmxIrIBIQWyCCOyEDT/sgezgAkAAAAAAAAEpAGwKDUHNP80/jT9NPw0+zT6NPk0+DT3NPY09TT0NPM08jTxMgY08DTsIQUJQgX8gAkAAAAAAAAEqwGwKDUHNP80/jT9NPw0+zT6NPk0+DT3NPY09TT0NPM08jTxMgY08DTsQgXGNO0hBQ9BAEmxIrIBIQWyCCOyEDT/sgezgAkAAAAAAAAEuAGwKDUHNP80/jT9NPw0+zT6NPk0+DT3NPY09TT0NPM08jTxMgY08DTtIQUJQgV1gAkAAAAAAAAEvwGwKDUHNP80/jT9NPw0+zT6NPk0+DT3NPY09TT0NPM08jTxMgY08DTtQgU/SDTuVwEINe007RdJNew08Q1ENO807Ag16zTsiAgiNPNBALMrNP0WUAM16TIKeDXoMgpgNOgJFjXnsSKyASSyEDT9shgnBLIaNPsWshoxAEmyHLIaszIKYDToCTTnFwkWtwA+VwQAUDXqgAgAAAAAAAAEAjTqULA06kk16SJbNegiNOgSRCcFNPsWUDTsFlAxAFCwgAgAAAAAAAAEDDEANPEWUFCwMQA08RZQNQc0/zT+NP00/DT7NPo0+TT4NPc09jT1MQAiNPI07DIGNPA06zToCEIEabEisgE08bIII7IQNPSyB7MrNP0WUAM16TIKeDXoMgpgNOgJFjXnsSKyASSyEDT9shgnBLIaNPsWshoxAEmyHLIaszIKYDToCTTnFwkWtwA+VwQAUDXqgAgAAAAAAAAD6zTqULA06kk16SJbNegiNOgSRCcFNPsWUDTsFlAxAFCwgAgAAAAAAAAD9TEANPEWUFCwMQA08RZQNQc0/zT+NP00/DT7NPo0+TT4NPc09jT1MQAiNPI07DIGNPA06zTxCTToCEIDo0iABLijSos0+xZQNPEWULA0+xYyBhZQNPEWUDXtgAgAAAAAAAADUTTtULA07TUHNP80/jT9NPw0+zT6NPk0+DT3NPY07TT0NPMiNPEyBjTwNO9CA05IJDQBEkQ0BEkiEkw0AhIRRClkKGRQSTUDSUpKSlcAIDX/IQdbNf5XKBQ1/Vc8IDX8gVxbNfuBZFs1+ldsETX5gX1bNfhJNQU194AErnvUBjT3ULA09yJVQAAmgAkAAAAAAAAFDwGwKDUHNP80/jT9NPw0+zT6IyIyBjT5NPhCBDmACQAAAAAAAAUtALApNQc0/zT+NP00/DT7NPoiIjIGNPk0+EIEE0kjDEAB8SMSRLEisgEkshA0CLIYsyM0ARJENARJIhJMNAISEUQpZChkUEk1A0lKSVcAIDX/IQdbNf5XKJQ1/YG8AVs1/FfEETX7gASai5F0sDT7VwARNfojNP6IBWI0/zEAEkQqNfkrNPwWUAM19zIKeDX2MgpgNPYJFjX1sSKyASSyEDT8shiABG3tvYCyGrMyCmA09gk09RcJFrcAPlcEAFA1+IAIAAAAAAAAAtM0+FCwNPhJNfciWzX2NPchBFs19SI09hJEKzT8FlADNfMyCng18jIKYDTyCRY18bEisgEkshA0/LIYgARsreRvshqzMgpgNPIJNPEXCRa3AD5XBABQNfSACAAAAAAAAALgNPRQsDT0STXzIls18iI08hJEMRg18TT9V4AUNfArNPwWUAM17jIKeDXtMgpgNO0JFjXssSKyASSyEDT8shiABLlwy6SyGjT1FjTxFlAyBhZQNP9QNPBQNP1XCFBQNP1XeAhQNP4WULIaszIKYDTtCTTsFwkWtwA+VwQAUDXvgAgAAAAAAAAC8zTvULA070k17iJbNe0iNO0SRIAEjw81BjT1FlA0/1CwNP80/jT8NPk09TTzVwggMgY08TTwMgY0/SJbCIEYrzT/IyMiMgY0+zT6SSJbIwgWXABcADT2NPIINO0IQgCwSIHAmgyIA6mxIrIBJLIQIrIYgAYHMQAyCRKyHoABB7Ifs7Q9NQgiNAESRDQESSISTDQCEhFESTUFSUkiWzX/VwiUNf6BnAFbNf2ABO0piOM0/xZQNP5QNP0WULCBEa9JNfxJVwARIQSvXABcADX7IQWIAz2xIrIBIrISJbIQMgqyFDT/shGzMQA0/xZQNP5QNP0WUDT7UClLAVcAf2coSwFXf1ZnSCM1ATIGNQJCAqg1/zX+Nf01/DX7Nfo1+TX4Nfc19jX1NfQ18zXyNfE18DXvNe40/TT3DjT7EEEAVzTuNO8WUDTwFlA08VA08hZQNPNQNPQWUDT1FlA09lA09xZQNPhQNPlQNPoWUQcIUChQNPwWUDT+UDT/FlApSwFXAH9nKEsBV39gZ0ghBDUBMgY1AkICIis08BZQAzXsMgp4NesyCmA06wkWNeqxIrIBJLIQNPCyGIAEovDaAbIaNPiyGrMyCmA06wk06hcJFrcAPlcEAFA17YAIAAAAAAAABMw07VCwNO1JNewiWzXrNP806wg16iI06xJEgAR4fnW+NPIWUDT8FlA07lA09RZQNPQWUDT2ULA0/CINQQAaNO407zT2NPk0/DT9gTIIIyM0/TT+NOpCAEOxIrIBNP5XABEiW7ISJbIQNO6yFDTvshGzsSKyATTqsggjshA0+bIHs7EisgEishIlshAyCbIVMgqyFDTvshGzQgEQNf81/jX9Nfw1+zX6Nfk1+DX3NfY19TT9NPoONPwQQQA0NPU09hZQNPdQNPhQNPkWUDT6FlA0/lA0/xZQKUsBVwB/ZyhLAVd/BmdIJDUBMgY1AkIA5zT7QQBbsSKyATT+VwARIluyEiWyEDT4shQ09rIRs7EisgE0/7III7IQNPWyB7OABO6mmcQ091A0+RZQNPVQNPhQNPYWULCxIrIBIrISJbIQMgmyFTIKshQ09rIRs0IAW7EisgE0/lcAESJbshIlshA09bIUNPayEbOxIrIBNP+yCCOyEDT4sgezgASlT5rNNPdQNPkWUDT1UDT4UDT2FlCwsSKyASKyEiWyEDIJshUyCrIUNPayEbNCAAAxGSEGEkSxIrIBJLIQNAiyGCEGshmzsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFjQIFlBQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkSBAzE1EkQiMTYSRCIxNxJEIjUBIjUCIjUIQv+nNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBAlEkQ4EU8CEkQ4EhJEiQ==`,
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
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"components":[{"internalType":"uint256","name":"_deadline","type":"uint256"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes16","name":"elem2","type":"bytes16"}],"internalType":"struct T8","name":"_description","type":"tuple"},{"internalType":"address payable","name":"_owner","type":"address"},{"internalType":"uint256","name":"_price","type":"uint256"},{"internalType":"bytes20","name":"_title","type":"bytes20"}],"internalType":"struct T9","name":"elem2","type":"tuple"},{"internalType":"address payable","name":"elem3","type":"address"}],"internalType":"struct T10","name":"v4229","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"components":[{"internalType":"uint256","name":"_deadline","type":"uint256"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes16","name":"elem2","type":"bytes16"}],"internalType":"struct T8","name":"_description","type":"tuple"},{"internalType":"address payable","name":"_owner","type":"address"},{"internalType":"uint256","name":"_price","type":"uint256"},{"internalType":"bytes20","name":"_title","type":"bytes20"}],"internalType":"struct T9","name":"elem2","type":"tuple"},{"internalType":"address payable","name":"elem3","type":"address"}],"indexed":false,"internalType":"struct T10","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T5","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_Auctioneer_acceptSale0_443","type":"bool"},{"internalType":"bool","name":"_Auctioneer_rejectSale0_443","type":"bool"}],"internalType":"struct T3","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e4","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T6","name":"which","type":"uint8"},{"internalType":"bool","name":"_Auctioneer_stopAuction0_123","type":"bool"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T5","name":"_Bidder_bid0_123","type":"tuple"},{"internalType":"bool","name":"_Bidder_optIn0_123","type":"bool"}],"internalType":"struct T6","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T7","name":"_a","type":"tuple"}],"name":"_reach_e5","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"indexed":false,"internalType":"struct T17","name":"v0","type":"tuple"}],"name":"_reach_oe_v1003","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"indexed":false,"internalType":"struct T1","name":"v0","type":"tuple"}],"name":"_reach_oe_v1013","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"indexed":false,"internalType":"struct T17","name":"v0","type":"tuple"}],"name":"_reach_oe_v1026","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"indexed":false,"internalType":"struct T1","name":"v0","type":"tuple"}],"name":"_reach_oe_v1036","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1188","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1195","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1208","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1215","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"indexed":false,"internalType":"struct T17","name":"v0","type":"tuple"}],"name":"_reach_oe_v1228","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1295","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1325","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"indexed":false,"internalType":"struct T14","name":"v0","type":"tuple"}],"name":"_reach_oe_v723","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"}],"indexed":false,"internalType":"struct T15","name":"v0","type":"tuple"}],"name":"_reach_oe_v736","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"indexed":false,"internalType":"struct T17","name":"v0","type":"tuple"}],"name":"_reach_oe_v755","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"blockEnded","type":"uint256"},{"internalType":"uint256","name":"lastBid","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v0","type":"tuple"}],"name":"_reach_oe_v849","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes20","name":"v0","type":"bytes20"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"},{"indexed":false,"internalType":"address payable","name":"v2","type":"address"},{"indexed":false,"internalType":"address payable","name":"v3","type":"address"},{"indexed":false,"internalType":"address payable","name":"v4","type":"address"}],"name":"accepted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"},{"indexed":false,"internalType":"address payable","name":"v2","type":"address"}],"name":"bidSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"},{"indexed":false,"internalType":"address payable","name":"v1","type":"address"}],"name":"created","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"},{"indexed":false,"internalType":"address payable","name":"v2","type":"address"},{"indexed":false,"internalType":"address payable","name":"v3","type":"address"},{"indexed":false,"internalType":"uint256","name":"v4","type":"uint256"},{"indexed":false,"internalType":"bytes20","name":"v5","type":"bytes20"}],"name":"down","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"}],"name":"endSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes20","name":"v0","type":"bytes20"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"},{"indexed":false,"internalType":"address payable","name":"v2","type":"address"},{"indexed":false,"internalType":"address payable","name":"v3","type":"address"},{"indexed":false,"internalType":"address payable","name":"v4","type":"address"}],"name":"rejected","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"Auctioneer_acceptSale","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Auctioneer_rejectSale","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Auctioneer_stopAuction","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"blockEnded","type":"uint256"},{"internalType":"uint256","name":"lastBid","type":"uint256"}],"internalType":"struct T0","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v4219","type":"uint256"}],"name":"Bidder_bid","outputs":[{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T1","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Bidder_optIn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T5","name":"v4231","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_Auctioneer_acceptSale0_443","type":"bool"},{"internalType":"bool","name":"_Auctioneer_rejectSale0_443","type":"bool"}],"internalType":"struct T3","name":"elem1","type":"tuple"}],"internalType":"struct T4","name":"v4246","type":"tuple"}],"name":"_reachp_4","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T6","name":"which","type":"uint8"},{"internalType":"bool","name":"_Auctioneer_stopAuction0_123","type":"bool"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T5","name":"_Bidder_bid0_123","type":"tuple"},{"internalType":"bool","name":"_Bidder_optIn0_123","type":"bool"}],"internalType":"struct T6","name":"elem1","type":"tuple"}],"internalType":"struct T7","name":"v4258","type":"tuple"}],"name":"_reachp_5","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x601f196001600160401b036080620044ec38819003601f8101851683018481118482101762000555578392829160405283398101036101408112620006405760405191608083018381108582111762000555576040528051835262000067602082016200067d565b602084015260e0603f1983011262000640576060604051926200008a8462000645565b60408301518452605f1901126200064057604051620000a98162000661565b606082015181526080820151602082015260a08201516001600160801b031981168103620006405760408201526020830152620000e960c082016200067d565b604083015260e08101516060830152610100810151906001600160601b0319821682036200064057826101209260806200012b9501526040850152016200067d565b60608201524360035560405160c081018181108482111762000555576040526000815260006020820152600060408201526200016662000692565b606082015260405190604082019082821085831117620005555760009260a0926040528381528360208201526080820152015260405190620001a88262000661565b620001b262000692565b825260208201620001c2620006c2565b8152620001ce620006c2565b604084015260ff6004541662000627577faf21c54356e0cb238c07cd6d2a0ba48aa0a87eb5fccc9285719045c4cfe7472b6101606040513381528451602082015260018060a01b036020860151166040820152620002356040860151606083019062000709565b60608501516001600160a01b0316610140820152a1815180159081156200061a575b50156200060157600083515260006020845101526000604084510152825181515251805160406020820151910151151560405191620002968362000661565b6000835260208301526040820152620002ae620006c2565b9160005b60018110620005b15750508152604083015234620005985760405190620002d98262000645565b60008252600060208301526040820192604051620002f78162000645565b600081526200030562000692565b60208201526000604082015260006060820152600060808201528452604060608401916000835260808501936200033b620006c2565b855233865260018060a01b036020820151166020870152828101518752606060018060a01b0391015116835201518252620003a16001948560005543865560405194336020870152602060018060a01b0391015116604086015251606085019062000709565b516001600160a01b03166101408301525160008361016084015b8183106200056b57505050506101a081526101c08101818110848211176200055557604052805192831162000555576002548281811c911680156200054a575b60208210146200053457601f8111620004c7575b50602090601f84116001146200045e578394509083929160009462000452575b50501b916000199060031b1c1916176002555b604051613d539081620007998239f35b0151925038806200042f565b919383169160026000528360206000209360005b87828210620004ad5750501062000493575b505050811b0160025562000442565b015160001960f88460031b161c1916905538808062000484565b848601518755909501946020948501948793500162000472565b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f850160051c8101916020861062000529575b601f0160051c019083905b8281106200051c5750506200040f565b600081550183906200050c565b909150819062000501565b634e487b7160e01b600052602260045260246000fd5b90607f1690620003fb565b634e487b7160e01b600052604160045260246000fd5b606060209160408651805183528481015185840152015115156040820152019301910190918490620003bb565b60405163100960cb60e01b815260096004820152602490fd5b620005bd818362000770565b51620005ca828662000770565b52620005d7818562000770565b506000198114620005eb57600101620002b2565b634e487b7160e01b600052601160045260246000fd5b60405163100960cb60e01b815260086004820152602490fd5b9050600154143862000257565b60405163100960cb60e01b815260076004820152602490fd5b600080fd5b60a081019081106001600160401b038211176200055557604052565b606081019081106001600160401b038211176200055557604052565b51906001600160a01b03821682036200064057565b60405190606082016001600160401b03811183821017620005555760405260006040838281528260208201520152565b6040519060208083016001600160401b0381118482101762000555576040528260005b828110620006f257505050565b8290620006fe62000692565b8184015201620006e5565b8051825260208082015180518285015290810151604080850191909152908101516001600160801b031916606080850191909152908201516001600160a01b03166080808501919091529082015160a084015201516001600160601b03191660c090910152565b906001811015620007825760051b0190565b634e487b7160e01b600052603260045260246000fdfe60806040526004361015610018575b361561001657005b005b60003560e01c80631e93b0f1146100f45780632d2ae6eb146100eb57806334d3e29e146100e25780634a96cc0b146100d9578063573b8510146100d05780636f49e231146100c757806383230757146100be578063980e632f146100b5578063ab53f2c6146100ac578063b6279224146100a35763d2526fd90361000e5761009e610c23565b61000e565b5061009e610ba7565b5061009e610af9565b5061009e610a6c565b5061009e610a4d565b5061009e610a00565b5061009e610295565b5061009e61023b565b5061009e6101ac565b5061009e610143565b5034610113576000366003190112610113576020600354604051908152f35b600080fd5b6040809180518452602081015160208501520151910152565b6060810192916101419190610118565b565b50600036600319011261011357610158610ec4565b50606080610164610f1a565b61019b81610170611007565b6020810190600082515251151560208251015261018b611007565b9060008252516020820152611c8d565b01516101aa6040518092610118565bf35b506080366003190112610113576101c1610f1a565b604051906101ce82610cc0565b6004358252606036602319011261011357604051916101ec83610ce8565b6024359260028410156101135761022b93815260443561020b816110b6565b602082015260643561021c816110b6565b604082015260208201526112b3565b60405160008152602090f35b0390f35b50600036600319011261011357602060a0610254610f1a565b61028981610260611007565b85810190600282515251151560608251015261027a611007565b90600082525186820152611c8d565b01511515604051908152f35b506020366003190112610113576102aa610f1a565b5061022b6102b736613942565b6102bf6139c7565b6102da6102d56102d160045460ff1690565b1590565b61152c565b60408051338152835160208201527fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee815969190a161031a60016000541461154c565b610349610337610328610dae565b60208082518301019101613a85565b925180159081156109f4575b5061156c565b610353341561158c565b61037161036c6103666020850151610b6e565b33613c27565b6115ac565b61038d3360018060a01b036103868551610b6e565b16146115cc565b6103a461039d6020840151610b6e565b3090612c71565b610160820152476101408201526103c3600160ff196004541617600455565b7f65913cba16cd891cc0305be4c0a9b1cda365bc4cb5ab5d8e8142b2007126ca3e6104c4600080604051632cfbfba760e01b60208201526004815261040781610cc0565b61041c6104176060890151610b6e565b610b6e565b82602083519301915af1610438610431611c07565b8092612ab2565b5061044860ff1960045416600455565b6104766104613061045c6020890151610b6e565b612c71565b610160860151808203610180880152146115ec565b61049a47610140860151900391602086019283515260208082518301019101612c62565b60208251015251806040850152604051918291829190916020806040830194805184520151910152565b0390a16104d66040820151511561160c565b6104e73061045c6020850151610b6e565b6101c0820152476101a0820152610506600160ff196004541617600455565b7f3237bf5fd5076580caf396ed44f5fc0642e12a8491d7bb772834390f39a0997961060c60008060405160208101637541dda360e11b81526004825261054b82610cc0565b8261055c61041760608b0151610b6e565b9251925af161057361056c611c07565b8092612ae2565b5061058360ff1960045416600455565b6105ac6105973061045c6020890151610b6e565b6101c08601518082036101e08801521461162c565b6105dd6105d3476101a0870151900392606087019384515260208082518301019101613b7a565b6020835101611294565b516080840181905260408051825181526020928301516001600160a01b03169281019290925290918291820190565b0390a161061e6080820151511561164c565b61062b3060a08301611294565b60206040820151015160c08201515261065761064a60a0830151610b6e565b602060c084015101611294565b43604060c0830151015261067b61066e8351610b6e565b606060c084015101611294565b60408201516080015161069f906001600160601b031916608060c0840151016112a3565b60206040830151015160a060c0830151015260606040830151015160c08083015101526106df6106d26020840151610b6e565b60e060c084015101611294565b6106f03061045c6020850151610b6e565b6102208201527f0cc1f48d3eb760396f0feba39cc4a8b12c1ef55ba63e0cc5ac56ea49f31155566107ef476102008401908152610735600160ff196004541617600455565b61079560008060c08701516040519061077182610763602082019363063eabe760e11b855260248301613b8e565b03601f198101845283610d8b565b8261078261041760608d0151610b6e565b9251925af161078f611c07565b90612b12565b506107a560ff1960045416600455565b6107ce6107b93061045c6020890151610b6e565b6102208601518082036102408801521461166c565b479051900360e0840190815152518061010085015260405191829182611c54565b0390a1610802610100820151511561168c565b7fb758eeaad548e48420d76d670d08a2b8b63cf903c04cf64fbe368cbb7830eb676020604083015101516108368451610b6e565b9061084660405192839283611bee565b0390a16000610120820151526000602061012083015101526000604061012083015101526109ce6080610877611b54565b9361088b6108858251610b6e565b86611294565b6108a461089b6020830151610b6e565b60208701611294565b6108bd6108b46060830151610b6e565b60408701611294565b6108d36108ca8551151590565b15156060870152565b6040840151602090810151868401528285015101516108ff906001600160a01b03165b60a08701611294565b4360c086015261091e61091560a0860151610b6e565b60e08701611294565b604081015182015161093e906001600160601b03191661010087016112a3565b61094d60408201515143613568565b61012086015261012084015161014086015261097661096c8251610b6e565b6101608701611294565b600161018086015260016101a086015260006101c0860152436101e086015201518051906109c9600183510192604060208201519101511515906109b8610e57565b948552602085015215156040840152565b613ca9565b6102008301526101006040820151516080830151510191015151016102208201526130e4565b90506001541438610343565b5060003660031901126101135760206040610a19610f1a565b61028981610a25610f59565b8581019060018251525115158582510152610a3e610f59565b906000825251868201526112b3565b5034610113576000366003190112610113576020600154604051908152f35b5060a036600319011261011357610a81610f1a565b60405190610a8e82610cc0565b600435825260803660231901126101135760405191610aac83610d03565b6024359260038410156101135761022b938152604435610acb816110b6565b6020820152610ad936613962565b6040820152608435610aea816110b6565b60608201526020820152611c8d565b503461011357600080600319360112610b6b578054610b16610dae565b906040519283918252602090604082840152835191826040850152815b838110610b5457505060608094508284010152601f80199101168101030190f35b808601820151878201606001528694508101610b33565b80fd5b6001600160a01b031690565b6001600160a01b03169052565b81516001600160a01b031681526020918201519181019190915260400190565b50602036600319011261011357610bbc610f01565b506102376080610bca610f1a565b610c1581604051610bda81610cc0565b604051610be681610d1e565b6000815281526020810190610bf9610fb6565b825260043581515260018251525160408251015261018b611007565b015160405191829182610b87565b50600036600319011261011357602080610c3b610f1a565b61028981610c47610f59565b8481019060008251525115158582510152610c60610f59565b906000825251858201526112b3565b90600182811c92168015610c9f575b6020831014610c8957565b634e487b7160e01b600052602260045260246000fd5b91607f1691610c7e565b50634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b03821117610cdb57604052565b610ce3610ca9565b604052565b606081019081106001600160401b03821117610cdb57604052565b608081019081106001600160401b03821117610cdb57604052565b602081019081106001600160401b03821117610cdb57604052565b60c081019081106001600160401b03821117610cdb57604052565b61010081019081106001600160401b03821117610cdb57604052565b60a081019081106001600160401b03821117610cdb57604052565b601f909101601f19168101906001600160401b03821190821017610cdb57604052565b6040519060008260025491610dc283610c6f565b808352600193808516908115610e365750600114610de8575b5061014192500383610d8b565b60026000908152600080516020613d0783398151915294602093509091905b818310610e1e575050610141935082010138610ddb565b85548884018501529485019487945091830191610e07565b905061014194506020925060ff191682840152151560051b82010138610ddb565b6040519061014182610ce8565b6040519061022082016001600160401b03811183821017610cdb57604052565b6040519061024082016001600160401b03811183821017610cdb57604052565b6040519061026082016001600160401b03811183821017610cdb57604052565b60405190606082016001600160401b03811183821017610ef4575b60405260006040838281528260208201520152565b610efc610ca9565b610edf565b60405190610f0e82610cc0565b60006020838281520152565b60405190610f2782610d39565b600060a083828152826020820152826040820152610f43610ec4565b6060820152610f50610f01565b60808201520152565b60405190610f6682610cc0565b81600081526020610f75610ec4565b910152565b50634e487b7160e01b600052602160045260246000fd5b60021115610f9b57565b610141610f7a565b60405190610fb082610d1e565b60008252565b60405190608082016001600160401b03811183821017610ffa575b6040526000606083828152826020820152604051610fee81610d1e565b83815260408201520152565b611002610ca9565b610fd1565b6040519061101482610cc0565b81600081526020610f75610fb6565b60031115610f9b57565b9092916040602060809260a085019660018060a01b03168552805182860152015180516002811015611073575b8285015260208101511515606085015201511515910152565b61107b610f7a565b61105a565b51906001600160a01b038216820361011357565b6001600160601b03191690565b51906001600160601b03198216820361011357565b8015150361011357565b5190610141826110b6565b9080601f83011215610113576040918251926110e684610d1e565b836060938484019381851161011357915b8483106111075750505050505090565b8583830312610113578351869161111d82610ce8565b84518252602091828601518382015286860151611139816110b6565b878201528152019201916110f7565b6101408183031261011357610120906111c26040519361116785610d54565b61117083611080565b855261117e60208401611080565b602086015261118f604084016110a1565b60408601526111a060608401611080565b60608601526080830151608086015260a083015160a086015260c083016110cb565b60c0840152015160e082015290565b5160028110156111de5790565b6111e6610f7a565b90565b604051906111f682610d1e565b8160005b60208110611206575050565b602090611211610ec4565b81840152016111fa565b6040519061016082016001600160401b03811183821017611287575b604052816101406000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e08201528261010082015261127d6111e9565b6101208201520152565b61128f610ca9565b611237565b6001600160a01b039091169052565b6001600160601b03199091169052565b9061132d906112cf6112ca6102d160045460ff1690565b6116ac565b6040907f109eb76f82f8872ff024177afedebf0c35323f0a478a1f78956f6ddd62aa157682518061130187338361102d565b0390a16113126006600054146116cc565b61131a610dae565b6020938185808094518301019101611148565b9461134381518015908115611520575b506116ec565b0161134e81516111d1565b61135781610f91565b6114535750926113f460e0926113ad8561014197611375341561172c565b8351600181527f89b1e7798420f8d4f064c6bda87be7b103626416cedf89850e2d1f0c5f3c6a289080602081015b0390a10160019052565b6113e06113b861121b565b956113cc6113c68651610b6e565b88611294565b6113d881860151610b6e565b908701611294565b6113ec81840151611094565b9085016112a3565b61140d6114046060830151610b6e565b60608501611294565b6080810151608084015260a081015160a084015261142e60c0840160019052565b6000828401524361010084015260c081015161012084015201516101408201526136d1565b611462600191959295516111d1565b61146b81610f91565b14611477575b50505050565b6114c782600060e0946115179761148e341561170c565b8151600081527f0a14bf86f2a4bb913634287aaecac48c5d98b7846fcd79a2e76faffb4ac4bfbc90602090a101526113e06113b861121b565b6114d76114046060830151610b6e565b6080810151608084015260a081015160a0840152600060c08401526000828401524361010084015260c081015161012084015201516101408201526136d1565b38808080611471565b9050600154143861133d565b1561153357565b60405163100960cb60e01b8152600a6004820152602490fd5b1561155357565b60405163100960cb60e01b8152600b6004820152602490fd5b1561157357565b60405163100960cb60e01b8152600c6004820152602490fd5b1561159357565b60405163100960cb60e01b8152600d6004820152602490fd5b156115b357565b60405163100960cb60e01b8152600e6004820152602490fd5b156115d357565b60405163100960cb60e01b8152600f6004820152602490fd5b156115f357565b60405163100960cb60e01b815260106004820152602490fd5b1561161357565b60405163100960cb60e01b815260126004820152602490fd5b1561163357565b60405163100960cb60e01b815260136004820152602490fd5b1561165357565b60405163100960cb60e01b815260156004820152602490fd5b1561167357565b60405163100960cb60e01b815260166004820152602490fd5b1561169357565b60405163100960cb60e01b815260186004820152602490fd5b156116b357565b60405163100960cb60e01b815260196004820152602490fd5b156116d357565b60405163100960cb60e01b8152601a6004820152602490fd5b156116f357565b60405163100960cb60e01b8152601b6004820152602490fd5b1561171357565b60405163100960cb60e01b8152601d6004820152602490fd5b1561173357565b60405163100960cb60e01b8152601c6004820152602490fd5b1561175357565b60405163100960cb60e01b8152601e6004820152602490fd5b1561177357565b60405163100960cb60e01b8152601f6004820152602490fd5b1561179357565b60405163100960cb60e01b815260206004820152602490fd5b156117b357565b60405163100960cb60e01b8152602a6004820152602490fd5b156117d357565b60405163100960cb60e01b815260226004820152602490fd5b156117f357565b60405163100960cb60e01b815260236004820152602490fd5b1561181357565b60405163100960cb60e01b815260276004820152602490fd5b1561183357565b60405163100960cb60e01b815260296004820152602490fd5b1561185357565b602460405163100960cb60e01b8152816004820152fd5b1561187157565b60405163100960cb60e01b815260266004820152602490fd5b1561189157565b60405163100960cb60e01b815260216004820152602490fd5b156118b157565b60405163100960cb60e01b8152602b6004820152602490fd5b156118d157565b60405163100960cb60e01b8152602d6004820152602490fd5b6118f2610e64565b906118fb610ec4565b8252611905610fa3565b6020830152600080604084015261191a610f01565b6060840152611927610f01565b6080840152611934610f01565b60a0840152611941610f01565b60c084015261194e610f01565b60e084015261195b610f01565b61010084015280610120840152806101408401528061016084015280610180840152806101a0840152806101c0840152806101e0840152610200830152565b9092916060602060a09260c0850196600180861b031685528051828601520151805160038110156119ea575b60408501526020810151151582850152604081015151608085015201511515910152565b6119f2610f7a565b6119c6565b919082606091031261011357604051611a0f81610ce8565b604080829480518452602081015160208501520151910152565b906102a08282031261011357610280611a40610e64565b92611a4a81611080565b8452611a5860208201611080565b6020850152611a6960408201611080565b6040850152611a7a606082016110c0565b606085015260808101516080850152611a9560a08201611080565b60a085015260c081015160c0850152611ab060e08201611080565b60e0850152610100611ac38183016110a1565b908501526101208082015190850152610140611ae1848284016119f7565b908501526101a0611af3818301611080565b610160860152611b3a6101c094611b0b8685016110c0565b6101808801526101e092611b208486016110c0565b9088015261020095868501519088015261022084016110cb565b9085015201519082015290565b5160038110156111de5790565b611b5c610e84565b9060008083528060208401528060408401528060608401528060808401528060a08401528060c08401528060e08401528061010084015280610120840152611ba2610ec4565b6101408401528061016084015280610180840152806101a0840152806101c0840152806101e0840152611bd36111e9565b610200840152610220830152565b506040513d6000823e3d90fd5b9081526001600160a01b03909116602082015260400190565b3d15611c4f573d906001600160401b038211611c42575b60405191611c36601f8201601f191660200184610d8b565b82523d6000602084013e565b611c4a610ca9565b611c1e565b606090565b91909160208060408301948051845201511515910152565b90815260208101919091526001600160a01b03909116604082015260600190565b611c956118ea565b90611cad611ca86102d160045460ff1690565b61174c565b7fc08304f8842fdf9fe5c32b7c33d0b2bb36997def29e0c6d0fa626741dcab601060405180611cdd84338361199a565b0390a1611cee60086000541461176c565b6020611d09611cfb610dae565b828082518301019101611a29565b91611d1f81518015908115612aa6575b5061178c565b01611d2a8151611b47565b611d3381611023565b611f0e575061014192611d46341561188a565b60808201928351906101c0927f772252bb3a260bb19eae21a8a9243292763a37c5bcfc38c9f961eb102482f43484860193845190611d966040519283928360209093929193604081019481520152565b0390a185518251524360208351015282516040835101527f3143a5386a3efa0a4185e41112a33ccc5fcb59b5a881e8d8dfacdad37b01ad0c611ddf835160405191829182610131565b0390a160608251910152611df1611b54565b94611e05611dff8651610b6e565b87611294565b611e1e611e156020870151610b6e565b60208801611294565b611e37611e2e6040870151610b6e565b60408801611294565b611e50611e476060870151151590565b15156060880152565b516080860152611e666108f660a0860151610b6e565b60c084015160c0860152611e8061091560e0860151610b6e565b611e9a610100611e9281870151611094565b9087016112a3565b610120808501519086015251610140850152611ec6610160611ebe81860151610b6e565b908601611294565b611ee0610180611ed881860151151590565b151590860152565b60006101a085015251908301526101e0438184015281015190610200918284015201516102208201526130e4565b6001611f1d8294939451611b47565b611f2681611023565b03612573576040611f4791510151806020840152516101c0840151106117cc565b611f6661020083015160208301519081510160408401525134146117ec565b6101808201511561225d57610141927f17a9fc9c51a3c4572fe0fe3a91cb0b8afcbf375678095119f73eb96474ed5bd0612083611fa961039d6020870151610b6e565b610180850190815261206347916101608701928352611fd0600160ff196004541617600455565b6120316000808a60808101518261201e61041760408051956120178761200960208201986311b693e360e11b8a52339060248401611bee565b03601f198101895288610d8b565b0151610b6e565b9251925af161202b611c07565b90612b72565b5061204160ff1960045416600455565b6120523061045c60208b0151610b6e565b90518082036101a08901521461184c565b479051900360c0850190815152518060e086015260405191829182611c54565b0390a161209560e0830151511561186a565b600080516020613d2783398151915260808401516020840151516120c0604051928392339184611c6c565b0390a1608061010083016120d5338251611294565b6101c08501516020825101527f6ad45737224f0aacb573f09280e150f10ce966838d1a4454d8548ca549805f4d612113825160405191829182610b87565b0390a151910152612122611b54565b916121366121308251610b6e565b84611294565b61214f6121466020830151610b6e565b60208501611294565b61216861215f6040830151610b6e565b60408501611294565b6121816121786060830151151590565b15156060850152565b608081015160808401526121a461219b60a0830151610b6e565b60a08501611294565b60c081015160c08401526121c76121be60e0830151610b6e565b60e08501611294565b6121e26121d8610100830151611094565b61010085016112a3565b61012080820151908401526101408082015190840152612206336101608501611294565b600061018084015261222961221f6101a0830151151590565b15156101a0850152565b6020820151516101c08401526101e0904382850152015161020083015260e0604082015191015151016102208201526130e4565b610141926000808080612277610417610160890151610b6e565b6101c08801519082821561256a575bf11561255d575b7f3fd92ce1ec5e57f94e85c227e121d45506456dcbb82ff846aaec41a209d237256123866122c161039d6020870151610b6e565b6101e0850190815261236647916101c087019283526122e8600160ff196004541617600455565b6123346000808a60808101518261232161041760408051956120178761200960208201986311b693e360e11b8a52339060248401611bee565b9251925af161232e611c07565b90612b42565b5061234460ff1960045416600455565b6123553061045c60208b0151610b6e565b90518082036102008901521461180c565b479051900360608501908151525180608086015260405191829182611c54565b0390a16123986080830151511561182c565b600080516020613d2783398151915260808401516020840151516123c3604051928392339184611c6c565b0390a1608060a083016123d7338251611294565b6101c08501516020825101527f8413091abaace6ff729b2a67bff40663299d36f23752fddcf8ed2425dd99c7e2612415825160405191829182610b87565b0390a1519101526080612426611b54565b9261243a6124348251610b6e565b85611294565b61245361244a6020830151610b6e565b60208601611294565b61246c6124636040830151610b6e565b60408601611294565b61248561247c6060830151151590565b15156060860152565b81810151828501526124a661249d60a0830151610b6e565b60a08601611294565b60c081015160c08501526124c96124c060e0830151610b6e565b60e08601611294565b6124e36101006124db81840151611094565b9086016112a3565b61012080820151908501526101408082015190850152612507336101608601611294565b60006101808501526125216101a0611ed881840151151590565b6020830151516101c0850152436101e08501526101e08101516102008501526101c06040840151910151900391015151016102208201526130e4565b612565611be1565b61228d565b506108fc612286565b61258260029193929351611b47565b61258b81611023565b1461259557505050565b620f42409061020090828282015101936125b96101209485830196875234146117ac565b8451620dbba095908681106128925750620dbb9f1990510193610140809201948552600080808060a08701996125f26104178c51610b6e565b82f115612885575b8451620186a09081116127a15760a061014198600080808061265e966126236104178c51610b6e565b82f115612794575b604051600181527fa6ff35c2fb74d5340f39bd9ceb8c4e5f5d627046c60c464c80ff42d4cf4ad8709080602081016113a3565b6126e46126db61266c611b54565b9761268061267a8751610b6e565b8a611294565b6126996126906020880151610b6e565b60208b01611294565b6126b26126a96040880151610b6e565b60408b01611294565b6126cb6126c26060880151151590565b151560608b0152565b608086015160808a015251610b6e565b60a08801611294565b60c083015160c08701526127076126fe60e0850151610b6e565b60e08801611294565b61272161010061271981860151611094565b9088016112a3565b80830151908601528082015190850152612743610160611ebe81840151610b6e565b612755610180611ed881840151151590565b6127676101a0611ed881840151151590565b6101c080820151908501526101e09043828601520151908301526201869f199051016102208201526130e4565b61279c611be1565b61262b565b506127df60a0610141987f4c641ffd9e5bc0e9ae3cd2532d6905a65ba9128ff91febf13fb2ab9ce67a203e604051806113a381906001602083019252565b6127ed6126db61266c611b54565b60c083015160c08701526128076126fe60e0850151610b6e565b61281961010061271981860151611094565b8083015190860152808201519085015261283b610160611ebe81840151610b6e565b61284d610180611ed881840151151590565b61285f6101a0611ed881840151151590565b6101c080820151908501526101e0904382860152015190830152516102208201526130e4565b61288d611be1565b6125fa565b94955093620186a0915081116129b75760a06101419660008080806128f9966128be6104178a51610b6e565b82f1156129aa575b604051600181527f4ce095acb171007687071176729715ba6278351b971148c9c4002022d8453b109080602081016113a3565b612901611b54565b9361290f6108858351610b6e565b61291f61089b6020840151610b6e565b61292f6108b46040840151610b6e565b61293f6108ca6060840151151590565b608082015160808601526129596108f660a0840151610b6e565b60c082015160c086015261297361091560e0840151610b6e565b612985610100611e9281850151611094565b80820151908501526101408082015190850152612743610160611ebe81840151610b6e565b6129b2611be1565b6128c6565b506129f560a0610141967fa85ce6c9c4d5b00c6ef4162e483a5f5b4734f2c5fe254051f0aa1ddc266ec850604051806113a381906001602083019252565b6129fd611b54565b93612a0b6108858351610b6e565b612a1b61089b6020840151610b6e565b612a2b6108b46040840151610b6e565b612a3b6108ca6060840151151590565b60808201516080860152612a556108f660a0840151610b6e565b60c082015160c0860152612a6f61091560e0840151610b6e565b612a81610100611e9281850151611094565b8082015190850152610140808201519085015261283b610160611ebe81840151610b6e565b90506001541438611d19565b15612aba5790565b805115612ac957805190602001fd5b60405163100960cb60e01b815260116004820152602490fd5b15612aea5790565b805115612af957805190602001fd5b60405163100960cb60e01b815260146004820152602490fd5b15612b1a5790565b805115612b2957805190602001fd5b60405163100960cb60e01b815260176004820152602490fd5b15612b4a5790565b805115612b5957805190602001fd5b60405163100960cb60e01b815260286004820152602490fd5b15612b7a5790565b805115612b8957805190602001fd5b60405163100960cb60e01b815260256004820152602490fd5b15612baa5790565b805115612bb957805190602001fd5b60405163100960cb60e01b815260066004820152602490fd5b15612bda5790565b805115612be957805190602001fd5b60405163100960cb60e01b8152602c6004820152602490fd5b15612c0a5790565b805115612c1957805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b15612c3a5790565b805115612c4957805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b90816020910312610113575190565b600080916111e693826040519160208301926370a0823160e01b845260018060a01b03809216602482015260248152612ca981610ce8565b5193165af1612cc0612cb9611c07565b8092612ba2565b5060208082518301019101612c62565b60405190612cdd82610d39565b600060a083612cea610f01565b8152612cf4610f01565b60208201528260408201528260608201528260808201520152565b906001811015612d205760051b0190565b634e487b7160e01b600052603260045260246000fd5b818110612d41575050565b60008155600101612d36565b50634e487b7160e01b600052601160045260246000fd5b612d6f600254610c6f565b80612d775750565b601f8111600114612d8a57506000600255565b6002600052612dcf90601f0160051c600080516020613d07833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf612d36565b6000602081208160025555565b612de4610e64565b9060008083528060208401528060408401528060608401528060808401528060a08401528060c08401528060e08401528061010084015280610120840152612e2a610ec4565b6101408401528061016084015280610180840152806101a0840152806101c0840152612e546111e9565b6101e0840152610200830152565b6000915b60018310612e7357505050565b600190606083519182518152602092838101518483015260408091015115159082015201920192019190612e66565b9190916102806102a0820193612eb9838251610b7a565b612ecb60208201516020850190610b7a565b612edd60408201516040850190610b7a565b60608181015115159084015260808101516080840152612f0560a082015160a0850190610b7a565b60c081015160c0840152612f2160e082015160e0850190610b7a565b610100818101516001600160601b031916908401526101208082015190840152612f546101408083015190850190610118565b61016081015190612f6b6101a09283860190610b7a565b612fb561018082015192612f866101c0948588019015159052565b82015192612f9b6101e0948588019015159052565b820151926102009384870152820151610220860190612e62565b0151910152565b90601f8211612fc9575050565b6101419160026000526020600020906020601f840160051c83019310612ff7575b601f0160051c0190612d36565b9091508190612fea565b80519091906001600160401b0381116130d7575b61302981613024600254610c6f565b612fbc565b602080601f8311600114613065575081929360009261305a575b50508160011b916000199060031b1c191617600255565b015190503880613043565b6002600052601f19831694909190600080516020613d07833981519152926000905b8782106130bf5750508360019596106130a6575b505050811b01600255565b015160001960f88460031b161c1916905538808061309b565b80600185968294968601518155019501930190613087565b6130df610ca9565b613015565b6130ec612cd0565b6101e08281018051610120808601805190959193926000911061354057506101a086015115155b156132445750509161323f916102206101419561323195613132612ddc565b94613140611dff8451610b6e565b613150611e156020850151610b6e565b613160611e2e6040850151610b6e565b613170611e476060850151151590565b6080830151608087015261318a6126db60a0850151610b6e565b60c083015160c08701526131a46126fe60e0850151610b6e565b6131b661010061271981860151611094565b519085015261014080820151908501526131d8610160611ebe81840151610b6e565b6131ea610180611ed881840151151590565b60016101a08501526101c080820151908501526102009283820151908501520151908201526132196008600055565b61322243600155565b60405192839160208301612ea2565b03601f198101835282610d8b565b613001565b92509250602084019361325a61039d8651610b6e565b6080840190815247946060850195865261327c600160ff196004541617600455565b610140956132fd87850151936132cf60008088604098826132bc6104178c805195612017876120096020820198634c344d9d60e01b8a5260248301610131565b9251925af16132c9611c07565b90612bd2565b506132df60ff1960045416600455565b6132ed3061045c8c51610b6e565b905180820360a08a0152146118aa565b479051900385515261335d85517f8ad59f77afef55906705766786f2fc95b67f593f4a41048ddc240434448dc6c66133416020890192808452865191829182611c54565b0390a183610220860151915191825101970196875251156118ca565b6080830151916101c08401908151937fc3acd7ee24f4f9cf4606c64c38b8640466129f78b44ac84b4e810f68345d08b46133978751610b6e565b956133a560e0890151610b6e565b9261340660c08a015198610100998a8c01966133c18851611094565b895195865260208601969096526001600160a01b039283166040860152909116606084015260808301526001600160601b031990921660a082015290819060c0820190565b0390a18251156134b65761341861121b565b99865161342490610b6e565b61342e908c611294565b5161343890610b6e565b6134459060208c01611294565b5161344f90611094565b61345a918a016112a3565b61016084015161346990610b6e565b6134769060608a01611294565b516080880152805161348790613545565b60a0880152600160c0880152600160e088015251908601526102000151908401525190820152610141906136d1565b5050505050600094859450849391849350610160610417916120176134de6135029551610b6e565b6134e88351610b6e565b6102008401515151916001600160a01b039091169061357c565b905190828215613537575bf11561352a575b600080556135226000600155565b610141612d64565b613532611be1565b613514565b506108fc61350d565b613113565b90603282019182811161355b575b821061011357565b613563612d4d565b613553565b919082019182811161355b57821061011357565b60405163a9059cbb60e01b602082019081526001600160a01b0393841660248301526044808301959095529381526135f893600093849392849190608081016001600160401b038111828210176135ff575b6040525193165af16135e86135e1611c07565b8092612c02565b506020808251830101910161360c565b1561011357565b613607610ca9565b6135ce565b9081602091031261011357516111e6816110b6565b6040519061362e82610d54565b8160e06000918281528260208201528260408201528260608201528260808201528260a082015261365d6111e9565b60c08201520152565b91909161012060e061014083019460018060a01b0380825116855280602083015116602086015260018060601b0319604083015116604086015260608201511660608501526080810151608085015260a081015160a0850152612fb560c082015160c0860190612e62565b61010081015160a08201805190916000911061393d575060e082015115155b1561379f5761323f613231916101406101419461370b613621565b926137196124348351610b6e565b61372961244a6020840151610b6e565b6137426137396040840151611094565b604086016112a3565b61375b6137526060840151610b6e565b60608601611294565b608082015160808501525160a084015261012081015160c0840152015160e08201526137876006600055565b61379043600155565b60405192839160208301613666565b5060c0810151156138cd578060207f12efbaf7d721b41313ea6075bffc8bcdaf87de4d387fbe499734cc9c29fe5c3792016138a66137dd8251610b6e565b61380960608501916137ef8351610b6e565b6101208701515151916001600160a01b039091169061357c565b600080808061381b6104178951610b6e565b610140890151908282156138c4575bf1156138b7575b61383e6040850151611094565b9261386261385b61385460808801519751610b6e565b9351610b6e565b9151610b6e565b91604051958695866001600160601b0319909116815260208101919091526001600160a01b0391821660408201529181166060830152909116608082015260a00190565b0390a1600080556135226000600155565b6138bf611be1565b613831565b506108fc61382a565b8060207fdd5bfdf918cd86e0bb3c19331b121dcfa52fec6eee8c528aa1267c110694568792016139246139008251610b6e565b61390a8451610b6e565b6101208501515151916001600160a01b039091169061357c565b6138a660608301600080808061381b6104178651610b6e565b6136f0565b6020906003190112610113576040519061395b82610d1e565b6004358252565b6020906063190112610113576040519061397b82610d1e565b6064358252565b6040519061398f82610d54565b8160e06000918281528260208201528260408201528260608201528260808201526139b8610ec4565b60a08201528260c08201520152565b6139cf610ea4565b9060008083526139dd610f01565b60208401526139ea610f01565b60408401526139f7610f01565b6060840152613a04610f01565b60808401528060a0840152613a17613982565b60c0840152613a24610f01565b60e0840152613a31610f01565b610100840152613a3f610ec4565b610120840152806101408401528061016084015280610180840152806101a0840152806101c0840152806101e08401528061020084015280610220840152610240830152565b90818103906101a08212610113576040805193613aa185610d70565b613aaa81611080565b8552613ab860208201611080565b602086015260e0603f19850112610113576060825194613ad786610d70565b828401518652605f19011261011357815193613af285610ce8565b606082015185526080820151602086015260a0820151926001600160801b03198416840361011357856101409482613b729801526020830152613b3760c08401611080565b8183015260e08301516060830152613b5261010084016110a1565b6080830152860152613b676101208201611080565b6060860152016110cb565b608082015290565b90816020910312610113576111e690611080565b815181526020808301516001600160a01b039081168284015260408085015181850152606080860151909216918401919091526080808501516001600160601b0319169084015260a0808501518051918501919091529182015160c084015201516001600160801b03191660e0808301919091526101408201939261014192916101209160c08101516101008501520151910190610b7a565b6040516323b872dd60e01b602082019081526001600160a01b039283166024830152306044830152600160648084019190915282526111e693600093849391929184919060a081016001600160401b03811182821017613c9c575b6040525193165af16135e8613c95611c07565b8092612c32565b613ca4610ca9565b613c82565b9190613cb36111e9565b9260005b60018110613cc55750508252565b80613cd260019284612d0f565b51613cdd8288612d0f565b52613ce88187612d0f565b506000198114613cf9575b01613cb7565b613d01612d4d565b613cf356fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace4dbecede21b6b1ed316b3fa66253c98c15a7a7949644df711f9765919f676e73a164736f6c6343000810000a`,
  BytecodeLen: 17644,
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
