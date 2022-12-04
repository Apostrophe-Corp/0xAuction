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
    created: [ctc0, ctc1, ctc0, ctc2, ctc3, ctc4, ctc0, ctc5, ctc0],
    down: [ctc3, ctc0, ctc0, ctc2, ctc1, ctc0],
    log: [ctc3, ctc0, ctc0],
    outcome: [ctc3, ctc3, ctc0, ctc2, ctc2, ctc5]
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
    Admin: ctc0,
    deadline: ctc2,
    description: ctc3,
    id: ctc2,
    owner: ctc0,
    price: ctc2,
    title: ctc4,
    tokenID: ctc2
    });
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc2, ctc2, ctc6]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc9 = stdlib.T_Contract;
  
  const AuctionView_awaitingConfirmation = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v724, v725, v726, v727, v731] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v724, v725, v747, v754, v757, v1145, v1156, v1157, v1169] = svs;
      return (await ((async () => {
        
        
        return true;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
      const [v724, v725, v726, v743, v744, v745, v747, v753, v754, v755, v756, v757, v758, v764, v765, v786] = svs;
      stdlib.assert(false, 'illegal view')
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const AuctionView_isRunning = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v724, v725, v726, v727, v731] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v724, v725, v747, v754, v757, v1145, v1156, v1157, v1169] = svs;
      return (await ((async () => {
        
        
        return v1145;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
      const [v724, v725, v726, v743, v744, v745, v747, v753, v754, v755, v756, v757, v758, v764, v765, v786] = svs;
      return (await ((async () => {
        
        
        return v786;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      AuctionView: {
        awaitingConfirmation: {
          decode: AuctionView_awaitingConfirmation,
          dom: [],
          rng: ctc6
          },
        isRunning: {
          decode: AuctionView_isRunning,
          dom: [],
          rng: ctc6
          }
        }
      },
    views: {
      1: [ctc0, ctc1, ctc5, ctc2, ctc8],
      5: [ctc0, ctc1, ctc4, ctc0, ctc2, ctc6, ctc8, ctc2, ctc2],
      6: [ctc0, ctc1, ctc5, ctc2, ctc2, ctc9, ctc4, ctc2, ctc0, ctc6, ctc6, ctc2, ctc2, ctc8, ctc2, ctc6]
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
export async function _Auctioneer_acceptSale5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Auctioneer_acceptSale5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Auctioneer_acceptSale5 expects to receive an interact object as its second argument.`));}
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
    Auctioneer_acceptSale0_416: ctc7,
    Auctioneer_rejectSale0_416: ctc7
    });
  const ctc9 = stdlib.T_Null;
  
  
  const [v724, v725, v747, v754, v757, v1145, v1156, v1157, v1169] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc2, ctc0, ctc3, ctc4, ctc6, ctc3, ctc3]);
  const v1171 = ctc.selfAddress();
  const v1173 = stdlib.protect(ctc7, await interact.in(), {
    at: './src/contracts/auction.rsh:1:23:application',
    fs: ['at ./src/contracts/auction.rsh:160:28:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:160:28:function exp)', 'at ./src/contracts/auction.rsh:152:48:application call to "runAuctioneer_acceptSale0_416" (defined at: ./src/contracts/auction.rsh:158:21:function exp)', 'at ./src/contracts/auction.rsh:152:48:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:152:48:function exp)'],
    msg: 'in',
    who: 'Auctioneer_acceptSale'
    });
  const v1175 = stdlib.addressEq(v1171, v724);
  stdlib.assert(v1175, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/auction.rsh:161:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/auction.rsh:160:28:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:160:28:function exp)', 'at ./src/contracts/auction.rsh:160:28:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:160:28:function exp)', 'at ./src/contracts/auction.rsh:152:48:application call to "runAuctioneer_acceptSale0_416" (defined at: ./src/contracts/auction.rsh:158:21:function exp)', 'at ./src/contracts/auction.rsh:152:48:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:152:48:function exp)'],
    msg: 'You are not the Seller',
    who: 'Auctioneer_acceptSale'
    });
  const v1179 = ['Auctioneer_acceptSale0_416', v1173];
  
  const txn1 = await (ctc.sendrecv({
    args: [v724, v725, v747, v754, v757, v1145, v1156, v1157, v1169, v1179],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./src/contracts/auction.rsh:163:31:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1194], secs: v1196, time: v1195, didSend: v541, from: v1193 } = txn1;
      
      switch (v1194[0]) {
        case 'Auctioneer_acceptSale0_416': {
          const v1197 = v1194[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Auctioneer_acceptSale"
            });
          ;
          const v1204 = v1156[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:165:49:application', stdlib.UInt_max, '0')];
          const v1205 = v1204[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:165:49:application', stdlib.UInt_max, '0')];
          const v1211 = stdlib.sub(v1205, v1205);
          const v1213 = stdlib.Array_set(v1204, '0', v1211);
          const v1214 = stdlib.Array_set(v1156, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:165:83:application', stdlib.UInt_max, '0'), v1213);
          sim_r.txns.push({
            kind: 'from',
            to: v754,
            tok: v725
            });
          const v1219 = stdlib.sub(v1157, v1157);
          sim_r.txns.push({
            kind: 'from',
            to: v724,
            tok: undefined /* Nothing */
            });
          const v1220 = true;
          const v1221 = await txn1.getOutput('Auctioneer_acceptSale', 'v1220', ctc4, v1220);
          
          const v1227 = 'accepted            ';
          null;
          const v2958 = v1214[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:214:25:application', stdlib.UInt_max, '0')];
          const v2959 = v2958[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:214:25:application', stdlib.UInt_max, '0')];
          sim_r.txns.push({
            kind: 'from',
            to: v754,
            tok: v725
            });
          sim_r.txns.push({
            kind: 'from',
            to: v724,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v725
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          break;
          }
        case 'Auctioneer_rejectSale0_416': {
          const v1253 = v1194[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc0, ctc3, ctc4, ctc6, ctc3, ctc3, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v1194], secs: v1196, time: v1195, didSend: v541, from: v1193 } = txn1;
  switch (v1194[0]) {
    case 'Auctioneer_acceptSale0_416': {
      const v1197 = v1194[1];
      undefined /* setApiDetails */;
      ;
      const v1204 = v1156[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:165:49:application', stdlib.UInt_max, '0')];
      const v1205 = v1204[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:165:49:application', stdlib.UInt_max, '0')];
      const v1211 = stdlib.sub(v1205, v1205);
      const v1213 = stdlib.Array_set(v1204, '0', v1211);
      const v1214 = stdlib.Array_set(v1156, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:165:83:application', stdlib.UInt_max, '0'), v1213);
      ;
      const v1219 = stdlib.sub(v1157, v1157);
      ;
      const v1220 = true;
      const v1221 = await txn1.getOutput('Auctioneer_acceptSale', 'v1220', ctc4, v1220);
      if (v541) {
        stdlib.protect(ctc9, await interact.out(v1197, v1221), {
          at: './src/contracts/auction.rsh:159:25:application',
          fs: ['at ./src/contracts/auction.rsh:159:25:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:159:25:function exp)', 'at ./src/contracts/auction.rsh:167:39:application call to "notify" (defined at: ./src/contracts/auction.rsh:164:34:function exp)', 'at ./src/contracts/auction.rsh:164:34:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:164:34:function exp)'],
          msg: 'out',
          who: 'Auctioneer_acceptSale'
          });
        }
      else {
        }
      
      const v1227 = 'accepted            ';
      null;
      const v2958 = v1214[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:214:25:application', stdlib.UInt_max, '0')];
      const v2959 = v2958[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:214:25:application', stdlib.UInt_max, '0')];
      ;
      ;
      return;
      
      break;
      }
    case 'Auctioneer_rejectSale0_416': {
      const v1253 = v1194[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Auctioneer_rejectSale5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Auctioneer_rejectSale5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Auctioneer_rejectSale5 expects to receive an interact object as its second argument.`));}
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
    Auctioneer_acceptSale0_416: ctc7,
    Auctioneer_rejectSale0_416: ctc7
    });
  const ctc9 = stdlib.T_Null;
  
  
  const [v724, v725, v747, v754, v757, v1145, v1156, v1157, v1169] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc2, ctc0, ctc3, ctc4, ctc6, ctc3, ctc3]);
  const v1181 = ctc.selfAddress();
  const v1183 = stdlib.protect(ctc7, await interact.in(), {
    at: './src/contracts/auction.rsh:1:23:application',
    fs: ['at ./src/contracts/auction.rsh:181:28:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:181:28:function exp)', 'at ./src/contracts/auction.rsh:152:48:application call to "runAuctioneer_rejectSale0_416" (defined at: ./src/contracts/auction.rsh:179:21:function exp)', 'at ./src/contracts/auction.rsh:152:48:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:152:48:function exp)'],
    msg: 'in',
    who: 'Auctioneer_rejectSale'
    });
  const v1185 = stdlib.addressEq(v1181, v724);
  stdlib.assert(v1185, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/auction.rsh:182:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/auction.rsh:181:28:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:181:28:function exp)', 'at ./src/contracts/auction.rsh:181:28:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:181:28:function exp)', 'at ./src/contracts/auction.rsh:152:48:application call to "runAuctioneer_rejectSale0_416" (defined at: ./src/contracts/auction.rsh:179:21:function exp)', 'at ./src/contracts/auction.rsh:152:48:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:152:48:function exp)'],
    msg: 'You are not the Seller',
    who: 'Auctioneer_rejectSale'
    });
  const v1189 = ['Auctioneer_rejectSale0_416', v1183];
  
  const txn1 = await (ctc.sendrecv({
    args: [v724, v725, v747, v754, v757, v1145, v1156, v1157, v1169, v1189],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./src/contracts/auction.rsh:184:31:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1194], secs: v1196, time: v1195, didSend: v541, from: v1193 } = txn1;
      
      switch (v1194[0]) {
        case 'Auctioneer_acceptSale0_416': {
          const v1197 = v1194[1];
          
          break;
          }
        case 'Auctioneer_rejectSale0_416': {
          const v1253 = v1194[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Auctioneer_rejectSale"
            });
          ;
          const v1285 = v1156[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:186:49:application', stdlib.UInt_max, '0')];
          const v1286 = v1285[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:186:49:application', stdlib.UInt_max, '0')];
          const v1292 = stdlib.sub(v1286, v1286);
          const v1294 = stdlib.Array_set(v1285, '0', v1292);
          const v1295 = stdlib.Array_set(v1156, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:186:83:application', stdlib.UInt_max, '0'), v1294);
          sim_r.txns.push({
            kind: 'from',
            to: v724,
            tok: v725
            });
          const v1300 = stdlib.sub(v1157, v1157);
          sim_r.txns.push({
            kind: 'from',
            to: v754,
            tok: undefined /* Nothing */
            });
          const v1301 = false;
          const v1302 = await txn1.getOutput('Auctioneer_rejectSale', 'v1301', ctc4, v1301);
          
          const v1308 = 'rejected            ';
          null;
          const v2979 = v1295[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:214:25:application', stdlib.UInt_max, '0')];
          const v2980 = v2979[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:214:25:application', stdlib.UInt_max, '0')];
          sim_r.txns.push({
            kind: 'from',
            to: v754,
            tok: v725
            });
          sim_r.txns.push({
            kind: 'from',
            to: v724,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v725
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc0, ctc3, ctc4, ctc6, ctc3, ctc3, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v1194], secs: v1196, time: v1195, didSend: v541, from: v1193 } = txn1;
  switch (v1194[0]) {
    case 'Auctioneer_acceptSale0_416': {
      const v1197 = v1194[1];
      return;
      break;
      }
    case 'Auctioneer_rejectSale0_416': {
      const v1253 = v1194[1];
      undefined /* setApiDetails */;
      ;
      const v1285 = v1156[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:186:49:application', stdlib.UInt_max, '0')];
      const v1286 = v1285[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:186:49:application', stdlib.UInt_max, '0')];
      const v1292 = stdlib.sub(v1286, v1286);
      const v1294 = stdlib.Array_set(v1285, '0', v1292);
      const v1295 = stdlib.Array_set(v1156, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:186:83:application', stdlib.UInt_max, '0'), v1294);
      ;
      const v1300 = stdlib.sub(v1157, v1157);
      ;
      const v1301 = false;
      const v1302 = await txn1.getOutput('Auctioneer_rejectSale', 'v1301', ctc4, v1301);
      if (v541) {
        stdlib.protect(ctc9, await interact.out(v1253, v1302), {
          at: './src/contracts/auction.rsh:180:25:application',
          fs: ['at ./src/contracts/auction.rsh:180:25:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:180:25:function exp)', 'at ./src/contracts/auction.rsh:188:39:application call to "notify" (defined at: ./src/contracts/auction.rsh:185:34:function exp)', 'at ./src/contracts/auction.rsh:185:34:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:185:34:function exp)'],
          msg: 'out',
          who: 'Auctioneer_rejectSale'
          });
        }
      else {
        }
      
      const v1308 = 'rejected            ';
      null;
      const v2979 = v1295[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:214:25:application', stdlib.UInt_max, '0')];
      const v2980 = v2979[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:214:25:application', stdlib.UInt_max, '0')];
      ;
      ;
      return;
      
      break;
      }
    }
  
  
  };
export async function _Auctioneer_stopAuction6(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Auctioneer_stopAuction6 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Auctioneer_stopAuction6 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '80'));
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc5 = stdlib.T_Object({
    Admin: ctc0,
    deadline: ctc2,
    description: ctc3,
    id: ctc2,
    owner: ctc0,
    price: ctc2,
    title: ctc4,
    tokenID: ctc2
    });
  const ctc6 = stdlib.T_Contract;
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc2, ctc2, ctc7]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Tuple([ctc2]);
  const ctc12 = stdlib.T_Data({
    Auctioneer_stopAuction0_103: ctc10,
    Bidder_bid0_103: ctc11,
    Bidder_optIn0_103: ctc10
    });
  const ctc13 = stdlib.T_Struct([['id', ctc2], ['blockEnded', ctc2], ['lastBid', ctc2]]);
  const ctc14 = stdlib.T_Null;
  
  
  const [v724, v725, v726, v743, v744, v745, v747, v753, v754, v755, v756, v757, v758, v764, v765, v786] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc0, ctc1, ctc5, ctc2, ctc2, ctc6, ctc4, ctc2, ctc0, ctc7, ctc7, ctc2, ctc2, ctc9, ctc2, ctc7]);
  const v792 = ctc.selfAddress();
  const v794 = stdlib.protect(ctc10, await interact.in(), {
    at: './src/contracts/auction.rsh:1:23:application',
    fs: ['at ./src/contracts/auction.rsh:122:28:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:122:28:function exp)', 'at ./src/contracts/auction.rsh:82:83:application call to "runAuctioneer_stopAuction0_103" (defined at: ./src/contracts/auction.rsh:120:21:function exp)', 'at ./src/contracts/auction.rsh:82:83:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:82:83:function exp)'],
    msg: 'in',
    who: 'Auctioneer_stopAuction'
    });
  const v796 = stdlib.addressEq(v792, v724);
  stdlib.assert(v796, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/auction.rsh:123:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/auction.rsh:122:28:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:122:28:function exp)', 'at ./src/contracts/auction.rsh:122:28:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:122:28:function exp)', 'at ./src/contracts/auction.rsh:82:83:application call to "runAuctioneer_stopAuction0_103" (defined at: ./src/contracts/auction.rsh:120:21:function exp)', 'at ./src/contracts/auction.rsh:82:83:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:82:83:function exp)'],
    msg: 'You are not the Seller',
    who: 'Auctioneer_stopAuction'
    });
  const v800 = ['Auctioneer_stopAuction0_103', v794];
  
  const txn1 = await (ctc.sendrecv({
    args: [v724, v725, v726, v743, v744, v745, v747, v753, v754, v755, v756, v757, v758, v764, v765, v786, v800],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc12],
    pay: [stdlib.checkedBigNumberify('./src/contracts/auction.rsh:125:31:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v831], secs: v833, time: v832, didSend: v297, from: v830 } = txn1;
      
      switch (v831[0]) {
        case 'Auctioneer_stopAuction0_103': {
          const v834 = v831[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Auctioneer_stopAuction"
            });
          ;
          const v848 = 'endSuccess          ';
          null;
          const v851 = {
            blockEnded: v832,
            id: v744,
            lastBid: v757
            };
          const v852 = await txn1.getOutput('Auctioneer_stopAuction', 'v851', ctc13, v851);
          
          const v2981 = v754;
          const v2982 = v755;
          const v2983 = false;
          const v2984 = v757;
          const v2985 = v832;
          const v2987 = v764;
          const v2988 = v765;
          const v2989 = stdlib.gt(v753, v758);
          const v2990 = v2989 ? false : false;
          if (v2990) {
            const v2992 = false;
            sim_r.isHalt = false;
            }
          else {
            const v2996 = 'down                ';
            null;
            const v3043 = v764;
            const v3044 = v765;
            const v3045 = stdlib.safeAdd(v832, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Bidder_bid0_103': {
          const v934 = v831[1];
          
          break;
          }
        case 'Bidder_optIn0_103': {
          const v1034 = v831[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc5, ctc2, ctc2, ctc6, ctc4, ctc2, ctc0, ctc7, ctc7, ctc2, ctc2, ctc9, ctc2, ctc7, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [v831], secs: v833, time: v832, didSend: v297, from: v830 } = txn1;
  switch (v831[0]) {
    case 'Auctioneer_stopAuction0_103': {
      const v834 = v831[1];
      undefined /* setApiDetails */;
      ;
      const v848 = 'endSuccess          ';
      null;
      const v851 = {
        blockEnded: v832,
        id: v744,
        lastBid: v757
        };
      const v852 = await txn1.getOutput('Auctioneer_stopAuction', 'v851', ctc13, v851);
      if (v297) {
        stdlib.protect(ctc14, await interact.out(v834, v852), {
          at: './src/contracts/auction.rsh:121:25:application',
          fs: ['at ./src/contracts/auction.rsh:121:25:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:121:25:function exp)', 'at ./src/contracts/auction.rsh:133:39:application call to "notify" (defined at: ./src/contracts/auction.rsh:126:34:function exp)', 'at ./src/contracts/auction.rsh:126:34:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:126:34:function exp)'],
          msg: 'out',
          who: 'Auctioneer_stopAuction'
          });
        }
      else {
        }
      
      const v2981 = v754;
      const v2982 = v755;
      const v2983 = false;
      const v2984 = v757;
      const v2985 = v832;
      const v2987 = v764;
      const v2988 = v765;
      const v2989 = stdlib.gt(v753, v758);
      const v2990 = v2989 ? false : false;
      if (v2990) {
        const v2992 = false;
        return;
        }
      else {
        const v2996 = 'down                ';
        null;
        const v3043 = v764;
        const v3044 = v765;
        const v3045 = stdlib.safeAdd(v832, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
        return;
        }
      break;
      }
    case 'Bidder_bid0_103': {
      const v934 = v831[1];
      return;
      break;
      }
    case 'Bidder_optIn0_103': {
      const v1034 = v831[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Bidder_bid6(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bidder_bid6 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bidder_bid6 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '80'));
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc5 = stdlib.T_Object({
    Admin: ctc0,
    deadline: ctc2,
    description: ctc3,
    id: ctc2,
    owner: ctc0,
    price: ctc2,
    title: ctc4,
    tokenID: ctc2
    });
  const ctc6 = stdlib.T_Contract;
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc2, ctc2, ctc7]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc10 = stdlib.T_Tuple([ctc2]);
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Data({
    Auctioneer_stopAuction0_103: ctc11,
    Bidder_bid0_103: ctc10,
    Bidder_optIn0_103: ctc11
    });
  const ctc13 = stdlib.T_Tuple([ctc0, ctc2]);
  const ctc14 = stdlib.T_Null;
  
  
  const [v724, v725, v726, v743, v744, v745, v747, v753, v754, v755, v756, v757, v758, v764, v765, v786] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc0, ctc1, ctc5, ctc2, ctc2, ctc6, ctc4, ctc2, ctc0, ctc7, ctc7, ctc2, ctc2, ctc9, ctc2, ctc7]);
  const v804 = stdlib.protect(ctc10, await interact.in(), {
    at: './src/contracts/auction.rsh:1:23:application',
    fs: ['at ./src/contracts/auction.rsh:94:41:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:94:41:function exp)', 'at ./src/contracts/auction.rsh:82:83:application call to "runBidder_bid0_103" (defined at: ./src/contracts/auction.rsh:94:22:function exp)', 'at ./src/contracts/auction.rsh:82:83:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:82:83:function exp)'],
    msg: 'in',
    who: 'Bidder_bid'
    });
  const v805 = v804[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v807 = stdlib.gt(v805, v757);
  stdlib.assert(v807, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/auction.rsh:95:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/auction.rsh:94:41:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:94:41:function exp)', 'at ./src/contracts/auction.rsh:82:83:application call to "runBidder_bid0_103" (defined at: ./src/contracts/auction.rsh:94:22:function exp)', 'at ./src/contracts/auction.rsh:82:83:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:82:83:function exp)'],
    msg: 'Your bid is too low, please try again',
    who: 'Bidder_bid'
    });
  const v814 = ['Bidder_bid0_103', v804];
  
  const txn1 = await (ctc.sendrecv({
    args: [v724, v725, v726, v743, v744, v745, v747, v753, v754, v755, v756, v757, v758, v764, v765, v786, v814],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc12],
    pay: [v805, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v831], secs: v833, time: v832, didSend: v297, from: v830 } = txn1;
      
      switch (v831[0]) {
        case 'Auctioneer_stopAuction0_103': {
          const v834 = v831[1];
          
          break;
          }
        case 'Bidder_bid0_103': {
          const v934 = v831[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bidder_bid"
            });
          const v940 = v934[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:94:22:spread', stdlib.UInt_max, '0')];
          const v945 = stdlib.add(v765, v940);
          sim_r.txns.push({
            amt: v940,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v966 = [v754, v757];
          const v967 = await txn1.getOutput('Bidder_bid', 'v966', ctc13, v966);
          
          if (v755) {
            const v984 = 'bidSuccess          ';
            null;
            const v3517 = v830;
            const v3518 = false;
            const v3519 = v756;
            const v3520 = v940;
            const v3521 = v832;
            const v3523 = v764;
            const v3524 = v945;
            const v3525 = stdlib.gt(v753, v758);
            const v3526 = v3525 ? v756 : false;
            if (v3526) {
              const v3528 = true;
              sim_r.isHalt = false;
              }
            else {
              const v3532 = 'down                ';
              null;
              const v3579 = v764;
              const v3580 = v945;
              const v3581 = stdlib.safeAdd(v832, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
              sim_r.isHalt = false;
              }}
          else {
            const v979 = stdlib.sub(v945, v757);
            sim_r.txns.push({
              kind: 'from',
              to: v754,
              tok: undefined /* Nothing */
              });
            const v981 = 'bidSuccess          ';
            null;
            const v3584 = v830;
            const v3585 = false;
            const v3586 = v756;
            const v3587 = v940;
            const v3588 = v832;
            const v3590 = v764;
            const v3591 = v979;
            const v3592 = stdlib.gt(v753, v758);
            const v3593 = v3592 ? v756 : false;
            if (v3593) {
              const v3595 = true;
              sim_r.isHalt = false;
              }
            else {
              const v3599 = 'down                ';
              null;
              const v3646 = v764;
              const v3647 = v979;
              const v3648 = stdlib.safeAdd(v832, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
              sim_r.isHalt = false;
              }}
          break;
          }
        case 'Bidder_optIn0_103': {
          const v1034 = v831[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc5, ctc2, ctc2, ctc6, ctc4, ctc2, ctc0, ctc7, ctc7, ctc2, ctc2, ctc9, ctc2, ctc7, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [v831], secs: v833, time: v832, didSend: v297, from: v830 } = txn1;
  switch (v831[0]) {
    case 'Auctioneer_stopAuction0_103': {
      const v834 = v831[1];
      return;
      break;
      }
    case 'Bidder_bid0_103': {
      const v934 = v831[1];
      undefined /* setApiDetails */;
      const v940 = v934[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:94:22:spread', stdlib.UInt_max, '0')];
      const v941 = stdlib.gt(v940, v757);
      stdlib.assert(v941, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/auction.rsh:95:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/auction.rsh:94:41:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:94:41:function exp)', 'at ./src/contracts/auction.rsh:82:83:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:94:41:function exp)', 'at ./src/contracts/auction.rsh:82:83:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:82:83:function exp)'],
        msg: 'Your bid is too low, please try again',
        who: 'Bidder_bid'
        });
      const v945 = stdlib.add(v765, v940);
      ;
      const v966 = [v754, v757];
      const v967 = await txn1.getOutput('Bidder_bid', 'v966', ctc13, v966);
      if (v297) {
        stdlib.protect(ctc14, await interact.out(v934, v967), {
          at: './src/contracts/auction.rsh:94:23:application',
          fs: ['at ./src/contracts/auction.rsh:94:23:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:94:23:function exp)', 'at ./src/contracts/auction.rsh:99:47:application call to "notify" (defined at: ./src/contracts/auction.rsh:98:42:function exp)', 'at ./src/contracts/auction.rsh:98:42:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:98:42:function exp)'],
          msg: 'out',
          who: 'Bidder_bid'
          });
        }
      else {
        }
      
      if (v755) {
        const v984 = 'bidSuccess          ';
        null;
        const v3517 = v830;
        const v3518 = false;
        const v3519 = v756;
        const v3520 = v940;
        const v3521 = v832;
        const v3523 = v764;
        const v3524 = v945;
        const v3525 = stdlib.gt(v753, v758);
        const v3526 = v3525 ? v756 : false;
        if (v3526) {
          const v3528 = true;
          return;
          }
        else {
          const v3532 = 'down                ';
          null;
          const v3579 = v764;
          const v3580 = v945;
          const v3581 = stdlib.safeAdd(v832, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
          return;
          }}
      else {
        const v979 = stdlib.sub(v945, v757);
        ;
        const v981 = 'bidSuccess          ';
        null;
        const v3584 = v830;
        const v3585 = false;
        const v3586 = v756;
        const v3587 = v940;
        const v3588 = v832;
        const v3590 = v764;
        const v3591 = v979;
        const v3592 = stdlib.gt(v753, v758);
        const v3593 = v3592 ? v756 : false;
        if (v3593) {
          const v3595 = true;
          return;
          }
        else {
          const v3599 = 'down                ';
          null;
          const v3646 = v764;
          const v3647 = v979;
          const v3648 = stdlib.safeAdd(v832, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
          return;
          }}
      break;
      }
    case 'Bidder_optIn0_103': {
      const v1034 = v831[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Bidder_optIn6(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bidder_optIn6 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bidder_optIn6 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '80'));
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc5 = stdlib.T_Object({
    Admin: ctc0,
    deadline: ctc2,
    description: ctc3,
    id: ctc2,
    owner: ctc0,
    price: ctc2,
    title: ctc4,
    tokenID: ctc2
    });
  const ctc6 = stdlib.T_Contract;
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc2, ctc2, ctc7]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Tuple([ctc2]);
  const ctc12 = stdlib.T_Data({
    Auctioneer_stopAuction0_103: ctc10,
    Bidder_bid0_103: ctc11,
    Bidder_optIn0_103: ctc10
    });
  const ctc13 = stdlib.T_Null;
  
  
  const [v724, v725, v726, v743, v744, v745, v747, v753, v754, v755, v756, v757, v758, v764, v765, v786] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc0, ctc1, ctc5, ctc2, ctc2, ctc6, ctc4, ctc2, ctc0, ctc7, ctc7, ctc2, ctc2, ctc9, ctc2, ctc7]);
  const v818 = stdlib.protect(ctc10, await interact.in(), {
    at: './src/contracts/auction.rsh:1:23:application',
    fs: ['at ./src/contracts/auction.rsh:107:40:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:107:40:function exp)', 'at ./src/contracts/auction.rsh:82:83:application call to "runBidder_optIn0_103" (defined at: ./src/contracts/auction.rsh:107:22:function exp)', 'at ./src/contracts/auction.rsh:82:83:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:82:83:function exp)'],
    msg: 'in',
    who: 'Bidder_optIn'
    });
  const v822 = ['Bidder_optIn0_103', v818];
  
  const txn1 = await (ctc.sendrecv({
    args: [v724, v725, v726, v743, v744, v745, v747, v753, v754, v755, v756, v757, v758, v764, v765, v786, v822],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc12],
    pay: [stdlib.checkedBigNumberify('./src/contracts/auction.rsh:12:18:decimal', stdlib.UInt_max, '1000000'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v831], secs: v833, time: v832, didSend: v297, from: v830 } = txn1;
      
      switch (v831[0]) {
        case 'Auctioneer_stopAuction0_103': {
          const v834 = v831[1];
          
          break;
          }
        case 'Bidder_bid0_103': {
          const v934 = v831[1];
          
          break;
          }
        case 'Bidder_optIn0_103': {
          const v1034 = v831[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bidder_optIn"
            });
          const v1045 = stdlib.add(v765, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:12:18:decimal', stdlib.UInt_max, '1000000'));
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:12:18:decimal', stdlib.UInt_max, '1000000'),
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v1088 = stdlib.ge(v1045, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:111:75:application', stdlib.UInt_max, '900000'));
          if (v1088) {
            const v1089 = v726.Admin;
            const v1093 = stdlib.sub(v1045, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:111:75:application', stdlib.UInt_max, '900000'));
            sim_r.txns.push({
              kind: 'from',
              to: v1089,
              tok: undefined /* Nothing */
              });
            const v1095 = stdlib.ge(v1093, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:112:76:application', stdlib.UInt_max, '100000'));
            if (v1095) {
              const v1099 = stdlib.sub(v1093, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:112:76:application', stdlib.UInt_max, '100000'));
              sim_r.txns.push({
                kind: 'from',
                to: v724,
                tok: undefined /* Nothing */
                });
              const v1100 = true;
              const v1101 = await txn1.getOutput('Bidder_optIn', 'v1100', ctc7, v1100);
              
              const v4120 = v754;
              const v4121 = v755;
              const v4122 = v756;
              const v4123 = v757;
              const v4124 = v832;
              const v4126 = v764;
              const v4127 = v1099;
              const v4128 = stdlib.gt(v753, v758);
              const v4129 = v4128 ? v756 : false;
              if (v4129) {
                const v4131 = true;
                sim_r.isHalt = false;
                }
              else {
                const v4135 = 'down                ';
                null;
                const v4182 = v764;
                const v4183 = v1099;
                const v4184 = stdlib.safeAdd(v832, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
                sim_r.isHalt = false;
                }}
            else {
              const v1107 = true;
              const v1108 = await txn1.getOutput('Bidder_optIn', 'v1107', ctc7, v1107);
              
              const v4187 = v754;
              const v4188 = v755;
              const v4189 = v756;
              const v4190 = v757;
              const v4191 = v832;
              const v4193 = v764;
              const v4194 = v1093;
              const v4195 = stdlib.gt(v753, v758);
              const v4196 = v4195 ? v756 : false;
              if (v4196) {
                const v4198 = true;
                sim_r.isHalt = false;
                }
              else {
                const v4202 = 'down                ';
                null;
                const v4249 = v764;
                const v4250 = v1093;
                const v4251 = stdlib.safeAdd(v832, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
                sim_r.isHalt = false;
                }}}
          else {
            const v1115 = stdlib.ge(v1045, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:112:76:application', stdlib.UInt_max, '100000'));
            if (v1115) {
              const v1119 = stdlib.sub(v1045, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:112:76:application', stdlib.UInt_max, '100000'));
              sim_r.txns.push({
                kind: 'from',
                to: v724,
                tok: undefined /* Nothing */
                });
              const v1120 = true;
              const v1121 = await txn1.getOutput('Bidder_optIn', 'v1120', ctc7, v1120);
              
              const v4254 = v754;
              const v4255 = v755;
              const v4256 = v756;
              const v4257 = v757;
              const v4258 = v832;
              const v4260 = v764;
              const v4261 = v1119;
              const v4262 = stdlib.gt(v753, v758);
              const v4263 = v4262 ? v756 : false;
              if (v4263) {
                const v4265 = true;
                sim_r.isHalt = false;
                }
              else {
                const v4269 = 'down                ';
                null;
                const v4316 = v764;
                const v4317 = v1119;
                const v4318 = stdlib.safeAdd(v832, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
                sim_r.isHalt = false;
                }}
            else {
              const v1127 = true;
              const v1128 = await txn1.getOutput('Bidder_optIn', 'v1127', ctc7, v1127);
              
              const v4321 = v754;
              const v4322 = v755;
              const v4323 = v756;
              const v4324 = v757;
              const v4325 = v832;
              const v4327 = v764;
              const v4328 = v1045;
              const v4329 = stdlib.gt(v753, v758);
              const v4330 = v4329 ? v756 : false;
              if (v4330) {
                const v4332 = true;
                sim_r.isHalt = false;
                }
              else {
                const v4336 = 'down                ';
                null;
                const v4383 = v764;
                const v4384 = v1045;
                const v4385 = stdlib.safeAdd(v832, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
                sim_r.isHalt = false;
                }}}
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc5, ctc2, ctc2, ctc6, ctc4, ctc2, ctc0, ctc7, ctc7, ctc2, ctc2, ctc9, ctc2, ctc7, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [v831], secs: v833, time: v832, didSend: v297, from: v830 } = txn1;
  switch (v831[0]) {
    case 'Auctioneer_stopAuction0_103': {
      const v834 = v831[1];
      return;
      break;
      }
    case 'Bidder_bid0_103': {
      const v934 = v831[1];
      return;
      break;
      }
    case 'Bidder_optIn0_103': {
      const v1034 = v831[1];
      undefined /* setApiDetails */;
      const v1045 = stdlib.add(v765, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:12:18:decimal', stdlib.UInt_max, '1000000'));
      ;
      const v1088 = stdlib.ge(v1045, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:111:75:application', stdlib.UInt_max, '900000'));
      if (v1088) {
        const v1089 = v726.Admin;
        const v1093 = stdlib.sub(v1045, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:111:75:application', stdlib.UInt_max, '900000'));
        ;
        const v1095 = stdlib.ge(v1093, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:112:76:application', stdlib.UInt_max, '100000'));
        if (v1095) {
          const v1099 = stdlib.sub(v1093, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:112:76:application', stdlib.UInt_max, '100000'));
          ;
          const v1100 = true;
          const v1101 = await txn1.getOutput('Bidder_optIn', 'v1100', ctc7, v1100);
          if (v297) {
            stdlib.protect(ctc13, await interact.out(v1034, v1101), {
              at: './src/contracts/auction.rsh:107:23:application',
              fs: ['at ./src/contracts/auction.rsh:107:23:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:107:23:function exp)', 'at ./src/contracts/auction.rsh:115:47:application call to "notify" (defined at: ./src/contracts/auction.rsh:110:42:function exp)', 'at ./src/contracts/auction.rsh:110:42:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:110:42:function exp)'],
              msg: 'out',
              who: 'Bidder_optIn'
              });
            }
          else {
            }
          
          const v4120 = v754;
          const v4121 = v755;
          const v4122 = v756;
          const v4123 = v757;
          const v4124 = v832;
          const v4126 = v764;
          const v4127 = v1099;
          const v4128 = stdlib.gt(v753, v758);
          const v4129 = v4128 ? v756 : false;
          if (v4129) {
            const v4131 = true;
            return;
            }
          else {
            const v4135 = 'down                ';
            null;
            const v4182 = v764;
            const v4183 = v1099;
            const v4184 = stdlib.safeAdd(v832, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
            return;
            }}
        else {
          const v1107 = true;
          const v1108 = await txn1.getOutput('Bidder_optIn', 'v1107', ctc7, v1107);
          if (v297) {
            stdlib.protect(ctc13, await interact.out(v1034, v1108), {
              at: './src/contracts/auction.rsh:107:23:application',
              fs: ['at ./src/contracts/auction.rsh:107:23:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:107:23:function exp)', 'at ./src/contracts/auction.rsh:115:47:application call to "notify" (defined at: ./src/contracts/auction.rsh:110:42:function exp)', 'at ./src/contracts/auction.rsh:110:42:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:110:42:function exp)'],
              msg: 'out',
              who: 'Bidder_optIn'
              });
            }
          else {
            }
          
          const v4187 = v754;
          const v4188 = v755;
          const v4189 = v756;
          const v4190 = v757;
          const v4191 = v832;
          const v4193 = v764;
          const v4194 = v1093;
          const v4195 = stdlib.gt(v753, v758);
          const v4196 = v4195 ? v756 : false;
          if (v4196) {
            const v4198 = true;
            return;
            }
          else {
            const v4202 = 'down                ';
            null;
            const v4249 = v764;
            const v4250 = v1093;
            const v4251 = stdlib.safeAdd(v832, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
            return;
            }}}
      else {
        const v1115 = stdlib.ge(v1045, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:112:76:application', stdlib.UInt_max, '100000'));
        if (v1115) {
          const v1119 = stdlib.sub(v1045, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:112:76:application', stdlib.UInt_max, '100000'));
          ;
          const v1120 = true;
          const v1121 = await txn1.getOutput('Bidder_optIn', 'v1120', ctc7, v1120);
          if (v297) {
            stdlib.protect(ctc13, await interact.out(v1034, v1121), {
              at: './src/contracts/auction.rsh:107:23:application',
              fs: ['at ./src/contracts/auction.rsh:107:23:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:107:23:function exp)', 'at ./src/contracts/auction.rsh:115:47:application call to "notify" (defined at: ./src/contracts/auction.rsh:110:42:function exp)', 'at ./src/contracts/auction.rsh:110:42:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:110:42:function exp)'],
              msg: 'out',
              who: 'Bidder_optIn'
              });
            }
          else {
            }
          
          const v4254 = v754;
          const v4255 = v755;
          const v4256 = v756;
          const v4257 = v757;
          const v4258 = v832;
          const v4260 = v764;
          const v4261 = v1119;
          const v4262 = stdlib.gt(v753, v758);
          const v4263 = v4262 ? v756 : false;
          if (v4263) {
            const v4265 = true;
            return;
            }
          else {
            const v4269 = 'down                ';
            null;
            const v4316 = v764;
            const v4317 = v1119;
            const v4318 = stdlib.safeAdd(v832, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
            return;
            }}
        else {
          const v1127 = true;
          const v1128 = await txn1.getOutput('Bidder_optIn', 'v1127', ctc7, v1127);
          if (v297) {
            stdlib.protect(ctc13, await interact.out(v1034, v1128), {
              at: './src/contracts/auction.rsh:107:23:application',
              fs: ['at ./src/contracts/auction.rsh:107:23:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:107:23:function exp)', 'at ./src/contracts/auction.rsh:115:47:application call to "notify" (defined at: ./src/contracts/auction.rsh:110:42:function exp)', 'at ./src/contracts/auction.rsh:110:42:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:110:42:function exp)'],
              msg: 'out',
              who: 'Bidder_optIn'
              });
            }
          else {
            }
          
          const v4321 = v754;
          const v4322 = v755;
          const v4323 = v756;
          const v4324 = v757;
          const v4325 = v832;
          const v4327 = v764;
          const v4328 = v1045;
          const v4329 = stdlib.gt(v753, v758);
          const v4330 = v4329 ? v756 : false;
          if (v4330) {
            const v4332 = true;
            return;
            }
          else {
            const v4336 = 'down                ';
            null;
            const v4383 = v764;
            const v4384 = v1045;
            const v4385 = stdlib.safeAdd(v832, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
            return;
            }}}
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
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '80'));
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Object({
    Admin: ctc0,
    deadline: ctc1,
    description: ctc2,
    id: ctc1,
    owner: ctc0,
    price: ctc1,
    title: ctc3,
    tokenContract: ctc4,
    tokenID: ctc1
    });
  const ctc6 = stdlib.T_Object({
    Admin: ctc0,
    deadline: ctc1,
    description: ctc2,
    id: ctc1,
    owner: ctc0,
    price: ctc1,
    title: ctc3,
    tokenID: ctc1
    });
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc1]);
  const ctc9 = stdlib.T_Data({
    Auctioneer_stopAuction0_103: ctc7,
    Bidder_bid0_103: ctc8,
    Bidder_optIn0_103: ctc7
    });
  const ctc10 = stdlib.T_Struct([['id', ctc1], ['blockEnded', ctc1], ['lastBid', ctc1]]);
  const ctc11 = stdlib.T_Tuple([ctc0, ctc1]);
  const ctc12 = stdlib.T_Bool;
  const ctc13 = stdlib.T_Contract;
  const ctc14 = stdlib.T_Tuple([ctc1, ctc1, ctc12]);
  const ctc15 = stdlib.T_Array(ctc14, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc16 = stdlib.T_Data({
    Auctioneer_acceptSale0_416: ctc7,
    Auctioneer_rejectSale0_416: ctc7
    });
  
  
  const v697 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v698 = [v697];
  const v702 = stdlib.protect(ctc5, interact.getAuction, 'for Seller\'s interact field getAuction');
  const v703 = v702.Admin;
  const v704 = v702.deadline;
  const v705 = v702.description;
  const v706 = v702.id;
  const v707 = v702.owner;
  const v708 = v702.price;
  const v709 = v702.title;
  const v710 = v702.tokenContract;
  const v711 = v702.tokenID;
  
  const v723 = {
    Admin: v703,
    deadline: v704,
    description: v705,
    id: v706,
    owner: v707,
    price: v708,
    title: v709,
    tokenID: v711
    };
  
  const txn1 = await (ctc.sendrecv({
    args: [v710, v723],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:62:16:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4, ctc6],
    pay: [stdlib.checkedBigNumberify('./src/contracts/auction.rsh:62:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v725, v726], secs: v728, time: v727, didSend: v47, from: v724 } = txn1;
      
      const v729 = v698[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:62:16:dot', stdlib.UInt_max, '0')];
      const v730 = stdlib.Array_set(v729, '0', stdlib.checkedBigNumberify('./src/contracts/auction.rsh:62:16:dot', stdlib.UInt_max, '0'));
      const v731 = stdlib.Array_set(v698, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:62:16:dot', stdlib.UInt_max, '0'), v730);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v725
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v725, v726], secs: v728, time: v727, didSend: v47, from: v724 } = txn1;
  const v729 = v698[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:62:16:dot', stdlib.UInt_max, '0')];
  const v730 = stdlib.Array_set(v729, '0', stdlib.checkedBigNumberify('./src/contracts/auction.rsh:62:16:dot', stdlib.UInt_max, '0'));
  const v731 = stdlib.Array_set(v698, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:62:16:dot', stdlib.UInt_max, '0'), v730);
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v724, v725, v726, v727, v731],
    evt_cnt: 0,
    funcNum: 1,
    lct: v727,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./src/contracts/auction.rsh:64:16:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:11:13:decimal', stdlib.UInt_max, '1'), v725]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v735, time: v734, didSend: v54, from: v733 } = txn2;
      
      ;
      const v736 = v731[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:64:16:dot', stdlib.UInt_max, '0')];
      const v737 = v736[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:64:16:dot', stdlib.UInt_max, '0')];
      const v738 = stdlib.add(v737, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:11:13:decimal', stdlib.UInt_max, '1'));
      const v740 = stdlib.Array_set(v736, '0', v738);
      const v741 = stdlib.Array_set(v731, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:64:16:dot', stdlib.UInt_max, '0'), v740);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:11:13:decimal', stdlib.UInt_max, '1'),
        kind: 'to',
        tok: v725
        });
      const v743 = v734;
      const v744 = v726.id;
      const v745 = await ctc.getContractInfo();
      const v746 = v726.owner;
      const v747 = v726.title;
      const v748 = v726.description;
      const v749 = v726.price;
      const v750 = v726.tokenID;
      null;
      const v751 = v726.deadline;
      const v753 = stdlib.safeAdd(v727, v751);
      const v754 = v724;
      const v755 = true;
      const v756 = true;
      const v757 = stdlib.checkedBigNumberify('./src/contracts/auction.rsh:85:17:decimal', stdlib.UInt_max, '0');
      const v758 = v734;
      const v759 = v727;
      const v764 = v741;
      const v765 = stdlib.checkedBigNumberify('./src/contracts/auction.rsh:57:9:after expr stmt', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v779 = stdlib.gt(v753, v759);
        const v783 = v779 ? v756 : false;
        
        return v783;})()) {
        const v785 = stdlib.gt(v753, v759);
        const v786 = v756 ? v785 : false;
        sim_r.isHalt = false;
        }
      else {
        const v1141 = stdlib.gt(v753, v759);
        const v1145 = v1141 ? v756 : false;
        const v1148 = 'down                ';
        null;
        const v1149 = true;
        const v1150 = v758;
        const v1156 = v764;
        const v1157 = v765;
        
        if (await (async () => {
          
          return v1149;})()) {
          const v1169 = stdlib.safeAdd(v1150, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
          sim_r.isHalt = false;
          }
        else {
          const v1332 = v1156[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:214:25:application', stdlib.UInt_max, '0')];
          const v1333 = v1332[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:214:25:application', stdlib.UInt_max, '0')];
          sim_r.txns.push({
            kind: 'from',
            to: v754,
            tok: v725
            });
          sim_r.txns.push({
            kind: 'from',
            to: v724,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v725
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
    tys: [ctc0, ctc4, ctc6, ctc1, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v735, time: v734, didSend: v54, from: v733 } = txn2;
  ;
  const v736 = v731[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:64:16:dot', stdlib.UInt_max, '0')];
  const v737 = v736[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:64:16:dot', stdlib.UInt_max, '0')];
  const v738 = stdlib.add(v737, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:11:13:decimal', stdlib.UInt_max, '1'));
  const v740 = stdlib.Array_set(v736, '0', v738);
  const v741 = stdlib.Array_set(v731, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:64:16:dot', stdlib.UInt_max, '0'), v740);
  ;
  const v742 = stdlib.addressEq(v724, v733);
  stdlib.assert(v742, {
    at: './src/contracts/auction.rsh:64:16:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Seller'
    });
  const v743 = v734;
  const v744 = v726.id;
  const v745 = await ctc.getContractInfo();
  const v746 = v726.owner;
  const v747 = v726.title;
  const v748 = v726.description;
  const v749 = v726.price;
  const v750 = v726.tokenID;
  null;
  const v751 = v726.deadline;
  const v753 = stdlib.safeAdd(v727, v751);
  let v754 = v724;
  let v755 = true;
  let v756 = true;
  let v757 = stdlib.checkedBigNumberify('./src/contracts/auction.rsh:85:17:decimal', stdlib.UInt_max, '0');
  let v758 = v734;
  let v759 = v727;
  let v764 = v741;
  let v765 = stdlib.checkedBigNumberify('./src/contracts/auction.rsh:57:9:after expr stmt', stdlib.UInt_max, '0');
  
  let txn3 = txn2;
  while (await (async () => {
    const v779 = stdlib.gt(v753, v759);
    const v783 = v779 ? v756 : false;
    
    return v783;})()) {
    const v785 = stdlib.gt(v753, v759);
    const v786 = v756 ? v785 : false;
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 6,
      out_tys: [ctc9],
      timeoutAt: ['time', v753],
      waitIfNotPresent: false
      }));
    if (txn4.didTimeout) {
      const txn5 = await (ctc.sendrecv({
        args: [v724, v725, v726, v743, v744, v745, v747, v753, v754, v755, v756, v757, v758, v764, v765, v786],
        evt_cnt: 0,
        funcNum: 7,
        lct: v758,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./src/contracts/auction.rsh:138:32:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v1136, time: v1135, didSend: v394, from: v1134 } = txn5;
          
          ;
          const cv754 = v754;
          const cv755 = v755;
          const cv756 = v756;
          const cv757 = v757;
          const cv758 = v1135;
          const cv759 = v758;
          const cv764 = v764;
          const cv765 = v765;
          
          await (async () => {
            const v754 = cv754;
            const v755 = cv755;
            const v756 = cv756;
            const v757 = cv757;
            const v758 = cv758;
            const v759 = cv759;
            const v764 = cv764;
            const v765 = cv765;
            
            if (await (async () => {
              const v779 = stdlib.gt(v753, v759);
              const v783 = v779 ? v756 : false;
              
              return v783;})()) {
              const v785 = stdlib.gt(v753, v759);
              const v786 = v756 ? v785 : false;
              sim_r.isHalt = false;
              }
            else {
              const v1141 = stdlib.gt(v753, v759);
              const v1145 = v1141 ? v756 : false;
              const v1148 = 'down                ';
              null;
              const v1149 = true;
              const v1150 = v758;
              const v1156 = v764;
              const v1157 = v765;
              
              if (await (async () => {
                
                return v1149;})()) {
                const v1169 = stdlib.safeAdd(v1150, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
                sim_r.isHalt = false;
                }
              else {
                const v1332 = v1156[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:214:25:application', stdlib.UInt_max, '0')];
                const v1333 = v1332[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:214:25:application', stdlib.UInt_max, '0')];
                sim_r.txns.push({
                  kind: 'from',
                  to: v754,
                  tok: v725
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v724,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v725
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}})();
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc0, ctc4, ctc6, ctc1, ctc1, ctc13, ctc3, ctc1, ctc0, ctc12, ctc12, ctc1, ctc1, ctc15, ctc1, ctc12],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v1136, time: v1135, didSend: v394, from: v1134 } = txn5;
      ;
      const v1137 = stdlib.addressEq(v724, v1134);
      stdlib.assert(v1137, {
        at: './src/contracts/auction.rsh:138:32:dot',
        fs: ['at ./src/contracts/auction.rsh:137:46:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:137:46:function exp)'],
        msg: 'sender correct',
        who: 'Seller'
        });
      const cv754 = v754;
      const cv755 = v755;
      const cv756 = v756;
      const cv757 = v757;
      const cv758 = v1135;
      const cv759 = v758;
      const cv764 = v764;
      const cv765 = v765;
      
      v754 = cv754;
      v755 = cv755;
      v756 = cv756;
      v757 = cv757;
      v758 = cv758;
      v759 = cv759;
      v764 = cv764;
      v765 = cv765;
      
      txn3 = txn5;
      continue;
      }
    else {
      const {data: [v831], secs: v833, time: v832, didSend: v297, from: v830 } = txn4;
      switch (v831[0]) {
        case 'Auctioneer_stopAuction0_103': {
          const v834 = v831[1];
          undefined /* setApiDetails */;
          ;
          const v848 = 'endSuccess          ';
          null;
          const v851 = {
            blockEnded: v832,
            id: v744,
            lastBid: v757
            };
          await txn4.getOutput('Auctioneer_stopAuction', 'v851', ctc10, v851);
          const cv754 = v754;
          const cv755 = v755;
          const cv756 = false;
          const cv757 = v757;
          const cv758 = v832;
          const cv759 = v758;
          const cv764 = v764;
          const cv765 = v765;
          
          v754 = cv754;
          v755 = cv755;
          v756 = cv756;
          v757 = cv757;
          v758 = cv758;
          v759 = cv759;
          v764 = cv764;
          v765 = cv765;
          
          txn3 = txn4;
          continue;
          break;
          }
        case 'Bidder_bid0_103': {
          const v934 = v831[1];
          undefined /* setApiDetails */;
          const v940 = v934[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:94:22:spread', stdlib.UInt_max, '0')];
          const v941 = stdlib.gt(v940, v757);
          stdlib.assert(v941, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./src/contracts/auction.rsh:95:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/auction.rsh:94:41:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:94:41:function exp)', 'at ./src/contracts/auction.rsh:82:83:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:94:41:function exp)', 'at ./src/contracts/auction.rsh:82:83:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:82:83:function exp)'],
            msg: 'Your bid is too low, please try again',
            who: 'Seller'
            });
          const v945 = stdlib.add(v765, v940);
          ;
          const v966 = [v754, v757];
          await txn4.getOutput('Bidder_bid', 'v966', ctc11, v966);
          if (v755) {
            const v984 = 'bidSuccess          ';
            null;
            const cv754 = v830;
            const cv755 = false;
            const cv756 = v756;
            const cv757 = v940;
            const cv758 = v832;
            const cv759 = v758;
            const cv764 = v764;
            const cv765 = v945;
            
            v754 = cv754;
            v755 = cv755;
            v756 = cv756;
            v757 = cv757;
            v758 = cv758;
            v759 = cv759;
            v764 = cv764;
            v765 = cv765;
            
            txn3 = txn4;
            continue;}
          else {
            const v979 = stdlib.sub(v945, v757);
            ;
            const v981 = 'bidSuccess          ';
            null;
            const cv754 = v830;
            const cv755 = false;
            const cv756 = v756;
            const cv757 = v940;
            const cv758 = v832;
            const cv759 = v758;
            const cv764 = v764;
            const cv765 = v979;
            
            v754 = cv754;
            v755 = cv755;
            v756 = cv756;
            v757 = cv757;
            v758 = cv758;
            v759 = cv759;
            v764 = cv764;
            v765 = cv765;
            
            txn3 = txn4;
            continue;}
          break;
          }
        case 'Bidder_optIn0_103': {
          const v1034 = v831[1];
          undefined /* setApiDetails */;
          const v1045 = stdlib.add(v765, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:12:18:decimal', stdlib.UInt_max, '1000000'));
          ;
          const v1088 = stdlib.ge(v1045, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:111:75:application', stdlib.UInt_max, '900000'));
          if (v1088) {
            const v1089 = v726.Admin;
            const v1093 = stdlib.sub(v1045, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:111:75:application', stdlib.UInt_max, '900000'));
            ;
            const v1095 = stdlib.ge(v1093, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:112:76:application', stdlib.UInt_max, '100000'));
            if (v1095) {
              const v1099 = stdlib.sub(v1093, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:112:76:application', stdlib.UInt_max, '100000'));
              ;
              const v1100 = true;
              await txn4.getOutput('Bidder_optIn', 'v1100', ctc12, v1100);
              const cv754 = v754;
              const cv755 = v755;
              const cv756 = v756;
              const cv757 = v757;
              const cv758 = v832;
              const cv759 = v758;
              const cv764 = v764;
              const cv765 = v1099;
              
              v754 = cv754;
              v755 = cv755;
              v756 = cv756;
              v757 = cv757;
              v758 = cv758;
              v759 = cv759;
              v764 = cv764;
              v765 = cv765;
              
              txn3 = txn4;
              continue;}
            else {
              const v1107 = true;
              await txn4.getOutput('Bidder_optIn', 'v1107', ctc12, v1107);
              const cv754 = v754;
              const cv755 = v755;
              const cv756 = v756;
              const cv757 = v757;
              const cv758 = v832;
              const cv759 = v758;
              const cv764 = v764;
              const cv765 = v1093;
              
              v754 = cv754;
              v755 = cv755;
              v756 = cv756;
              v757 = cv757;
              v758 = cv758;
              v759 = cv759;
              v764 = cv764;
              v765 = cv765;
              
              txn3 = txn4;
              continue;}}
          else {
            const v1115 = stdlib.ge(v1045, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:112:76:application', stdlib.UInt_max, '100000'));
            if (v1115) {
              const v1119 = stdlib.sub(v1045, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:112:76:application', stdlib.UInt_max, '100000'));
              ;
              const v1120 = true;
              await txn4.getOutput('Bidder_optIn', 'v1120', ctc12, v1120);
              const cv754 = v754;
              const cv755 = v755;
              const cv756 = v756;
              const cv757 = v757;
              const cv758 = v832;
              const cv759 = v758;
              const cv764 = v764;
              const cv765 = v1119;
              
              v754 = cv754;
              v755 = cv755;
              v756 = cv756;
              v757 = cv757;
              v758 = cv758;
              v759 = cv759;
              v764 = cv764;
              v765 = cv765;
              
              txn3 = txn4;
              continue;}
            else {
              const v1127 = true;
              await txn4.getOutput('Bidder_optIn', 'v1127', ctc12, v1127);
              const cv754 = v754;
              const cv755 = v755;
              const cv756 = v756;
              const cv757 = v757;
              const cv758 = v832;
              const cv759 = v758;
              const cv764 = v764;
              const cv765 = v1045;
              
              v754 = cv754;
              v755 = cv755;
              v756 = cv756;
              v757 = cv757;
              v758 = cv758;
              v759 = cv759;
              v764 = cv764;
              v765 = cv765;
              
              txn3 = txn4;
              continue;}}
          break;
          }
        }}
    
    }
  const v1141 = stdlib.gt(v753, v759);
  const v1145 = v1141 ? v756 : false;
  const v1148 = 'down                ';
  null;
  let v1149 = true;
  let v1150 = v758;
  let v1156 = v764;
  let v1157 = v765;
  
  let txn4 = txn3;
  while (await (async () => {
    
    return v1149;})()) {
    const v1169 = stdlib.safeAdd(v1150, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc16],
      timeoutAt: ['time', v1169],
      waitIfNotPresent: false
      }));
    if (txn5.didTimeout) {
      const txn6 = await (ctc.sendrecv({
        args: [v724, v725, v747, v754, v757, v1145, v1156, v1157, v1169],
        evt_cnt: 0,
        funcNum: 5,
        lct: v1150,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./src/contracts/auction.rsh:201:32:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn6) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v1311, time: v1310, didSend: v601, from: v1309 } = txn6;
          
          ;
          const v1313 = v1156[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:202:41:application', stdlib.UInt_max, '0')];
          const v1314 = v1313[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:202:41:application', stdlib.UInt_max, '0')];
          const v1320 = stdlib.sub(v1314, v1314);
          const v1322 = stdlib.Array_set(v1313, '0', v1320);
          const v1323 = stdlib.Array_set(v1156, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:202:75:application', stdlib.UInt_max, '0'), v1322);
          sim_r.txns.push({
            kind: 'from',
            to: v754,
            tok: v725
            });
          const v1328 = stdlib.sub(v1157, v1157);
          sim_r.txns.push({
            kind: 'from',
            to: v724,
            tok: undefined /* Nothing */
            });
          const v1330 = 'accepted            ';
          null;
          const cv1149 = false;
          const cv1150 = v1310;
          const cv1156 = v1323;
          const cv1157 = v1328;
          
          await (async () => {
            const v1149 = cv1149;
            const v1150 = cv1150;
            const v1156 = cv1156;
            const v1157 = cv1157;
            
            if (await (async () => {
              
              return v1149;})()) {
              const v1169 = stdlib.safeAdd(v1150, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
              sim_r.isHalt = false;
              }
            else {
              const v1332 = v1156[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:214:25:application', stdlib.UInt_max, '0')];
              const v1333 = v1332[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:214:25:application', stdlib.UInt_max, '0')];
              sim_r.txns.push({
                kind: 'from',
                to: v754,
                tok: v725
                });
              sim_r.txns.push({
                kind: 'from',
                to: v724,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v725
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }})();
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc0, ctc4, ctc3, ctc0, ctc1, ctc12, ctc15, ctc1, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v1311, time: v1310, didSend: v601, from: v1309 } = txn6;
      ;
      const v1312 = stdlib.addressEq(v724, v1309);
      stdlib.assert(v1312, {
        at: './src/contracts/auction.rsh:201:32:dot',
        fs: ['at ./src/contracts/auction.rsh:200:53:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:200:53:function exp)'],
        msg: 'sender correct',
        who: 'Seller'
        });
      const v1313 = v1156[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:202:41:application', stdlib.UInt_max, '0')];
      const v1314 = v1313[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:202:41:application', stdlib.UInt_max, '0')];
      const v1320 = stdlib.sub(v1314, v1314);
      const v1322 = stdlib.Array_set(v1313, '0', v1320);
      const v1323 = stdlib.Array_set(v1156, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:202:75:application', stdlib.UInt_max, '0'), v1322);
      ;
      const v1328 = stdlib.sub(v1157, v1157);
      ;
      const v1330 = 'accepted            ';
      null;
      const cv1149 = false;
      const cv1150 = v1310;
      const cv1156 = v1323;
      const cv1157 = v1328;
      
      v1149 = cv1149;
      v1150 = cv1150;
      v1156 = cv1156;
      v1157 = cv1157;
      
      txn4 = txn6;
      continue;
      }
    else {
      const {data: [v1194], secs: v1196, time: v1195, didSend: v541, from: v1193 } = txn5;
      switch (v1194[0]) {
        case 'Auctioneer_acceptSale0_416': {
          const v1197 = v1194[1];
          undefined /* setApiDetails */;
          ;
          const v1204 = v1156[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:165:49:application', stdlib.UInt_max, '0')];
          const v1205 = v1204[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:165:49:application', stdlib.UInt_max, '0')];
          const v1211 = stdlib.sub(v1205, v1205);
          const v1213 = stdlib.Array_set(v1204, '0', v1211);
          const v1214 = stdlib.Array_set(v1156, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:165:83:application', stdlib.UInt_max, '0'), v1213);
          ;
          const v1219 = stdlib.sub(v1157, v1157);
          ;
          const v1220 = true;
          await txn5.getOutput('Auctioneer_acceptSale', 'v1220', ctc12, v1220);
          const v1227 = 'accepted            ';
          null;
          const cv1149 = false;
          const cv1150 = v1195;
          const cv1156 = v1214;
          const cv1157 = v1219;
          
          v1149 = cv1149;
          v1150 = cv1150;
          v1156 = cv1156;
          v1157 = cv1157;
          
          txn4 = txn5;
          continue;
          break;
          }
        case 'Auctioneer_rejectSale0_416': {
          const v1253 = v1194[1];
          undefined /* setApiDetails */;
          ;
          const v1285 = v1156[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:186:49:application', stdlib.UInt_max, '0')];
          const v1286 = v1285[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:186:49:application', stdlib.UInt_max, '0')];
          const v1292 = stdlib.sub(v1286, v1286);
          const v1294 = stdlib.Array_set(v1285, '0', v1292);
          const v1295 = stdlib.Array_set(v1156, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:186:83:application', stdlib.UInt_max, '0'), v1294);
          ;
          const v1300 = stdlib.sub(v1157, v1157);
          ;
          const v1301 = false;
          await txn5.getOutput('Auctioneer_rejectSale', 'v1301', ctc12, v1301);
          const v1308 = 'rejected            ';
          null;
          const cv1149 = false;
          const cv1150 = v1195;
          const cv1156 = v1295;
          const cv1157 = v1300;
          
          v1149 = cv1149;
          v1150 = cv1150;
          v1156 = cv1156;
          v1157 = cv1157;
          
          txn4 = txn5;
          continue;
          break;
          }
        }}
    
    }
  const v1332 = v1156[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:214:25:application', stdlib.UInt_max, '0')];
  const v1333 = v1332[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:214:25:application', stdlib.UInt_max, '0')];
  ;
  ;
  return;
  
  
  
  
  };
export async function Auctioneer_acceptSale(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Auctioneer_acceptSale expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Auctioneer_acceptSale expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 5) {return _Auctioneer_acceptSale5(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Auctioneer_rejectSale(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Auctioneer_rejectSale expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Auctioneer_rejectSale expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 5) {return _Auctioneer_rejectSale5(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Auctioneer_stopAuction(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Auctioneer_stopAuction expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Auctioneer_stopAuction expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 6) {return _Auctioneer_stopAuction6(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Bidder_bid(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bidder_bid expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bidder_bid expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 6) {return _Bidder_bid6(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Bidder_optIn(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bidder_optIn expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bidder_optIn expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 6) {return _Bidder_optIn6(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Auctioneer_acceptSale()byte`, `Auctioneer_rejectSale()byte`, `Auctioneer_stopAuction()(uint64,uint64,uint64)`, `Bidder_bid(uint64)(address,uint64)`, `Bidder_optIn()byte`],
    pure: [`AuctionView_awaitingConfirmation()byte`, `AuctionView_isRunning()byte`],
    sigs: [`AuctionView_awaitingConfirmation()byte`, `AuctionView_isRunning()byte`, `Auctioneer_acceptSale()byte`, `Auctioneer_rejectSale()byte`, `Auctioneer_stopAuction()(uint64,uint64,uint64)`, `Bidder_bid(uint64)(address,uint64)`, `Bidder_optIn()byte`]
    },
  GlobalNumByteSlice: 4,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `ByAjAAEEIKCNBgUGCOwBEaD3NrO2z4gI5tji7gvSuNG7DuDt+OMIoJu8gQGWh8iqAQeYAvQB/AGEAhSgAsACwQLCAsoC0gLjAgLAhD1cdn4mBgEBAQABAgAY3xqJa2JpZFN1Y2Nlc3MAAAAAAAAAAAAAGG8qQyxhY2NlcHRlZAAAAAAAAAAAAAAAACI1ADEYQQm8K2RJIls1ASEHWzUCNhoAF0lBAM0iNQQjNQZJIQsMQAB7SSEMDEAAT0khDQxAAA4hDRJEKzX/KTT/UEIFBiEMEkQ0AUkhBgxAABkhBhJEKWQoZFAqZFBJNQOB6wIjWDUHQglRIQUSRClkKGRQSTUDV2QBNQdCCT1JIQ4MQAAQIQ4SRDQBIQUSRCg1B0IJJiELEkQrNf8oNP9QQgSnSSEPDEAAKUkhEAxAABIhEBJEKzX/KjT/UCEHr1BCANghDxJENhoBNf8oNP9QQgDIgaCL6kwSRCs1/yk0/1AhB69QQgCzNhoCFzUENhoDNhoBF0khBQxABEFJIQYMQAN5SSERDEAAkCEREkQhBjQBEkQ0BEkiEkw0AhIRRClkKGRQKmRQSTUDSVcAIDX/IRJbNf6ABOIbs6mwMgY0/g9ENP8xABJENP80AyVbNANXKMQ0AyEIWzQDIRNbNAMhFFs0AyEVIRZYNP40AyEXJVg0AyEYI1gXNAMhGSNYFzQDIRpbMgY0AyEbWzQDIRwhCVg0AyEdW0IGa0ghBjQBEkQ0BEkiEkw0AhIRRClkKGRQKmRQSTUDSUpKSkpKSklXACA1/yVbNf5XKMQ1/SEIWzX8IRNbNfshFFs1+iEVIRZYNfkhEls1+CEXJVg19yEYI1gXNfYhGSNYFzX1IRpbNfQhG1s18yEcIQlYNfIhHVs18Uk1BTXwgAQUDOYINPBQsDIGNPgMRDTwIlVJIwxAAeFJIR4MQAEwIR4SRDTxIR8INe8hH4gHmDTvIQoPQQCZNO8hCgk17rEisgEhCrIII7IQNP1XACCyB7M07iEED0EARbEisgEhBLIII7IQNP+yB7OACQAAAAAAAARMAbAoNQc0/zT+NP00/DT7NPo0+TT4NPc09jT1NPQyBjTzNPI07iEECUIFToAJAAAAAAAABFMBsCg1BzT/NP40/TT8NPs0+jT5NPg09zT2NPU09DIGNPM08jTuQgUcNO8hBA9BAEWxIrIBIQSyCCOyEDT/sgezgAkAAAAAAAAEYAGwKDUHNP80/jT9NPw0+zT6NPk0+DT3NPY09TT0MgY08zTyNO8hBAlCBM+ACQAAAAAAAARnAbAoNQc0/zT+NP00/DT7NPo0+TT4NPc09jT1NPQyBjTzNPI070IEnUg08FcBCDXvNO8XSTXuNPQNRDTxNO4INe007ogGWoAIAAAAAAAAA8Y09zT0FlBQsDT3NPQWUDUHNPZBAC0nBDT7FlA07hZQsDT/NP40/TT8NPs0+jT5NPgxACI09TTuMgY08zTyNO1CBDOxIrIBNPSyCCOyEDT3sgezJwQ0+xZQNO4WULA0/zT+NP00/DT7NPo0+TT4MQAiNPU07jIGNPM08jTtNPQJQgPzSIAY3xqJa2VuZFN1Y2Nlc3MAAAAAAAAAAAAANPsWUDT0FlCwgAgAAAAAAAADUzT7FjIGFlA09BZQULA0+xYyBhZQNPQWUDUHNP80/jT9NPw0+zT6NPk0+DT3NPYiNPQyBjTzNPI08UIDiUghBTQBEkQ0BEkiEkw0AhIRRClkKGRQSTUDSUpKSVcAIDX/JVs1/lcoFDX9VzwgNfwhIFs1+1dlETX6ISFbNfmABMyZklywMgY0AyEiWw9ENP8xABJENPpXABFJNfgiWzX3sSKyATT3shIkshA0/LIUNP6yEbOxIrIBNPmyCCOyEDT/sgezJwU0/VA0+xZQNP9QNPxQNP4WULA0/zT+NP00/DT7NANXZAEXIjIGNPo0+DT3SQkWXABcADT5SQlCA5dJIwxAAjZJJAxAAWlIIQU0ARJENARJIhJMNAISEUQpZChkUEk1A0lKSkpXACA1/yVbNf5XKBQ1/Vc8IDX8ISBbNftXZAEXNfpXZRE1+SEhWzX4STUFNfeABK571AY091CwMgY0AyEiWwxENPciVUAAdjT5VwARSTX2Ils19bEisgE09bISJLIQNPyyFDT+shGzsSKyATT4sggjshA0/7IHs4AJAAAAAAAABMQBsCg1BycFNP1QNPsWUDT/UDT8UDT+FlCwNP80/jT9NPw0+zT6IjIGNPk09jT1SQkWXABcADT4SQlCArA0+VcAEUk19iJbNfWxIrIBNPWyEiSyEDT/shQ0/rIRs7EisgE0+LIII7IQNPyyB7OACQAAAAAAAAUVALApNQeAGG8qQyxyZWplY3RlZAAAAAAAAAAAAAAAADT9UDT7FlA0/1A0/FA0/hZQsDT/NP40/TT8NPs0+iIyBjT5NPY09UkJFlwAXAA0+EkJQgIiIxJEIzQBEkQ0BEkiEkw0AhIRRClkKGRQKmRQSTUDSUpJVwAgNf8lWzX+VyjENf0hCFs1/Ff0ETX7gASai5F0sDT7VwARNfojNP6IAvk0/zEAEkQ0/YF4WzX5MRg1+DT9V6gUNfeABPz2PpY0+RZQNPgWUDIGFlA0/VeAIFA091A0/VcoUFA0/VegCFA0/hZQNP1XvAhQsDT/NP40/TIGNPk0+DT3NPw0/SVbCDT/IyMiMgY0/DT7NPpJIlsjCBZcAFwAIkIAjEghBIgCYSI0ARJENARJIhJMNAISEURJNQVJIls1/1cIxDX+gAQ48daeNP8WUDT+ULAhCa9JNf1JVwARIQevXABcADX8IQSIAh6xIrIBIrISJLIQMgqyFDT/shGzMQA0/xZQNP5QMgYWUDT8UClLAVcAf2coSwFXf39nKksBV/4HZ0gjNQEyBjUCQgGKNf81/jX9Nfw1+zX6Nfk1+DX3NfY19TX0NfM18jXxNfA09zT9DUk17zT6EEEAWjTwNPEWUDTyUDTzFlA09BZQNPUWUDT2UDT3FlA0+FA0+RZRBwhQKFA0+xZQNPwWUDT+UDT/FlAoUClLAVcAf2coSwFXf39nKksBV/5uZ0ghBjUBMgY1AkIBAoAY1sT5+GRvd24AAAAAAAAAAAAAAAAAAAAANPQWUDT7FlA08FA09RZQNPMWULA08DTxNPY0+DT7NO80+hAjNPw0/jT/QgAANf81/jX9Nfw1+zX6Nfk1+DX3NfY0/EEAQzT9gTIINfU09jT3FlA0+FA0+VA0+hZQNPsWUQcIUDT+UDT/FlA09RZQKUsBVwB/ZyhLAVd/B2dIIQU1ATIGNQJCAF+xIrIBNP5XABEiW7ISJLIQNPmyFDT3shGzsSKyATT/sggjshA09rIHs7EisgEishIkshAyCbIVMgqyFDT3shGzQgAAMRkhBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKzQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCQxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiTQASUpJIwg1ADgUMgoSRDgQJBJEOBFPAhJEOBISRIk=`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 1,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 3,
  stateSize: 364,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"components":[{"internalType":"address payable","name":"_Admin","type":"address"},{"internalType":"uint256","name":"_deadline","type":"uint256"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes16","name":"elem2","type":"bytes16"}],"internalType":"struct T6","name":"_description","type":"tuple"},{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"address payable","name":"_owner","type":"address"},{"internalType":"uint256","name":"_price","type":"uint256"},{"internalType":"bytes20","name":"_title","type":"bytes20"},{"internalType":"uint256","name":"_tokenID","type":"uint256"}],"internalType":"struct T7","name":"elem2","type":"tuple"}],"internalType":"struct T14","name":"v4416","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"components":[{"internalType":"address payable","name":"_Admin","type":"address"},{"internalType":"uint256","name":"_deadline","type":"uint256"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes16","name":"elem2","type":"bytes16"}],"internalType":"struct T6","name":"_description","type":"tuple"},{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"address payable","name":"_owner","type":"address"},{"internalType":"uint256","name":"_price","type":"uint256"},{"internalType":"bytes20","name":"_title","type":"bytes20"},{"internalType":"uint256","name":"_tokenID","type":"uint256"}],"internalType":"struct T7","name":"elem2","type":"tuple"}],"indexed":false,"internalType":"struct T14","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T11","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T9","name":"which","type":"uint8"},{"internalType":"bool","name":"_Auctioneer_acceptSale0_416","type":"bool"},{"internalType":"bool","name":"_Auctioneer_rejectSale0_416","type":"bool"}],"internalType":"struct T9","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T10","name":"_a","type":"tuple"}],"name":"_reach_e4","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T11","name":"_a","type":"tuple"}],"name":"_reach_e5","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T12","name":"which","type":"uint8"},{"internalType":"bool","name":"_Auctioneer_stopAuction0_103","type":"bool"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T11","name":"_Bidder_bid0_103","type":"tuple"},{"internalType":"bool","name":"_Bidder_optIn0_103","type":"bool"}],"internalType":"struct T12","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T13","name":"_a","type":"tuple"}],"name":"_reach_e6","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T11","name":"_a","type":"tuple"}],"name":"_reach_e7","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1100","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1107","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1120","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1127","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1220","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1301","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"blockEnded","type":"uint256"},{"internalType":"uint256","name":"lastBid","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v0","type":"tuple"}],"name":"_reach_oe_v851","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"indexed":false,"internalType":"struct T1","name":"v0","type":"tuple"}],"name":"_reach_oe_v966","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"},{"indexed":false,"internalType":"address payable","name":"v1","type":"address"},{"indexed":false,"internalType":"uint256","name":"v2","type":"uint256"},{"indexed":false,"internalType":"address payable","name":"v3","type":"address"},{"indexed":false,"internalType":"bytes20","name":"v4","type":"bytes20"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes16","name":"elem2","type":"bytes16"}],"indexed":false,"internalType":"struct T6","name":"v5","type":"tuple"},{"indexed":false,"internalType":"uint256","name":"v6","type":"uint256"},{"indexed":false,"internalType":"address payable","name":"v7","type":"address"},{"indexed":false,"internalType":"uint256","name":"v8","type":"uint256"}],"name":"created","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes20","name":"v0","type":"bytes20"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"v2","type":"uint256"},{"indexed":false,"internalType":"address payable","name":"v3","type":"address"},{"indexed":false,"internalType":"address payable","name":"v4","type":"address"},{"indexed":false,"internalType":"uint256","name":"v5","type":"uint256"}],"name":"down","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes20","name":"v0","type":"bytes20"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"v2","type":"uint256"}],"name":"log","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes20","name":"v0","type":"bytes20"},{"indexed":false,"internalType":"bytes20","name":"v1","type":"bytes20"},{"indexed":false,"internalType":"uint256","name":"v2","type":"uint256"},{"indexed":false,"internalType":"address payable","name":"v3","type":"address"},{"indexed":false,"internalType":"address payable","name":"v4","type":"address"},{"indexed":false,"internalType":"address payable","name":"v5","type":"address"}],"name":"outcome","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"AuctionView_awaitingConfirmation","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"AuctionView_isRunning","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Auctioneer_acceptSale","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Auctioneer_rejectSale","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Auctioneer_stopAuction","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"blockEnded","type":"uint256"},{"internalType":"uint256","name":"lastBid","type":"uint256"}],"internalType":"struct T0","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v4406","type":"uint256"}],"name":"Bidder_bid","outputs":[{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T1","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Bidder_optIn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T11","name":"v4418","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T9","name":"which","type":"uint8"},{"internalType":"bool","name":"_Auctioneer_acceptSale0_416","type":"bool"},{"internalType":"bool","name":"_Auctioneer_rejectSale0_416","type":"bool"}],"internalType":"struct T9","name":"elem1","type":"tuple"}],"internalType":"struct T10","name":"v4432","type":"tuple"}],"name":"_reachp_4","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T11","name":"v4442","type":"tuple"}],"name":"_reachp_5","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T12","name":"which","type":"uint8"},{"internalType":"bool","name":"_Auctioneer_stopAuction0_103","type":"bool"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T11","name":"_Bidder_bid0_103","type":"tuple"},{"internalType":"bool","name":"_Bidder_optIn0_103","type":"bool"}],"internalType":"struct T12","name":"elem1","type":"tuple"}],"internalType":"struct T13","name":"v4448","type":"tuple"}],"name":"_reachp_6","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T11","name":"v4506","type":"tuple"}],"name":"_reachp_7","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x6080601f196200401f38819003601f81018316840192916001600160401b0391858510838611176200060d57808692604096875283398101039161018083126200060857835192620000518462000623565b855184526020620000648188016200065c565b968186019788526101409081603f19850112620006085787519162000089836200063f565b620000968983016200065c565b8352606080958184015186860152607f19011262000608578851620000bb8162000623565b6080830151815260a08301518582015260c08301516001600160801b03198116810362000608578a8201528984015260e0820151858401526200010261010083016200065c565b608084015261012082015160a0840152810151906001600160601b03198216820362000608576101609160c0840152015160e08201528686019081524360035586519262000150846200063f565b6000938481528484820152848982015284828201528460808201526200017562000671565b60a0820152885189810181811089821117620005f4578a5285815284810186905260c082015260e001849052875191620001af8362000623565b620001b962000671565b835283830192620001c9620006a1565b84528981019a620001d9620006a1565b8c5260049460ff865416620005dd578b51923384528b518885015260018060a01b039b8d8d8551169086015262000215865188870190620006e8565b7f7fe1531437df65976607882ff66f7fd649d65b348c1f2ab052169b5e5ad098866101a08096a1518015908115620005d0575b5015620005b95788815152888882510152888d82510152518151525180518c8882015191015115158d51916200027e8362000623565b8a8352898301528d82015262000293620006a1565b91895b600181106200056c57505081528c523462000555578a519260a084018481108b82111762000542579b809d6200036c928d9e839e9c9d9e528a87528987019b8b8d5283880193805190620002ea826200063f565b8d82528d8d830152620002fc62000671565b908201528c8a8201528c60808201528c60a08201528c60c08201528c60e08201528452888801958c8752608089019862000335620006a1565b8a5233905251168c525182524384525185528d60019d8e808c5543905581519b8c8b339101525116908b015251858a0190620006e8565b51908701525190849089858c6101c08a015b8386106200051857505050505050506102008452610220840184811087821117620005055788528351958611620004f257600254908782811c92168015620004e7575b83831014620004d45750601f811162000488575b508093601f8611600114620004205750509183949184939462000414575b50501b916000199060031b1c1916176002555b5161388f9081620007908239f35b015192503880620003f3565b600283528183209493928692918316915b888383106200046d575050501062000453575b505050811b0160025562000406565b015160001960f88460031b161c1916905538808062000444565b85870151885590960195948501948793509081019062000431565b60028352818320601f870160051c810191838810620004c9575b601f0160051c019087905b828110620004bd575050620003d5565b848155018790620004ad565b9091508190620004a2565b634e487b7160e01b845260229052602483fd5b91607f1691620003c1565b634e487b7160e01b835260419052602482fd5b634e487b7160e01b845260418252602484fd5b8185928851805184528581015186850152015115159082015201940192019192858c8c926200037e565b634e487b7160e01b895260418752602489fd5b8a5163100960cb60e01b8152600c81870152602490fd5b62000578818362000767565b5162000585828662000767565b5262000592818562000767565b506000198114620005a65760010162000296565b634e487b7160e01b8b526011895260248bfd5b8c5163100960cb60e01b8152600b81890152602490fd5b9050600154143862000248565b8b5163100960cb60e01b8152600a81880152602490fd5b634e487b7160e01b87526041600452602487fd5b600080fd5b634e487b7160e01b600052604160045260246000fd5b606081019081106001600160401b038211176200060d57604052565b61010081019081106001600160401b038211176200060d57604052565b51906001600160a01b03821682036200060857565b60405190606082016001600160401b038111838210176200060d5760405260006040838281528260208201520152565b6040519060208083016001600160401b038111848210176200060d576040528260005b828110620006d157505050565b8290620006dd62000671565b8184015201620006c4565b60e06101209160018060a01b038082511685526020820151602086015260408201518051604087015260208101516060870152604060018060801b0319910151166080860152606082015160a086015260808201511660c085015260a08101518285015260018060601b031960c0820151166101008501520151910152565b906001811015620007795760051b0190565b634e487b7160e01b600052603260045260246000fdfe60806040526004361015610018575b361561001657005b005b60003560e01c80631e93b0f114610144578063232682ca1461013b57806329af2c6f146101325780632d2ae6eb146101295780632f1323021461012057806330dd5d081461011757806334d3e29e1461010e5780634a96cc0b14610105578063573b8510146100fc5780636f49e231146100f35780637d817cb9146100ea57806383230757146100e1578063ab53f2c6146100d8578063b6279224146100cf5763d2526fd90361000e576100ca610d4d565b61000e565b506100ca610cd1565b506100ca610c23565b506100ca610c04565b506100ca610b5b565b506100ca610b0d565b506100ca610872565b506100ca610818565b506100ca610799565b506100ca6104fe565b506100ca610307565b506100ca61028e565b506100ca6101d1565b506100ca610168565b5034610163576000366003190112610163576020600354604051908152f35b600080fd5b503461016357600036600319011261016357610182611030565b6005600054036101b85760206001916101aa61019c610eb0565b838082518301019101611144565b500152602060405160018152f35b60405163100960cb60e01b815260076004820152602490fd5b5060a0366003190112610163576101e6611030565b604051906101f382610ddc565b60043582526080366023190112610163576040519161021183610e04565b6024359260038410156101635761025e938152604435610230816110b2565b602082015261023e3661365c565b604082015260843561024f816110b2565b6060820152602082015261229c565b60405160008152602090f35b0390f35b919091604080606083019480518452602081015160208501520151910152565b506000366003190112610163576102a3610fda565b5061026a60a06102b1611030565b6102e8816102bd611899565b602081019060008251525115156020825101526102d8611899565b906000825251602082015261229c565b01516040519182918261026e565b602090600319011261016357600490565b5061025e610327610317366102f6565b61031f611030565b50369061367c565b61034261033d61033960045460ff1690565b1590565b6111dc565b7fa4850b05c9188495196ad609440a82393348559ec3e1eb1c2ab8d784a9e9d4016040518061037284338361369a565b0390a16103836006600054146111fc565b6103b26103a0610391610eb0565b602080825183010191016116df565b915180159081156104f2575b5061121c565b60e08101906103c4825143101561123c565b6103ce341561125c565b6103ea3360018060a01b036103e38451610c98565b161461127c565b6103f26121f9565b916104066104008351610c98565b84611a55565b61041f6104166020840151610c98565b60208501611a55565b60408201516040840152606082015160608401526080820151608084015261045661044d60a0840151610c98565b60a08501611a55565b61046f61046660c0840151611090565b60c0850161195e565b5160e083015261048f61010061048781840151610c98565b908401611a55565b6104a96101206104a181840151151590565b151590840152565b6104bb6101406104a181840151151590565b610160808201519083015261018043818401528101516101a09081840152810151906101c0918284015201516101e082015261305c565b905060015414386103ac565b5061050b610317366102f6565b610513611835565b61052a61052561033960045460ff1690565b61129c565b6040917f46f247599a5fa9114da586bc9a4d716618c03f0781a481e77299e07c647c124983518061055c84338361369a565b0390a160009061056f60058354146112bc565b610577610eb0565b6105a061058e602092838082518301019101611144565b9251801590811561078d575b506112dc565b610100916105b3838201514310156112fc565b6105bd341561131c565b60018060a01b03906105db33836105d48451610c98565b161461133c565b828101956105e98751610c98565b9061060e60608401926105fc8451610c98565b9060c086019687515151921690611f24565b8680808061062461061f8851610c98565b610c98565b60e088015190828215610784575bf115610777575b671858d8d95c1d195960c21b81525161065190611090565b90888301805161066090611090565b9260808501938451918c8c885161067690610c98565b875161068190610c98565b915161068c90610c98565b925195869561069b958761196e565b0360008051602061384383398151915291a16106b56119e3565b9884516106c190610c98565b6106cb908b611a55565b516106d590610c98565b6106e1908a8801611a55565b516106eb90611090565b6106f790898b0161195e565b5161070190610c98565b61070e9060608901611a55565b51608087015260a001511515151560a08601528360c08601524360e0860152519081518682820151910151151590610744610f5b565b8681529283015215158682015261075a9161208d565b9083015261012082015261076d906134b3565b5160008152602090f35b61077f611951565b610639565b506108fc610632565b9050600154143861059a565b506080366003190112610163576107ae611030565b604051906107bb82610ddc565b6004358252606036602319011261016357604051916107d983610e1f565b6024359260028410156101635761025e9381526044356107f8816110b2565b6020820152606435610809816110b2565b60408201526020820152611a64565b50600036600319011261016357602060e0610831611030565b6108668161083d611899565b858101906002825152511515606082510152610857611899565b9060008252518682015261229c565b01511515604051908152f35b5061087f610317366102f6565b61076d61088a611835565b6108a161089c61033960045460ff1690565b61135c565b610aee6040937fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee815968551806108d684338361369a565b0390a16108e760016000541461137c565b60806108f1610eb0565b9161091b6109096020948580825183010191016136b4565b91518015908115610b01575b5061139c565b61092534156113bc565b8281019461094461093f6109398851610c98565b336137a0565b6113dc565b6109603360018060a01b036109598551610c98565b16146113fc565b61096a3082611a55565b610a45610a3c898401927f1eae89863a79541354a2ba636700d14576515c2e3f765081c6947035ad8dd8248b8a6109ed8751926060840151936109ad8751610c98565b936109ba8d830151610c98565b6109c760c0840151611090565b848401519160e06109dd60a08701519551610c98565b950151955198899843918a61373b565b0390a1610a20610a186109fe6121f9565b9a610a12610a0c8951610c98565b8d611a55565b51610c98565b888b01611a55565b83518b8a01524360608a0152606084510151868a015251610c98565b60a08801611a55565b805160c00151610a63906001600160601b0319165b60c0880161195e565b610a7860608301918583519151015190613648565b60e0870152610a94610a8a8351610c98565b6101008801611a55565b60016101208701526001610140870152600061016087015243610180870152516101a08601520151610ae98151926001845101938882820151910151151591610adb610f5b565b958652850152151587840152565b61208d565b6101c082015260006101e082015261305c565b90506001541438610915565b5060003660031901126101635760206080610b26611030565b61086681610b326117eb565b858101906001825152511515604082510152610b4c6117eb565b90600082525186820152611a64565b50346101635760003660031901126101635761026a610bc66040610b7d611030565b6000546006811015610bd8576005610b95911461143c565b610bb7610bbe60a0610bb7610ba8610eb0565b60208082518301019101611144565b0151151590565b151582840152565b60405190151581529081906020820190565b6006610be4911461141c565b610bff6101e0610bf5610391610eb0565b0151151582840152565b610bb7565b5034610163576000366003190112610163576020600154604051908152f35b503461016357600080600319360112610c95578054610c40610eb0565b906040519283918252602090604082840152835191826040850152815b838110610c7e57505060608094508284010152601f80199101168101030190f35b808601820151878201606001528694508101610c5d565b80fd5b6001600160a01b031690565b6001600160a01b03169052565b81516001600160a01b031681526020918201519181019190915260400190565b50602036600319011261016357610ce6611017565b5061026a60c0610cf4611030565b610d3f81604051610d0481610ddc565b604051610d1081610e3a565b6000815281526020810190610d23611848565b82526004358151526001825152516040825101526102d8611899565b015160405191829182610cb1565b5060003660031901126101635760206060610d66611030565b61086681610d726117eb565b8581019060008251525115158682510152610b4c6117eb565b90600182811c92168015610dbb575b6020831014610da557565b634e487b7160e01b600052602260045260246000fd5b91607f1691610d9a565b50634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b03821117610df757604052565b610dff610dc5565b604052565b608081019081106001600160401b03821117610df757604052565b606081019081106001600160401b03821117610df757604052565b602081019081106001600160401b03821117610df757604052565b61010081019081106001600160401b03821117610df757604052565b61012081019081106001600160401b03821117610df757604052565b601f909101601f19168101906001600160401b03821190821017610df757604052565b6040519060008260025491610ec483610d8b565b808352600193808516908115610f3a5750600114610eec575b50610eea92500383610e8d565b565b6002600090815260008051602061382383398151915294602093509091905b818310610f22575050610eea935082010138610edd565b85548884018501529485019487945091830191610f0b565b9050610eea94506020925060ff191682840152151560051b82010138610edd565b60405190606082016001600160401b03811183821017610df757604052565b6040519061012082016001600160401b03811183821017610df757604052565b6040519061010082016001600160401b03811183821017610df757604052565b6040519061020082016001600160401b03811183821017610df757604052565b60405190606082016001600160401b0381118382101761100a575b60405260006040838281528260208201520152565b611012610dc5565b610ff5565b6040519061102482610ddc565b60006020838281520152565b6040519061103d82610e55565b8160e0600091828152826020820152826040820152826060820152826080820152611066610fda565b60a0820152611073611017565b60c08201520152565b51906001600160a01b038216820361016357565b6001600160601b03191690565b51906001600160601b03198216820361016357565b8015150361016357565b5190610eea826110b2565b9080601f83011215610163576040918251926110e284610e3a565b836060938484019381851161016357915b8483106111035750505050505090565b8583830312610163578351869161111982610e1f565b84518252602091828601518382015286860151611135816110b2565b878201528152019201916110f3565b6101608183031261016357610140906111c161115e610f7a565b936111688361107c565b85526111766020840161107c565b60208601526111876040840161109d565b60408601526111986060840161107c565b6060860152608083015160808601526111b360a084016110bc565b60a086015260c083016110c7565b60c084015261012081015160e0840152015161010082015290565b156111e357565b60405163100960cb60e01b815260276004820152602490fd5b1561120357565b60405163100960cb60e01b815260286004820152602490fd5b1561122357565b60405163100960cb60e01b815260296004820152602490fd5b1561124357565b60405163100960cb60e01b8152602a6004820152602490fd5b1561126357565b60405163100960cb60e01b8152602b6004820152602490fd5b1561128357565b60405163100960cb60e01b8152602c6004820152602490fd5b156112a357565b60405163100960cb60e01b815260196004820152602490fd5b156112c357565b60405163100960cb60e01b8152601a6004820152602490fd5b156112e357565b60405163100960cb60e01b8152601b6004820152602490fd5b1561130357565b60405163100960cb60e01b8152601c6004820152602490fd5b1561132357565b60405163100960cb60e01b8152601d6004820152602490fd5b1561134357565b60405163100960cb60e01b8152601e6004820152602490fd5b1561136357565b60405163100960cb60e01b8152600d6004820152602490fd5b1561138357565b60405163100960cb60e01b8152600e6004820152602490fd5b156113a357565b60405163100960cb60e01b8152600f6004820152602490fd5b156113c357565b60405163100960cb60e01b815260106004820152602490fd5b156113e357565b60405163100960cb60e01b815260116004820152602490fd5b1561140357565b60405163100960cb60e01b815260126004820152602490fd5b1561142357565b60405163100960cb60e01b815260096004820152602490fd5b1561144357565b60405163100960cb60e01b815260086004820152602490fd5b1561146357565b60405163100960cb60e01b815260136004820152602490fd5b1561148357565b60405163100960cb60e01b815260146004820152602490fd5b156114a357565b60405163100960cb60e01b815260156004820152602490fd5b156114c357565b60405163100960cb60e01b815260166004820152602490fd5b156114e357565b60405163100960cb60e01b815260186004820152602490fd5b1561150357565b60405163100960cb60e01b815260176004820152602490fd5b1561152357565b60405163100960cb60e01b8152601f6004820152602490fd5b1561154357565b60405163100960cb60e01b815260206004820152602490fd5b1561156357565b60405163100960cb60e01b815260216004820152602490fd5b1561158357565b60405163100960cb60e01b815260226004820152602490fd5b156115a357565b60405163100960cb60e01b815260266004820152602490fd5b156115c357565b602460405163100960cb60e01b8152816004820152fd5b156115e157565b60405163100960cb60e01b815260256004820152602490fd5b1561160157565b60405163100960cb60e01b815260236004820152602490fd5b91908260609103126101635760405161163281610e1f565b8251815260208084015190820152604090920151826001600160801b0319821682036101635760400152565b91909161014081840312610163576101209061169a61167b610f9a565b946116858361107c565b8652602083015160208701526040830161161a565b604085015260a081015160608501526116b560c0820161107c565b608085015260e081015160a08501526116d1610100820161109d565b60c0850152015160e0830152565b9061036082820312610163576117e46103406116f9610fba565b936117038161107c565b85526117116020820161107c565b6020860152611723846040830161165e565b6040860152610180938482015160608701526101a08083015160808801526117d06101c09261175384860161107c565b60a08a01526101e09761176789870161109d565b60c08b015261020086015160e08b0152611784610220870161107c565b6101008b015261179761024087016110bc565b6101208b01526117aa61026087016110bc565b6101408b01526102808601516101608b01526102a0860151908a01526102c085016110c7565b9087015261032082015190860152016110bc565b9082015290565b604051906117f882610ddc565b81600081526020611807610fda565b910152565b50634e487b7160e01b600052602160045260246000fd5b6002111561182d57565b610eea61180c565b6040519061184282610e3a565b60008252565b60405190608082016001600160401b0381118382101761188c575b604052600060608382815282602082015260405161188081610e3a565b83815260408201520152565b611894610dc5565b611863565b604051906118a682610ddc565b81600081526020611807611848565b6003111561182d57565b9092916040602060809260a085019660018060a01b03168552805182860152015180516002811015611905575b8285015260208101511515606085015201511515910152565b61190d61180c565b6118ec565b51600281101561191f5790565b61192761180c565b90565b90600181101561193b5760051b0190565b634e487b7160e01b600052603260045260246000fd5b506040513d6000823e3d90fd5b6001600160601b03199091169052565b6001600160601b031991821681529116602082015260408101919091526001600160a01b039182166060820152918116608083015290911660a082015260c00190565b604051906119be82610e3a565b8160005b602081106119ce575050565b6020906119d9610fda565b81840152016119c2565b6040519061014082016001600160401b03811183821017611a48575b604052816101206000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e0820152611a3e6119b1565b6101008201520152565b611a50610dc5565b6119ff565b6001600160a01b039091169052565b611a6c611017565b90611a84611a7f61033960045460ff1690565b61145c565b60407f109eb76f82f8872ff024177afedebf0c35323f0a478a1f78956f6ddd62aa1576815180611ab58533836118bf565b0390a1600092611ac8600585541461147c565b611ad0610eb0565b90611ae5602092838082518301019101611144565b611afa85518015908115611f18575b5061149c565b8261010095611b0d8784015143106114bc565b01611b188151611912565b611b2181611823565b611d175750611b3034156114fc565b82810196611b3e8851610c98565b926060830191611b6c611b518451610c98565b60c0860180515151909790916001600160a01b031690611f24565b88808080611b7d61061f8951610c98565b60e089015190828215611d0e575bf115611d01575b8651600181527f798546d0766a94a5283da0257e2258333c073083cdb7c6497be0514ced6219d590602090a1606001611bcb9060019052565b671858d8d95c1d195960c21b815251611be390611090565b908583018051611bf290611090565b9260808501938451918651611c0690610c98565b8d8651611c1290610c98565b9051611c1d90610c98565b918c51958695611c2d958761196e565b0360008051602061384383398151915291a1611c476119e3565b998451611c5390610c98565b611c5d908c611a55565b51611c6790610c98565b611c73908b8801611a55565b51611c7d90611090565b611c89908a880161195e565b51611c9390610c98565b611ca09060608a01611a55565b51608088015260a001511515151560a08701528460c08701524360e087015251918251908083830151920151151591611cd7610f5b565b8781529384015290151590820152611cee9161208d565b90830152610120820152610eea906134b3565b611d09611951565b611b92565b506108fc611b8b565b611d2360019151611912565b611d2c81611823565b14611d3b575b50505050505050565b611d4534156114dc565b8281019683611d548951610c98565b93611d62611b518551610c98565b88606085019381808080611d7961061f8a51610c98565b60e08b015190828215611f0f575bf115611f02575b8851600081527f2e12d916138cad594719c9eea533d17d8ea5c300b9d9f03a3cfc87f80bbad4a490602090a160800152671c995a9958dd195960c21b9101819052611dd890611090565b908583018051611de790611090565b9260808501938451918651611dfb90610c98565b8d8651611e0790610c98565b9051611e1290610c98565b918c51958695611e22958761196e565b0360008051602061384383398151915291a1611e3c6119e3565b998451611e4890610c98565b611e52908c611a55565b51611e5c90610c98565b611e68908b8801611a55565b51611e7290611090565b611e7e908a880161195e565b51611e8890610c98565b611e959060608a01611a55565b51608088015260a001511515151560a08701528460c08701524360e087015251918251908083830151920151151591611ecc610f5b565b8781529384015290151590820152611ee39161208d565b90830152610120820152611ef6906134b3565b38808080808080611d32565b611f0a611951565b611d8e565b506108fc611d87565b90506001541438611af4565b60405163a9059cbb60e01b602082019081526001600160a01b039384166024830152604480830195909552938152611fa093600093849392849190608081016001600160401b03811182821017611fa7575b6040525193165af1611f90611f89611fb4565b8092612016565b5060208082518301019101612001565b1561016357565b611faf610dc5565b611f76565b3d15611ffc573d906001600160401b038211611fef575b60405191611fe3601f8201601f191660200184610e8d565b82523d6000602084013e565b611ff7610dc5565b611fcb565b606090565b908160209103126101635751611927816110b2565b1561201e5790565b80511561202d57805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b1561204e5790565b80511561205d57805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b50634e487b7160e01b600052601160045260246000fd5b91906120976119b1565b9260005b600181106120a95750508252565b806120b66001928461192a565b516120c1828861192a565b526120cc818761192a565b5060001981146120dd575b0161209b565b6120e5612076565b6120d7565b604051906120f782610e71565b600080835261010083612108610fda565b602082015260405161211981610e3a565b838152604082015282606082015261212f611017565b60808201528260a08201528260c08201528260e08201520152565b9092916060602060a09260c0850196600180861b0316855280518286015201518051600381101561219a575b60408501526020810151151582850152604081015151608085015201511515910152565b6121a261180c565b612176565b51600381101561191f5790565b604051906121c182610e55565b8160e06000918281528260208201526121d8610fda565b60408201528260608201528260808201528260a08201528260c08201520152565b612201610fba565b9060008083528060208401526122156121b4565b60408401528060608401528060808401528060a08401528060c08401528060e08401528061010084015280610120840152806101408401528061016084015280610180840152806101a084015261226a6119b1565b6101c08401526101e0830152565b6001600160601b031990911681526020810191909152604081019190915260600190565b6122a46120ea565b906122bc6122b761033960045460ff1690565b61151c565b6040917fea1ef57ffeb28c3bb191acd0b9792f27e3b53cede1d9ce1352affc2ed1bf892d8351806122ee85338361214a565b0390a1600092612301600685541461153c565b612309610eb0565b9361231e6020958680825183010191016116df565b9361233481518015908115612cca575b5061155c565b60e09086828701916123488351431061157c565b019761235489516121a7565b61235d816118b5565b6124fa57610eea985061237034156115fa565b69656e645375636365737360b01b865261238a8651611090565b94608088019160a08351986000805160206138638339815191526101609a8b8d019a6123bc8c51885193849384612278565b0390a18b8551910190815152438c82510152885184825101527fd43e87ee189f77671a03f32866995d6ec005f361ffe0a68cde81b46a6b219faa612406825186519182918261026e565b0390a1519101526124406124186121f9565b9961242c6124268b51610c98565b8c611a55565b612438818b0151610c98565b908b01611a55565b80880151908901526060870151606089015251608088015261247161246860a0880151610c98565b60a08901611a55565b61248a61248160c0880151611090565b60c0890161195e565b51908601526124a96101006124a181870151610c98565b908701611a55565b6124c36101206124bb81870151151590565b151590870152565b610140850152519083015261018043818401528101516101a09081840152810151906101c0918284015201516101e082015261305c565b9290959397600161250e82999799516121a7565b612517816118b5565b03612879578880899251015193818301948086525198610160968789019a8b5110612541906115bc565b6101c0998a8a01519b88519c8d51019c606088019d8e52513414612564906115da565b61010095868c0197885161257790610c98565b906080019081519061258891611a55565b825184825101528051825161259e819282610cb1565b037f448764dec2e9061f1e280ed755bc7e51bf4190bc507817b47ad18a7a95a9a8b091a15160c08095015261012097888d01516125da90151590565b1561271557505050908092939495969798999a9b9c0161260681696269645375636365737360b01b9052565b5161261090611090565b908d60808c01928351908b5151925192839261262c9284612278565b0360008051602061386383398151915291a16126466121f9565b9d8e918c5161265490610c98565b61265e9084611a55565b808d015161266b90610c98565b612676918401611a55565b808c01519101528c60608b015190606001525160808d015260a089015161269c90610c98565b6126a99060a08e01611a55565b808901516126b690611090565b6126c1918d0161195e565b51908a01526126d39033908a01611a55565b8701526101408381015115151515908701525151908501526101804381860152810151906101a09182860152015190830152516101e0820152610eea9061305c565b9e829f8a808060a0959661272d61061f839651610c98565b905190828215612870575bf115612863575b696269645375636365737360b01b910181905261275b90611090565b9060808c01918251908b515192519283926127769284612278565b0360008051602061386383398151915291a16127906121f9565b9e8f928c5161279e90610c98565b6127a89085611a55565b808d01516127b590610c98565b6127c0918501611a55565b808c01519083015260608b015160608301525190608001528c60a08a01516127e790610c98565b6127f39160a001611a55565b8089015161280090611090565b61280b918e0161195e565b51908b015261281d9033908b01611a55565b8801526101408381015115151515908801525151908601526101804381870152810151906101a0918287015201519084015251905190036101e0820152610eea9061305c565b61286b611951565b61273f565b506108fc612738565b61288d6002919992979394969899516121a7565b612896816118b5565b146128a6575b5050505050505050565b620f42406101c0956128c582888801510192868c01938452341461159c565b8151620dbba09290838110612b375750620dbb9f1990510197610100809b0198895280808080878b019661290461061f895160018060a01b0390511690565b82f115612b2a575b8851620186a0908111612a8b5786612a0d9795938380612a719f9997958061297c9661293c8f61061f9051610c98565b82f115612a7e575b8451600181527f8df3d95a79b25c3b0d9bff1853e95638bc27441008a9be5a0cb477a0acca690c9080602081015b0390a10160019052565b6129a96129876121f9565b9a612995610a0c8a51610c98565b6129a1818a0151610c98565b908c01611a55565b519089015260608501516060890152608085015160808901526129db6129d260a0870151610c98565b60a08a01611a55565b6129f46129eb60c0870151611090565b60c08a0161195e565b5190870152612a0581840151610c98565b908601611a55565b612a27610120612a1f81840151151590565b151590860152565b612a39610140612a1f81840151151590565b61016080820151908501526101804381860152810151906101a091828601520151908301526201869f199051016101e082015261305c565b388080808080808061289c565b612a86611951565b612944565b505091612b2599939161297c86612ad097957fb695a4594d95d9b78dede51a16b432db6f25d9a545eccd7f6d4d72b707f877b285518061297281906001602083019252565b612ae2610120612a1f81840151151590565b612af4610140612a1f81840151151590565b61016080820151908501526101804381860152810151906101a09182860152015190830152516101e082015261305c565b612a71565b612b32611951565b61290c565b919a50979150620186a0908111612c2f57612b2599828080612b9c958995612b6261061f8d51610c98565b82f115612c22575b8351600181527fb163b00769d080e48cb15e61e54fa6606cd8b96f0d471e3d0424423f319671d8908060208101612972565b612bcf612ba76121f9565b97612bbb612bb58751610c98565b8a611a55565b612bc781870151610c98565b908901611a55565b80840151908701526060830151606087015260808301516080870152612bfb610a3c60a0850151610c98565b612c0b610a5a60c0850151611090565b5190850152612a0d610100612a0581840151610c98565b612c2a611951565b612b6a565b5050612c6c83612b25997f32f2b1fea56bb66ad1fc5451734416b36f4612d1f5618bb4757ddce73a01e95f84518061297281906001602083019252565b612c77612ba76121f9565b80840151908701526060830151606087015260808301516080870152612ca3610a3c60a0850151610c98565b612cb3610a5a60c0850151611090565b5190850152612ad0610100612a0581840151610c98565b9050600154143861232e565b612cde610fba565b906000808352806020840152612cf26121b4565b60408401528060608401528060808401528060a08401528060c08401528060e08401528061010084015280610120840152806101408401528061016084015280610180840152612d406119b1565b6101a0840152806101c08401526101e0830152565b80518252602080820151908301526040908101516001600160801b031916910152565b60e06101209160018060a01b0380825116855260208201516020860152612da760408301516040870190612d55565b606082015160a086015260808201511660c085015260a08101518285015260018060601b031960c0820151166101008501520151910152565b6000915b60018310612df157505050565b600190606083519182518152602092838101518483015260408091015115159082015201920192019190612de4565b610eea90929192610340610360820194612e3b838251610ca4565b612e4d60208201516020850190610ca4565b612e5f60408201516040850190612d78565b606081015190610180918285015260808101516101a09081860152612f0b60a083015191612e936101c09384890190610ca4565b60c08401516001600160601b0319166101e0888101919091529460e0850151610200890152612ecc6101008601516102208a0190610ca4565b610120850151151561024089015261014085015115156102608901526101608501516102808901528401516102a08801528301516102c0870190612de0565b81015161032085015201511515910152565b818110612f28575050565b60008155600101612f1d565b90601f8211612f41575050565b610eea9160026000526020600020906020601f840160051c83019310612f6f575b601f0160051c0190612f1d565b9091508190612f62565b80519091906001600160401b03811161304f575b612fa181612f9c600254610d8b565b612f34565b602080601f8311600114612fdd5750819293600092612fd2575b50508160011b916000199060031b1c191617600255565b015190503880612fbb565b6002600052601f19831694909190600080516020613823833981519152926000905b87821061303757505083600195961061301e575b505050811b01600255565b015160001960f88460031b161c19169055388080613013565b80600185968294968601518155019501930190612fff565b613057610dc5565b612f8d565b613064611017565b60e0820180516101a080850151919091108084529192909160009015613355575061014084015115155b156131c457506131b19161318f610eea946131bf936130ab612cd6565b936130bf6130b98451610c98565b86611a55565b6130d86130cf6020850151610c98565b60208701611a55565b60408301516040860152606083015160608601526080830151608086015261310f61310660a0850151610c98565b60a08701611a55565b61312861311f60c0850151611090565b60c0870161195e565b5160e0850152613140610100612a0581850151610c98565b613152610120612a1f81850151151590565b6001610140850152610160808301519085015261018080830151908501526101c09081830151908501526101e08092015190840152820160019052565b6131996006600055565b6131a243600155565b60405192839160208301612e20565b03601f198101835282610e8d565b612f79565b9150506101e0610eea926131eb602084016131e581633237bbb760e11b9052565b51611090565b7f357c94579deebb86dae97569dd270d5562f0a208d6b4874cfcc80bb87d54176d608083015161016084019261328484516132268751610c98565b61323360a0890151610c98565b606089810151604080516001600160601b031990981688526020880198909852968601939093526001600160a01b039182169285019290925216608083015260a082019290925290819060c0820190565b0390a16133006132926119e3565b946132a66132a08551610c98565b87611a55565b6132bf6132b66020860151610c98565b60208801611a55565b6132d86132cf60c0860151611090565b6040880161195e565b610100926132f46132eb85870151610c98565b60608901611a55565b51608087015251151590565b6000901561334c575061332361331a610140840151151590565b151560a0860152565b600160c085015261018082015160e08501526101c08201519084015201516101208201526134b3565b6133239061331a565b61308e565b613365600254610d8b565b8061336d5750565b601f811160011461338057506000600255565b60026000526133c590601f0160051c600080516020613823833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf612f1d565b6000602081208160025555565b604051906133df82610e71565b816101006000918281528260208201528260408201528260608201528260808201528260a082015261340f6119b1565b60c08201528260e08201520152565b81516001600160a01b0316815260208083015161016083019493610140926101009261344c91860190610ca4565b6040818101516001600160601b0319169085015261347260608201516060860190610ca4565b6080810151608085015261348f60a082015160a086019015159052565b6134a160c082015160c0860190612de0565b60e08101516101208501520151910152565b6134bb611835565b60c082015115613598576131bf6131b191836134dd60e0610eea960151613625565b82526134e76133d2565b916134f56104008351610c98565b6135056104166020840151610c98565b61351e6135156040840151611090565b6040850161195e565b61353761352e6060840151610c98565b60608501611a55565b6080820151608084015261355a61355160a0840151151590565b151560a0850152565b610120610100928381015160c0860152015160e084015251908201526135806005600055565b61358943600155565b6040519283916020830161341e565b5060008080836135d66135af602084970151610c98565b6135bc6060840151610c98565b6101008401515151916001600160a01b0390911690611f24565b6101206135e661061f8351610c98565b9101519082821561361c575bf11561360f575b600080556136076000600155565b610eea61335a565b613617611951565b6135f9565b506108fc6135f2565b90603282019182811161363b575b821061016357565b613643612076565b613633565b919082019182811161363b57821061016357565b6020906063190112610163576040519061367582610e3a565b6064358252565b91908260209103126101635760405161369481610e3a565b91358252565b6001600160a01b0390911681529051602082015260400190565b9061020082820312610163576040519161372691906101a09060a085016001600160401b0381118682101761372e575b6040526136f08161107c565b85526136fe6020820161107c565b6020860152613710836040830161165e565b60408601526101808101516060860152016110c7565b608082015290565b613736610dc5565b6136e4565b9081526001600160a01b039182166020820152604081019290925291821660608201526001600160601b0319909216608083015261016082019695946101409492939192909161378f9060a0860190612d55565b610100840152166101208201520152565b6040516323b872dd60e01b602082019081526001600160a01b0392831660248301523060448301526001606480840191909152825261192793600093849391929184919060a081016001600160401b03811182821017613815575b6040525193165af1611f9061380e611fb4565b8092612046565b61381d610dc5565b6137fb56fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace543cb95dd81154d567510afb182f8995b596950b4795b12737cf59283102e666acf14236eb0aafe887aa56af00dd77d2c3e62c8620f2878747fe2ef6e848cd21a164736f6c6343000810000a`,
  BytecodeLen: 16415,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './src/contracts/auction.rsh:63:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './src/contracts/auction.rsh:216:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './src/contracts/auction.rsh:152:48:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './src/contracts/auction.rsh:82:83:after expr stmt semicolon',
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
